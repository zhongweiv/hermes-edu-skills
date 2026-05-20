---
name: "agent-focus-training"
description: "把“孩子不专心”拆成可观察的学习环境、任务长度和反馈节奏，生成能立刻执行的专注训练方案。 Workflow: agent_focus_training.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "专注", "每日打卡"]
    source: hermes-edu-skills
    workflow: "agent_focus_training.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["专注"]
    scenarios: ["每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 专注力训练 Skill

把“孩子不专心”拆成可观察的学习环境、任务长度和反馈节奏，生成能立刻执行的专注训练方案。

## 这个 Skill 解决什么问题 / Problem

把“孩子不专心”拆成可观察的学习环境、任务长度和反馈节奏，生成能立刻执行的专注训练方案。

## 最适合 / Best For

- 写作业拖拉
- 短时学习容易走神
- 家长想建立可持续的学习节奏

## 不适合 / Not For

- 医学诊断或替代专业评估
- 用惩罚、羞辱或过度监控来压学生学习

## 使用前请准备 / Inputs

- 年龄/年级
- 当前最容易分心的场景
- 一次可专注时长
- 学习任务类型
- 家庭可执行的规则

## 推荐工作流 / Recommended Workflow

- 识别分心触发点
- 把任务切成 5-25 分钟小段
- 设计开始仪式和结束反馈
- 设置低压力记录方式
- 一周后根据记录调整

## 输出格式 / Output Format

- 专注画像
- 今日训练流程
- 环境调整清单
- 家长提示语
- 一周跟踪表

## 质量检查 / Quality Checks

- 避免贴标签
- 任务时长要现实
- 反馈要正向具体
- 必须给出可观察指标

## 没有平台工具时 / Standalone Fallback

- 没有计时工具时，输出手动打勾表。
- 没有历史数据时，从今天一次学习任务开始记录。

## 示例提示 / Example Prompts

- 三年级写作业 10 分钟就走神，帮我设计今晚的专注训练。
- 孩子复习英语总拖拉，给我一个不吵架的执行方案。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_focus_training`
- `learning_core`
- `每日打卡`

示例表达：
- 开始专注力训练 Skill
- 帮我做每日打卡
- 根据当前上下文执行专注力训练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_focus_training.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `专注`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
