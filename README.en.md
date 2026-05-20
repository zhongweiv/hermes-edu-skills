# Hermes Edu Skills

Open education Skill Pack for Hermes Agent Runtime.

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-135-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[中文文档](README.md)

Hermes Edu Skills is a set of Hermes-compatible education skills. It currently includes 135 Hermes-compatible Skills covering student learning, teacher workflows, family education, school management, institution operations, career education, and Agent system workflows.

If you already use Hermes Agent locally, add the `skills/` directory from this repository to your Hermes config so the Agent can load these education skills directly. You can also use the `SKILL.md` files as reference templates for education agents, AI learning assistants, teacher tools, or curriculum prototypes.

If this project helps you, please consider giving it a Star. Stars help more developers building education agents, AI learning assistants, and teacher tools discover the project.

## Navigation

- [Quick Start](#quick-start)
- [Skill Category Overview](#skill-category-overview)
- [All Skills](#all-skills)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## What You Can Build

- Add a Chinese education Skill library to a local Hermes Agent.
- Prototype AI learning assistants, AI teachers, AI teaching assistants, photo Q&A, and mistake-review agents.
- Learn and reuse education Skill structure, invocation signals, use cases, and workflow naming patterns.
- Design your own Skills for schools, teachers, parents, education institutions, and adult learning scenarios.
- Fork the repository and extend Atomic Skills by textbook version, grade, and unit.

## Initiator And Maintainer

This project is initiated and maintained by [Shineway](https://www.shineway.tech/).

We are open-sourcing reusable education Agent Skill design so developers, teachers, researchers, schools, and education teams can explore China-focused education-agent capabilities together. This repository contains public Skill documents, indexes, and validation tools only; it does not include user data or backend service implementations.

## Project Highlights

- 135 clickable `SKILL.md` files.
- 21 categories covering K12, college, adult learning, teachers, and institution scenarios.
- Each Skill includes Hermes frontmatter, use cases, invocation signals, and workflow names.
- Includes `catalog.json` and `.well-known/skills/index.json` for tool discovery and secondary integration.
- Includes a validation script to keep directories, indexes, and Skill files aligned.
- MIT licensed for personal learning, secondary development, and education Agent prototyping.

## Who Is This For

- Individual users already using Hermes Agent Runtime.
- Developers building education agents, AI learning assistants, AI teachers, or AI teaching assistants.
- Product managers, teachers, and curriculum researchers studying Skill / Agent workflow design.
- Teams quickly prototyping K12, adult learning, teacher tools, or family education demos.
- Schools, institutions, and startup teams looking for China-focused education AI open-source projects.

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

| Category | Main Areas | Count |
| --- | --- | ---: |
| [Math](#math) | Math | 30 |
| [Chinese](#chinese) | Chinese | 26 |
| [English](#english) | English | 23 |
| [Learning Skills](#learning) | Learning Skills | 5 |
| [General Scenarios](#general) | General | 5 |
| [Teaching](#teaching) | Teaching Management | 5 |
| [School Management](#school) | School Management | 3 |
| [Institution Operations](#institution) | Institution Operations | 5 |
| [Family Education](#family) | Family Education | 1 |
| [Agent System](#system) | Content Safety, Learning Skills, Cost Management | 6 |
| [Atomic Skills](#atomic) | Math | 3 |
| [Physics](#physics) | Physics | 2 |
| [Chemistry](#chemistry) | Chemistry | 2 |
| [Biology](#biology) | Biology | 2 |
| [History](#history) | History | 2 |
| [Geography](#geography) | Geography | 2 |
| [Politics](#politics) | Politics | 2 |
| [Computer Science](#computer-science) | Computer Science | 5 |
| [General Education](#general-education) | General Education | 1 |
| [Career Education](#career) | Career Education | 4 |
| [Language Learning](#language) | Language Learning | 1 |

## All Skills

The table below lists all 135 Skills. Click a Skill name to open the corresponding `SKILL.md`.

### <a id="math"></a>Math

Preschool, primary, junior, senior, and college math, including arithmetic, number sense, geometry, functions, statistics, probability, and calculus.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [奥数拓展 Skill](skills/math/primary-math-olympiad/SKILL.md)<br><code>primary-math-olympiad</code> | Primary | Math | Logic, Word Problems | Holiday Improvement, Advanced Training |
| [乘法口诀 Skill](skills/math/primary-math-multiplication-table/SKILL.md)<br><code>primary-math-multiplication-table</code> | Primary | Math | Calculation, Knowledge Memorization | Daily Check-in, Dictation Practice |
| [初中代数 Skill](skills/math/junior-math-algebra/SKILL.md)<br><code>junior-math-algebra</code> | Junior High | Math | Calculation, Logic | Synchronized Reinforcement, Targeted Practice |
| [初中函数 Skill](skills/math/junior-math-function/SKILL.md)<br><code>junior-math-function</code> | Junior High | Math | Functions, Logic | Targeted Practice, High School Entrance Exam Review |
| [初中几何 Skill](skills/math/junior-math-geometry/SKILL.md)<br><code>junior-math-geometry</code> | Junior High | Math | Spatial Reasoning, Proof | Synchronized Reinforcement, High School Entrance Exam Review |
| [初中统计概率 Skill](skills/math/junior-math-statistics-probability/SKILL.md)<br><code>junior-math-statistics-probability</code> | Junior High | Math | Statistics, Probability | Synchronized Reinforcement, High School Entrance Exam Review |
| [单位换算 Skill](skills/math/primary-math-unit-conversion/SKILL.md)<br><code>primary-math-unit-conversion</code> | Primary | Math | Calculation | Homework, Targeted Practice |
| [导数 Skill](skills/math/senior-math-derivative/SKILL.md)<br><code>senior-math-derivative</code> | Senior High | Math | Logic, Calculation | Targeted Practice, Gaokao Review |
| [方程启蒙 Skill](skills/math/primary-math-equation-intro/SKILL.md)<br><code>primary-math-equation-intro</code> | Primary | Math | Logic, Modeling | Synchronized Reinforcement, Targeted Practice |
| [分数小数 Skill](skills/math/primary-math-fraction-decimal/SKILL.md)<br><code>primary-math-fraction-decimal</code> | Primary | Math | Calculation, Number Sense | Synchronized Reinforcement, Unit Review |
| [概率论 Skill](skills/math/college-math-probability/SKILL.md)<br><code>college-math-probability</code> | College | Math | Statistics, Probability | Synchronized Reinforcement, Exam Review |
| [概率统计 Skill](skills/math/senior-math-probability-statistics/SKILL.md)<br><code>senior-math-probability-statistics</code> | Senior High | Math | Statistics, Probability | Targeted Practice, Gaokao Review |
| [高等数学 Skill](skills/math/college-math-calculus/SKILL.md)<br><code>college-math-calculus</code> | College | Math | Calculation, Logic | Synchronized Reinforcement, Exam Review |
| [高中函数 Skill](skills/math/senior-math-function/SKILL.md)<br><code>senior-math-function</code> | Senior High | Math | Functions | Synchronized Reinforcement, Gaokao Review |
| [几何初步 Skill](skills/math/primary-math-geometry-basic/SKILL.md)<br><code>primary-math-geometry-basic</code> | Primary | Math | Spatial Reasoning | Synchronized Reinforcement, Targeted Practice |
| [计算能力 Skill](skills/math/primary-math-calculation/SKILL.md)<br><code>primary-math-calculation</code> | Primary | Math | Calculation | Homework, Targeted Practice |
| [解析几何 Skill](skills/math/senior-math-analytic-geometry/SKILL.md)<br><code>senior-math-analytic-geometry</code> | Senior High | Math | Calculation, Modeling | Targeted Practice, Gaokao Review |
| [立体几何 Skill](skills/math/senior-math-solid-geometry/SKILL.md)<br><code>senior-math-solid-geometry</code> | Senior High | Math | Spatial Reasoning | Targeted Practice, Gaokao Review |
| [逻辑思维 Skill](skills/math/preschool-logic-thinking/SKILL.md)<br><code>preschool-logic-thinking</code> | Preschool | Math | Logic, Patterns | Targeted Practice, Parent-Child Learning |
| [时间与人民币 Skill](skills/math/primary-math-time-money/SKILL.md)<br><code>primary-math-time-money</code> | Primary | Math | Everyday Math | Synchronized Reinforcement, Everyday Application |
| [数感 Skill](skills/math/primary-math-number-sense/SKILL.md)<br><code>primary-math-number-sense</code> | Primary | Math | Number Sense | Daily Check-in, Synchronized Reinforcement |
| [数感启蒙 Skill](skills/math/preschool-number-sense/SKILL.md)<br><code>preschool-number-sense</code> | Preschool | Math | Number Sense, Quantity Sense | Number Sense Games, Daily Early Learning |
| [数列 Skill](skills/math/senior-math-sequence/SKILL.md)<br><code>senior-math-sequence</code> | Senior High | Math | Logic, Calculation | Targeted Practice, Gaokao Review |
| [数学错题订正 Skill](skills/math/primary-math-mistake-correction/SKILL.md)<br><code>primary-math-mistake-correction</code> | Primary | Math | Mistake Correction | Mistake Correction, Unit Review |
| [数学单元复习 Skill](skills/math/primary-math-unit-review/SKILL.md)<br><code>primary-math-unit-review</code> | Primary | Math | Review Planning | Unit Review, Midterm and Final Review |
| [图形空间 Skill](skills/math/preschool-shape-space/SKILL.md)<br><code>preschool-shape-space</code> | Preschool | Math | Spatial Reasoning, Shape Recognition | Shape Games, School Readiness |
| [线性代数 Skill](skills/math/college-math-linear-algebra/SKILL.md)<br><code>college-math-linear-algebra</code> | College | Math | Calculation, Logic | Synchronized Reinforcement, Exam Review |
| [小学口算速练 Skill](skills/math/primary-math-mental-arithmetic/SKILL.md)<br><code>primary-math-mental-arithmetic</code> | Primary | Math | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| [小学数学考试复习 Skill](skills/math/primary-math-exam-review/SKILL.md)<br><code>primary-math-exam-review</code> | Primary | Math | Exam Sprint | Midterm and Final Review, Pre-Exam Sprint |
| [应用题 Skill](skills/math/primary-math-application-problems/SKILL.md)<br><code>primary-math-application-problems</code> | Primary | Math | Word Problems, Modeling | Homework, Targeted Practice |

### <a id="chinese"></a>Chinese

Pinyin, literacy, reading, composition, poetry, and classical Chinese.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [必会字 Skill](skills/chinese/primary-chinese-required-characters/SKILL.md)<br><code>primary-chinese-required-characters</code> | Primary | Chinese | Silent Dictation, Knowledge Memorization | Unit Review, Midterm and Final Review |
| [初中古诗文 Skill](skills/chinese/junior-chinese-poetry/SKILL.md)<br><code>junior-chinese-poetry</code> | Junior High | Chinese | Recitation, Appreciation, Silent Dictation | Recitation and Memory, High School Entrance Exam Review |
| [初中文言文 Skill](skills/chinese/junior-chinese-classical-text/SKILL.md)<br><code>junior-chinese-classical-text</code> | Junior High | Chinese | Classical Chinese, Translation | Synchronized Reinforcement, High School Entrance Exam Review |
| [初中现代文阅读 Skill](skills/chinese/junior-chinese-modern-reading/SKILL.md)<br><code>junior-chinese-modern-reading</code> | Junior High | Chinese | Reading Comprehension | Reading Practice, High School Entrance Exam Review |
| [初中作文 Skill](skills/chinese/junior-chinese-composition/SKILL.md)<br><code>junior-chinese-composition</code> | Junior High | Chinese | Writing | Writing Improvement, High School Entrance Exam Review |
| [词语积累 Skill](skills/chinese/primary-chinese-word-accumulation/SKILL.md)<br><code>primary-chinese-word-accumulation</code> | Primary | Chinese | Word Accumulation | Daily Check-in, Unit Review |
| [高中古诗词鉴赏 Skill](skills/chinese/senior-chinese-poetry-analysis/SKILL.md)<br><code>senior-chinese-poetry-analysis</code> | Senior High | Chinese | Appreciation, Expression | Reading Practice, Gaokao Review |
| [高中文言文 Skill](skills/chinese/senior-chinese-classical-text/SKILL.md)<br><code>senior-chinese-classical-text</code> | Senior High | Chinese | Classical Chinese, Translation | Synchronized Reinforcement, Gaokao Review |
| [高中现代文阅读 Skill](skills/chinese/senior-chinese-modern-reading/SKILL.md)<br><code>senior-chinese-modern-reading</code> | Senior High | Chinese | Reading Comprehension | Reading Practice, Gaokao Review |
| [高中作文 Skill](skills/chinese/senior-chinese-essay/SKILL.md)<br><code>senior-chinese-essay</code> | Senior High | Chinese | Writing | Writing Improvement, Gaokao Review |
| [古诗词 Skill](skills/chinese/primary-chinese-ancient-poetry/SKILL.md)<br><code>primary-chinese-ancient-poetry</code> | Primary | Chinese | Recitation, Silent Dictation, Understanding | Recitation and Memory, Pre-Exam Sprint |
| [绘本阅读 Skill](skills/chinese/preschool-picture-book-reading/SKILL.md)<br><code>preschool-picture-book-reading</code> | Preschool | Chinese | Listening and Reading, Expression, Understanding | Parent-Child Reading, Reading Practice |
| [句子训练 Skill](skills/chinese/primary-chinese-sentence-training/SKILL.md)<br><code>primary-chinese-sentence-training</code> | Primary | Chinese | Writing, Expression | Writing Improvement, Targeted Practice |
| [看图写话 Skill](skills/chinese/primary-chinese-picture-writing/SKILL.md)<br><code>primary-chinese-picture-writing</code> | Primary | Chinese | Writing, Expression | Writing Improvement, Targeted Practice |
| [课文背诵 Skill](skills/chinese/primary-chinese-recitation/SKILL.md)<br><code>primary-chinese-recitation</code> | Primary | Chinese | Recitation, Reading Aloud | Recitation and Memory, Daily Check-in |
| [课文预习 Skill](skills/chinese/primary-chinese-text-preview/SKILL.md)<br><code>primary-chinese-text-preview</code> | Primary | Chinese | Text Understanding, Preview | Pre-Class Preview, Classroom Sync |
| [拼音 Skill](skills/chinese/primary-chinese-pinyin/SKILL.md)<br><code>primary-chinese-pinyin</code> | Primary | Chinese | Phonics | Pre-Class Preview, Synchronized Reinforcement |
| [拼音启蒙 Skill](skills/chinese/preschool-pinyin-foundation/SKILL.md)<br><code>preschool-pinyin-foundation</code> | Preschool | Chinese | Phonics, School Readiness | School Readiness, Daily Check-in |
| [生字听写 Skill](skills/chinese/primary-chinese-dictation/SKILL.md)<br><code>primary-chinese-dictation</code> | Primary | Chinese | Dictation, Silent Dictation | Dictation Practice, Homework |
| [识字 Skill](skills/chinese/primary-chinese-character-recognition/SKILL.md)<br><code>primary-chinese-character-recognition</code> | Primary | Chinese | Literacy | Daily Check-in, Homework |
| [识字启蒙 Skill](skills/chinese/preschool-literacy-recognition/SKILL.md)<br><code>preschool-literacy-recognition</code> | Preschool | Chinese | Literacy, Image-Text Matching | Daily Early Learning, Parent-Child Learning |
| [小学语文考试复习 Skill](skills/chinese/primary-chinese-exam-review/SKILL.md)<br><code>primary-chinese-exam-review</code> | Primary | Chinese | Exam Sprint | Midterm and Final Review, Pre-Exam Sprint |
| [小学作文 Skill](skills/chinese/primary-chinese-composition/SKILL.md)<br><code>primary-chinese-composition</code> | Primary | Chinese | Writing | Writing Improvement, Pre-Exam Sprint |
| [语文单元复习 Skill](skills/chinese/primary-chinese-unit-review/SKILL.md)<br><code>primary-chinese-unit-review</code> | Primary | Chinese | Review Planning | Unit Review, Midterm and Final Review |
| [语言表达 Skill](skills/chinese/preschool-language-expression/SKILL.md)<br><code>preschool-language-expression</code> | Preschool | Chinese | Expression, Retelling | Expression Practice, Parent-Child Interaction |
| [阅读理解 Skill](skills/chinese/primary-chinese-reading-comprehension/SKILL.md)<br><code>primary-chinese-reading-comprehension</code> | Primary | Chinese | Reading Comprehension | Reading Practice, Targeted Practice |

### <a id="english"></a>English

Phonics, vocabulary, listening, speaking, reading, writing, CET, IELTS, TOEFL, and postgraduate English.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中英语词汇 Skill](skills/english/junior-english-vocabulary/SKILL.md)<br><code>junior-english-vocabulary</code> | Junior High | English | Knowledge Memorization | Daily Check-in, High School Entrance Exam Review |
| [初中英语写作 Skill](skills/english/junior-english-writing/SKILL.md)<br><code>junior-english-writing</code> | Junior High | English | Writing | Writing Improvement, High School Entrance Exam Review |
| [初中英语语法 Skill](skills/english/junior-english-grammar/SKILL.md)<br><code>junior-english-grammar</code> | Junior High | English | Grammar | Targeted Practice, High School Entrance Exam Review |
| [初中英语阅读 Skill](skills/english/junior-english-reading/SKILL.md)<br><code>junior-english-reading</code> | Junior High | English | Reading Comprehension | Reading Practice, High School Entrance Exam Review |
| [大学英语六级 Skill](skills/english/college-english-cet6/SKILL.md)<br><code>college-english-cet6</code> | College | English | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint, Targeted Practice |
| [大学英语四级 Skill](skills/english/college-english-cet4/SKILL.md)<br><code>college-english-cet4</code> | College | English | Vocabulary, Listening, Reading Comprehension, Writing | Pre-Exam Sprint, Targeted Practice |
| [单词 Skill](skills/english/primary-english-vocabulary/SKILL.md)<br><code>primary-english-vocabulary</code> | Primary | English | Knowledge Memorization, Silent Dictation | Daily Check-in, Dictation Practice |
| [高中英语词汇 Skill](skills/english/senior-english-vocabulary/SKILL.md)<br><code>senior-english-vocabulary</code> | Senior High | English | Knowledge Memorization | Daily Check-in, Gaokao Review |
| [高中英语写作 Skill](skills/english/senior-english-writing/SKILL.md)<br><code>senior-english-writing</code> | Senior High | English | Writing | Writing Improvement, Gaokao Review |
| [高中英语语法 Skill](skills/english/senior-english-grammar/SKILL.md)<br><code>senior-english-grammar</code> | Senior High | English | Grammar | Targeted Practice, Gaokao Review |
| [高中英语阅读 Skill](skills/english/senior-english-reading/SKILL.md)<br><code>senior-english-reading</code> | Senior High | English | Reading Comprehension | Reading Practice, Gaokao Review |
| [句型 Skill](skills/english/primary-english-sentence-pattern/SKILL.md)<br><code>primary-english-sentence-pattern</code> | Primary | English | Expression | Synchronized Reinforcement, Homework |
| [考研英语 Skill](skills/english/college-english-postgraduate/SKILL.md)<br><code>college-english-postgraduate</code> | College, Adult | English | Reading Comprehension, Translation, Writing | Postgraduate Exam Review, Pre-Exam Sprint |
| [口语 Skill](skills/english/primary-english-speaking/SKILL.md)<br><code>primary-english-speaking</code> | Primary | English | Speaking | Speaking Practice, Daily Check-in |
| [听力 Skill](skills/english/primary-english-listening/SKILL.md)<br><code>primary-english-listening</code> | Primary | English | Listening | Listening Practice, Exam Review |
| [托福 Skill](skills/english/college-english-toefl/SKILL.md)<br><code>college-english-toefl</code> | College, Adult | English | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams, Targeted Practice |
| [小学英语考试复习 Skill](skills/english/primary-english-exam-review/SKILL.md)<br><code>primary-english-exam-review</code> | Primary | English | Exam Sprint | Midterm and Final Review, Pre-Exam Sprint |
| [雅思 Skill](skills/english/college-english-ielts/SKILL.md)<br><code>college-english-ielts</code> | College, Adult | English | Listening, Speaking, Reading Comprehension, Writing | Study-Abroad Exams, Targeted Practice |
| [英语课文同步 Skill](skills/english/primary-english-textbook-sync/SKILL.md)<br><code>primary-english-textbook-sync</code> | Primary | English | Reading Aloud, Recitation, Silent Dictation | Classroom Sync, Homework |
| [英语阅读 Skill](skills/english/primary-english-reading/SKILL.md)<br><code>primary-english-reading</code> | Primary | English | Reading Comprehension | Reading Practice, Targeted Practice |
| [语法启蒙 Skill](skills/english/primary-english-grammar-intro/SKILL.md)<br><code>primary-english-grammar-intro</code> | Primary | English | Grammar | Targeted Practice, Exam Review |
| [字母 Skill](skills/english/primary-english-letters/SKILL.md)<br><code>primary-english-letters</code> | Primary | English | Phonics, Writing | Pre-Class Preview, Daily Check-in |
| [自然拼读 Skill](skills/english/primary-english-phonics/SKILL.md)<br><code>primary-english-phonics</code> | Primary | English | Phonics | Synchronized Reinforcement, Targeted Practice |

### <a id="learning"></a>Learning Skills

General learning capabilities such as reports, mistake review, question explanation, and attention training.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [错题复习 Skill](skills/learning/agent-mistake-review/SKILL.md)<br><code>agent-mistake-review</code> | Preschool, Primary, Junior High, Senior High | Learning Skills | Mistake Correction, Review Planning | Mistake Correction, Unit Review |
| [控笔与书写准备 Skill](skills/learning/preschool-fine-motor-writing/SKILL.md)<br><code>preschool-fine-motor-writing</code> | Preschool | Learning Skills | Fine Motor Writing, Writing Readiness | School Readiness, Daily Practice |
| [学情报告 Skill](skills/learning/agent-learning-report/SKILL.md)<br><code>agent-learning-report</code> | Primary, Junior High, Senior High | Learning Skills | Learning Report, Study Planning | Learning Report, Parent Study Support |
| [专注力训练 Skill](skills/learning/preschool-attention-training/SKILL.md)<br><code>preschool-attention-training</code> | Preschool | Learning Skills | Attention, Memory | Daily Check-in, Habit Building |
| [AI 讲题 Skill](skills/learning/agent-question-explanation/SKILL.md)<br><code>agent-question-explanation</code> | Primary, Junior High, Senior High, College | Learning Skills | AI Question Explanation | Photo Q&A, Homework |

### <a id="general"></a>General Scenarios

Cross-subject scenarios such as photo Q&A, exam sprint, and school readiness.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [高考冲刺 Skill](skills/general/senior-gaokao-sprint/SKILL.md)<br><code>senior-gaokao-sprint</code> | Senior High | General | Exam Sprint | Pre-Exam Sprint |
| [考前冲刺 Skill](skills/general/agent-exam-sprint/SKILL.md)<br><code>agent-exam-sprint</code> | Primary, Junior High, Senior High, College, Adult | General | Exam Sprint | Pre-Exam Sprint |
| [拍照答疑 Skill](skills/general/agent-photo-question/SKILL.md)<br><code>agent-photo-question</code> | Primary, Junior High, Senior High | General | AI Question Explanation, Image Question Recognition | Photo Q&A |
| [幼小衔接综合 Skill](skills/general/preschool-school-readiness/SKILL.md)<br><code>preschool-school-readiness</code> | Preschool | General | Literacy, Phonics, Number Sense, Habits | School Readiness, Summer Improvement |
| [中考冲刺 Skill](skills/general/junior-exam-sprint/SKILL.md)<br><code>junior-exam-sprint</code> | Junior High | General | Exam Sprint | Pre-Exam Sprint |

### <a id="teaching"></a>Teaching

Teacher workflows such as lesson planning, homework generation, class analysis, mistake clustering, and parent reports.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [班级错题归因 Skill](skills/teaching/teacher-mistake-clustering/SKILL.md)<br><code>teacher-mistake-clustering</code> | Primary, Junior High, Senior High | Teaching Management | Mistake Correction, Learning Analysis | Mistake Correction |
| [班级学情分析 Skill](skills/teaching/teacher-class-analysis/SKILL.md)<br><code>teacher-class-analysis</code> | Primary, Junior High, Senior High | Teaching Management | Learning Analysis | Learning Analysis |
| [家长反馈报告 Skill](skills/teaching/teacher-parent-report/SKILL.md)<br><code>teacher-parent-report</code> | Primary, Junior High, Senior High | Teaching Management | Report Generation | Parent Communication |
| [老师备课 Skill](skills/teaching/teacher-lesson-planning/SKILL.md)<br><code>teacher-lesson-planning</code> | Primary, Junior High, Senior High | Teaching Management | Instructional Design, Learning Analysis | Lesson Preparation |
| [作业生成 Skill](skills/teaching/teacher-homework-generation/SKILL.md)<br><code>teacher-homework-generation</code> | Primary, Junior High, Senior High | Teaching Management | Homework Generation, Tiered Practice | Class Homework |

### <a id="school"></a>School Management

School management, grade insights, resource planning, and teacher usage analysis.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [老师使用分析 Skill](skills/school/school-teacher-usage/SKILL.md)<br><code>school-teacher-usage</code> | Primary, Junior High, Senior High | School Management | Operations Analysis | Data Analysis |
| [年级学情洞察 Skill](skills/school/school-grade-insight/SKILL.md)<br><code>school-grade-insight</code> | Primary, Junior High, Senior High | School Management | Learning Analysis | School Assessment |
| [校本资源规划 Skill](skills/school/school-resource-planning/SKILL.md)<br><code>school-resource-planning</code> | Primary, Junior High, Senior High | School Management | Resource Planning | Operations Configuration |

### <a id="institution"></a>Institution Operations

Education institution operations, campus dashboards, course packages, renewal insights, and organization analysis.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [机构课程包 Skill](skills/institution/institution-course-package/SKILL.md)<br><code>institution-course-package</code> | Preschool, Primary, Junior High, Senior High, Adult | Institution Operations | Course Configuration | Institution Course |
| [老师效率分析 Skill](skills/institution/institution-teacher-efficiency/SKILL.md)<br><code>institution-teacher-efficiency</code> | Preschool, Primary, Junior High, Senior High, Adult | Institution Operations | Operations Analysis | Data Analysis |
| [校区经营看板 Skill](skills/institution/institution-campus-dashboard/SKILL.md)<br><code>institution-campus-dashboard</code> | Preschool, Primary, Junior High, Senior High, Adult | Institution Operations | Operations Analysis | Business Analysis |
| [续费风险分析 Skill](skills/institution/institution-renewal-insight/SKILL.md)<br><code>institution-renewal-insight</code> | Preschool, Primary, Junior High, Senior High, Adult | Institution Operations | Operations Analysis | Renewal Report |
| [组织洞察 Skill](skills/institution/agent-organization-insight/SKILL.md)<br><code>agent-organization-insight</code> | Primary, Junior High, Senior High, Adult | Institution Operations | Operations Analysis | Data Analysis |

### <a id="family"></a>Family Education

Parent companionship, family education, and parent-child communication.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [家长陪学 Skill](skills/family/agent-parent-companion/SKILL.md)<br><code>agent-parent-companion</code> | Preschool, Primary, Junior High | Family Education | Parent Study Support, Goal Management | Parent Study Support |

### <a id="system"></a>Agent System

Agent-side safety, memory, planning, budgeting, and skill recommendation capabilities.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [安全守护 Skill](skills/system/agent-safety-guard/SKILL.md)<br><code>agent-safety-guard</code> | Preschool, Primary, Junior High, Senior High, College, Adult | Content Safety | Content Safety, Minor Protection | Safety Review, Consumption Protection |
| [记忆总结 Skill](skills/system/agent-memory-summary/SKILL.md)<br><code>agent-memory-summary</code> | Preschool, Primary, Junior High, Senior High, College, Adult | Learning Skills | Memory Summary, Preference Memory | Agent Memory |
| [学习计划 Skill](skills/system/agent-study-plan/SKILL.md)<br><code>agent-study-plan</code> | Preschool, Primary, Junior High, Senior High, College, Adult | Learning Skills | Study Planning, Goal Management | Daily Study, Holiday Improvement |
| [Skill 推荐 Skill](skills/system/agent-skill-recommendation/SKILL.md)<br><code>agent-skill-recommendation</code> | Preschool, Primary, Junior High, Senior High, College, Adult | Learning Skills | Installation Recommendation, Path Planning | Skill Marketplace, Study Planning |
| [Token 预算 Skill](skills/system/agent-token-budget/SKILL.md)<br><code>agent-token-budget</code> | Preschool, Primary, Junior High, Senior High, College, Adult | Cost Management | Token Budgeting, Cost Control | Token Cost Estimation, Model Routing |
| [Workflow 恢复 Skill](skills/system/agent-workflow-resume/SKILL.md)<br><code>agent-workflow-resume</code> | Preschool, Primary, Junior High, Senior High, College, Adult | Learning Skills | Workflow Resume, Task Continuation | Continue Learning, Failure Recovery |

### <a id="atomic"></a>Atomic Skills

Fine-grained composable skills for textbook versions, grades, units, daily practice, and more precise agent workflows.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [人教版二年级上册每日口算 Atomic Skill](skills/atomic/primary-math-mental-arithmetic-rj-grade2-volume1-daily/SKILL.md)<br><code>primary-math-mental-arithmetic-rj-grade2-volume1-daily</code> | Primary | Math | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| [人教版一年级上册每日口算 Atomic Skill](skills/atomic/primary-math-mental-arithmetic-rj-grade1-volume1-daily/SKILL.md)<br><code>primary-math-mental-arithmetic-rj-grade1-volume1-daily</code> | Primary | Math | Calculation, Number Sense | Mental Arithmetic Drill, Daily Check-in |
| [人教版一年级上册数学错题单元复习 Atomic Skill](skills/atomic/primary-math-mistake-review-rj-grade1-volume1-unit-review/SKILL.md)<br><code>primary-math-mistake-review-rj-grade1-volume1-unit-review</code> | Primary | Math | Mistake Correction, Review Planning | Mistake Correction, Unit Review |

### <a id="physics"></a>Physics

Junior and senior high school physics learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中物理 Skill](skills/physics/junior-physics-foundation/SKILL.md)<br><code>junior-physics-foundation</code> | Junior High | Physics | Experiment Understanding, Knowledge Memorization | Synchronized Reinforcement, High School Entrance Exam Review |
| [高中物理 Skill](skills/physics/senior-physics/SKILL.md)<br><code>senior-physics</code> | Senior High | Physics | Experiment Understanding, Knowledge Memorization | Synchronized Reinforcement, Gaokao Review |

### <a id="chemistry"></a>Chemistry

Junior and senior high school chemistry learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中化学 Skill](skills/chemistry/junior-chemistry-foundation/SKILL.md)<br><code>junior-chemistry-foundation</code> | Junior High | Chemistry | Experiment Understanding, Knowledge Memorization | Synchronized Reinforcement, High School Entrance Exam Review |
| [高中化学 Skill](skills/chemistry/senior-chemistry/SKILL.md)<br><code>senior-chemistry</code> | Senior High | Chemistry | Experiment Understanding, Knowledge Memorization | Synchronized Reinforcement, Gaokao Review |

### <a id="biology"></a>Biology

Junior and senior high school biology learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中生物 Skill](skills/biology/junior-biology/SKILL.md)<br><code>junior-biology</code> | Junior High | Biology | Knowledge Memorization, Experiment Understanding | Synchronized Reinforcement, Exam Review |
| [高中生物 Skill](skills/biology/senior-biology/SKILL.md)<br><code>senior-biology</code> | Senior High | Biology | Knowledge Memorization, Experiment Understanding | Synchronized Reinforcement, Gaokao Review |

### <a id="history"></a>History

Junior and senior high school history learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中历史 Skill](skills/history/junior-history/SKILL.md)<br><code>junior-history</code> | Junior High | History | Knowledge Memorization | Recitation and Memory, High School Entrance Exam Review |
| [高中历史 Skill](skills/history/senior-history/SKILL.md)<br><code>senior-history</code> | Senior High | History | Knowledge Memorization, Source Analysis | Synchronized Reinforcement, Gaokao Review |

### <a id="geography"></a>Geography

Junior and senior high school geography learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中地理 Skill](skills/geography/junior-geography/SKILL.md)<br><code>junior-geography</code> | Junior High | Geography | Knowledge Memorization, Chart Analysis | Synchronized Reinforcement, Exam Review |
| [高中地理 Skill](skills/geography/senior-geography/SKILL.md)<br><code>senior-geography</code> | Senior High | Geography | Knowledge Memorization, Chart Analysis | Synchronized Reinforcement, Gaokao Review |

### <a id="politics"></a>Politics

Junior and senior high school politics learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [初中道法 Skill](skills/politics/junior-politics/SKILL.md)<br><code>junior-politics</code> | Junior High | Politics | Knowledge Memorization, Source Analysis | Recitation and Memory, High School Entrance Exam Review |
| [高中政治 Skill](skills/politics/senior-politics/SKILL.md)<br><code>senior-politics</code> | Senior High | Politics | Knowledge Memorization, Source Analysis | Synchronized Reinforcement, Gaokao Review |

### <a id="computer-science"></a>Computer Science

Python, data structures, algorithms, AI foundations, and data analysis.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [数据分析 Skill](skills/computer-science/college-data-analysis/SKILL.md)<br><code>college-data-analysis</code> | College, Adult | Computer Science | Data Analysis | Career Skills, Project Practice |
| [数据结构 Skill](skills/computer-science/college-cs-data-structure/SKILL.md)<br><code>college-cs-data-structure</code> | College | Computer Science | Programming, Algorithms | Synchronized Reinforcement, Postgraduate Exam Review |
| [算法 Skill](skills/computer-science/college-cs-algorithm/SKILL.md)<br><code>college-cs-algorithm</code> | College, Adult | Computer Science | Algorithms, Logic | Career Skills, Interview Preparation |
| [AI 基础 Skill](skills/computer-science/college-ai-foundation/SKILL.md)<br><code>college-ai-foundation</code> | College, Adult | Computer Science | AI Foundations | Career Skills, Interest Learning |
| [Python Skill](skills/computer-science/college-cs-python/SKILL.md)<br><code>college-cs-python</code> | College, Adult | Computer Science | Programming | Career Skills, Course Learning |

### <a id="general-education"></a>General Education

College general education and academic skills.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [学术写作 Skill](skills/general-education/college-academic-writing/SKILL.md)<br><code>college-academic-writing</code> | College | General Education | Writing | Writing Improvement, Paper Writing Practice |

### <a id="career"></a>Career Education

Adult learning, certification, civil-service exams, teacher certification, and career education.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [公务员申论 Skill](skills/career/adult-civil-service-essay/SKILL.md)<br><code>adult-civil-service-essay</code> | Adult | Career Education | Source Reading, Writing | Certification, Writing Improvement |
| [公务员行测 Skill](skills/career/adult-civil-service-aptitude/SKILL.md)<br><code>adult-civil-service-aptitude</code> | Adult | Career Education | Logic, Data Analysis | Certification, Targeted Practice |
| [教师资格证 Skill](skills/career/adult-teacher-certification/SKILL.md)<br><code>adult-teacher-certification</code> | Adult | Career Education | Exam Sprint | Certification, Pre-Exam Sprint |
| [职业证书 Skill](skills/career/adult-vocational-certificate/SKILL.md)<br><code>adult-vocational-certificate</code> | Adult | Career Education | Knowledge Memorization, Exam Sprint | Certification, Pre-Exam Sprint |

### <a id="language"></a>Language Learning

Adult language learning scenarios.

| Skill | Stage | Subject / Area | Ability | Scenario |
| --- | --- | --- | --- | --- |
| [成人语言学习 Skill](skills/language/adult-language-learning/SKILL.md)<br><code>adult-language-learning</code> | Adult | Language Learning | Speaking, Listening, Vocabulary | Daily Check-in, Targeted Practice |

## Project Structure

```text
hermes-edu-skills/
├─ .github/workflows/validate.yml
├─ .well-known/skills/index.json
├─ skills/
│  ├─ math/
│  ├─ chinese/
│  ├─ english/
│  ├─ teaching/
│  ├─ institution/
│  ├─ system/
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
- Add Skill quality levels and review status.
- Add more Atomic Skills aligned with textbook and curriculum systems.
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
