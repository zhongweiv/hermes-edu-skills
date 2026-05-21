# Hermes Edu Skills

A China-focused open education Agent Skill Pack for textbook sync, exam prep, photo Q&A, mistake review, family learning, reading/writing, and teacher workflows. Built for Hermes Agent, exportable to OpenClaw, Codex, Cursor, Claude Code, and other AI tools.

面向中国教育场景的开源 Agent Skill Pack：教材同步、备考复习、拍照答疑、错题复盘、亲子陪学、阅读写作和教师工具，Hermes Agent 可直接使用，也可导出到 OpenClaw、Codex、Cursor、Claude Code 等 AI 工具。

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-177-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[中文文档](README.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

Hermes Edu Skills is a Chinese education Agent Skill Pack that can be recognized by Hermes Agent. It turns textbook sync, exam prep, photo Q&A, mistake review, daily practice, reading/writing, family learning, teacher planning, and school communication into 177 browsable, installable, and reusable product-level Skills.

It currently includes 170 installable Hermes Skills and 7 design-reference examples. This is not a generic prompt collection; it is an Agent capability catalog organized around real education jobs, with invocation signals, target roles, parameter dimensions, maturity labels, usage boundaries, and Hermes-readable `SKILL.md` files.

If you are building an AI learning assistant, AI teacher, curriculum tool, family-learning product, question-bank/mistake-review product, or simply want to give Hermes Agent a ready-to-use Chinese education capability set, this repository is designed to be a practical starting point. If it helps you, please give it a Star so more education AI developers can discover it.

## Navigation

- [Understand In 30 Seconds](#understand-in-30-seconds)
- [Default: Hermes Agent](#defaulthermes-agent)
- [Install A Single Skill](#install-a-single-skill)
- [Export To Other AI Tools Or Agents](#export-to-other-ai-tools-or-agents)
- [Choose By Role](#choose-by-role)
- [Skill Category Overview](#skill-category-overview)
- [All Skills](#all-skills)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## Understand In 30 Seconds

| Question | Answer |
| --- | --- |
| What is this? | A China-focused education Agent Skill Pack for Hermes Agent Runtime. |
| How many Skills? | 177 public Skills, including 170 installable Skills and 7 design examples. |
| Core scenarios? | Textbook sync, exam prep, photo Q&A, mistake review, daily practice, reading/writing, family learning, and teacher workflows. |
| Why not thousands of files? | Grade, semester, unit, lesson, knowledge point, and difficulty are parameters instead of thousands of repetitive Skills. |
| Who is it for? | Hermes Agent users, education AI developers, teachers, curriculum researchers, schools, and institutions. |
| How do I start? | Install into Hermes Agent by default; use `agent:install -- --tool <tool>` only when targeting other tools. |

## Why This Project Matters

- China-first education scenarios: textbook editions, grades, semesters, units, sync practice, mistake review, exam prep, and family learning are first-class concerns.
- Product-level taxonomy: Skills are organized by user jobs, not by raw technical folders, so they can be used as a real education Agent product blueprint.
- Hermes-compatible: every Skill is a standard `SKILL.md` that Hermes can read.
- Readable and extensible: install directly, adapt to your own Agent, or use as a Skill-design reference and product capability map.
- Easy to communicate: curated Skills explain the user problem, best-fit users, workflow, output, boundaries, and standalone fallback.
- Public-safe: this repository contains public Skill documents, indexes, and validation tools only. It does not contain user data, secrets, or commercial backend implementation.

## What You Can Build

- Add a Chinese education Skill library to a local Hermes Agent, covering textbook sync, exam prep, reading/writing, and family learning.
- Prototype AI learning assistants, AI teachers, AI teaching assistants, photo Q&A, mistake-review agents, parent-child reading helpers, and writing coaches.
- Learn and reuse education Skill structure, invocation signals, use cases, and workflow naming patterns.
- Design your own Skills for schools, teachers, parents, education institutions, and adult learning scenarios.
- Fork the repository and extend textbook versions, knowledge-point coverage, and standalone Hermes tool adapters.

## Choose By Role

| Who you are | Start here | What you get |
| --- | --- | --- |
| Hermes Agent user | [Default: Hermes Agent](#defaulthermes-agent), [Learning Core](#learning-core) | Add Chinese education Skills to your local Agent. |
| Education AI developer | [Project Structure](#project-structure), [Compatibility Notes](#compatibility-notes) | Reuse Skill structure, parameter design, and workflow naming. |
| Teacher / curriculum researcher | [Teacher Tools](#teacher-tools), [Textbook Sync](#textbook-sync) | Study lesson planning, homework generation, unit review, and sync teaching patterns. |
| Parent / family-learning product builder | [Family Education](#family-education), [Daily Practice](#daily-practice) | Build companionship, reading, habits, and daily practice scenarios. |
| School / institution team | [Design Examples](#examples), [Exam Prep](#exam-prep) | Explore organization reports, class analysis, course packages, and review workflows. |

## Initiator And Maintainer

This project is initiated and maintained by [Shineway](https://www.shineway.tech/).

We are open-sourcing reusable education Agent Skill design so developers, teachers, researchers, schools, and education teams can explore China-focused education-agent capabilities together. This repository contains public Skill documents, indexes, and validation tools only; it does not include user data or backend service implementations.

## Project Highlights

- 177 clickable product-level `SKILL.md` files.
- User-task-oriented categories: textbook sync, learning core, daily practice, exam prep, reading/writing, teacher tools, and family education.
- Each Skill includes Hermes frontmatter, use cases, invocation signals, and workflow names.
- Adds Skill maturity and standalone-support labels so users can see which Skills are curated and which need tools or additional context.
- Grade, semester, unit, lesson, knowledge point, and difficulty are parameters instead of thousands of separate Skills.
- Includes `catalog.json` and `.well-known/skills/index.json` for tool discovery and secondary integration.
- Includes a validation script to keep directories, indexes, and Skill files aligned.
- MIT licensed for personal learning, secondary development, and education Agent prototyping.

## How To Support

- Star this repository so more people can discover this education Skill Pack.
- Watch releases for new Skills, installation improvements, and Hermes updates.
- Fork the `skills/` directory into your own Hermes Agent or education-agent project.
- Open an issue to request the grade, textbook version, subject, or teacher tool you need.
- Open a pull request to contribute new Skills, improve instructions, or add examples.

## Default: Hermes Agent

Hermes Agent is the default target for Hermes Edu Skills. The repository's `skills/` directory is the canonical Skill source and does not need conversion before Hermes loads it.

Clone the repository:

```bash
git clone https://github.com/zhongweiv/hermes-edu-skills.git
cd hermes-edu-skills
npm run validate
```

Install the Skill Pack into Hermes Agent:

```bash
npm run install:hermes -- --config ~/.hermes/config.yaml
```

Install one Skill into Hermes Agent:

```bash
npm run install:hermes -- --skill agent-study-plan --config ~/.hermes/config.yaml
```

Print the Hermes config snippet without writing a file:

```bash
npm run install:hermes
```

Then verify in Hermes:

```bash
hermes skills list
```

You can also verify through Hermes skill tools:

```python
from tools.skills_tool import skills_list, skill_view

skills_list()
skill_view("primary-math-mental-arithmetic")
```

## Install A Single Skill

Many users only want to try one capability first instead of installing the full Skill Pack. Every install/export command supports `--skill <slug>`. You can pass it multiple times or use a comma-separated list.

| Target | Command |
| --- | --- |
| Hermes single Skill | `npm run install:hermes -- --skill agent-study-plan --config ~/.hermes/config.yaml` |
| OpenClaw single Skill | `npm run install:openclaw -- --skill primary-math-mental-arithmetic` |
| Codex single Skill | `npm run install:codex -- --skill agent-socratic-tutor` |
| Claude Code single Skill | `npm run install:claude -- --skill agent-study-plan` |
| Cursor single Skill | `npm run install:cursor -- --workspace /path/to/project --skill agent-study-plan` |
| Generic Agent single Skill | `npm run export:generic -- --skill agent-study-plan --target ./dist/one-skill` |

Install multiple Skills at once:

```bash
npm run install:openclaw -- --skill agent-study-plan,agent-mistake-review
```

If you are unsure about the slug, open the Skill table in this README or search `slug` in `catalog.json`.

## Export To Other AI Tools Or Agents

If you are not using Hermes Agent, you can convert this Skill Pack into layouts that other AI tools can read more easily. The source `skills/` directory remains Hermes-native; `agent-pack` handles copying, flattening, and target-tool rule generation.

| Target Tool | Command | Output / Install Location |
| --- | --- | --- |
| OpenClaw | `npm run install:openclaw` | `~/.openclaw/skills/<skill-name>/SKILL.md` |
| Codex | `npm run install:codex` | `$CODEX_HOME/skills` or `~/.codex/skills` |
| Claude Code | `npm run install:claude` | `~/.claude/skills/<skill-name>/SKILL.md` |
| Claude Code project scope | `npm run install:claude -- --workspace .` | `.claude/skills/<skill-name>/SKILL.md` |
| Cursor | `npm run install:cursor -- --workspace /path/to/project` | `.cursor/rules/*.mdc` plus `.cursor/hermes-edu-skills` |
| Generic Agent | `npm run export:generic` | `AGENT_SKILL_PACK.json` plus `<skill-name>/SKILL.md` |

Convert to OpenClaw format without installing into the default location:

```bash
npm run export:openclaw
```

Export only one category, for example textbook sync. Each category name shows the command-line argument. Chinese aliases such as `--category 教材同步` are also accepted:

```bash
npm run export:openclaw -- --category textbook-sync
```

Common category arguments:

| What To Export | Argument |
| --- | --- |
| Textbook Sync | `--category textbook-sync` |
| Learning Core | `--category learning-core` |
| Daily Practice | `--category daily-practice` |
| Reading & Writing | `--category reading-writing` |
| Exam Prep | `--category exam-prep` |
| Teacher Tools | `--category teacher-tools` |
| Family Education | `--category family-education` |
| Language Learning | `--category language-learning` |
| Career Learning | `--category career-learning` |

Include doc-only design examples:

```bash
npm run export:generic -- --include-examples
```

Advanced command form remains available for integrations that need dynamic tool or target selection:

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

## Skill Category Overview

Start from these top-level categories. Each category still keeps a full clickable Skill table for browsing, search, and secondary integration.

| Category | Command Argument | Use Case | Count |
| --- | --- | --- | ---: |
| [Textbook Sync](#textbook-sync) | <code>--category textbook-sync</code> | China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills. | 41 |
| [Learning Core](#learning-core) | <code>--category learning-core</code> | General learning-loop capabilities such as study plans, photo Q&A, mistake review, and learning reports. | 15 |
| [Daily Practice](#daily-practice) | <code>--category daily-practice</code> | Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement. | 28 |
| [Reading & Writing](#reading-writing) | <code>--category reading-writing</code> | Chinese, English, academic, and workplace reading/writing capabilities. | 10 |
| [Exam Prep](#exam-prep) | <code>--category exam-prep</code> | Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep. | 27 |
| [Teacher Tools](#teacher-tools) | <code>--category teacher-tools</code> | Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication. | 31 |
| [Family Education](#family-education) | <code>--category family-education</code> | Parent companionship, parent-child reading, homework routines, and family communication. | 8 |
| [Language Learning](#language-learning) | <code>--category language-learning</code> | Adult English, study-abroad exams, speaking, listening, and long-term language improvement. | 3 |
| [Career Learning](#career-learning) | <code>--category career-learning</code> | College, adult learning, career skills, and certification scenarios. | 7 |
| [Design Examples](#examples) | <code>--category examples</code> | Design references that usually require commercial data, organization reports, or tool adapters; not recommended as default installable entries. | 7 |

## Coverage

| Category | Command Argument | Main Areas | Count |
| --- | --- | --- | ---: |
| [Textbook Sync](#textbook-sync) | <code>--category textbook-sync</code> | Biology, Math, Chemistry, Physics, Geography | 41 |
| [Learning Core](#learning-core) | <code>--category learning-core</code> | Learning Skills, General | 15 |
| [Daily Practice](#daily-practice) | <code>--category daily-practice</code> | Geography, Chemistry, History, Biology, Math | 28 |
| [Reading & Writing](#reading-writing) | <code>--category reading-writing</code> | Chinese, English, General Education | 10 |
| [Exam Prep](#exam-prep) | <code>--category exam-prep</code> | Geography, Chemistry, History, Biology, Math | 27 |
| [Teacher Tools](#teacher-tools) | <code>--category teacher-tools</code> | Teaching Management, Geography, Chemistry, History, Biology | 31 |
| [Family Education](#family-education) | <code>--category family-education</code> | Family Education | 8 |
| [Language Learning](#language-learning) | <code>--category language-learning</code> | Language Learning, English | 3 |
| [Career Learning](#career-learning) | <code>--category career-learning</code> | Computer Science, Career Education | 7 |
| [Design Examples](#examples) | <code>--category examples</code> | Institution Operations, School Management | 7 |

## All Skills

The table below lists all 177 public Skills. The English README uses English display names, keeps the original Chinese title, and always shows the copyable slug.

### <a id="textbook-sync"></a>Textbook Sync

China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills.

Category argument: <code>--category textbook-sync</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Junior Biology BS Textbook Sync Skill](skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md)<br><code>junior-biology-bs-textbook-sync</code><br>CN: 北师大版初中生物同步 Skill | Curated | Needs user context | Junior High | Biology | BS Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Math BS Textbook Sync Skill](skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md)<br><code>junior-math-bs-textbook-sync</code><br>CN: 北师大版初中数学同步 Skill | Curated | Needs user context | Junior High | Math | BS Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Biology BS Textbook Sync Skill](skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md)<br><code>senior-biology-bs-textbook-sync</code><br>CN: 北师大版高中生物同步 Skill | Enhanced | Needs user context | Senior High | Biology | BS Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Math BS Textbook Sync Skill](skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md)<br><code>senior-math-bs-textbook-sync</code><br>CN: 北师大版高中数学同步 Skill | Enhanced | Needs user context | Senior High | Math | BS Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary Math BS Textbook Sync Skill](skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md)<br><code>primary-math-bs-textbook-sync</code><br>CN: 北师大版小学数学同步 Skill | Curated | Needs user context | Primary | Math | BS Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [Junior Chemistry LK Textbook Sync Skill](skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md)<br><code>junior-chemistry-lk-textbook-sync</code><br>CN: 鲁科版初中化学同步 Skill | Curated | Needs user context | Junior High | Chemistry | LK Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Physics LK Textbook Sync Skill](skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md)<br><code>junior-physics-lk-textbook-sync</code><br>CN: 鲁科版初中物理同步 Skill | Curated | Needs user context | Junior High | Physics | LK Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Chemistry LK Textbook Sync Skill](skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md)<br><code>senior-chemistry-lk-textbook-sync</code><br>CN: 鲁科版高中化学同步 Skill | Enhanced | Needs user context | Senior High | Chemistry | LK Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Physics LK Textbook Sync Skill](skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md)<br><code>senior-physics-lk-textbook-sync</code><br>CN: 鲁科版高中物理同步 Skill | Enhanced | Needs user context | Senior High | Physics | LK Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Junior Geography RJ Textbook Sync Skill](skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md)<br><code>junior-geography-rj-textbook-sync</code><br>CN: 人教版初中地理同步 Skill | Enhanced | Needs user context | Junior High | Geography | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Chemistry RJ Textbook Sync Skill](skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md)<br><code>junior-chemistry-rj-textbook-sync</code><br>CN: 人教版初中化学同步 Skill | Curated | Needs user context | Junior High | Chemistry | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Biology RJ Textbook Sync Skill](skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md)<br><code>junior-biology-rj-textbook-sync</code><br>CN: 人教版初中生物同步 Skill | Curated | Needs user context | Junior High | Biology | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Math RJ Textbook Sync Skill](skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md)<br><code>junior-math-rj-textbook-sync</code><br>CN: 人教版初中数学同步 Skill | Curated | Needs user context | Junior High | Math | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Physics RJ Textbook Sync Skill](skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md)<br><code>junior-physics-rj-textbook-sync</code><br>CN: 人教版初中物理同步 Skill | Curated | Needs user context | Junior High | Physics | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior English RJ Textbook Sync Skill](skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md)<br><code>junior-english-rj-textbook-sync</code><br>CN: 人教版初中英语同步 Skill | Curated | Needs user context | Junior High | English | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Geography RJ Textbook Sync Skill](skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md)<br><code>senior-geography-rj-textbook-sync</code><br>CN: 人教版高中地理同步 Skill | Enhanced | Needs user context | Senior High | Geography | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Chemistry RJ Textbook Sync Skill](skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md)<br><code>senior-chemistry-rj-textbook-sync</code><br>CN: 人教版高中化学同步 Skill | Enhanced | Needs user context | Senior High | Chemistry | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Biology RJ Textbook Sync Skill](skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md)<br><code>senior-biology-rj-textbook-sync</code><br>CN: 人教版高中生物同步 Skill | Enhanced | Needs user context | Senior High | Biology | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Physics RJ Textbook Sync Skill](skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md)<br><code>senior-physics-rj-textbook-sync</code><br>CN: 人教版高中物理同步 Skill | Enhanced | Needs user context | Senior High | Physics | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior English RJ Textbook Sync Skill](skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md)<br><code>senior-english-rj-textbook-sync</code><br>CN: 人教版高中英语同步 Skill | Enhanced | Needs user context | Senior High | English | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary Math RJ Textbook Sync Skill](skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md)<br><code>primary-math-rj-textbook-sync</code><br>CN: 人教版小学数学同步 Skill | Curated | Needs user context | Primary | Math | RJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [Senior Math RJ-A Textbook Sync Skill](skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md)<br><code>senior-math-rja-textbook-sync</code><br>CN: 人教A版高中数学同步 Skill | Enhanced | Needs user context | Senior High | Math | RJ-A Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Math RJ-B Textbook Sync Skill](skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md)<br><code>senior-math-rjb-textbook-sync</code><br>CN: 人教B版高中数学同步 Skill | Enhanced | Needs user context | Senior High | Math | RJ-B Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary English PEP Textbook Sync Skill](skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md)<br><code>primary-english-pep-textbook-sync</code><br>CN: 人教PEP版小学英语同步 Skill | Curated | Needs user context | Primary | English | PEP Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Junior Math SJ Textbook Sync Skill](skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md)<br><code>junior-math-sj-textbook-sync</code><br>CN: 苏教版初中数学同步 Skill | Curated | Needs user context | Junior High | Math | SJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Primary Math SJ Textbook Sync Skill](skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md)<br><code>primary-math-sj-textbook-sync</code><br>CN: 苏教版小学数学同步 Skill | Curated | Needs user context | Primary | Math | SJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [Junior History Tongbian Textbook Sync Skill](skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md)<br><code>junior-history-tongbian-textbook-sync</code><br>CN: 统编版初中历史同步 Skill | Enhanced | Needs user context | Junior High | History | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Chinese Tongbian Textbook Sync Skill](skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md)<br><code>junior-chinese-tongbian-textbook-sync</code><br>CN: 统编版初中语文同步 Skill | Curated | Needs user context | Junior High | Chinese | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Politics Tongbian Textbook Sync Skill](skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md)<br><code>junior-politics-tongbian-textbook-sync</code><br>CN: 统编版初中政治同步 Skill | Enhanced | Needs user context | Junior High | Politics | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior History Tongbian Textbook Sync Skill](skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md)<br><code>senior-history-tongbian-textbook-sync</code><br>CN: 统编版高中历史同步 Skill | Enhanced | Needs user context | Senior High | History | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Chinese Tongbian Textbook Sync Skill](skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md)<br><code>senior-chinese-tongbian-textbook-sync</code><br>CN: 统编版高中语文同步 Skill | Enhanced | Needs user context | Senior High | Chinese | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Classical Chinese, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Politics Tongbian Textbook Sync Skill](skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md)<br><code>senior-politics-tongbian-textbook-sync</code><br>CN: 统编版高中政治同步 Skill | Enhanced | Needs user context | Senior High | Politics | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary Chinese Tongbian Textbook Sync Skill](skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md)<br><code>primary-chinese-tongbian-textbook-sync</code><br>CN: 统编版小学语文同步 Skill | Curated | Needs user context | Primary | Chinese | Tongbian Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Junior English WY Textbook Sync Skill](skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md)<br><code>junior-english-wy-textbook-sync</code><br>CN: 外研版初中英语同步 Skill | Curated | Needs user context | Junior High | English | WY Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior English WY Textbook Sync Skill](skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md)<br><code>senior-english-wy-textbook-sync</code><br>CN: 外研版高中英语同步 Skill | Enhanced | Needs user context | Senior High | English | WY Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary English WY Textbook Sync Skill](skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md)<br><code>primary-english-wy-textbook-sync</code><br>CN: 外研版小学英语同步 Skill | Curated | Needs user context | Primary | English | WY Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Junior Geography Xj Textbook Sync Skill](skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md)<br><code>junior-geography-xj-textbook-sync</code><br>CN: 湘教版初中地理同步 Skill | Enhanced | Needs user context | Junior High | Geography | XJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Geography Xj Textbook Sync Skill](skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md)<br><code>senior-geography-xj-textbook-sync</code><br>CN: 湘教版高中地理同步 Skill | Enhanced | Needs user context | Senior High | Geography | XJ Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Junior English YL Textbook Sync Skill](skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md)<br><code>junior-english-yl-textbook-sync</code><br>CN: 译林版初中英语同步 Skill | Curated | Needs user context | Junior High | English | YL Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Primary English YL Textbook Sync Skill](skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md)<br><code>primary-english-yl-textbook-sync</code><br>CN: 译林版小学英语同步 Skill | Curated | Needs user context | Primary | English | YL Edition | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Preschool General Readiness Textbook Sync Skill](skills/textbook-sync/preschool-general-readiness-textbook-sync/SKILL.md)<br><code>preschool-general-readiness-textbook-sync</code><br>CN: 幼小衔接通用学前综合同步 Skill | Enhanced | Needs user context | Preschool | General | School Readiness General | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Early Learning, Habit Building | Daily Early Learning, Parent-Child Learning, School Readiness |

