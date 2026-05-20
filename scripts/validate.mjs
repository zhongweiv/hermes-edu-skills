import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const catalogPath = join(root, 'catalog.json');
const indexPath = join(root, '.well-known', 'skills', 'index.json');
const skillsRoot = join(root, 'skills');

function fail(message) {
  console.error(`[hermes-edu-skills] ${message}`);
  process.exitCode = 1;
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function walkSkillFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkSkillFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'SKILL.md') {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizePath(path) {
  return path.split(sep).join('/');
}

if (!existsSync(catalogPath)) fail('catalog.json is missing.');
if (!existsSync(indexPath)) fail('.well-known/skills/index.json is missing.');
if (!existsSync(skillsRoot)) fail('skills/ directory is missing.');

if (process.exitCode) process.exit(process.exitCode);

const catalog = readJson(catalogPath);
const discovery = readJson(indexPath);
const skillFiles = walkSkillFiles(skillsRoot);
const publicForbiddenPatterns = [
  /api[_-]?key/i,
  /access[_-]?token/i,
  /refresh[_-]?token/i,
  /database[_-]?url/i,
  /redis[_-]?url/i,
  /private[_-]?key/i,
  /client[_-]?secret/i,
  /password/i,
  /credential/i,
  /production[_-]?secret/i,
  /internal[_-]?account/i,
  /user[_-]?data/i,
];

if (catalog.name !== 'hermes-edu-skills') fail('catalog name must be hermes-edu-skills.');
if (discovery.name !== 'hermes-edu-skills') fail('discovery index name must be hermes-edu-skills.');
if (!Array.isArray(catalog.skills)) fail('catalog.skills must be an array.');
if (!Array.isArray(discovery.skills)) fail('discovery.skills must be an array.');
if (JSON.stringify(catalog).includes('"pricing"')) fail('catalog must not expose pricing metadata.');
for (const pattern of publicForbiddenPatterns) {
  if (pattern.test(JSON.stringify(catalog))) {
    fail(`catalog contains public-forbidden pattern: ${pattern}`);
  }
}

if (catalog.skillCount !== catalog.skills.length) {
  fail(`catalog.skillCount=${catalog.skillCount} but catalog.skills has ${catalog.skills.length}.`);
}

if (discovery.skills.length !== catalog.skills.length) {
  fail(`discovery has ${discovery.skills.length} skills but catalog has ${catalog.skills.length}.`);
}

if (skillFiles.length !== catalog.skills.length) {
  fail(`found ${skillFiles.length} SKILL.md files but catalog has ${catalog.skills.length}.`);
}

const names = new Set();
const discoveryByName = new Map(discovery.skills.map((skill) => [skill.name, skill]));
const filesByRelativePath = new Set(skillFiles.map((file) => normalizePath(relative(root, file))));

for (const skill of catalog.skills) {
  if (!skill.name) fail('catalog contains a skill without a name.');
  if (names.has(skill.name)) fail(`duplicate skill name: ${skill.name}`);
  names.add(skill.name);

  if (!skill.path || !filesByRelativePath.has(skill.path)) {
    fail(`catalog path is missing on disk: ${skill.path}`);
    continue;
  }

  const discoverySkill = discoveryByName.get(skill.name);
  if (!discoverySkill) {
    fail(`discovery index is missing skill: ${skill.name}`);
  } else if (discoverySkill.path !== skill.path) {
    fail(`discovery path mismatch for ${skill.name}: ${discoverySkill.path} != ${skill.path}`);
  }

  const content = readFileSync(join(root, skill.path), 'utf8');
  for (const pattern of publicForbiddenPatterns) {
    if (pattern.test(content)) {
      fail(`${skill.path} contains public-forbidden pattern: ${pattern}`);
    }
  }
  if (!content.includes(`name: "${skill.name}"`)) {
    fail(`frontmatter name mismatch in ${skill.path}`);
  }
  if (!content.includes('source: hermes-edu-skills')) {
    fail(`source metadata missing in ${skill.path}`);
  }
  if (!content.includes('author: zhongwei')) {
    fail(`author metadata missing in ${skill.path}`);
  }
}

if (!process.exitCode) {
  console.log(`[hermes-edu-skills] validated ${catalog.skills.length} skills.`);
}
