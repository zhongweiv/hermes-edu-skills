# Hermes Edu Skills

China-focused education Skill Pack for Hermes Agent Runtime. It helps education agents quickly gain reusable capabilities for textbook sync, daily practice, exam prep, teacher tools, and family learning.

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-177-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[中文文档](README.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

Hermes Edu Skills is an open education Skill Pack that can be recognized by Hermes Agent. It currently includes 177 public Hermes-compatible Skills: 170 installable Skills and 7 design-reference examples.

This is not a generic prompt collection. It is organized like an education-agent product catalog: every Skill has invocation signals, target roles, parameter dimensions, maturity labels, and a Hermes-readable `SKILL.md`.

If you are building education agents, AI learning assistants, AI teachers, curriculum tooling, or the Hermes Skill ecosystem, this repository is designed to be a practical starting point. If it helps you, please give it a Star so more education AI developers can discover it.

## Navigation

- [Understand In 30 Seconds](#understand-in-30-seconds)
- [Quick Start](#quick-start)
- [Choose By Role](#choose-by-role)
- [Skill Category Overview](#skill-category-overview)
- [All Skills](#all-skills)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## Understand In 30 Seconds

| Question | Answer |
| --- | --- |
| What is this? | A China-focused education Skill Pack for Hermes Agent Runtime. |
| How many Skills? | 177 public Skills, including 170 installable Skills and 7 design examples. |
| Core scenarios? | Textbook sync, study planning, photo Q&A, mistake review, daily practice, exam prep, teacher planning, and family learning. |
| Why not thousands of files? | Grade, semester, unit, lesson, knowledge point, and difficulty are parameters instead of thousands of repetitive Skills. |
| Who is it for? | Hermes Agent users, education AI developers, teachers, curriculum researchers, schools, and institutions. |
| How do I start? | Clone the repo and add `skills/` to Hermes `external_dirs`. |

## Why This Project Matters

- China-first education scenarios: textbook editions, grades, semesters, units, lessons, sync practice, and exam review are first-class concerns.
- Product-level taxonomy: Skills are organized by user jobs, not by raw technical folders.
- Hermes-compatible: every Skill is a standard `SKILL.md` that Hermes can read.
- Readable and extensible: install directly, adapt to your own Agent, or use as a Skill-design reference.
- Public-safe: this repository contains public Skill documents, indexes, and validation tools only. It does not contain user data, secrets, or commercial backend implementation.

## What You Can Build

- Add a Chinese education Skill library to a local Hermes Agent.
- Prototype AI learning assistants, AI teachers, AI teaching assistants, photo Q&A, and mistake-review agents.
- Learn and reuse education Skill structure, invocation signals, use cases, and workflow naming patterns.
- Design your own Skills for schools, teachers, parents, education institutions, and adult learning scenarios.
- Fork the repository and extend textbook versions, knowledge-point coverage, and standalone Hermes tool adapters.

## Choose By Role

| Who you are | Start here | What you get |
| --- | --- | --- |
| Hermes Agent user | [Quick Start](#quick-start), [Learning Core](#learning-core) | Add Chinese education Skills to your local Agent. |
| Education AI developer | [Project Structure](#project-structure), [Compatibility Notes](#compatibility-notes) | Reuse Skill structure, parameter design, and workflow naming. |
| Teacher / curriculum researcher | [Teacher Tools](#teacher-tools), [Textbook Sync](#textbook-sync) | Study lesson planning, homework generation, unit review, and sync teaching patterns. |
| Parent / family-learning product builder | [Family Education](#family-education), [Daily Practice](#daily-practice) | Build companionship, reading, habits, and daily practice scenarios. |
| School / institution team | [Design Examples](#examples), [Exam Prep](#exam-prep) | Explore organization reports, class analysis, course packages, and review workflows. |

## Initiator And Maintainer

This project is initiated and maintained by [Shineway](https://www.shineway.tech/).

We are open-sourcing reusable education Agent Skill design so developers, teachers, researchers, schools, and education teams can explore China-focused education-agent capabilities together. This repository contains public Skill documents, indexes, and validation tools only; it does not include user data or backend service implementations.

## Project Highlights

- 177 clickable product-level `SKILL.md` files.
- User-task-oriented categories: textbook sync, learning core, daily practice, exam prep, teacher tools, and family education.
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

## Quick Start

Clone the repository:

```bash
git clone https://github.com/zhongweiv/hermes-edu-skills.git
cd hermes-edu-skills
npm run validate
```

Add the `skills/` directory to your Hermes `config.yaml`:

```yaml
skills:
  external_dirs:
    - /absolute/path/to/hermes-edu-skills/skills
```

Verify in Hermes:

```bash
hermes skills list
```

You can also verify through Hermes skill tools:

```python
from tools.skills_tool import skills_list, skill_view

skills_list()
skill_view("primary-math-mental-arithmetic")
```

## Skill Category Overview

Start from these top-level categories. Each category still keeps a full clickable Skill table for browsing, search, and secondary integration.

| Category | Use Case | Count |
| --- | --- | ---: |
| [Textbook Sync](#textbook-sync) | China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills. | 41 |
| [Learning Core](#learning-core) | General learning-loop capabilities such as study plans, photo Q&A, mistake review, and learning reports. | 15 |
| [Daily Practice](#daily-practice) | Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement. | 28 |
| [Reading & Writing](#reading-writing) | Chinese, English, academic, and workplace reading/writing capabilities. | 10 |
| [Exam Prep](#exam-prep) | Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep. | 27 |
| [Teacher Tools](#teacher-tools) | Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication. | 31 |
| [Family Education](#family-education) | Parent companionship, parent-child reading, homework routines, and family communication. | 8 |
| [Language Learning](#language-learning) | Adult English, study-abroad exams, speaking, listening, and long-term language improvement. | 3 |
| [Career Learning](#career-learning) | College, adult learning, career skills, and certification scenarios. | 7 |
| [Design Examples](#examples) | Design references that usually require commercial data, organization reports, or tool adapters; not recommended as default installable entries. | 7 |

## Coverage

| Category | Main Areas | Count |
| --- | --- | ---: |
| [Textbook Sync](#textbook-sync) | Biology, Math, Chemistry, Physics, Geography | 41 |
| [Learning Core](#learning-core) | Learning Skills, General | 15 |
| [Daily Practice](#daily-practice) | Geography, Chemistry, History, Biology, Math | 28 |
| [Reading & Writing](#reading-writing) | Chinese, English, General Education | 10 |
| [Exam Prep](#exam-prep) | Geography, Chemistry, History, Biology, Math | 27 |
| [Teacher Tools](#teacher-tools) | Teaching Management | 31 |
| [Family Education](#family-education) | Family Education | 8 |
| [Language Learning](#language-learning) | Language Learning, English | 3 |
| [Career Learning](#career-learning) | Computer Science, Career Education | 7 |
| [Design Examples](#examples) | Institution Operations, School Management | 7 |

## All Skills

The table below lists all 177 public Skills. Click a Skill name to open the corresponding `SKILL.md`.

### <a id="textbook-sync"></a>Textbook Sync

China-focused textbook synchronization by version, grade, semester, unit, lesson, and knowledge point. Grade, semester, unit, and difficulty are parameters, not thousands of separate Skills.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [北师大版初中生物同步 Skill](skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md)<br><code>junior-biology-bs-textbook-sync</code> | Enhanced | Needs user context | Junior High | Biology | 北师大版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [北师大版初中数学同步 Skill](skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md)<br><code>junior-math-bs-textbook-sync</code> | Enhanced | Needs user context | Junior High | Math | 北师大版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [北师大版高中生物同步 Skill](skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md)<br><code>senior-biology-bs-textbook-sync</code> | Enhanced | Needs user context | Senior High | Biology | 北师大版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [北师大版高中数学同步 Skill](skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md)<br><code>senior-math-bs-textbook-sync</code> | Enhanced | Needs user context | Senior High | Math | 北师大版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [北师大版小学数学同步 Skill](skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md)<br><code>primary-math-bs-textbook-sync</code> | Enhanced | Needs user context | Primary | Math | 北师大版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [鲁科版初中化学同步 Skill](skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md)<br><code>junior-chemistry-lk-textbook-sync</code> | Enhanced | Needs user context | Junior High | Chemistry | 鲁科版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [鲁科版初中物理同步 Skill](skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md)<br><code>junior-physics-lk-textbook-sync</code> | Enhanced | Needs user context | Junior High | Physics | 鲁科版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [鲁科版高中化学同步 Skill](skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md)<br><code>senior-chemistry-lk-textbook-sync</code> | Enhanced | Needs user context | Senior High | Chemistry | 鲁科版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [鲁科版高中物理同步 Skill](skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md)<br><code>senior-physics-lk-textbook-sync</code> | Enhanced | Needs user context | Senior High | Physics | 鲁科版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教版初中地理同步 Skill](skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md)<br><code>junior-geography-rj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Geography | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [人教版初中化学同步 Skill](skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md)<br><code>junior-chemistry-rj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Chemistry | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [人教版初中生物同步 Skill](skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md)<br><code>junior-biology-rj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Biology | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [人教版初中数学同步 Skill](skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md)<br><code>junior-math-rj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Math | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [人教版初中物理同步 Skill](skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md)<br><code>junior-physics-rj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Physics | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [人教版初中英语同步 Skill](skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md)<br><code>junior-english-rj-textbook-sync</code> | Enhanced | Needs user context | Junior High | English | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [人教版高中地理同步 Skill](skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md)<br><code>senior-geography-rj-textbook-sync</code> | Enhanced | Needs user context | Senior High | Geography | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教版高中化学同步 Skill](skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md)<br><code>senior-chemistry-rj-textbook-sync</code> | Enhanced | Needs user context | Senior High | Chemistry | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教版高中生物同步 Skill](skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md)<br><code>senior-biology-rj-textbook-sync</code> | Enhanced | Needs user context | Senior High | Biology | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Knowledge Memorization | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教版高中物理同步 Skill](skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md)<br><code>senior-physics-rj-textbook-sync</code> | Enhanced | Needs user context | Senior High | Physics | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Experiment Understanding | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教版高中英语同步 Skill](skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md)<br><code>senior-english-rj-textbook-sync</code> | Enhanced | Needs user context | Senior High | English | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教版小学数学同步 Skill](skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md)<br><code>primary-math-rj-textbook-sync</code> | Curated | Needs user context | Primary | Math | 人教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [人教A版高中数学同步 Skill](skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md)<br><code>senior-math-rja-textbook-sync</code> | Enhanced | Needs user context | Senior High | Math | 人教A版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教B版高中数学同步 Skill](skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md)<br><code>senior-math-rjb-textbook-sync</code> | Enhanced | Needs user context | Senior High | Math | 人教B版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Modeling | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [人教PEP版小学英语同步 Skill](skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md)<br><code>primary-english-pep-textbook-sync</code> | Enhanced | Needs user context | Primary | English | 人教PEP版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [苏教版初中数学同步 Skill](skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md)<br><code>junior-math-sj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Math | 苏教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Functions, Geometry | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [苏教版小学数学同步 Skill](skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md)<br><code>primary-math-sj-textbook-sync</code> | Enhanced | Needs user context | Primary | Math | 苏教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Calculation, Word Problems | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Mental Arithmetic Drill |
| [统编版初中历史同步 Skill](skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md)<br><code>junior-history-tongbian-textbook-sync</code> | Enhanced | Needs user context | Junior High | History | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [统编版初中语文同步 Skill](skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md)<br><code>junior-chinese-tongbian-textbook-sync</code> | Enhanced | Needs user context | Junior High | Chinese | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [统编版初中政治同步 Skill](skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md)<br><code>junior-politics-tongbian-textbook-sync</code> | Enhanced | Needs user context | Junior High | Politics | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [统编版高中历史同步 Skill](skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md)<br><code>senior-history-tongbian-textbook-sync</code> | Enhanced | Needs user context | Senior High | History | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [统编版高中语文同步 Skill](skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md)<br><code>senior-chinese-tongbian-textbook-sync</code> | Enhanced | Needs user context | Senior High | Chinese | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Classical Chinese, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [统编版高中政治同步 Skill](skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md)<br><code>senior-politics-tongbian-textbook-sync</code> | Enhanced | Needs user context | Senior High | Politics | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Source Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [统编版小学语文同步 Skill](skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md)<br><code>primary-chinese-tongbian-textbook-sync</code> | Enhanced | Needs user context | Primary | Chinese | 统编版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing Expression | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [外研版初中英语同步 Skill](skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md)<br><code>junior-english-wy-textbook-sync</code> | Enhanced | Needs user context | Junior High | English | 外研版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [外研版高中英语同步 Skill](skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md)<br><code>senior-english-wy-textbook-sync</code> | Enhanced | Needs user context | Senior High | English | 外研版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Reading Comprehension, Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [外研版小学英语同步 Skill](skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md)<br><code>primary-english-wy-textbook-sync</code> | Enhanced | Needs user context | Primary | English | 外研版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [湘教版初中地理同步 Skill](skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md)<br><code>junior-geography-xj-textbook-sync</code> | Enhanced | Needs user context | Junior High | Geography | 湘教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [湘教版高中地理同步 Skill](skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md)<br><code>senior-geography-xj-textbook-sync</code> | Enhanced | Needs user context | Senior High | Geography | 湘教版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Chart Analysis | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, Gaokao Review |
| [译林版初中英语同步 Skill](skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md)<br><code>junior-english-yl-textbook-sync</code> | Enhanced | Needs user context | Junior High | English | 译林版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Grammar | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review, High School Entrance Exam Review |
| [译林版小学英语同步 Skill](skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md)<br><code>primary-english-yl-textbook-sync</code> | Enhanced | Needs user context | Primary | English | 译林版 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Textbook Sync, Vocabulary, Listening, Speaking, Reading, and Writing | Pre-Class Preview, Homework, Synchronized Reinforcement, Unit Review, Mistake Reinforcement, Midterm and Final Review |
| [幼小衔接通用学前综合同步 Skill](skills/textbook-sync/preschool-general-readiness-textbook-sync/SKILL.md)<br><code>preschool-general-readiness-textbook-sync</code> | Enhanced | Needs user context | Preschool | General | 幼小衔接通用 | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Early Learning, Habit Building | Daily Early Learning, Parent-Child Learning, School Readiness |

### <a id="learning-core"></a>Learning Core

General learning-loop capabilities such as study plans, photo Q&A, mistake review, and learning reports.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [薄弱项提升 Skill](skills/learning-core/agent-weakness-boost/SKILL.md)<br><code>agent-weakness-boost</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Gap Diagnosis | Targeted Practice |
| [错题复盘 Skill](skills/learning-core/agent-mistake-review/SKILL.md)<br><code>agent-mistake-review</code> | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Mistake Correction, Review Planning | Mistake Correction, Unit Review |
| [复习助手 Skill](skills/learning-core/agent-review-assistant/SKILL.md)<br><code>agent-review-assistant</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [寒暑假提升 Skill](skills/learning-core/agent-holiday-plan/SKILL.md)<br><code>agent-holiday-plan</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Holiday Planning | Holiday Improvement |
| [记忆方法 Skill](skills/learning-core/agent-memory-method/SKILL.md)<br><code>agent-memory-method</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Memory | Recitation and Memory |
| [课前预习 Skill](skills/learning-core/agent-preview-assistant/SKILL.md)<br><code>agent-preview-assistant</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Preview | Pre-Class Preview |
| [每周复盘 Skill](skills/learning-core/agent-weekly-review/SKILL.md)<br><code>agent-weekly-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Stage Review | Learning Report |
| [拍照答疑 Skill](skills/learning-core/agent-photo-question/SKILL.md)<br><code>agent-photo-question</code> | Curated | Requires tools | Primary, Junior High, Senior High | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | AI Question Explanation, Image Question Recognition | Photo Q&A, Homework |
| [启发式讲解 Skill](skills/learning-core/agent-socratic-tutor/SKILL.md)<br><code>agent-socratic-tutor</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Socratic Questioning | AI Question Explanation |
| [学情报告 Skill](skills/learning-core/agent-learning-report/SKILL.md)<br><code>agent-learning-report</code> | Curated | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Learning Report, Learning Advice | Learning Report, Parent Communication |
| [学习计划 Skill](skills/learning-core/agent-study-plan/SKILL.md)<br><code>agent-study-plan</code> | Curated | Needs user context | Preschool, Primary, Junior High, Senior High, College, Adult | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Study Planning, Goal Management | Daily Study, Holiday Improvement, Pre-Exam Planning |
| [学习习惯 Skill](skills/learning-core/agent-learning-habit/SKILL.md)<br><code>agent-learning-habit</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Habit Building | Daily Check-in |
| [专注力训练 Skill](skills/learning-core/agent-focus-training/SKILL.md)<br><code>agent-focus-training</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Attention | Daily Check-in |
| [作业陪伴 Skill](skills/learning-core/agent-homework-companion/SKILL.md)<br><code>agent-homework-companion</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Companion | Homework |
| [AI 讲题 Skill](skills/learning-core/agent-question-explanation/SKILL.md)<br><code>agent-question-explanation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High, College | Learning Skills | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | AI Question Explanation, Transfer Practice | Homework, Synchronized Reinforcement |

### <a id="daily-practice"></a>Daily Practice

Short high-frequency practice such as arithmetic, dictation, recitation, vocabulary, and quick reinforcement.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [初中地理快速巩固 Skill](skills/daily-practice/junior-geography-quick-practice/SKILL.md)<br><code>junior-geography-quick-practice</code> | Enhanced | Needs user context | Junior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中化学快速巩固 Skill](skills/daily-practice/junior-chemistry-quick-practice/SKILL.md)<br><code>junior-chemistry-quick-practice</code> | Enhanced | Needs user context | Junior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中历史快速巩固 Skill](skills/daily-practice/junior-history-quick-practice/SKILL.md)<br><code>junior-history-quick-practice</code> | Enhanced | Needs user context | Junior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中生物快速巩固 Skill](skills/daily-practice/junior-biology-quick-practice/SKILL.md)<br><code>junior-biology-quick-practice</code> | Enhanced | Needs user context | Junior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中数学快速巩固 Skill](skills/daily-practice/junior-math-quick-practice/SKILL.md)<br><code>junior-math-quick-practice</code> | Enhanced | Needs user context | Junior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中数学每日练 Skill](skills/daily-practice/junior-math-daily-practice/SKILL.md)<br><code>junior-math-daily-practice</code> | Enhanced | Needs user context | Junior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Calculation, Functions, Geometry | Daily Check-in, Targeted Practice |
| [初中物理快速巩固 Skill](skills/daily-practice/junior-physics-quick-practice/SKILL.md)<br><code>junior-physics-quick-practice</code> | Enhanced | Needs user context | Junior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中英语词汇每日练 Skill](skills/daily-practice/junior-english-vocabulary-daily/SKILL.md)<br><code>junior-english-vocabulary-daily</code> | Enhanced | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary | Daily Check-in, High School Entrance Exam Review |
| [初中英语快速巩固 Skill](skills/daily-practice/junior-english-quick-practice/SKILL.md)<br><code>junior-english-quick-practice</code> | Enhanced | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中语文快速巩固 Skill](skills/daily-practice/junior-chinese-quick-practice/SKILL.md)<br><code>junior-chinese-quick-practice</code> | Enhanced | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [初中政治快速巩固 Skill](skills/daily-practice/junior-politics-quick-practice/SKILL.md)<br><code>junior-politics-quick-practice</code> | Enhanced | Needs user context | Junior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中地理快速巩固 Skill](skills/daily-practice/senior-geography-quick-practice/SKILL.md)<br><code>senior-geography-quick-practice</code> | Enhanced | Needs user context | Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中化学快速巩固 Skill](skills/daily-practice/senior-chemistry-quick-practice/SKILL.md)<br><code>senior-chemistry-quick-practice</code> | Enhanced | Needs user context | Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中历史快速巩固 Skill](skills/daily-practice/senior-history-quick-practice/SKILL.md)<br><code>senior-history-quick-practice</code> | Enhanced | Needs user context | Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中生物快速巩固 Skill](skills/daily-practice/senior-biology-quick-practice/SKILL.md)<br><code>senior-biology-quick-practice</code> | Enhanced | Needs user context | Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中数学快速巩固 Skill](skills/daily-practice/senior-math-quick-practice/SKILL.md)<br><code>senior-math-quick-practice</code> | Enhanced | Needs user context | Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中物理快速巩固 Skill](skills/daily-practice/senior-physics-quick-practice/SKILL.md)<br><code>senior-physics-quick-practice</code> | Enhanced | Needs user context | Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中英语词汇每日练 Skill](skills/daily-practice/senior-english-vocabulary-daily/SKILL.md)<br><code>senior-english-vocabulary-daily</code> | Enhanced | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary | Daily Check-in, Gaokao Review |
| [高中英语快速巩固 Skill](skills/daily-practice/senior-english-quick-practice/SKILL.md)<br><code>senior-english-quick-practice</code> | Enhanced | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中语文快速巩固 Skill](skills/daily-practice/senior-chinese-quick-practice/SKILL.md)<br><code>senior-chinese-quick-practice</code> | Enhanced | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [高中政治快速巩固 Skill](skills/daily-practice/senior-politics-quick-practice/SKILL.md)<br><code>senior-politics-quick-practice</code> | Enhanced | Needs user context | Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Synchronized Reinforcement, Targeted Practice | Daily Check-in, Synchronized Reinforcement |
| [小学课文古诗背诵 Skill](skills/daily-practice/primary-chinese-recitation-daily/SKILL.md)<br><code>primary-chinese-recitation-daily</code> | Enhanced | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Recitation, Reading Aloud | Recitation and Memory, Daily Check-in |
| [小学口算速练 Skill](skills/daily-practice/primary-math-mental-arithmetic/SKILL.md)<br><code>primary-math-mental-arithmetic</code> | Curated | Needs user context | Primary | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| [小学英语单词每日练 Skill](skills/daily-practice/primary-english-vocabulary-daily/SKILL.md)<br><code>primary-english-vocabulary-daily</code> | Enhanced | Needs user context | Primary | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary, Silent Dictation | Daily Check-in, Dictation Practice |
| [小学语文字词听写 Skill](skills/daily-practice/primary-chinese-dictation-daily/SKILL.md)<br><code>primary-chinese-dictation-daily</code> | Enhanced | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Dictation, Silent Dictation | Dictation Practice, Daily Check-in |
| [小学阅读每日练 Skill](skills/daily-practice/primary-reading-daily/SKILL.md)<br><code>primary-reading-daily</code> | Enhanced | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Reading Practice, Daily Check-in |
| [学前识字每日练 Skill](skills/daily-practice/preschool-literacy-daily/SKILL.md)<br><code>preschool-literacy-daily</code> | Enhanced | Needs user context | Preschool | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Literacy | Daily Early Learning, Daily Check-in |
| [学前数感每日练 Skill](skills/daily-practice/preschool-number-sense-daily/SKILL.md)<br><code>preschool-number-sense-daily</code> | Enhanced | Needs user context | Preschool | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Number Sense | Number Sense Games, Daily Check-in |

### <a id="reading-writing"></a>Reading & Writing

Chinese, English, academic, and workplace reading/writing capabilities.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [初中现代文阅读 Skill](skills/reading-writing/junior-chinese-modern-reading/SKILL.md)<br><code>junior-chinese-modern-reading</code> | Enhanced | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | High School Entrance Exam Review |
| [初中英语写作 Skill](skills/reading-writing/junior-english-writing/SKILL.md)<br><code>junior-english-writing</code> | Enhanced | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | High School Entrance Exam Review |
| [初中作文提升 Skill](skills/reading-writing/junior-chinese-composition/SKILL.md)<br><code>junior-chinese-composition</code> | Enhanced | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Writing Improvement |
| [高中英语写作 Skill](skills/reading-writing/senior-english-writing/SKILL.md)<br><code>senior-english-writing</code> | Enhanced | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Gaokao Review |
| [高中语文阅读 Skill](skills/reading-writing/senior-chinese-reading/SKILL.md)<br><code>senior-chinese-reading</code> | Enhanced | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Gaokao Review |
| [高中作文提升 Skill](skills/reading-writing/senior-chinese-essay/SKILL.md)<br><code>senior-chinese-essay</code> | Enhanced | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Writing Improvement |
| [小学英语阅读 Skill](skills/reading-writing/primary-english-reading/SKILL.md)<br><code>primary-english-reading</code> | Enhanced | Needs user context | Primary | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Reading Practice |
| [小学语文阅读理解 Skill](skills/reading-writing/primary-chinese-reading/SKILL.md)<br><code>primary-chinese-reading</code> | Enhanced | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension | Reading Practice |
| [小学作文提升 Skill](skills/reading-writing/primary-chinese-writing/SKILL.md)<br><code>primary-chinese-writing</code> | Enhanced | Needs user context | Primary | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing, Expression | Writing Improvement |
| [学术写作 Skill](skills/reading-writing/college-academic-writing/SKILL.md)<br><code>college-academic-writing</code> | Enhanced | Needs user context | College | General Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing | Paper Writing Practice |

### <a id="exam-prep"></a>Exam Prep

Final exams, Zhongkao, Gaokao, postgraduate exams, CET, certification, and civil-service prep.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [初中地理考试复习 Skill](skills/exam-prep/junior-geography-exam-review/SKILL.md)<br><code>junior-geography-exam-review</code> | Enhanced | Needs user context | Junior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中化学考试复习 Skill](skills/exam-prep/junior-chemistry-exam-review/SKILL.md)<br><code>junior-chemistry-exam-review</code> | Enhanced | Needs user context | Junior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中历史考试复习 Skill](skills/exam-prep/junior-history-exam-review/SKILL.md)<br><code>junior-history-exam-review</code> | Enhanced | Needs user context | Junior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中生物考试复习 Skill](skills/exam-prep/junior-biology-exam-review/SKILL.md)<br><code>junior-biology-exam-review</code> | Enhanced | Needs user context | Junior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中数学考试复习 Skill](skills/exam-prep/junior-math-exam-review/SKILL.md)<br><code>junior-math-exam-review</code> | Enhanced | Needs user context | Junior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中物理考试复习 Skill](skills/exam-prep/junior-physics-exam-review/SKILL.md)<br><code>junior-physics-exam-review</code> | Enhanced | Needs user context | Junior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中英语考试复习 Skill](skills/exam-prep/junior-english-exam-review/SKILL.md)<br><code>junior-english-exam-review</code> | Enhanced | Needs user context | Junior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中语文考试复习 Skill](skills/exam-prep/junior-chinese-exam-review/SKILL.md)<br><code>junior-chinese-exam-review</code> | Enhanced | Needs user context | Junior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [初中政治考试复习 Skill](skills/exam-prep/junior-politics-exam-review/SKILL.md)<br><code>junior-politics-exam-review</code> | Enhanced | Needs user context | Junior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | High School Entrance Exam Review, Pre-Exam Sprint |
| [大学英语六级备考 Skill](skills/exam-prep/college-cet6-sprint/SKILL.md)<br><code>college-cet6-sprint</code> | Enhanced | Needs user context | College | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| [大学英语四级备考 Skill](skills/exam-prep/college-cet4-sprint/SKILL.md)<br><code>college-cet4-sprint</code> | Enhanced | Needs user context | College | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint |
| [高考冲刺 Skill](skills/exam-prep/senior-gaokao-sprint/SKILL.md)<br><code>senior-gaokao-sprint</code> | Enhanced | Needs user context | Senior High | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Sprint | Gaokao Review, Pre-Exam Sprint |
| [高中地理考试复习 Skill](skills/exam-prep/senior-geography-exam-review/SKILL.md)<br><code>senior-geography-exam-review</code> | Enhanced | Needs user context | Senior High | Geography | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中化学考试复习 Skill](skills/exam-prep/senior-chemistry-exam-review/SKILL.md)<br><code>senior-chemistry-exam-review</code> | Enhanced | Needs user context | Senior High | Chemistry | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中历史考试复习 Skill](skills/exam-prep/senior-history-exam-review/SKILL.md)<br><code>senior-history-exam-review</code> | Enhanced | Needs user context | Senior High | History | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中生物考试复习 Skill](skills/exam-prep/senior-biology-exam-review/SKILL.md)<br><code>senior-biology-exam-review</code> | Enhanced | Needs user context | Senior High | Biology | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中数学考试复习 Skill](skills/exam-prep/senior-math-exam-review/SKILL.md)<br><code>senior-math-exam-review</code> | Enhanced | Needs user context | Senior High | Math | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中物理考试复习 Skill](skills/exam-prep/senior-physics-exam-review/SKILL.md)<br><code>senior-physics-exam-review</code> | Enhanced | Needs user context | Senior High | Physics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中英语考试复习 Skill](skills/exam-prep/senior-english-exam-review/SKILL.md)<br><code>senior-english-exam-review</code> | Enhanced | Needs user context | Senior High | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中语文考试复习 Skill](skills/exam-prep/senior-chinese-exam-review/SKILL.md)<br><code>senior-chinese-exam-review</code> | Enhanced | Needs user context | Senior High | Chinese | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [高中政治考试复习 Skill](skills/exam-prep/senior-politics-exam-review/SKILL.md)<br><code>senior-politics-exam-review</code> | Enhanced | Needs user context | Senior High | Politics | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review, Gap Diagnosis | Gaokao Review, Pre-Exam Sprint |
| [公务员申论 Skill](skills/exam-prep/civil-service-essay/SKILL.md)<br><code>civil-service-essay</code> | Enhanced | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Source Reading, Writing | Certification, Writing Improvement |
| [公务员行测 Skill](skills/exam-prep/civil-service-aptitude/SKILL.md)<br><code>civil-service-aptitude</code> | Enhanced | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Logic, Data Analysis | Certification, Targeted Practice |
| [教师资格证备考 Skill](skills/exam-prep/teacher-certification-sprint/SKILL.md)<br><code>teacher-certification-sprint</code> | Enhanced | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Sprint | Certification |
| [考研英语备考 Skill](skills/exam-prep/postgraduate-english-sprint/SKILL.md)<br><code>postgraduate-english-sprint</code> | Enhanced | Needs user context | College, Adult | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Reading Comprehension, Translation, Writing | Postgraduate Exam Review |
| [小学期末复习 Skill](skills/exam-prep/primary-final-review/SKILL.md)<br><code>primary-final-review</code> | Enhanced | Needs user context | Primary | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Review | Midterm and Final Review |
| [中考冲刺 Skill](skills/exam-prep/junior-zhongkao-sprint/SKILL.md)<br><code>junior-zhongkao-sprint</code> | Enhanced | Needs user context | Junior High | General | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Exam Sprint | High School Entrance Exam Review, Pre-Exam Sprint |

