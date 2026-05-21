# Changelog

## 0.11.0 - 2026-05-21

- Adds first-class CLI binaries: `hermes-edu-skills` and `hermes-edu`.
- Adds short positional commands such as `install hermes agent-study-plan` and `export openclaw textbook-sync`.
- Adds discovery commands: `list`, `search`, and `info`.
- Keeps existing npm script commands for source-mode and backward compatibility.

## 0.10.6 - 2026-05-21

- Updates the English README so category table cells prioritize exact English command category names.
- Updates the English README so Skill table cells prioritize exact installable Skill names.
- Keeps English explanations on the next line for readability while making command names easier to copy.

## 0.10.5 - 2026-05-21

- Updates the Chinese README so category table cells prioritize English command category names.
- Updates the Chinese README so Skill table cells prioritize installable English Skill names.
- Keeps Chinese labels on the next line for readability while making command names easier to copy.

## 0.10.4 - 2026-05-21

- Polishes README Skill tables for easier scanning and copying.
- Removes maturity and parameter columns from the public Skill list.
- Adds a command-argument column next to every Skill.
- Uses compact standalone availability marks and line-separated stage values.
- Updates Chinese and English Skill cells to show installable names with localized explanations.

## 0.10.3 - 2026-05-21

- Adjusts README category display to two-line bilingual names.
- Adjusts README Skill display to two-line bilingual names plus a copyable slug.
- Keeps Chinese README Chinese-first and English README English-first while preserving both languages in each row.

## 0.10.2 - 2026-05-21

- Adds short install/export npm commands for Codex, Claude Code, Cursor, OpenClaw, Hermes, and generic Agent targets.
- Makes category export simpler by providing safe default `dist/...` output directories when `--target` is omitted.
- Keeps advanced `agent:install` / `agent:convert` commands documented for integrations that need full control.
- Separates Chinese and English Skill list display: Chinese README shows Chinese names with English labels; English README shows English labels with original Chinese names.

## 0.10.1 - 2026-05-21

- Improves category install/export usability by showing the exact `--category <slug>` argument beside every README category.
- Adds a category command quick-reference table for Chinese and English readers.
- Allows common Chinese category aliases such as `--category 教材同步` in `agent-pack`.
- Improves unknown-category errors with the valid category slug list.

## 0.10.0 - 2026-05-21

- Curates a focused 10-Skill batch for career learning, language learning, programming, data analysis, AI foundations, interview preparation, and certification scenarios.
- Turns career-learning Skills into project/practice/review loops with visible outcomes such as portfolios, interview readiness, certificate plans, workplace artifacts, or daily language output.
- Adds stronger boundaries against fake certificates, interview cheating, fabricated credentials, passive course collection, and unrealistic score or job promises.
- Keeps total public export scope unchanged while upgrading selected career/language Skills to `curated`, `recommended`, and `0.10.0` content.

## 0.9.0 - 2026-05-21

- Curates the fifth Skill batch for family education, parent-child reading, reading comprehension, composition, English writing, academic writing, workplace writing, and adult language learning.
- Improves the public project positioning and package description so visitors can quickly understand what Hermes Edu Skills can do and why it is useful.
- Turns family and writing Skills into more human workflows: observe the learner, reduce parent-child friction, coach without replacing the child, revise with evidence, and leave one concrete next action.
- Keeps total public export scope unchanged while upgrading selected family/reading/writing Skills to `curated`, `recommended`, and `0.9.0` content.

## 0.8.0 - 2026-05-21

- Curates the fourth 20-Skill batch for exam prep, covering期末、中考、高考、四六级、考研英语、教资、公考 and subject exam-review scenarios.
- Turns exam-prep Skills into a practical复习闭环: diagnosis, score-growth priority, timed practice, mistake review, and follow-up retest.
- Adds stronger guardrails against押题、包过、替考作弊 and copyrighted paper replication.
- Keeps total public export scope unchanged while upgrading selected exam-prep Skills to `curated`, `recommended`, and `0.8.0` content.

## 0.7.0 - 2026-05-21