### <a id="learning-core"></a>Learning Core

General learning-loop capabilities such as study plans, photo Q&A, mistake review, and learning reports.

Category argument: <code>--category learning-core</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Agent Weakness Boost Skill](skills/learning-core/agent-weakness-boost/SKILL.md)<br><code>agent-weakness-boost</code><br>CN: 薄弱项提升 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Gap Diagnosis | Targeted Practice |
| [Agent Mistake Review Skill](skills/learning-core/agent-mistake-review/SKILL.md)<br><code>agent-mistake-review</code><br>CN: 错题复盘 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Mistake Correction, Review Planning | Mistake Correction, Unit Review |
| [Agent Review Assistant Skill](skills/learning-core/agent-review-assistant/SKILL.md)<br><code>agent-review-assistant</code><br>CN: 复习助手 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Agent Holiday Plan Skill](skills/learning-core/agent-holiday-plan/SKILL.md)<br><code>agent-holiday-plan</code><br>CN: 寒暑假提升 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Holiday Planning | Holiday Improvement |
| [Agent Memory Method Skill](skills/learning-core/agent-memory-method/SKILL.md)<br><code>agent-memory-method</code><br>CN: 记忆方法 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Memory | Recitation and Memory |
| [Agent Preview Assistant Skill](skills/learning-core/agent-preview-assistant/SKILL.md)<br><code>agent-preview-assistant</code><br>CN: 课前预习 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Preview | Pre-Class Preview |
| [Agent Weekly Review Skill](skills/learning-core/agent-weekly-review/SKILL.md)<br><code>agent-weekly-review</code><br>CN: 每周复盘 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Stage Review | Learning Report |
| [Agent Photo Question Skill](skills/learning-core/agent-photo-question/SKILL.md)<br><code>agent-photo-question</code><br>CN: 拍照答疑 Skill | Curated | Requires tools | Primary, Junior High, Senior High | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | AI Question Explanation, Image Question Recognition | Photo Q&A, Homework |
| [Agent Socratic Tutor Skill](skills/learning-core/agent-socratic-tutor/SKILL.md)<br><code>agent-socratic-tutor</code><br>CN: 启发式讲解 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Socratic Questioning | AI Question Explanation |
| [Agent Learning Report Skill](skills/learning-core/agent-learning-report/SKILL.md)<br><code>agent-learning-report</code><br>CN: 学情报告 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Learning Report, Learning Advice | Learning Report, Parent Communication |
| [Agent Study Plan Skill](skills/learning-core/agent-study-plan/SKILL.md)<br><code>agent-study-plan</code><br>CN: 学习计划 Skill | Curated | Needs user context | Preschool, Primary, Junior High, Senior High, College, Adult | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Study Planning, Goal Management | Daily Study, Holiday Improvement, Pre-Exam Planning |
| [Agent Learning Habit Skill](skills/learning-core/agent-learning-habit/SKILL.md)<br><code>agent-learning-habit</code><br>CN: 学习习惯 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Habit Building | Daily Check-in |
| [Agent Focus Training Skill](skills/learning-core/agent-focus-training/SKILL.md)<br><code>agent-focus-training</code><br>CN: 专注力训练 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Attention | Daily Check-in |
| [Agent Homework Companion Skill](skills/learning-core/agent-homework-companion/SKILL.md)<br><code>agent-homework-companion</code><br>CN: 作业陪伴 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Companion | Homework |
| [Agent Question Explanation Skill](skills/learning-core/agent-question-explanation/SKILL.md)<br><code>agent-question-explanation</code><br>CN: AI 讲题 Skill | Curated | Needs user context | Primary, Junior High, Senior High, College | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | AI Question Explanation, Transfer Practice | Homework, Synchronized Reinforcement |

