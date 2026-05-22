# Changelog

## Unreleased

## 0.18.5 - 2026-05-22

- Improves `doctor` visibility reporting by separating Hermes' total local Skill count from the `hermes-edu-skills` Pack visibility count.
- Runs `hermes skills list --source local` with a wider, no-color environment to reduce Rich table truncation.
- Detects likely truncated long Skill names and reports them as likely visible instead of false missing items.

## 0.18.4 - 2026-05-22

- Fixes Hermes config repair when `skills.external_dirs` appears more than once in `config.yaml`; the installer now consolidates duplicate blocks instead of leaving a later empty list that overrides the Skill Pack path.
- Updates `doctor` to treat duplicate YAML keys the same way Hermes/PyYAML does, so it no longer reports `Config linked: yes` when a later duplicate key makes the effective value empty.
- Adds clearer findings for duplicate `skills.external_dirs` blocks.

## 0.18.3 - 2026-05-22

- Fixes Hermes CLI visibility by exporting every public Skill with `cli` in frontmatter `platforms`.
- Regenerates all 188 public Skills so `hermes skills list` can include them instead of filtering them out as non-CLI Skills.
- Documents the Hermes platform-filter rule so future Skill exports do not use operating-system-only platform lists.

## 0.18.2 - 2026-05-22

- Fixes Hermes config YAML merging when an existing `platform_toolsets.cli` list uses YAML indentless sequence style, for example `cli:\n- hermes-cli`.
- Improves `doctor` list parsing for Hermes config lists that use the same indentless YAML style.
- Prevents `install` / `repair` from creating mixed-indentation `platform_toolsets.cli` blocks that make Hermes ignore the user config.

## 0.18.1 - 2026-05-22

- Adds install success version output and `hermes-edu-skills version` / `--version` / `-v`.
- Adds global Hermes activation addendum support by writing a marked `hermes-edu-skills` block into the current Hermes Home `SOUL.md` without overwriting existing user content.
- Extends `doctor`, `repair`, and `uninstall` to check, restore, and remove the global activation addendum.
- Improves default Hermes config discovery by using `hermes config path` when available, then falling back to `~/.hermes/config.yaml`.

## 0.18.0 - 2026-05-22

- Makes the default public path `npx --yes hermes-edu-skills install`, which installs and enables the full Hermes Skill Pack using the default Hermes config path.
- Adds Pack-level `runtimeActivationPolicy` to public catalog metadata, exported from the commercial Skill system.
- Adds `repair`, `update`, `verify`, and `uninstall` reliability commands around the Hermes installation lifecycle.
- Keeps `install hermes --config ...` and category/single-Skill selectors for advanced users while promoting the one-command install path.
- Updates Chinese and English README onboarding around "install means enabled", plain `hermes` / `hermes chat` usage, and health commands.

## 0.17.1 - 2026-05-22

- Makes `install hermes` also enable the Hermes CLI `skills` toolset through `platform_toolsets.cli` so normal Hermes chat sessions can access Skill tools more reliably.
- Adds `hermes-edu-skills chat` as a convenience wrapper for `hermes chat --toolsets skills`.
- Makes `hermes-edu-skills ask` invoke Hermes with `--toolsets skills` before preloading the matched Skill.
- Updates Chinese and English README troubleshooting to explain the difference between installing Skill files and starting Hermes with the skills toolset enabled.

## 0.17.0 - 2026-05-22

