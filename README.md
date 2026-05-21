# Hermes Edu Skills

面向中国教育场景的开源 Agent Skill Pack：教材同步、备考复习、拍照答疑、错题复盘、亲子陪学、阅读写作和教师工具，Hermes Agent 可直接使用，也可导出到 OpenClaw、Codex、Cursor、Claude Code 等 AI 工具。

A China-focused open education Agent Skill Pack for textbook sync, exam prep, photo Q&A, mistake review, family learning, reading/writing, and teacher workflows. Built for Hermes Agent, exportable to OpenClaw, Codex, Cursor, Claude Code, and other AI tools.

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-177-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[English](README.en.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

Hermes Edu Skills 是一套可直接被 Hermes Agent 识别的中文教育 Agent Skill Pack。它把教材同步、考试备考、拍照答疑、错题复盘、每日练习、阅读写作、亲子陪学、教师备课和家校沟通，整理成 177 个可浏览、可安装、可二次开发的产品级 Skill。

当前包含 170 个可直接安装使用的 Hermes Skill，另有 7 个设计参考。它不是泛泛的 Prompt 合集，而是一套围绕“真实教育任务”组织的 Agent 能力目录：每个 Skill 都有触发信号、适用角色、参数维度、使用边界和 Hermes 可读取的 `SKILL.md`。

如果你正在做 AI 学习助手、AI 老师、教研工具、家长陪学产品、题库/错题产品，或想给 Hermes Agent 装上一套开箱即用的中文教育能力，这个仓库可以直接作为起点。觉得有帮助的话，欢迎 Star，它会帮助更多中文教育 AI 开发者更快找到这个项目。

## 导航

- [30 秒理解](#30-秒理解)
- [默认使用：Hermes Agent](#默认使用hermes-agent)
- [只安装单个 Skill](#只安装单个-skill)
- [导出给其它 AI 工具或 Agent](#导出给其它-ai-工具或-agent)
- [按角色选择](#按角色选择)
- [技能分类总览](#技能分类总览)
- [全部 Skill 列表](#全部-skill-列表)
- [参与贡献](#参与贡献)
- [路线图](#路线图)

## 30 秒理解

| 问题 | 答案 |
| --- | --- |
| 这是什么？ | 一套面向 Hermes Agent Runtime 的中文教育 Agent Skill Pack。 |
| 现在有多少？ | 177 个公开 Skill，170 个可安装，7 个设计参考。 |
| 最核心的场景？ | 教材同步、备考复习、拍照答疑、错题复盘、每日练习、阅读写作、亲子陪学、教师工具。 |
| 为什么不是几千个文件？ | 年级、册别、单元、课时、知识点、难度都作为参数传入，避免把用户淹没在海量重复 Skill 中。 |
| 谁适合用？ | Hermes Agent 用户、教育 AI 开发者、老师、教研人员、学校/机构团队。 |
| 怎么开始？ | 默认安装到 Hermes Agent；需要其它工具时再使用 `agent:install -- --tool <tool>`。 |

## 为什么值得关注

- 中国教育场景优先：教材版本、年级册别、单元课时、同步练习、错题巩固、备考复习、亲子陪学都是一等公民。
- 产品级分类：不按技术文件夹堆砌，而按用户真正要完成的任务组织，拿来就能做教育 Agent 原型。
- 兼容 Hermes Agent：每个 Skill 都是标准 `SKILL.md`，可被 Hermes 直接识别。
- 可读、可改、可扩展：既能直接安装，也能作为教育 Agent Skill 设计参考和商业产品能力清单。
- 传播友好：每个精品 Skill 都写清“解决什么问题、适合谁、怎么用、输出什么、不能做什么”。
- 公开友好：仓库只包含公开 Skill 文档、索引和校验工具，不包含用户数据、密钥或商业后端实现。

## 你可以用它做什么

- 给本地 Hermes Agent 增加一套中文教育 Skill 库，让 Agent 会做教材同步、备考、阅读写作和陪学。
- 快速搭建 AI 学习助手、AI 老师、AI 助教、拍照答疑、错题复盘、亲子阅读、作文批改等教育 Agent 原型。
- 学习和复用教育 Skill 的目录结构、触发信号、适用场景和工作流命名方式。
- 为学校、老师、家长、教培机构和成人学习场景设计自己的 Skill。
- Fork 后可以继续扩展教材版本、知识点覆盖和独立 Hermes 工具适配。

## 按角色选择

| 你是谁 | 推荐先看 | 可以得到什么 |
| --- | --- | --- |
| Hermes Agent 用户 | [默认使用：Hermes Agent](#默认使用hermes-agent)、[学习核心能力](#learning-core) | 直接把中文教育 Skill 加到本地 Agent。 |
| 教育 AI 开发者 | [项目结构](#项目结构)、[兼容说明](#兼容说明) | 复用 Skill 结构、参数设计和工作流命名。 |
| 老师 / 教研人员 | [老师工具](#teacher-tools)、[教材同步](#textbook-sync) | 参考备课、作业生成、单元复习和同步教学设计。 |
| 家长 / 家庭教育产品 | [家庭教育](#family-education)、[每日练习](#daily-practice) | 构建陪伴、阅读、习惯和每日训练场景。 |
| 学校 / 教培机构 | [设计参考](#examples)、[考试备考](#exam-prep) | 了解组织报表、班级分析、课程包和复习产品形态。 |

## 发起与维护

本项目由 [长沙欣慰科技](https://www.shineway.tech/) 发起并维护。

我们希望把可复用的教育 Agent Skill 设计开放出来，和开发者、老师、教研人员、学校及教育机构一起探索更适合中国教育场景的智能体能力。本仓库只包含公开 Skill 文档、索引和校验工具，不包含用户数据或后端服务实现。

## 项目亮点

- 177 个可点击浏览的产品级 `SKILL.md`。
- 分类围绕用户任务组织：教材同步、学习核心、每日练习、考试备考、阅读写作、教师工具、家庭教育。
- 每个 Skill 都包含 Hermes frontmatter、适用场景、调用信号和工作流名称。
- 新增 Skill 独立使用标记和命令参数列，方便判断哪些可直接安装、以及命令行里该复制哪个名字。
- 年级、册别、单元、课时、知识点和难度作为参数传入，不再拆成海量独立 Skill。
- 自带 `catalog.json` 和 `.well-known/skills/index.json`，方便工具读取和二次集成。
- 自带校验脚本，确保目录、索引和 Skill 文件一致。
- MIT 协议，适合个人学习、二次开发和教育 Agent 原型建设。

## 如何支持这个项目

- 点 Star：帮助更多人发现这个教育 Skill Pack。
- Watch：关注后续新增 Skill、安装方式和 Hermes 适配更新。
- Fork：把 `skills/` 接入你自己的 Hermes Agent 或教育 Agent 项目。
- 提 Issue：告诉我们你最需要的年级、教材版本、学科或教师工具。
- 提 PR：贡献新的 Skill、优化中文指令、补充使用示例。

## 默认使用：Hermes Agent

Hermes Edu Skills 的默认目标是 Hermes Agent。仓库中的 `skills/` 目录就是标准 Skill 源目录，不需要先转换格式。

克隆仓库：

```bash
git clone https://github.com/zhongweiv/hermes-edu-skills.git
cd hermes-edu-skills
npm run validate
```

把 Skill Pack 安装到 Hermes Agent：

```bash
npm run install:hermes -- --config ~/.hermes/config.yaml
```

只安装一个 Skill 到 Hermes Agent：

```bash
npm run install:hermes -- --skill agent-study-plan --config ~/.hermes/config.yaml
```

如果你只想先查看需要写入的 Hermes 配置：

```bash
npm run install:hermes
```

然后在 Hermes 中验证：

```bash
hermes skills list
```

也可以用 Hermes 的 Skill 工具验证：

```python
from tools.skills_tool import skills_list, skill_view

skills_list()
skill_view("primary-math-mental-arithmetic")
```

## 只安装单个 Skill

很多用户第一次只想试一个能力，不需要把完整 Skill Pack 全部安装。所有安装/导出命令都支持 `--skill <slug>`，可以多次传入，也可以用逗号分隔。

| 目标 | 命令 |
| --- | --- |
| Hermes 单个 Skill | `npm run install:hermes -- --skill agent-study-plan --config ~/.hermes/config.yaml` |
| OpenClaw 单个 Skill | `npm run install:openclaw -- --skill primary-math-mental-arithmetic` |
| Codex 单个 Skill | `npm run install:codex -- --skill agent-socratic-tutor` |
| Claude Code 单个 Skill | `npm run install:claude -- --skill agent-study-plan` |
| Cursor 单个 Skill | `npm run install:cursor -- --workspace /path/to/project --skill agent-study-plan` |
| 通用 Agent 单个 Skill | `npm run export:generic -- --skill agent-study-plan --target ./dist/one-skill` |

一次安装多个 Skill：

```bash
npm run install:openclaw -- --skill agent-study-plan,agent-mistake-review
```

如果不确定 slug，可以先在 README 的 Skill 表格中点击查看，或在 `catalog.json` 中搜索 `slug`。

## 导出给其它 AI 工具或 Agent

如果你使用的不是 Hermes Agent，也可以把这套 Skill Pack 转成其它工具更容易识别的目录结构。核心原则是：`skills/` 保持 Hermes 原生格式，`agent-pack` 负责复制、扁平化或生成目标工具规则。

| 目标工具 | 命令 | 输出/安装位置 |
| --- | --- | --- |
| OpenClaw | `npm run install:openclaw` | `~/.openclaw/skills/<skill-name>/SKILL.md` |
| Codex | `npm run install:codex` | `$CODEX_HOME/skills` 或 `~/.codex/skills` |
| Claude Code | `npm run install:claude` | `~/.claude/skills/<skill-name>/SKILL.md` |
| Claude Code 项目级 | `npm run install:claude -- --workspace .` | `.claude/skills/<skill-name>/SKILL.md` |
| Cursor | `npm run install:cursor -- --workspace /path/to/project` | `.cursor/rules/*.mdc` + `.cursor/hermes-edu-skills` |
| 通用 Agent | `npm run export:generic` | `AGENT_SKILL_PACK.json` + `<skill-name>/SKILL.md` |

只转换 OpenClaw 格式，不安装到默认目录：

```bash
npm run export:openclaw
```

只导出某一个分类，例如教材同步。分类名旁边会标出命令行参数；也可以直接传入中文别名，例如 `--category 教材同步`：

```bash
npm run export:openclaw -- --category textbook-sync
```

常用分类命令参数：

| 想导出的内容 | 命令参数 |
| --- | --- |
| 教材同步 | `--category textbook-sync` |
| 学习核心能力 | `--category learning-core` |
| 每日练习 | `--category daily-practice` |
| 阅读写作 | `--category reading-writing` |
| 考试备考 | `--category exam-prep` |
| 老师工具 | `--category teacher-tools` |
| 家庭教育 | `--category family-education` |
| 语言学习 | `--category language-learning` |
| 成人与职业学习 | `--category career-learning` |

包含设计参考类 examples：

```bash
npm run export:generic -- --include-examples
```

高级写法仍然可用，适合需要动态指定工具或目标目录的集成场景：

```bash
npm run agent:install -- --tool hermes --skill agent-study-plan --config ~/.hermes/config.yaml
npm run agent:convert -- --tool openclaw --category 教材同步 --target ./dist/textbook-sync-skills
```

旧命令仍可使用，兼容早期文档：

```bash
npm run install:hermes
npm run install:openclaw
npm run export:agents
```

## 技能分类总览

先从这些一级分类进入。每个分类下面仍保留完整可点击 Skill 表格，方便浏览、检索和二次集成。

| 分类 | 命令参数 | 适用场景 | 数量 |
| --- | --- | --- | ---: |
| <a href="#textbook-sync"><code>textbook-sync</code></a><br>教材同步 | <code>--category textbook-sync</code> | 面向中国教材版本、年级、册别、单元、课时和知识点的同步学习能力。年级、册别、单元和难度作为参数传入，不再拆成大量独立 Skill。 | 41 |
| <a href="#learning-core"><code>learning-core</code></a><br>学习核心能力 | <code>--category learning-core</code> | 学习计划、拍照答疑、错题复盘、学情报告等通用学习闭环能力。 | 15 |
| <a href="#daily-practice"><code>daily-practice</code></a><br>每日练习 | <code>--category daily-practice</code> | 面向每天短时高频训练，例如口算、听写、背诵、词汇、快速巩固。 | 28 |
| <a href="#reading-writing"><code>reading-writing</code></a><br>阅读写作 | <code>--category reading-writing</code> | 面向语文、英语、学术和职场表达的阅读与写作能力。 | 10 |
| <a href="#exam-prep"><code>exam-prep</code></a><br>考试备考 | <code>--category exam-prep</code> | 面向期末、中考、高考、考研、四六级、考证和公务员等备考场景。 | 27 |
| <a href="#teacher-tools"><code>teacher-tools</code></a><br>老师工具 | <code>--category teacher-tools</code> | 面向老师备课、作业生成、班级分析和家校沟通。 | 31 |
| <a href="#family-education"><code>family-education</code></a><br>家庭教育 | <code>--category family-education</code> | 面向家长陪伴、亲子阅读、作业习惯和家庭沟通。 | 8 |
| <a href="#language-learning"><code>language-learning</code></a><br>语言学习 | <code>--category language-learning</code> | 面向成人英语、出国考试、口语、听力和长期语言能力提升。 | 3 |
| <a href="#career-learning"><code>career-learning</code></a><br>成人与职业学习 | <code>--category career-learning</code> | 面向大学、成人学习、职业技能和考证场景。 | 7 |
| <a href="#examples"><code>examples</code></a><br>设计参考 | <code>--category examples</code> | 需要商业系统数据、组织报表或工具适配层的 Skill 设计参考，不作为默认推荐安装入口。 | 7 |

## 覆盖范围

| 分类 | 命令参数 | 主要领域 | 数量 |
| --- | --- | --- | ---: |
| <a href="#textbook-sync"><code>textbook-sync</code></a><br>教材同步 | <code>--category textbook-sync</code> | 生物、数学、化学、物理、地理 | 41 |
| <a href="#learning-core"><code>learning-core</code></a><br>学习核心能力 | <code>--category learning-core</code> | 学习能力、综合 | 15 |
| <a href="#daily-practice"><code>daily-practice</code></a><br>每日练习 | <code>--category daily-practice</code> | 地理、化学、历史、生物、数学 | 28 |
| <a href="#reading-writing"><code>reading-writing</code></a><br>阅读写作 | <code>--category reading-writing</code> | 语文、英语、通识 | 10 |
| <a href="#exam-prep"><code>exam-prep</code></a><br>考试备考 | <code>--category exam-prep</code> | 地理、化学、历史、生物、数学 | 27 |
| <a href="#teacher-tools"><code>teacher-tools</code></a><br>老师工具 | <code>--category teacher-tools</code> | 教学管理、地理、化学、历史、生物 | 31 |
| <a href="#family-education"><code>family-education</code></a><br>家庭教育 | <code>--category family-education</code> | 家庭教育 | 8 |
| <a href="#language-learning"><code>language-learning</code></a><br>语言学习 | <code>--category language-learning</code> | 语言学习、英语 | 3 |
| <a href="#career-learning"><code>career-learning</code></a><br>成人与职业学习 | <code>--category career-learning</code> | 计算机、职业教育 | 7 |
| <a href="#examples"><code>examples</code></a><br>设计参考 | <code>--category examples</code> | 机构运营、学校管理 | 7 |

## 全部 Skill 列表

下面的表格列出了当前全部 177 个公开 Skill。中文 README 的分类列和 Skill 列都优先展示命令参数中的英文名，下一行保留中文名称；旁边的“命令参数”列可直接复制到安装、导出或转换命令中。

### <a id="textbook-sync"></a>教材同步<br>Textbook Sync

面向中国教材版本、年级、册别、单元、课时和知识点的同步学习能力。年级、册别、单元和难度作为参数传入，不再拆成大量独立 Skill。

命令参数：<code>--category textbook-sync</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md"><code>junior-biology-bs-textbook-sync</code></a><br>北师大版初中生物同步 Skill | <code>--skill junior-biology-bs-textbook-sync</code> | ✓ | junior | 生物 | 北师大版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md"><code>junior-math-bs-textbook-sync</code></a><br>北师大版初中数学同步 Skill | <code>--skill junior-math-bs-textbook-sync</code> | ✓ | junior | 数学 | 北师大版 | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md"><code>senior-biology-bs-textbook-sync</code></a><br>北师大版高中生物同步 Skill | <code>--skill senior-biology-bs-textbook-sync</code> | ✓ | senior | 生物 | 北师大版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md"><code>senior-math-bs-textbook-sync</code></a><br>北师大版高中数学同步 Skill | <code>--skill senior-math-bs-textbook-sync</code> | ✓ | senior | 数学 | 北师大版 | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md"><code>primary-math-bs-textbook-sync</code></a><br>北师大版小学数学同步 Skill | <code>--skill primary-math-bs-textbook-sync</code> | ✓ | primary | 数学 | 北师大版 | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| <a href="skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md"><code>junior-chemistry-lk-textbook-sync</code></a><br>鲁科版初中化学同步 Skill | <code>--skill junior-chemistry-lk-textbook-sync</code> | ✓ | junior | 化学 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md"><code>junior-physics-lk-textbook-sync</code></a><br>鲁科版初中物理同步 Skill | <code>--skill junior-physics-lk-textbook-sync</code> | ✓ | junior | 物理 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md"><code>senior-chemistry-lk-textbook-sync</code></a><br>鲁科版高中化学同步 Skill | <code>--skill senior-chemistry-lk-textbook-sync</code> | ✓ | senior | 化学 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md"><code>senior-physics-lk-textbook-sync</code></a><br>鲁科版高中物理同步 Skill | <code>--skill senior-physics-lk-textbook-sync</code> | ✓ | senior | 物理 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md"><code>junior-geography-rj-textbook-sync</code></a><br>人教版初中地理同步 Skill | <code>--skill junior-geography-rj-textbook-sync</code> | ✓ | junior | 地理 | 人教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md"><code>junior-chemistry-rj-textbook-sync</code></a><br>人教版初中化学同步 Skill | <code>--skill junior-chemistry-rj-textbook-sync</code> | ✓ | junior | 化学 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md"><code>junior-biology-rj-textbook-sync</code></a><br>人教版初中生物同步 Skill | <code>--skill junior-biology-rj-textbook-sync</code> | ✓ | junior | 生物 | 人教版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md"><code>junior-math-rj-textbook-sync</code></a><br>人教版初中数学同步 Skill | <code>--skill junior-math-rj-textbook-sync</code> | ✓ | junior | 数学 | 人教版 | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md"><code>junior-physics-rj-textbook-sync</code></a><br>人教版初中物理同步 Skill | <code>--skill junior-physics-rj-textbook-sync</code> | ✓ | junior | 物理 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md"><code>junior-english-rj-textbook-sync</code></a><br>人教版初中英语同步 Skill | <code>--skill junior-english-rj-textbook-sync</code> | ✓ | junior | 英语 | 人教版 | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md"><code>senior-geography-rj-textbook-sync</code></a><br>人教版高中地理同步 Skill | <code>--skill senior-geography-rj-textbook-sync</code> | ✓ | senior | 地理 | 人教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md"><code>senior-chemistry-rj-textbook-sync</code></a><br>人教版高中化学同步 Skill | <code>--skill senior-chemistry-rj-textbook-sync</code> | ✓ | senior | 化学 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md"><code>senior-biology-rj-textbook-sync</code></a><br>人教版高中生物同步 Skill | <code>--skill senior-biology-rj-textbook-sync</code> | ✓ | senior | 生物 | 人教版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md"><code>senior-physics-rj-textbook-sync</code></a><br>人教版高中物理同步 Skill | <code>--skill senior-physics-rj-textbook-sync</code> | ✓ | senior | 物理 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md"><code>senior-english-rj-textbook-sync</code></a><br>人教版高中英语同步 Skill | <code>--skill senior-english-rj-textbook-sync</code> | ✓ | senior | 英语 | 人教版 | 教材同步、阅读理解、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md"><code>primary-math-rj-textbook-sync</code></a><br>人教版小学数学同步 Skill | <code>--skill primary-math-rj-textbook-sync</code> | ✓ | primary | 数学 | 人教版 | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| <a href="skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md"><code>senior-math-rja-textbook-sync</code></a><br>人教A版高中数学同步 Skill | <code>--skill senior-math-rja-textbook-sync</code> | ✓ | senior | 数学 | 人教A版 | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md"><code>senior-math-rjb-textbook-sync</code></a><br>人教B版高中数学同步 Skill | <code>--skill senior-math-rjb-textbook-sync</code> | ✓ | senior | 数学 | 人教B版 | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md"><code>primary-english-pep-textbook-sync</code></a><br>人教PEP版小学英语同步 Skill | <code>--skill primary-english-pep-textbook-sync</code> | ✓ | primary | 英语 | 人教PEP版 | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md"><code>junior-math-sj-textbook-sync</code></a><br>苏教版初中数学同步 Skill | <code>--skill junior-math-sj-textbook-sync</code> | ✓ | junior | 数学 | 苏教版 | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md"><code>primary-math-sj-textbook-sync</code></a><br>苏教版小学数学同步 Skill | <code>--skill primary-math-sj-textbook-sync</code> | ✓ | primary | 数学 | 苏教版 | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| <a href="skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md"><code>junior-history-tongbian-textbook-sync</code></a><br>统编版初中历史同步 Skill | <code>--skill junior-history-tongbian-textbook-sync</code> | ✓ | junior | 历史 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md"><code>junior-chinese-tongbian-textbook-sync</code></a><br>统编版初中语文同步 Skill | <code>--skill junior-chinese-tongbian-textbook-sync</code> | ✓ | junior | 语文 | 统编版 | 教材同步、阅读理解、写作表达 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md"><code>junior-politics-tongbian-textbook-sync</code></a><br>统编版初中政治同步 Skill | <code>--skill junior-politics-tongbian-textbook-sync</code> | ✓ | junior | 政治 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md"><code>senior-history-tongbian-textbook-sync</code></a><br>统编版高中历史同步 Skill | <code>--skill senior-history-tongbian-textbook-sync</code> | ✓ | senior | 历史 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md"><code>senior-chinese-tongbian-textbook-sync</code></a><br>统编版高中语文同步 Skill | <code>--skill senior-chinese-tongbian-textbook-sync</code> | ✓ | senior | 语文 | 统编版 | 教材同步、文言文、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md"><code>senior-politics-tongbian-textbook-sync</code></a><br>统编版高中政治同步 Skill | <code>--skill senior-politics-tongbian-textbook-sync</code> | ✓ | senior | 政治 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md"><code>primary-chinese-tongbian-textbook-sync</code></a><br>统编版小学语文同步 Skill | <code>--skill primary-chinese-tongbian-textbook-sync</code> | ✓ | primary | 语文 | 统编版 | 教材同步、阅读理解、写作表达 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md"><code>junior-english-wy-textbook-sync</code></a><br>外研版初中英语同步 Skill | <code>--skill junior-english-wy-textbook-sync</code> | ✓ | junior | 英语 | 外研版 | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md"><code>senior-english-wy-textbook-sync</code></a><br>外研版高中英语同步 Skill | <code>--skill senior-english-wy-textbook-sync</code> | ✓ | senior | 英语 | 外研版 | 教材同步、阅读理解、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md"><code>primary-english-wy-textbook-sync</code></a><br>外研版小学英语同步 Skill | <code>--skill primary-english-wy-textbook-sync</code> | ✓ | primary | 英语 | 外研版 | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md"><code>junior-geography-xj-textbook-sync</code></a><br>湘教版初中地理同步 Skill | <code>--skill junior-geography-xj-textbook-sync</code> | ✓ | junior | 地理 | 湘教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md"><code>senior-geography-xj-textbook-sync</code></a><br>湘教版高中地理同步 Skill | <code>--skill senior-geography-xj-textbook-sync</code> | ✓ | senior | 地理 | 湘教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md"><code>junior-english-yl-textbook-sync</code></a><br>译林版初中英语同步 Skill | <code>--skill junior-english-yl-textbook-sync</code> | ✓ | junior | 英语 | 译林版 | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md"><code>primary-english-yl-textbook-sync</code></a><br>译林版小学英语同步 Skill | <code>--skill primary-english-yl-textbook-sync</code> | ✓ | primary | 英语 | 译林版 | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/preschool-general-readiness-textbook-sync/SKILL.md"><code>preschool-general-readiness-textbook-sync</code></a><br>幼小衔接通用学前综合同步 Skill | <code>--skill preschool-general-readiness-textbook-sync</code> | ✓ | preschool | 综合 | 幼小衔接通用 | 启蒙学习、习惯培养 | 每日启蒙、亲子共学、入学准备 |

### <a id="learning-core"></a>学习核心能力<br>Learning Core

学习计划、拍照答疑、错题复盘、学情报告等通用学习闭环能力。

命令参数：<code>--category learning-core</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/learning-core/agent-weakness-boost/SKILL.md"><code>agent-weakness-boost</code></a><br>薄弱项提升 Skill | <code>--skill agent-weakness-boost</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 查漏补缺 | 专项训练 |
| <a href="skills/learning-core/agent-mistake-review/SKILL.md"><code>agent-mistake-review</code></a><br>错题复盘 Skill | <code>--skill agent-mistake-review</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 错题订正、复习计划 | 错题订正、单元复习 |
| <a href="skills/learning-core/agent-review-assistant/SKILL.md"><code>agent-review-assistant</code></a><br>复习助手 Skill | <code>--skill agent-review-assistant</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 复习计划 | 单元复习 |
| <a href="skills/learning-core/agent-holiday-plan/SKILL.md"><code>agent-holiday-plan</code></a><br>寒暑假提升 Skill | <code>--skill agent-holiday-plan</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 假期计划 | 寒暑假提升 |
| <a href="skills/learning-core/agent-memory-method/SKILL.md"><code>agent-memory-method</code></a><br>记忆方法 Skill | <code>--skill agent-memory-method</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 记忆 | 背诵记忆 |
| <a href="skills/learning-core/agent-preview-assistant/SKILL.md"><code>agent-preview-assistant</code></a><br>课前预习 Skill | <code>--skill agent-preview-assistant</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 预习 | 课前预习 |
| <a href="skills/learning-core/agent-weekly-review/SKILL.md"><code>agent-weekly-review</code></a><br>每周复盘 Skill | <code>--skill agent-weekly-review</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 阶段复盘 | 学习报告 |
| <a href="skills/learning-core/agent-photo-question/SKILL.md"><code>agent-photo-question</code></a><br>拍照答疑 Skill | <code>--skill agent-photo-question</code> | - | primary<br>junior<br>senior | 综合 | - | AI 讲题、图片识题 | 拍照答疑、课后作业 |
| <a href="skills/learning-core/agent-socratic-tutor/SKILL.md"><code>agent-socratic-tutor</code></a><br>启发式讲解 Skill | <code>--skill agent-socratic-tutor</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 启发提问 | AI 讲题 |
| <a href="skills/learning-core/agent-learning-report/SKILL.md"><code>agent-learning-report</code></a><br>学情报告 Skill | <code>--skill agent-learning-report</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 学情报告、学习建议 | 学习报告、家长沟通 |
| <a href="skills/learning-core/agent-study-plan/SKILL.md"><code>agent-study-plan</code></a><br>学习计划 Skill | <code>--skill agent-study-plan</code> | ✓ | preschool<br>primary<br>junior<br>senior<br>college<br>adult | 学习能力 | - | 学习计划、目标管理 | 今日学习、寒暑假提升、考前规划 |
| <a href="skills/learning-core/agent-learning-habit/SKILL.md"><code>agent-learning-habit</code></a><br>学习习惯 Skill | <code>--skill agent-learning-habit</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 习惯培养 | 每日打卡 |
| <a href="skills/learning-core/agent-focus-training/SKILL.md"><code>agent-focus-training</code></a><br>专注力训练 Skill | <code>--skill agent-focus-training</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 专注 | 每日打卡 |
| <a href="skills/learning-core/agent-homework-companion/SKILL.md"><code>agent-homework-companion</code></a><br>作业陪伴 Skill | <code>--skill agent-homework-companion</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 作业陪伴 | 课后作业 |
| <a href="skills/learning-core/agent-question-explanation/SKILL.md"><code>agent-question-explanation</code></a><br>AI 讲题 Skill | <code>--skill agent-question-explanation</code> | ✓ | primary<br>junior<br>senior<br>college | 学习能力 | - | AI 讲题、举一反三 | 课后作业、同步巩固 |

### <a id="daily-practice"></a>每日练习<br>Daily Practice

面向每天短时高频训练，例如口算、听写、背诵、词汇、快速巩固。

命令参数：<code>--category daily-practice</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/daily-practice/junior-geography-quick-practice/SKILL.md"><code>junior-geography-quick-practice</code></a><br>初中地理快速巩固 Skill | <code>--skill junior-geography-quick-practice</code> | ✓ | junior | 地理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-chemistry-quick-practice/SKILL.md"><code>junior-chemistry-quick-practice</code></a><br>初中化学快速巩固 Skill | <code>--skill junior-chemistry-quick-practice</code> | ✓ | junior | 化学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-history-quick-practice/SKILL.md"><code>junior-history-quick-practice</code></a><br>初中历史快速巩固 Skill | <code>--skill junior-history-quick-practice</code> | ✓ | junior | 历史 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-biology-quick-practice/SKILL.md"><code>junior-biology-quick-practice</code></a><br>初中生物快速巩固 Skill | <code>--skill junior-biology-quick-practice</code> | ✓ | junior | 生物 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-math-quick-practice/SKILL.md"><code>junior-math-quick-practice</code></a><br>初中数学快速巩固 Skill | <code>--skill junior-math-quick-practice</code> | ✓ | junior | 数学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-math-daily-practice/SKILL.md"><code>junior-math-daily-practice</code></a><br>初中数学每日练 Skill | <code>--skill junior-math-daily-practice</code> | ✓ | junior | 数学 | - | 计算、函数、几何 | 每日打卡、专项训练 |
| <a href="skills/daily-practice/junior-physics-quick-practice/SKILL.md"><code>junior-physics-quick-practice</code></a><br>初中物理快速巩固 Skill | <code>--skill junior-physics-quick-practice</code> | ✓ | junior | 物理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-english-vocabulary-daily/SKILL.md"><code>junior-english-vocabulary-daily</code></a><br>初中英语词汇每日练 Skill | <code>--skill junior-english-vocabulary-daily</code> | ✓ | junior | 英语 | - | 词汇 | 每日打卡、中考复习 |
| <a href="skills/daily-practice/junior-english-quick-practice/SKILL.md"><code>junior-english-quick-practice</code></a><br>初中英语快速巩固 Skill | <code>--skill junior-english-quick-practice</code> | ✓ | junior | 英语 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-chinese-quick-practice/SKILL.md"><code>junior-chinese-quick-practice</code></a><br>初中语文快速巩固 Skill | <code>--skill junior-chinese-quick-practice</code> | ✓ | junior | 语文 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-politics-quick-practice/SKILL.md"><code>junior-politics-quick-practice</code></a><br>初中政治快速巩固 Skill | <code>--skill junior-politics-quick-practice</code> | ✓ | junior | 政治 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-geography-quick-practice/SKILL.md"><code>senior-geography-quick-practice</code></a><br>高中地理快速巩固 Skill | <code>--skill senior-geography-quick-practice</code> | ✓ | senior | 地理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-chemistry-quick-practice/SKILL.md"><code>senior-chemistry-quick-practice</code></a><br>高中化学快速巩固 Skill | <code>--skill senior-chemistry-quick-practice</code> | ✓ | senior | 化学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-history-quick-practice/SKILL.md"><code>senior-history-quick-practice</code></a><br>高中历史快速巩固 Skill | <code>--skill senior-history-quick-practice</code> | ✓ | senior | 历史 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-biology-quick-practice/SKILL.md"><code>senior-biology-quick-practice</code></a><br>高中生物快速巩固 Skill | <code>--skill senior-biology-quick-practice</code> | ✓ | senior | 生物 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-math-quick-practice/SKILL.md"><code>senior-math-quick-practice</code></a><br>高中数学快速巩固 Skill | <code>--skill senior-math-quick-practice</code> | ✓ | senior | 数学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-physics-quick-practice/SKILL.md"><code>senior-physics-quick-practice</code></a><br>高中物理快速巩固 Skill | <code>--skill senior-physics-quick-practice</code> | ✓ | senior | 物理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-english-vocabulary-daily/SKILL.md"><code>senior-english-vocabulary-daily</code></a><br>高中英语词汇每日练 Skill | <code>--skill senior-english-vocabulary-daily</code> | ✓ | senior | 英语 | - | 词汇 | 每日打卡、高考复习 |
| <a href="skills/daily-practice/senior-english-quick-practice/SKILL.md"><code>senior-english-quick-practice</code></a><br>高中英语快速巩固 Skill | <code>--skill senior-english-quick-practice</code> | ✓ | senior | 英语 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-chinese-quick-practice/SKILL.md"><code>senior-chinese-quick-practice</code></a><br>高中语文快速巩固 Skill | <code>--skill senior-chinese-quick-practice</code> | ✓ | senior | 语文 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-politics-quick-practice/SKILL.md"><code>senior-politics-quick-practice</code></a><br>高中政治快速巩固 Skill | <code>--skill senior-politics-quick-practice</code> | ✓ | senior | 政治 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/primary-chinese-recitation-daily/SKILL.md"><code>primary-chinese-recitation-daily</code></a><br>小学课文古诗背诵 Skill | <code>--skill primary-chinese-recitation-daily</code> | ✓ | primary | 语文 | - | 背诵、朗读 | 背诵记忆、每日打卡 |
| <a href="skills/daily-practice/primary-math-mental-arithmetic/SKILL.md"><code>primary-math-mental-arithmetic</code></a><br>小学口算速练 Skill | <code>--skill primary-math-mental-arithmetic</code> | ✓ | primary | 数学 | - | 计算、数感 | 口算速练、每日打卡 |
| <a href="skills/daily-practice/primary-english-vocabulary-daily/SKILL.md"><code>primary-english-vocabulary-daily</code></a><br>小学英语单词每日练 Skill | <code>--skill primary-english-vocabulary-daily</code> | ✓ | primary | 英语 | - | 词汇、默写 | 每日打卡、听写默写 |
| <a href="skills/daily-practice/primary-chinese-dictation-daily/SKILL.md"><code>primary-chinese-dictation-daily</code></a><br>小学语文字词听写 Skill | <code>--skill primary-chinese-dictation-daily</code> | ✓ | primary | 语文 | - | 听写、默写 | 听写默写、每日打卡 |
| <a href="skills/daily-practice/primary-reading-daily/SKILL.md"><code>primary-reading-daily</code></a><br>小学阅读每日练 Skill | <code>--skill primary-reading-daily</code> | ✓ | primary | 语文 | - | 阅读理解 | 阅读训练、每日打卡 |
| <a href="skills/daily-practice/preschool-literacy-daily/SKILL.md"><code>preschool-literacy-daily</code></a><br>学前识字每日练 Skill | <code>--skill preschool-literacy-daily</code> | ✓ | preschool | 语文 | - | 识字 | 每日启蒙、每日打卡 |
| <a href="skills/daily-practice/preschool-number-sense-daily/SKILL.md"><code>preschool-number-sense-daily</code></a><br>学前数感每日练 Skill | <code>--skill preschool-number-sense-daily</code> | ✓ | preschool | 数学 | - | 数感 | 数感游戏、每日打卡 |

### <a id="reading-writing"></a>阅读写作<br>Reading & Writing

面向语文、英语、学术和职场表达的阅读与写作能力。

命令参数：<code>--category reading-writing</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/reading-writing/junior-chinese-modern-reading/SKILL.md"><code>junior-chinese-modern-reading</code></a><br>初中现代文阅读 Skill | <code>--skill junior-chinese-modern-reading</code> | ✓ | junior | 语文 | - | 阅读理解 | 中考复习 |
| <a href="skills/reading-writing/junior-english-writing/SKILL.md"><code>junior-english-writing</code></a><br>初中英语写作 Skill | <code>--skill junior-english-writing</code> | ✓ | junior | 英语 | - | 写作 | 中考复习 |
| <a href="skills/reading-writing/junior-chinese-composition/SKILL.md"><code>junior-chinese-composition</code></a><br>初中作文提升 Skill | <code>--skill junior-chinese-composition</code> | ✓ | junior | 语文 | - | 写作 | 写作提升 |
| <a href="skills/reading-writing/senior-english-writing/SKILL.md"><code>senior-english-writing</code></a><br>高中英语写作 Skill | <code>--skill senior-english-writing</code> | ✓ | senior | 英语 | - | 写作 | 高考复习 |
| <a href="skills/reading-writing/senior-chinese-reading/SKILL.md"><code>senior-chinese-reading</code></a><br>高中语文阅读 Skill | <code>--skill senior-chinese-reading</code> | ✓ | senior | 语文 | - | 阅读理解 | 高考复习 |
| <a href="skills/reading-writing/senior-chinese-essay/SKILL.md"><code>senior-chinese-essay</code></a><br>高中作文提升 Skill | <code>--skill senior-chinese-essay</code> | ✓ | senior | 语文 | - | 写作 | 写作提升 |
| <a href="skills/reading-writing/primary-english-reading/SKILL.md"><code>primary-english-reading</code></a><br>小学英语阅读 Skill | <code>--skill primary-english-reading</code> | ✓ | primary | 英语 | - | 阅读理解 | 阅读训练 |
| <a href="skills/reading-writing/primary-chinese-reading/SKILL.md"><code>primary-chinese-reading</code></a><br>小学语文阅读理解 Skill | <code>--skill primary-chinese-reading</code> | ✓ | primary | 语文 | - | 阅读理解 | 阅读训练 |
| <a href="skills/reading-writing/primary-chinese-writing/SKILL.md"><code>primary-chinese-writing</code></a><br>小学作文提升 Skill | <code>--skill primary-chinese-writing</code> | ✓ | primary | 语文 | - | 写作、表达 | 写作提升 |
| <a href="skills/reading-writing/college-academic-writing/SKILL.md"><code>college-academic-writing</code></a><br>学术写作 Skill | <code>--skill college-academic-writing</code> | ✓ | college | 通识 | - | 写作 | 论文训练 |

### <a id="exam-prep"></a>考试备考<br>Exam Prep

面向期末、中考、高考、考研、四六级、考证和公务员等备考场景。

命令参数：<code>--category exam-prep</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/exam-prep/junior-geography-exam-review/SKILL.md"><code>junior-geography-exam-review</code></a><br>初中地理考试复习 Skill | <code>--skill junior-geography-exam-review</code> | ✓ | junior | 地理 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-chemistry-exam-review/SKILL.md"><code>junior-chemistry-exam-review</code></a><br>初中化学考试复习 Skill | <code>--skill junior-chemistry-exam-review</code> | ✓ | junior | 化学 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-history-exam-review/SKILL.md"><code>junior-history-exam-review</code></a><br>初中历史考试复习 Skill | <code>--skill junior-history-exam-review</code> | ✓ | junior | 历史 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-biology-exam-review/SKILL.md"><code>junior-biology-exam-review</code></a><br>初中生物考试复习 Skill | <code>--skill junior-biology-exam-review</code> | ✓ | junior | 生物 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-math-exam-review/SKILL.md"><code>junior-math-exam-review</code></a><br>初中数学考试复习 Skill | <code>--skill junior-math-exam-review</code> | ✓ | junior | 数学 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-physics-exam-review/SKILL.md"><code>junior-physics-exam-review</code></a><br>初中物理考试复习 Skill | <code>--skill junior-physics-exam-review</code> | ✓ | junior | 物理 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-english-exam-review/SKILL.md"><code>junior-english-exam-review</code></a><br>初中英语考试复习 Skill | <code>--skill junior-english-exam-review</code> | ✓ | junior | 英语 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-chinese-exam-review/SKILL.md"><code>junior-chinese-exam-review</code></a><br>初中语文考试复习 Skill | <code>--skill junior-chinese-exam-review</code> | ✓ | junior | 语文 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-politics-exam-review/SKILL.md"><code>junior-politics-exam-review</code></a><br>初中政治考试复习 Skill | <code>--skill junior-politics-exam-review</code> | ✓ | junior | 政治 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/college-cet6-sprint/SKILL.md"><code>college-cet6-sprint</code></a><br>大学英语六级备考 Skill | <code>--skill college-cet6-sprint</code> | ✓ | college | 英语 | - | 词汇、听力、阅读理解、写作 | 考前冲刺 |
| <a href="skills/exam-prep/college-cet4-sprint/SKILL.md"><code>college-cet4-sprint</code></a><br>大学英语四级备考 Skill | <code>--skill college-cet4-sprint</code> | ✓ | college | 英语 | - | 词汇、听力、阅读理解、写作 | 考前冲刺 |
| <a href="skills/exam-prep/senior-gaokao-sprint/SKILL.md"><code>senior-gaokao-sprint</code></a><br>高考冲刺 Skill | <code>--skill senior-gaokao-sprint</code> | ✓ | senior | 综合 | - | 考试冲刺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-geography-exam-review/SKILL.md"><code>senior-geography-exam-review</code></a><br>高中地理考试复习 Skill | <code>--skill senior-geography-exam-review</code> | ✓ | senior | 地理 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-chemistry-exam-review/SKILL.md"><code>senior-chemistry-exam-review</code></a><br>高中化学考试复习 Skill | <code>--skill senior-chemistry-exam-review</code> | ✓ | senior | 化学 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-history-exam-review/SKILL.md"><code>senior-history-exam-review</code></a><br>高中历史考试复习 Skill | <code>--skill senior-history-exam-review</code> | ✓ | senior | 历史 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-biology-exam-review/SKILL.md"><code>senior-biology-exam-review</code></a><br>高中生物考试复习 Skill | <code>--skill senior-biology-exam-review</code> | ✓ | senior | 生物 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-math-exam-review/SKILL.md"><code>senior-math-exam-review</code></a><br>高中数学考试复习 Skill | <code>--skill senior-math-exam-review</code> | ✓ | senior | 数学 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-physics-exam-review/SKILL.md"><code>senior-physics-exam-review</code></a><br>高中物理考试复习 Skill | <code>--skill senior-physics-exam-review</code> | ✓ | senior | 物理 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-english-exam-review/SKILL.md"><code>senior-english-exam-review</code></a><br>高中英语考试复习 Skill | <code>--skill senior-english-exam-review</code> | ✓ | senior | 英语 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-chinese-exam-review/SKILL.md"><code>senior-chinese-exam-review</code></a><br>高中语文考试复习 Skill | <code>--skill senior-chinese-exam-review</code> | ✓ | senior | 语文 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-politics-exam-review/SKILL.md"><code>senior-politics-exam-review</code></a><br>高中政治考试复习 Skill | <code>--skill senior-politics-exam-review</code> | ✓ | senior | 政治 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/civil-service-essay/SKILL.md"><code>civil-service-essay</code></a><br>公务员申论 Skill | <code>--skill civil-service-essay</code> | ✓ | adult | 职业教育 | - | 材料阅读、写作 | 考证、写作提升 |
| <a href="skills/exam-prep/civil-service-aptitude/SKILL.md"><code>civil-service-aptitude</code></a><br>公务员行测 Skill | <code>--skill civil-service-aptitude</code> | ✓ | adult | 职业教育 | - | 逻辑、数据分析 | 考证、专项训练 |
| <a href="skills/exam-prep/teacher-certification-sprint/SKILL.md"><code>teacher-certification-sprint</code></a><br>教师资格证备考 Skill | <code>--skill teacher-certification-sprint</code> | ✓ | adult | 职业教育 | - | 考试冲刺 | 考证 |
| <a href="skills/exam-prep/postgraduate-english-sprint/SKILL.md"><code>postgraduate-english-sprint</code></a><br>考研英语备考 Skill | <code>--skill postgraduate-english-sprint</code> | ✓ | college<br>adult | 英语 | - | 阅读理解、翻译、写作 | 考研复习 |
| <a href="skills/exam-prep/primary-final-review/SKILL.md"><code>primary-final-review</code></a><br>小学期末复习 Skill | <code>--skill primary-final-review</code> | ✓ | primary | 综合 | - | 考试复习 | 期中期末复习 |
| <a href="skills/exam-prep/junior-zhongkao-sprint/SKILL.md"><code>junior-zhongkao-sprint</code></a><br>中考冲刺 Skill | <code>--skill junior-zhongkao-sprint</code> | ✓ | junior | 综合 | - | 考试冲刺 | 中考复习、考前冲刺 |

### <a id="teacher-tools"></a>老师工具<br>Teacher Tools

面向老师备课、作业生成、班级分析和家校沟通。

命令参数：<code>--category teacher-tools</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/teacher-tools/teacher-class-analysis-lite/SKILL.md"><code>teacher-class-analysis-lite</code></a><br>班级学情分析 Lite Skill | <code>--skill teacher-class-analysis-lite</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 学情分析 | 学情分析 |
| <a href="skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md"><code>teacher-geography-lesson-planning</code></a><br>地理备课 Skill | <code>--skill teacher-geography-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 地理 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-geography-unit-review/SKILL.md"><code>teacher-geography-unit-review</code></a><br>地理单元复习 Skill | <code>--skill teacher-geography-unit-review</code> | ✓ | primary<br>junior<br>senior | 地理 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-geography-homework-generation/SKILL.md"><code>teacher-geography-homework-generation</code></a><br>地理作业生成 Skill | <code>--skill teacher-geography-homework-generation</code> | ✓ | primary<br>junior<br>senior | 地理 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md"><code>teacher-chemistry-lesson-planning</code></a><br>化学备课 Skill | <code>--skill teacher-chemistry-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 化学 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md"><code>teacher-chemistry-unit-review</code></a><br>化学单元复习 Skill | <code>--skill teacher-chemistry-unit-review</code> | ✓ | primary<br>junior<br>senior | 化学 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md"><code>teacher-chemistry-homework-generation</code></a><br>化学作业生成 Skill | <code>--skill teacher-chemistry-homework-generation</code> | ✓ | primary<br>junior<br>senior | 化学 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-parent-report-lite/SKILL.md"><code>teacher-parent-report-lite</code></a><br>家长反馈报告 Lite Skill | <code>--skill teacher-parent-report-lite</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 报告生成 | 家长沟通 |
| <a href="skills/teacher-tools/teacher-lesson-planning/SKILL.md"><code>teacher-lesson-planning</code></a><br>老师备课 Skill | <code>--skill teacher-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 教学设计、学情分析 | 老师备课 |
| <a href="skills/teacher-tools/teacher-history-lesson-planning/SKILL.md"><code>teacher-history-lesson-planning</code></a><br>历史备课 Skill | <code>--skill teacher-history-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 历史 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-history-unit-review/SKILL.md"><code>teacher-history-unit-review</code></a><br>历史单元复习 Skill | <code>--skill teacher-history-unit-review</code> | ✓ | primary<br>junior<br>senior | 历史 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-history-homework-generation/SKILL.md"><code>teacher-history-homework-generation</code></a><br>历史作业生成 Skill | <code>--skill teacher-history-homework-generation</code> | ✓ | primary<br>junior<br>senior | 历史 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md"><code>teacher-biology-lesson-planning</code></a><br>生物备课 Skill | <code>--skill teacher-biology-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 生物 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-biology-unit-review/SKILL.md"><code>teacher-biology-unit-review</code></a><br>生物单元复习 Skill | <code>--skill teacher-biology-unit-review</code> | ✓ | primary<br>junior<br>senior | 生物 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-biology-homework-generation/SKILL.md"><code>teacher-biology-homework-generation</code></a><br>生物作业生成 Skill | <code>--skill teacher-biology-homework-generation</code> | ✓ | primary<br>junior<br>senior | 生物 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-math-lesson-planning/SKILL.md"><code>teacher-math-lesson-planning</code></a><br>数学备课 Skill | <code>--skill teacher-math-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 数学 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-math-unit-review/SKILL.md"><code>teacher-math-unit-review</code></a><br>数学单元复习 Skill | <code>--skill teacher-math-unit-review</code> | ✓ | primary<br>junior<br>senior | 数学 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-math-homework-generation/SKILL.md"><code>teacher-math-homework-generation</code></a><br>数学作业生成 Skill | <code>--skill teacher-math-homework-generation</code> | ✓ | primary<br>junior<br>senior | 数学 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md"><code>teacher-physics-lesson-planning</code></a><br>物理备课 Skill | <code>--skill teacher-physics-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 物理 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-physics-unit-review/SKILL.md"><code>teacher-physics-unit-review</code></a><br>物理单元复习 Skill | <code>--skill teacher-physics-unit-review</code> | ✓ | primary<br>junior<br>senior | 物理 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-physics-homework-generation/SKILL.md"><code>teacher-physics-homework-generation</code></a><br>物理作业生成 Skill | <code>--skill teacher-physics-homework-generation</code> | ✓ | primary<br>junior<br>senior | 物理 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-english-lesson-planning/SKILL.md"><code>teacher-english-lesson-planning</code></a><br>英语备课 Skill | <code>--skill teacher-english-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 英语 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-english-unit-review/SKILL.md"><code>teacher-english-unit-review</code></a><br>英语单元复习 Skill | <code>--skill teacher-english-unit-review</code> | ✓ | primary<br>junior<br>senior | 英语 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-english-homework-generation/SKILL.md"><code>teacher-english-homework-generation</code></a><br>英语作业生成 Skill | <code>--skill teacher-english-homework-generation</code> | ✓ | primary<br>junior<br>senior | 英语 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md"><code>teacher-chinese-lesson-planning</code></a><br>语文备课 Skill | <code>--skill teacher-chinese-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 语文 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-chinese-unit-review/SKILL.md"><code>teacher-chinese-unit-review</code></a><br>语文单元复习 Skill | <code>--skill teacher-chinese-unit-review</code> | ✓ | primary<br>junior<br>senior | 语文 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md"><code>teacher-chinese-homework-generation</code></a><br>语文作业生成 Skill | <code>--skill teacher-chinese-homework-generation</code> | ✓ | primary<br>junior<br>senior | 语文 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md"><code>teacher-politics-lesson-planning</code></a><br>政治备课 Skill | <code>--skill teacher-politics-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 政治 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-politics-unit-review/SKILL.md"><code>teacher-politics-unit-review</code></a><br>政治单元复习 Skill | <code>--skill teacher-politics-unit-review</code> | ✓ | primary<br>junior<br>senior | 政治 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-politics-homework-generation/SKILL.md"><code>teacher-politics-homework-generation</code></a><br>政治作业生成 Skill | <code>--skill teacher-politics-homework-generation</code> | ✓ | primary<br>junior<br>senior | 政治 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-homework-generation/SKILL.md"><code>teacher-homework-generation</code></a><br>作业生成 Skill | <code>--skill teacher-homework-generation</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 作业生成、分层练习 | 班级作业 |

### <a id="family-education"></a>家庭教育<br>Family Education

面向家长陪伴、亲子阅读、作业习惯和家庭沟通。

命令参数：<code>--category family-education</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/family-education/family-homework-routine/SKILL.md"><code>family-homework-routine</code></a><br>家庭作业习惯 Skill | <code>--skill family-homework-routine</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 作业陪伴 |
| <a href="skills/family-education/family-school-communication/SKILL.md"><code>family-school-communication</code></a><br>家校沟通准备 Skill | <code>--skill family-school-communication</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 家长沟通 |
| <a href="skills/family-education/agent-parent-companion/SKILL.md"><code>agent-parent-companion</code></a><br>家长陪学 Skill | <code>--skill agent-parent-companion</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议、目标管理 | 家长陪学 |
| <a href="skills/family-education/family-holiday-learning/SKILL.md"><code>family-holiday-learning</code></a><br>假期家庭学习 Skill | <code>--skill family-holiday-learning</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 寒暑假提升 |
| <a href="skills/family-education/family-screen-time-balance/SKILL.md"><code>family-screen-time-balance</code></a><br>屏幕时间管理 Skill | <code>--skill family-screen-time-balance</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 习惯培养 |
| <a href="skills/family-education/family-reading-companion/SKILL.md"><code>family-reading-companion</code></a><br>亲子阅读陪伴 Skill | <code>--skill family-reading-companion</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 亲子共读 |
| <a href="skills/family-education/family-emotion-support/SKILL.md"><code>family-emotion-support</code></a><br>学习情绪支持 Skill | <code>--skill family-emotion-support</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 亲子沟通 |
| <a href="skills/family-education/family-school-readiness/SKILL.md"><code>family-school-readiness</code></a><br>幼小衔接家庭准备 Skill | <code>--skill family-school-readiness</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 入学准备 |

### <a id="language-learning"></a>语言学习<br>Language Learning

面向成人英语、出国考试、口语、听力和长期语言能力提升。

命令参数：<code>--category language-learning</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/language-learning/adult-language-learning/SKILL.md"><code>adult-language-learning</code></a><br>成人语言学习 Skill | <code>--skill adult-language-learning</code> | ✓ | adult | 语言学习 | - | 口语、听力、词汇 | 每日打卡 |
| <a href="skills/language-learning/toefl-prep/SKILL.md"><code>toefl-prep</code></a><br>托福备考 Skill | <code>--skill toefl-prep</code> | ✓ | college<br>adult | 英语 | - | 听力、口语、阅读理解、写作 | 出国考试 |
| <a href="skills/language-learning/ielts-prep/SKILL.md"><code>ielts-prep</code></a><br>雅思备考 Skill | <code>--skill ielts-prep</code> | ✓ | college<br>adult | 英语 | - | 听力、口语、阅读理解、写作 | 出国考试 |

### <a id="career-learning"></a>成人与职业学习<br>Career Learning

面向大学、成人学习、职业技能和考证场景。

命令参数：<code>--category career-learning</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/career-learning/college-data-analysis/SKILL.md"><code>college-data-analysis</code></a><br>数据分析 Skill | <code>--skill college-data-analysis</code> | ✓ | college<br>adult | 计算机 | - | 数据分析 | 职业技能 |
| <a href="skills/career-learning/college-cs-data-structure/SKILL.md"><code>college-cs-data-structure</code></a><br>数据结构 Skill | <code>--skill college-cs-data-structure</code> | ✓ | college | 计算机 | - | 算法、编程 | 课程学习 |
| <a href="skills/career-learning/college-cs-algorithm-interview/SKILL.md"><code>college-cs-algorithm-interview</code></a><br>算法面试 Skill | <code>--skill college-cs-algorithm-interview</code> | ✓ | college<br>adult | 计算机 | - | 算法 | 面试准备 |
| <a href="skills/career-learning/adult-workplace-writing/SKILL.md"><code>adult-workplace-writing</code></a><br>职场写作 Skill | <code>--skill adult-workplace-writing</code> | ✓ | adult | 职业教育 | - | 写作、表达 | 职业技能 |
| <a href="skills/career-learning/adult-vocational-certificate/SKILL.md"><code>adult-vocational-certificate</code></a><br>职业证书备考 Skill | <code>--skill adult-vocational-certificate</code> | ✓ | adult | 职业教育 | - | 知识记忆、考试冲刺 | 考证 |
| <a href="skills/career-learning/college-ai-foundation/SKILL.md"><code>college-ai-foundation</code></a><br>AI 基础 Skill | <code>--skill college-ai-foundation</code> | ✓ | college<br>adult | 计算机 | - | AI 基础 | 兴趣学习 |
| <a href="skills/career-learning/college-cs-python/SKILL.md"><code>college-cs-python</code></a><br>Python 学习 Skill | <code>--skill college-cs-python</code> | ✓ | college<br>adult | 计算机 | - | 编程 | 职业技能 |

### <a id="examples"></a>设计参考<br>Design Examples

需要商业系统数据、组织报表或工具适配层的 Skill 设计参考，不作为默认推荐安装入口。

命令参数：<code>--category examples</code>

| Skill | 命令参数 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/examples/institution-course-package/SKILL.md"><code>institution-course-package</code></a><br>机构课程包 Skill | <code>--skill institution-course-package</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 机构运营 | - | 运营分析 | 机构课程 |
| <a href="skills/examples/school-teacher-usage/SKILL.md"><code>school-teacher-usage</code></a><br>老师使用分析 Skill | <code>--skill school-teacher-usage</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 学校管理 | - | 运营分析 | 数据分析 |
| <a href="skills/examples/institution-teacher-efficiency/SKILL.md"><code>institution-teacher-efficiency</code></a><br>老师效率分析 Skill | <code>--skill institution-teacher-efficiency</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 机构运营 | - | 运营分析 | 数据分析 |
| <a href="skills/examples/school-grade-insight/SKILL.md"><code>school-grade-insight</code></a><br>年级学情洞察 Skill | <code>--skill school-grade-insight</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 学校管理 | - | 运营分析 | 学校测评 |
| <a href="skills/examples/school-resource-planning/SKILL.md"><code>school-resource-planning</code></a><br>校本资源规划 Skill | <code>--skill school-resource-planning</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 学校管理 | - | 运营分析 | 运营配置 |
| <a href="skills/examples/institution-campus-dashboard/SKILL.md"><code>institution-campus-dashboard</code></a><br>校区经营看板 Skill | <code>--skill institution-campus-dashboard</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 机构运营 | - | 运营分析 | 经营分析 |
| <a href="skills/examples/institution-renewal-insight/SKILL.md"><code>institution-renewal-insight</code></a><br>续费风险分析 Skill | <code>--skill institution-renewal-insight</code><br><code>--include-examples</code> | - | primary<br>junior<br>senior<br>adult | 机构运营 | - | 运营分析 | 续费报告 |

## 项目结构

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

## 校验 Skill Pack

在独立包根目录：

```bash
npm run validate
```

校验内容包括：

- `catalog.json` 和 discovery index 名称。
- `catalog.skillCount` 是否等于实际 `SKILL.md` 数量。
- discovery index 是否和 catalog 对齐。
- frontmatter 中的 Skill 名称。
- `source: hermes-edu-skills`。
- `author: zhongwei`。

## 兼容说明

- Hermes Agent：推荐使用 `npm run agent:install -- --tool hermes --config ~/.hermes/config.yaml` 写入 `skills.external_dirs`。
- OpenClaw / Codex / Claude Code：推荐使用 `npm run agent:install -- --tool <tool>` 导出扁平目录，每个 Skill 都是 `<skill-name>/SKILL.md`。
- Cursor：推荐使用 `npm run agent:install -- --tool cursor --workspace <project>` 生成 `.cursor/rules/*.mdc` 和本地 Skill Pack。
- 其它 Agent：推荐使用 `npm run agent:convert -- --tool generic-agent --target <dir>`，再把导出的目录接入目标 Agent 的 Skill / prompt / tool registry。
- 每个 Skill 都是独立可读的 `SKILL.md`，可以直接用于学习、改造或接入自己的 Agent。
- 部分 Skill 中的 workflow 名称是建议接口，具体执行能力取决于你的 Hermes 工具集和运行环境。

## 路线图

- 增加更多 Agent Runtime 的导出适配器。
- 增加常见 Hermes / OpenClaw / Codex Agent 使用示例。
- 持续提升 Skill 质量等级和公开审核状态。
- 增加更多贴合教材/课程体系的知识点覆盖和参数示例。
- 增加可选工具适配器，让需要执行能力的 workflow 可以真正跑起来。
- 在 Hermes 公开 Skill Registry 规范稳定后，探索更便捷的安装方式。

## 参与贡献

欢迎贡献。请先阅读 `CONTRIBUTING.md`。

适合贡献的内容包括：

- 改进某个 `SKILL.md` 的指令。
- 增加新的教育 Skill。
- 改进校验脚本。
- 增加独立 Hermes 用户示例。
- 改进中英文文档。

## 开源协议

MIT，见 `LICENSE`。
