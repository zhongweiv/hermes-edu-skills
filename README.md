# Hermes Edu Skills

让 Hermes Agent 和主流 AI 工具拥有中国教育场景能力的开源 Agent Skill Pack：教材同步、备考复习、错题复盘、每日练习、亲子陪学、阅读写作和教师工作流。

An open Agent Skill Pack that gives Hermes Agent and mainstream AI tools China-focused education capabilities: textbook sync, exam prep, mistake review, daily practice, family learning, reading/writing, and teacher workflows.

[![Release](https://img.shields.io/github/v/release/zhongweiv/hermes-edu-skills?label=release)](https://github.com/zhongweiv/hermes-edu-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Hermes%20Skills-170-blue)](catalog.json)
[![Validate](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/zhongweiv/hermes-edu-skills/actions/workflows/validate.yml)

[English](README.en.md) · [Skill Catalog](catalog.json) · [Discovery Index](.well-known/skills/index.json) · [Shineway](https://www.shineway.tech/)

<p align="center">
  <img src="assets/demo.gif" alt="Hermes Edu Skills demo: install education skills and use them in Hermes Agent" width="860">
</p>

Hermes Edu Skills 是一套面向中国教育场景的开源 Agent Skill Pack。它把教材同步、考试备考、拍照答疑、错题复盘、每日练习、阅读写作、亲子陪学、教师备课和家校沟通，整理成 170 个可浏览、可安装、可二次开发的产品级 Skill。

它不是 Prompt 合集，而是可被 Hermes Agent 识别的结构化能力库：每个 Skill 都有触发信号、适用角色、参数维度、使用边界和标准 `SKILL.md`。你可以直接装进 Hermes Agent，也可以导出给 OpenClaw、Codex、Cursor、Claude Code 或其它 Agent 工具。

如果你正在做 AI 学习助手、AI 老师、教研工具、家长陪学产品、题库/错题产品，或者只是想让自己的本地 Agent 更懂中国教材和学习场景，这个仓库可以直接作为起点。觉得有帮助的话，欢迎 Star，它会帮助更多中文教育 AI 开发者更快发现这个项目。

## 导航

- [5 分钟上手](#5-分钟上手)
- [这是什么](#这是什么)
- [为什么不是 Prompt 集合](#为什么不是-prompt-集合)
- [谁适合用](#谁适合用)
- [分类总览](#分类总览)
- [默认使用：Hermes Agent](#默认使用hermes-agent)
- [自动匹配并运行 Skill](#自动匹配并运行-skill)
- [只安装单个 Skill](#只安装单个-skill)
- [导出给其它 AI 工具或 Agent](#导出给其它-ai-工具或-agent)
- [覆盖范围](#覆盖范围)
- [全部 Skill 列表](#全部-skill-列表)
- [参与贡献](#参与贡献)
- [路线图](#路线图)

## 5 分钟上手

默认目标是 Hermes Agent。第一次试用建议先安装一个分类或一个 Skill，确认效果后再安装全部。

```bash
# 安装全部 170 个可用 Skill 到 Hermes Agent
npx hermes-edu-skills install hermes --config ~/.hermes/config.yaml

# 只安装教材同步分类
npx hermes-edu-skills install hermes textbook-sync --config ~/.hermes/config.yaml

# 只安装一个 Skill
npx hermes-edu-skills install hermes agent-study-plan --config ~/.hermes/config.yaml

# 搜索你需要的能力
npx hermes-edu-skills search 错题
npx hermes-edu-skills info agent-mistake-review

# 像普通 Agent 一样直接提问：先显示匹配到的 Skill，再调用 Hermes
npx hermes-edu-skills ask "帮我出5道八年级下册物理力学选择题"
```

导出给其它 Agent 或 AI 工具：

```bash
npx hermes-edu-skills install openclaw
npx hermes-edu-skills install codex
npx hermes-edu-skills install claude
npx hermes-edu-skills install cursor --workspace /path/to/project
npx hermes-edu-skills export generic --target ./dist/agent-skills
```

## 这是什么

| 问题 | 答案 |
| --- | --- |
| 这是什么 | 面向中国教育场景的开源 Agent Skill Pack。 |
| 为什么需要 | 通用 Agent 通常不理解中国教材版本、年级册别、单元节奏、考试体系和家庭/教师真实工作流。 |
| 怎么实现 | 用 170 个结构化 `SKILL.md` 把教育任务封装成 Agent 可发现、可调用、可安装的能力。 |
| 默认平台 | Hermes Agent。 |
| 可导出平台 | OpenClaw、Codex、Cursor、Claude Code、Generic Agent。 |
| 开源内容 | 公开 Skill 文档、索引、校验工具和导出工具；不包含用户数据、密钥或商业后端实现。 |

## 为什么不是 Prompt 集合

| 能力 | Prompt 集合 | 通用 Agent Skills | Hermes Edu Skills |
| --- | :---: | :---: | :---: |
| 中国教材版本对齐 | - | 通常不支持 | 支持人教、统编、北师大、苏教、鲁科等教育场景 |
| 年级/册别/单元/难度 | 靠手写提示词 | 部分支持 | 作为 Skill 参数和工作流约束 |
| 真实教育任务 | 松散模板 | 通用能力 | 教材同步、错题复盘、备考复习、每日练习、教师工具 |
| Hermes 原生识别 | - | 不一定 | 标准 `SKILL.md` |
| 多 Agent 复用 | - | 不一定 | 可导出到 OpenClaw、Codex、Cursor、Claude Code |
| 中文教育表达 | 不稳定 | 不稳定 | 围绕中国学生、家长、老师和教研场景编写 |
| 二次开发 | 低 | 中 | 有目录、索引、校验和安装工具 |

## 谁适合用

| 你是谁 | 推荐先看 | 可以得到什么 |
| --- | --- | --- |
| Hermes Agent 用户 | [默认使用：Hermes Agent](#默认使用hermes-agent)、[学习核心能力](#learning-core) | 直接把中文教育 Skill 加到本地 Agent。 |
| 教育 AI 开发者 | [项目结构](#项目结构)、[兼容说明](#兼容说明) | 复用 Skill 结构、参数设计和工作流命名。 |
| 老师 / 教研人员 | [老师工具](#teacher-tools)、[教材同步](#textbook-sync) | 参考备课、作业生成、单元复习和同步教学设计。 |
| 家长 / 家庭教育产品 | [家庭教育](#family-education)、[每日练习](#daily-practice) | 构建陪伴、阅读、习惯和每日训练场景。 |
| 学校 / 教培机构 | [老师工具](#teacher-tools)、[考试备考](#exam-prep) | 了解备课、作业、班级分析、复习和教学支持产品形态。 |

## 分类总览

当前包含 170 个可安装 Skill，覆盖 9 个产品级分类。年级、册别、单元、课时、知识点和难度作为参数传入，不再拆成海量重复 Skill。

| 分类 | 安装选择器 | 适用场景 | 数量 |
| --- | --- | --- | ---: |
| <a href="#textbook-sync"><code>textbook-sync</code></a><br>教材同步 | <code>npx: textbook-sync</code><br><code>npm: --category textbook-sync</code> | 面向中国教材版本、年级、册别、单元、课时和知识点的同步学习能力。年级、册别、单元和难度作为参数传入，不再拆成大量独立 Skill。 | 41 |
| <a href="#learning-core"><code>learning-core</code></a><br>学习核心能力 | <code>npx: learning-core</code><br><code>npm: --category learning-core</code> | 学习计划、拍照答疑、错题复盘、学情报告等通用学习闭环能力。 | 15 |
| <a href="#daily-practice"><code>daily-practice</code></a><br>每日练习 | <code>npx: daily-practice</code><br><code>npm: --category daily-practice</code> | 面向每天短时高频训练，例如口算、听写、背诵、词汇、快速巩固。 | 28 |
| <a href="#reading-writing"><code>reading-writing</code></a><br>阅读写作 | <code>npx: reading-writing</code><br><code>npm: --category reading-writing</code> | 面向语文、英语、学术和职场表达的阅读与写作能力。 | 10 |
| <a href="#exam-prep"><code>exam-prep</code></a><br>考试备考 | <code>npx: exam-prep</code><br><code>npm: --category exam-prep</code> | 面向期末、中考、高考、考研、四六级、考证和公务员等备考场景。 | 27 |
| <a href="#teacher-tools"><code>teacher-tools</code></a><br>老师工具 | <code>npx: teacher-tools</code><br><code>npm: --category teacher-tools</code> | 面向老师备课、作业生成、班级分析和家校沟通。 | 31 |
| <a href="#family-education"><code>family-education</code></a><br>家庭教育 | <code>npx: family-education</code><br><code>npm: --category family-education</code> | 面向家长陪伴、亲子阅读、作业习惯和家庭沟通。 | 8 |
| <a href="#language-learning"><code>language-learning</code></a><br>语言学习 | <code>npx: language-learning</code><br><code>npm: --category language-learning</code> | 面向成人英语、出国考试、口语、听力和长期语言能力提升。 | 3 |
| <a href="#career-learning"><code>career-learning</code></a><br>成人与职业学习 | <code>npx: career-learning</code><br><code>npm: --category career-learning</code> | 面向大学、成人学习、职业技能和考证场景。 | 7 |

## 发起与维护

本项目由 [长沙欣慰科技](https://www.shineway.tech/) 发起并维护。

我们希望把可复用的教育 Agent Skill 设计开放出来，和开发者、老师、教研人员、学校及教育机构一起探索更适合中国教育场景的智能体能力。本仓库只包含公开 Skill 文档、索引、校验和导出工具，不包含用户数据或后端服务实现。

如果这个项目对你有帮助，欢迎给一个 Star；这会让更多中文教育 AI 开发者、老师和 Agent 用户更快找到它。

## 默认使用：Hermes Agent

Hermes Edu Skills 的默认目标是 Hermes Agent。仓库中的 `skills/` 目录就是标准 Skill 源目录，不需要先转换格式。推荐优先使用正式 CLI；如果你是从 GitHub 源码运行，也可以继续使用下方源码模式命令。

如果你的环境暂时无法通过 `npx` 获取包，请直接使用后面的源码模式。

方法一：正式 CLI 安装（推荐）

```bash
npx hermes-edu-skills install hermes --config ~/.hermes/config.yaml
```

安装某个分类，例如教材同步：

```bash
npx hermes-edu-skills install hermes textbook-sync --config ~/.hermes/config.yaml
npx hermes-edu-skills install hermes 教材同步 --config ~/.hermes/config.yaml
```

只安装一个 Skill 到 Hermes Agent：

```bash
npx hermes-edu-skills install hermes agent-study-plan --config ~/.hermes/config.yaml
```

先浏览和搜索：

```bash
npx hermes-edu-skills list
npx hermes-edu-skills list textbook-sync
npx hermes-edu-skills search 错题
npx hermes-edu-skills info agent-mistake-review
```

安装后，如果你希望“问相关题目时自动看到正在使用哪个 Skill”，可以使用内置 Skill Router：

```bash
# 只查看匹配结果，不调用 Hermes
npx hermes-edu-skills match "八年级下册物理力学题"

# 自动匹配 Skill，并调用官方 Hermes Agent
npx hermes-edu-skills ask "帮我出5道八年级下册物理力学选择题"
```

`ask` 会先打印类似 `Using Skill: junior-physics-rj-textbook-sync` 的信息，再执行 `hermes chat -s <skill> -q <question>`。如果你需要查看 Hermes 详细输出，可以加 `--verbose`；如果你的 Hermes 命令不叫 `hermes`，可以加 `--hermes-bin <path>`。

方法二：源码模式安装（从 GitHub clone 后使用）

```bash
git clone https://github.com/zhongweiv/hermes-edu-skills.git
cd hermes-edu-skills
npm run validate
npm run install:hermes -- --config ~/.hermes/config.yaml
npm run install:hermes -- --category textbook-sync --config ~/.hermes/config.yaml
npm run install:hermes -- --skill agent-study-plan --config ~/.hermes/config.yaml
```

如果你只想先查看需要写入的 Hermes 配置：

```bash
npx hermes-edu-skills install hermes
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

## 自动匹配并运行 Skill

官方 Hermes Agent 支持通过 `-s` 手动预加载 Skill，但不一定会在回答里自动显示“正在使用哪个 Skill”。Hermes Edu Skills 在 CLI 里额外提供了一个轻量路由层，让用户可以自然提问，并明确看到本次匹配到的 Skill。

| 你想做什么 | 命令 |
| --- | --- |
| 查看自然语言问题会匹配哪些 Skill | `npx hermes-edu-skills match "八年级下册物理力学题"` |
| 直接让 Hermes 使用匹配到的 Skill 回答 | `npx hermes-edu-skills ask "帮我出5道八年级下册物理力学选择题"` |
| 查看更多候选 Skill | `npx hermes-edu-skills match "错题复盘计划" --top 10` |
| 传递 Hermes 详细输出 | `npx hermes-edu-skills ask "制定一周学习计划" --verbose` |
| 使用自定义 Hermes 命令路径 | `npx hermes-edu-skills ask "初中英语阅读训练" --hermes-bin /path/to/hermes` |

`match` 适合调试和选择，`ask` 适合日常使用。它们不会替代 Hermes Agent，而是自动完成“匹配 Skill -> 显示 Skill -> 调用 `hermes chat -s`”这一步。

## 只安装单个 Skill

很多用户第一次只想试一个能力，不需要把完整 Skill Pack 全部安装。正式 CLI 支持把 Skill 名直接放在工具名后面；高级模式仍支持 `--skill <slug>`，可以多次传入，也可以用逗号分隔。

| 目标 | 命令 |
| --- | --- |
| Hermes 单个 Skill | `npx hermes-edu-skills install hermes agent-study-plan --config ~/.hermes/config.yaml` |
| OpenClaw 单个 Skill | `npx hermes-edu-skills install openclaw primary-math-mental-arithmetic` |
| Codex 单个 Skill | `npx hermes-edu-skills install codex agent-socratic-tutor` |
| Claude Code 单个 Skill | `npx hermes-edu-skills install claude agent-study-plan` |
| Cursor 单个 Skill | `npx hermes-edu-skills install cursor agent-study-plan --workspace /path/to/project` |
| 通用 Agent 单个 Skill | `npx hermes-edu-skills export generic agent-study-plan --target ./dist/one-skill` |

一次安装多个 Skill：

```bash
npx hermes-edu-skills install openclaw agent-study-plan,agent-mistake-review
```

如果不确定 slug，可以先搜索：

```bash
npx hermes-edu-skills search 学习计划
npx hermes-edu-skills info agent-study-plan
```

## 导出给其它 AI 工具或 Agent

如果你使用的不是 Hermes Agent，也可以把这套 Skill Pack 转成其它工具更容易识别的目录结构。核心原则是：`skills/` 保持 Hermes 原生格式，`agent-pack` 负责复制、扁平化或生成目标工具规则。

| 目标工具 | 命令 | 输出/安装位置 |
| --- | --- | --- |
| OpenClaw | `npx hermes-edu-skills install openclaw` | `~/.openclaw/skills/<skill-name>/SKILL.md` |
| Codex | `npx hermes-edu-skills install codex` | `$CODEX_HOME/skills` 或 `~/.codex/skills` |
| Claude Code | `npx hermes-edu-skills install claude` | `~/.claude/skills/<skill-name>/SKILL.md` |
| Claude Code 项目级 | `npx hermes-edu-skills install claude --workspace .` | `.claude/skills/<skill-name>/SKILL.md` |
| Cursor | `npx hermes-edu-skills install cursor --workspace /path/to/project` | `.cursor/rules/*.mdc` + `.cursor/hermes-edu-skills` |
| 通用 Agent | `npx hermes-edu-skills export generic` | `AGENT_SKILL_PACK.json` + `<skill-name>/SKILL.md` |

只转换 OpenClaw 格式，不安装到默认目录：

```bash
npx hermes-edu-skills export openclaw
```

只导出某一个分类，例如教材同步。分类名旁边会标出两种安装选择器；也可以直接传入中文别名，例如 `教材同步`：

```bash
npx hermes-edu-skills export openclaw textbook-sync
npx hermes-edu-skills export openclaw 教材同步
```

常用分类安装选择器：

| 想导出的内容 | 安装选择器 |
| --- | --- |
| 教材同步 | `npx: textbook-sync`<br>`npm: --category textbook-sync` |
| 学习核心能力 | `npx: learning-core`<br>`npm: --category learning-core` |
| 每日练习 | `npx: daily-practice`<br>`npm: --category daily-practice` |
| 阅读写作 | `npx: reading-writing`<br>`npm: --category reading-writing` |
| 考试备考 | `npx: exam-prep`<br>`npm: --category exam-prep` |
| 老师工具 | `npx: teacher-tools`<br>`npm: --category teacher-tools` |
| 家庭教育 | `npx: family-education`<br>`npm: --category family-education` |
| 语言学习 | `npx: language-learning`<br>`npm: --category language-learning` |
| 成人与职业学习 | `npx: career-learning`<br>`npm: --category career-learning` |

源码模式和高级写法仍然可用，适合需要动态指定工具或目标目录的集成场景：

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

## 覆盖范围

下面按分类展示主要领域。完整可点击 Skill 表格在下一节，分类名和 Skill 名都可以直接作为安装选择器使用。

| 分类 | 安装选择器 | 主要领域 | 数量 |
| --- | --- | --- | ---: |
| <a href="#textbook-sync"><code>textbook-sync</code></a><br>教材同步 | <code>npx: textbook-sync</code><br><code>npm: --category textbook-sync</code> | 生物、数学、化学、物理、地理 | 41 |
| <a href="#learning-core"><code>learning-core</code></a><br>学习核心能力 | <code>npx: learning-core</code><br><code>npm: --category learning-core</code> | 学习能力、综合 | 15 |
| <a href="#daily-practice"><code>daily-practice</code></a><br>每日练习 | <code>npx: daily-practice</code><br><code>npm: --category daily-practice</code> | 地理、化学、历史、生物、数学 | 28 |
| <a href="#reading-writing"><code>reading-writing</code></a><br>阅读写作 | <code>npx: reading-writing</code><br><code>npm: --category reading-writing</code> | 语文、英语、通识 | 10 |
| <a href="#exam-prep"><code>exam-prep</code></a><br>考试备考 | <code>npx: exam-prep</code><br><code>npm: --category exam-prep</code> | 地理、化学、历史、生物、数学 | 27 |
| <a href="#teacher-tools"><code>teacher-tools</code></a><br>老师工具 | <code>npx: teacher-tools</code><br><code>npm: --category teacher-tools</code> | 教学管理、地理、化学、历史、生物 | 31 |
| <a href="#family-education"><code>family-education</code></a><br>家庭教育 | <code>npx: family-education</code><br><code>npm: --category family-education</code> | 家庭教育 | 8 |
| <a href="#language-learning"><code>language-learning</code></a><br>语言学习 | <code>npx: language-learning</code><br><code>npm: --category language-learning</code> | 语言学习、英语 | 3 |
| <a href="#career-learning"><code>career-learning</code></a><br>成人与职业学习 | <code>npx: career-learning</code><br><code>npm: --category career-learning</code> | 计算机、职业教育 | 7 |

## 全部 Skill 列表

下面的表格列出了当前全部 170 个公开 Skill。中文 README 的分类列和 Skill 列都优先展示可复制的英文选择器，下一行保留中文名称；旁边的“安装选择器”列同时标出正式 CLI 与源码模式该复制的参数。

### <a id="textbook-sync"></a>教材同步<br>Textbook Sync

面向中国教材版本、年级、册别、单元、课时和知识点的同步学习能力。年级、册别、单元和难度作为参数传入，不再拆成大量独立 Skill。

安装选择器：<code>npx: textbook-sync</code><br><code>npm: --category textbook-sync</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/textbook-sync/junior-biology-bs-textbook-sync/SKILL.md"><code>junior-biology-bs-textbook-sync</code></a><br>北师大版初中生物同步 Skill | <code>npx: junior-biology-bs-textbook-sync</code><br><code>npm: --skill junior-biology-bs-textbook-sync</code> | ✓ | junior | 生物 | 北师大版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-math-bs-textbook-sync/SKILL.md"><code>junior-math-bs-textbook-sync</code></a><br>北师大版初中数学同步 Skill | <code>npx: junior-math-bs-textbook-sync</code><br><code>npm: --skill junior-math-bs-textbook-sync</code> | ✓ | junior | 数学 | 北师大版 | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-biology-bs-textbook-sync/SKILL.md"><code>senior-biology-bs-textbook-sync</code></a><br>北师大版高中生物同步 Skill | <code>npx: senior-biology-bs-textbook-sync</code><br><code>npm: --skill senior-biology-bs-textbook-sync</code> | ✓ | senior | 生物 | 北师大版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-math-bs-textbook-sync/SKILL.md"><code>senior-math-bs-textbook-sync</code></a><br>北师大版高中数学同步 Skill | <code>npx: senior-math-bs-textbook-sync</code><br><code>npm: --skill senior-math-bs-textbook-sync</code> | ✓ | senior | 数学 | 北师大版 | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-math-bs-textbook-sync/SKILL.md"><code>primary-math-bs-textbook-sync</code></a><br>北师大版小学数学同步 Skill | <code>npx: primary-math-bs-textbook-sync</code><br><code>npm: --skill primary-math-bs-textbook-sync</code> | ✓ | primary | 数学 | 北师大版 | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| <a href="skills/textbook-sync/junior-chemistry-lk-textbook-sync/SKILL.md"><code>junior-chemistry-lk-textbook-sync</code></a><br>鲁科版初中化学同步 Skill | <code>npx: junior-chemistry-lk-textbook-sync</code><br><code>npm: --skill junior-chemistry-lk-textbook-sync</code> | ✓ | junior | 化学 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-physics-lk-textbook-sync/SKILL.md"><code>junior-physics-lk-textbook-sync</code></a><br>鲁科版初中物理同步 Skill | <code>npx: junior-physics-lk-textbook-sync</code><br><code>npm: --skill junior-physics-lk-textbook-sync</code> | ✓ | junior | 物理 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-chemistry-lk-textbook-sync/SKILL.md"><code>senior-chemistry-lk-textbook-sync</code></a><br>鲁科版高中化学同步 Skill | <code>npx: senior-chemistry-lk-textbook-sync</code><br><code>npm: --skill senior-chemistry-lk-textbook-sync</code> | ✓ | senior | 化学 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-physics-lk-textbook-sync/SKILL.md"><code>senior-physics-lk-textbook-sync</code></a><br>鲁科版高中物理同步 Skill | <code>npx: senior-physics-lk-textbook-sync</code><br><code>npm: --skill senior-physics-lk-textbook-sync</code> | ✓ | senior | 物理 | 鲁科版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/junior-geography-rj-textbook-sync/SKILL.md"><code>junior-geography-rj-textbook-sync</code></a><br>人教版初中地理同步 Skill | <code>npx: junior-geography-rj-textbook-sync</code><br><code>npm: --skill junior-geography-rj-textbook-sync</code> | ✓ | junior | 地理 | 人教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-chemistry-rj-textbook-sync/SKILL.md"><code>junior-chemistry-rj-textbook-sync</code></a><br>人教版初中化学同步 Skill | <code>npx: junior-chemistry-rj-textbook-sync</code><br><code>npm: --skill junior-chemistry-rj-textbook-sync</code> | ✓ | junior | 化学 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-biology-rj-textbook-sync/SKILL.md"><code>junior-biology-rj-textbook-sync</code></a><br>人教版初中生物同步 Skill | <code>npx: junior-biology-rj-textbook-sync</code><br><code>npm: --skill junior-biology-rj-textbook-sync</code> | ✓ | junior | 生物 | 人教版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-math-rj-textbook-sync/SKILL.md"><code>junior-math-rj-textbook-sync</code></a><br>人教版初中数学同步 Skill | <code>npx: junior-math-rj-textbook-sync</code><br><code>npm: --skill junior-math-rj-textbook-sync</code> | ✓ | junior | 数学 | 人教版 | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-physics-rj-textbook-sync/SKILL.md"><code>junior-physics-rj-textbook-sync</code></a><br>人教版初中物理同步 Skill | <code>npx: junior-physics-rj-textbook-sync</code><br><code>npm: --skill junior-physics-rj-textbook-sync</code> | ✓ | junior | 物理 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-english-rj-textbook-sync/SKILL.md"><code>junior-english-rj-textbook-sync</code></a><br>人教版初中英语同步 Skill | <code>npx: junior-english-rj-textbook-sync</code><br><code>npm: --skill junior-english-rj-textbook-sync</code> | ✓ | junior | 英语 | 人教版 | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-geography-rj-textbook-sync/SKILL.md"><code>senior-geography-rj-textbook-sync</code></a><br>人教版高中地理同步 Skill | <code>npx: senior-geography-rj-textbook-sync</code><br><code>npm: --skill senior-geography-rj-textbook-sync</code> | ✓ | senior | 地理 | 人教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-chemistry-rj-textbook-sync/SKILL.md"><code>senior-chemistry-rj-textbook-sync</code></a><br>人教版高中化学同步 Skill | <code>npx: senior-chemistry-rj-textbook-sync</code><br><code>npm: --skill senior-chemistry-rj-textbook-sync</code> | ✓ | senior | 化学 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-biology-rj-textbook-sync/SKILL.md"><code>senior-biology-rj-textbook-sync</code></a><br>人教版高中生物同步 Skill | <code>npx: senior-biology-rj-textbook-sync</code><br><code>npm: --skill senior-biology-rj-textbook-sync</code> | ✓ | senior | 生物 | 人教版 | 教材同步、知识记忆 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-physics-rj-textbook-sync/SKILL.md"><code>senior-physics-rj-textbook-sync</code></a><br>人教版高中物理同步 Skill | <code>npx: senior-physics-rj-textbook-sync</code><br><code>npm: --skill senior-physics-rj-textbook-sync</code> | ✓ | senior | 物理 | 人教版 | 教材同步、实验理解 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-english-rj-textbook-sync/SKILL.md"><code>senior-english-rj-textbook-sync</code></a><br>人教版高中英语同步 Skill | <code>npx: senior-english-rj-textbook-sync</code><br><code>npm: --skill senior-english-rj-textbook-sync</code> | ✓ | senior | 英语 | 人教版 | 教材同步、阅读理解、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-math-rj-textbook-sync/SKILL.md"><code>primary-math-rj-textbook-sync</code></a><br>人教版小学数学同步 Skill | <code>npx: primary-math-rj-textbook-sync</code><br><code>npm: --skill primary-math-rj-textbook-sync</code> | ✓ | primary | 数学 | 人教版 | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| <a href="skills/textbook-sync/senior-math-rja-textbook-sync/SKILL.md"><code>senior-math-rja-textbook-sync</code></a><br>人教A版高中数学同步 Skill | <code>npx: senior-math-rja-textbook-sync</code><br><code>npm: --skill senior-math-rja-textbook-sync</code> | ✓ | senior | 数学 | 人教A版 | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-math-rjb-textbook-sync/SKILL.md"><code>senior-math-rjb-textbook-sync</code></a><br>人教B版高中数学同步 Skill | <code>npx: senior-math-rjb-textbook-sync</code><br><code>npm: --skill senior-math-rjb-textbook-sync</code> | ✓ | senior | 数学 | 人教B版 | 教材同步、函数、建模 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-english-pep-textbook-sync/SKILL.md"><code>primary-english-pep-textbook-sync</code></a><br>人教PEP版小学英语同步 Skill | <code>npx: primary-english-pep-textbook-sync</code><br><code>npm: --skill primary-english-pep-textbook-sync</code> | ✓ | primary | 英语 | 人教PEP版 | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/junior-math-sj-textbook-sync/SKILL.md"><code>junior-math-sj-textbook-sync</code></a><br>苏教版初中数学同步 Skill | <code>npx: junior-math-sj-textbook-sync</code><br><code>npm: --skill junior-math-sj-textbook-sync</code> | ✓ | junior | 数学 | 苏教版 | 教材同步、函数、几何 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/primary-math-sj-textbook-sync/SKILL.md"><code>primary-math-sj-textbook-sync</code></a><br>苏教版小学数学同步 Skill | <code>npx: primary-math-sj-textbook-sync</code><br><code>npm: --skill primary-math-sj-textbook-sync</code> | ✓ | primary | 数学 | 苏教版 | 教材同步、计算、应用题 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、口算速练 |
| <a href="skills/textbook-sync/junior-history-tongbian-textbook-sync/SKILL.md"><code>junior-history-tongbian-textbook-sync</code></a><br>统编版初中历史同步 Skill | <code>npx: junior-history-tongbian-textbook-sync</code><br><code>npm: --skill junior-history-tongbian-textbook-sync</code> | ✓ | junior | 历史 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-chinese-tongbian-textbook-sync/SKILL.md"><code>junior-chinese-tongbian-textbook-sync</code></a><br>统编版初中语文同步 Skill | <code>npx: junior-chinese-tongbian-textbook-sync</code><br><code>npm: --skill junior-chinese-tongbian-textbook-sync</code> | ✓ | junior | 语文 | 统编版 | 教材同步、阅读理解、写作表达 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/junior-politics-tongbian-textbook-sync/SKILL.md"><code>junior-politics-tongbian-textbook-sync</code></a><br>统编版初中政治同步 Skill | <code>npx: junior-politics-tongbian-textbook-sync</code><br><code>npm: --skill junior-politics-tongbian-textbook-sync</code> | ✓ | junior | 政治 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-history-tongbian-textbook-sync/SKILL.md"><code>senior-history-tongbian-textbook-sync</code></a><br>统编版高中历史同步 Skill | <code>npx: senior-history-tongbian-textbook-sync</code><br><code>npm: --skill senior-history-tongbian-textbook-sync</code> | ✓ | senior | 历史 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-chinese-tongbian-textbook-sync/SKILL.md"><code>senior-chinese-tongbian-textbook-sync</code></a><br>统编版高中语文同步 Skill | <code>npx: senior-chinese-tongbian-textbook-sync</code><br><code>npm: --skill senior-chinese-tongbian-textbook-sync</code> | ✓ | senior | 语文 | 统编版 | 教材同步、文言文、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/senior-politics-tongbian-textbook-sync/SKILL.md"><code>senior-politics-tongbian-textbook-sync</code></a><br>统编版高中政治同步 Skill | <code>npx: senior-politics-tongbian-textbook-sync</code><br><code>npm: --skill senior-politics-tongbian-textbook-sync</code> | ✓ | senior | 政治 | 统编版 | 教材同步、材料分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-chinese-tongbian-textbook-sync/SKILL.md"><code>primary-chinese-tongbian-textbook-sync</code></a><br>统编版小学语文同步 Skill | <code>npx: primary-chinese-tongbian-textbook-sync</code><br><code>npm: --skill primary-chinese-tongbian-textbook-sync</code> | ✓ | primary | 语文 | 统编版 | 教材同步、阅读理解、写作表达 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/junior-english-wy-textbook-sync/SKILL.md"><code>junior-english-wy-textbook-sync</code></a><br>外研版初中英语同步 Skill | <code>npx: junior-english-wy-textbook-sync</code><br><code>npm: --skill junior-english-wy-textbook-sync</code> | ✓ | junior | 英语 | 外研版 | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-english-wy-textbook-sync/SKILL.md"><code>senior-english-wy-textbook-sync</code></a><br>外研版高中英语同步 Skill | <code>npx: senior-english-wy-textbook-sync</code><br><code>npm: --skill senior-english-wy-textbook-sync</code> | ✓ | senior | 英语 | 外研版 | 教材同步、阅读理解、写作 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/primary-english-wy-textbook-sync/SKILL.md"><code>primary-english-wy-textbook-sync</code></a><br>外研版小学英语同步 Skill | <code>npx: primary-english-wy-textbook-sync</code><br><code>npm: --skill primary-english-wy-textbook-sync</code> | ✓ | primary | 英语 | 外研版 | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/junior-geography-xj-textbook-sync/SKILL.md"><code>junior-geography-xj-textbook-sync</code></a><br>湘教版初中地理同步 Skill | <code>npx: junior-geography-xj-textbook-sync</code><br><code>npm: --skill junior-geography-xj-textbook-sync</code> | ✓ | junior | 地理 | 湘教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/senior-geography-xj-textbook-sync/SKILL.md"><code>senior-geography-xj-textbook-sync</code></a><br>湘教版高中地理同步 Skill | <code>npx: senior-geography-xj-textbook-sync</code><br><code>npm: --skill senior-geography-xj-textbook-sync</code> | ✓ | senior | 地理 | 湘教版 | 教材同步、图表分析 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、高考复习 |
| <a href="skills/textbook-sync/junior-english-yl-textbook-sync/SKILL.md"><code>junior-english-yl-textbook-sync</code></a><br>译林版初中英语同步 Skill | <code>npx: junior-english-yl-textbook-sync</code><br><code>npm: --skill junior-english-yl-textbook-sync</code> | ✓ | junior | 英语 | 译林版 | 教材同步、词汇、语法 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习 |
| <a href="skills/textbook-sync/primary-english-yl-textbook-sync/SKILL.md"><code>primary-english-yl-textbook-sync</code></a><br>译林版小学英语同步 Skill | <code>npx: primary-english-yl-textbook-sync</code><br><code>npm: --skill primary-english-yl-textbook-sync</code> | ✓ | primary | 英语 | 译林版 | 教材同步、词汇、听说读写 | 课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习 |
| <a href="skills/textbook-sync/preschool-general-readiness-textbook-sync/SKILL.md"><code>preschool-general-readiness-textbook-sync</code></a><br>幼小衔接通用学前综合同步 Skill | <code>npx: preschool-general-readiness-textbook-sync</code><br><code>npm: --skill preschool-general-readiness-textbook-sync</code> | ✓ | preschool | 综合 | 幼小衔接通用 | 启蒙学习、习惯培养 | 每日启蒙、亲子共学、入学准备 |

### <a id="learning-core"></a>学习核心能力<br>Learning Core

学习计划、拍照答疑、错题复盘、学情报告等通用学习闭环能力。

安装选择器：<code>npx: learning-core</code><br><code>npm: --category learning-core</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/learning-core/agent-weakness-boost/SKILL.md"><code>agent-weakness-boost</code></a><br>薄弱项提升 Skill | <code>npx: agent-weakness-boost</code><br><code>npm: --skill agent-weakness-boost</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 查漏补缺 | 专项训练 |
| <a href="skills/learning-core/agent-mistake-review/SKILL.md"><code>agent-mistake-review</code></a><br>错题复盘 Skill | <code>npx: agent-mistake-review</code><br><code>npm: --skill agent-mistake-review</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 错题订正、复习计划 | 错题订正、单元复习 |
| <a href="skills/learning-core/agent-review-assistant/SKILL.md"><code>agent-review-assistant</code></a><br>复习助手 Skill | <code>npx: agent-review-assistant</code><br><code>npm: --skill agent-review-assistant</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 复习计划 | 单元复习 |
| <a href="skills/learning-core/agent-holiday-plan/SKILL.md"><code>agent-holiday-plan</code></a><br>寒暑假提升 Skill | <code>npx: agent-holiday-plan</code><br><code>npm: --skill agent-holiday-plan</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 假期计划 | 寒暑假提升 |
| <a href="skills/learning-core/agent-memory-method/SKILL.md"><code>agent-memory-method</code></a><br>记忆方法 Skill | <code>npx: agent-memory-method</code><br><code>npm: --skill agent-memory-method</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 记忆 | 背诵记忆 |
| <a href="skills/learning-core/agent-preview-assistant/SKILL.md"><code>agent-preview-assistant</code></a><br>课前预习 Skill | <code>npx: agent-preview-assistant</code><br><code>npm: --skill agent-preview-assistant</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 预习 | 课前预习 |
| <a href="skills/learning-core/agent-weekly-review/SKILL.md"><code>agent-weekly-review</code></a><br>每周复盘 Skill | <code>npx: agent-weekly-review</code><br><code>npm: --skill agent-weekly-review</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 阶段复盘 | 学习报告 |
| <a href="skills/learning-core/agent-photo-question/SKILL.md"><code>agent-photo-question</code></a><br>拍照答疑 Skill | <code>npx: agent-photo-question</code><br><code>npm: --skill agent-photo-question</code> | - | primary<br>junior<br>senior | 综合 | - | AI 讲题、图片识题 | 拍照答疑、课后作业 |
| <a href="skills/learning-core/agent-socratic-tutor/SKILL.md"><code>agent-socratic-tutor</code></a><br>启发式讲解 Skill | <code>npx: agent-socratic-tutor</code><br><code>npm: --skill agent-socratic-tutor</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 启发提问 | AI 讲题 |
| <a href="skills/learning-core/agent-learning-report/SKILL.md"><code>agent-learning-report</code></a><br>学情报告 Skill | <code>npx: agent-learning-report</code><br><code>npm: --skill agent-learning-report</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 学情报告、学习建议 | 学习报告、家长沟通 |
| <a href="skills/learning-core/agent-study-plan/SKILL.md"><code>agent-study-plan</code></a><br>学习计划 Skill | <code>npx: agent-study-plan</code><br><code>npm: --skill agent-study-plan</code> | ✓ | preschool<br>primary<br>junior<br>senior<br>college<br>adult | 学习能力 | - | 学习计划、目标管理 | 今日学习、寒暑假提升、考前规划 |
| <a href="skills/learning-core/agent-learning-habit/SKILL.md"><code>agent-learning-habit</code></a><br>学习习惯 Skill | <code>npx: agent-learning-habit</code><br><code>npm: --skill agent-learning-habit</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 习惯培养 | 每日打卡 |
| <a href="skills/learning-core/agent-focus-training/SKILL.md"><code>agent-focus-training</code></a><br>专注力训练 Skill | <code>npx: agent-focus-training</code><br><code>npm: --skill agent-focus-training</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 专注 | 每日打卡 |
| <a href="skills/learning-core/agent-homework-companion/SKILL.md"><code>agent-homework-companion</code></a><br>作业陪伴 Skill | <code>npx: agent-homework-companion</code><br><code>npm: --skill agent-homework-companion</code> | ✓ | primary<br>junior<br>senior | 学习能力 | - | 作业陪伴 | 课后作业 |
| <a href="skills/learning-core/agent-question-explanation/SKILL.md"><code>agent-question-explanation</code></a><br>AI 讲题 Skill | <code>npx: agent-question-explanation</code><br><code>npm: --skill agent-question-explanation</code> | ✓ | primary<br>junior<br>senior<br>college | 学习能力 | - | AI 讲题、举一反三 | 课后作业、同步巩固 |

### <a id="daily-practice"></a>每日练习<br>Daily Practice

面向每天短时高频训练，例如口算、听写、背诵、词汇、快速巩固。

安装选择器：<code>npx: daily-practice</code><br><code>npm: --category daily-practice</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/daily-practice/junior-geography-quick-practice/SKILL.md"><code>junior-geography-quick-practice</code></a><br>初中地理快速巩固 Skill | <code>npx: junior-geography-quick-practice</code><br><code>npm: --skill junior-geography-quick-practice</code> | ✓ | junior | 地理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-chemistry-quick-practice/SKILL.md"><code>junior-chemistry-quick-practice</code></a><br>初中化学快速巩固 Skill | <code>npx: junior-chemistry-quick-practice</code><br><code>npm: --skill junior-chemistry-quick-practice</code> | ✓ | junior | 化学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-history-quick-practice/SKILL.md"><code>junior-history-quick-practice</code></a><br>初中历史快速巩固 Skill | <code>npx: junior-history-quick-practice</code><br><code>npm: --skill junior-history-quick-practice</code> | ✓ | junior | 历史 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-biology-quick-practice/SKILL.md"><code>junior-biology-quick-practice</code></a><br>初中生物快速巩固 Skill | <code>npx: junior-biology-quick-practice</code><br><code>npm: --skill junior-biology-quick-practice</code> | ✓ | junior | 生物 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-math-quick-practice/SKILL.md"><code>junior-math-quick-practice</code></a><br>初中数学快速巩固 Skill | <code>npx: junior-math-quick-practice</code><br><code>npm: --skill junior-math-quick-practice</code> | ✓ | junior | 数学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-math-daily-practice/SKILL.md"><code>junior-math-daily-practice</code></a><br>初中数学每日练 Skill | <code>npx: junior-math-daily-practice</code><br><code>npm: --skill junior-math-daily-practice</code> | ✓ | junior | 数学 | - | 计算、函数、几何 | 每日打卡、专项训练 |
| <a href="skills/daily-practice/junior-physics-quick-practice/SKILL.md"><code>junior-physics-quick-practice</code></a><br>初中物理快速巩固 Skill | <code>npx: junior-physics-quick-practice</code><br><code>npm: --skill junior-physics-quick-practice</code> | ✓ | junior | 物理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-english-vocabulary-daily/SKILL.md"><code>junior-english-vocabulary-daily</code></a><br>初中英语词汇每日练 Skill | <code>npx: junior-english-vocabulary-daily</code><br><code>npm: --skill junior-english-vocabulary-daily</code> | ✓ | junior | 英语 | - | 词汇 | 每日打卡、中考复习 |
| <a href="skills/daily-practice/junior-english-quick-practice/SKILL.md"><code>junior-english-quick-practice</code></a><br>初中英语快速巩固 Skill | <code>npx: junior-english-quick-practice</code><br><code>npm: --skill junior-english-quick-practice</code> | ✓ | junior | 英语 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-chinese-quick-practice/SKILL.md"><code>junior-chinese-quick-practice</code></a><br>初中语文快速巩固 Skill | <code>npx: junior-chinese-quick-practice</code><br><code>npm: --skill junior-chinese-quick-practice</code> | ✓ | junior | 语文 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/junior-politics-quick-practice/SKILL.md"><code>junior-politics-quick-practice</code></a><br>初中政治快速巩固 Skill | <code>npx: junior-politics-quick-practice</code><br><code>npm: --skill junior-politics-quick-practice</code> | ✓ | junior | 政治 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-geography-quick-practice/SKILL.md"><code>senior-geography-quick-practice</code></a><br>高中地理快速巩固 Skill | <code>npx: senior-geography-quick-practice</code><br><code>npm: --skill senior-geography-quick-practice</code> | ✓ | senior | 地理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-chemistry-quick-practice/SKILL.md"><code>senior-chemistry-quick-practice</code></a><br>高中化学快速巩固 Skill | <code>npx: senior-chemistry-quick-practice</code><br><code>npm: --skill senior-chemistry-quick-practice</code> | ✓ | senior | 化学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-history-quick-practice/SKILL.md"><code>senior-history-quick-practice</code></a><br>高中历史快速巩固 Skill | <code>npx: senior-history-quick-practice</code><br><code>npm: --skill senior-history-quick-practice</code> | ✓ | senior | 历史 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-biology-quick-practice/SKILL.md"><code>senior-biology-quick-practice</code></a><br>高中生物快速巩固 Skill | <code>npx: senior-biology-quick-practice</code><br><code>npm: --skill senior-biology-quick-practice</code> | ✓ | senior | 生物 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-math-quick-practice/SKILL.md"><code>senior-math-quick-practice</code></a><br>高中数学快速巩固 Skill | <code>npx: senior-math-quick-practice</code><br><code>npm: --skill senior-math-quick-practice</code> | ✓ | senior | 数学 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-physics-quick-practice/SKILL.md"><code>senior-physics-quick-practice</code></a><br>高中物理快速巩固 Skill | <code>npx: senior-physics-quick-practice</code><br><code>npm: --skill senior-physics-quick-practice</code> | ✓ | senior | 物理 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-english-vocabulary-daily/SKILL.md"><code>senior-english-vocabulary-daily</code></a><br>高中英语词汇每日练 Skill | <code>npx: senior-english-vocabulary-daily</code><br><code>npm: --skill senior-english-vocabulary-daily</code> | ✓ | senior | 英语 | - | 词汇 | 每日打卡、高考复习 |
| <a href="skills/daily-practice/senior-english-quick-practice/SKILL.md"><code>senior-english-quick-practice</code></a><br>高中英语快速巩固 Skill | <code>npx: senior-english-quick-practice</code><br><code>npm: --skill senior-english-quick-practice</code> | ✓ | senior | 英语 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-chinese-quick-practice/SKILL.md"><code>senior-chinese-quick-practice</code></a><br>高中语文快速巩固 Skill | <code>npx: senior-chinese-quick-practice</code><br><code>npm: --skill senior-chinese-quick-practice</code> | ✓ | senior | 语文 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/senior-politics-quick-practice/SKILL.md"><code>senior-politics-quick-practice</code></a><br>高中政治快速巩固 Skill | <code>npx: senior-politics-quick-practice</code><br><code>npm: --skill senior-politics-quick-practice</code> | ✓ | senior | 政治 | - | 同步巩固、专项训练 | 每日打卡、同步巩固 |
| <a href="skills/daily-practice/primary-chinese-recitation-daily/SKILL.md"><code>primary-chinese-recitation-daily</code></a><br>小学课文古诗背诵 Skill | <code>npx: primary-chinese-recitation-daily</code><br><code>npm: --skill primary-chinese-recitation-daily</code> | ✓ | primary | 语文 | - | 背诵、朗读 | 背诵记忆、每日打卡 |
| <a href="skills/daily-practice/primary-math-mental-arithmetic/SKILL.md"><code>primary-math-mental-arithmetic</code></a><br>小学口算速练 Skill | <code>npx: primary-math-mental-arithmetic</code><br><code>npm: --skill primary-math-mental-arithmetic</code> | ✓ | primary | 数学 | - | 计算、数感 | 口算速练、每日打卡 |
| <a href="skills/daily-practice/primary-english-vocabulary-daily/SKILL.md"><code>primary-english-vocabulary-daily</code></a><br>小学英语单词每日练 Skill | <code>npx: primary-english-vocabulary-daily</code><br><code>npm: --skill primary-english-vocabulary-daily</code> | ✓ | primary | 英语 | - | 词汇、默写 | 每日打卡、听写默写 |
| <a href="skills/daily-practice/primary-chinese-dictation-daily/SKILL.md"><code>primary-chinese-dictation-daily</code></a><br>小学语文字词听写 Skill | <code>npx: primary-chinese-dictation-daily</code><br><code>npm: --skill primary-chinese-dictation-daily</code> | ✓ | primary | 语文 | - | 听写、默写 | 听写默写、每日打卡 |
| <a href="skills/daily-practice/primary-reading-daily/SKILL.md"><code>primary-reading-daily</code></a><br>小学阅读每日练 Skill | <code>npx: primary-reading-daily</code><br><code>npm: --skill primary-reading-daily</code> | ✓ | primary | 语文 | - | 阅读理解 | 阅读训练、每日打卡 |
| <a href="skills/daily-practice/preschool-literacy-daily/SKILL.md"><code>preschool-literacy-daily</code></a><br>学前识字每日练 Skill | <code>npx: preschool-literacy-daily</code><br><code>npm: --skill preschool-literacy-daily</code> | ✓ | preschool | 语文 | - | 识字 | 每日启蒙、每日打卡 |
| <a href="skills/daily-practice/preschool-number-sense-daily/SKILL.md"><code>preschool-number-sense-daily</code></a><br>学前数感每日练 Skill | <code>npx: preschool-number-sense-daily</code><br><code>npm: --skill preschool-number-sense-daily</code> | ✓ | preschool | 数学 | - | 数感 | 数感游戏、每日打卡 |

### <a id="reading-writing"></a>阅读写作<br>Reading & Writing

面向语文、英语、学术和职场表达的阅读与写作能力。

安装选择器：<code>npx: reading-writing</code><br><code>npm: --category reading-writing</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/reading-writing/junior-chinese-modern-reading/SKILL.md"><code>junior-chinese-modern-reading</code></a><br>初中现代文阅读 Skill | <code>npx: junior-chinese-modern-reading</code><br><code>npm: --skill junior-chinese-modern-reading</code> | ✓ | junior | 语文 | - | 阅读理解 | 中考复习 |
| <a href="skills/reading-writing/junior-english-writing/SKILL.md"><code>junior-english-writing</code></a><br>初中英语写作 Skill | <code>npx: junior-english-writing</code><br><code>npm: --skill junior-english-writing</code> | ✓ | junior | 英语 | - | 写作 | 中考复习 |
| <a href="skills/reading-writing/junior-chinese-composition/SKILL.md"><code>junior-chinese-composition</code></a><br>初中作文提升 Skill | <code>npx: junior-chinese-composition</code><br><code>npm: --skill junior-chinese-composition</code> | ✓ | junior | 语文 | - | 写作 | 写作提升 |
| <a href="skills/reading-writing/senior-english-writing/SKILL.md"><code>senior-english-writing</code></a><br>高中英语写作 Skill | <code>npx: senior-english-writing</code><br><code>npm: --skill senior-english-writing</code> | ✓ | senior | 英语 | - | 写作 | 高考复习 |
| <a href="skills/reading-writing/senior-chinese-reading/SKILL.md"><code>senior-chinese-reading</code></a><br>高中语文阅读 Skill | <code>npx: senior-chinese-reading</code><br><code>npm: --skill senior-chinese-reading</code> | ✓ | senior | 语文 | - | 阅读理解 | 高考复习 |
| <a href="skills/reading-writing/senior-chinese-essay/SKILL.md"><code>senior-chinese-essay</code></a><br>高中作文提升 Skill | <code>npx: senior-chinese-essay</code><br><code>npm: --skill senior-chinese-essay</code> | ✓ | senior | 语文 | - | 写作 | 写作提升 |
| <a href="skills/reading-writing/primary-english-reading/SKILL.md"><code>primary-english-reading</code></a><br>小学英语阅读 Skill | <code>npx: primary-english-reading</code><br><code>npm: --skill primary-english-reading</code> | ✓ | primary | 英语 | - | 阅读理解 | 阅读训练 |
| <a href="skills/reading-writing/primary-chinese-reading/SKILL.md"><code>primary-chinese-reading</code></a><br>小学语文阅读理解 Skill | <code>npx: primary-chinese-reading</code><br><code>npm: --skill primary-chinese-reading</code> | ✓ | primary | 语文 | - | 阅读理解 | 阅读训练 |
| <a href="skills/reading-writing/primary-chinese-writing/SKILL.md"><code>primary-chinese-writing</code></a><br>小学作文提升 Skill | <code>npx: primary-chinese-writing</code><br><code>npm: --skill primary-chinese-writing</code> | ✓ | primary | 语文 | - | 写作、表达 | 写作提升 |
| <a href="skills/reading-writing/college-academic-writing/SKILL.md"><code>college-academic-writing</code></a><br>学术写作 Skill | <code>npx: college-academic-writing</code><br><code>npm: --skill college-academic-writing</code> | ✓ | college | 通识 | - | 写作 | 论文训练 |

### <a id="exam-prep"></a>考试备考<br>Exam Prep

面向期末、中考、高考、考研、四六级、考证和公务员等备考场景。

安装选择器：<code>npx: exam-prep</code><br><code>npm: --category exam-prep</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/exam-prep/junior-geography-exam-review/SKILL.md"><code>junior-geography-exam-review</code></a><br>初中地理考试复习 Skill | <code>npx: junior-geography-exam-review</code><br><code>npm: --skill junior-geography-exam-review</code> | ✓ | junior | 地理 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-chemistry-exam-review/SKILL.md"><code>junior-chemistry-exam-review</code></a><br>初中化学考试复习 Skill | <code>npx: junior-chemistry-exam-review</code><br><code>npm: --skill junior-chemistry-exam-review</code> | ✓ | junior | 化学 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-history-exam-review/SKILL.md"><code>junior-history-exam-review</code></a><br>初中历史考试复习 Skill | <code>npx: junior-history-exam-review</code><br><code>npm: --skill junior-history-exam-review</code> | ✓ | junior | 历史 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-biology-exam-review/SKILL.md"><code>junior-biology-exam-review</code></a><br>初中生物考试复习 Skill | <code>npx: junior-biology-exam-review</code><br><code>npm: --skill junior-biology-exam-review</code> | ✓ | junior | 生物 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-math-exam-review/SKILL.md"><code>junior-math-exam-review</code></a><br>初中数学考试复习 Skill | <code>npx: junior-math-exam-review</code><br><code>npm: --skill junior-math-exam-review</code> | ✓ | junior | 数学 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-physics-exam-review/SKILL.md"><code>junior-physics-exam-review</code></a><br>初中物理考试复习 Skill | <code>npx: junior-physics-exam-review</code><br><code>npm: --skill junior-physics-exam-review</code> | ✓ | junior | 物理 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-english-exam-review/SKILL.md"><code>junior-english-exam-review</code></a><br>初中英语考试复习 Skill | <code>npx: junior-english-exam-review</code><br><code>npm: --skill junior-english-exam-review</code> | ✓ | junior | 英语 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-chinese-exam-review/SKILL.md"><code>junior-chinese-exam-review</code></a><br>初中语文考试复习 Skill | <code>npx: junior-chinese-exam-review</code><br><code>npm: --skill junior-chinese-exam-review</code> | ✓ | junior | 语文 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/junior-politics-exam-review/SKILL.md"><code>junior-politics-exam-review</code></a><br>初中政治考试复习 Skill | <code>npx: junior-politics-exam-review</code><br><code>npm: --skill junior-politics-exam-review</code> | ✓ | junior | 政治 | - | 考试复习、查漏补缺 | 中考复习、考前冲刺 |
| <a href="skills/exam-prep/college-cet6-sprint/SKILL.md"><code>college-cet6-sprint</code></a><br>大学英语六级备考 Skill | <code>npx: college-cet6-sprint</code><br><code>npm: --skill college-cet6-sprint</code> | ✓ | college | 英语 | - | 词汇、听力、阅读理解、写作 | 考前冲刺 |
| <a href="skills/exam-prep/college-cet4-sprint/SKILL.md"><code>college-cet4-sprint</code></a><br>大学英语四级备考 Skill | <code>npx: college-cet4-sprint</code><br><code>npm: --skill college-cet4-sprint</code> | ✓ | college | 英语 | - | 词汇、听力、阅读理解、写作 | 考前冲刺 |
| <a href="skills/exam-prep/senior-gaokao-sprint/SKILL.md"><code>senior-gaokao-sprint</code></a><br>高考冲刺 Skill | <code>npx: senior-gaokao-sprint</code><br><code>npm: --skill senior-gaokao-sprint</code> | ✓ | senior | 综合 | - | 考试冲刺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-geography-exam-review/SKILL.md"><code>senior-geography-exam-review</code></a><br>高中地理考试复习 Skill | <code>npx: senior-geography-exam-review</code><br><code>npm: --skill senior-geography-exam-review</code> | ✓ | senior | 地理 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-chemistry-exam-review/SKILL.md"><code>senior-chemistry-exam-review</code></a><br>高中化学考试复习 Skill | <code>npx: senior-chemistry-exam-review</code><br><code>npm: --skill senior-chemistry-exam-review</code> | ✓ | senior | 化学 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-history-exam-review/SKILL.md"><code>senior-history-exam-review</code></a><br>高中历史考试复习 Skill | <code>npx: senior-history-exam-review</code><br><code>npm: --skill senior-history-exam-review</code> | ✓ | senior | 历史 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-biology-exam-review/SKILL.md"><code>senior-biology-exam-review</code></a><br>高中生物考试复习 Skill | <code>npx: senior-biology-exam-review</code><br><code>npm: --skill senior-biology-exam-review</code> | ✓ | senior | 生物 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-math-exam-review/SKILL.md"><code>senior-math-exam-review</code></a><br>高中数学考试复习 Skill | <code>npx: senior-math-exam-review</code><br><code>npm: --skill senior-math-exam-review</code> | ✓ | senior | 数学 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-physics-exam-review/SKILL.md"><code>senior-physics-exam-review</code></a><br>高中物理考试复习 Skill | <code>npx: senior-physics-exam-review</code><br><code>npm: --skill senior-physics-exam-review</code> | ✓ | senior | 物理 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-english-exam-review/SKILL.md"><code>senior-english-exam-review</code></a><br>高中英语考试复习 Skill | <code>npx: senior-english-exam-review</code><br><code>npm: --skill senior-english-exam-review</code> | ✓ | senior | 英语 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-chinese-exam-review/SKILL.md"><code>senior-chinese-exam-review</code></a><br>高中语文考试复习 Skill | <code>npx: senior-chinese-exam-review</code><br><code>npm: --skill senior-chinese-exam-review</code> | ✓ | senior | 语文 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/senior-politics-exam-review/SKILL.md"><code>senior-politics-exam-review</code></a><br>高中政治考试复习 Skill | <code>npx: senior-politics-exam-review</code><br><code>npm: --skill senior-politics-exam-review</code> | ✓ | senior | 政治 | - | 考试复习、查漏补缺 | 高考复习、考前冲刺 |
| <a href="skills/exam-prep/civil-service-essay/SKILL.md"><code>civil-service-essay</code></a><br>公务员申论 Skill | <code>npx: civil-service-essay</code><br><code>npm: --skill civil-service-essay</code> | ✓ | adult | 职业教育 | - | 材料阅读、写作 | 考证、写作提升 |
| <a href="skills/exam-prep/civil-service-aptitude/SKILL.md"><code>civil-service-aptitude</code></a><br>公务员行测 Skill | <code>npx: civil-service-aptitude</code><br><code>npm: --skill civil-service-aptitude</code> | ✓ | adult | 职业教育 | - | 逻辑、数据分析 | 考证、专项训练 |
| <a href="skills/exam-prep/teacher-certification-sprint/SKILL.md"><code>teacher-certification-sprint</code></a><br>教师资格证备考 Skill | <code>npx: teacher-certification-sprint</code><br><code>npm: --skill teacher-certification-sprint</code> | ✓ | adult | 职业教育 | - | 考试冲刺 | 考证 |
| <a href="skills/exam-prep/postgraduate-english-sprint/SKILL.md"><code>postgraduate-english-sprint</code></a><br>考研英语备考 Skill | <code>npx: postgraduate-english-sprint</code><br><code>npm: --skill postgraduate-english-sprint</code> | ✓ | college<br>adult | 英语 | - | 阅读理解、翻译、写作 | 考研复习 |
| <a href="skills/exam-prep/primary-final-review/SKILL.md"><code>primary-final-review</code></a><br>小学期末复习 Skill | <code>npx: primary-final-review</code><br><code>npm: --skill primary-final-review</code> | ✓ | primary | 综合 | - | 考试复习 | 期中期末复习 |
| <a href="skills/exam-prep/junior-zhongkao-sprint/SKILL.md"><code>junior-zhongkao-sprint</code></a><br>中考冲刺 Skill | <code>npx: junior-zhongkao-sprint</code><br><code>npm: --skill junior-zhongkao-sprint</code> | ✓ | junior | 综合 | - | 考试冲刺 | 中考复习、考前冲刺 |

### <a id="teacher-tools"></a>老师工具<br>Teacher Tools

面向老师备课、作业生成、班级分析和家校沟通。

安装选择器：<code>npx: teacher-tools</code><br><code>npm: --category teacher-tools</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/teacher-tools/teacher-class-analysis-lite/SKILL.md"><code>teacher-class-analysis-lite</code></a><br>班级学情分析 Lite Skill | <code>npx: teacher-class-analysis-lite</code><br><code>npm: --skill teacher-class-analysis-lite</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 学情分析 | 学情分析 |
| <a href="skills/teacher-tools/teacher-geography-lesson-planning/SKILL.md"><code>teacher-geography-lesson-planning</code></a><br>地理备课 Skill | <code>npx: teacher-geography-lesson-planning</code><br><code>npm: --skill teacher-geography-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 地理 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-geography-unit-review/SKILL.md"><code>teacher-geography-unit-review</code></a><br>地理单元复习 Skill | <code>npx: teacher-geography-unit-review</code><br><code>npm: --skill teacher-geography-unit-review</code> | ✓ | primary<br>junior<br>senior | 地理 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-geography-homework-generation/SKILL.md"><code>teacher-geography-homework-generation</code></a><br>地理作业生成 Skill | <code>npx: teacher-geography-homework-generation</code><br><code>npm: --skill teacher-geography-homework-generation</code> | ✓ | primary<br>junior<br>senior | 地理 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-chemistry-lesson-planning/SKILL.md"><code>teacher-chemistry-lesson-planning</code></a><br>化学备课 Skill | <code>npx: teacher-chemistry-lesson-planning</code><br><code>npm: --skill teacher-chemistry-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 化学 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-chemistry-unit-review/SKILL.md"><code>teacher-chemistry-unit-review</code></a><br>化学单元复习 Skill | <code>npx: teacher-chemistry-unit-review</code><br><code>npm: --skill teacher-chemistry-unit-review</code> | ✓ | primary<br>junior<br>senior | 化学 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-chemistry-homework-generation/SKILL.md"><code>teacher-chemistry-homework-generation</code></a><br>化学作业生成 Skill | <code>npx: teacher-chemistry-homework-generation</code><br><code>npm: --skill teacher-chemistry-homework-generation</code> | ✓ | primary<br>junior<br>senior | 化学 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-parent-report-lite/SKILL.md"><code>teacher-parent-report-lite</code></a><br>家长反馈报告 Lite Skill | <code>npx: teacher-parent-report-lite</code><br><code>npm: --skill teacher-parent-report-lite</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 报告生成 | 家长沟通 |
| <a href="skills/teacher-tools/teacher-lesson-planning/SKILL.md"><code>teacher-lesson-planning</code></a><br>老师备课 Skill | <code>npx: teacher-lesson-planning</code><br><code>npm: --skill teacher-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 教学设计、学情分析 | 老师备课 |
| <a href="skills/teacher-tools/teacher-history-lesson-planning/SKILL.md"><code>teacher-history-lesson-planning</code></a><br>历史备课 Skill | <code>npx: teacher-history-lesson-planning</code><br><code>npm: --skill teacher-history-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 历史 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-history-unit-review/SKILL.md"><code>teacher-history-unit-review</code></a><br>历史单元复习 Skill | <code>npx: teacher-history-unit-review</code><br><code>npm: --skill teacher-history-unit-review</code> | ✓ | primary<br>junior<br>senior | 历史 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-history-homework-generation/SKILL.md"><code>teacher-history-homework-generation</code></a><br>历史作业生成 Skill | <code>npx: teacher-history-homework-generation</code><br><code>npm: --skill teacher-history-homework-generation</code> | ✓ | primary<br>junior<br>senior | 历史 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-biology-lesson-planning/SKILL.md"><code>teacher-biology-lesson-planning</code></a><br>生物备课 Skill | <code>npx: teacher-biology-lesson-planning</code><br><code>npm: --skill teacher-biology-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 生物 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-biology-unit-review/SKILL.md"><code>teacher-biology-unit-review</code></a><br>生物单元复习 Skill | <code>npx: teacher-biology-unit-review</code><br><code>npm: --skill teacher-biology-unit-review</code> | ✓ | primary<br>junior<br>senior | 生物 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-biology-homework-generation/SKILL.md"><code>teacher-biology-homework-generation</code></a><br>生物作业生成 Skill | <code>npx: teacher-biology-homework-generation</code><br><code>npm: --skill teacher-biology-homework-generation</code> | ✓ | primary<br>junior<br>senior | 生物 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-math-lesson-planning/SKILL.md"><code>teacher-math-lesson-planning</code></a><br>数学备课 Skill | <code>npx: teacher-math-lesson-planning</code><br><code>npm: --skill teacher-math-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 数学 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-math-unit-review/SKILL.md"><code>teacher-math-unit-review</code></a><br>数学单元复习 Skill | <code>npx: teacher-math-unit-review</code><br><code>npm: --skill teacher-math-unit-review</code> | ✓ | primary<br>junior<br>senior | 数学 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-math-homework-generation/SKILL.md"><code>teacher-math-homework-generation</code></a><br>数学作业生成 Skill | <code>npx: teacher-math-homework-generation</code><br><code>npm: --skill teacher-math-homework-generation</code> | ✓ | primary<br>junior<br>senior | 数学 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-physics-lesson-planning/SKILL.md"><code>teacher-physics-lesson-planning</code></a><br>物理备课 Skill | <code>npx: teacher-physics-lesson-planning</code><br><code>npm: --skill teacher-physics-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 物理 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-physics-unit-review/SKILL.md"><code>teacher-physics-unit-review</code></a><br>物理单元复习 Skill | <code>npx: teacher-physics-unit-review</code><br><code>npm: --skill teacher-physics-unit-review</code> | ✓ | primary<br>junior<br>senior | 物理 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-physics-homework-generation/SKILL.md"><code>teacher-physics-homework-generation</code></a><br>物理作业生成 Skill | <code>npx: teacher-physics-homework-generation</code><br><code>npm: --skill teacher-physics-homework-generation</code> | ✓ | primary<br>junior<br>senior | 物理 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-english-lesson-planning/SKILL.md"><code>teacher-english-lesson-planning</code></a><br>英语备课 Skill | <code>npx: teacher-english-lesson-planning</code><br><code>npm: --skill teacher-english-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 英语 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-english-unit-review/SKILL.md"><code>teacher-english-unit-review</code></a><br>英语单元复习 Skill | <code>npx: teacher-english-unit-review</code><br><code>npm: --skill teacher-english-unit-review</code> | ✓ | primary<br>junior<br>senior | 英语 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-english-homework-generation/SKILL.md"><code>teacher-english-homework-generation</code></a><br>英语作业生成 Skill | <code>npx: teacher-english-homework-generation</code><br><code>npm: --skill teacher-english-homework-generation</code> | ✓ | primary<br>junior<br>senior | 英语 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-chinese-lesson-planning/SKILL.md"><code>teacher-chinese-lesson-planning</code></a><br>语文备课 Skill | <code>npx: teacher-chinese-lesson-planning</code><br><code>npm: --skill teacher-chinese-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 语文 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-chinese-unit-review/SKILL.md"><code>teacher-chinese-unit-review</code></a><br>语文单元复习 Skill | <code>npx: teacher-chinese-unit-review</code><br><code>npm: --skill teacher-chinese-unit-review</code> | ✓ | primary<br>junior<br>senior | 语文 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-chinese-homework-generation/SKILL.md"><code>teacher-chinese-homework-generation</code></a><br>语文作业生成 Skill | <code>npx: teacher-chinese-homework-generation</code><br><code>npm: --skill teacher-chinese-homework-generation</code> | ✓ | primary<br>junior<br>senior | 语文 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-politics-lesson-planning/SKILL.md"><code>teacher-politics-lesson-planning</code></a><br>政治备课 Skill | <code>npx: teacher-politics-lesson-planning</code><br><code>npm: --skill teacher-politics-lesson-planning</code> | ✓ | primary<br>junior<br>senior | 政治 | - | 教学设计 | 老师备课 |
| <a href="skills/teacher-tools/teacher-politics-unit-review/SKILL.md"><code>teacher-politics-unit-review</code></a><br>政治单元复习 Skill | <code>npx: teacher-politics-unit-review</code><br><code>npm: --skill teacher-politics-unit-review</code> | ✓ | primary<br>junior<br>senior | 政治 | - | 复习计划 | 单元复习 |
| <a href="skills/teacher-tools/teacher-politics-homework-generation/SKILL.md"><code>teacher-politics-homework-generation</code></a><br>政治作业生成 Skill | <code>npx: teacher-politics-homework-generation</code><br><code>npm: --skill teacher-politics-homework-generation</code> | ✓ | primary<br>junior<br>senior | 政治 | - | 作业生成 | 班级作业 |
| <a href="skills/teacher-tools/teacher-homework-generation/SKILL.md"><code>teacher-homework-generation</code></a><br>作业生成 Skill | <code>npx: teacher-homework-generation</code><br><code>npm: --skill teacher-homework-generation</code> | ✓ | primary<br>junior<br>senior | 教学管理 | - | 作业生成、分层练习 | 班级作业 |

### <a id="family-education"></a>家庭教育<br>Family Education

面向家长陪伴、亲子阅读、作业习惯和家庭沟通。

安装选择器：<code>npx: family-education</code><br><code>npm: --category family-education</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/family-education/family-homework-routine/SKILL.md"><code>family-homework-routine</code></a><br>家庭作业习惯 Skill | <code>npx: family-homework-routine</code><br><code>npm: --skill family-homework-routine</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 作业陪伴 |
| <a href="skills/family-education/family-school-communication/SKILL.md"><code>family-school-communication</code></a><br>家校沟通准备 Skill | <code>npx: family-school-communication</code><br><code>npm: --skill family-school-communication</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 家长沟通 |
| <a href="skills/family-education/agent-parent-companion/SKILL.md"><code>agent-parent-companion</code></a><br>家长陪学 Skill | <code>npx: agent-parent-companion</code><br><code>npm: --skill agent-parent-companion</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议、目标管理 | 家长陪学 |
| <a href="skills/family-education/family-holiday-learning/SKILL.md"><code>family-holiday-learning</code></a><br>假期家庭学习 Skill | <code>npx: family-holiday-learning</code><br><code>npm: --skill family-holiday-learning</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 寒暑假提升 |
| <a href="skills/family-education/family-screen-time-balance/SKILL.md"><code>family-screen-time-balance</code></a><br>屏幕时间管理 Skill | <code>npx: family-screen-time-balance</code><br><code>npm: --skill family-screen-time-balance</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 习惯培养 |
| <a href="skills/family-education/family-reading-companion/SKILL.md"><code>family-reading-companion</code></a><br>亲子阅读陪伴 Skill | <code>npx: family-reading-companion</code><br><code>npm: --skill family-reading-companion</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 亲子共读 |
| <a href="skills/family-education/family-emotion-support/SKILL.md"><code>family-emotion-support</code></a><br>学习情绪支持 Skill | <code>npx: family-emotion-support</code><br><code>npm: --skill family-emotion-support</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 亲子沟通 |
| <a href="skills/family-education/family-school-readiness/SKILL.md"><code>family-school-readiness</code></a><br>幼小衔接家庭准备 Skill | <code>npx: family-school-readiness</code><br><code>npm: --skill family-school-readiness</code> | ✓ | preschool<br>primary<br>junior | 家庭教育 | - | 陪学建议 | 入学准备 |

### <a id="language-learning"></a>语言学习<br>Language Learning

面向成人英语、出国考试、口语、听力和长期语言能力提升。

安装选择器：<code>npx: language-learning</code><br><code>npm: --category language-learning</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/language-learning/adult-language-learning/SKILL.md"><code>adult-language-learning</code></a><br>成人语言学习 Skill | <code>npx: adult-language-learning</code><br><code>npm: --skill adult-language-learning</code> | ✓ | adult | 语言学习 | - | 口语、听力、词汇 | 每日打卡 |
| <a href="skills/language-learning/toefl-prep/SKILL.md"><code>toefl-prep</code></a><br>托福备考 Skill | <code>npx: toefl-prep</code><br><code>npm: --skill toefl-prep</code> | ✓ | college<br>adult | 英语 | - | 听力、口语、阅读理解、写作 | 出国考试 |
| <a href="skills/language-learning/ielts-prep/SKILL.md"><code>ielts-prep</code></a><br>雅思备考 Skill | <code>npx: ielts-prep</code><br><code>npm: --skill ielts-prep</code> | ✓ | college<br>adult | 英语 | - | 听力、口语、阅读理解、写作 | 出国考试 |

### <a id="career-learning"></a>成人与职业学习<br>Career Learning

面向大学、成人学习、职业技能和考证场景。

安装选择器：<code>npx: career-learning</code><br><code>npm: --category career-learning</code>

| Skill | 安装选择器 | 独立使用 | 阶段 | 学科/领域 | 教材 | 能力 | 场景 |
| --- | --- | :---: | --- | --- | --- | --- | --- |
| <a href="skills/career-learning/college-data-analysis/SKILL.md"><code>college-data-analysis</code></a><br>数据分析 Skill | <code>npx: college-data-analysis</code><br><code>npm: --skill college-data-analysis</code> | ✓ | college<br>adult | 计算机 | - | 数据分析 | 职业技能 |
| <a href="skills/career-learning/college-cs-data-structure/SKILL.md"><code>college-cs-data-structure</code></a><br>数据结构 Skill | <code>npx: college-cs-data-structure</code><br><code>npm: --skill college-cs-data-structure</code> | ✓ | college | 计算机 | - | 算法、编程 | 课程学习 |
| <a href="skills/career-learning/college-cs-algorithm-interview/SKILL.md"><code>college-cs-algorithm-interview</code></a><br>算法面试 Skill | <code>npx: college-cs-algorithm-interview</code><br><code>npm: --skill college-cs-algorithm-interview</code> | ✓ | college<br>adult | 计算机 | - | 算法 | 面试准备 |
| <a href="skills/career-learning/adult-workplace-writing/SKILL.md"><code>adult-workplace-writing</code></a><br>职场写作 Skill | <code>npx: adult-workplace-writing</code><br><code>npm: --skill adult-workplace-writing</code> | ✓ | adult | 职业教育 | - | 写作、表达 | 职业技能 |
| <a href="skills/career-learning/adult-vocational-certificate/SKILL.md"><code>adult-vocational-certificate</code></a><br>职业证书备考 Skill | <code>npx: adult-vocational-certificate</code><br><code>npm: --skill adult-vocational-certificate</code> | ✓ | adult | 职业教育 | - | 知识记忆、考试冲刺 | 考证 |
| <a href="skills/career-learning/college-ai-foundation/SKILL.md"><code>college-ai-foundation</code></a><br>AI 基础 Skill | <code>npx: college-ai-foundation</code><br><code>npm: --skill college-ai-foundation</code> | ✓ | college<br>adult | 计算机 | - | AI 基础 | 兴趣学习 |
| <a href="skills/career-learning/college-cs-python/SKILL.md"><code>college-cs-python</code></a><br>Python 学习 Skill | <code>npx: college-cs-python</code><br><code>npm: --skill college-cs-python</code> | ✓ | college<br>adult | 计算机 | - | 编程 | 职业技能 |

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

- Hermes Agent：推荐使用 `npx hermes-edu-skills install hermes --config ~/.hermes/config.yaml` 写入 `skills.external_dirs`。
- OpenClaw / Codex / Claude Code：推荐使用 `npx hermes-edu-skills install <tool>` 导出扁平目录，每个 Skill 都是 `<skill-name>/SKILL.md`。
- Cursor：推荐使用 `npx hermes-edu-skills install cursor --workspace <project>` 生成 `.cursor/rules/*.mdc` 和本地 Skill Pack。
- 其它 Agent：推荐使用 `npx hermes-edu-skills export generic --target <dir>`，再把导出的目录接入目标 Agent 的 Skill / prompt / tool registry。
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
