---
name: "primary-reading-daily"
description: "把小学阅读练成“读懂、找依据、会表达”的短训练，而不是泛泛问读后感。 Workflow: primary_reading_daily.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "语文", "阅读理解", "阅读训练", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_reading_daily.run"
    category: "daily-practice"
    stages: ["primary"]
    subjects: ["语文"]
    abilities: ["阅读理解"]
    scenarios: ["阅读训练", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 小学阅读每日练 Skill

把小学阅读练成“读懂、找依据、会表达”的短训练，而不是泛泛问读后感。

## 这个 Skill 解决什么问题 / Problem

把小学阅读练成“读懂、找依据、会表达”的短训练，而不是泛泛问读后感。

## 最适合 / Best For

- 每日阅读理解
- 课外短文训练
- 语文阅读薄弱
- 家长陪读

## 不适合 / Not For

- 替孩子写完整读后感
- 没有文本却要求精准题目

## 使用前请准备 / Inputs

- 阅读文本或文章主题
- 年级
- 训练目标
- 题量
- 学生常错类型

## 推荐工作流 / Recommended Workflow

- 先确认文章大意
- 设计找信息/推断/表达三类问题
- 要求答案回到文本依据
- 讲解错误原因
- 给一个表达提升小任务

## 输出格式 / Output Format

- 阅读目标
- 问题组
- 参考答案
- 文本依据
- 表达提升

## 质量检查 / Quality Checks

- 问题要贴合文本
- 答案必须有依据
- 不要过度拔高
- 训练时间要短

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴短文。
- 没有批改工具时，提供参考答案和自查标准。

## 示例提示 / Example Prompts

- 根据这篇短文，给四年级孩子出 5 道阅读题并讲答案依据。
- 孩子阅读总写不完整，帮我做每日训练。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 阅读训练
- 每日打卡

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_reading_daily`
- `daily_practice`
- `阅读训练`
- `每日打卡`

示例表达：
- 开始小学阅读每日练 Skill
- 帮我做阅读训练
- 根据当前上下文执行小学阅读每日练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_reading_daily.run`
- Category: `daily-practice`
- Stages: `primary`
- Subjects: `语文`
- Abilities: `阅读理解`
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

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`
- Semesters: `上册`, `下册`
- Scenarios: `阅读训练`, `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