### <a id="daily-practice"></a>Daily Practice

Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement.

Category argument: <code>--category daily-practice</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Junior Geography Quick Practice Skill](skills/daily-practice/junior-geography-quick-practice/SKILL.md)<br><code>junior-geography-quick-practice</code><br>CN: 初中地理快速巩固 Skill | Enhanced | Needs user context | Junior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Chemistry Quick Practice Skill](skills/daily-practice/junior-chemistry-quick-practice/SKILL.md)<br><code>junior-chemistry-quick-practice</code><br>CN: 初中化学快速巩固 Skill | Enhanced | Needs user context | Junior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior History Quick Practice Skill](skills/daily-practice/junior-history-quick-practice/SKILL.md)<br><code>junior-history-quick-practice</code><br>CN: 初中历史快速巩固 Skill | Enhanced | Needs user context | Junior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Biology Quick Practice Skill](skills/daily-practice/junior-biology-quick-practice/SKILL.md)<br><code>junior-biology-quick-practice</code><br>CN: 初中生物快速巩固 Skill | Enhanced | Needs user context | Junior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Math Quick Practice Skill](skills/daily-practice/junior-math-quick-practice/SKILL.md)<br><code>junior-math-quick-practice</code><br>CN: 初中数学快速巩固 Skill | Enhanced | Needs user context | Junior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Math Daily Practice Skill](skills/daily-practice/junior-math-daily-practice/SKILL.md)<br><code>junior-math-daily-practice</code><br>CN: 初中数学每日练 Skill | Enhanced | Needs user context | Junior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Calculation, Functions, Geometry | Daily Check-in, Targeted Practice |
| [Junior Physics Quick Practice Skill](skills/daily-practice/junior-physics-quick-practice/SKILL.md)<br><code>junior-physics-quick-practice</code><br>CN: 初中物理快速巩固 Skill | Enhanced | Needs user context | Junior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior English Vocabulary Daily Skill](skills/daily-practice/junior-english-vocabulary-daily/SKILL.md)<br><code>junior-english-vocabulary-daily</code><br>CN: 初中英语词汇每日练 Skill | Enhanced | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary | Daily Check-in, High School Entrance Exam Review |
| [Junior English Quick Practice Skill](skills/daily-practice/junior-english-quick-practice/SKILL.md)<br><code>junior-english-quick-practice</code><br>CN: 初中英语快速巩固 Skill | Enhanced | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Chinese Quick Practice Skill](skills/daily-practice/junior-chinese-quick-practice/SKILL.md)<br><code>junior-chinese-quick-practice</code><br>CN: 初中语文快速巩固 Skill | Enhanced | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Politics Quick Practice Skill](skills/daily-practice/junior-politics-quick-practice/SKILL.md)<br><code>junior-politics-quick-practice</code><br>CN: 初中政治快速巩固 Skill | Enhanced | Needs user context | Junior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Geography Quick Practice Skill](skills/daily-practice/senior-geography-quick-practice/SKILL.md)<br><code>senior-geography-quick-practice</code><br>CN: 高中地理快速巩固 Skill | Enhanced | Needs user context | Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Chemistry Quick Practice Skill](skills/daily-practice/senior-chemistry-quick-practice/SKILL.md)<br><code>senior-chemistry-quick-practice</code><br>CN: 高中化学快速巩固 Skill | Enhanced | Needs user context | Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior History Quick Practice Skill](skills/daily-practice/senior-history-quick-practice/SKILL.md)<br><code>senior-history-quick-practice</code><br>CN: 高中历史快速巩固 Skill | Enhanced | Needs user context | Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Biology Quick Practice Skill](skills/daily-practice/senior-biology-quick-practice/SKILL.md)<br><code>senior-biology-quick-practice</code><br>CN: 高中生物快速巩固 Skill | Enhanced | Needs user context | Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Math Quick Practice Skill](skills/daily-practice/senior-math-quick-practice/SKILL.md)<br><code>senior-math-quick-practice</code><br>CN: 高中数学快速巩固 Skill | Enhanced | Needs user context | Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Physics Quick Practice Skill](skills/daily-practice/senior-physics-quick-practice/SKILL.md)<br><code>senior-physics-quick-practice</code><br>CN: 高中物理快速巩固 Skill | Enhanced | Needs user context | Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior English Vocabulary Daily Skill](skills/daily-practice/senior-english-vocabulary-daily/SKILL.md)<br><code>senior-english-vocabulary-daily</code><br>CN: 高中英语词汇每日练 Skill | Enhanced | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary | Daily Check-in, Gaokao Review |
| [Senior English Quick Practice Skill](skills/daily-practice/senior-english-quick-practice/SKILL.md)<br><code>senior-english-quick-practice</code><br>CN: 高中英语快速巩固 Skill | Enhanced | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Chinese Quick Practice Skill](skills/daily-practice/senior-chinese-quick-practice/SKILL.md)<br><code>senior-chinese-quick-practice</code><br>CN: 高中语文快速巩固 Skill | Enhanced | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Politics Quick Practice Skill](skills/daily-practice/senior-politics-quick-practice/SKILL.md)<br><code>senior-politics-quick-practice</code><br>CN: 高中政治快速巩固 Skill | Enhanced | Needs user context | Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Primary Chinese Recitation Daily Skill](skills/daily-practice/primary-chinese-recitation-daily/SKILL.md)<br><code>primary-chinese-recitation-daily</code><br>CN: 小学课文古诗背诵 Skill | Curated | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Recitation, Reading Aloud | Recitation and Memory, Daily Check-in |
| [Primary Math Mental Arithmetic Skill](skills/daily-practice/primary-math-mental-arithmetic/SKILL.md)<br><code>primary-math-mental-arithmetic</code><br>CN: 小学口算速练 Skill | Curated | Needs user context | Primary | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| [Primary English Vocabulary Daily Skill](skills/daily-practice/primary-english-vocabulary-daily/SKILL.md)<br><code>primary-english-vocabulary-daily</code><br>CN: 小学英语单词每日练 Skill | Curated | Needs user context | Primary | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary, Silent Dictation | Daily Check-in, Dictation Practice |
| [Primary Chinese Dictation Daily Skill](skills/daily-practice/primary-chinese-dictation-daily/SKILL.md)<br><code>primary-chinese-dictation-daily</code><br>CN: 小学语文字词听写 Skill | Curated | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Dictation, Silent Dictation | Dictation Practice, Daily Check-in |
| [Primary Reading Daily Skill](skills/daily-practice/primary-reading-daily/SKILL.md)<br><code>primary-reading-daily</code><br>CN: 小学阅读每日练 Skill | Curated | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Reading Practice, Daily Check-in |
| [Preschool Literacy Daily Skill](skills/daily-practice/preschool-literacy-daily/SKILL.md)<br><code>preschool-literacy-daily</code><br>CN: 学前识字每日练 Skill | Enhanced | Needs user context | Preschool | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Literacy | Daily Early Learning, Daily Check-in |
| [Preschool Number Sense Daily Skill](skills/daily-practice/preschool-number-sense-daily/SKILL.md)<br><code>preschool-number-sense-daily</code><br>CN: 学前数感每日练 Skill | Enhanced | Needs user context | Preschool | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Number Sense | Number Sense Games, Daily Check-in |

