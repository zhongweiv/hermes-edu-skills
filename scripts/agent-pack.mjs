#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const catalogPath = join(root, 'catalog.json');
const skillsRoot = join(root, 'skills');

const flatSkillTools = new Set(['openclaw', 'codex', 'claude-code', 'generic-agent']);
const supportedTools = new Set(['hermes', 'openclaw', 'codex', 'claude-code', 'cursor', 'generic-agent']);
const commandAliases = {
  add: 'install',
  convert: 'convert',
  export: 'export',
  help: 'help',
  i: 'install',
  info: 'info',
  install: 'install',
  list: 'list',
  ls: 'list',
  search: 'search',
};

const toolAliases = {
  claude: 'claude-code',
  'claude-code': 'claude-code',
  codex: 'codex',
  cursor: 'cursor',
  generic: 'generic-agent',
  'generic-agent': 'generic-agent',
  hermes: 'hermes',
  openclaw: 'openclaw',
};

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

const categoryAliases = {
  career: 'career-learning',
  'career-education': 'career-learning',
  'career-learning': 'career-learning',
  'adult-learning': 'career-learning',
  '成人与职业学习': 'career-learning',
  '成人学习': 'career-learning',
  '职业学习': 'career-learning',
  '职业教育': 'career-learning',
  daily: 'daily-practice',
  'daily-practice': 'daily-practice',
  practice: 'daily-practice',
  '每日练习': 'daily-practice',
  '每日训练': 'daily-practice',
  examples: 'examples',
  example: 'examples',
  'design-examples': 'examples',
  '设计参考': 'examples',
  'exam-prep': 'exam-prep',
  exam: 'exam-prep',
  exams: 'exam-prep',
  '考试备考': 'exam-prep',
  '备考复习': 'exam-prep',
  'family-education': 'family-education',
  family: 'family-education',
  '家庭教育': 'family-education',
  '亲子陪学': 'family-education',
  'language-learning': 'language-learning',
  language: 'language-learning',
  '语言学习': 'language-learning',
  '英语学习': 'language-learning',
  'learning-core': 'learning-core',
  core: 'learning-core',
  learning: 'learning-core',
  '学习核心能力': 'learning-core',
  '学习核心': 'learning-core',
  '通用学习': 'learning-core',
  'reading-writing': 'reading-writing',
  writing: 'reading-writing',
  reading: 'reading-writing',
  '阅读写作': 'reading-writing',
  '读写表达': 'reading-writing',
  'teacher-tools': 'teacher-tools',
  teaching: 'teacher-tools',
  teacher: 'teacher-tools',
  '老师工具': 'teacher-tools',
  '教师工具': 'teacher-tools',
  '教师教学': 'teacher-tools',
  'textbook-sync': 'textbook-sync',
  textbook: 'textbook-sync',
  'textbook-syncing': 'textbook-sync',
  '教材同步': 'textbook-sync',
  '同步教材': 'textbook-sync',
};

