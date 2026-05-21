# Hermes Edu Skills

A China-focused open education Agent Skill Pack for textbook sync, exam prep, photo Q&A, mistake review, family learning, reading/writing, and teacher workflows. Built for Hermes Agent, exportable to OpenClaw, Codex, Cursor, Claude Code, and other AI tools.

面向中国教育场景的开源 Agent Skill Pack：教材同步、备考复习、拍照答疑、错题复盘、亲子陪学、阅读写作和教师工具，Hermes Agent 可直接使用，也可导出到 OpenClaw、Codex、Cursor、Claude Code 等 AI 工具。

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-177-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[中文文档](README.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

Hermes Edu Skills is a Chinese education Agent Skill Pack that can be recognized by Hermes Agent. It turns textbook sync, exam prep, photo Q&A, mistake review, daily practice, reading/writing, family learning, teacher planning, and school communication into 177 browsable, installable, and reusable product-level Skills.

It currently includes 170 installable Hermes Skills and 7 design-reference examples. This is not a generic prompt collection; it is an Agent capability catalog organized around real education jobs, with invocation signals, target roles, parameter dimensions, usage boundaries, and Hermes-readable `SKILL.md` files.

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
- Easy to communicate: Skills explain the user problem, best-fit users, workflow, output, boundaries, and standalone fallback.
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
- Adds standalone availability marks and command arguments so users can see which Skills install directly and which name to copy into CLI commands.
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
| <a href="#textbook-sync">Textbook Sync<br>教材同步</a> | <code>--category textbook-sync</code> | China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills. | 41 |
| <a href="#learning-core">Learning Core<br>学习核心能力</a> | <code>--category learning-core</code> | General learning-loop capabilities such as study plans, photo Q&A, mistake review, and learning reports. | 15 |
| <a href="#daily-practice">Daily Practice<br>每日练习</a> | <code>--category daily-practice</code> | Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement. | 28 |
| <a href="#reading-writing">Reading & Writing<br>阅读写作</a> | <code>--category reading-writing</code> | Chinese, English, academic, and workplace reading/writing capabilities. | 10 |
| <a href="#exam-prep">Exam Prep<br>考试备考</a> | <code>--category exam-prep</code> | Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep. | 27 |
| <a href="#teacher-tools">Teacher Tools<br>老师工具</a> | <code>--category teacher-tools</code> | Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication. | 31 |
| <a href="#family-education">Family Education<br>家庭教育</a> | <code>--category family-education</code> | Parent companionship, parent-child reading, homework routines, and family communication. | 8 |
| <a href="#language-learning">Language Learning<br>语言学习</a> | <code>--category language-learning</code> | Adult English, study-abroad exams, speaking, listening, and long-term language improvement. | 3 |
| <a href="#career-learning">Career Learning<br>成人与职业学习</a> | <code>--category career-learning</code> | College, adult learning, career skills, and certification scenarios. | 7 |
| <a href="#examples">Design Examples<br>设计参考</a> | <code>--category examples</code> | Design references that usually require commercial data, organization reports, or tool adapters; not recommended as default installable entries. | 7 |

## Coverage

| Category | Command Argument | Main Areas | Count |
| --- | --- | --- | ---: |
| <a href="#textbook-sync">Textbook Sync<br>教材同步</a> | <code>--category textbook-sync</code> | Biology, Math, Chemistry, Physics, Geography | 41 |
| <a href="#learning-core">Learning Core<br>学习核心能力</a> | <code>--category learning-core</code> | Learning Skills, General | 15 |
| <a href="#daily-practice">Daily Practice<br>每日练习</a> | <code>--category daily-practice</code> | Geography, Chemistry, History, Biology, Math | 28 |
| <a href="#reading-writing">Reading & Writing<br>阅读写作</a> | <code>--category reading-writing</code> | Chinese, English, General Education | 10 |
| <a href="#exam-prep">Exam Prep<br>考试备考</a> | <code>--category exam-prep</code> | Geography, Chemistry, History, Biology, Math | 27 |
| <a href="#teacher-tools">Teacher Tools<br>老师工具</a> | <code>--category teacher-tools</code> | Teaching Management, Geography, Chemistry, History, Biology | 31 |
| <a href="#family-education">Family Education<br>家庭教育</a> | <code>--category family-education</code> | Family Education | 8 |
| <a href="#language-learning">Language Learning<br>语言学习</a> | <code>--category language-learning</code> | Language Learning, English | 3 |
| <a href="#career-learning">Career Learning<br>成人与职业学习</a> | <code>--category career-learning</code> | Computer Science, Career Education | 7 |
| <a href="#examples">Design Examples<br>设计参考</a> | <code>--category examples</code> | Institution Operations, School Management | 7 |

## All Skills

The table below lists all 177 public Skills. The Skill column shows the installable English Skill name plus an English explanation; the command-argument column gives you the exact value to copy into install, export, or conversion commands.

### <a id="textbook-sync"></a>Textbook Sync<br>教材同步

China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills.

Category argument: <code>--category textbook-sync</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Junior Biology BS Textbook Sync Skill](skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md)<br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>--skill junior-biology-bs-textbook-sync</code> | ✓ | Junior High | Biology | BS Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Math BS Textbook Sync Skill](skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Geometry. | <code>--skill junior-math-bs-textbook-sync</code> | ✓ | Junior High | Math | BS Edition | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Biology BS Textbook Sync Skill](skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md)<br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>--skill senior-biology-bs-textbook-sync</code> | ✓ | Senior High | Biology | BS Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Math BS Textbook Sync Skill](skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Modeling. | <code>--skill senior-math-bs-textbook-sync</code> | ✓ | Senior High | Math | BS Edition | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary Math BS Textbook Sync Skill](skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Calculation, Word Problems. | <code>--skill primary-math-bs-textbook-sync</code> | ✓ | Primary | Math | BS Edition | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [Junior Chemistry LK Textbook Sync Skill](skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md)<br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill junior-chemistry-lk-textbook-sync</code> | ✓ | Junior High | Chemistry | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Physics LK Textbook Sync Skill](skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md)<br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill junior-physics-lk-textbook-sync</code> | ✓ | Junior High | Physics | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Chemistry LK Textbook Sync Skill](skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md)<br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill senior-chemistry-lk-textbook-sync</code> | ✓ | Senior High | Chemistry | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Physics LK Textbook Sync Skill](skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md)<br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill senior-physics-lk-textbook-sync</code> | ✓ | Senior High | Physics | LK Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Junior Geography RJ Textbook Sync Skill](skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md)<br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>--skill junior-geography-rj-textbook-sync</code> | ✓ | Junior High | Geography | RJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Chemistry RJ Textbook Sync Skill](skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md)<br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill junior-chemistry-rj-textbook-sync</code> | ✓ | Junior High | Chemistry | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Biology RJ Textbook Sync Skill](skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md)<br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>--skill junior-biology-rj-textbook-sync</code> | ✓ | Junior High | Biology | RJ Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Math RJ Textbook Sync Skill](skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Geometry. | <code>--skill junior-math-rj-textbook-sync</code> | ✓ | Junior High | Math | RJ Edition | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Physics RJ Textbook Sync Skill](skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md)<br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill junior-physics-rj-textbook-sync</code> | ✓ | Junior High | Physics | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior English RJ Textbook Sync Skill](skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Grammar. | <code>--skill junior-english-rj-textbook-sync</code> | ✓ | Junior High | English | RJ Edition | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Geography RJ Textbook Sync Skill](skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md)<br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>--skill senior-geography-rj-textbook-sync</code> | ✓ | Senior High | Geography | RJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Chemistry RJ Textbook Sync Skill](skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md)<br>Chemistry workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill senior-chemistry-rj-textbook-sync</code> | ✓ | Senior High | Chemistry | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Biology RJ Textbook Sync Skill](skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md)<br>Biology workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Knowledge Memorization. | <code>--skill senior-biology-rj-textbook-sync</code> | ✓ | Senior High | Biology | RJ Edition | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Physics RJ Textbook Sync Skill](skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md)<br>Physics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Experiment Understanding. | <code>--skill senior-physics-rj-textbook-sync</code> | ✓ | Senior High | Physics | RJ Edition | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior English RJ Textbook Sync Skill](skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing. | <code>--skill senior-english-rj-textbook-sync</code> | ✓ | Senior High | English | RJ Edition | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary Math RJ Textbook Sync Skill](skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Calculation, Word Problems. | <code>--skill primary-math-rj-textbook-sync</code> | ✓ | Primary | Math | RJ Edition | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [Senior Math RJ-A Textbook Sync Skill](skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Modeling. | <code>--skill senior-math-rja-textbook-sync</code> | ✓ | Senior High | Math | RJ-A Edition | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Math RJ-B Textbook Sync Skill](skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Modeling. | <code>--skill senior-math-rjb-textbook-sync</code> | ✓ | Senior High | Math | RJ-B Edition | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary English PEP Textbook Sync Skill](skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing. | <code>--skill primary-english-pep-textbook-sync</code> | ✓ | Primary | English | PEP Edition | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Junior Math SJ Textbook Sync Skill](skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Functions, Geometry. | <code>--skill junior-math-sj-textbook-sync</code> | ✓ | Junior High | Math | SJ Edition | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Primary Math SJ Textbook Sync Skill](skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md)<br>Math workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Calculation, Word Problems. | <code>--skill primary-math-sj-textbook-sync</code> | ✓ | Primary | Math | SJ Edition | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [Junior History Tongbian Textbook Sync Skill](skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md)<br>History workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>--skill junior-history-tongbian-textbook-sync</code> | ✓ | Junior High | History | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Chinese Tongbian Textbook Sync Skill](skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md)<br>Chinese workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing Expression. | <code>--skill junior-chinese-tongbian-textbook-sync</code> | ✓ | Junior High | Chinese | Tongbian Edition | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Junior Politics Tongbian Textbook Sync Skill](skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md)<br>Politics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>--skill junior-politics-tongbian-textbook-sync</code> | ✓ | Junior High | Politics | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior History Tongbian Textbook Sync Skill](skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md)<br>History workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>--skill senior-history-tongbian-textbook-sync</code> | ✓ | Senior High | History | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Chinese Tongbian Textbook Sync Skill](skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md)<br>Chinese workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Classical Chinese, Writing. | <code>--skill senior-chinese-tongbian-textbook-sync</code> | ✓ | Senior High | Chinese | Tongbian Edition | Textbook Sync, Classical Chinese, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Senior Politics Tongbian Textbook Sync Skill](skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md)<br>Politics workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Source Analysis. | <code>--skill senior-politics-tongbian-textbook-sync</code> | ✓ | Senior High | Politics | Tongbian Edition | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary Chinese Tongbian Textbook Sync Skill](skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md)<br>Chinese workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing Expression. | <code>--skill primary-chinese-tongbian-textbook-sync</code> | ✓ | Primary | Chinese | Tongbian Edition | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Junior English WY Textbook Sync Skill](skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Grammar. | <code>--skill junior-english-wy-textbook-sync</code> | ✓ | Junior High | English | WY Edition | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior English WY Textbook Sync Skill](skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Reading Comprehension, Writing. | <code>--skill senior-english-wy-textbook-sync</code> | ✓ | Senior High | English | WY Edition | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Primary English WY Textbook Sync Skill](skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing. | <code>--skill primary-english-wy-textbook-sync</code> | ✓ | Primary | English | WY Edition | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Junior Geography Xj Textbook Sync Skill](skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md)<br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>--skill junior-geography-xj-textbook-sync</code> | ✓ | Junior High | Geography | XJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Senior Geography Xj Textbook Sync Skill](skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md)<br>Geography workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Chart Analysis. | <code>--skill senior-geography-xj-textbook-sync</code> | ✓ | Senior High | Geography | XJ Edition | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [Junior English YL Textbook Sync Skill](skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Grammar. | <code>--skill junior-english-yl-textbook-sync</code> | ✓ | Junior High | English | YL Edition | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [Primary English YL Textbook Sync Skill](skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md)<br>English workflow for Pre-Class Preview, Homework, Synchronized Reinforcement. Focus: Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing. | <code>--skill primary-english-yl-textbook-sync</code> | ✓ | Primary | English | YL Edition | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [Preschool General Readiness Textbook Sync Skill](skills/textbook-sync/preschool-general-readiness-textbook-sync/SKILL.md)<br>General workflow for Daily Early Learning, Parent-Child Learning, School Readiness. Focus: Early Learning, Habit Building. | <code>--skill preschool-general-readiness-textbook-sync</code> | ✓ | Preschool | General | School Readiness General | Early Learning, Habit Building | Daily Early Learning, Parent-Child Learning, School Readiness |

### <a id="learning-core"></a>Learning Core<br>学习核心能力

General learning-loop capabilities such as study plans, photo Q&A, mistake review, and learning reports.

Category argument: <code>--category learning-core</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Agent Weakness Boost Skill](skills/learning-core/agent-weakness-boost/SKILL.md)<br>Learning Skills workflow for Targeted Practice. Focus: Gap Diagnosis. | <code>--skill agent-weakness-boost</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Gap Diagnosis | Targeted Practice |
| [Agent Mistake Review Skill](skills/learning-core/agent-mistake-review/SKILL.md)<br>Learning Skills workflow for Mistake Correction, Unit Review. Focus: Mistake Correction, Review Planning. | <code>--skill agent-mistake-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Mistake Correction, Review Planning | Mistake Correction, Unit Review |
| [Agent Review Assistant Skill](skills/learning-core/agent-review-assistant/SKILL.md)<br>Learning Skills workflow for Unit Review. Focus: Review Planning. | <code>--skill agent-review-assistant</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Review Planning | Unit Review |
| [Agent Holiday Plan Skill](skills/learning-core/agent-holiday-plan/SKILL.md)<br>Learning Skills workflow for Holiday Improvement. Focus: Holiday Planning. | <code>--skill agent-holiday-plan</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Holiday Planning | Holiday Improvement |
| [Agent Memory Method Skill](skills/learning-core/agent-memory-method/SKILL.md)<br>Learning Skills workflow for Recitation and Memory. Focus: Memory. | <code>--skill agent-memory-method</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Memory | Recitation and Memory |
| [Agent Preview Assistant Skill](skills/learning-core/agent-preview-assistant/SKILL.md)<br>Learning Skills workflow for Pre-Class Preview. Focus: Preview. | <code>--skill agent-preview-assistant</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Preview | Pre-Class Preview |
| [Agent Weekly Review Skill](skills/learning-core/agent-weekly-review/SKILL.md)<br>Learning Skills workflow for Learning Report. Focus: Stage Review. | <code>--skill agent-weekly-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Stage Review | Learning Report |
| [Agent Photo Question Skill](skills/learning-core/agent-photo-question/SKILL.md)<br>General workflow for Photo Q&A, Homework. Focus: AI Question Explanation, Image Question Recognition. | <code>--skill agent-photo-question</code> | - | Primary<br>Junior High<br>Senior High | General | - | AI Question Explanation, Image Question Recognition | Photo Q&A, Homework |
| [Agent Socratic Tutor Skill](skills/learning-core/agent-socratic-tutor/SKILL.md)<br>Learning Skills workflow for AI Question Explanation. Focus: Socratic Questioning. | <code>--skill agent-socratic-tutor</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Socratic Questioning | AI Question Explanation |
| [Agent Learning Report Skill](skills/learning-core/agent-learning-report/SKILL.md)<br>Learning Skills workflow for Learning Report, Parent Communication. Focus: Learning Report, Learning Advice. | <code>--skill agent-learning-report</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Learning Report, Learning Advice | Learning Report, Parent Communication |
| [Agent Study Plan Skill](skills/learning-core/agent-study-plan/SKILL.md)<br>Learning Skills workflow for Daily Study, Holiday Improvement, Pre-Exam Planning. Focus: Study Planning, Goal Management. | <code>--skill agent-study-plan</code> | ✓ | Preschool<br>Primary<br>Junior High<br>Senior High<br>College<br>Adult | Learning Skills | - | Study Planning, Goal Management | Daily Study, Holiday Improvement, Pre-Exam Planning |
| [Agent Learning Habit Skill](skills/learning-core/agent-learning-habit/SKILL.md)<br>Learning Skills workflow for Daily Check-in. Focus: Habit Building. | <code>--skill agent-learning-habit</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Habit Building | Daily Check-in |
| [Agent Focus Training Skill](skills/learning-core/agent-focus-training/SKILL.md)<br>Learning Skills workflow for Daily Check-in. Focus: Attention. | <code>--skill agent-focus-training</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Attention | Daily Check-in |
| [Agent Homework Companion Skill](skills/learning-core/agent-homework-companion/SKILL.md)<br>Learning Skills workflow for Homework. Focus: Homework Companion. | <code>--skill agent-homework-companion</code> | ✓ | Primary<br>Junior High<br>Senior High | Learning Skills | - | Homework Companion | Homework |
| [Agent Question Explanation Skill](skills/learning-core/agent-question-explanation/SKILL.md)<br>Learning Skills workflow for Homework, Synchronized Reinforcement. Focus: AI Question Explanation, Transfer Practice. | <code>--skill agent-question-explanation</code> | ✓ | Primary<br>Junior High<br>Senior High<br>College | Learning Skills | - | AI Question Explanation, Transfer Practice | Homework, Synchronized Reinforcement |