### <a id="teacher-tools"></a>Teacher Tools

Teacher workflows such as lesson planning, homework generation, class analysis, and parent communication.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [班级学情分析 Lite Skill](skills/teacher-tools/teacher-class-analysis-lite/SKILL.md)<br><code>teacher-class-analysis-lite</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Learning Analysis | Learning Analysis |
| [地理备课 Skill](skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md)<br><code>teacher-geography-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [地理单元复习 Skill](skills/teacher-tools/teacher-geography-unit-review/SKILL.md)<br><code>teacher-geography-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [地理作业生成 Skill](skills/teacher-tools/teacher-geography-homework-generation/SKILL.md)<br><code>teacher-geography-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [化学备课 Skill](skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md)<br><code>teacher-chemistry-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [化学单元复习 Skill](skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md)<br><code>teacher-chemistry-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [化学作业生成 Skill](skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md)<br><code>teacher-chemistry-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [家长反馈报告 Lite Skill](skills/teacher-tools/teacher-parent-report-lite/SKILL.md)<br><code>teacher-parent-report-lite</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Report Generation | Parent Communication |
| [老师备课 Skill](skills/teacher-tools/teacher-lesson-planning/SKILL.md)<br><code>teacher-lesson-planning</code> | Curated | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design, Learning Analysis | Lesson Preparation |
| [历史备课 Skill](skills/teacher-tools/teacher-history-lesson-planning/SKILL.md)<br><code>teacher-history-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [历史单元复习 Skill](skills/teacher-tools/teacher-history-unit-review/SKILL.md)<br><code>teacher-history-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [历史作业生成 Skill](skills/teacher-tools/teacher-history-homework-generation/SKILL.md)<br><code>teacher-history-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [生物备课 Skill](skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md)<br><code>teacher-biology-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [生物单元复习 Skill](skills/teacher-tools/teacher-biology-unit-review/SKILL.md)<br><code>teacher-biology-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [生物作业生成 Skill](skills/teacher-tools/teacher-biology-homework-generation/SKILL.md)<br><code>teacher-biology-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [数学备课 Skill](skills/teacher-tools/teacher-math-lesson-planning/SKILL.md)<br><code>teacher-math-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [数学单元复习 Skill](skills/teacher-tools/teacher-math-unit-review/SKILL.md)<br><code>teacher-math-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [数学作业生成 Skill](skills/teacher-tools/teacher-math-homework-generation/SKILL.md)<br><code>teacher-math-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [物理备课 Skill](skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md)<br><code>teacher-physics-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [物理单元复习 Skill](skills/teacher-tools/teacher-physics-unit-review/SKILL.md)<br><code>teacher-physics-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [物理作业生成 Skill](skills/teacher-tools/teacher-physics-homework-generation/SKILL.md)<br><code>teacher-physics-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [英语备课 Skill](skills/teacher-tools/teacher-english-lesson-planning/SKILL.md)<br><code>teacher-english-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [英语单元复习 Skill](skills/teacher-tools/teacher-english-unit-review/SKILL.md)<br><code>teacher-english-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [英语作业生成 Skill](skills/teacher-tools/teacher-english-homework-generation/SKILL.md)<br><code>teacher-english-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [语文备课 Skill](skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md)<br><code>teacher-chinese-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [语文单元复习 Skill](skills/teacher-tools/teacher-chinese-unit-review/SKILL.md)<br><code>teacher-chinese-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [语文作业生成 Skill](skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md)<br><code>teacher-chinese-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [政治备课 Skill](skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md)<br><code>teacher-politics-lesson-planning</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Instructional Design | Lesson Preparation |
| [政治单元复习 Skill](skills/teacher-tools/teacher-politics-unit-review/SKILL.md)<br><code>teacher-politics-unit-review</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Review Planning | Unit Review |
| [政治作业生成 Skill](skills/teacher-tools/teacher-politics-homework-generation/SKILL.md)<br><code>teacher-politics-homework-generation</code> | Enhanced | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation | Class Homework |
| [作业生成 Skill](skills/teacher-tools/teacher-homework-generation/SKILL.md)<br><code>teacher-homework-generation</code> | Curated | Needs user context | Primary, Junior High, Senior High | Teaching Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Homework Generation, Tiered Practice | Class Homework |