### <a id="reading-writing"></a>Reading & Writing

Chinese, English, academic, and workplace reading/writing capabilities.

Category argument: <code>--category reading-writing</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Junior Chinese Modern Reading Skill](skills/reading-writing/junior-chinese-modern-reading/SKILL.md)<br><code>junior-chinese-modern-reading</code><br>CN: 初中现代文阅读 Skill | Curated | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | High School Entrance Exam Review |
| [Junior English Writing Skill](skills/reading-writing/junior-english-writing/SKILL.md)<br><code>junior-english-writing</code><br>CN: 初中英语写作 Skill | Curated | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | High School Entrance Exam Review |
| [Junior Chinese Composition Skill](skills/reading-writing/junior-chinese-composition/SKILL.md)<br><code>junior-chinese-composition</code><br>CN: 初中作文提升 Skill | Curated | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Writing Improvement |
| [Senior English Writing Skill](skills/reading-writing/senior-english-writing/SKILL.md)<br><code>senior-english-writing</code><br>CN: 高中英语写作 Skill | Curated | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Gaokao Review |
| [Senior Chinese Reading Skill](skills/reading-writing/senior-chinese-reading/SKILL.md)<br><code>senior-chinese-reading</code><br>CN: 高中语文阅读 Skill | Curated | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Gaokao Review |
| [Senior Chinese Essay Skill](skills/reading-writing/senior-chinese-essay/SKILL.md)<br><code>senior-chinese-essay</code><br>CN: 高中作文提升 Skill | Curated | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Writing Improvement |
| [Primary English Reading Skill](skills/reading-writing/primary-english-reading/SKILL.md)<br><code>primary-english-reading</code><br>CN: 小学英语阅读 Skill | Curated | Needs user context | Primary | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Reading Practice |
| [Primary Chinese Reading Skill](skills/reading-writing/primary-chinese-reading/SKILL.md)<br><code>primary-chinese-reading</code><br>CN: 小学语文阅读理解 Skill | Curated | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Reading Practice |
| [Primary Chinese Writing Skill](skills/reading-writing/primary-chinese-writing/SKILL.md)<br><code>primary-chinese-writing</code><br>CN: 小学作文提升 Skill | Curated | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing, Expression | Writing Improvement |
| [College Academic Writing Skill](skills/reading-writing/college-academic-writing/SKILL.md)<br><code>college-academic-writing</code><br>CN: 学术写作 Skill | Curated | Needs user context | College | General Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Paper Writing Practice |