### <a id="daily-practice"></a>Daily Practice<br>每日练习

Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement.

Category argument: <code>--category daily-practice</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Junior Geography Quick Practice Skill](skills/daily-practice/junior-geography-quick-practice/SKILL.md)<br>Geography workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-geography-quick-practice</code> | ✓ | Junior High | Geography | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Chemistry Quick Practice Skill](skills/daily-practice/junior-chemistry-quick-practice/SKILL.md)<br>Chemistry workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-chemistry-quick-practice</code> | ✓ | Junior High | Chemistry | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior History Quick Practice Skill](skills/daily-practice/junior-history-quick-practice/SKILL.md)<br>History workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-history-quick-practice</code> | ✓ | Junior High | History | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Biology Quick Practice Skill](skills/daily-practice/junior-biology-quick-practice/SKILL.md)<br>Biology workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-biology-quick-practice</code> | ✓ | Junior High | Biology | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Math Quick Practice Skill](skills/daily-practice/junior-math-quick-practice/SKILL.md)<br>Math workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-math-quick-practice</code> | ✓ | Junior High | Math | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Math Daily Practice Skill](skills/daily-practice/junior-math-daily-practice/SKILL.md)<br>Math workflow for Daily Check-in, Targeted Practice. Focus: Calculation, Functions, Geometry. | <code>--skill junior-math-daily-practice</code> | ✓ | Junior High | Math | - | Calculation, Functions, Geometry | Daily Check-in, Targeted Practice |
| [Junior Physics Quick Practice Skill](skills/daily-practice/junior-physics-quick-practice/SKILL.md)<br>Physics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-physics-quick-practice</code> | ✓ | Junior High | Physics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior English Vocabulary Daily Skill](skills/daily-practice/junior-english-vocabulary-daily/SKILL.md)<br>English workflow for Daily Check-in, High School Entrance Exam Review. Focus: Vocabulary. | <code>--skill junior-english-vocabulary-daily</code> | ✓ | Junior High | English | - | Vocabulary | Daily Check-in, High School Entrance Exam Review |
| [Junior English Quick Practice Skill](skills/daily-practice/junior-english-quick-practice/SKILL.md)<br>English workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-english-quick-practice</code> | ✓ | Junior High | English | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Chinese Quick Practice Skill](skills/daily-practice/junior-chinese-quick-practice/SKILL.md)<br>Chinese workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-chinese-quick-practice</code> | ✓ | Junior High | Chinese | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Junior Politics Quick Practice Skill](skills/daily-practice/junior-politics-quick-practice/SKILL.md)<br>Politics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill junior-politics-quick-practice</code> | ✓ | Junior High | Politics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Geography Quick Practice Skill](skills/daily-practice/senior-geography-quick-practice/SKILL.md)<br>Geography workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-geography-quick-practice</code> | ✓ | Senior High | Geography | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Chemistry Quick Practice Skill](skills/daily-practice/senior-chemistry-quick-practice/SKILL.md)<br>Chemistry workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-chemistry-quick-practice</code> | ✓ | Senior High | Chemistry | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior History Quick Practice Skill](skills/daily-practice/senior-history-quick-practice/SKILL.md)<br>History workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-history-quick-practice</code> | ✓ | Senior High | History | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Biology Quick Practice Skill](skills/daily-practice/senior-biology-quick-practice/SKILL.md)<br>Biology workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-biology-quick-practice</code> | ✓ | Senior High | Biology | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Math Quick Practice Skill](skills/daily-practice/senior-math-quick-practice/SKILL.md)<br>Math workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-math-quick-practice</code> | ✓ | Senior High | Math | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Physics Quick Practice Skill](skills/daily-practice/senior-physics-quick-practice/SKILL.md)<br>Physics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-physics-quick-practice</code> | ✓ | Senior High | Physics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior English Vocabulary Daily Skill](skills/daily-practice/senior-english-vocabulary-daily/SKILL.md)<br>English workflow for Daily Check-in, Gaokao Review. Focus: Vocabulary. | <code>--skill senior-english-vocabulary-daily</code> | ✓ | Senior High | English | - | Vocabulary | Daily Check-in, Gaokao Review |
| [Senior English Quick Practice Skill](skills/daily-practice/senior-english-quick-practice/SKILL.md)<br>English workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-english-quick-practice</code> | ✓ | Senior High | English | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Chinese Quick Practice Skill](skills/daily-practice/senior-chinese-quick-practice/SKILL.md)<br>Chinese workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-chinese-quick-practice</code> | ✓ | Senior High | Chinese | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Senior Politics Quick Practice Skill](skills/daily-practice/senior-politics-quick-practice/SKILL.md)<br>Politics workflow for Daily Check-in, Synchronized Reinforcement. Focus: Synchronized Reinforcement, Targeted Practice. | <code>--skill senior-politics-quick-practice</code> | ✓ | Senior High | Politics | - | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [Primary Chinese Recitation Daily Skill](skills/daily-practice/primary-chinese-recitation-daily/SKILL.md)<br>Chinese workflow for Recitation and Memory, Daily Check-in. Focus: Recitation, Reading Aloud. | <code>--skill primary-chinese-recitation-daily</code> | ✓ | Primary | Chinese | - | Recitation, Reading Aloud | Recitation and Memory, Daily Check-in |
| [Primary Math Mental Arithmetic Skill](skills/daily-practice/primary-math-mental-arithmetic/SKILL.md)<br>Math workflow for Mental Arithmetic Drill, Daily Check-in. Focus: Calculation, Number Sense. | <code>--skill primary-math-mental-arithmetic</code> | ✓ | Primary | Math | - | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| [Primary English Vocabulary Daily Skill](skills/daily-practice/primary-english-vocabulary-daily/SKILL.md)<br>English workflow for Daily Check-in, Dictation Practice. Focus: Vocabulary, Silent Dictation. | <code>--skill primary-english-vocabulary-daily</code> | ✓ | Primary | English | - | Vocabulary, Silent Dictation | Daily Check-in, Dictation Practice |
| [Primary Chinese Dictation Daily Skill](skills/daily-practice/primary-chinese-dictation-daily/SKILL.md)<br>Chinese workflow for Dictation Practice, Daily Check-in. Focus: Dictation, Silent Dictation. | <code>--skill primary-chinese-dictation-daily</code> | ✓ | Primary | Chinese | - | Dictation, Silent Dictation | Dictation Practice, Daily Check-in |
| [Primary Reading Daily Skill](skills/daily-practice/primary-reading-daily/SKILL.md)<br>Chinese workflow for Reading Practice, Daily Check-in. Focus: Reading Comprehension. | <code>--skill primary-reading-daily</code> | ✓ | Primary | Chinese | - | Reading Comprehension | Reading Practice, Daily Check-in |
| [Preschool Literacy Daily Skill](skills/daily-practice/preschool-literacy-daily/SKILL.md)<br>Chinese workflow for Daily Early Learning, Daily Check-in. Focus: Literacy. | <code>--skill preschool-literacy-daily</code> | ✓ | Preschool | Chinese | - | Literacy | Daily Early Learning, Daily Check-in |
| [Preschool Number Sense Daily Skill](skills/daily-practice/preschool-number-sense-daily/SKILL.md)<br>Math workflow for Number Sense Games, Daily Check-in. Focus: Number Sense. | <code>--skill preschool-number-sense-daily</code> | ✓ | Preschool | Math | - | Number Sense | Number Sense Games, Daily Check-in |