function usage() {
  console.log(`Hermes Edu Skills Agent Pack

Usage:
  hermes-edu-skills install <hermes|openclaw|codex|claude|cursor|generic> [skill-or-category] [options]
  hermes-edu-skills export <openclaw|codex|claude|cursor|generic> [skill-or-category] [options]
  hermes-edu-skills list [category]
  hermes-edu-skills search <keyword>
  hermes-edu-skills info <skill>

Source-mode usage:
  node scripts/agent-pack.mjs install --tool <hermes|openclaw|codex|claude-code|cursor|generic-agent> [options]
  node scripts/agent-pack.mjs convert --tool <openclaw|codex|claude-code|cursor|generic-agent> --target <path> [options]

Compatibility aliases:
  node scripts/agent-pack.mjs install-hermes --config <path> [--dry-run]
  node scripts/agent-pack.mjs install-openclaw [--target <path> | --workspace <path>] [--dry-run]
  node scripts/agent-pack.mjs export --target <path> [--format agent-skills|openclaw|codex|claude-code|cursor|flat] [--dry-run]

Examples:
  npx hermes-edu-skills install hermes --config ~/.hermes/config.yaml
  npx hermes-edu-skills install hermes agent-study-plan --config ~/.hermes/config.yaml
  npx hermes-edu-skills install openclaw textbook-sync
  npx hermes-edu-skills install codex agent-socratic-tutor
  npx hermes-edu-skills install claude --workspace .
  npx hermes-edu-skills install cursor --workspace /path/to/project
  npx hermes-edu-skills export openclaw textbook-sync --target ./dist/textbook-sync-skills
  npx hermes-edu-skills export generic agent-study-plan --target ./dist/one-skill
  npx hermes-edu-skills list textbook-sync
  npx hermes-edu-skills search 错题
  npx hermes-edu-skills info agent-mistake-review

Short npm commands:
  npm run install:hermes
  npm run install:openclaw
  npm run install:codex
  npm run install:claude
  npm run install:cursor -- --workspace .
  npm run export:openclaw -- --category 教材同步
  npm run export:generic -- --category exam-prep

Options:
  --category <name>       Export only one category slug or alias. Can be used multiple times or comma-separated.
  --config <path>         Hermes config path.
  --include-examples      Include doc_only example Skills.
  --skill <slug>          Export/install only selected Skill slug/name. Can be used multiple times or comma-separated.
  --target <path>         Destination directory.
  --workspace <path>      Project/workspace directory for project-scoped installs.
  --dry-run               Print actions without writing files.

Category slugs:
  textbook-sync, learning-core, daily-practice, reading-writing, exam-prep,
  teacher-tools, family-education, language-learning, career-learning, examples.
`);
}

function parseArgs(argv) {
  const [rawCommand, ...rest] = argv;
  const command = rawCommand ? commandAliases[rawCommand] || rawCommand : '';
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
    positionals: [],
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
    } else if (!arg.startsWith('-')) {
      args.positionals.push(arg);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return applyPositionalArgs(args);
}

function normalizeTool(value) {
  return toolAliases[value] || toolAliases[value.toLowerCase()] || value.toLowerCase();
}

function isCategorySelector(value) {
  const normalized = normalizeCategory(value);
  return Object.prototype.hasOwnProperty.call(categoryLabels, normalized);
}

function addSelector(args, value) {
  const selectors = value.split(',').map((item) => item.trim()).filter(Boolean);
  for (const selector of selectors) {
    if (isCategorySelector(selector)) {
      args.categories.push(selector);
    } else {
      args.skills.push(selector);
    }
  }
}