### <a id="family-education"></a>Family Education

Parent companionship, parent-child reading, homework routines, and family communication.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [家庭作业习惯 Skill](skills/family-education/family-homework-routine/SKILL.md)<br><code>family-homework-routine</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Homework Companion |
| [家校沟通准备 Skill](skills/family-education/family-school-communication/SKILL.md)<br><code>family-school-communication</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Parent Communication |
| [家长陪学 Skill](skills/family-education/agent-parent-companion/SKILL.md)<br><code>agent-parent-companion</code> | Curated | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support, Goal Management | Parent Study Support |
| [假期家庭学习 Skill](skills/family-education/family-holiday-learning/SKILL.md)<br><code>family-holiday-learning</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Holiday Improvement |
| [屏幕时间管理 Skill](skills/family-education/family-screen-time-balance/SKILL.md)<br><code>family-screen-time-balance</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Habit Building |
| [亲子阅读陪伴 Skill](skills/family-education/family-reading-companion/SKILL.md)<br><code>family-reading-companion</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Parent-Child Reading |
| [学习情绪支持 Skill](skills/family-education/family-emotion-support/SKILL.md)<br><code>family-emotion-support</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | Parent-Child Communication |
| [幼小衔接家庭准备 Skill](skills/family-education/family-school-readiness/SKILL.md)<br><code>family-school-readiness</code> | Enhanced | Needs user context | Preschool, Primary, Junior High | Family Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Parent Study Support | School Readiness |