- Adds a first-class `preschool` category for ages 3-6, school readiness, picture-book reading, early literacy, pinyin, number sense, attention, fine-motor writing, habits, emotion expression, and parent-child play.
- Regenerates the public catalog from the commercial Skill system with 188 installable Skills across 8 product-level categories.
- Renames selected preschool Skills to more durable product slugs, for example `preschool-literacy-foundation`, `preschool-number-sense-foundation`, and `preschool-school-readiness`.
- Keeps legacy slug aliases such as `preschool-literacy-daily`, `preschool-number-sense-daily`, `preschool-general-readiness-textbook-sync`, and `family-school-readiness` for CLI lookup and migration guidance.
- Reorganizes public directories around the new category model: `preschool`, `textbook-sync`, `daily-practice`, `reading-writing`, `exam-prep`, `learning-assistant`, `family-education`, and `teacher-tools`.
- Keeps old category selectors such as `learning-core`, `language-learning`, and `career-learning` as CLI aliases while presenting the cleaner category model in README.
- Updates the Skill Router to recognize preschool requests such as 幼小衔接、绘本、数感、识字、控笔、专注力 and route them to the new preschool Skills.

## 0.16.9 - 2026-05-22

- Replaces the README GIF embed with a lightweight poster image linked to the original MP4 demo.
- Removes the generated GIF from the public package because the MP4 is smaller and renders more reliably in Markdown.
- Keeps the Chinese and English README first screen compact and stable on GitHub.

## 0.16.8 - 2026-05-22

- Replaces the old README demo asset with a lighter `assets/demo/preview-small.gif` optimized for GitHub first-screen loading.
- Adds `assets/demo/preview.mp4` as an HD demo link from both Chinese and English READMEs.
- Keeps README generation aligned with the new demo asset paths.

## 0.16.7 - 2026-05-21

- Adds commercial-first `interactionPolicy` metadata to every Skill so required dimensions are recognized, lightly asked, and safely defaulted when users skip answers.
- Regenerates all 170 public Hermes Skills with `Required Dimensions` and `Default Policy When Missing` sections.
- Defaults missing grade, semester, difficulty, quantity, time, scenario, role, learning history, and answer explanation behavior by Skill category.
- Keeps default handling aligned with standalone Hermes usage: ask once, continue with assumptions, disclose defaults briefly, and let users refine later.

## 0.16.6 - 2026-05-21

- Makes Hermes single-Skill and category installs generate scoped activation prompts by default.
- Single-Skill prompts now tell Hermes to load the installed Skill directly when the request is in scope.
- Category prompts now list only the installed category's Skills, reducing prompt noise and improving matching clarity.
- Documents the scoped prompt behavior in Chinese and English README files.

## 0.16.5 - 2026-05-21

- Makes `install hermes` generate the Hermes Edu activation prompt by default so new users get Skill discovery guidance without adding `--with-prompt`.
- Adds `--no-prompt` as an opt-out for users who only want to install Skill files and update Hermes config.
- Keeps existing `HERMES.md` files protected from overwrite unless `--overwrite-prompt` is passed.

## 0.16.4 - 2026-05-21

- Strengthens the Hermes Edu activation prompt to explicitly search the installed `hermes-edu-skills` Skill Pack before answering education-related requests.
- Adds dynamic installable Skill count and category map to the generated activation prompt.
- Documents that the prompt now asks Hermes to select from `hermes-edu-skills` first, instead of checking Skills generically.

## 0.16.3 - 2026-05-21

- Adds `hermes-edu-skills prompt` to print a project-level Hermes Edu Skills activation prompt.
- Adds `install hermes --with-prompt` to generate `HERMES.md` during Hermes installation without overwriting existing project instructions by default.
- Documents how the activation prompt improves Hermes-native Skill discovery while keeping deterministic `ask` routing available.

## 0.16.2 - 2026-05-21

- Promotes Skill Router into a standalone product-level README section for natural questions, visible Skill selection, and Hermes invocation.
- Promotes `doctor` into a standalone diagnostics and troubleshooting section with clearer checks and common readings.
- Keeps Chinese and English README structures synchronized for public onboarding.

## 0.16.1 - 2026-05-21

- Adds `hermes-edu-skills doctor` to diagnose local Hermes Skill Pack installation.
- Reports package/catalog versions, install target, `AGENT_SKILL_PACK.json`, Hermes config linkage, disabled Skills, local file count, and Hermes-visible Skill count.
- Highlights missing local files and local files that are not visible in `hermes skills list --source local`.