### <a id="reading-writing"></a>Reading & Writing<br>阅读写作

Chinese, English, academic, and workplace reading/writing capabilities.

Category argument: <code>--category reading-writing</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Junior Chinese Modern Reading Skill](skills/reading-writing/junior-chinese-modern-reading/SKILL.md)<br>Chinese workflow for High School Entrance Exam Review. Focus: Reading Comprehension. | <code>--skill junior-chinese-modern-reading</code> | ✓ | Junior High | Chinese | - | Reading Comprehension | High School Entrance Exam Review |
| [Junior English Writing Skill](skills/reading-writing/junior-english-writing/SKILL.md)<br>English workflow for High School Entrance Exam Review. Focus: Writing. | <code>--skill junior-english-writing</code> | ✓ | Junior High | English | - | Writing | High School Entrance Exam Review |
| [Junior Chinese Composition Skill](skills/reading-writing/junior-chinese-composition/SKILL.md)<br>Chinese workflow for Writing Improvement. Focus: Writing. | <code>--skill junior-chinese-composition</code> | ✓ | Junior High | Chinese | - | Writing | Writing Improvement |
| [Senior English Writing Skill](skills/reading-writing/senior-english-writing/SKILL.md)<br>English workflow for Gaokao Review. Focus: Writing. | <code>--skill senior-english-writing</code> | ✓ | Senior High | English | - | Writing | Gaokao Review |
| [Senior Chinese Reading Skill](skills/reading-writing/senior-chinese-reading/SKILL.md)<br>Chinese workflow for Gaokao Review. Focus: Reading Comprehension. | <code>--skill senior-chinese-reading</code> | ✓ | Senior High | Chinese | - | Reading Comprehension | Gaokao Review |
| [Senior Chinese Essay Skill](skills/reading-writing/senior-chinese-essay/SKILL.md)<br>Chinese workflow for Writing Improvement. Focus: Writing. | <code>--skill senior-chinese-essay</code> | ✓ | Senior High | Chinese | - | Writing | Writing Improvement |
| [Primary English Reading Skill](skills/reading-writing/primary-english-reading/SKILL.md)<br>English workflow for Reading Practice. Focus: Reading Comprehension. | <code>--skill primary-english-reading</code> | ✓ | Primary | English | - | Reading Comprehension | Reading Practice |
| [Primary Chinese Reading Skill](skills/reading-writing/primary-chinese-reading/SKILL.md)<br>Chinese workflow for Reading Practice. Focus: Reading Comprehension. | <code>--skill primary-chinese-reading</code> | ✓ | Primary | Chinese | - | Reading Comprehension | Reading Practice |
| [Primary Chinese Writing Skill](skills/reading-writing/primary-chinese-writing/SKILL.md)<br>Chinese workflow for Writing Improvement. Focus: Writing, Expression. | <code>--skill primary-chinese-writing</code> | ✓ | Primary | Chinese | - | Writing, Expression | Writing Improvement |
| [College Academic Writing Skill](skills/reading-writing/college-academic-writing/SKILL.md)<br>General Education workflow for Paper Writing Practice. Focus: Writing. | <code>--skill college-academic-writing</code> | ✓ | College | General Education | - | Writing | Paper Writing Practice |

