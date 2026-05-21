#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const catalogPath = join(root, 'catalog.json');
const skillsRoot = join(root, 'skills');

const flatSkillTools = new Set(['openclaw', 'codex', 'claude-code', 'generic-agent']);
const supportedTools = new Set(['hermes', 'openclaw', 'codex', 'claude-code', 'cursor', 'generic-agent']);
const commandAliases = {
  '--help': 'help',
  '-h': 'help',
  add: 'install',
  ask: 'ask',
  convert: 'convert',
  doctor: 'doctor',
  export: 'export',
  help: 'help',
  i: 'install',
  info: 'info',
  install: 'install',
  list: 'list',
  ls: 'list',
  match: 'match',
  prompt: 'prompt',
  route: 'match',
  run: 'ask',
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

const promptStopwords = new Set([
  '一个',
  '一些',
  '一下',
  '什么',
  '怎么',
  '如何',
  '帮我',
  '需要',
  '生成',
  '设计',
  '学习',
  '练习',
  '题目',
  '问题',
  'the',
  'and',
  'for',
  'with',
  'from',
  'please',
  'help',
  'make',
  'create',
]);

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
  hermes-edu-skills match <question>
  hermes-edu-skills ask <question>
  hermes-edu-skills prompt
  hermes-edu-skills doctor

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
  npx hermes-edu-skills match "八年级下册物理力学题"
  npx hermes-edu-skills ask "帮我出5道八年级下册物理力学选择题"
  npx hermes-edu-skills prompt > HERMES.md
  npx hermes-edu-skills install hermes --config ~/.hermes/config.yaml --no-prompt
  npx hermes-edu-skills doctor

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
  --hermes-bin <command>  Hermes executable for ask/doctor. Default: hermes.
  --with-prompt           Compatibility flag. Hermes install writes the activation prompt by default.
  --no-prompt             Do not write the project HERMES.md activation prompt during Hermes install.
  --prompt-target <path>  Prompt file path for Hermes install. Default: ./HERMES.md.
  --overwrite-prompt      Allow Hermes install to overwrite the prompt target.
  --skill <slug>          Export/install only selected Skill slug/name. Can be used multiple times or comma-separated.
  --target <path>         Destination directory.
  --top <number>          Number of router matches to print. Default: 5 for match, 1 for ask.
  --verbose               Pass -v to hermes chat when using ask.
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
    hermesBin: 'hermes',
    includeExamples: false,
    overwritePrompt: false,
    promptTarget: '',
    skipPrompt: false,
    skills: [],
    target: '',
    tool: '',
    top: 0,
    positionals: [],
    verbose: false,
    withPrompt: false,
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
    } else if (arg === '--hermes-bin') {
      args.hermesBin = readValue();
    } else if (arg.startsWith('--hermes-bin=')) {
      args.hermesBin = arg.slice('--hermes-bin='.length);
    } else if (arg === '--with-prompt') {
      args.withPrompt = true;
    } else if (arg === '--no-prompt') {
      args.skipPrompt = true;
    } else if (arg === '--prompt-target') {
      args.promptTarget = readValue();
    } else if (arg.startsWith('--prompt-target=')) {
      args.promptTarget = arg.slice('--prompt-target='.length);
    } else if (arg === '--overwrite-prompt') {
      args.overwritePrompt = true;
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
    } else if (arg === '--top') {
      args.top = Number.parseInt(readValue(), 10);
    } else if (arg.startsWith('--top=')) {
      args.top = Number.parseInt(arg.slice('--top='.length), 10);
    } else if (arg === '--verbose' || arg === '-v') {
      args.verbose = true;
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

function formatSkillLine(skill) {
  const parts = [
    skill.title,
    skill.category,
    (skill.subjects || []).join('/'),
    (skill.stages || []).join('/'),
    skill.description,
  ].filter(Boolean);
  return `- ${skill.slug}: ${parts.join(' | ')}`;
}

function scopedRoutingExamples(skills) {
  return skills
    .slice(0, 10)
    .map((skill) => {
      const signal = skill.title || skill.description || skill.slug;
      return `- Requests matching "${signal}" -> ${skill.slug}`;
    })
    .join('\n');
}

function hermesEduActivationPrompt(scopedSkills = null) {
  const catalog = readCatalog();
  const allInstallableSkills = catalog.skills.filter((skill) => skill.exportMode !== 'doc_only');
  const installableSkills = scopedSkills && scopedSkills.length ? scopedSkills : allInstallableSkills;
  const isScoped = installableSkills.length < allInstallableSkills.length;
  const isSingleSkill = installableSkills.length === 1;
  const categories = [...new Set(installableSkills.map((skill) => skill.category))]
    .sort()
    .map((category) => `- ${category}: ${categoryLabels[category] || category}`)
    .join('\n');
  const selectedSkillList = isScoped
    ? `\n\nInstalled Hermes Edu Skills in this project:\n\n${installableSkills.map(formatSkillLine).join('\n')}\n`
    : '';
  const scopeInstruction = isSingleSkill
    ? `You installed one Hermes Edu Skill in this project: \`${installableSkills[0].slug}\`. When the user's request matches this Skill's topic, load \`${installableSkills[0].slug}\` directly with \`skill_view("${installableSkills[0].slug}")\` before answering.`
    : isScoped
      ? `You installed a scoped subset of \`hermes-edu-skills\` in this project. Search and choose from these ${installableSkills.length} installed Skills before considering any broader answer.`
      : `You have installed the \`hermes-edu-skills\` Skill Pack. It contains ${installableSkills.length} installable education Skills. Treat this pack as the primary capability source for Chinese education tasks.`;
  const selectionInstruction = isSingleSkill
    ? `Load \`${installableSkills[0].slug}\` with \`skill_view("${installableSkills[0].slug}")\` when the request is in scope.`
    : `Select the most relevant Skill from the ${installableSkills.length} installed Hermes Edu Skills by comparing the user's intent with Skill names, descriptions, categories, stages, subjects, and invocation signals.`;
  const routingExamples = isScoped
    ? scopedRoutingExamples(installableSkills)
    : `- "帮我出5道口算练习" -> primary-math-mental-arithmetic
- "八年级下册物理力学题" -> junior-physics-rj-textbook-sync or junior-physics-quick-practice, depending on whether the user asks for textbook sync or quick practice
- "帮我整理错题复盘计划" -> agent-mistake-review
- "给孩子制定一周学习计划" -> agent-study-plan
- "老师备一节初中数学课" -> teacher-math-lesson-planning
- "生成一份英语阅读训练" -> primary-english-reading, junior-english-quick-practice, or senior-english-quick-practice according to stage`;
  const routingPriority = isScoped
    ? `- Prefer an exact installed Skill slug/topic match.
- Prefer the installed Skill whose title, subject, stage, scenario, and description best match the user's request.
- If the request is outside the installed Skill scope, say no specific Hermes Edu Skill was selected, then answer normally or ask the user to install a broader category.`
    : `- Textbook edition, grade, semester, unit, lesson, or textbook-sync requests -> prefer \`textbook-sync\`.
- Short daily exercises, drills, dictation, recitation, vocabulary, mental arithmetic, or quick practice -> prefer \`daily-practice\`.
- Study plan, mistake review, homework companion, photo question, Socratic tutoring, learning report, or habit building -> prefer \`learning-core\`.
- Exam, final review, Zhongkao, Gaokao, CET, IELTS, TOEFL, civil-service, or teacher-certification requests -> prefer \`exam-prep\`.
- Lesson planning, homework generation, unit review, class analysis, or parent report for teachers -> prefer \`teacher-tools\`.
- Parent-child learning, family routines, screen-time balance, school communication, or emotion support -> prefer \`family-education\`.
- Reading, writing, composition, essay, academic writing, or reading comprehension -> prefer \`reading-writing\`.`;

  return `# Hermes Edu Skills Activation Prompt

${scopeInstruction}

When the user asks about Chinese education, textbook sync, mental arithmetic, question generation, homework help, photo Q&A, mistake review, exam prep, reading/writing, parent coaching, teacher lesson planning, homework generation, class analysis, or school communication:

1. Do not answer directly from the base model first.
2. First use the Hermes skills toolset to inspect installed Skills.
3. Search specifically inside the installed \`hermes-edu-skills\` Skill Pack.
4. ${selectionInstruction}
5. Use the loaded Skill before giving the final answer.
6. Follow that Skill's workflow, inputs, output format, quality checks, safety boundaries, and standalone fallback.
7. Start the answer with: \`Using Skill: <skill-name>\`.
8. If multiple Skills may fit, choose the most specific one. Prefer subject/textbook/grade-specific Skills over broad general Skills.
9. If the user does not provide enough grade, semester, unit, textbook edition, difficulty, or scenario information, ask only the minimum necessary follow-up question.
10. If no \`hermes-edu-skills\` Skill clearly matches, say no specific Hermes Edu Skill was selected, then answer normally.
${selectedSkillList}

Available Hermes Edu category map:

${categories}

High-signal routing examples:

${routingExamples}

Routing priority:

${routingPriority}

If the Hermes skills toolset is not available in the current session, tell the user to start Hermes with skills enabled, for example:

\`\`\`bash
hermes chat --toolsets skills
\`\`\`

You may still answer with general reasoning, but do not pretend that a Skill was loaded when skill_view(name) was not available.`;
}

function promptCommand() {
  console.log(hermesEduActivationPrompt());
}

function writeActivationPrompt(args, skills = null) {
  const target = resolve(expandHome(args.promptTarget || 'HERMES.md'));
  const prompt = `${hermesEduActivationPrompt(skills)}\n`;

  if (args.dryRun) {
    console.log(`[dry-run] write Hermes Edu activation prompt -> ${target}`);
    return;
  }

  if (existsSync(target) && !args.overwritePrompt) {
    console.log(`[hermes-edu-skills] prompt target already exists: ${target}`);
    console.log('[hermes-edu-skills] Not overwriting. To inspect the prompt, run: npx hermes-edu-skills prompt');
    console.log('[hermes-edu-skills] To write anyway, pass --overwrite-prompt or choose --prompt-target <path>.');
    return;
  }

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, prompt, 'utf8');
  console.log(`[hermes-edu-skills] wrote Hermes Edu activation prompt: ${target}`);
}