## 0.16.0 - 2026-05-21

- Adds a lightweight Skill Router for natural-language education questions.
- Adds `hermes-edu-skills match "<question>"` to show the most relevant Skills, matched signals, and copyable `hermes chat -s ...` commands.
- Adds `hermes-edu-skills ask "<question>"` to print the selected Skill and then invoke official Hermes Agent with that Skill preloaded.
- Keeps Hermes Agent as the runtime while making Skill usage visible for users who expect automatic Skill activation.

## 0.15.5 - 2026-05-21

- Fixes default Hermes installation so `npx hermes-edu-skills install hermes` copies all installable Skills into a stable flat Hermes Skill directory before updating `skills.external_dirs`.
- Avoids pointing Hermes at npm package internals, which can be nested or temporary and may not be discovered by `hermes skills list`.

## 0.15.4 - 2026-05-21

- Adds top-level `--help` and `-h` aliases so `npx hermes-edu-skills --help` works for first-time users.

## 0.15.3 - 2026-05-21

- Upgrades the README demo GIF into a Screenity-style generated recording with browser chrome, typewriter terminal input, full 170-Skill installation, Hermes Agent loading, Skill matching, and Agent export flow.
- Normalizes npm bin paths so `npx hermes-edu-skills` can expose the CLI correctly after publish.

## 0.15.2 - 2026-05-21

- Adds a public demo GIF showing category installation, Hermes Agent usage, Skill matching, and multi-Agent export.
- Places the demo near the top of the Chinese and English README first screen.
- Includes `assets/` in the public package files list.

## 0.15.1 - 2026-05-21

- Refreshes Chinese and English README positioning into a stronger public landing page.
- Adds clearer quick-start, What/Why/How framing, prompt-collection comparison, role guidance, and category overview near the top of the README.
- Updates public package description to better explain the China-focused education Agent Skill Pack value.

## 0.15.0 - 2026-05-21

- Removes 7 organization/institution design-reference examples from the public open-skills export.
- Keeps those organization workflows in the commercial project as internal/commercial Skills because they require private organization data, dashboards, or HoneyKid tool adapters.
- Makes the public repository focus on directly installable, standalone-friendly Hermes Skills.

## 0.14.0 - 2026-05-21

- Curates the remaining 21 public textbook-sync Skills.
- Adds stronger geography, history, and politics textbook-sync workflows around maps, source/material evidence, causality, concept use, and structured expression.
- Upgrades senior textbook-sync Skills so同步学习、单元复习、错题巩固 and exam-oriented consolidation stay unit-aligned and independently usable.
- Completes curated coverage for all public installable textbook-sync Skills.

## 0.13.0 - 2026-05-21

- Curates the eighth public tail batch for daily-practice, exam-prep, and teacher-tools Skills.
- Upgrades remaining geography, history, politics, and biology public workflows around evidence reading, formative feedback, source/material analysis, and next teaching or review actions.
- Completes curated coverage for public daily-practice, exam-prep, and teacher-tools installable Skills.

## 0.12.0 - 2026-05-21

- Defines a release strategy so documentation-only and maintenance changes can be committed without creating a new version every time.
- Clarifies the two installation methods in README: first-class `npx hermes-edu-skills` usage and source-mode `npm run ... -- --category/--skill` usage.
- Renames public README command-argument columns to install selectors and shows both selector styles for categories and Skills.
- Curates the seventh 20-Skill batch for daily practice, covering preschool literacy/number sense, junior daily practice, senior English vocabulary, and junior/senior quick-practice workflows.
- Turns daily-practice Skills into short active-recall loops with immediate feedback, mistake tags, and next-review actions instead of generic worksheet generation.
- Adds stronger parent/teacher/student use guidance for 10-15 minute China-first daily learning scenarios.
- Keeps total public export scope unchanged while upgrading selected daily-practice Skills to `curated`, `recommended`, and `0.12.0` content.

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