### <a id="exam-prep"></a>Exam Prep<br>考试备考

Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep.

Category argument: <code>--category exam-prep</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Junior Geography Exam Review Skill](skills/exam-prep/junior-geography-exam-review/SKILL.md)<br>Geography workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-geography-exam-review</code> | ✓ | Junior High | Geography | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Chemistry Exam Review Skill](skills/exam-prep/junior-chemistry-exam-review/SKILL.md)<br>Chemistry workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-chemistry-exam-review</code> | ✓ | Junior High | Chemistry | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior History Exam Review Skill](skills/exam-prep/junior-history-exam-review/SKILL.md)<br>History workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-history-exam-review</code> | ✓ | Junior High | History | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Biology Exam Review Skill](skills/exam-prep/junior-biology-exam-review/SKILL.md)<br>Biology workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-biology-exam-review</code> | ✓ | Junior High | Biology | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Math Exam Review Skill](skills/exam-prep/junior-math-exam-review/SKILL.md)<br>Math workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-math-exam-review</code> | ✓ | Junior High | Math | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Physics Exam Review Skill](skills/exam-prep/junior-physics-exam-review/SKILL.md)<br>Physics workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-physics-exam-review</code> | ✓ | Junior High | Physics | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior English Exam Review Skill](skills/exam-prep/junior-english-exam-review/SKILL.md)<br>English workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-english-exam-review</code> | ✓ | Junior High | English | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Chinese Exam Review Skill](skills/exam-prep/junior-chinese-exam-review/SKILL.md)<br>Chinese workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-chinese-exam-review</code> | ✓ | Junior High | Chinese | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [Junior Politics Exam Review Skill](skills/exam-prep/junior-politics-exam-review/SKILL.md)<br>Politics workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill junior-politics-exam-review</code> | ✓ | Junior High | Politics | - | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [College CET-6 Sprint Skill](skills/exam-prep/college-cet6-sprint/SKILL.md)<br>English workflow for Pre-Exam Sprint. Focus: Vocabulary, Listening, Reading Comprehension, Writing. | <code>--skill college-cet6-sprint</code> | ✓ | College | English | - | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| [College CET-4 Sprint Skill](skills/exam-prep/college-cet4-sprint/SKILL.md)<br>English workflow for Pre-Exam Sprint. Focus: Vocabulary, Listening, Reading Comprehension, Writing. | <code>--skill college-cet4-sprint</code> | ✓ | College | English | - | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| [Senior Gaokao Sprint Skill](skills/exam-prep/senior-gaokao-sprint/SKILL.md)<br>General workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Sprint. | <code>--skill senior-gaokao-sprint</code> | ✓ | Senior High | General | - | Exam Sprint | Gaokao Review, Pre-Exam Sprint |
| [Senior Geography Exam Review Skill](skills/exam-prep/senior-geography-exam-review/SKILL.md)<br>Geography workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-geography-exam-review</code> | ✓ | Senior High | Geography | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Chemistry Exam Review Skill](skills/exam-prep/senior-chemistry-exam-review/SKILL.md)<br>Chemistry workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-chemistry-exam-review</code> | ✓ | Senior High | Chemistry | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior History Exam Review Skill](skills/exam-prep/senior-history-exam-review/SKILL.md)<br>History workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-history-exam-review</code> | ✓ | Senior High | History | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Biology Exam Review Skill](skills/exam-prep/senior-biology-exam-review/SKILL.md)<br>Biology workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-biology-exam-review</code> | ✓ | Senior High | Biology | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Math Exam Review Skill](skills/exam-prep/senior-math-exam-review/SKILL.md)<br>Math workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-math-exam-review</code> | ✓ | Senior High | Math | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Physics Exam Review Skill](skills/exam-prep/senior-physics-exam-review/SKILL.md)<br>Physics workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-physics-exam-review</code> | ✓ | Senior High | Physics | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior English Exam Review Skill](skills/exam-prep/senior-english-exam-review/SKILL.md)<br>English workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-english-exam-review</code> | ✓ | Senior High | English | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Chinese Exam Review Skill](skills/exam-prep/senior-chinese-exam-review/SKILL.md)<br>Chinese workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-chinese-exam-review</code> | ✓ | Senior High | Chinese | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Senior Politics Exam Review Skill](skills/exam-prep/senior-politics-exam-review/SKILL.md)<br>Politics workflow for Gaokao Review, Pre-Exam Sprint. Focus: Exam Review, Gap Diagnosis. | <code>--skill senior-politics-exam-review</code> | ✓ | Senior High | Politics | - | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [Civil Service Essay Skill](skills/exam-prep/civil-service-essay/SKILL.md)<br>Career Education workflow for Certification, Writing Improvement. Focus: Source Reading, Writing. | <code>--skill civil-service-essay</code> | ✓ | Adult | Career Education | - | Source Reading, Writing | Certification, Writing Improvement |
| [Civil Service Aptitude Skill](skills/exam-prep/civil-service-aptitude/SKILL.md)<br>Career Education workflow for Certification, Targeted Practice. Focus: Logic, Data Analysis. | <code>--skill civil-service-aptitude</code> | ✓ | Adult | Career Education | - | Logic, Data Analysis | Certification, Targeted Practice |
| [Teacher Certification Sprint Skill](skills/exam-prep/teacher-certification-sprint/SKILL.md)<br>Career Education workflow for Certification. Focus: Exam Sprint. | <code>--skill teacher-certification-sprint</code> | ✓ | Adult | Career Education | - | Exam Sprint | Certification |
| [Postgraduate English Sprint Skill](skills/exam-prep/postgraduate-english-sprint/SKILL.md)<br>English workflow for Postgraduate Exam Review. Focus: Reading Comprehension, Translation, Writing. | <code>--skill postgraduate-english-sprint</code> | ✓ | College<br>Adult | English | - | Reading Comprehension, Translation, Writing | Postgraduate Exam Review |
| [Primary Final Review Skill](skills/exam-prep/primary-final-review/SKILL.md)<br>General workflow for Midterm and Final Review. Focus: Exam Review. | <code>--skill primary-final-review</code> | ✓ | Primary | General | - | Exam Review | Midterm and Final Review |
| [Junior Zhongkao Sprint Skill](skills/exam-prep/junior-zhongkao-sprint/SKILL.md)<br>General workflow for High School Entrance Exam Review, Pre-Exam Sprint. Focus: Exam Sprint. | <code>--skill junior-zhongkao-sprint</code> | ✓ | Junior High | General | - | Exam Sprint | High School Entrance Exam Review, Pre-Exam Sprint |

