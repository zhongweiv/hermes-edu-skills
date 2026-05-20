---
name: "agent-question-explanation-general-grade7-volume1-unit2-homework-foundation"
description: "通用方案七年级上册第二单元的课后作业AI 讲题，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: agent_question_explanation_general_grade7_volume1_unit2_homework_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "学习能力", "AI 讲题", "课后作业"]
    source: hermes-edu-skills
    workflow: "agent_question_explanation_general_grade7_volume1_unit2_homework_foundation.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["学习能力"]
    abilities: ["AI 讲题"]
    scenarios: ["课后作业"]
---

# 通用方案七年级上册第二单元课后作业基础AI 讲题 Atomic Skill

通用方案七年级上册第二单元的课后作业AI 讲题，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课后作业

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_question_explanation_general_grade7_volume1_unit2_homework_foundation`
- `课后作业`

示例表达：
- 开始通用方案七年级上册第二单元课后作业基础AI 讲题 Atomic Skill
- 帮我安排课后作业
- 根据当前上下文执行通用方案七年级上册第二单元课后作业基础AI 讲题 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_question_explanation_general_grade7_volume1_unit2_homework_foundation.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `学习能力`
- Abilities: `AI 讲题`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
