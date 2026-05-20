---
name: "agent-photo-question-general-grade5-volume1-unit4-photo-question-foundation"
description: "通用方案五年级上册第四单元的拍照答疑拍照答疑，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: agent_photo_question_general_grade5_volume1_unit4_photo_question_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "综合", "AI 讲题", "图片识题", "拍照答疑"]
    source: hermes-edu-skills
    workflow: "agent_photo_question_general_grade5_volume1_unit4_photo_question_foundation.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["综合"]
    abilities: ["AI 讲题", "图片识题"]
    scenarios: ["拍照答疑"]
---

# 通用方案五年级上册第四单元拍照答疑基础拍照答疑 Atomic Skill

通用方案五年级上册第四单元的拍照答疑拍照答疑，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 拍照答疑

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_photo_question_general_grade5_volume1_unit4_photo_question_foundation`
- `拍照答疑`

示例表达：
- 开始通用方案五年级上册第四单元拍照答疑基础拍照答疑 Atomic Skill
- 帮我安排拍照答疑
- 根据当前上下文执行通用方案五年级上册第四单元拍照答疑基础拍照答疑 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_photo_question_general_grade5_volume1_unit4_photo_question_foundation.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `综合`
- Abilities: `AI 讲题`, `图片识题`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