### <a id="teacher-tools"></a>Teacher Tools<br>老师工具

Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication.

Category argument: <code>--category teacher-tools</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Teacher Class Analysis Lite Skill](skills/teacher-tools/teacher-class-analysis-lite/SKILL.md)<br>Teaching Management workflow for Learning Analysis. Focus: Learning Analysis. | <code>--skill teacher-class-analysis-lite</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Learning Analysis | Learning Analysis |
| [Teacher Geography Lesson Planning Skill](skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md)<br>Geography workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-geography-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Geography | - | Instructional Design | Lesson Preparation |
| [Teacher Geography Unit Review Skill](skills/teacher-tools/teacher-geography-unit-review/SKILL.md)<br>Geography workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-geography-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Geography | - | Review Planning | Unit Review |
| [Teacher Geography Homework Generation Skill](skills/teacher-tools/teacher-geography-homework-generation/SKILL.md)<br>Geography workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-geography-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Geography | - | Homework Generation | Class Homework |
| [Teacher Chemistry Lesson Planning Skill](skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md)<br>Chemistry workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-chemistry-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Chemistry | - | Instructional Design | Lesson Preparation |
| [Teacher Chemistry Unit Review Skill](skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md)<br>Chemistry workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-chemistry-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Chemistry | - | Review Planning | Unit Review |
| [Teacher Chemistry Homework Generation Skill](skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md)<br>Chemistry workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-chemistry-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Chemistry | - | Homework Generation | Class Homework |
| [Teacher Parent Report Lite Skill](skills/teacher-tools/teacher-parent-report-lite/SKILL.md)<br>Teaching Management workflow for Parent Communication. Focus: Report Generation. | <code>--skill teacher-parent-report-lite</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Report Generation | Parent Communication |
| [Teacher Lesson Planning Skill](skills/teacher-tools/teacher-lesson-planning/SKILL.md)<br>Teaching Management workflow for Lesson Preparation. Focus: Instructional Design, Learning Analysis. | <code>--skill teacher-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Instructional Design, Learning Analysis | Lesson Preparation |
| [Teacher History Lesson Planning Skill](skills/teacher-tools/teacher-history-lesson-planning/SKILL.md)<br>History workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-history-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | History | - | Instructional Design | Lesson Preparation |
| [Teacher History Unit Review Skill](skills/teacher-tools/teacher-history-unit-review/SKILL.md)<br>History workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-history-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | History | - | Review Planning | Unit Review |
| [Teacher History Homework Generation Skill](skills/teacher-tools/teacher-history-homework-generation/SKILL.md)<br>History workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-history-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | History | - | Homework Generation | Class Homework |
| [Teacher Biology Lesson Planning Skill](skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md)<br>Biology workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-biology-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Biology | - | Instructional Design | Lesson Preparation |
| [Teacher Biology Unit Review Skill](skills/teacher-tools/teacher-biology-unit-review/SKILL.md)<br>Biology workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-biology-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Biology | - | Review Planning | Unit Review |
| [Teacher Biology Homework Generation Skill](skills/teacher-tools/teacher-biology-homework-generation/SKILL.md)<br>Biology workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-biology-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Biology | - | Homework Generation | Class Homework |
| [Teacher Math Lesson Planning Skill](skills/teacher-tools/teacher-math-lesson-planning/SKILL.md)<br>Math workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-math-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Math | - | Instructional Design | Lesson Preparation |
| [Teacher Math Unit Review Skill](skills/teacher-tools/teacher-math-unit-review/SKILL.md)<br>Math workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-math-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Math | - | Review Planning | Unit Review |
| [Teacher Math Homework Generation Skill](skills/teacher-tools/teacher-math-homework-generation/SKILL.md)<br>Math workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-math-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Math | - | Homework Generation | Class Homework |
| [Teacher Physics Lesson Planning Skill](skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md)<br>Physics workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-physics-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Physics | - | Instructional Design | Lesson Preparation |
| [Teacher Physics Unit Review Skill](skills/teacher-tools/teacher-physics-unit-review/SKILL.md)<br>Physics workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-physics-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Physics | - | Review Planning | Unit Review |
| [Teacher Physics Homework Generation Skill](skills/teacher-tools/teacher-physics-homework-generation/SKILL.md)<br>Physics workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-physics-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Physics | - | Homework Generation | Class Homework |
| [Teacher English Lesson Planning Skill](skills/teacher-tools/teacher-english-lesson-planning/SKILL.md)<br>English workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-english-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | English | - | Instructional Design | Lesson Preparation |
| [Teacher English Unit Review Skill](skills/teacher-tools/teacher-english-unit-review/SKILL.md)<br>English workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-english-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | English | - | Review Planning | Unit Review |
| [Teacher English Homework Generation Skill](skills/teacher-tools/teacher-english-homework-generation/SKILL.md)<br>English workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-english-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | English | - | Homework Generation | Class Homework |
| [Teacher Chinese Lesson Planning Skill](skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md)<br>Chinese workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-chinese-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Chinese | - | Instructional Design | Lesson Preparation |
| [Teacher Chinese Unit Review Skill](skills/teacher-tools/teacher-chinese-unit-review/SKILL.md)<br>Chinese workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-chinese-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Chinese | - | Review Planning | Unit Review |
| [Teacher Chinese Homework Generation Skill](skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md)<br>Chinese workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-chinese-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Chinese | - | Homework Generation | Class Homework |
| [Teacher Politics Lesson Planning Skill](skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md)<br>Politics workflow for Lesson Preparation. Focus: Instructional Design. | <code>--skill teacher-politics-lesson-planning</code> | ✓ | Primary<br>Junior High<br>Senior High | Politics | - | Instructional Design | Lesson Preparation |
| [Teacher Politics Unit Review Skill](skills/teacher-tools/teacher-politics-unit-review/SKILL.md)<br>Politics workflow for Unit Review. Focus: Review Planning. | <code>--skill teacher-politics-unit-review</code> | ✓ | Primary<br>Junior High<br>Senior High | Politics | - | Review Planning | Unit Review |
| [Teacher Politics Homework Generation Skill](skills/teacher-tools/teacher-politics-homework-generation/SKILL.md)<br>Politics workflow for Class Homework. Focus: Homework Generation. | <code>--skill teacher-politics-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Politics | - | Homework Generation | Class Homework |
| [Teacher Homework Generation Skill](skills/teacher-tools/teacher-homework-generation/SKILL.md)<br>Teaching Management workflow for Class Homework. Focus: Homework Generation, Tiered Practice. | <code>--skill teacher-homework-generation</code> | ✓ | Primary<br>Junior High<br>Senior High | Teaching Management | - | Homework Generation, Tiered Practice | Class Homework |