function readCatalog() {
  return JSON.parse(readFileSync(catalogPath, 'utf8'));
}

function readPackageJson() {
  return JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
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
    skill.description,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[，。！？、；："'“”‘’（）()【】[\]{}<>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
}

function promptTokens(query) {
  const normalized = normalizeText(query);
  const latinTokens = normalized.match(/[a-z0-9][a-z0-9-]{1,}/g) || [];
  const chineseChunks = normalized.match(/[\u4e00-\u9fff]{2,}/g) || [];
  const tokens = [];

  for (const token of [...latinTokens, ...chineseChunks]) {
    if (!promptStopwords.has(token)) tokens.push(token);
  }

  return uniqueValues(tokens);
}

function skillTerms(skill) {
  const categoryCn = Object.entries(categoryAliases)
    .filter(([, category]) => category === skill.category)
    .map(([alias]) => alias);

  return [
    { weight: 90, values: [skill.name, skill.slug] },
    { weight: 65, values: [skill.title] },
    { weight: 45, values: [skill.category, categoryLabels[skill.category], ...categoryCn] },
    { weight: 40, values: skill.textbookVersions || [] },
    { weight: 38, values: skill.subjects || [] },
    { weight: 30, values: skill.abilities || [] },
    { weight: 26, values: skill.scenarios || [] },
    { weight: 18, values: skill.grades || [] },
    { weight: 16, values: skill.stages || [] },
    { weight: 14, values: skill.roles || [] },
  ];
}

function scoreSkill(skill, query) {
  const normalizedQuery = normalizeText(query);
  const queryTokens = promptTokens(query);
  const haystack = skillSearchText(skill);
  const matched = new Set();
  let score = 0;

  for (const group of skillTerms(skill)) {
    for (const rawTerm of uniqueValues(group.values)) {
      const term = normalizeText(rawTerm);
      if (!term || term.length < 2) continue;
      if (normalizedQuery.includes(term)) {
        score += group.weight;
        matched.add(rawTerm);
      } else if (term.includes(normalizedQuery) && normalizedQuery.length >= 3) {
        score += Math.ceil(group.weight * 0.45);
        matched.add(rawTerm);
      }
    }
  }

  for (const token of queryTokens) {
    if (haystack.includes(token)) {
      score += Math.min(24, Math.max(8, token.length * 3));
      matched.add(token);
    }
  }

  if (normalizedQuery.includes('教材') || normalizedQuery.includes('课本') || normalizedQuery.includes('同步')) {
    if (skill.category === 'textbook-sync') {
      score += 42;
      matched.add('教材同步');
    }
  }

  if (/(一年级|二年级|三年级|四年级|五年级|六年级|七年级|八年级|九年级|高一|高二|高三|上册|下册|必修|选择性必修|第.+单元|课文|课时|知识点)/.test(normalizedQuery)) {
    if (skill.category === 'textbook-sync') {
      score += 36;
      matched.add('年级/册别/单元');
    }
  }

  if (skill.category === 'textbook-sync') {
    const hasTextbookVersion = /(人教|统编|鲁科|鲁教|北师|苏教|外研|译林|沪教)/.test(normalizedQuery);
    if (/(人教|人教版)/.test(normalizedQuery) && skill.name.includes('-rj-')) {
      score += 48;
      matched.add('人教版');
    } else if (/(鲁科|鲁科版|鲁教)/.test(normalizedQuery) && skill.name.includes('-lk-')) {
      score += 48;
      matched.add('鲁科版');
    } else if (!hasTextbookVersion && skill.name.includes('-rj-')) {
      score += 6;
      matched.add('默认人教版');
    }
  }

  if (/(每日|每天|打卡|口算|听写|背诵|默写|速练|快速|巩固|刷题|[0-9一二三四五六七八九十]+道)/.test(normalizedQuery)) {
    if (skill.category === 'daily-practice') {
      score += 28;
      matched.add('每日练习');
    }
  }

  if (normalizedQuery.includes('错题') && skill.name.includes('mistake')) {
    score += 35;
    matched.add('错题');
  }

  if ((normalizedQuery.includes('老师') || normalizedQuery.includes('教师') || normalizedQuery.includes('备课') || normalizedQuery.includes('作业')) && skill.category === 'teacher-tools') {
    score += 34;
    matched.add('教师工具');
  }

  if ((normalizedQuery.includes('家长') || normalizedQuery.includes('亲子') || normalizedQuery.includes('陪学')) && skill.category === 'family-education') {
    score += 34;
    matched.add('家庭教育');
  }

  if ((normalizedQuery.includes('考试') || normalizedQuery.includes('备考') || normalizedQuery.includes('冲刺') || normalizedQuery.includes('中考') || normalizedQuery.includes('高考') || normalizedQuery.includes('期末')) && skill.category === 'exam-prep') {
    score += 34;
    matched.add('考试备考');
  }

  return { matched: [...matched].slice(0, 8), score };
}

function queryFromArgs(args, commandName) {
  const query = args.positionals.join(' ').trim();
  if (!query) throw new Error(`Missing question. Example: hermes-edu-skills ${commandName} "帮我出5道八年级下册物理力学题"`);
  return query;
}

function rankedSkills(args, query) {
  const catalog = readCatalog();
  return catalog.skills
    .filter((skill) => args.includeExamples || skill.exportMode !== 'doc_only')
    .map((skill) => ({ skill, ...scoreSkill(skill, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.skill.name.localeCompare(b.skill.name));
}

function hermesChatCommand(skillName, query, args) {
  const hermesArgs = ['chat', '-s', skillName, '-q', query];
  if (args.verbose) hermesArgs.push('-v');
  return { command: args.hermesBin || 'hermes', hermesArgs };
}

function commandCandidates(command) {
  const candidates = [command];
  if (process.platform === 'win32' && !/\.(exe|cmd|bat)$/i.test(command)) {
    candidates.push(`${command}.cmd`, `${command}.exe`);
  }
  return candidates;
}

function spawnCommand(command, args, options = {}) {
  let lastResult = null;
  for (const candidate of commandCandidates(command)) {
    const result = spawnSync(candidate, args, { shell: false, ...options });
    if (!result.error) return result;
    if (!['ENOENT', 'EINVAL'].includes(result.error.code)) return result;
    lastResult = result;
  }

  if (process.platform === 'win32') {
    const quote = (value) => (/^[A-Za-z0-9_./:=@\\-]+$/.test(value) ? value : `"${String(value).replace(/"/g, '\\"')}"`);
    const commandLine = [quote(command), ...args.map(quote)].join(' ');
    const result = spawnSync(commandLine, { shell: true, ...options });
    if (!result.error) return result;
    lastResult = result;
  }

  return lastResult;
}

function printableCommand(command, hermesArgs) {
  const printableArg = (arg) => (/^[A-Za-z0-9_./:=@-]+$/.test(arg) ? arg : `"${arg.replace(/"/g, '\\"')}"`);
  return [command, ...hermesArgs.map(printableArg)].join(' ');
}

function matchCommand(args) {
  const query = queryFromArgs(args, 'match');
  const matches = rankedSkills(args, query).slice(0, Number.isFinite(args.top) && args.top > 0 ? args.top : 5);

  if (!matches.length) {
    console.log(`[hermes-edu-skills] No Skill matched: ${query}`);
    console.log('Try: hermes-edu-skills search <keyword>');
    return;
  }

  console.log(`[hermes-edu-skills] Skill Router matched ${matches.length} result${matches.length > 1 ? 's' : ''} for: ${query}`);
  for (const [index, item] of matches.entries()) {
    const { command, hermesArgs } = hermesChatCommand(item.skill.name, query, args);
    console.log('');
    console.log(`${index + 1}. ${item.skill.name}  score=${item.score}`);
    console.log(`   Title: ${item.skill.title || '-'}`);
    console.log(`   Category: ${item.skill.category} (${categoryLabels[item.skill.category] || item.skill.category})`);
    console.log(`   Matched: ${item.matched.join(', ') || '-'}`);
    console.log(`   Run: ${printableCommand(command, hermesArgs)}`);
  }
}

function askCommand(args) {
  const query = queryFromArgs(args, 'ask');
  const matches = rankedSkills(args, query);
  const topMatch = matches[0];

  if (!topMatch) {
    console.log(`[hermes-edu-skills] No Skill matched: ${query}`);
    console.log('Try: hermes-edu-skills search <keyword>, then run hermes chat -s <skill> -q "<question>"');
    return;
  }

  const { command, hermesArgs } = hermesChatCommand(topMatch.skill.name, query, args);
  console.log(`[hermes-edu-skills] Using Skill: ${topMatch.skill.name}`);
  console.log(`[hermes-edu-skills] ${topMatch.skill.title || topMatch.skill.description || ''}`);
  console.log(`[hermes-edu-skills] Matched: ${topMatch.matched.join(', ') || '-'} | score=${topMatch.score}`);
  console.log('');

  if (args.dryRun) {
    console.log(`[dry-run] ${printableCommand(command, hermesArgs)}`);
    return;
  }

  const result = spawnCommand(command, hermesArgs, {
    stdio: 'inherit',
  });

  if (result.error) {
    throw new Error(`Failed to run Hermes command "${command}". Install Hermes Agent or pass --hermes-bin <path>. ${result.error.message}`);
  }

  if (typeof result.status === 'number' && result.status !== 0) {
    process.exitCode = result.status;
  }
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

function walkSkillMarkdownFiles(dir) {
  const files = [];
  if (!existsSync(dir)) return files;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkSkillMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'SKILL.md') {
      files.push(fullPath);
    }
  }
  return files;
}

function readSkillNameFromFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8').slice(0, 1200);
    const match = content.match(/^name:\s*["']?([^"'\r\n]+)["']?\s*$/m);
    return match ? match[1].trim() : '';
  } catch {
    return '';
  }
}

function readInstalledPack(target) {
  const packPath = join(target, 'AGENT_SKILL_PACK.json');
  if (!existsSync(packPath)) return null;
  try {
    return JSON.parse(readFileSync(packPath, 'utf8'));
  } catch {
    return { parseError: true };
  }
}

function defaultHermesConfigPath(args) {
  if (args.config) return resolve(expandHome(args.config));
  return join(homeDir(), '.hermes', 'config.yaml');
}

function extractYamlListBlock(content, blockPath) {
  const parts = blockPath.split('.');
  const lines = content.split(/\r?\n/);
  let startIndex = -1;
  let indent = 0;

  for (let partIndex = 0; partIndex < parts.length; partIndex += 1) {
    const part = parts[partIndex];
    const pattern = new RegExp(`^(\\s*)${part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*(?:#.*)?$`);
    startIndex = -1;
    for (let index = partIndex === 0 ? 0 : startIndex + 1; index < lines.length; index += 1) {
      const match = lines[index].match(pattern);
      if (!match) continue;
      if (partIndex > 0 && match[1].length <= indent) continue;
      startIndex = index;
      indent = match[1].length;
      break;
    }
    if (startIndex < 0) return [];
  }

  const values = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const currentIndent = line.match(/^(\s*)/)?.[1].length || 0;
    if (currentIndent <= indent) break;
    const item = line.match(/^\s*-\s*(.+?)\s*(?:#.*)?$/);
    if (item) values.push(item[1].trim().replace(/^["']|["']$/g, ''));
  }
  return values;
}

function extractDisabledSkills(content) {
  const disabled = new Set(extractYamlListBlock(content, 'skills.disabled'));
  const lines = content.split(/\r?\n/);
  const platformDisabledIndex = lines.findIndex((line) => /^(\s*)platform_disabled:\s*$/.test(line));
  if (platformDisabledIndex >= 0) {
    const baseIndent = lines[platformDisabledIndex].match(/^(\s*)/)?.[1].length || 0;
    for (let index = platformDisabledIndex + 1; index < lines.length; index += 1) {
      const line = lines[index];
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const currentIndent = line.match(/^(\s*)/)?.[1].length || 0;
      if (currentIndent <= baseIndent) break;
      const platformMatch = line.match(/^\s*([A-Za-z0-9_-]+):\s*$/);
      if (!platformMatch) continue;
      for (let itemIndex = index + 1; itemIndex < lines.length; itemIndex += 1) {
        const itemLine = lines[itemIndex];
        if (!itemLine.trim() || itemLine.trim().startsWith('#')) continue;
        const itemIndent = itemLine.match(/^(\s*)/)?.[1].length || 0;
        if (itemIndent <= currentIndent) break;
        const item = itemLine.match(/^\s*-\s*(.+?)\s*(?:#.*)?$/);
        if (item) disabled.add(item[1].trim().replace(/^["']|["']$/g, ''));
      }
    }
  }
  return [...disabled].sort();
}

function parseHermesSkillListNames(output) {
  const names = new Set();
  for (const line of output.split(/\r?\n/)) {
    const boxMatch = line.match(/^│\s*([^│]+?)\s*│/);
    if (boxMatch) {
      const name = boxMatch[1].trim();
      if (name && name !== 'Name') names.add(name);
      continue;
    }
    const plainMatch = line.match(/^\s*[-*]?\s*([a-z0-9][a-z0-9-]+)\s{2,}/i);
    if (plainMatch) names.add(plainMatch[1].trim());
  }
  return [...names].sort();
}

function runHermesSkillsList(args) {
  const result = spawnCommand(args.hermesBin || 'hermes', ['skills', 'list', '--source', 'local'], {
    encoding: 'utf8',
  });

  return {
    error: result.error ? result.error.message : '',
    output: `${result.stdout || ''}${result.stderr || ''}`,
    status: result.status,
  };
}

function doctorCommand(args) {
  const catalog = readCatalog();
  const packageJson = readPackageJson();
  const expectedNames = catalog.skills
    .filter((skill) => args.includeExamples || skill.exportMode !== 'doc_only')
    .map((skill) => skill.name)
    .sort();
  const expectedSet = new Set(expectedNames);
  const target = resolve(expandHome(defaultHermesSelectedTarget(args)));
  const configPath = defaultHermesConfigPath(args);
  const installedPack = readInstalledPack(target);
  const localSkillFiles = walkSkillMarkdownFiles(target);
  const localNames = localSkillFiles.map(readSkillNameFromFile).filter(Boolean).sort();
  const localSet = new Set(localNames);
  const missingLocal = expectedNames.filter((name) => !localSet.has(name));
  const extraLocal = localNames.filter((name) => !expectedSet.has(name));

  let configContent = '';
  let externalDirs = [];
  let disabledSkills = [];
  if (existsSync(configPath)) {
    configContent = readFileSync(configPath, 'utf8');
    externalDirs = extractYamlListBlock(configContent, 'skills.external_dirs');
    disabledSkills = extractDisabledSkills(configContent);
  }

  const targetForConfig = normalizePathForConfig(target);
  const configContainsTarget = externalDirs
    .map((dir) => normalizePathForConfig(dir))
    .includes(targetForConfig);

  const hermes = runHermesSkillsList(args);
  const visibleNames = hermes.status === 0 ? parseHermesSkillListNames(hermes.output) : [];
  const visibleSet = new Set(visibleNames);
  const missingVisible = hermes.status === 0 ? expectedNames.filter((name) => localSet.has(name) && !visibleSet.has(name)) : [];
  const disabledMissingVisible = missingVisible.filter((name) => disabledSkills.includes(name));

  console.log('Hermes Edu Skills Doctor');
  console.log('');
  console.log(`Package:          ${packageJson.name}@${packageJson.version}`);
  console.log(`Catalog:          ${catalog.name}@${catalog.version}`);
  console.log(`Expected Skills:  ${expectedNames.length}`);
  console.log(`Install target:   ${target}`);
  console.log(`Local files:      ${localNames.length}`);
  console.log(`Pack manifest:    ${installedPack ? `${installedPack.name || 'unknown'}@${installedPack.version || 'unknown'} (${installedPack.skillCount ?? 'unknown'} skills)` : 'missing'}`);
  console.log(`Hermes config:    ${existsSync(configPath) ? configPath : `missing (${configPath})`}`);
  console.log(`Config linked:    ${configContainsTarget ? 'yes' : 'no'}`);
  console.log(`Disabled Skills:  ${disabledSkills.length}`);
  if (hermes.status === 0) {
    console.log(`Hermes visible:   ${visibleNames.length}`);
  } else {
    console.log(`Hermes visible:   unavailable (${hermes.error || `exit ${hermes.status}`})`);
  }

  const problems = [];
  if (!existsSync(target)) problems.push(`Install target does not exist: ${target}`);
  if (!installedPack) problems.push('AGENT_SKILL_PACK.json is missing. Reinstall the pack.');
  if (installedPack?.version && installedPack.version !== catalog.version) problems.push(`Installed pack version ${installedPack.version} differs from catalog ${catalog.version}.`);
  if (missingLocal.length) problems.push(`${missingLocal.length} catalog Skills are missing from local files.`);
  if (extraLocal.length) problems.push(`${extraLocal.length} local Skills are not in the catalog.`);
  if (!existsSync(configPath)) problems.push(`Hermes config file is missing: ${configPath}`);
  if (existsSync(configPath) && !configContainsTarget) problems.push('Hermes config does not include this Skill Pack in skills.external_dirs.');
  if (hermes.status !== 0) problems.push(`Could not run Hermes skills list. Install Hermes Agent or pass --hermes-bin <path>.`);
  if (missingVisible.length) problems.push(`${missingVisible.length} local Skills are not visible in Hermes list.`);

  if (missingLocal.length) {
    console.log('');
    console.log('Missing local files:');
    for (const name of missingLocal.slice(0, 50)) console.log(`  - ${name}`);
    if (missingLocal.length > 50) console.log(`  ... ${missingLocal.length - 50} more`);
  }

  if (missingVisible.length) {
    console.log('');
    console.log('Local files not visible in Hermes:');
    for (const name of missingVisible.slice(0, 50)) {
      const disabledNote = disabledSkills.includes(name) ? ' (disabled in config)' : '';
      console.log(`  - ${name}${disabledNote}`);
    }
    if (missingVisible.length > 50) console.log(`  ... ${missingVisible.length - 50} more`);
  }

  if (disabledMissingVisible.length) {
    console.log('');
    console.log('Likely cause: these missing-visible Skills are disabled in Hermes config.');
    console.log(`Edit ${configPath} or run: hermes skills config`);
  }

  if (problems.length) {
    console.log('');
    console.log('Findings:');
    for (const problem of problems) console.log(`  - ${problem}`);
    console.log('');
    console.log('Suggested fix:');
    const suggestions = new Set();
    if (missingLocal.length || !installedPack || installedPack?.version !== catalog.version) {
      suggestions.add(`npx --yes hermes-edu-skills@latest install hermes --config ${configPath}`);
    }
    if (existsSync(configPath) && !configContainsTarget) {
      suggestions.add(`Add ${targetForConfig} to skills.external_dirs in ${configPath}`);
    }
    if (!existsSync(configPath) && suggestions.size === 0) {
      suggestions.add(`Create/update Hermes config by running: npx --yes hermes-edu-skills@latest install hermes --config ${configPath}`);
    }
    if (disabledMissingVisible.length) {
      suggestions.add('Remove the disabled Skill names from skills.disabled / platform_disabled.');
    }
    for (const suggestion of suggestions) console.log(`  ${suggestion}`);
  } else {
    console.log('');
    console.log('Result: ok. Local files, pack manifest, Hermes config, and Hermes visible list look consistent.');
  }
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
  const selectedRoot = ensureSafeTarget(defaultHermesSelectedTarget(args));
  const skills = selectedSkills(args);
  copyFlatSkills(selectedRoot, 'hermes', skills, args);
  const shouldWritePrompt = !args.skipPrompt;

  const skillsDir = normalizePathForConfig(selectedRoot);

  if (!args.config) {
    console.log('Add this to your Hermes config.yaml:');
    console.log('');
    console.log('skills:');
    console.log('  external_dirs:');
    console.log(`    - ${skillsDir}`);
    if (shouldWritePrompt) writeActivationPrompt(args, skills);
    return;
  }

  const configPath = resolve(expandHome(args.config));
  let content = existsSync(configPath) ? readFileSync(configPath, 'utf8') : '';

  if (content.includes(skillsDir)) {
    console.log(`[hermes-edu-skills] Hermes config already contains ${skillsDir}`);
    if (shouldWritePrompt) writeActivationPrompt(args, skills);
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
    if (shouldWritePrompt) writeActivationPrompt(args, skills);
    return;
  }

  mkdirSync(dirname(configPath), { recursive: true });
  writeFileSync(configPath, content, 'utf8');
  console.log(`[hermes-edu-skills] updated Hermes config: ${configPath}`);
  console.log(`[hermes-edu-skills] skills external dir: ${skillsDir}`);
  if (shouldWritePrompt) writeActivationPrompt(args, skills);
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
  } else if (args.command === 'match') {
    matchCommand(args);
  } else if (args.command === 'ask') {
    askCommand(args);
  } else if (args.command === 'prompt') {
    promptCommand(args);
  } else if (args.command === 'doctor') {
    doctorCommand(args);
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