### <a id="language-learning"></a>Language Learning

Adult English, study-abroad exams, speaking, listening, and long-term language improvement.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [成人语言学习 Skill](skills/language-learning/adult-language-learning/SKILL.md)<br><code>adult-language-learning</code> | Enhanced | Needs user context | Adult | Language Learning | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Speaking, Listening, Vocabulary | Daily Check-in |
| [托福备考 Skill](skills/language-learning/toefl-prep/SKILL.md)<br><code>toefl-prep</code> | Enhanced | Needs user context | College, Adult | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |
| [雅思备考 Skill](skills/language-learning/ielts-prep/SKILL.md)<br><code>ielts-prep</code> | Enhanced | Needs user context | College, Adult | English | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams |

### <a id="career-learning"></a>Career Learning

College, adult learning, career skills, and certification scenarios.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [数据分析 Skill](skills/career-learning/college-data-analysis/SKILL.md)<br><code>college-data-analysis</code> | Enhanced | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Data Analysis | Career Skills |
| [数据结构 Skill](skills/career-learning/college-cs-data-structure/SKILL.md)<br><code>college-cs-data-structure</code> | Enhanced | Needs user context | College | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Algorithms, Programming | Course Learning |
| [算法面试 Skill](skills/career-learning/college-cs-algorithm-interview/SKILL.md)<br><code>college-cs-algorithm-interview</code> | Enhanced | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Algorithms | Interview Preparation |
| [职场写作 Skill](skills/career-learning/adult-workplace-writing/SKILL.md)<br><code>adult-workplace-writing</code> | Enhanced | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Writing, Expression | Career Skills |
| [职业证书备考 Skill](skills/career-learning/adult-vocational-certificate/SKILL.md)<br><code>adult-vocational-certificate</code> | Enhanced | Needs user context | Adult | Career Education | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Knowledge Memorization, Exam Sprint | Certification |
| [AI 基础 Skill](skills/career-learning/college-ai-foundation/SKILL.md)<br><code>college-ai-foundation</code> | Enhanced | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | AI Foundations | Interest Learning |
| [Python 学习 Skill](skills/career-learning/college-cs-python/SKILL.md)<br><code>college-cs-python</code> | Enhanced | Needs user context | College, Adult | Computer Science | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Programming | Career Skills |