### <a id="family-education"></a>Family Education<br>家庭教育

Parent companionship, parent-child reading, homework routines, and family communication.

Category argument: <code>--category family-education</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Family Homework Routine Skill](skills/family-education/family-homework-routine/SKILL.md)<br>Family Education workflow for Homework Companion. Focus: Parent Study Support. | <code>--skill family-homework-routine</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Homework Companion |
| [Family School Communication Skill](skills/family-education/family-school-communication/SKILL.md)<br>Family Education workflow for Parent Communication. Focus: Parent Study Support. | <code>--skill family-school-communication</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Parent Communication |
| [Agent Parent Companion Skill](skills/family-education/agent-parent-companion/SKILL.md)<br>Family Education workflow for Parent Study Support. Focus: Parent Study Support, Goal Management. | <code>--skill agent-parent-companion</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support, Goal Management | Parent Study Support |
| [Family Holiday Learning Skill](skills/family-education/family-holiday-learning/SKILL.md)<br>Family Education workflow for Holiday Improvement. Focus: Parent Study Support. | <code>--skill family-holiday-learning</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Holiday Improvement |
| [Family Screen Time Balance Skill](skills/family-education/family-screen-time-balance/SKILL.md)<br>Family Education workflow for Habit Building. Focus: Parent Study Support. | <code>--skill family-screen-time-balance</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Habit Building |
| [Family Reading Companion Skill](skills/family-education/family-reading-companion/SKILL.md)<br>Family Education workflow for Parent-Child Reading. Focus: Parent Study Support. | <code>--skill family-reading-companion</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Parent-Child Reading |
| [Family Emotion Support Skill](skills/family-education/family-emotion-support/SKILL.md)<br>Family Education workflow for Parent-Child Communication. Focus: Parent Study Support. | <code>--skill family-emotion-support</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | Parent-Child Communication |
| [Family School Readiness Skill](skills/family-education/family-school-readiness/SKILL.md)<br>Family Education workflow for School Readiness. Focus: Parent Study Support. | <code>--skill family-school-readiness</code> | ✓ | Preschool<br>Primary<br>Junior High | Family Education | - | Parent Study Support | School Readiness |