### <a id="exam-prep"></a>Exam Prep

Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep.

Category argument: <code>--category exam-prep</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Junior Geography Exam Review Skill](skills/exam-prep/junior-geography-exam-review/SKILL.md)<br><code>junior-geography-exam-review</code><br>CN: 初中地理考试复习 Skill | Enhanced | Needs user context | Junior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Chemistry Exam Review Skill](skills/exam-prep/junior-chemistry-exam-review/SKILL.md)<br><code>junior-chemistry-exam-review</code><br>CN: 初中化学考试复习 Skill | Curated | Needs user context | Junior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior History Exam Review Skill](skills/exam-prep/junior-history-exam-review/SKILL.md)<br><code>junior-history-exam-review</code><br>CN: 初中历史考试复习 Skill | Enhanced | Needs user context | Junior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Biology Exam Review Skill](skills/exam-prep/junior-biology-exam-review/SKILL.md)<br><code>junior-biology-exam-review</code><br>CN: 初中生物考试复习 Skill | Enhanced | Needs user context | Junior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Math Exam Review Skill](skills/exam-prep/junior-math-exam-review/SKILL.md)<br><code>junior-math-exam-review</code><br>CN: 初中数学考试复习 Skill | Curated | Needs user context | Junior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Physics Exam Review Skill](skills/exam-prep/junior-physics-exam-review/SKILL.md)<br><code>junior-physics-exam-review</code><br>CN: 初中物理考试复习 Skill | Curated | Needs user context | Junior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior English Exam Review Skill](skills/exam-prep/junior-english-exam-review/SKILL.md)<br><code>junior-english-exam-review</code><br>CN: 初中英语考试复习 Skill | Curated | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Chinese Exam Review Skill](skills/exam-prep/junior-chinese-exam-review/SKILL.md)<br><code>junior-chinese-exam-review</code><br>CN: 初中语文考试复习 Skill | Curated | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Politics Exam Review Skill](skills/exam-prep/junior-politics-exam-review/SKILL.md)<br><code>junior-politics-exam-review</code><br>CN: 初中政治考试复习 Skill | Enhanced | Needs user context | Junior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [College CET-6 Sprint Skill](skills/exam-prep/college-cet6-sprint/SKILL.md)<br><code>college-cet6-sprint</code><br>CN: 大学英语六级备考 Skill | Curated | Needs user context | College | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| [College CET-4 Sprint Skill](skills/exam-prep/college-cet4-sprint/SKILL.md)<br><code>college-cet4-sprint</code><br>CN: 大学英语四级备考 Skill | Curated | Needs user context | College | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| [Senior Gaokao Sprint Skill](skills/exam-prep/senior-gaokao-sprint/SKILL.md)<br><code>senior-gaokao-sprint</code><br>CN: 高考冲刺 Skill | Curated | Needs user context | Senior High | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Sprint | Gaokao Review, Pre-Exam Sprint |
| [Senior Geography Exam Review Skill](skills/exam-prep/senior-geography-exam-review/SKILL.md)<br><code>senior-geography-exam-review</code><br>CN: 高中地理考试复习 Skill | Enhanced | Needs user context | Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Chemistry Exam Review Skill](skills/exam-prep/senior-chemistry-exam-review/SKILL.md)<br><code>senior-chemistry-exam-review</code><br>CN: 高中化学考试复习 Skill | Curated | Needs user context | Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior History Exam Review Skill](skills/exam-prep/senior-history-exam-review/SKILL.md)<br><code>senior-history-exam-review</code><br>CN: 高中历史考试复习 Skill | Enhanced | Needs user context | Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Biology Exam Review Skill](skills/exam-prep/senior-biology-exam-review/SKILL.md)<br><code>senior-biology-exam-review</code><br>CN: 高中生物考试复习 Skill | Curated | Needs user context | Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Math Exam Review Skill](skills/exam-prep/senior-math-exam-review/SKILL.md)<br><code>senior-math-exam-review</code><br>CN: 高中数学考试复习 Skill | Curated | Needs user context | Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Physics Exam Review Skill](skills/exam-prep/senior-physics-exam-review/SKILL.md)<br><code>senior-physics-exam-review</code><br>CN: 高中物理考试复习 Skill | Curated | Needs user context | Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior English Exam Review Skill](skills/exam-prep/senior-english-exam-review/SKILL.md)<br><code>senior-english-exam-review</code><br>CN: 高中英语考试复习 Skill | Curated | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Chinese Exam Review Skill](skills/exam-prep/senior-chinese-exam-review/SKILL.md)<br><code>senior-chinese-exam-review</code><br>CN: 高中语文考试复习 Skill | Curated | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Politics Exam Review Skill](skills/exam-prep/senior-politics-exam-review/SKILL.md)<br><code>senior-politics-exam-review</code><br>CN: 高中政治考试复习 Skill | Enhanced | Needs user context | Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Civil Service Essay Skill](skills/exam-prep/civil-service-essay/SKILL.md)<br><code>civil-service-essay</code><br>CN: 公务员申论 Skill | Curated | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Source Reading, Writing | Certification, Writing Improvement |
| [Civil Service Aptitude Skill](skills/exam-prep/civil-service-aptitude/SKILL.md)<br><code>civil-service-aptitude</code><br>CN: 公务员行测 Skill | Curated | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Logic, Data Analysis | Certification, Targeted Practice |
| [Teacher Certification Sprint Skill](skills/exam-prep/teacher-certification-sprint/SKILL.md)<br><code>teacher-certification-sprint</code><br>CN: 教师资格证备考 Skill | Curated | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Sprint | Certification |
| [Postgraduate English Sprint Skill](skills/exam-prep/postgraduate-english-sprint/SKILL.md)<br><code>postgraduate-english-sprint</code><br>CN: 考研英语备考 Skill | Curated | Needs user context | College, Adult | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension, Translation, Writing | Postgraduate Exam Review |
| [Primary Final Review Skill](skills/exam-prep/primary-final-review/SKILL.md)<br><code>primary-final-review</code><br>CN: 小学期末复习 Skill | Curated | Needs user context | Primary | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review | Midterm and Final Review |
| [Junior Zhongkao Sprint Skill](skills/exam-prep/junior-zhongkao-sprint/SKILL.md)<br><code>junior-zhongkao-sprint</code><br>CN: 中考冲刺 Skill | Curated | Needs user context | Junior High | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Sprint | High School Entrance Exam Review, Pre-Exam Sprint |