### <a id="examples"></a>Design Examples

Design references that usually require commercial data, organization reports, or tool adapters; not recommended as default installable entries.

| Skill | Maturity | Standalone | Stage | Subject / Area | Textbook | Parameters | Ability | Scenario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [机构课程包 Skill](skills/examples/institution-course-package/SKILL.md)<br><code>institution-course-package</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Institution Course |
| [老师使用分析 Skill](skills/examples/school-teacher-usage/SKILL.md)<br><code>school-teacher-usage</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | School Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Data Analysis |
| [老师效率分析 Skill](skills/examples/institution-teacher-efficiency/SKILL.md)<br><code>institution-teacher-efficiency</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Data Analysis |
| [年级学情洞察 Skill](skills/examples/school-grade-insight/SKILL.md)<br><code>school-grade-insight</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | School Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | School Assessment |
| [校本资源规划 Skill](skills/examples/school-resource-planning/SKILL.md)<br><code>school-resource-planning</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | School Management | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Operations Configuration |
| [校区经营看板 Skill](skills/examples/institution-campus-dashboard/SKILL.md)<br><code>institution-campus-dashboard</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Business Analysis |
| [续费风险分析 Skill](skills/examples/institution-renewal-insight/SKILL.md)<br><code>institution-renewal-insight</code> | Enhanced | Requires tools | Primary, Junior High, Senior High, Adult | Institution Operations | - | grade, semester, unit, lesson, knowledgePointCodes, scenario, difficulty | Operations Analysis | Renewal Report |

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

- The recommended installation method is Hermes `skills.external_dirs`.
- Every Skill is a standalone readable `SKILL.md` file that you can inspect, adapt, or connect to your own Agent.
- Workflow names inside some Skills are suggested interfaces; actual execution depends on your Hermes tools and runtime environment.

## Roadmap

- Add an installer script that can update Hermes config automatically.
- Add common Hermes Agent usage examples.
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