### <a id="language-learning"></a>Language Learning<br>语言学习

Adult English, study-abroad exams, speaking, listening, and long-term language improvement.

Category argument: <code>--category language-learning</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Adult Language Learning Skill](skills/language-learning/adult-language-learning/SKILL.md)<br>Language Learning workflow for Daily Check-in. Focus: Speaking, Listening, Vocabulary. | <code>--skill adult-language-learning</code> | ✓ | Adult | Language Learning | - | Speaking, Listening, Vocabulary | Daily Check-in |
| [TOEFL Prep Skill](skills/language-learning/toefl-prep/SKILL.md)<br>English workflow for Study-Abroad Exams. Focus: Listening, Speaking, Reading Comprehension, Writing. | <code>--skill toefl-prep</code> | ✓ | College<br>Adult | English | - | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |
| [Ielts Prep Skill](skills/language-learning/ielts-prep/SKILL.md)<br>English workflow for Study-Abroad Exams. Focus: Listening, Speaking, Reading Comprehension, Writing. | <code>--skill ielts-prep</code> | ✓ | College<br>Adult | English | - | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |

### <a id="career-learning"></a>Career Learning<br>成人与职业学习

College, adult learning, career skills, and certification scenarios.

Category argument: <code>--category career-learning</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [College Data Analysis Skill](skills/career-learning/college-data-analysis/SKILL.md)<br>Computer Science workflow for Career Skills. Focus: Data Analysis. | <code>--skill college-data-analysis</code> | ✓ | College<br>Adult | Computer Science | - | Data Analysis | Career Skills |
| [College CS Data Structure Skill](skills/career-learning/college-cs-data-structure/SKILL.md)<br>Computer Science workflow for Course Learning. Focus: Algorithms, Programming. | <code>--skill college-cs-data-structure</code> | ✓ | College | Computer Science | - | Algorithms, Programming | Course Learning |
| [College CS Algorithm Interview Skill](skills/career-learning/college-cs-algorithm-interview/SKILL.md)<br>Computer Science workflow for Interview Preparation. Focus: Algorithms. | <code>--skill college-cs-algorithm-interview</code> | ✓ | College<br>Adult | Computer Science | - | Algorithms | Interview Preparation |
| [Adult Workplace Writing Skill](skills/career-learning/adult-workplace-writing/SKILL.md)<br>Career Education workflow for Career Skills. Focus: Writing, Expression. | <code>--skill adult-workplace-writing</code> | ✓ | Adult | Career Education | - | Writing, Expression | Career Skills |
| [Adult Vocational Certificate Skill](skills/career-learning/adult-vocational-certificate/SKILL.md)<br>Career Education workflow for Certification. Focus: Knowledge Memorization, Exam Sprint. | <code>--skill adult-vocational-certificate</code> | ✓ | Adult | Career Education | - | Knowledge Memorization, Exam Sprint | Certification |
| [College AI Foundation Skill](skills/career-learning/college-ai-foundation/SKILL.md)<br>Computer Science workflow for Interest Learning. Focus: AI Foundations. | <code>--skill college-ai-foundation</code> | ✓ | College<br>Adult | Computer Science | - | AI Foundations | Interest Learning |
| [College CS Python Skill](skills/career-learning/college-cs-python/SKILL.md)<br>Computer Science workflow for Career Skills. Focus: Programming. | <code>--skill college-cs-python</code> | ✓ | College<br>Adult | Computer Science | - | Programming | Career Skills |

