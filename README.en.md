# Hermes Edu Skills

An open Agent Skill Pack that gives Hermes Agent and mainstream AI tools China-focused education capabilities: preschool learning, textbook sync, exam prep, mistake review, daily practice, family learning, reading/writing, and teacher workflows.

让 Hermes Agent 和主流 AI 工具拥有中国教育场景能力的开源 Agent Skill Pack：学前启蒙、教材同步、备考复习、错题复盘、每日练习、亲子陪学、阅读写作和教师工作流。

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-188-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[中文文档](README.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

<p align="center">
  <a href="https://zhongweiv.github.io/hermes-edu-skills/demo/">
    <img src="assets/demo/poster.png" alt="Hermes Edu Skills demo preview" width="420">
  </a>
  <br>
  <strong><a href="https://zhongweiv.github.io/hermes-edu-skills/demo/">Click the cover to watch the 30-second demo, about 800KB</a></strong>
</p>

Hermes Edu Skills is an open Agent Skill Pack for Chinese education scenarios. It turns textbook sync, exam prep, photo Q&A, mistake review, daily practice, reading/writing, family learning, teacher planning, and school communication into 188 browsable, installable, and reusable product-level Skills.

It is not a generic prompt collection. It is a structured capability library that Hermes Agent can discover and load: every Skill has invocation signals, target roles, parameter dimensions, usage boundaries, and a standard `SKILL.md`. You can use it directly with Hermes Agent or export it to OpenClaw, Codex, Cursor, Claude Code, and other Agent tools.

If you are building an AI learning assistant, AI teacher, curriculum tool, family-learning product, question-bank/mistake-review product, or simply want your local Agent to understand Chinese textbooks and learning workflows better, this repository is designed to be a practical starting point. If it helps, please give it a Star so more education AI builders can discover it.

## Navigation

- [Quick Start](#quick-start)
- [What It Is](#what-it-is)
- [Why This Is Not A Prompt Collection](#why-this-is-not-a-prompt-collection)
- [Who It Is For](#who-it-is-for)
- [Category Overview](#category-overview)
- [Default: Hermes Agent](#defaulthermes-agent)
- [Help Hermes Discover Skills Proactively](#help-hermes-discover-skills-proactively)
- [Natural Questions And Skill Routing](#natural-questions-and-skill-routing)
- [Diagnostics And Troubleshooting](#diagnostics-and-troubleshooting)
- [Install A Single Skill](#install-a-single-skill)
- [Export To Other AI Tools Or Agents](#export-to-other-ai-tools-or-agents)
- [Coverage](#coverage)
- [All Skills](#all-skills)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## Quick Start

Hermes Agent is the default target. For first-time use, install one category or one Skill first, then install the full pack once you confirm the workflow.

```bash
# One-command install and enable. After this, keep using hermes / hermes chat
npx --yes hermes-edu-skills install

# Install only the textbook-sync category
npx --yes hermes-edu-skills install textbook-sync

# Install one Skill
npx --yes hermes-edu-skills install agent-study-plan

# Search before installing
npx hermes-edu-skills search mistake
npx hermes-edu-skills info agent-mistake-review

# Ask naturally: show the matched Skill, then invoke Hermes
npx hermes-edu-skills ask "Create 5 grade-8 physics mechanics questions with answers"

# Start a native Hermes session with the skills toolset enabled
npx hermes-edu-skills chat

# Inspect or manually generate the project-level Hermes Edu Skills activation prompt
npx hermes-edu-skills prompt > HERMES.md

# Diagnose install count, versions, config, and Hermes visibility
npx --yes hermes-edu-skills doctor

# Repair / update / verify / uninstall
npx --yes hermes-edu-skills fix
npx --yes hermes-edu-skills repair
npx --yes hermes-edu-skills update
npx --yes hermes-edu-skills verify
npx --yes hermes-edu-skills uninstall
```

Export to other Agent tools:

```bash
npx hermes-edu-skills install openclaw
npx hermes-edu-skills install codex
npx hermes-edu-skills install claude
npx hermes-edu-skills install cursor --workspace /path/to/project
npx hermes-edu-skills export generic --target ./dist/agent-skills
```

## What It Is

| Question | Answer |
| --- | --- |
| What | An open Agent Skill Pack for Chinese education scenarios. |
| Why | General-purpose Agents usually do not understand Chinese textbook editions, grade/semester structures, unit pacing, exam systems, or real parent/teacher workflows. |
| How | 188 structured `SKILL.md` files package education jobs into discoverable, installable, Agent-readable capabilities. |
| Default platform | Hermes Agent. |
| Export targets | OpenClaw, Codex, Cursor, Claude Code, and Generic Agent. |
| Public scope | Public Skill docs, indexes, validation, and export tooling only; no user data, secrets, or commercial backend implementation. |

## Why This Is Not A Prompt Collection

| Capability | Prompt Collection | Generic Agent Skills | Hermes Edu Skills |
| --- | :---: | :---: | :---: |
| Chinese textbook alignment | - | Usually no | Supports RJ, Tongbian, BS, SJ, LK, and other China-focused education scenarios |
| Grade / semester / unit / difficulty | Manual prompting | Partial | Skill parameters and workflow constraints |
| Real education jobs | Loose templates | General capabilities | Textbook sync, mistake review, exam prep, daily practice, and teacher workflows |
| Hermes-native discovery | - | Not guaranteed | Standard `SKILL.md` |
| Multi-Agent reuse | - | Not guaranteed | Exportable to OpenClaw, Codex, Cursor, and Claude Code |
| Chinese education language | Inconsistent | Inconsistent | Written around Chinese students, parents, teachers, and curriculum work |
| Secondary development | Low | Medium | Includes structure, indexes, validation, and installer tooling |

## Who It Is For

| Who you are | Start here | What you get |
| --- | --- | --- |
| Hermes Agent user | [Default: Hermes Agent](#defaulthermes-agent), [Learning Assistant](#learning-assistant) | Add Chinese education Skills to your local Agent. |
| Preschool parent | [Preschool](#preschool), [Family Education](#family-education) | Use 10-minute parent-child tasks for early literacy, number sense, picture books, expression, attention, fine-motor writing, and school readiness. |
| Education AI developer | [Project Structure](#project-structure), [Compatibility Notes](#compatibility-notes) | Reuse Skill structure, parameter design, and workflow naming. |
| Teacher / curriculum researcher | [Teacher Tools](#teacher-tools), [Textbook Sync](#textbook-sync) | Study lesson planning, homework generation, unit review, and sync teaching patterns. |
| Parent / family-learning product builder | [Family Education](#family-education), [Daily Practice](#daily-practice) | Build companionship, reading, habits, and daily practice scenarios. |
| School / institution team | [Teacher Tools](#teacher-tools), [Exam Prep](#exam-prep) | Explore lesson planning, homework, class analysis, review, and teaching-support workflows. |

## Category Overview

The pack currently includes 188 installable Skills across 8 product-level categories. Grade, semester, unit, lesson, knowledge point, and difficulty are parameters, not thousands of repetitive Skill files.

| Category | Install Selector | Use Case | Count |
| --- | --- | --- | ---: |
| <a href="#preschool"><code>preschool</code></a><br>Preschool | <code>CLI: preschool</code><br><code>source: --category preschool</code> | Early learning for ages 3-6 and school readiness: literacy, pinyin, number sense, picture books, expression, attention, fine-motor writing, habits, and parent-child play. | 22 |
| <a href="#textbook-sync"><code>textbook-sync</code></a><br>Textbook Sync | <code>CLI: textbook-sync</code><br><code>source: --category textbook-sync</code> | China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills. | 40 |
| <a href="#daily-practice"><code>daily-practice</code></a><br>Daily Practice | <code>CLI: daily-practice</code><br><code>source: --category daily-practice</code> | Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement. | 26 |
| <a href="#reading-writing"><code>reading-writing</code></a><br>Reading & Writing | <code>CLI: reading-writing</code><br><code>source: --category reading-writing</code> | Chinese, English, academic, and workplace reading/writing capabilities. | 11 |
| <a href="#exam-prep"><code>exam-prep</code></a><br>Exam Prep | <code>CLI: exam-prep</code><br><code>source: --category exam-prep</code> | Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep. | 30 |
| <a href="#learning-assistant"><code>learning-assistant</code></a><br>Learning Assistant | <code>CLI: learning-assistant</code><br><code>source: --category learning-assistant</code> | General learning-loop capabilities such as study plans, photo Q&A, mistake review, learning reports, attention training, and adult learning. | 21 |
| <a href="#family-education"><code>family-education</code></a><br>Family Education | <code>CLI: family-education</code><br><code>source: --category family-education</code> | Parent companionship, parent-child reading, homework routines, and family communication. | 7 |
| <a href="#teacher-tools"><code>teacher-tools</code></a><br>Teacher Tools | <code>CLI: teacher-tools</code><br><code>source: --category teacher-tools</code> | Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication. | 31 |

## Initiator And Maintainer

This project is initiated and maintained by [Shineway](https://www.shineway.tech/).

We are open-sourcing reusable education Agent Skill design so developers, teachers, researchers, schools, and education teams can explore China-focused education-agent capabilities together. This repository contains public Skill documents, indexes, validation, and export tooling only; it does not include user data or backend service implementations.

If this project is useful to you, please give it a Star. It helps more Chinese education AI builders, teachers, and Agent users discover the project.

## Default: Hermes Agent

Hermes Agent is the default target for Hermes Edu Skills. The repository's `skills/` directory is the canonical Skill source and does not need conversion before Hermes loads it. Prefer the first-class CLI for everyday use; source-mode commands remain available when running from a cloned GitHub repository.

If your environment cannot resolve the package through `npx` yet, use the source-mode commands below.

Method 1: First-class CLI install (recommended)

```bash
npx --yes hermes-edu-skills install
```

This command does four things:

- Installs 188 available Skills and updates Hermes `skills.external_dirs`.
- Merges `skills` into Hermes CLI `platform_toolsets.cli`, so ordinary `hermes chat` sessions can access Skill tools more reliably.
- Generates project-level `HERMES.md` in the current directory and writes a marked global activation addendum into the current Hermes Home `SOUL.md`, so direct `hermes` sessions from other directories also know to inspect `hermes-edu-skills`.
- Auto-discovers `hermes config path`; if Hermes is unavailable, falls back to `~/.hermes/config.yaml`. After installation, users can keep starting Hermes with `hermes` or `hermes chat`.

After installation, start a fresh Hermes session:

```bash
hermes
```

If your Hermes installation uses a non-default config file, pass it explicitly:

```bash
npx --yes hermes-edu-skills install --config /path/to/config.yaml
```

When you install only one category or one Skill, the installer generates a scoped prompt by default: category installs list only Skills from that category, and single-Skill installs explicitly tell Hermes to load that Skill first when the request is in scope.

To skip prompt generation:

```bash
npx --yes hermes-edu-skills install --no-prompt
```

If `HERMES.md` already exists, the installer will not overwrite it. Run `npx hermes-edu-skills prompt` to inspect the prompt and merge it into your existing project instructions. The global `SOUL.md` addendum is maintained only inside a marked `hermes-edu-skills` block and will not overwrite your existing content. Add `--overwrite-prompt` only when you really want to replace the project-level file.

Install a category, for example textbook sync:

```bash
npx --yes hermes-edu-skills install textbook-sync
npx --yes hermes-edu-skills install 教材同步
```

Install one Skill into Hermes Agent:

```bash
npx --yes hermes-edu-skills install agent-study-plan
```

This also generates a `HERMES.md` scoped to `agent-study-plan`, so Hermes prioritizes that Skill for study-planning requests. Existing `HERMES.md` files are not overwritten; use `--prompt-target` to write elsewhere.

Browse and search before installing:

```bash
npx hermes-edu-skills list
npx hermes-edu-skills list textbook-sync
npx hermes-edu-skills search mistake
npx hermes-edu-skills info agent-mistake-review
npx hermes-edu-skills version
```

After installation, you have two usage modes: use Hermes `-s` when you already know the Skill slug, or use the built-in Skill Router when you want to ask naturally and see which Skill is selected.

```bash
# Start a native Hermes session. After install, plain hermes is the normal path
npx hermes-edu-skills chat

# Most users can keep using the normal Hermes command
hermes

# Show matching results only; do not call Hermes
npx hermes-edu-skills match "grade 8 physics mechanics practice"

# Auto-match a Skill and call official Hermes Agent
npx hermes-edu-skills ask "Create 5 grade-8 physics mechanics questions with answers"
```

See [Natural Questions And Skill Routing](#natural-questions-and-skill-routing) for the full workflow.

Method 2: Source-mode install (after cloning from GitHub)

```bash
git clone https://github.com/zhongweiv/hermes-edu-skills.git
cd hermes-edu-skills
npm run validate
npm run install:hermes -- --config ~/.hermes/config.yaml
npm run install:hermes -- --category textbook-sync --config ~/.hermes/config.yaml
npm run install:hermes -- --skill agent-study-plan --config ~/.hermes/config.yaml
```

Print the Hermes config snippet without writing a file:

```bash
npx hermes-edu-skills install hermes
```

Then verify in Hermes:

```bash
hermes skills list
```

If Hermes shows a different count than the README or catalog, run:

```bash
npx --yes hermes-edu-skills doctor
```

See [Diagnostics And Troubleshooting](#diagnostics-and-troubleshooting) for the detailed checklist.

You can also verify through Hermes skill tools:

```python
from tools.skills_tool import skills_list, skill_view

skills_list()
skill_view("primary-math-mental-arithmetic")
```

## Help Hermes Discover Skills Proactively

Hermes native Skill selection is model-driven: the agent sees a compact Skill list first, then decides whether to call `skill_view(name)` and read the full Skill. Installing the Skill Pack does not guarantee every ordinary chat message will automatically trigger a Skill.

Hermes Edu Skills therefore provides a project-level activation prompt. It tells Hermes not to answer education questions from the base model first. Instead, Hermes should search the installed `hermes-edu-skills` Skill Pack, choose the best match from 188 installable Skills, then call `skill_view(name)` before answering.

Recommended usage:

```bash
# Print the prompt, suitable for an existing HERMES.md / .hermes.md
npx hermes-edu-skills prompt

# Write the current directory's HERMES.md
npx hermes-edu-skills prompt > HERMES.md

# Install the Skill Pack and generate HERMES.md
npx --yes hermes-edu-skills install

# Choose the prompt target
npx --yes hermes-edu-skills install --prompt-target ./HERMES.md

# Skip HERMES.md generation
npx --yes hermes-edu-skills install --no-prompt
```

This is not a replacement for deterministic `ask` routing. It strengthens Hermes-native behavior from "check Skills generally" to "search `hermes-edu-skills` first for education requests." If you need a stable `Using Skill: ...` line, use `npx hermes-edu-skills ask "<question>"`, which matches a Skill first and then calls official Hermes.

## Natural Questions And Skill Routing

Official Hermes Agent can preload a Skill with `-s`, but real users do not always know slugs such as `primary-math-mental-arithmetic` or `junior-physics-rj-textbook-sync`. Hermes Edu Skills adds a lightweight Skill Router: users ask naturally, the CLI selects the most likely Skill, and it prints which Skill is being used before invoking Hermes.

That makes the pack feel like a usable product rather than a folder of commands. A student can ask for "5 mental arithmetic questions", a teacher can ask for a junior physics mechanics quiz, and developers can use `match` to inspect retrieval quality.

| Goal | Command |
| --- | --- |
| See which Skills match a natural-language question | `npx hermes-edu-skills match "grade 8 physics mechanics practice"` |
| Let Hermes answer with the matched Skill | `npx hermes-edu-skills ask "Create 5 grade-8 physics mechanics questions with answers"` |
| Try a more casual question | `npx hermes-edu-skills match "Create 5 mental arithmetic questions"` |
| Show more candidate Skills | `npx hermes-edu-skills match "mistake review plan" --top 10` |
| Pass verbose output to Hermes | `npx hermes-edu-skills ask "make a one-week study plan" --verbose` |
| Use a custom Hermes executable | `npx hermes-edu-skills ask "junior English reading practice" --hermes-bin /path/to/hermes` |

`match` is for debugging and selection. `ask` is for daily use. It does not replace Hermes Agent; it automates "match Skill -> show Skill -> call `hermes chat --toolsets skills -s`".

| Usage Pattern | Notes |
| --- | --- |
| For everyday users | Use `ask` so users can ask naturally and see `Using Skill: ...`. |
| For product debugging | Use `match --top 10` to check whether candidates match the intent. |
| For advanced Hermes users | You can still call official Hermes directly with `hermes chat -s <skill>`. |
| Current boundary | The router is lightweight rule-based matching. Chinese education intent, textbook edition, grade/semester, and question-type recognition will continue to improve. |

## Diagnostics And Troubleshooting

A successful file install does not always mean every Skill is visible to Hermes. Different machines can have different Hermes config files, disabled lists, install directories, or npm cache states. `doctor` is the health check for that situation.

```bash
npx --yes hermes-edu-skills doctor
```

User-facing reliability commands:

| Goal | Command |
| --- | --- |
| Diagnose install count, version, config, and Hermes visibility | `npx --yes hermes-edu-skills doctor` |
| Show npm package, catalog, and installed Pack versions | `npx --yes hermes-edu-skills version` |
| One-command repair for common user issues | `npx --yes hermes-edu-skills fix` |
| Repair missing files, config links, CLI skills toolset, and the Windows `hermes` command shim | `npx --yes hermes-edu-skills repair` |
| Update to npm latest and re-enable | `npx --yes hermes-edu-skills@latest update` |
| Script/CI health check with non-zero failure exit | `npx --yes hermes-edu-skills verify` |
| Remove install directory and config external-dir link | `npx --yes hermes-edu-skills uninstall` |

| Check | What doctor inspects |
| --- | --- |
| Package version | Current CLI package version and catalog version. |
| Local files | How many `SKILL.md` files exist under `~/.hermes/skills/hermes-edu-skills`. |
| Install manifest | `AGENT_SKILL_PACK.json` version, skillCount, and install time. |
| Hermes config | Whether `~/.hermes/config.yaml` links the pack through `skills.external_dirs`. |
| Hermes command | On Windows, whether the official Hermes venv binary exists and whether plain `hermes` is callable. |
| CLI Toolset | Whether `platform_toolsets.cli` enables `skills`; otherwise plain `hermes chat` may not expose Skill tools. |
| Global Prompt | Whether the current Hermes Home `SOUL.md` contains the `hermes-edu-skills` global activation block. |
| Disabled Skills | Whether `skills.disabled` / `platform_disabled` hides any Skills. |
| Hermes visibility | How many Skills `hermes skills list --source local` actually sees. |

Common readings:

| Symptom | Check first |
| --- | --- |
| Local file count is correct, but Hermes visible count is lower | Check whether Hermes config disables or filters some Skills. |
| Local file count is 0 | The pack was not installed into the Hermes default directory, or Hermes runs under a different user. |
| Config linked = no | Hermes config does not include `skills.external_dirs`; rerun install with `--config ~/.hermes/config.yaml`. |
| Windows has Hermes installed but the shell cannot find `hermes` | Run `npx --yes hermes-edu-skills fix`; it creates a safe shim for the official venv binary and adds `~/.local/bin` to the user PATH. |
| Chat says the Skill Pack is not installed | Run `npx --yes hermes-edu-skills doctor` and inspect Global Prompt / Hermes visible, then run `npx --yes hermes-edu-skills repair` and open a fresh `hermes` session; for temporary debugging, use `npx hermes-edu-skills chat`. |
| npm is published but npx still uses an older version | Run `npx --yes hermes-edu-skills@latest doctor`, or wait for npm cache propagation. |

## Install A Single Skill

Many users only want to try one capability first instead of installing the full Skill Pack. The first-class CLI lets you place the Skill name directly after the tool name; advanced mode still supports `--skill <slug>`, repeated flags, and comma-separated lists.

| Target | Command |
| --- | --- |
| Hermes single Skill | `npx --yes hermes-edu-skills install agent-study-plan` |
| OpenClaw single Skill | `npx hermes-edu-skills install openclaw primary-math-mental-arithmetic` |
| Codex single Skill | `npx hermes-edu-skills install codex agent-socratic-tutor` |
| Claude Code single Skill | `npx hermes-edu-skills install claude agent-study-plan` |
| Cursor single Skill | `npx hermes-edu-skills install cursor agent-study-plan --workspace /path/to/project` |
| Generic Agent single Skill | `npx hermes-edu-skills export generic agent-study-plan --target ./dist/one-skill` |

Install multiple Skills at once:

```bash
npx hermes-edu-skills install openclaw agent-study-plan,agent-mistake-review
```

For the Hermes target, single-Skill and multi-Skill installs generate a scoped `HERMES.md` by default. The prompt lists only the installed Skills and tells Hermes to match within that smaller set first. Add `--no-prompt` to skip it.

If you are unsure about the slug, search first:

```bash
npx hermes-edu-skills search study-plan
npx hermes-edu-skills info agent-study-plan
```

## Export To Other AI Tools Or Agents

If you are not using Hermes Agent, you can convert this Skill Pack into layouts that other AI tools can read more easily. The source `skills/` directory remains Hermes-native; `agent-pack` handles copying, flattening, and target-tool rule generation.

| Target Tool | Command | Output / Install Location |
| --- | --- | --- |
| OpenClaw | `npx hermes-edu-skills install openclaw` | `~/.openclaw/skills/<skill-name>/SKILL.md` |
| Codex | `npx hermes-edu-skills install codex` | `$CODEX_HOME/skills` or `~/.codex/skills` |
| Claude Code | `npx hermes-edu-skills install claude` | `~/.claude/skills/<skill-name>/SKILL.md` |
| Claude Code project scope | `npx hermes-edu-skills install claude --workspace .` | `.claude/skills/<skill-name>/SKILL.md` |
| Cursor | `npx hermes-edu-skills install cursor --workspace /path/to/project` | `.cursor/rules/*.mdc` plus `.cursor/hermes-edu-skills` |
| Generic Agent | `npx hermes-edu-skills export generic` | `AGENT_SKILL_PACK.json` plus `<skill-name>/SKILL.md` |

Convert to OpenClaw format without installing into the default location:

```bash
npx hermes-edu-skills export openclaw
```

Export only one category, for example textbook sync. Each category name shows both install-selector styles. Chinese aliases such as `教材同步` are also accepted:

```bash
npx hermes-edu-skills export openclaw textbook-sync
npx hermes-edu-skills export openclaw 教材同步
```

Common category install selectors:

| What To Export | Install Selector |
| --- | --- |
| Preschool | `CLI: preschool`<br>`source: --category preschool` |
| Textbook Sync | `CLI: textbook-sync`<br>`source: --category textbook-sync` |
| Learning Assistant | `CLI: learning-assistant`<br>`source: --category learning-assistant` |
| Daily Practice | `CLI: daily-practice`<br>`source: --category daily-practice` |
| Reading & Writing | `CLI: reading-writing`<br>`source: --category reading-writing` |
| Exam Prep | `CLI: exam-prep`<br>`source: --category exam-prep` |
| Teacher Tools | `CLI: teacher-tools`<br>`source: --category teacher-tools` |
| Family Education | `CLI: family-education`<br>`source: --category family-education` |

Source mode and advanced command form remain available for integrations that need dynamic tool or target selection:

```bash
npm run agent:install -- --tool hermes --skill agent-study-plan --config ~/.hermes/config.yaml
npm run agent:convert -- --tool openclaw --category 教材同步 --target ./dist/textbook-sync-skills
```

Legacy commands remain available for compatibility:

```bash
npm run install:hermes
npm run install:openclaw
npm run export:agents
```

## Coverage

The table below shows the main subject areas by category. The next section keeps the full clickable Skill catalog; category names and Skill names can both be used as install selectors.

| Category | Install Selector | Main Areas | Count |
| --- | --- | --- | ---: |
| <a href="#preschool"><code>preschool</code></a><br>Preschool | <code>CLI: preschool</code><br><code>source: --category preschool</code> | Family Education, Chinese, Learning Skills, General, Math | 22 |
| <a href="#textbook-sync"><code>textbook-sync</code></a><br>Textbook Sync | <code>CLI: textbook-sync</code><br><code>source: --category textbook-sync</code> | Biology, Math, Chemistry, Physics, Geography | 40 |
| <a href="#daily-practice"><code>daily-practice</code></a><br>Daily Practice | <code>CLI: daily-practice</code><br><code>source: --category daily-practice</code> | Geography, Chemistry, History, Biology, Math | 26 |
| <a href="#reading-writing"><code>reading-writing</code></a><br>Reading & Writing | <code>CLI: reading-writing</code><br><code>source: --category reading-writing</code> | Chinese, English, General Education, Career Education | 11 |
| <a href="#exam-prep"><code>exam-prep</code></a><br>Exam Prep | <code>CLI: exam-prep</code><br><code>source: --category exam-prep</code> | Geography, Chemistry, History, Biology, Math | 30 |
| <a href="#learning-assistant"><code>learning-assistant</code></a><br>Learning Assistant | <code>CLI: learning-assistant</code><br><code>source: --category learning-assistant</code> | Learning Skills, Language Learning, General, Computer Science | 21 |
| <a href="#family-education"><code>family-education</code></a><br>Family Education | <code>CLI: family-education</code><br><code>source: --category family-education</code> | Family Education | 7 |
| <a href="#teacher-tools"><code>teacher-tools</code></a><br>Teacher Tools | <code>CLI: teacher-tools</code><br><code>source: --category teacher-tools</code> | Teaching Management, Geography, Chemistry, History, Biology | 31 |

## All Skills

The table below lists all 188 public Skills. The Category and Skill columns start with the exact English selector, followed by an English explanation; the Install Selector column shows both the first-class CLI selector and the source-mode npm flag.

### <a id="preschool"></a>Preschool<br>学前启蒙

Early learning for ages 3-6 and school readiness: literacy, pinyin, number sense, picture books, expression, attention, fine-motor writing, habits, and parent-child play.

Install selector: <code>CLI: preschool</code><br><code>source: --category preschool</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/preschool/preschool-parent-daily-play/SKILL.md"><code>preschool-parent-daily-play</code></a><br>Family Education workflow for Daily Early Learning, Parent-Child Learning. Focus: 亲子陪伴, Daily Early Learning. | <code>CLI: preschool-parent-daily-play</code><br><code>source: --skill preschool-parent-daily-play</code> | ✓ | Preschool | Family Education | - | 亲子陪伴, Daily Early Learning | Daily Early Learning, Parent-Child Learning |
| <a href="skills/preschool/preschool-growth-report/SKILL.md"><code>preschool-growth-report</code></a><br>Family Education workflow for 成长报告, 家园沟通. Focus: 成长观察, 家庭反馈. | <code>CLI: preschool-growth-report</code><br><code>source: --skill preschool-growth-report</code> | ✓ | Preschool | Family Education | - | 成长观察, 家庭反馈 | 成长报告, 家园沟通 |
| <a href="skills/preschool/preschool-story-retelling/SKILL.md"><code>preschool-story-retelling</code></a><br>Chinese workflow for 绘本复述, 睡前表达. Focus: 故事复述. | <code>CLI: preschool-story-retelling</code><br><code>source: --skill preschool-story-retelling</code> | ✓ | Preschool | Chinese | - | 故事复述 | 绘本复述, 睡前表达 |
| <a href="skills/preschool/preschool-memory-observation/SKILL.md"><code>preschool-memory-observation</code></a><br>Learning Skills workflow for 观察游戏, Parent-Child Learning. Focus: 观察力, 记忆力. | <code>CLI: preschool-memory-observation</code><br><code>source: --skill preschool-memory-observation</code> | ✓ | Preschool | Learning Skills | - | 观察力, 记忆力 | 观察游戏, Parent-Child Learning |
| <a href="skills/preschool/preschool-picture-book-reading/SKILL.md"><code>preschool-picture-book-reading</code></a><br>Chinese workflow for Parent-Child Reading, 睡前阅读. Focus: 绘本阅读, 理解表达. | <code>CLI: preschool-picture-book-reading</code><br><code>source: --skill preschool-picture-book-reading</code> | ✓ | Preschool | Chinese | - | 绘本阅读, 理解表达 | Parent-Child Reading, 睡前阅读 |
| <a href="skills/preschool/preschool-classroom-rules/SKILL.md"><code>preschool-classroom-rules</code></a><br>General workflow for School Readiness, 亲子演练. Focus: 规则感, 课堂准备. | <code>CLI: preschool-classroom-rules</code><br><code>source: --skill preschool-classroom-rules</code> | ✓ | Preschool | General | - | 规则感, 课堂准备 | School Readiness, 亲子演练 |
| <a href="skills/preschool/preschool-fine-motor-writing/SKILL.md"><code>preschool-fine-motor-writing</code></a><br>Learning Skills workflow for School Readiness, Daily Practice. Focus: Fine Motor Writing, Writing Readiness. | <code>CLI: preschool-fine-motor-writing</code><br><code>source: --skill preschool-fine-motor-writing</code> | ✓ | Preschool | Learning Skills | - | Fine Motor Writing, Writing Readiness | School Readiness, Daily Practice |
| <a href="skills/preschool/preschool-logic-thinking/SKILL.md"><code>preschool-logic-thinking</code></a><br>Math workflow for 逻辑游戏, Parent-Child Learning. Focus: 分类排序, 规律发现. | <code>CLI: preschool-logic-thinking</code><br><code>source: --skill preschool-logic-thinking</code> | ✓ | Preschool | Math | - | 分类排序, 规律发现 | 逻辑游戏, Parent-Child Learning |
| <a href="skills/preschool/preschool-pinyin-foundation/SKILL.md"><code>preschool-pinyin-foundation</code></a><br>Chinese workflow for School Readiness, Daily Early Learning. Focus: 拼音启蒙. | <code>CLI: preschool-pinyin-foundation</code><br><code>source: --skill preschool-pinyin-foundation</code> | ✓ | Preschool | Chinese | - | 拼音启蒙 | School Readiness, Daily Early Learning |
| <a href="skills/preschool/preschool-emotion-expression/SKILL.md"><code>preschool-emotion-expression</code></a><br>Family Education workflow for Parent-Child Communication, 情绪支持. Focus: 情绪表达. | <code>CLI: preschool-emotion-expression</code><br><code>source: --skill preschool-emotion-expression</code> | ✓ | Preschool | Family Education | - | 情绪表达 | Parent-Child Communication, 情绪支持 |
| <a href="skills/preschool/preschool-task-awareness/SKILL.md"><code>preschool-task-awareness</code></a><br>Learning Skills workflow for Habit Building, School Readiness. Focus: 任务意识. | <code>CLI: preschool-task-awareness</code><br><code>source: --skill preschool-task-awareness</code> | ✓ | Preschool | Learning Skills | - | 任务意识 | Habit Building, School Readiness |
| <a href="skills/preschool/preschool-social-skills/SKILL.md"><code>preschool-social-skills</code></a><br>Family Education workflow for 社交练习, 幼儿园适应. Focus: 同伴交往, 规则感. | <code>CLI: preschool-social-skills</code><br><code>source: --skill preschool-social-skills</code> | ✓ | Preschool | Family Education | - | 同伴交往, 规则感 | 社交练习, 幼儿园适应 |
| <a href="skills/preschool/preschool-life-habits/SKILL.md"><code>preschool-life-habits</code></a><br>Family Education workflow for 家庭陪伴, Habit Building. Focus: 生活习惯. | <code>CLI: preschool-life-habits</code><br><code>source: --skill preschool-life-habits</code> | ✓ | Preschool | Family Education | - | 生活习惯 | 家庭陪伴, Habit Building |
| <a href="skills/preschool/preschool-literacy-foundation/SKILL.md"><code>preschool-literacy-foundation</code></a><br>Chinese workflow for Daily Early Learning, Parent-Child Learning. Focus: 识字启蒙. | <code>CLI: preschool-literacy-foundation</code><br><code>source: --skill preschool-literacy-foundation</code> | ✓ | Preschool | Chinese | - | 识字启蒙 | Daily Early Learning, Parent-Child Learning |
| <a href="skills/preschool/preschool-number-sense-foundation/SKILL.md"><code>preschool-number-sense-foundation</code></a><br>Math workflow for Number Sense Games, Daily Early Learning. Focus: 数感启蒙. | <code>CLI: preschool-number-sense-foundation</code><br><code>source: --skill preschool-number-sense-foundation</code> | ✓ | Preschool | Math | - | 数感启蒙 | Number Sense Games, Daily Early Learning |
| <a href="skills/preschool/preschool-shape-space/SKILL.md"><code>preschool-shape-space</code></a><br>Math workflow for Shape Games, Parent-Child Learning. Focus: 图形空间. | <code>CLI: preschool-shape-space</code><br><code>source: --skill preschool-shape-space</code> | ✓ | Preschool | Math | - | 图形空间 | Shape Games, Parent-Child Learning |
| <a href="skills/preschool/preschool-color-shape/SKILL.md"><code>preschool-color-shape</code></a><br>General workflow for Daily Early Learning, Parent-Child Learning. Focus: 颜色形状. | <code>CLI: preschool-color-shape</code><br><code>source: --skill preschool-color-shape</code> | ✓ | Preschool | General | - | 颜色形状 | Daily Early Learning, Parent-Child Learning |
| <a href="skills/preschool/preschool-language-expression/SKILL.md"><code>preschool-language-expression</code></a><br>Chinese workflow for Expression Practice, Parent-Child Interaction. Focus: 语言表达. | <code>CLI: preschool-language-expression</code><br><code>source: --skill preschool-language-expression</code> | ✓ | Preschool | Chinese | - | 语言表达 | Expression Practice, Parent-Child Interaction |
| <a href="skills/preschool/preschool-attention-training/SKILL.md"><code>preschool-attention-training</code></a><br>Learning Skills workflow for 专注游戏, Daily Check-in. Focus: 专注力. | <code>CLI: preschool-attention-training</code><br><code>source: --skill preschool-attention-training</code> | ✓ | Preschool | Learning Skills | - | 专注力 | 专注游戏, Daily Check-in |
| <a href="skills/preschool/preschool-self-care/SKILL.md"><code>preschool-self-care</code></a><br>Family Education workflow for 家庭陪伴, School Readiness. Focus: 自理能力. | <code>CLI: preschool-self-care</code><br><code>source: --skill preschool-self-care</code> | ✓ | Preschool | Family Education | - | 自理能力 | 家庭陪伴, School Readiness |
| <a href="skills/preschool/preschool-family-readiness/SKILL.md"><code>preschool-family-readiness</code></a><br>Family Education workflow for School Readiness, Parent Study Support. Focus: Parent Study Support, School Readiness. | <code>CLI: preschool-family-readiness</code><br><code>source: --skill preschool-family-readiness</code> | ✓ | Preschool | Family Education | - | Parent Study Support, School Readiness | School Readiness, Parent Study Support |
| <a href="skills/preschool/preschool-school-readiness/SKILL.md"><code>preschool-school-readiness</code></a><br>General workflow for School Readiness, Summer Improvement. Focus: School Readiness, Habit Building. | <code>CLI: preschool-school-readiness</code><br><code>source: --skill preschool-school-readiness</code> | ✓ | Preschool | General | - | School Readiness, Habit Building | School Readiness, Summer Improvement |

### <a id="textbook-sync"></a>Textbook Sync<br>教材同步

China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills.

Install selector: <code>CLI: textbook-sync</code><br><code>source: --category textbook-sync</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md"><code>junior-biology-bs-textbook-sync</code></a><br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>CLI: junior-biology-bs-textbook-sync</code><br><code>source: --skill junior-biology-bs-textbook-sync</code> | ✓ | Junior High | Biology | BS Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md"><code>junior-math-bs-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Geometry. | <code>CLI: junior-math-bs-textbook-sync</code><br><code>source: --skill junior-math-bs-textbook-sync</code> | ✓ | Junior High | Math | BS Edition | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md"><code>senior-biology-bs-textbook-sync</code></a><br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>CLI: senior-biology-bs-textbook-sync</code><br><code>source: --skill senior-biology-bs-textbook-sync</code> | ✓ | Senior High | Biology | BS Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md"><code>senior-math-bs-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Modeling. | <code>CLI: senior-math-bs-textbook-sync</code><br><code>source: --skill senior-math-bs-textbook-sync</code> | ✓ | Senior High | Math | BS Edition | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md"><code>primary-math-bs-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Calculation, Word Problems. | <code>CLI: primary-math-bs-textbook-sync</code><br><code>source: --skill primary-math-bs-textbook-sync</code> | ✓ | Primary | Math | BS Edition | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| <a href="skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md"><code>junior-chemistry-lk-textbook-sync</code></a><br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: junior-chemistry-lk-textbook-sync</code><br><code>source: --skill junior-chemistry-lk-textbook-sync</code> | ✓ | Junior High | Chemistry | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md"><code>junior-physics-lk-textbook-sync</code></a><br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: junior-physics-lk-textbook-sync</code><br><code>source: --skill junior-physics-lk-textbook-sync</code> | ✓ | Junior High | Physics | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md"><code>senior-chemistry-lk-textbook-sync</code></a><br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: senior-chemistry-lk-textbook-sync</code><br><code>source: --skill senior-chemistry-lk-textbook-sync</code> | ✓ | Senior High | Chemistry | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md"><code>senior-physics-lk-textbook-sync</code></a><br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: senior-physics-lk-textbook-sync</code><br><code>source: --skill senior-physics-lk-textbook-sync</code> | ✓ | Senior High | Physics | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md"><code>junior-geography-rj-textbook-sync</code></a><br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>CLI: junior-geography-rj-textbook-sync</code><br><code>source: --skill junior-geography-rj-textbook-sync</code> | ✓ | Junior High | Geography | RJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md"><code>junior-chemistry-rj-textbook-sync</code></a><br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: junior-chemistry-rj-textbook-sync</code><br><code>source: --skill junior-chemistry-rj-textbook-sync</code> | ✓ | Junior High | Chemistry | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md"><code>junior-biology-rj-textbook-sync</code></a><br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>CLI: junior-biology-rj-textbook-sync</code><br><code>source: --skill junior-biology-rj-textbook-sync</code> | ✓ | Junior High | Biology | RJ Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md"><code>junior-math-rj-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Geometry. | <code>CLI: junior-math-rj-textbook-sync</code><br><code>source: --skill junior-math-rj-textbook-sync</code> | ✓ | Junior High | Math | RJ Edition | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md"><code>junior-physics-rj-textbook-sync</code></a><br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: junior-physics-rj-textbook-sync</code><br><code>source: --skill junior-physics-rj-textbook-sync</code> | ✓ | Junior High | Physics | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md"><code>junior-english-rj-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Grammar. | <code>CLI: junior-english-rj-textbook-sync</code><br><code>source: --skill junior-english-rj-textbook-sync</code> | ✓ | Junior High | English | RJ Edition | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md"><code>senior-geography-rj-textbook-sync</code></a><br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>CLI: senior-geography-rj-textbook-sync</code><br><code>source: --skill senior-geography-rj-textbook-sync</code> | ✓ | Senior High | Geography | RJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md"><code>senior-chemistry-rj-textbook-sync</code></a><br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: senior-chemistry-rj-textbook-sync</code><br><code>source: --skill senior-chemistry-rj-textbook-sync</code> | ✓ | Senior High | Chemistry | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md"><code>senior-biology-rj-textbook-sync</code></a><br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>CLI: senior-biology-rj-textbook-sync</code><br><code>source: --skill senior-biology-rj-textbook-sync</code> | ✓ | Senior High | Biology | RJ Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md"><code>senior-physics-rj-textbook-sync</code></a><br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>CLI: senior-physics-rj-textbook-sync</code><br><code>source: --skill senior-physics-rj-textbook-sync</code> | ✓ | Senior High | Physics | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md"><code>senior-english-rj-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing. | <code>CLI: senior-english-rj-textbook-sync</code><br><code>source: --skill senior-english-rj-textbook-sync</code> | ✓ | Senior High | English | RJ Edition | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md"><code>primary-math-rj-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Calculation, Word Problems. | <code>CLI: primary-math-rj-textbook-sync</code><br><code>source: --skill primary-math-rj-textbook-sync</code> | ✓ | Primary | Math | RJ Edition | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| <a href="skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md"><code>senior-math-rja-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Modeling. | <code>CLI: senior-math-rja-textbook-sync</code><br><code>source: --skill senior-math-rja-textbook-sync</code> | ✓ | Senior High | Math | RJ-A Edition | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md"><code>senior-math-rjb-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Modeling. | <code>CLI: senior-math-rjb-textbook-sync</code><br><code>source: --skill senior-math-rjb-textbook-sync</code> | ✓ | Senior High | Math | RJ-B Edition | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md"><code>primary-english-pep-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing. | <code>CLI: primary-english-pep-textbook-sync</code><br><code>source: --skill primary-english-pep-textbook-sync</code> | ✓ | Primary | English | PEP Edition | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| <a href="skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md"><code>junior-math-sj-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Geometry. | <code>CLI: junior-math-sj-textbook-sync</code><br><code>source: --skill junior-math-sj-textbook-sync</code> | ✓ | Junior High | Math | SJ Edition | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md"><code>primary-math-sj-textbook-sync</code></a><br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Calculation, Word Problems. | <code>CLI: primary-math-sj-textbook-sync</code><br><code>source: --skill primary-math-sj-textbook-sync</code> | ✓ | Primary | Math | SJ Edition | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| <a href="skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md"><code>junior-history-tongbian-textbook-sync</code></a><br>History workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>CLI: junior-history-tongbian-textbook-sync</code><br><code>source: --skill junior-history-tongbian-textbook-sync</code> | ✓ | Junior High | History | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md"><code>junior-chinese-tongbian-textbook-sync</code></a><br>Chinese workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing Expression. | <code>CLI: junior-chinese-tongbian-textbook-sync</code><br><code>source: --skill junior-chinese-tongbian-textbook-sync</code> | ✓ | Junior High | Chinese | Tongbian Edition | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md"><code>junior-politics-tongbian-textbook-sync</code></a><br>Politics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>CLI: junior-politics-tongbian-textbook-sync</code><br><code>source: --skill junior-politics-tongbian-textbook-sync</code> | ✓ | Junior High | Politics | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md"><code>senior-history-tongbian-textbook-sync</code></a><br>History workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>CLI: senior-history-tongbian-textbook-sync</code><br><code>source: --skill senior-history-tongbian-textbook-sync</code> | ✓ | Senior High | History | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md"><code>senior-chinese-tongbian-textbook-sync</code></a><br>Chinese workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Classical Chinese, Writing. | <code>CLI: senior-chinese-tongbian-textbook-sync</code><br><code>source: --skill senior-chinese-tongbian-textbook-sync</code> | ✓ | Senior High | Chinese | Tongbian Edition | Textbook Sync, Classical Chinese, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md"><code>senior-politics-tongbian-textbook-sync</code></a><br>Politics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>CLI: senior-politics-tongbian-textbook-sync</code><br><code>source: --skill senior-politics-tongbian-textbook-sync</code> | ✓ | Senior High | Politics | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md"><code>primary-chinese-tongbian-textbook-sync</code></a><br>Chinese workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing Expression. | <code>CLI: primary-chinese-tongbian-textbook-sync</code><br><code>source: --skill primary-chinese-tongbian-textbook-sync</code> | ✓ | Primary | Chinese | Tongbian Edition | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| <a href="skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md"><code>junior-english-wy-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Grammar. | <code>CLI: junior-english-wy-textbook-sync</code><br><code>source: --skill junior-english-wy-textbook-sync</code> | ✓ | Junior High | English | WY Edition | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md"><code>senior-english-wy-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing. | <code>CLI: senior-english-wy-textbook-sync</code><br><code>source: --skill senior-english-wy-textbook-sync</code> | ✓ | Senior High | English | WY Edition | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md"><code>primary-english-wy-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing. | <code>CLI: primary-english-wy-textbook-sync</code><br><code>source: --skill primary-english-wy-textbook-sync</code> | ✓ | Primary | English | WY Edition | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| <a href="skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md"><code>junior-geography-xj-textbook-sync</code></a><br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>CLI: junior-geography-xj-textbook-sync</code><br><code>source: --skill junior-geography-xj-textbook-sync</code> | ✓ | Junior High | Geography | XJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md"><code>senior-geography-xj-textbook-sync</code></a><br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>CLI: senior-geography-xj-textbook-sync</code><br><code>source: --skill senior-geography-xj-textbook-sync</code> | ✓ | Senior High | Geography | XJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| <a href="skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md"><code>junior-english-yl-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Grammar. | <code>CLI: junior-english-yl-textbook-sync</code><br><code>source: --skill junior-english-yl-textbook-sync</code> | ✓ | Junior High | English | YL Edition | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| <a href="skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md"><code>primary-english-yl-textbook-sync</code></a><br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing. | <code>CLI: primary-english-yl-textbook-sync</code><br><code>source: --skill primary-english-yl-textbook-sync</code> | ✓ | Primary | English | YL Edition | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |

### <a id="daily-practice"></a>Daily Practice<br>每日练习

Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement.

Install selector: <code>CLI: daily-practice</code><br><code>source: --category daily-practice</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/daily-practice/junior-geography-quick-practice/SKILL.md"><code>junior-geography-quick-practice</code></a><br>Geography workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-geography-quick-practice</code><br><code>source: --skill junior-geography-quick-practice</code> | ✓ | Junior High | Geography | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-chemistry-quick-practice/SKILL.md"><code>junior-chemistry-quick-practice</code></a><br>Chemistry workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-chemistry-quick-practice</code><br><code>source: --skill junior-chemistry-quick-practice</code> | ✓ | Junior High | Chemistry | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-history-quick-practice/SKILL.md"><code>junior-history-quick-practice</code></a><br>History workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-history-quick-practice</code><br><code>source: --skill junior-history-quick-practice</code> | ✓ | Junior High | History | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-biology-quick-practice/SKILL.md"><code>junior-biology-quick-practice</code></a><br>Biology workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-biology-quick-practice</code><br><code>source: --skill junior-biology-quick-practice</code> | ✓ | Junior High | Biology | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-math-quick-practice/SKILL.md"><code>junior-math-quick-practice</code></a><br>Math workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-math-quick-practice</code><br><code>source: --skill junior-math-quick-practice</code> | ✓ | Junior High | Math | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-math-daily-practice/SKILL.md"><code>junior-math-daily-practice</code></a><br>Math workflow for Daily Check-in, Targeted Practice. Focus: Calculation, Functions, Geometry. | <code>CLI: junior-math-daily-practice</code><br><code>source: --skill junior-math-daily-practice</code> | ✓ | Junior High | Math | - | Calculation, Functions, Geometry | Daily Check-in, Targeted Practice |
| <a href="skills/daily-practice/junior-physics-quick-practice/SKILL.md"><code>junior-physics-quick-practice</code></a><br>Physics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-physics-quick-practice</code><br><code>source: --skill junior-physics-quick-practice</code> | ✓ | Junior High | Physics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-english-vocabulary-daily/SKILL.md"><code>junior-english-vocabulary-daily</code></a><br>English workflow for Daily Check-in, High School Entrance Exam Review. Focus: Vocabulary. | <code>CLI: junior-english-vocabulary-daily</code><br><code>source: --skill junior-english-vocabulary-daily</code> | ✓ | Junior High | English | - | Vocabulary | Daily Check-in, High School Entrance Exam Review |
| <a href="skills/daily-practice/junior-english-quick-practice/SKILL.md"><code>junior-english-quick-practice</code></a><br>English workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-english-quick-practice</code><br><code>source: --skill junior-english-quick-practice</code> | ✓ | Junior High | English | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-chinese-quick-practice/SKILL.md"><code>junior-chinese-quick-practice</code></a><br>Chinese workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-chinese-quick-practice</code><br><code>source: --skill junior-chinese-quick-practice</code> | ✓ | Junior High | Chinese | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/junior-politics-quick-practice/SKILL.md"><code>junior-politics-quick-practice</code></a><br>Politics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: junior-politics-quick-practice</code><br><code>source: --skill junior-politics-quick-practice</code> | ✓ | Junior High | Politics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-geography-quick-practice/SKILL.md"><code>senior-geography-quick-practice</code></a><br>Geography workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-geography-quick-practice</code><br><code>source: --skill senior-geography-quick-practice</code> | ✓ | Senior High | Geography | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-chemistry-quick-practice/SKILL.md"><code>senior-chemistry-quick-practice</code></a><br>Chemistry workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-chemistry-quick-practice</code><br><code>source: --skill senior-chemistry-quick-practice</code> | ✓ | Senior High | Chemistry | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-history-quick-practice/SKILL.md"><code>senior-history-quick-practice</code></a><br>History workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-history-quick-practice</code><br><code>source: --skill senior-history-quick-practice</code> | ✓ | Senior High | History | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-biology-quick-practice/SKILL.md"><code>senior-biology-quick-practice</code></a><br>Biology workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-biology-quick-practice</code><br><code>source: --skill senior-biology-quick-practice</code> | ✓ | Senior High | Biology | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-math-quick-practice/SKILL.md"><code>senior-math-quick-practice</code></a><br>Math workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-math-quick-practice</code><br><code>source: --skill senior-math-quick-practice</code> | ✓ | Senior High | Math | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-physics-quick-practice/SKILL.md"><code>senior-physics-quick-practice</code></a><br>Physics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-physics-quick-practice</code><br><code>source: --skill senior-physics-quick-practice</code> | ✓ | Senior High | Physics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-english-vocabulary-daily/SKILL.md"><code>senior-english-vocabulary-daily</code></a><br>English workflow for Daily Check-in, Gaokao Review. Focus: Vocabulary. | <code>CLI: senior-english-vocabulary-daily</code><br><code>source: --skill senior-english-vocabulary-daily</code> | ✓ | Senior High | English | - | Vocabulary | Daily Check-in, Gaokao Review |
| <a href="skills/daily-practice/senior-english-quick-practice/SKILL.md"><code>senior-english-quick-practice</code></a><br>English workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-english-quick-practice</code><br><code>source: --skill senior-english-quick-practice</code> | ✓ | Senior High | English | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-chinese-quick-practice/SKILL.md"><code>senior-chinese-quick-practice</code></a><br>Chinese workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-chinese-quick-practice</code><br><code>source: --skill senior-chinese-quick-practice</code> | ✓ | Senior High | Chinese | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/senior-politics-quick-practice/SKILL.md"><code>senior-politics-quick-practice</code></a><br>Politics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>CLI: senior-politics-quick-practice</code><br><code>source: --skill senior-politics-quick-practice</code> | ✓ | Senior High | Politics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| <a href="skills/daily-practice/primary-chinese-recitation-daily/SKILL.md"><code>primary-chinese-recitation-daily</code></a><br>Chinese workflow for Recitation and Memory, Daily Check-in. Focus: Recitation, Reading Aloud. | <code>CLI: primary-chinese-recitation-daily</code><br><code>source: --skill primary-chinese-recitation-daily</code> | ✓ | Primary | Chinese | - | Recitation, Reading Aloud | Recitation and Memory, Daily Check-in |
| <a href="skills/daily-practice/primary-math-mental-arithmetic/SKILL.md"><code>primary-math-mental-arithmetic</code></a><br>Math workflow for Mental Arithmetic Drill, Daily Check-in. Focus: Calculation, Number Sense. | <code>CLI: primary-math-mental-arithmetic</code><br><code>source: --skill primary-math-mental-arithmetic</code> | ✓ | Primary | Math | - | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| <a href="skills/daily-practice/primary-english-vocabulary-daily/SKILL.md"><code>primary-english-vocabulary-daily</code></a><br>English workflow for Daily Check-in, Dictation Practice. Focus: Vocabulary, Silent Dictation. | <code>CLI: primary-english-vocabulary-daily</code><br><code>source: --skill primary-english-vocabulary-daily</code> | ✓ | Primary | English | - | Vocabulary, Silent Dictation | Daily Check-in, Dictation Practice |
| <a href="skills/daily-practice/primary-chinese-dictation-daily/SKILL.md"><code>primary-chinese-dictation-daily</code></a><br>Chinese workflow for Dictation Practice, Daily Check-in. Focus: Dictation, Silent Dictation. | <code>CLI: primary-chinese-dictation-daily</code><br><code>source: --skill primary-chinese-dictation-daily</code> | ✓ | Primary | Chinese | - | Dictation, Silent Dictation | Dictation Practice, Daily Check-in |
| <a href="skills/daily-practice/primary-reading-daily/SKILL.md"><code>primary-reading-daily</code></a><br>Chinese workflow for Reading Practice, Daily Check-in. Focus: Reading Comprehension. | <code>CLI: primary-reading-daily</code><br><code>source: --skill primary-reading-daily</code> | ✓ | Primary | Chinese | - | Reading Comprehension | Reading Practice, Daily Check-in |

### <a id="reading-writing"></a>Reading & Writing<br>阅读写作

Chinese, English, academic, and workplace reading/writing capabilities.

Install selector: <code>CLI: reading-writing</code><br><code>source: --category reading-writing</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/reading-writing/junior-chinese-modern-reading/SKILL.md"><code>junior-chinese-modern-reading</code></a><br>Chinese workflow for High School Entrance Exam Review. Focus: Reading Comprehension. | <code>CLI: junior-chinese-modern-reading</code><br><code>source: --skill junior-chinese-modern-reading</code> | ✓ | Junior High | Chinese | - | Reading Comprehension | High School Entrance Exam Review |
| <a href="skills/reading-writing/junior-english-writing/SKILL.md"><code>junior-english-writing</code></a><br>English workflow for High School Entrance Exam Review. Focus: Writing. | <code>CLI: junior-english-writing</code><br><code>source: --skill junior-english-writing</code> | ✓ | Junior High | English | - | Writing | High School Entrance Exam Review |
| <a href="skills/reading-writing/junior-chinese-composition/SKILL.md"><code>junior-chinese-composition</code></a><br>Chinese workflow for Writing Improvement. Focus: Writing. | <code>CLI: junior-chinese-composition</code><br><code>source: --skill junior-chinese-composition</code> | ✓ | Junior High | Chinese | - | Writing | Writing Improvement |
| <a href="skills/reading-writing/senior-english-writing/SKILL.md"><code>senior-english-writing</code></a><br>English workflow for Gaokao Review. Focus: Writing. | <code>CLI: senior-english-writing</code><br><code>source: --skill senior-english-writing</code> | ✓ | Senior High | English | - | Writing | Gaokao Review |
| <a href="skills/reading-writing/senior-chinese-reading/SKILL.md"><code>senior-chinese-reading</code></a><br>Chinese workflow for Gaokao Review. Focus: Reading Comprehension. | <code>CLI: senior-chinese-reading</code><br><code>source: --skill senior-chinese-reading</code> | ✓ | Senior High | Chinese | - | Reading Comprehension | Gaokao Review |
| <a href="skills/reading-writing/senior-chinese-essay/SKILL.md"><code>senior-chinese-essay</code></a><br>Chinese workflow for Writing Improvement. Focus: Writing. | <code>CLI: senior-chinese-essay</code><br><code>source: --skill senior-chinese-essay</code> | ✓ | Senior High | Chinese | - | Writing | Writing Improvement |
| <a href="skills/reading-writing/primary-english-reading/SKILL.md"><code>primary-english-reading</code></a><br>English workflow for Reading Practice. Focus: Reading Comprehension. | <code>CLI: primary-english-reading</code><br><code>source: --skill primary-english-reading</code> | ✓ | Primary | English | - | Reading Comprehension | Reading Practice |
| <a href="skills/reading-writing/primary-chinese-reading/SKILL.md"><code>primary-chinese-reading</code></a><br>Chinese workflow for Reading Practice. Focus: Reading Comprehension. | <code>CLI: primary-chinese-reading</code><br><code>source: --skill primary-chinese-reading</code> | ✓ | Primary | Chinese | - | Reading Comprehension | Reading Practice |
| <a href="skills/reading-writing/primary-chinese-writing/SKILL.md"><code>primary-chinese-writing</code></a><br>Chinese workflow for Writing Improvement. Focus: Writing, Expression. | <code>CLI: primary-chinese-writing</code><br><code>source: --skill primary-chinese-writing</code> | ✓ | Primary | Chinese | - | Writing, Expression | Writing Improvement |
| <a href="skills/reading-writing/college-academic-writing/SKILL.md"><code>college-academic-writing</code></a><br>General Education workflow for Paper Writing Practice. Focus: Writing. | <code>CLI: college-academic-writing</code><br><code>source: --skill college-academic-writing</code> | ✓ | College | General Education | - | Writing | Paper Writing Practice |
| <a href="skills/reading-writing/adult-workplace-writing/SKILL.md"><code>adult-workplace-writing</code></a><br>Career Education workflow for Career Skills. Focus: Writing, Expression. | <code>CLI: adult-workplace-writing</code><br><code>source: --skill adult-workplace-writing</code> | ✓ | Adult | Career Education | - | Writing, Expression | Career Skills |

### <a id="exam-prep"></a>Exam Prep<br>考试备考

Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep.

Install selector: <code>CLI: exam-prep</code><br><code>source: --category exam-prep</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/exam-prep/junior-geography-exam-review/SKILL.md"><code>junior-geography-exam-review</code></a><br>Geography workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-geography-exam-review</code><br><code>source: --skill junior-geography-exam-review</code> | ✓ | Junior High | Geography | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-chemistry-exam-review/SKILL.md"><code>junior-chemistry-exam-review</code></a><br>Chemistry workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-chemistry-exam-review</code><br><code>source: --skill junior-chemistry-exam-review</code> | ✓ | Junior High | Chemistry | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-history-exam-review/SKILL.md"><code>junior-history-exam-review</code></a><br>History workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-history-exam-review</code><br><code>source: --skill junior-history-exam-review</code> | ✓ | Junior High | History | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-biology-exam-review/SKILL.md"><code>junior-biology-exam-review</code></a><br>Biology workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-biology-exam-review</code><br><code>source: --skill junior-biology-exam-review</code> | ✓ | Junior High | Biology | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-math-exam-review/SKILL.md"><code>junior-math-exam-review</code></a><br>Math workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-math-exam-review</code><br><code>source: --skill junior-math-exam-review</code> | ✓ | Junior High | Math | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-physics-exam-review/SKILL.md"><code>junior-physics-exam-review</code></a><br>Physics workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-physics-exam-review</code><br><code>source: --skill junior-physics-exam-review</code> | ✓ | Junior High | Physics | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-english-exam-review/SKILL.md"><code>junior-english-exam-review</code></a><br>English workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-english-exam-review</code><br><code>source: --skill junior-english-exam-review</code> | ✓ | Junior High | English | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-chinese-exam-review/SKILL.md"><code>junior-chinese-exam-review</code></a><br>Chinese workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-chinese-exam-review</code><br><code>source: --skill junior-chinese-exam-review</code> | ✓ | Junior High | Chinese | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/junior-politics-exam-review/SKILL.md"><code>junior-politics-exam-review</code></a><br>Politics workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: junior-politics-exam-review</code><br><code>source: --skill junior-politics-exam-review</code> | ✓ | Junior High | Politics | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/college-cet6-sprint/SKILL.md"><code>college-cet6-sprint</code></a><br>English workflow for Pre-Exam Sprint. Focus: Vocabulary, Listening, Reading Comprehension, Writing. | <code>CLI: college-cet6-sprint</code><br><code>source: --skill college-cet6-sprint</code> | ✓ | College | English | - | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| <a href="skills/exam-prep/college-cet4-sprint/SKILL.md"><code>college-cet4-sprint</code></a><br>English workflow for Pre-Exam Sprint. Focus: Vocabulary, Listening, Reading Comprehension, Writing. | <code>CLI: college-cet4-sprint</code><br><code>source: --skill college-cet4-sprint</code> | ✓ | College | English | - | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-gaokao-sprint/SKILL.md"><code>senior-gaokao-sprint</code></a><br>General workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Sprint. | <code>CLI: senior-gaokao-sprint</code><br><code>source: --skill senior-gaokao-sprint</code> | ✓ | Senior High | General | - | Exam Sprint | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-geography-exam-review/SKILL.md"><code>senior-geography-exam-review</code></a><br>Geography workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-geography-exam-review</code><br><code>source: --skill senior-geography-exam-review</code> | ✓ | Senior High | Geography | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-chemistry-exam-review/SKILL.md"><code>senior-chemistry-exam-review</code></a><br>Chemistry workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-chemistry-exam-review</code><br><code>source: --skill senior-chemistry-exam-review</code> | ✓ | Senior High | Chemistry | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-history-exam-review/SKILL.md"><code>senior-history-exam-review</code></a><br>History workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-history-exam-review</code><br><code>source: --skill senior-history-exam-review</code> | ✓ | Senior High | History | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-biology-exam-review/SKILL.md"><code>senior-biology-exam-review</code></a><br>Biology workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-biology-exam-review</code><br><code>source: --skill senior-biology-exam-review</code> | ✓ | Senior High | Biology | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-math-exam-review/SKILL.md"><code>senior-math-exam-review</code></a><br>Math workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-math-exam-review</code><br><code>source: --skill senior-math-exam-review</code> | ✓ | Senior High | Math | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-physics-exam-review/SKILL.md"><code>senior-physics-exam-review</code></a><br>Physics workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-physics-exam-review</code><br><code>source: --skill senior-physics-exam-review</code> | ✓ | Senior High | Physics | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-english-exam-review/SKILL.md"><code>senior-english-exam-review</code></a><br>English workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-english-exam-review</code><br><code>source: --skill senior-english-exam-review</code> | ✓ | Senior High | English | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-chinese-exam-review/SKILL.md"><code>senior-chinese-exam-review</code></a><br>Chinese workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-chinese-exam-review</code><br><code>source: --skill senior-chinese-exam-review</code> | ✓ | Senior High | Chinese | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/senior-politics-exam-review/SKILL.md"><code>senior-politics-exam-review</code></a><br>Politics workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>CLI: senior-politics-exam-review</code><br><code>source: --skill senior-politics-exam-review</code> | ✓ | Senior High | Politics | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| <a href="skills/exam-prep/civil-service-essay/SKILL.md"><code>civil-service-essay</code></a><br>Career Education workflow for Certification, Writing Improvement. Focus: Source Reading, Writing. | <code>CLI: civil-service-essay</code><br><code>source: --skill civil-service-essay</code> | ✓ | Adult | Career Education | - | Source Reading, Writing | Certification, Writing Improvement |
| <a href="skills/exam-prep/civil-service-aptitude/SKILL.md"><code>civil-service-aptitude</code></a><br>Career Education workflow for Certification, Targeted Practice. Focus: Logic, Data Analysis. | <code>CLI: civil-service-aptitude</code><br><code>source: --skill civil-service-aptitude</code> | ✓ | Adult | Career Education | - | Logic, Data Analysis | Certification, Targeted Practice |
| <a href="skills/exam-prep/teacher-certification-sprint/SKILL.md"><code>teacher-certification-sprint</code></a><br>Career Education workflow for Certification. Focus: Exam Sprint. | <code>CLI: teacher-certification-sprint</code><br><code>source: --skill teacher-certification-sprint</code> | ✓ | Adult | Career Education | - | Exam Sprint | Certification |
| <a href="skills/exam-prep/postgraduate-english-sprint/SKILL.md"><code>postgraduate-english-sprint</code></a><br>English workflow for Postgraduate Exam Review. Focus: Reading Comprehension, Translation, Writing. | <code>CLI: postgraduate-english-sprint</code><br><code>source: --skill postgraduate-english-sprint</code> | ✓ | College<br>Adult | English | - | Reading Comprehension, Translation, Writing | Postgraduate Exam Review |
| <a href="skills/exam-prep/toefl-prep/SKILL.md"><code>toefl-prep</code></a><br>English workflow for Study-Abroad Exams. Focus: Listening, Speaking, Reading Comprehension, Writing. | <code>CLI: toefl-prep</code><br><code>source: --skill toefl-prep</code> | ✓ | College<br>Adult | English | - | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |
| <a href="skills/exam-prep/primary-final-review/SKILL.md"><code>primary-final-review</code></a><br>General workflow for Midterm and Final Review. Focus: Exam Review. | <code>CLI: primary-final-review</code><br><code>source: --skill primary-final-review</code> | ✓ | Primary | General | - | Exam Review | Midterm and Final Review |
| <a href="skills/exam-prep/ielts-prep/SKILL.md"><code>ielts-prep</code></a><br>English workflow for Study-Abroad Exams. Focus: Listening, Speaking, Reading Comprehension, Writing. | <code>CLI: ielts-prep</code><br><code>source: --skill ielts-prep</code> | ✓ | College<br>Adult | English | - | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |
| <a href="skills/exam-prep/adult-vocational-certificate/SKILL.md"><code>adult-vocational-certificate</code></a><br>Career Education workflow for Certification. Focus: Knowledge Memorization, Exam Sprint. | <code>CLI: adult-vocational-certificate</code><br><code>source: --skill adult-vocational-certificate</code> | ✓ | Adult | Career Education | - | Knowledge Memorization, Exam Sprint | Certification |
| <a href="skills/exam-prep/junior-zhongkao-sprint/SKILL.md"><code>junior-zhongkao-sprint</code></a><br>General workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Sprint. | <code>CLI: junior-zhongkao-sprint</code><br><code>source: --skill junior-zhongkao-sprint</code> | ✓ | Junior High | General | - | Exam Sprint | High School Entrance Exam Review, Pre-Exam Sprint |

### <a id="learning-assistant"></a>Learning Assistant<br>学习助手

General learning-loop capabilities such as study plans, photo Q&A, mistake review, learning reports, attention training, and adult learning.

Install selector: <code>CLI: learning-assistant</code><br><code>source: --category learning-assistant</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/learning-assistant/agent-weakness-boost/SKILL.md"><code>agent-weakness-boost</code></a><br>Learning Skills workflow for Targeted Practice. Focus: Gap Diagnosis. | <code>CLI: agent-weakness-boost</code><br><code>source: --skill agent-weakness-boost</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Gap Diagnosis | Targeted Practice |
| <a href="skills/learning-assistant/adult-language-learning/SKILL.md"><code>adult-language-learning</code></a><br>Language Learning workflow for Daily Check-in. Focus: Speaking, Listening, Vocabulary. | <code>CLI: adult-language-learning</code><br><code>source: --skill adult-language-learning</code> | ✓ | Adult | Language Learning | - | Speaking, Listening, Vocabulary | Daily Check-in |
| <a href="skills/learning-assistant/agent-mistake-review/SKILL.md"><code>agent-mistake-review</code></a><br>Learning Skills workflow for Mistake Correction, Unit Review. Focus: Mistake Correction, Review Planning. | <code>CLI: agent-mistake-review</code><br><code>source: --skill agent-mistake-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Mistake Correction, Review Planning | Mistake Correction, Unit Review |
| <a href="skills/learning-assistant/agent-review-assistant/SKILL.md"><code>agent-review-assistant</code></a><br>Learning Skills workflow for Unit Review. Focus: Review Planning. | <code>CLI: agent-review-assistant</code><br><code>source: --skill agent-review-assistant</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Review Planning | Unit Review |
| <a href="skills/learning-assistant/agent-holiday-plan/SKILL.md"><code>agent-holiday-plan</code></a><br>Learning Skills workflow for Holiday Improvement. Focus: Holiday Planning. | <code>CLI: agent-holiday-plan</code><br><code>source: --skill agent-holiday-plan</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Holiday Planning | Holiday Improvement |
| <a href="skills/learning-assistant/agent-memory-method/SKILL.md"><code>agent-memory-method</code></a><br>Learning Skills workflow for Recitation and Memory. Focus: Memory. | <code>CLI: agent-memory-method</code><br><code>source: --skill agent-memory-method</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Memory | Recitation and Memory |
| <a href="skills/learning-assistant/agent-preview-assistant/SKILL.md"><code>agent-preview-assistant</code></a><br>Learning Skills workflow for Pre-Class Preview. Focus: Preview. | <code>CLI: agent-preview-assistant</code><br><code>source: --skill agent-preview-assistant</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Preview | Pre-Class Preview |
| <a href="skills/learning-assistant/agent-weekly-review/SKILL.md"><code>agent-weekly-review</code></a><br>Learning Skills workflow for Learning Report. Focus: Stage Review. | <code>CLI: agent-weekly-review</code><br><code>source: --skill agent-weekly-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Stage Review | Learning Report |
| <a href="skills/learning-assistant/agent-photo-question/SKILL.md"><code>agent-photo-question</code></a><br>General workflow for Photo Q&A, Homework. Focus: AI Question Explanation, Image Question Recognition. | <code>CLI: agent-photo-question</code><br><code>source: --skill agent-photo-question</code> | - | Primary<br>Junior High<br>Senior High | General | - | AI Question Explanation, Image Question Recognition | Photo Q&A, Homework |
| <a href="skills/learning-assistant/agent-socratic-tutor/SKILL.md"><code>agent-socratic-tutor</code></a><br>Learning Skills workflow for AI Question Explanation. Focus: Socratic Questioning. | <code>CLI: agent-socratic-tutor</code><br><code>source: --skill agent-socratic-tutor</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Socratic Questioning | AI Question Explanation |
| <a href="skills/learning-assistant/college-data-analysis/SKILL.md"><code>college-data-analysis</code></a><br>Computer Science workflow for Career Skills. Focus: Data Analysis. | <code>CLI: college-data-analysis</code><br><code>source: --skill college-data-analysis</code> | ✓ | College<br>Adult | Computer Science | - | Data Analysis | Career Skills |
| <a href="skills/learning-assistant/college-cs-data-structure/SKILL.md"><code>college-cs-data-structure</code></a><br>Computer Science workflow for Course Learning. Focus: Algorithms, Programming. | <code>CLI: college-cs-data-structure</code><br><code>source: --skill college-cs-data-structure</code> | ✓ | College | Computer Science | - | Algorithms, Programming | Course Learning |
| <a href="skills/learning-assistant/college-cs-algorithm-interview/SKILL.md"><code>college-cs-algorithm-interview</code></a><br>Computer Science workflow for Interview Preparation. Focus: Algorithms. | <code>CLI: college-cs-algorithm-interview</code><br><code>source: --skill college-cs-algorithm-interview</code> | ✓ | College<br>Adult | Computer Science | - | Algorithms | Interview Preparation |
| <a href="skills/learning-assistant/agent-learning-report/SKILL.md"><code>agent-learning-report</code></a><br>Learning Skills workflow for Learning Report, Parent Communication. Focus: Learning Report, Learning Advice. | <code>CLI: agent-learning-report</code><br><code>source: --skill agent-learning-report</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Learning Report, Learning Advice | Learning Report, Parent Communication |
| <a href="skills/learning-assistant/agent-study-plan/SKILL.md"><code>agent-study-plan</code></a><br>Learning Skills workflow for Daily Study, Holiday Improvement, Pre-Exam Planning. Focus: Study Planning, Goal Management. | <code>CLI: agent-study-plan</code><br><code>source: --skill agent-study-plan</code> | ✓ | Preschool<br>Primary<br>Junior High<br>Senior High<br>College<br>Adult | Learning Skills | - | Study Planning, Goal Management | Daily Study, Holiday Improvement, Pre-Exam Planning |
| <a href="skills/learning-assistant/agent-learning-habit/SKILL.md"><code>agent-learning-habit</code></a><br>Learning Skills workflow for Daily Check-in. Focus: Habit Building. | <code>CLI: agent-learning-habit</code><br><code>source: --skill agent-learning-habit</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Habit Building | Daily Check-in |
| <a href="skills/learning-assistant/agent-focus-training/SKILL.md"><code>agent-focus-training</code></a><br>Learning Skills workflow for Daily Check-in. Focus: Attention. | <code>CLI: agent-focus-training</code><br><code>source: --skill agent-focus-training</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Attention | Daily Check-in |
| <a href="skills/learning-assistant/agent-homework-companion/SKILL.md"><code>agent-homework-companion</code></a><br>Learning Skills workflow for Homework. Focus: Homework Companion. | <code>CLI: agent-homework-companion</code><br><code>source: --skill agent-homework-companion</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Homework Companion | Homework |
| <a href="skills/learning-assistant/college-ai-foundation/SKILL.md"><code>college-ai-foundation</code></a><br>Computer Science workflow for Interest Learning. Focus: AI Foundations. | <code>CLI: college-ai-foundation</code><br><code>source: --skill college-ai-foundation</code> | ✓ | College<br>Adult | Computer Science | - | AI Foundations | Interest Learning |
| <a href="skills/learning-assistant/agent-question-explanation/SKILL.md"><code>agent-question-explanation</code></a><br>Learning Skills workflow for Homework, Synchronized Reinforcement. Focus: AI Question Explanation, Transfer Practice. | <code>CLI: agent-question-explanation</code><br><code>source: --skill agent-question-explanation</code> | ✓ | Primary<br>Junior High<br>Senior High<br>College | Learning Skills | - | AI Question Explanation, Transfer Practice | Homework, Synchronized Reinforcement |
| <a href="skills/learning-assistant/college-cs-python/SKILL.md"><code>college-cs-python</code></a><br>Computer Science workflow for Career Skills. Focus: Programming. | <code>CLI: college-cs-python</code><br><code>source: --skill college-cs-python</code> | ✓ | College<br>Adult | Computer Science | - | Programming | Career Skills |

### <a id="family-education"></a>Family Education<br>家庭教育

Parent companionship, parent-child reading, homework routines, and family communication.

Install selector: <code>CLI: family-education</code><br><code>source: --category family-education</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/family-education/family-homework-routine/SKILL.md"><code>family-homework-routine</code></a><br>Family Education workflow for Homework Companion. Focus: Parent Study Support. | <code>CLI: family-homework-routine</code><br><code>source: --skill family-homework-routine</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Homework Companion |
| <a href="skills/family-education/family-school-communication/SKILL.md"><code>family-school-communication</code></a><br>Family Education workflow for Parent Communication. Focus: Parent Study Support. | <code>CLI: family-school-communication</code><br><code>source: --skill family-school-communication</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Parent Communication |
| <a href="skills/family-education/agent-parent-companion/SKILL.md"><code>agent-parent-companion</code></a><br>Family Education workflow for Parent Study Support. Focus: Parent Study Support, Goal Management. | <code>CLI: agent-parent-companion</code><br><code>source: --skill agent-parent-companion</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support, Goal Management | Parent Study Support |
| <a href="skills/family-education/family-holiday-learning/SKILL.md"><code>family-holiday-learning</code></a><br>Family Education workflow for Holiday Improvement. Focus: Parent Study Support. | <code>CLI: family-holiday-learning</code><br><code>source: --skill family-holiday-learning</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Holiday Improvement |
| <a href="skills/family-education/family-screen-time-balance/SKILL.md"><code>family-screen-time-balance</code></a><br>Family Education workflow for Habit Building. Focus: Parent Study Support. | <code>CLI: family-screen-time-balance</code><br><code>source: --skill family-screen-time-balance</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Habit Building |
| <a href="skills/family-education/family-reading-companion/SKILL.md"><code>family-reading-companion</code></a><br>Family Education workflow for Parent-Child Reading. Focus: Parent Study Support. | <code>CLI: family-reading-companion</code><br><code>source: --skill family-reading-companion</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Parent-Child Reading |
| <a href="skills/family-education/family-emotion-support/SKILL.md"><code>family-emotion-support</code></a><br>Family Education workflow for Parent-Child Communication. Focus: Parent Study Support. | <code>CLI: family-emotion-support</code><br><code>source: --skill family-emotion-support</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Parent-Child Communication |

### <a id="teacher-tools"></a>Teacher Tools<br>老师工具

Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication.

Install selector: <code>CLI: teacher-tools</code><br><code>source: --category teacher-tools</code>

| Skill | Install Selector | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/teacher-tools/teacher-class-analysis-lite/SKILL.md"><code>teacher-class-analysis-lite</code></a><br>Teaching Management workflow for Learning Analysis. Focus: Learning Analysis. | <code>CLI: teacher-class-analysis-lite</code><br><code>source: --skill teacher-class-analysis-lite</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Learning Analysis | Learning Analysis |
| <a href="skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md"><code>teacher-geography-lesson-planning</code></a><br>Geography workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-geography-lesson-planning</code><br><code>source: --skill teacher-geography-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Geography | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-geography-unit-review/SKILL.md"><code>teacher-geography-unit-review</code></a><br>Geography workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-geography-unit-review</code><br><code>source: --skill teacher-geography-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Geography | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-geography-homework-generation/SKILL.md"><code>teacher-geography-homework-generation</code></a><br>Geography workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-geography-homework-generation</code><br><code>source: --skill teacher-geography-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Geography | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md"><code>teacher-chemistry-lesson-planning</code></a><br>Chemistry workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-chemistry-lesson-planning</code><br><code>source: --skill teacher-chemistry-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Chemistry | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md"><code>teacher-chemistry-unit-review</code></a><br>Chemistry workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-chemistry-unit-review</code><br><code>source: --skill teacher-chemistry-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Chemistry | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md"><code>teacher-chemistry-homework-generation</code></a><br>Chemistry workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-chemistry-homework-generation</code><br><code>source: --skill teacher-chemistry-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Chemistry | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-parent-report-lite/SKILL.md"><code>teacher-parent-report-lite</code></a><br>Teaching Management workflow for Parent Communication. Focus: Report Generation. | <code>CLI: teacher-parent-report-lite</code><br><code>source: --skill teacher-parent-report-lite</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Report Generation | Parent Communication |
| <a href="skills/teacher-tools/teacher-lesson-planning/SKILL.md"><code>teacher-lesson-planning</code></a><br>Teaching Management workflow for Lesson Preparation. Focus: Instructional Design, Learning Analysis. | <code>CLI: teacher-lesson-planning</code><br><code>source: --skill teacher-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Instructional Design, Learning Analysis | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-history-lesson-planning/SKILL.md"><code>teacher-history-lesson-planning</code></a><br>History workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-history-lesson-planning</code><br><code>source: --skill teacher-history-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | History | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-history-unit-review/SKILL.md"><code>teacher-history-unit-review</code></a><br>History workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-history-unit-review</code><br><code>source: --skill teacher-history-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | History | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-history-homework-generation/SKILL.md"><code>teacher-history-homework-generation</code></a><br>History workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-history-homework-generation</code><br><code>source: --skill teacher-history-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | History | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md"><code>teacher-biology-lesson-planning</code></a><br>Biology workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-biology-lesson-planning</code><br><code>source: --skill teacher-biology-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Biology | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-biology-unit-review/SKILL.md"><code>teacher-biology-unit-review</code></a><br>Biology workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-biology-unit-review</code><br><code>source: --skill teacher-biology-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Biology | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-biology-homework-generation/SKILL.md"><code>teacher-biology-homework-generation</code></a><br>Biology workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-biology-homework-generation</code><br><code>source: --skill teacher-biology-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Biology | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-math-lesson-planning/SKILL.md"><code>teacher-math-lesson-planning</code></a><br>Math workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-math-lesson-planning</code><br><code>source: --skill teacher-math-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Math | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-math-unit-review/SKILL.md"><code>teacher-math-unit-review</code></a><br>Math workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-math-unit-review</code><br><code>source: --skill teacher-math-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Math | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-math-homework-generation/SKILL.md"><code>teacher-math-homework-generation</code></a><br>Math workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-math-homework-generation</code><br><code>source: --skill teacher-math-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Math | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md"><code>teacher-physics-lesson-planning</code></a><br>Physics workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-physics-lesson-planning</code><br><code>source: --skill teacher-physics-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Physics | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-physics-unit-review/SKILL.md"><code>teacher-physics-unit-review</code></a><br>Physics workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-physics-unit-review</code><br><code>source: --skill teacher-physics-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Physics | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-physics-homework-generation/SKILL.md"><code>teacher-physics-homework-generation</code></a><br>Physics workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-physics-homework-generation</code><br><code>source: --skill teacher-physics-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Physics | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-english-lesson-planning/SKILL.md"><code>teacher-english-lesson-planning</code></a><br>English workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-english-lesson-planning</code><br><code>source: --skill teacher-english-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | English | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-english-unit-review/SKILL.md"><code>teacher-english-unit-review</code></a><br>English workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-english-unit-review</code><br><code>source: --skill teacher-english-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | English | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-english-homework-generation/SKILL.md"><code>teacher-english-homework-generation</code></a><br>English workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-english-homework-generation</code><br><code>source: --skill teacher-english-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | English | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md"><code>teacher-chinese-lesson-planning</code></a><br>Chinese workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-chinese-lesson-planning</code><br><code>source: --skill teacher-chinese-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Chinese | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-chinese-unit-review/SKILL.md"><code>teacher-chinese-unit-review</code></a><br>Chinese workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-chinese-unit-review</code><br><code>source: --skill teacher-chinese-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Chinese | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md"><code>teacher-chinese-homework-generation</code></a><br>Chinese workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-chinese-homework-generation</code><br><code>source: --skill teacher-chinese-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Chinese | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md"><code>teacher-politics-lesson-planning</code></a><br>Politics workflow for Lesson Preparation. Focus: Instructional Design. | <code>CLI: teacher-politics-lesson-planning</code><br><code>source: --skill teacher-politics-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Politics | - | Instructional Design | Lesson Preparation |
| <a href="skills/teacher-tools/teacher-politics-unit-review/SKILL.md"><code>teacher-politics-unit-review</code></a><br>Politics workflow for Unit Review. Focus: Review Planning. | <code>CLI: teacher-politics-unit-review</code><br><code>source: --skill teacher-politics-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Politics | - | Review Planning | Unit Review |
| <a href="skills/teacher-tools/teacher-politics-homework-generation/SKILL.md"><code>teacher-politics-homework-generation</code></a><br>Politics workflow for Class Homework. Focus: Homework Generation. | <code>CLI: teacher-politics-homework-generation</code><br><code>source: --skill teacher-politics-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Politics | - | Homework Generation | Class Homework |
| <a href="skills/teacher-tools/teacher-homework-generation/SKILL.md"><code>teacher-homework-generation</code></a><br>Teaching Management workflow for Class Homework. Focus: Homework Generation, Tiered Practice. | <code>CLI: teacher-homework-generation</code><br><code>source: --skill teacher-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Homework Generation, Tiered Practice | Class Homework |

## Project Structure

```text
hermes-edu-skills/
├─ .github/workflows/validate.yml
├─ .well-known/skills/index.json
├─ skills/
│  ├─ textbook-sync/
│  ├─ preschool/
│  ├─ learning-assistant/
│  ├─ daily-practice/
│  ├─ exam-prep/
│  ├─ teacher-tools/
│  ├─ family-education/
│  └─ ...
├─ scripts/validate.mjs
├─ scripts/agent-pack.mjs
├─ catalog.json
├─ CHANGELOG.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ README.md
├─ README.en.md
├─ RELEASE.md
└─ SECURITY.md
```

## Validate Skill Pack

From the package root:

```bash
npm run validate
```

Validation checks:

- `catalog.json` and discovery index names.
- Whether `catalog.skillCount` matches the actual `SKILL.md` count.
- Whether the discovery index aligns with the catalog.
- Skill names in frontmatter.
- `source: hermes-edu-skills`.
- `author: zhongwei`.

## Compatibility Notes

- Hermes Agent: use `npx --yes hermes-edu-skills install` for one-command install and enablement.
- OpenClaw / Codex / Claude Code: use `npx hermes-edu-skills install <tool>` to export a flat directory where every Skill is `<skill-name>/SKILL.md`.
- Cursor: use `npx hermes-edu-skills install cursor --workspace <project>` to generate `.cursor/rules/*.mdc` plus a local Skill Pack copy.
- Other agents: use `npx hermes-edu-skills export generic --target <dir>`, then connect the exported directory to the target Agent's Skill / prompt / tool registry.
- Every Skill is a standalone readable `SKILL.md` file that you can inspect, adapt, or connect to your own Agent.
- Workflow names inside some Skills are suggested interfaces; actual execution depends on your Hermes tools and runtime environment.

## Roadmap

- Add more Agent Runtime export adapters.
- Add common Hermes / OpenClaw / Codex Agent usage examples.
- Keep improving Skill quality levels and public review status.
- Add more textbook and knowledge-point coverage plus parameter examples.
- Add optional tool adapters so executable workflows can run end to end.
- Explore easier installation once public Hermes Skill Registry conventions stabilize.

## Contributing

Contributions are welcome. Please read `CONTRIBUTING.md` first.

Good contribution areas include:

- Improve instructions in an existing `SKILL.md`.
- Add new education Skills.
- Improve the validation script.
- Add examples for standalone Hermes users.
- Improve Chinese and English documentation.

## License

MIT. See `LICENSE`.
