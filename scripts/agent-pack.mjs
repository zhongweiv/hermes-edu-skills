import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const catalogPath = join(root, 'catalog.json');
const skillsRoot = join(root, 'skills');

function usage() {
  console.log(`Hermes Edu Skills Agent Pack

Usage:
  node scripts/agent-pack.mjs install-hermes --config <path> [--dry-run]
  node scripts/agent-pack.mjs install-openclaw [--target <path> | --workspace <path>] [--category <name>] [--include-examples] [--dry-run]
  node scripts/agent-pack.mjs export --target <path> [--format agent-skills|openclaw|flat] [--category <name>] [--include-examples] [--dry-run]

Examples:
  npm run install:hermes -- --config ~/.hermes/config.yaml
  npm run install:openclaw
  npm run export:agents -- --format openclaw --target ./dist/openclaw-skills

Options:
  --category <name>       Export only one category. Can be used multiple times or comma-separated.
  --include-examples      Include doc_only example Skills.
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
    format: 'agent-skills',
    includeExamples: false,
    target: '',
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
    } else if (arg === '--target') {
      args.target = readValue();
    } else if (arg.startsWith('--target=')) {
      args.target = arg.slice('--target='.length);
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

function expandHome(path) {
  if (!path.startsWith('~')) return path;
  const home = process.env.HOME || process.env.USERPROFILE;
  if (!home) throw new Error(`Cannot expand home path: ${path}`);
  if (path === '~') return home;
  if (path.startsWith('~/') || path.startsWith('~\\')) return join(home, path.slice(2));
  return path;
}

function normalizePathForConfig(path) {
  return resolve(expandHome(path)).replace(/\\/g, '/');
}

function readCatalog() {
  return JSON.parse(readFileSync(catalogPath, 'utf8'));
}

function selectedSkills(args) {
  const catalog = readCatalog();
  const categories = new Set(args.categories);
  return catalog.skills.filter((skill) => {
    if (!args.includeExamples && skill.exportMode === 'doc_only') return false;
    if (categories.size > 0 && !categories.has(skill.category)) return false;
    return true;
  });
}

function defaultOpenClawTarget() {
  const home = process.env.HOME || process.env.USERPROFILE;
  if (!home) throw new Error('Cannot resolve home directory. Pass --target explicitly.');
  return join(home, '.openclaw', 'skills');
}

function ensureSafeTarget(target) {
  const resolved = resolve(expandHome(target));
  const unsafe = new Set([root, skillsRoot, resolve(root, '..')]);
  if (unsafe.has(resolved)) throw new Error(`Refusing to write into unsafe target: ${resolved}`);
  return resolved;
}

function copyFlatSkills(target, skills, args) {
  const resolvedTarget = ensureSafeTarget(target);
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

    if (args.dryRun) {
      console.log(`[dry-run] copy ${source} -> ${destination}`);
      continue;
    }

    mkdirSync(skillDir, { recursive: true });
    cpSync(source, destination, { force: true });
  }

  const manifest = {
    name: 'hermes-edu-skills',
    version: readCatalog().version,
    format: args.format,
    generatedAt: new Date().toISOString(),
    skillCount: entries.length,
    skills: entries,
  };

  const manifestPath = join(resolvedTarget, 'AGENT_SKILL_PACK.json');
  if (args.dryRun) {
    console.log(`[dry-run] write ${manifestPath}`);
  } else {
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  }

  console.log(`[hermes-edu-skills] ${args.dryRun ? 'prepared' : 'exported'} ${entries.length} skills -> ${resolvedTarget}`);
}

function installHermes(args) {
  const skillsDir = normalizePathForConfig(skillsRoot);

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

function installOpenClaw(args) {
  const target = args.target
    ? args.target
    : args.workspace
      ? join(resolve(expandHome(args.workspace)), 'skills')
      : defaultOpenClawTarget();
  copyFlatSkills(target, selectedSkills(args), { ...args, format: 'openclaw' });
}

function exportAgentPack(args) {
  if (!['agent-skills', 'openclaw', 'flat'].includes(args.format)) {
    throw new Error(`Unsupported format: ${args.format}`);
  }
  if (!args.target) throw new Error('export requires --target <path>.');
  copyFlatSkills(args.target, selectedSkills(args), args);
}

try {
  const args = parseArgs(process.argv.slice(2));
  if (!args.command || args.command === 'help') {
    usage();
  } else if (args.command === 'install-hermes') {
    installHermes(args);
  } else if (args.command === 'install-openclaw') {
    installOpenClaw(args);
  } else if (args.command === 'export') {
    exportAgentPack(args);
  } else {
    throw new Error(`Unknown command: ${args.command}`);
  }
} catch (error) {
  console.error(`[hermes-edu-skills] ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
