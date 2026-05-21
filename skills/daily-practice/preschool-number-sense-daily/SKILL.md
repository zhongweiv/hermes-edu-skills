---
name: "preschool-number-sense-daily"
description: "把学前数感训练变成可触摸、可比较、可说出来的日常小游戏，而不是提前刷小学题。 Workflow: preschool_number_sense_daily.run."
version: "0.12.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "数学", "数感", "数感游戏", "每日打卡"]
    source: hermes-edu-skills
    workflow: "preschool_number_sense_daily.run"
    category: "daily-practice"
    stages: ["preschool"]
    subjects: ["数学"]
    abilities: ["数感"]
    scenarios: ["数感游戏", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["年级/水平", "今日知识点或单元", "可用时间", "最近错题或薄弱点", "使用场景：学生自练/家长陪练/老师布置"]
---

# 学前数感每日练 Skill

把学前数感训练变成可触摸、可比较、可说出来的日常小游戏，而不是提前刷小学题。

## 这个 Skill 解决什么问题 / Problem

把学前数感训练变成可触摸、可比较、可说出来的日常小游戏，而不是提前刷小学题。

## 最适合 / Best For

- 幼小衔接数感启蒙
- 数量比较
- 简单分合
- 亲子数学游戏

## 不适合 / Not For

- 提前拔高到小学计算题海
- 用速度和分数压孩子
- 没有实物参与的抽象讲解

## 使用前请准备 / Inputs

- 孩子年龄
- 当前数感目标
- 可用物品
- 可用时间
- 孩子容易卡住的点

## 推荐工作流 / Recommended Workflow

- 用家里实物建立数量情境。
- 让孩子先估一估、摆一摆、说一说。
- 安排 3 轮数量、比较或分合小游戏。
- 用一个生活问题检查迁移。
- 记录下一次要复现的数感动作。

## 输出格式 / Output Format

- 今日目标
- 材料准备
- 游戏流程
- 家长提问
- 下次复现

## 质量检查 / Quality Checks

- 必须从实物和语言出发
- 不提前题海化
- 任务时间要短
- 家长话术要鼓励而非催促

## 没有平台工具时 / Standalone Fallback

- 没有教具时，使用积木、筷子、水果等家庭物品。
- 没有历史记录时，从 1-10 数量比较开始。

## 示例提示 / Example Prompts

- 6 岁孩子数到 20 但不会比较多少，帮我设计数感游戏。
- 今晚用家里的积木做 10 分钟数学启蒙。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 数感游戏
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_number_sense_daily`
- `daily_practice`
- `数感游戏`
- `每日打卡`

示例表达：
- 开始学前数感每日练 Skill
- 帮我做数感游戏
- 根据当前上下文执行学前数感每日练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_number_sense_daily.run`
- Category: `daily-practice`
- Stages: `preschool`
- Subjects: `数学`
- Abilities: `数感`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `年级/水平`, `今日知识点或单元`, `可用时间`, `最近错题或薄弱点`, `使用场景：学生自练/家长陪练/老师布置`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `小班`, `中班`, `大班`, `幼小衔接`
- Semesters: `全年`
- Scenarios: `数感游戏`, `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