### <a id="teacher-tools"></a>Teacher Tools

Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication.

Category argument: <code>--category teacher-tools</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Teacher Class Analysis Lite Skill](skills/teacher-tools/teacher-class-analysis-lite/SKILL.md)<br><code>teacher-class-analysis-lite</code><br>CN: 班级学情分析 Lite Skill | Curated | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Learning Analysis | Learning Analysis |
| [Teacher Geography Lesson Planning Skill](skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md)<br><code>teacher-geography-lesson-planning</code><br>CN: 地理备课 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Geography Unit Review Skill](skills/teacher-tools/teacher-geography-unit-review/SKILL.md)<br><code>teacher-geography-unit-review</code><br>CN: 地理单元复习 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Geography Homework Generation Skill](skills/teacher-tools/teacher-geography-homework-generation/SKILL.md)<br><code>teacher-geography-homework-generation</code><br>CN: 地理作业生成 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Chemistry Lesson Planning Skill](skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md)<br><code>teacher-chemistry-lesson-planning</code><br>CN: 化学备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Chemistry Unit Review Skill](skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md)<br><code>teacher-chemistry-unit-review</code><br>CN: 化学单元复习 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Chemistry Homework Generation Skill](skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md)<br><code>teacher-chemistry-homework-generation</code><br>CN: 化学作业生成 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Parent Report Lite Skill](skills/teacher-tools/teacher-parent-report-lite/SKILL.md)<br><code>teacher-parent-report-lite</code><br>CN: 家长反馈报告 Lite Skill | Curated | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Report Generation | Parent Communication |
| [Teacher Lesson Planning Skill](skills/teacher-tools/teacher-lesson-planning/SKILL.md)<br><code>teacher-lesson-planning</code><br>CN: 老师备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design, Learning Analysis | Lesson Preparation |
| [Teacher History Lesson Planning Skill](skills/teacher-tools/teacher-history-lesson-planning/SKILL.md)<br><code>teacher-history-lesson-planning</code><br>CN: 历史备课 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher History Unit Review Skill](skills/teacher-tools/teacher-history-unit-review/SKILL.md)<br><code>teacher-history-unit-review</code><br>CN: 历史单元复习 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher History Homework Generation Skill](skills/teacher-tools/teacher-history-homework-generation/SKILL.md)<br><code>teacher-history-homework-generation</code><br>CN: 历史作业生成 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Biology Lesson Planning Skill](skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md)<br><code>teacher-biology-lesson-planning</code><br>CN: 生物备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Biology Unit Review Skill](skills/teacher-tools/teacher-biology-unit-review/SKILL.md)<br><code>teacher-biology-unit-review</code><br>CN: 生物单元复习 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Biology Homework Generation Skill](skills/teacher-tools/teacher-biology-homework-generation/SKILL.md)<br><code>teacher-biology-homework-generation</code><br>CN: 生物作业生成 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Math Lesson Planning Skill](skills/teacher-tools/teacher-math-lesson-planning/SKILL.md)<br><code>teacher-math-lesson-planning</code><br>CN: 数学备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Math Unit Review Skill](skills/teacher-tools/teacher-math-unit-review/SKILL.md)<br><code>teacher-math-unit-review</code><br>CN: 数学单元复习 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Math Homework Generation Skill](skills/teacher-tools/teacher-math-homework-generation/SKILL.md)<br><code>teacher-math-homework-generation</code><br>CN: 数学作业生成 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Physics Lesson Planning Skill](skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md)<br><code>teacher-physics-lesson-planning</code><br>CN: 物理备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Physics Unit Review Skill](skills/teacher-tools/teacher-physics-unit-review/SKILL.md)<br><code>teacher-physics-unit-review</code><br>CN: 物理单元复习 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Physics Homework Generation Skill](skills/teacher-tools/teacher-physics-homework-generation/SKILL.md)<br><code>teacher-physics-homework-generation</code><br>CN: 物理作业生成 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher English Lesson Planning Skill](skills/teacher-tools/teacher-english-lesson-planning/SKILL.md)<br><code>teacher-english-lesson-planning</code><br>CN: 英语备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher English Unit Review Skill](skills/teacher-tools/teacher-english-unit-review/SKILL.md)<br><code>teacher-english-unit-review</code><br>CN: 英语单元复习 Skill | Curated | Needs user context | Primary, Junior High, Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher English Homework Generation Skill](skills/teacher-tools/teacher-english-homework-generation/SKILL.md)<br><code>teacher-english-homework-generation</code><br>CN: 英语作业生成 Skill | Curated | Needs user context | Primary, Junior High, Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Chinese Lesson Planning Skill](skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md)<br><code>teacher-chinese-lesson-planning</code><br>CN: 语文备课 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Chinese Unit Review Skill](skills/teacher-tools/teacher-chinese-unit-review/SKILL.md)<br><code>teacher-chinese-unit-review</code><br>CN: 语文单元复习 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Chinese Homework Generation Skill](skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md)<br><code>teacher-chinese-homework-generation</code><br>CN: 语文作业生成 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Politics Lesson Planning Skill](skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md)<br><code>teacher-politics-lesson-planning</code><br>CN: 政治备课 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [Teacher Politics Unit Review Skill](skills/teacher-tools/teacher-politics-unit-review/SKILL.md)<br><code>teacher-politics-unit-review</code><br>CN: 政治单元复习 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [Teacher Politics Homework Generation Skill](skills/teacher-tools/teacher-politics-homework-generation/SKILL.md)<br><code>teacher-politics-homework-generation</code><br>CN: 政治作业生成 Skill | Enhanced | Needs user context | Primary, Junior High, Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [Teacher Homework Generation Skill](skills/teacher-tools/teacher-homework-generation/SKILL.md)<br><code>teacher-homework-generation</code><br>CN: 作业生成 Skill | Curated | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation, Tiered Practice | Class Homework |