- Curates the third 20-Skill batch for textbook sync, covering primary and junior Chinese, math, English, physics, chemistry, and biology.
- Turns教材同步 Skills into parameterized learning entrances: textbook version, grade, semester, unit, knowledge point, learning scenario, weak points, and available time.
- Adds stronger guardrails around教材版权、原创练习、缺失参数追问、错题追练、单元复习 and standalone Hermes usage.
- Keeps total public export scope unchanged while upgrading selected textbook-sync Skills to `curated`, `recommended`, and `0.7.0` content.

## 0.6.0 - 2026-05-21

- Curates the second 20-Skill batch for teacher tools, covering lesson planning, homework generation, unit review, class analysis, and parent communication.
- Adds subject-specific teacher workflows for Chinese, math, English, physics, chemistry, and biology so teacher Skills feel closer to real classroom work.
- Upgrades selected teacher Skills to `curated`, `recommended`, and `0.6.0` public Skill content.
- Keeps total public export scope unchanged.

## 0.5.1 - 2026-05-21

- Adds `--skill <slug>` to `agent-pack` so users can install or export a single Skill instead of the full pack.
- Supports single-Skill install/export for Hermes, OpenClaw, Codex, Claude Code, Cursor, and generic Agent targets.
- Documents the single-Skill workflow in both Chinese and English README files.
- Keeps individual Skill content versions unchanged from 0.5.0.

## 0.5.0 - 2026-05-21

- Curates the first 20 commercial-first Skills with handcrafted problem statements, usage boundaries, inputs, workflows, output formats, quality checks, fallbacks, and example prompts.
- Upgrades the learning-core entrance Skills from template-style descriptions to user-job focused guides for study planning, photo Q&A, question explanation, review, habits, focus, homework companion, and Socratic tutoring.
- Upgrades five high-frequency primary daily practice Skills for mental arithmetic, dictation, recitation, vocabulary, and reading practice.
- Keeps open export eligibility unchanged: 177 public entries, 170 installable Skills, and 7 doc-only examples.

## 0.4.1 - 2026-05-21

- Improves Chinese and English README structure with a dedicated Hermes default usage section.
- Adds a dedicated section for exporting Skills to OpenClaw, Codex, Cursor, Claude Code, and generic Agent tools.
- Updates package and GitHub-facing description to bilingual Chinese/English positioning.
- Keeps Skill files, catalog shape, and installer behavior compatible with 0.4.0.

## 0.4.0 - 2026-05-21

- Adds a unified `agent-pack` command model inspired by multi-tool Agent pack projects.
- Adds `npm run agent:install -- --tool <tool>` for Hermes, OpenClaw, Codex, Cursor, Claude Code, and generic Agent Skill roots.
- Adds `npm run agent:convert -- --tool <tool> --target <path>` for conversion-only workflows.
- Adds Cursor `.cursor/rules/*.mdc` generation plus a local `.cursor/hermes-edu-skills` Skill Pack copy.
- Keeps the older `install:hermes`, `install:openclaw`, and `export:agents` commands as compatibility aliases.

## 0.3.0 - 2026-05-21

- Adds `scripts/agent-pack.mjs` for easier installation and cross-agent export.
- Adds `npm run install:hermes` to update or print Hermes `skills.external_dirs` configuration.
- Adds `npm run install:openclaw` to export a flat `SKILL.md` directory layout suitable for OpenClaw-style Agent Skill roots.
- Adds `npm run export:agents` for generic Agent Skill Pack export with `AGENT_SKILL_PACK.json`.
- Keeps the public Skill catalog backward-compatible with the 177 product-level Skills introduced in 0.2.0.

## 0.2.0 - 2026-05-21

- Shrinks the public Skill Pack from 20,551 generated entries to 177 product-level Skills.
- Adds China-first categories such as textbook sync, learning core, daily practice, exam prep, teacher tools, and family education.
- Moves grade, semester, unit, lesson, knowledge point, scenario, and difficulty into Skill parameters instead of exposing them as thousands of separate Skills.
- Keeps 170 Skills as installable entries and 7 organization-dependent Skills as `doc_only` examples.
- Updates `catalog.json`, discovery index, README tables, and Skill frontmatter for the new 0.2.0 structure.

## 0.1.0 - 2026-05-21

- Initial Hermes Edu Skills release shape.
- Includes 20,551 Hermes-compatible education Skills.
- Adds generated `catalog.json` and `.well-known/skills/index.json`.
- Adds standalone validation with `npm run validate`.
