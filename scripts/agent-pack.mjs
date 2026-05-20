import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const catalogPath = join(root, 'catalog.json');
const skillsRoot = join(root, 'skills');

const flatSkillTools = new Set(['openclaw', 'codex', 'claude-code', 'generic-agent']);
const supportedTools = new Set(['hermes', 'openclaw', 'codex', 'claude-code', 'cursor', 'generic-agent']);

const categoryLabels = {
  'career-learning': 'Career Learning',
  'daily-practice': 'Daily Practice',
  examples: 'Design Examples',
  'exam-prep': 'Exam Prep',
  'family-education': 'Family Education',
  'language-learning': 'Language Learning',
  'learning-core': 'Learning Core',
  'reading-writing': 'Reading & Writing',
  'teacher-tools': 'Teacher Tools',
  'textbook-sync': 'Textbook Sync',
};

function usage() {
  console.log(`Hermes Edu Skills Agent Pack

Usage:
  node scripts/agent-pack.mjs install --tool <hermes|openclaw|codex|claude-code|cursor|generic-agent> [options]
  node scripts/agent-pack.mjs convert --tool <openclaw|codex|claude-code|cursor|generic-agent> --target <path> [options]

Compatibility aliases:
  node scripts/agent-pack.mjs install-hermes --config <path> [--dry-run]
  node scripts/agent-pack.mjs install-openclaw [--target <path> | --workspace <path>] [--dry-run]
  node scripts/agent-pack.mjs export --target <path> [--format agent-skills|openclaw|codex|claude-code|cursor|flat] [--dry-run]

Examples:
  npm run agent:install -- --tool hermes --config ~/.hermes/config.yaml
  npm run agent:install -- --tool hermes --skill agent-study-plan --config ~/.hermes/config.yaml
  npm run agent:install -- --tool openclaw
  npm run agent:install -- --tool openclaw --skill primary-math-mental-arithmetic
  npm run agent:install -- --tool codex
  npm run agent:install -- --tool claude-code --workspace .
  npm run agent:install -- --tool cursor --workspace /path/to/project
  npm run agent:convert -- --tool openclaw --target ./dist/openclaw-skills
  npm run agent:convert -- --tool generic-agent --skill agent-study-plan --target ./dist/one-skill

Options:
  --category <name>       Export only one category. Can be used multiple times or comma-separated.
  --config <path>         Hermes config path.
  --include-examples      Include doc_only example Skills.
  --skill <slug>          Export/install only selected Skill slug/name. Can be used multiple times or comma-separated.
  --target <path>         Destination directory.
  --workspace <path>      Project/workspace directory for project-scoped installs.
  --dry-run               Print actions without writing files.
`);
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const args = {
    command,
    categories: [],
    config: '',
    dryRun: false,
    format: '',
    includeExamples: false,
    skills: [],
    target: '',
    tool: '',
    workspace: '',
  };

  for (let index = 0; index < rest.length; index += 1) {
    const arg = rest[index];
    const readValue = () => {
      const value = rest[index + 1];
      if (!value || value.startsWith('--')) throw new Error(`${arg} requires a value.`);
      index += 1;
      return value;
    };

    if (arg === '--category') {
      args.categories.push(...readValue().split(',').map((item) => item.trim()).filter(Boolean));
    } else if (arg.startsWith('--category=')) {
      args.categories.push(...arg.slice('--category='.length).split(',').map((item) => item.trim()).filter(Boolean));
    } else if (arg === '--config') {
      args.config = readValue();
    } else if (arg.startsWith('--config=')) {
      args.config = arg.slice('--config='.length);
    } else if (arg === '--dry-run') {
      args.dryRun = true;
    } else if (arg === '--format') {
      args.format = readValue();
    } else if (arg.startsWith('--format=')) {
      args.format = arg.slice('--format='.length);
    } else if (arg === '--include-examples') {
      args.includeExamples = true;
    } else if (arg === '--skill') {
      args.skills.push(...readValue().split(',').map((item) => item.trim()).filter(Boolean));
    } else if (arg.startsWith('--skill=')) {
      args.skills.push(...arg.slice('--skill='.length).split(',').map((item) => item.trim()).filter(Boolean));
    } else if (arg === '--target') {
      args.target = readValue();
    } else if (arg.startsWith('--target=')) {
      args.target = arg.slice('--target='.length);
    } else if (arg === '--tool') {
      args.tool = readValue();
    } else if (arg.startsWith('--tool=')) {
      args.tool = arg.slice('--tool='.length);
    } else if (arg === '--workspace') {
      args.workspace = readValue();
    } else if (arg.startsWith('--workspace=')) {
      args.workspace = arg.slice('--workspace='.length);
    } else if (arg === '--help' || arg === '-h') {
      args.command = 'help';
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return args;
}

function homeDir() {
  const home = process.env.HOME || process.env.USERPROFILE;
  if (!home) throw new Error('Cannot resolve home directory. Pass --target explicitly.');
  return home;
}

function expandHome(path) {
  if (!path.startsWith('~')) return path;
  if (path === '~') return homeDir();
  if (path.startsWith('~/') || path.startsWith('~\\')) return join(homeDir(), path.slice(2));
  return path;
}

function normalizePathForConfig(path) {
  return resolve(expandHome(path)).replace(/\\/g, '/');
}

function normalizeRelativePath(path) {
  return path.replace(/\\/g, '/');
}

function readCatalog() {
  return JSON.parse(readFileSync(catalogPath, 'utf8'));
}

function selectedSkills(args) {
  const catalog = readCatalog();
  const categories = new Set(args.categories);
  const requestedSkills = new Set(args.skills);
  const selected = catalog.skills.filter((skill) => {
    if (!args.includeExamples && skill.exportMode === 'doc_only') return false;
    if (categories.size > 0 && !categories.has(skill.category)) return false;
    if (requestedSkills.size > 0 && !requestedSkills.has(skill.slug) && !requestedSkills.has(skill.name)) return false;
    return true;
  });

  if (requestedSkills.size > 0) {
    const matched = new Set(selected.flatMap((skill) => [skill.slug, skill.name]));
    const missing = [...requestedSkills].filter((name) => !matched.has(name));
    if (missing.length) {
      const examples = catalog.skills
        .filter((skill) => skill.slug.includes(missing[0]) || skill.name.includes(missing[0]))
        .slice(0, 5)
        .map((skill) => skill.slug);
      throw new Error(`Skill not found or filtered out: ${missing.join(', ')}${examples.length ? `. Similar: ${examples.join(', ')}` : ''}`);
    }
  }

  if (selected.length === 0) throw new Error('No Skills matched the provided filters.');
  return selected;
}

function ensureTool(tool) {
  if (!tool) throw new Error('Missing --tool. Supported tools: hermes, openclaw, codex, claude-code, cursor, generic-agent.');
  if (!supportedTools.has(tool)) throw new Error(`Unsupported tool: ${tool}`);
  return tool;
}

function defaultFlatTarget(tool, args) {
  if (args.target) return args.target;
  if (args.workspace) {
    const workspace = resolve(expandHome(args.workspace));
    if (tool === 'claude-code') return join(workspace, '.claude', 'skills');
    return join(workspace, 'skills');
  }
  if (tool === 'openclaw') return join(homeDir(), '.openclaw', 'skills');
  if (tool === 'codex') return join(process.env.CODEX_HOME || join(homeDir(), '.codex'), 'skills');
  if (tool === 'claude-code') return join(homeDir(), '.claude', 'skills');
  if (tool === 'generic-agent') return join(process.cwd(), 'dist', 'agent-skills');
  throw new Error(`No default flat target for ${tool}`);
}

function defaultHermesSelectedTarget(args) {
  if (args.target) return args.target;
  return join(homeDir(), '.hermes', 'skills', 'hermes-edu-skills');
}

function cursorTargets(args) {
  const workspace = resolve(expandHome(args.workspace || process.cwd()));
  const ruleRoot = args.target ? resolve(expandHome(args.target)) : join(workspace, '.cursor', 'rules');
  const packRoot = join(dirname(ruleRoot), 'hermes-edu-skills');
  return { packRoot, ruleRoot, workspace };
}

function ensureSafeTarget(target) {
  const resolved = resolve(expandHome(target));
  const unsafe = new Set([root, skillsRoot, resolve(root, '..')]);
  if (unsafe.has(resolved)) throw new Error(`Refusing to write into unsafe target: ${resolved}`);
  return resolved;
}

function writeJson(path, value, dryRun) {
  if (dryRun) {
    console.log(`[dry-run] write ${path}`);
    return;
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function copySkillFile(source, destination, dryRun) {
  if (dryRun) {
    console.log(`[dry-run] copy ${source} -> ${destination}`);
    return;
  }
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { force: true });
}

function copyFlatSkills(target, tool, skills, args) {
  const resolvedTarget = ensureSafeTarget(target);
  const catalog = readCatalog();
  const entries = [];

  for (const skill of skills) {
    const source = join(root, skill.path);
    const skillDir = join(resolvedTarget, skill.name);
    const destination = join(skillDir, 'SKILL.md');
    entries.push({
      category: skill.category,
      name: skill.name,
      path: `${skill.name}/SKILL.md`,
      sourcePath: skill.path,
      title: skill.title,
    });
    copySkillFile(source, destination, args.dryRun);
  }

  writeJson(
    join(resolvedTarget, 'AGENT_SKILL_PACK.json'),
    {
      name: 'hermes-edu-skills',
      version: catalog.version,
      format: tool,
      generatedAt: new Date().toISOString(),
      skillCount: entries.length,
      skills: entries,
    },
    args.dryRun,
  );

  console.log(`[hermes-edu-skills] ${args.dryRun ? 'prepared' : 'exported'} ${entries.length} ${tool} skills -> ${resolvedTarget}`);
}

function copyCursorPack(args) {
  const { packRoot, ruleRoot, workspace } = cursorTargets(args);
  const resolvedPackRoot = ensureSafeTarget(packRoot);
  const skills = selectedSkills(args);
  const catalog = readCatalog();
  const entries = [];
  const skillsByCategory = new Map();

  for (const skill of skills) {
    const source = join(root, skill.path);
    const destination = join(resolvedPackRoot, skill.path);
    const relativePath = normalizeRelativePath(relative(workspace, destination));
    entries.push({
      category: skill.category,
      name: skill.name,
      path: relativePath,
      sourcePath: skill.path,
      title: skill.title,
    });
    if (!skillsByCategory.has(skill.category)) skillsByCategory.set(skill.category, []);
    skillsByCategory.get(skill.category).push({ ...skill, cursorPath: relativePath });
    copySkillFile(source, destination, args.dryRun);
  }

  writeJson(
    join(resolvedPackRoot, 'AGENT_SKILL_PACK.json'),
    {
      name: 'hermes-edu-skills',
      version: catalog.version,
      format: 'cursor',
      generatedAt: new Date().toISOString(),
      skillCount: entries.length,
      skills: entries,
    },
    args.dryRun,
  );

  for (const [category, categorySkills] of skillsByCategory.entries()) {
    const label = categoryLabels[category] || category;
    const lines = [
      '---',
      `description: Use Hermes Edu Skills for ${label} education-agent tasks.`,
      'globs: **/*',
      'alwaysApply: false',
      '---',
      '',
      `# Hermes Edu Skills: ${label}`,
      '',
      'Use this rule when the user asks for China-focused education-agent help in this category.',
      'Before answering, inspect the relevant `SKILL.md` file below and follow its workflow, invocation signals, parameters, and safety notes.',
      '',
      'Available Skills:',
      ...categorySkills.map((skill) => `- ${skill.title || skill.name}: \`${skill.cursorPath}\``),
      '',
      'If a request needs grade, semester, unit, lesson, knowledge point, scenario, or difficulty, ask for it or infer it from context.',
    ];
    const rulePath = join(ruleRoot, `hermes-edu-${category}.mdc`);
    if (args.dryRun) {
      console.log(`[dry-run] write ${rulePath}`);
    } else {
      mkdirSync(dirname(rulePath), { recursive: true });
      writeFileSync(rulePath, `${lines.join('\n')}\n`, 'utf8');
    }
  }

  console.log(`[hermes-edu-skills] ${args.dryRun ? 'prepared' : 'exported'} ${entries.length} Cursor skills -> ${resolvedPackRoot}`);
  console.log(`[hermes-edu-skills] Cursor rules -> ${resolve(ruleRoot)}`);
}

function installHermes(args) {
  const hasSelection = args.skills.length > 0 || args.categories.length > 0 || args.includeExamples;
  const selectedRoot = hasSelection ? ensureSafeTarget(defaultHermesSelectedTarget(args)) : skillsRoot;

  if (hasSelection) {
    copyFlatSkills(selectedRoot, 'hermes', selectedSkills(args), args);
  }

  const skillsDir = normalizePathForConfig(selectedRoot);

  if (!args.config) {
    console.log('Add this to your Hermes config.yaml:');
    console.log('');
    console.log('skills:');
    console.log('  external_dirs:');
    console.log(`    - ${skillsDir}`);
    return;
  }

  const configPath = resolve(expandHome(args.config));
  let content = existsSync(configPath) ? readFileSync(configPath, 'utf8') : '';

  if (content.includes(skillsDir)) {
    console.log(`[hermes-edu-skills] Hermes config already contains ${skillsDir}`);
    return;
  }

  if (!content.trim()) {
    content = `skills:\n  external_dirs:\n    - ${skillsDir}\n`;
  } else if (/^skills:\s*$/m.test(content) && !/^\s*external_dirs:\s*$/m.test(content)) {
    content = content.replace(/^skills:\s*$/m, `skills:\n  external_dirs:\n    - ${skillsDir}`);
  } else if (/^\s*external_dirs:\s*$/m.test(content)) {
    content = content.replace(/^(\s*)external_dirs:\s*$/m, `$1external_dirs:\n$1  - ${skillsDir}`);
  } else {
    content = `${content.trimEnd()}\n\nskills:\n  external_dirs:\n    - ${skillsDir}\n`;
  }

  if (args.dryRun) {
    console.log(`[dry-run] update ${configPath}`);
    console.log('');
    console.log(content);
    return;
  }

  mkdirSync(dirname(configPath), { recursive: true });
  writeFileSync(configPath, content, 'utf8');
  console.log(`[hermes-edu-skills] updated Hermes config: ${configPath}`);
  console.log(`[hermes-edu-skills] skills external dir: ${skillsDir}`);
}

function installTool(args) {
  const tool = ensureTool(args.tool);
  if (tool === 'hermes') {
    installHermes(args);
  } else if (tool === 'cursor') {
    copyCursorPack(args);
  } else if (flatSkillTools.has(tool)) {
    copyFlatSkills(defaultFlatTarget(tool, args), tool, selectedSkills(args), args);
  } else {
    throw new Error(`Install is not implemented for ${tool}`);
  }
}

function convertTool(args) {
  const tool = ensureTool(args.tool || args.format);
  if (tool === 'hermes') throw new Error('Hermes does not need conversion. Use install --tool hermes.');
  if (tool === 'cursor') {
    if (!args.target && !args.workspace) throw new Error('Cursor conversion requires --target <rules-dir> or --workspace <project-dir>.');
    copyCursorPack(args);
  } else if (flatSkillTools.has(tool)) {
    if (!args.target) throw new Error('convert requires --target <path>.');
    copyFlatSkills(args.target, tool, selectedSkills(args), args);
  } else {
    throw new Error(`Convert is not implemented for ${tool}`);
  }
}

try {
  const args = parseArgs(process.argv.slice(2));
  if (!args.command || args.command === 'help') {
    usage();
  } else if (args.command === 'install') {
    installTool(args);
  } else if (args.command === 'convert') {
    convertTool(args);
  } else if (args.command === 'install-hermes') {
    installHermes(args);
  } else if (args.command === 'install-openclaw') {
    installTool({ ...args, tool: 'openclaw' });
  } else if (args.command === 'export') {
    convertTool({ ...args, tool: args.format || 'generic-agent' });
  } else {
    throw new Error(`Unknown command: ${args.command}`);
  }
} catch (error) {
  console.error(`[hermes-edu-skills] ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