### <a id="family-education"></a>Family Education

Parent companionship, parent-child reading, homework routines, and family communication.

Category argument: <code>--category family-education</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Family Homework Routine Skill](skills/family-education/family-homework-routine/SKILL.md)<br><code>family-homework-routine</code><br>CN: 家庭作业习惯 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Homework Companion |
| [Family School Communication Skill](skills/family-education/family-school-communication/SKILL.md)<br><code>family-school-communication</code><br>CN: 家校沟通准备 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Parent Communication |
| [Agent Parent Companion Skill](skills/family-education/agent-parent-companion/SKILL.md)<br><code>agent-parent-companion</code><br>CN: 家长陪学 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support, Goal Management | Parent Study Support |
| [Family Holiday Learning Skill](skills/family-education/family-holiday-learning/SKILL.md)<br><code>family-holiday-learning</code><br>CN: 假期家庭学习 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Holiday Improvement |
| [Family Screen Time Balance Skill](skills/family-education/family-screen-time-balance/SKILL.md)<br><code>family-screen-time-balance</code><br>CN: 屏幕时间管理 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Habit Building |
| [Family Reading Companion Skill](skills/family-education/family-reading-companion/SKILL.md)<br><code>family-reading-companion</code><br>CN: 亲子阅读陪伴 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Parent-Child Reading |
| [Family Emotion Support Skill](skills/family-education/family-emotion-support/SKILL.md)<br><code>family-emotion-support</code><br>CN: 学习情绪支持 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Parent-Child Communication |
| [Family School Readiness Skill](skills/family-education/family-school-readiness/SKILL.md)<br><code>family-school-readiness</code><br>CN: 幼小衔接家庭准备 Skill | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | School Readiness |

