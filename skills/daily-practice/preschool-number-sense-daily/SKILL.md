---
name: "preschool-number-sense-daily"
description: "学前数感每日练 Skill是面向数感游戏、每日打卡的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: preschool_number_sense_daily.run."
version: "0.6.0"
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
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    export_mode: "installable"
    release_channel: "public"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 学前数感每日练 Skill

学前数感每日练 Skill是面向数感游戏、每日打卡的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

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
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `public`

成熟度备注：
- 已收缩为产品级能力包，年级、册别、单元、知识点和难度通过参数传入。

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
