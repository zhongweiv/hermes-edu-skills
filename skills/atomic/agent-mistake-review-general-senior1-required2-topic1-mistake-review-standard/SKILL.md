---
name: "agent-mistake-review-general-senior1-required2-topic1-mistake-review-standard"
description: "通用方案高一必修二专题一的错题订正错题复习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: agent_mistake_review_general_senior1_required2_topic1_mistake_review_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "学习能力", "错题订正", "复习计划", "错题订正"]
    source: hermes-edu-skills
    workflow: "agent_mistake_review_general_senior1_required2_topic1_mistake_review_standard.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["学习能力"]
    abilities: ["错题订正", "复习计划"]
    scenarios: ["错题订正"]
---

# 通用方案高一必修二专题一错题订正标准错题复习 Atomic Skill

通用方案高一必修二专题一的错题订正错题复习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 错题订正

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_mistake_review_general_senior1_required2_topic1_mistake_review_standard`
- `错题订正`

示例表达：
- 开始通用方案高一必修二专题一错题订正标准错题复习 Atomic Skill
- 帮我安排错题订正
- 根据当前上下文执行通用方案高一必修二专题一错题订正标准错题复习 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_mistake_review_general_senior1_required2_topic1_mistake_review_standard.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `学习能力`
- Abilities: `错题订正`, `复习计划`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