### <a id="language-learning"></a>Language Learning

Adult English, study-abroad exams, speaking, listening, and long-term language improvement.

Category argument: <code>--category language-learning</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Adult Language Learning Skill](skills/language-learning/adult-language-learning/SKILL.md)<br><code>adult-language-learning</code><br>CN: 成人语言学习 Skill | Curated | Needs user context | Adult | Language Learning | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Speaking, Listening, Vocabulary | Daily Check-in |
| [TOEFL Prep Skill](skills/language-learning/toefl-prep/SKILL.md)<br><code>toefl-prep</code><br>CN: 托福备考 Skill | Curated | Needs user context | College, Adult | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |
| [Ielts Prep Skill](skills/language-learning/ielts-prep/SKILL.md)<br><code>ielts-prep</code><br>CN: 雅思备考 Skill | Curated | Needs user context | College, Adult | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |

### <a id="career-learning"></a>Career Learning

College, adult learning, career skills, and certification scenarios.

Category argument: <code>--category career-learning</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [College Data Analysis Skill](skills/career-learning/college-data-analysis/SKILL.md)<br><code>college-data-analysis</code><br>CN: 数据分析 Skill | Curated | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Data Analysis | Career Skills |
| [College CS Data Structure Skill](skills/career-learning/college-cs-data-structure/SKILL.md)<br><code>college-cs-data-structure</code><br>CN: 数据结构 Skill | Curated | Needs user context | College | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Algorithms, Programming | Course Learning |
| [College CS Algorithm Interview Skill](skills/career-learning/college-cs-algorithm-interview/SKILL.md)<br><code>college-cs-algorithm-interview</code><br>CN: 算法面试 Skill | Curated | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Algorithms | Interview Preparation |
| [Adult Workplace Writing Skill](skills/career-learning/adult-workplace-writing/SKILL.md)<br><code>adult-workplace-writing</code><br>CN: 职场写作 Skill | Curated | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing, Expression | Career Skills |
| [Adult Vocational Certificate Skill](skills/career-learning/adult-vocational-certificate/SKILL.md)<br><code>adult-vocational-certificate</code><br>CN: 职业证书备考 Skill | Curated | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Knowledge Memorization, Exam Sprint | Certification |
| [College AI Foundation Skill](skills/career-learning/college-ai-foundation/SKILL.md)<br><code>college-ai-foundation</code><br>CN: AI 基础 Skill | Curated | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | AI Foundations | Interest Learning |
| [College CS Python Skill](skills/career-learning/college-cs-python/SKILL.md)<br><code>college-cs-python</code><br>CN: Python 学习 Skill | Curated | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Programming | Career Skills |

### <a id="examples"></a>Design Examples

Design references that usually require commercial data, organization reports, or tool adapters; not recommended as default installable entries.

Category argument: <code>--category examples</code>

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Institution Course Package Skill](skills/examples/institution-course-package/SKILL.md)<br><code>institution-course-package</code><br>CN: 机构课程包 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Institution Course |
| [School Teacher Usage Skill](skills/examples/school-teacher-usage/SKILL.md)<br><code>school-teacher-usage</code><br>CN: 老师使用分析 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | School Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Data Analysis |
| [Institution Teacher Efficiency Skill](skills/examples/institution-teacher-efficiency/SKILL.md)<br><code>institution-teacher-efficiency</code><br>CN: 老师效率分析 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Data Analysis |
| [School Grade Insight Skill](skills/examples/school-grade-insight/SKILL.md)<br><code>school-grade-insight</code><br>CN: 年级学情洞察 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | School Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | School Assessment |
| [School Resource Planning Skill](skills/examples/school-resource-planning/SKILL.md)<br><code>school-resource-planning</code><br>CN: 校本资源规划 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | School Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Operations Configuration |
| [Institution Campus Dashboard Skill](skills/examples/institution-campus-dashboard/SKILL.md)<br><code>institution-campus-dashboard</code><br>CN: 校区经营看板 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Business Analysis |
| [Institution Renewal Insight Skill](skills/examples/institution-renewal-insight/SKILL.md)<br><code>institution-renewal-insight</code><br>CN: 续费风险分析 Skill | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Renewal Report |

## Project Structure

```text
hermes-edu-skills/
├─ .github/workflows/validate.yml
├─ .well-known/skills/index.json
├─ skills/
│  ├─ textbook-sync/
│  ├─ learning-core/
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

- Hermes Agent: use `npm run agent:install -- --tool hermes --config ~/.hermes/config.yaml` to update `skills.external_dirs`.
- OpenClaw / Codex / Claude Code: use `npm run agent:install -- --tool <tool>` to export a flat directory where every Skill is `<skill-name>/SKILL.md`.
- Cursor: use `npm run agent:install -- --tool cursor --workspace <project>` to generate `.cursor/rules/*.mdc` plus a local Skill Pack copy.
- Other agents: use `npm run agent:convert -- --tool generic-agent --target <dir>`, then connect the exported directory to the target Agent's Skill / prompt / tool registry.
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