### <a id="examples"></a>Design Examples<br>设计参考

Design references that usually require commercial data, organization reports, or tool adapters; not recommended as default installable entries.

Category argument: <code>--category examples</code>

| Skill | Command Argument | Standalone | Stage | Subject / Area | Textbook | Ability | Scenario |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| [Institution Course Package Skill](skills/examples/institution-course-package/SKILL.md)<br>Institution Operations workflow for Institution Course. Focus: Operations Analysis. | <code>--skill institution-course-package</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | Institution Operations | - | Operations Analysis | Institution Course |
| [School Teacher Usage Skill](skills/examples/school-teacher-usage/SKILL.md)<br>School Management workflow for Data Analysis. Focus: Operations Analysis. | <code>--skill school-teacher-usage</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | School Management | - | Operations Analysis | Data Analysis |
| [Institution Teacher Efficiency Skill](skills/examples/institution-teacher-efficiency/SKILL.md)<br>Institution Operations workflow for Data Analysis. Focus: Operations Analysis. | <code>--skill institution-teacher-efficiency</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | Institution Operations | - | Operations Analysis | Data Analysis |
| [School Grade Insight Skill](skills/examples/school-grade-insight/SKILL.md)<br>School Management workflow for School Assessment. Focus: Operations Analysis. | <code>--skill school-grade-insight</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | School Management | - | Operations Analysis | School Assessment |
| [School Resource Planning Skill](skills/examples/school-resource-planning/SKILL.md)<br>School Management workflow for Operations Configuration. Focus: Operations Analysis. | <code>--skill school-resource-planning</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | School Management | - | Operations Analysis | Operations Configuration |
| [Institution Campus Dashboard Skill](skills/examples/institution-campus-dashboard/SKILL.md)<br>Institution Operations workflow for Business Analysis. Focus: Operations Analysis. | <code>--skill institution-campus-dashboard</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | Institution Operations | - | Operations Analysis | Business Analysis |
| [Institution Renewal Insight Skill](skills/examples/institution-renewal-insight/SKILL.md)<br>Institution Operations workflow for Renewal Report. Focus: Operations Analysis. | <code>--skill institution-renewal-insight</code><br><code>--include-examples</code> | - | Primary<br>Junior High<br>Senior High<br>Adult | Institution Operations | - | Operations Analysis | Renewal Report |

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