function applyPositionalArgs(args) {
  const positionals = [...args.positionals];
  if (['install', 'convert', 'export'].includes(args.command)) {
    if (positionals.length > 0 && !args.tool) {
      const maybeTool = normalizeTool(positionals[0]);
      if (supportedTools.has(maybeTool)) {
        args.tool = maybeTool;
        positionals.shift();
      }
    }

    for (const positional of positionals) {
      addSelector(args, positional);
    }
  }

  args.positionals = positionals;
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

function normalizeCategory(value) {
  const key = value.trim();
  const lower = key.toLowerCase();
  return categoryAliases[key] || categoryAliases[lower] || lower;
}

function selectedSkills(args) {
  const catalog = readCatalog();
  const availableCategories = new Set(catalog.skills.map((skill) => skill.category));
  const categories = new Set(args.categories.map(normalizeCategory));
  const requestedSkills = new Set(args.skills);

  if (categories.size > 0) {
    const unknown = [...categories].filter((category) => !availableCategories.has(category));
    if (unknown.length) {
      const valid = [...availableCategories].sort().join(', ');
      throw new Error(`Unknown category: ${unknown.join(', ')}. Valid category slugs: ${valid}`);
    }
  }

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

function skillSearchText(skill) {
  return [
    skill.name,
    skill.slug,
    skill.title,
    skill.category,
    ...(skill.subjects || []),
    ...(skill.abilities || []),
    ...(skill.scenarios || []),
    ...(skill.textbookVersions || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function skillLine(skill) {
  return `${skill.name}  ${skill.title || ''}  [${skill.category}]`;
}

function listCommand(args) {
  const catalog = readCatalog();
  const selector = args.positionals[0] || args.categories[0] || '';

  if (!selector) {
    const counts = new Map();
    for (const skill of catalog.skills) {
      if (!args.includeExamples && skill.exportMode === 'doc_only') continue;
      counts.set(skill.category, (counts.get(skill.category) || 0) + 1);
    }

    console.log('Categories:');
    for (const [category, label] of Object.entries(categoryLabels)) {
      const count = counts.get(category) || 0;
      if (count > 0) console.log(`  ${category.padEnd(18)} ${String(count).padStart(3)}  ${label}`);
    }
    console.log('');
    console.log('Try: hermes-edu-skills list textbook-sync');
    return;
  }

  const category = normalizeCategory(selector);
  if (!Object.prototype.hasOwnProperty.call(categoryLabels, category)) {
    throw new Error(`Unknown category: ${selector}`);
  }

  const skills = catalog.skills.filter((skill) => {
    if (!args.includeExamples && skill.exportMode === 'doc_only') return false;
    return skill.category === category;
  });

  console.log(`${category} - ${categoryLabels[category]} (${skills.length})`);
  for (const skill of skills) console.log(`  ${skillLine(skill)}`);
}

function searchCommand(args) {
  const query = args.positionals.join(' ').trim();
  if (!query) throw new Error('Missing search keyword. Example: hermes-edu-skills search 错题');
  const catalog = readCatalog();
  const lowerQuery = query.toLowerCase();
  const matches = catalog.skills
    .filter((skill) => (args.includeExamples || skill.exportMode !== 'doc_only') && skillSearchText(skill).includes(lowerQuery))
    .slice(0, 30);

  if (!matches.length) {
    console.log(`No Skills found for: ${query}`);
    return;
  }

  console.log(`Search results for "${query}" (${matches.length}${matches.length === 30 ? '+' : ''}):`);
  for (const skill of matches) console.log(`  ${skillLine(skill)}`);
}

function infoCommand(args) {
  const selector = args.positionals[0] || args.skills[0] || '';
  if (!selector) throw new Error('Missing Skill name. Example: hermes-edu-skills info agent-mistake-review');
  const catalog = readCatalog();
  const skill = catalog.skills.find((item) => item.name === selector || item.slug === selector);

  if (!skill) {
    const similar = catalog.skills
      .filter((item) => skillSearchText(item).includes(selector.toLowerCase()))
      .slice(0, 8)
      .map((item) => item.name);
    throw new Error(`Skill not found: ${selector}${similar.length ? `. Similar: ${similar.join(', ')}` : ''}`);
  }

  console.log(skill.name);
  console.log(`  Title: ${skill.title || '-'}`);
  console.log(`  Category: ${skill.category} (${categoryLabels[skill.category] || skill.category})`);
  console.log(`  Stage: ${(skill.stages || []).join(', ') || '-'}`);
  console.log(`  Subject: ${(skill.subjects || []).join(', ') || '-'}`);
  console.log(`  Ability: ${(skill.abilities || []).join(', ') || '-'}`);
  console.log(`  Path: ${skill.path}`);
  console.log('');
  console.log(`Install: hermes-edu-skills install hermes ${skill.name}`);
  console.log(`Export:  hermes-edu-skills export openclaw ${skill.name}`);
}

function ensureTool(tool) {
  if (!tool) throw new Error('Missing tool. Supported tools: hermes, openclaw, codex, claude-code, cursor, generic-agent.');
  const normalized = normalizeTool(tool);
  if (!supportedTools.has(normalized)) throw new Error(`Unsupported tool: ${tool}`);
  return normalized;
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

function defaultExportTarget(tool, args) {
  if (args.target) return args.target;
  if (tool === 'generic-agent') return join(process.cwd(), 'dist', 'agent-skills');
  if (tool === 'claude-code') return join(process.cwd(), 'dist', 'claude-code-skills');
  return join(process.cwd(), 'dist', `${tool}-skills`);
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
    copyFlatSkills(defaultExportTarget(tool, args), tool, selectedSkills(args), args);
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
  } else if (args.command === 'list') {
    listCommand(args);
  } else if (args.command === 'search') {
    searchCommand(args);
  } else if (args.command === 'info') {
    infoCommand(args);
  } else if (args.command === 'install-hermes') {
    installHermes(args);
  } else if (args.command === 'install-openclaw') {
    installTool({ ...args, tool: 'openclaw' });
  } else if (args.command === 'export') {
    convertTool({ ...args, tool: args.tool || args.format || 'generic-agent' });
  } else {
    throw new Error(`Unknown command: ${args.command}`);
  }
} catch (error) {
  console.error(`[hermes-edu-skills] ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
