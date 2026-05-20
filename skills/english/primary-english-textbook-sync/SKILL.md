---
name: "primary-english-textbook-sync"
description: "英语课文同步 Skill用于课堂同步、课后作业，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: primary_english_textbook_sync.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "朗读", "背诵", "默写", "课堂同步", "课后作业"]
    source: hermes-edu-skills
    workflow: "primary_english_textbook_sync.run"
    category: "english"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["朗读", "背诵", "默写"]
    scenarios: ["课堂同步", "课后作业"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "memory.schedule_review", "memory.write"]
    requires_data: ["孩子年级", "当前学习情况", "家庭陪伴目标"]
---

# 英语课文同步 Skill

英语课文同步 Skill用于课堂同步、课后作业，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课堂同步
- 课后作业

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `primary_english_textbook_sync`
- `课堂同步`
- `课后作业`

示例表达：
- 开始英语课文同步 Skill
- 帮我安排课堂同步
- 根据当前上下文执行英语课文同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_textbook_sync.run`
- Category: `english`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `朗读`, `背诵`, `默写`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `memory.schedule_review`, `memory.write`
- Requires Data: `孩子年级`, `当前学习情况`, `家庭陪伴目标`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
