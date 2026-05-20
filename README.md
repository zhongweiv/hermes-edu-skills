# Hermes Edu Skills

中文教育 Agent Skill Pack，Hermes Agent 可直接使用，也支持导出到 OpenClaw、Codex、Cursor、Claude Code 等 AI 工具。

China-focused education Agent Skill Pack for Hermes Agent, with exports for OpenClaw, Codex, Cursor, Claude Code, and other AI tools.

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-177-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[English](README.en.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

Hermes Edu Skills 是一套可直接被 Hermes Agent 识别的开源教育 Skill Pack。当前包含 177 个 Hermes 兼容 Skill，其中 170 个可直接安装使用，7 个作为设计参考，重点面向中国用户真实高频的教育场景。

它不是一个泛泛的 Prompt 合集，而是一套围绕教育 Agent 产品化组织的 Skill 目录：每个 Skill 都有清晰的触发信号、适用角色、参数维度、成熟度标记和 Hermes 可读取的 `SKILL.md`。

如果你正在做教育 Agent、AI 学习助手、AI 老师、教研工具或 Hermes Skill 生态，这个仓库可以直接作为起点。觉得有帮助的话，欢迎 Star，它会帮助更多中文教育 AI 开发者更快找到这个项目。

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
| 这是什么？ | 一套面向 Hermes Agent Runtime 的中文教育 Skill Pack。 |
| 现在有多少？ | 177 个公开 Skill，170 个可安装，7 个设计参考。 |
| 最核心的场景？ | 教材同步、学习计划、拍照答疑、错题复盘、每日练习、考试备考、教师备课、家庭陪伴。 |
| 为什么不是几千个文件？ | 年级、册别、单元、课时、知识点、难度都作为参数传入，避免把用户淹没在海量重复 Skill 中。 |
| 谁适合用？ | Hermes Agent 用户、教育 AI 开发者、老师、教研人员、学校/机构团队。 |
| 怎么开始？ | 默认安装到 Hermes Agent；需要其它工具时再使用 `agent:install -- --tool <tool>`。 |

## 为什么值得关注

- 中国教育场景优先：教材版本、年级册别、单元课时、同步练习、备考复习都是一等公民。
- 产品级分类：不按技术文件夹堆砌，而按用户真正要完成的任务组织。
- 兼容 Hermes Agent：每个 Skill 都是标准 `SKILL.md`，可被 Hermes 直接识别。
- 可读、可改、可扩展：既能直接安装，也能作为教育 Agent Skill 设计参考。
- 公开友好：仓库只包含公开 Skill 文档、索引和校验工具，不包含用户数据、密钥或商业后端实现。

## 你可以用它做什么

- 给本地 Hermes Agent 增加一套中文教育 Skill 库。
- 快速搭建 AI 学习助手、AI 老师、AI 助教、拍照答疑、错题复盘等教育 Agent 原型。
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
- 分类围绕用户任务组织：教材同步、学习核心、每日练习、考试备考、教师工具、家庭教育。
- 每个 Skill 都包含 Hermes frontmatter、适用场景、调用信号和工作流名称。
- 新增 Skill 成熟度和独立使用标记，方便判断哪些已精品打磨、哪些仍需工具或上下文。
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
npm run agent:install -- --tool hermes --config ~/.hermes/config.yaml
```

只安装一个 Skill 到 Hermes Agent：

```bash
npm run agent:install -- --tool hermes --skill agent-study-plan --config ~/.hermes/config.yaml
```

如果你只想先查看需要写入的 Hermes 配置：

```bash
npm run agent:install -- --tool hermes
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
| Hermes 单个 Skill | `npm run agent:install -- --tool hermes --skill agent-study-plan --config ~/.hermes/config.yaml` |
| OpenClaw 单个 Skill | `npm run agent:install -- --tool openclaw --skill primary-math-mental-arithmetic` |
| Codex 单个 Skill | `npm run agent:install -- --tool codex --skill agent-socratic-tutor` |
| Cursor 单个 Skill | `npm run agent:install -- --tool cursor --workspace /path/to/project --skill agent-study-plan` |
| 通用 Agent 单个 Skill | `npm run agent:convert -- --tool generic-agent --skill agent-study-plan --target ./dist/one-skill` |

一次安装多个 Skill：

```bash
npm run agent:install -- --tool openclaw --skill agent-study-plan,agent-mistake-review
```

如果不确定 slug，可以先在 README 的 Skill 表格中点击查看，或在 `catalog.json` 中搜索 `slug`。

## 导出给其它 AI 工具或 Agent

如果你使用的不是 Hermes Agent，也可以把这套 Skill Pack 转成其它工具更容易识别的目录结构。核心原则是：`skills/` 保持 Hermes 原生格式，`agent-pack` 负责复制、扁平化或生成目标工具规则。

| 目标工具 | 命令 | 输出/安装位置 |
| --- | --- | --- |
| OpenClaw | `npm run agent:install -- --tool openclaw` | `~/.openclaw/skills/<skill-name>/SKILL.md` |
| Codex | `npm run agent:install -- --tool codex` | `$CODEX_HOME/skills` 或 `~/.codex/skills` |
| Claude Code | `npm run agent:install -- --tool claude-code` | `~/.claude/skills/<skill-name>/SKILL.md` |
| Claude Code 项目级 | `npm run agent:install -- --tool claude-code --workspace .` | `.claude/skills/<skill-name>/SKILL.md` |
| Cursor | `npm run agent:install -- --tool cursor --workspace /path/to/project` | `.cursor/rules/*.mdc` + `.cursor/hermes-edu-skills` |
| 通用 Agent | `npm run agent:convert -- --tool generic-agent --target ./dist/agent-skills` | `AGENT_SKILL_PACK.json` + `<skill-name>/SKILL.md` |

只转换 OpenClaw 格式，不安装到默认目录：

```bash
npm run agent:convert -- --tool openclaw --target ./dist/openclaw-skills
```

只导出某一个分类，例如教材同步：

```bash
npm run agent:convert -- --tool openclaw --category textbook-sync --target ./dist/textbook-sync-skills
```

包含设计参考类 examples：

```bash
npm run agent:convert -- --tool generic-agent --target ./dist/all-agent-skills --include-examples
```

旧命令仍可使用，兼容早期文档：

```bash
npm run install:hermes
npm run install:openclaw
npm run export:agents
```

## 技能分类总览

先从这些一级分类进入。每个分类下面仍保留完整可点击 Skill 表格，方便浏览、检索和二次集成。

| 分类 | 适用场景 | 数量 |
| --- | --- | ---: |
| [教材同步 Textbook Sync](#textbook-sync) | 面向中国教材版本、年级、册别、单元、课时和知识点的同步学习能力。年级、册别、单元和难度作为参数传入，不再拆成大量独立 Skill。 | 41 |
| [学习核心能力 Learning Core](#learning-core) | 学习计划、拍照答疑、错题复盘、学情报告等通用学习闭环能力。 | 15 |
| [每日练习 Daily Practice](#daily-practice) | 面向每天短时高频训练，例如口算、听写、背诵、词汇、快速巩固。 | 28 |
| [阅读写作 Reading & Writing](#reading-writing) | 面向语文、英语、学术和职场表达的阅读与写作能力。 | 10 |
| [考试备考 Exam Prep](#exam-prep) | 面向期末、中考、高考、考研、四六级、考证和公务员等备考场景。 | 27 |
| [老师工具 Teacher Tools](#teacher-tools) | 面向老师备课、作业生成、班级分析和家校沟通。 | 31 |
| [家庭教育 Family Education](#family-education) | 面向家长陪伴、亲子阅读、作业习惯和家庭沟通。 | 8 |
| [语言学习 Language Learning](#language-learning) | 面向成人英语、出国考试、口语、听力和长期语言能力提升。 | 3 |
| [成人与职业学习 Career Learning](#career-learning) | 面向大学、成人学习、职业技能和考证场景。 | 7 |
| [设计参考 Examples](#examples) | 需要商业系统数据、组织报表或工具适配层的 Skill 设计参考，不作为默认推荐安装入口。 | 7 |

## 覆盖范围

| 分类 | 主要领域 | 数量 |
| --- | --- | ---: |
| [教材同步 Textbook Sync](#textbook-sync) | 生物、数学、化学、物理、地理 | 41 |
| [学习核心能力 Learning Core](#learning-core) | 学习能力、综合 | 15 |
| [每日练习 Daily Practice](#daily-practice) | 地理、化学、历史、生物、数学 | 28 |
| [阅读写作 Reading & Writing](#reading-writing) | 语文、英语、通识 | 10 |
| [考试备考 Exam Prep](#exam-prep) | 地理、化学、历史、生物、数学 | 27 |
| [老师工具 Teacher Tools](#teacher-tools) | 教学管理、地理、化学、历史、生物 | 31 |
| [家庭教育 Family Education](#family-education) | 家庭教育 | 8 |
| [语言学习 Language Learning](#language-learning) | 语言学习、英语 | 3 |
| [成人与职业学习 Career Learning](#career-learning) | 计算机、职业教育 | 7 |
| [设计参考 Examples](#examples) | 机构运营、学校管理 | 7 |

## 全部 Skill 列表

下面的表格列出了当前全部 177 个公开 Skill。点击 Skill 名称可以直接进入对应的 `SKILL.md`。

### <a id="textbook-sync"></a>教材同步 Textbook Sync

面向中国教材版本、年级、册别、单元、课时和知识点的同步学习能力。年级、册别、单元和难度作为参数传入，不再拆成大量独立 Skill。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [北师大版初中生物同步 Skill](skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 生物 | 北师大版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [北师大版初中数学同步 Skill](skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 数学 | 北师大版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [北师大版高中生物同步 Skill](skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 生物 | 北师大版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [北师大版高中数学同步 Skill](skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 数学 | 北师大版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [北师大版小学数学同步 Skill](skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 数学 | 北师大版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| [鲁科版初中化学同步 Skill](skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 化学 | 鲁科版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [鲁科版初中物理同步 Skill](skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 物理 | 鲁科版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [鲁科版高中化学同步 Skill](skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 化学 | 鲁科版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [鲁科版高中物理同步 Skill](skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 物理 | 鲁科版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教版初中地理同步 Skill](skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 地理 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [人教版初中化学同步 Skill](skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 化学 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [人教版初中生物同步 Skill](skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 生物 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [人教版初中数学同步 Skill](skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 数学 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [人教版初中物理同步 Skill](skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 物理 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [人教版初中英语同步 Skill](skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 英语 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [人教版高中地理同步 Skill](skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 地理 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教版高中化学同步 Skill](skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 化学 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教版高中生物同步 Skill](skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 生物 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教版高中物理同步 Skill](skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 物理 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教版高中英语同步 Skill](skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 英语 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、阅读理解、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教版小学数学同步 Skill](skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 数学 | 人教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| [人教A版高中数学同步 Skill](skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 数学 | 人教A版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教B版高中数学同步 Skill](skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 数学 | 人教B版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [人教PEP版小学英语同步 Skill](skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 英语 | 人教PEP版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| [苏教版初中数学同步 Skill](skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 数学 | 苏教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [苏教版小学数学同步 Skill](skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 数学 | 苏教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| [统编版初中历史同步 Skill](skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 历史 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [统编版初中语文同步 Skill](skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 语文 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、阅读理解、写作表达 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [统编版初中政治同步 Skill](skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 政治 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [统编版高中历史同步 Skill](skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 历史 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [统编版高中语文同步 Skill](skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 语文 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、文言文、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [统编版高中政治同步 Skill](skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 政治 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [统编版小学语文同步 Skill](skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 语文 | 统编版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、阅读理解、写作表达 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| [外研版初中英语同步 Skill](skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 英语 | 外研版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [外研版高中英语同步 Skill](skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 英语 | 外研版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、阅读理解、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [外研版小学英语同步 Skill](skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 英语 | 外研版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| [湘教版初中地理同步 Skill](skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 地理 | 湘教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [湘教版高中地理同步 Skill](skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 地理 | 湘教版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| [译林版初中英语同步 Skill](skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | junior | 英语 | 译林版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| [译林版小学英语同步 Skill](skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 英语 | 译林版 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| [幼小衔接通用学前综合同步 Skill](skills/textbook-sync/preschool-general-readiness-textbook-sync/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool | 综合 | 幼小衔接通用 | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 启蒙学习、习惯培养 | 每日启蒙、亲子共学、入学准备 |

### <a id="learning-core"></a>学习核心能力 Learning Core

学习计划、拍照答疑、错题复盘、学情报告等通用学习闭环能力。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [薄弱项提升 Skill](skills/learning-core/agent-weakness-boost/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 查漏补缺 | 专项训练 |
| [错题复盘 Skill](skills/learning-core/agent-mistake-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 错题订正、复习计划 | 错题订正、单元复习 |
| [复习助手 Skill](skills/learning-core/agent-review-assistant/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [寒暑假提升 Skill](skills/learning-core/agent-holiday-plan/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 假期计划 | 寒暑假提升 |
| [记忆方法 Skill](skills/learning-core/agent-memory-method/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 记忆 | 背诵记忆 |
| [课前预习 Skill](skills/learning-core/agent-preview-assistant/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 预习 | 课前预习 |
| [每周复盘 Skill](skills/learning-core/agent-weekly-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阶段复盘 | 学习报告 |
| [拍照答疑 Skill](skills/learning-core/agent-photo-question/SKILL.md) | 精品打磨 | 需工具支持 | primary、junior、senior | 综合 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | AI 讲题、图片识题 | 拍照答疑、课后作业 |
| [启发式讲解 Skill](skills/learning-core/agent-socratic-tutor/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 启发提问 | AI 讲题 |
| [学情报告 Skill](skills/learning-core/agent-learning-report/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 学情报告、学习建议 | 学习报告、家长沟通 |
| [学习计划 Skill](skills/learning-core/agent-study-plan/SKILL.md) | 精品打磨 | 需用户补充上下文 | preschool、primary、junior、senior、college、adult | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 学习计划、目标管理 | 今日学习、寒暑假提升、考前规划 |
| [学习习惯 Skill](skills/learning-core/agent-learning-habit/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 习惯培养 | 每日打卡 |
| [专注力训练 Skill](skills/learning-core/agent-focus-training/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 专注 | 每日打卡 |
| [作业陪伴 Skill](skills/learning-core/agent-homework-companion/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业陪伴 | 课后作业 |
| [AI 讲题 Skill](skills/learning-core/agent-question-explanation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior、college | 学习能力 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | AI 讲题、举一反三 | 课后作业、同步巩固 |

### <a id="daily-practice"></a>每日练习 Daily Practice

面向每天短时高频训练，例如口算、听写、背诵、词汇、快速巩固。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [初中地理快速巩固 Skill](skills/daily-practice/junior-geography-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中化学快速巩固 Skill](skills/daily-practice/junior-chemistry-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中历史快速巩固 Skill](skills/daily-practice/junior-history-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中生物快速巩固 Skill](skills/daily-practice/junior-biology-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中数学快速巩固 Skill](skills/daily-practice/junior-math-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中数学每日练 Skill](skills/daily-practice/junior-math-daily-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 计算、函数、几何 | 每日打卡、专项训练 |
| [初中物理快速巩固 Skill](skills/daily-practice/junior-physics-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中英语词汇每日练 Skill](skills/daily-practice/junior-english-vocabulary-daily/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 词汇 | 每日打卡、中考复习 |
| [初中英语快速巩固 Skill](skills/daily-practice/junior-english-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中语文快速巩固 Skill](skills/daily-practice/junior-chinese-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [初中政治快速巩固 Skill](skills/daily-practice/junior-politics-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中地理快速巩固 Skill](skills/daily-practice/senior-geography-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中化学快速巩固 Skill](skills/daily-practice/senior-chemistry-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中历史快速巩固 Skill](skills/daily-practice/senior-history-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中生物快速巩固 Skill](skills/daily-practice/senior-biology-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中数学快速巩固 Skill](skills/daily-practice/senior-math-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中物理快速巩固 Skill](skills/daily-practice/senior-physics-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中英语词汇每日练 Skill](skills/daily-practice/senior-english-vocabulary-daily/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 词汇 | 每日打卡、高考复习 |
| [高中英语快速巩固 Skill](skills/daily-practice/senior-english-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中语文快速巩固 Skill](skills/daily-practice/senior-chinese-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [高中政治快速巩固 Skill](skills/daily-practice/senior-politics-quick-practice/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| [小学课文古诗背诵 Skill](skills/daily-practice/primary-chinese-recitation-daily/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 背诵、朗读 | 背诵记忆、每日打卡 |
| [小学口算速练 Skill](skills/daily-practice/primary-math-mental-arithmetic/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 计算、数感 | 口算速练、每日打卡 |
| [小学英语单词每日练 Skill](skills/daily-practice/primary-english-vocabulary-daily/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 词汇、默写 | 每日打卡、听写默写 |
| [小学语文字词听写 Skill](skills/daily-practice/primary-chinese-dictation-daily/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 听写、默写 | 听写默写、每日打卡 |
| [小学阅读每日练 Skill](skills/daily-practice/primary-reading-daily/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阅读理解 | 阅读训练、每日打卡 |
| [学前识字每日练 Skill](skills/daily-practice/preschool-literacy-daily/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 识字 | 每日启蒙、每日打卡 |
| [学前数感每日练 Skill](skills/daily-practice/preschool-number-sense-daily/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 数感 | 数感游戏、每日打卡 |

### <a id="reading-writing"></a>阅读写作 Reading & Writing

面向语文、英语、学术和职场表达的阅读与写作能力。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [初中现代文阅读 Skill](skills/reading-writing/junior-chinese-modern-reading/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阅读理解 | 中考复习 |
| [初中英语写作 Skill](skills/reading-writing/junior-english-writing/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作 | 中考复习 |
| [初中作文提升 Skill](skills/reading-writing/junior-chinese-composition/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作 | 写作提升 |
| [高中英语写作 Skill](skills/reading-writing/senior-english-writing/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作 | 高考复习 |
| [高中语文阅读 Skill](skills/reading-writing/senior-chinese-reading/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阅读理解 | 高考复习 |
| [高中作文提升 Skill](skills/reading-writing/senior-chinese-essay/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作 | 写作提升 |
| [小学英语阅读 Skill](skills/reading-writing/primary-english-reading/SKILL.md) | 增强可用 | 需用户补充上下文 | primary | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阅读理解 | 阅读训练 |
| [小学语文阅读理解 Skill](skills/reading-writing/primary-chinese-reading/SKILL.md) | 增强可用 | 需用户补充上下文 | primary | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阅读理解 | 阅读训练 |
| [小学作文提升 Skill](skills/reading-writing/primary-chinese-writing/SKILL.md) | 增强可用 | 需用户补充上下文 | primary | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作、表达 | 写作提升 |
| [学术写作 Skill](skills/reading-writing/college-academic-writing/SKILL.md) | 增强可用 | 需用户补充上下文 | college | 通识 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作 | 论文训练 |

### <a id="exam-prep"></a>考试备考 Exam Prep

面向期末、中考、高考、考研、四六级、考证和公务员等备考场景。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [初中地理考试复习 Skill](skills/exam-prep/junior-geography-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中化学考试复习 Skill](skills/exam-prep/junior-chemistry-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中历史考试复习 Skill](skills/exam-prep/junior-history-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中生物考试复习 Skill](skills/exam-prep/junior-biology-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中数学考试复习 Skill](skills/exam-prep/junior-math-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中物理考试复习 Skill](skills/exam-prep/junior-physics-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中英语考试复习 Skill](skills/exam-prep/junior-english-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中语文考试复习 Skill](skills/exam-prep/junior-chinese-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [初中政治考试复习 Skill](skills/exam-prep/junior-politics-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| [大学英语六级备考 Skill](skills/exam-prep/college-cet6-sprint/SKILL.md) | 增强可用 | 需用户补充上下文 | college | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 词汇、听力、阅读理解、写作 | 考前冲刺 |
| [大学英语四级备考 Skill](skills/exam-prep/college-cet4-sprint/SKILL.md) | 增强可用 | 需用户补充上下文 | college | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 词汇、听力、阅读理解、写作 | 考前冲刺 |
| [高考冲刺 Skill](skills/exam-prep/senior-gaokao-sprint/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 综合 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试冲刺 | 高考复习、考前冲刺 |
| [高中地理考试复习 Skill](skills/exam-prep/senior-geography-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中化学考试复习 Skill](skills/exam-prep/senior-chemistry-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中历史考试复习 Skill](skills/exam-prep/senior-history-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中生物考试复习 Skill](skills/exam-prep/senior-biology-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中数学考试复习 Skill](skills/exam-prep/senior-math-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中物理考试复习 Skill](skills/exam-prep/senior-physics-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中英语考试复习 Skill](skills/exam-prep/senior-english-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中语文考试复习 Skill](skills/exam-prep/senior-chinese-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [高中政治考试复习 Skill](skills/exam-prep/senior-politics-exam-review/SKILL.md) | 增强可用 | 需用户补充上下文 | senior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| [公务员申论 Skill](skills/exam-prep/civil-service-essay/SKILL.md) | 增强可用 | 需用户补充上下文 | adult | 职业教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 材料阅读、写作 | 考证、写作提升 |
| [公务员行测 Skill](skills/exam-prep/civil-service-aptitude/SKILL.md) | 增强可用 | 需用户补充上下文 | adult | 职业教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 逻辑、数据分析 | 考证、专项训练 |
| [教师资格证备考 Skill](skills/exam-prep/teacher-certification-sprint/SKILL.md) | 增强可用 | 需用户补充上下文 | adult | 职业教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试冲刺 | 考证 |
| [考研英语备考 Skill](skills/exam-prep/postgraduate-english-sprint/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 阅读理解、翻译、写作 | 考研复习 |
| [小学期末复习 Skill](skills/exam-prep/primary-final-review/SKILL.md) | 增强可用 | 需用户补充上下文 | primary | 综合 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试复习 | 期中期末复习 |
| [中考冲刺 Skill](skills/exam-prep/junior-zhongkao-sprint/SKILL.md) | 增强可用 | 需用户补充上下文 | junior | 综合 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 考试冲刺 | 中考复习、考前冲刺 |

### <a id="teacher-tools"></a>老师工具 Teacher Tools

面向老师备课、作业生成、班级分析和家校沟通。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [班级学情分析 Lite Skill](skills/teacher-tools/teacher-class-analysis-lite/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 教学管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 学情分析 | 学情分析 |
| [地理备课 Skill](skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [地理单元复习 Skill](skills/teacher-tools/teacher-geography-unit-review/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [地理作业生成 Skill](skills/teacher-tools/teacher-geography-homework-generation/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 地理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [化学备课 Skill](skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [化学单元复习 Skill](skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [化学作业生成 Skill](skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 化学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [家长反馈报告 Lite Skill](skills/teacher-tools/teacher-parent-report-lite/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 教学管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 报告生成 | 家长沟通 |
| [老师备课 Skill](skills/teacher-tools/teacher-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 教学管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计、学情分析 | 老师备课 |
| [历史备课 Skill](skills/teacher-tools/teacher-history-lesson-planning/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [历史单元复习 Skill](skills/teacher-tools/teacher-history-unit-review/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [历史作业生成 Skill](skills/teacher-tools/teacher-history-homework-generation/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 历史 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [生物备课 Skill](skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [生物单元复习 Skill](skills/teacher-tools/teacher-biology-unit-review/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [生物作业生成 Skill](skills/teacher-tools/teacher-biology-homework-generation/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 生物 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [数学备课 Skill](skills/teacher-tools/teacher-math-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [数学单元复习 Skill](skills/teacher-tools/teacher-math-unit-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [数学作业生成 Skill](skills/teacher-tools/teacher-math-homework-generation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 数学 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [物理备课 Skill](skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [物理单元复习 Skill](skills/teacher-tools/teacher-physics-unit-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [物理作业生成 Skill](skills/teacher-tools/teacher-physics-homework-generation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 物理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [英语备课 Skill](skills/teacher-tools/teacher-english-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [英语单元复习 Skill](skills/teacher-tools/teacher-english-unit-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [英语作业生成 Skill](skills/teacher-tools/teacher-english-homework-generation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [语文备课 Skill](skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [语文单元复习 Skill](skills/teacher-tools/teacher-chinese-unit-review/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [语文作业生成 Skill](skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 语文 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [政治备课 Skill](skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 教学设计 | 老师备课 |
| [政治单元复习 Skill](skills/teacher-tools/teacher-politics-unit-review/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 复习计划 | 单元复习 |
| [政治作业生成 Skill](skills/teacher-tools/teacher-politics-homework-generation/SKILL.md) | 增强可用 | 需用户补充上下文 | primary、junior、senior | 政治 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成 | 班级作业 |
| [作业生成 Skill](skills/teacher-tools/teacher-homework-generation/SKILL.md) | 精品打磨 | 需用户补充上下文 | primary、junior、senior | 教学管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 作业生成、分层练习 | 班级作业 |

### <a id="family-education"></a>家庭教育 Family Education

面向家长陪伴、亲子阅读、作业习惯和家庭沟通。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [家庭作业习惯 Skill](skills/family-education/family-homework-routine/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 作业陪伴 |
| [家校沟通准备 Skill](skills/family-education/family-school-communication/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 家长沟通 |
| [家长陪学 Skill](skills/family-education/agent-parent-companion/SKILL.md) | 精品打磨 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议、目标管理 | 家长陪学 |
| [假期家庭学习 Skill](skills/family-education/family-holiday-learning/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 寒暑假提升 |
| [屏幕时间管理 Skill](skills/family-education/family-screen-time-balance/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 习惯培养 |
| [亲子阅读陪伴 Skill](skills/family-education/family-reading-companion/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 亲子共读 |
| [学习情绪支持 Skill](skills/family-education/family-emotion-support/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 亲子沟通 |
| [幼小衔接家庭准备 Skill](skills/family-education/family-school-readiness/SKILL.md) | 增强可用 | 需用户补充上下文 | preschool、primary、junior | 家庭教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 陪学建议 | 入学准备 |

### <a id="language-learning"></a>语言学习 Language Learning

面向成人英语、出国考试、口语、听力和长期语言能力提升。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [成人语言学习 Skill](skills/language-learning/adult-language-learning/SKILL.md) | 增强可用 | 需用户补充上下文 | adult | 语言学习 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 口语、听力、词汇 | 每日打卡 |
| [托福备考 Skill](skills/language-learning/toefl-prep/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 听力、口语、阅读理解、写作 | 出国考试 |
| [雅思备考 Skill](skills/language-learning/ielts-prep/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 英语 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 听力、口语、阅读理解、写作 | 出国考试 |

### <a id="career-learning"></a>成人与职业学习 Career Learning

面向大学、成人学习、职业技能和考证场景。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [数据分析 Skill](skills/career-learning/college-data-analysis/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 计算机 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 数据分析 | 职业技能 |
| [数据结构 Skill](skills/career-learning/college-cs-data-structure/SKILL.md) | 增强可用 | 需用户补充上下文 | college | 计算机 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 算法、编程 | 课程学习 |
| [算法面试 Skill](skills/career-learning/college-cs-algorithm-interview/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 计算机 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 算法 | 面试准备 |
| [职场写作 Skill](skills/career-learning/adult-workplace-writing/SKILL.md) | 增强可用 | 需用户补充上下文 | adult | 职业教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 写作、表达 | 职业技能 |
| [职业证书备考 Skill](skills/career-learning/adult-vocational-certificate/SKILL.md) | 增强可用 | 需用户补充上下文 | adult | 职业教育 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 知识记忆、考试冲刺 | 考证 |
| [AI 基础 Skill](skills/career-learning/college-ai-foundation/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 计算机 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | AI 基础 | 兴趣学习 |
| [Python 学习 Skill](skills/career-learning/college-cs-python/SKILL.md) | 增强可用 | 需用户补充上下文 | college、adult | 计算机 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 编程 | 职业技能 |

### <a id="examples"></a>设计参考 Examples

需要商业系统数据、组织报表或工具适配层的 Skill 设计参考，不作为默认推荐安装入口。

| Skill | 成熟度 | 独立使用 | 阶段 | 学科/领域 | 教材 | 参数 | 能力 | 场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [机构课程包 Skill](skills/examples/institution-course-package/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 机构运营 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 机构课程 |
| [老师使用分析 Skill](skills/examples/school-teacher-usage/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 学校管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 数据分析 |
| [老师效率分析 Skill](skills/examples/institution-teacher-efficiency/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 机构运营 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 数据分析 |
| [年级学情洞察 Skill](skills/examples/school-grade-insight/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 学校管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 学校测评 |
| [校本资源规划 Skill](skills/examples/school-resource-planning/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 学校管理 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 运营配置 |
| [校区经营看板 Skill](skills/examples/institution-campus-dashboard/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 机构运营 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 经营分析 |
| [续费风险分析 Skill](skills/examples/institution-renewal-insight/SKILL.md) | 增强可用 | 需工具支持 | primary、junior、senior、adult | 机构运营 | - | grade、semester、unit、lesson、knowledgePointCodes、scenario、difficulty | 运营分析 | 续费报告 |

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
