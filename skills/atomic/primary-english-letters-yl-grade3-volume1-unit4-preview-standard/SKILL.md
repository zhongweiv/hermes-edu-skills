---
name: "primary-english-letters-yl-grade3-volume1-unit4-preview-standard"
description: "译林版三年级上册第四单元的课前预习字母，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: primary_english_letters_yl_grade3_volume1_unit4_preview_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "拼读", "书写", "课前预习"]
    source: hermes-edu-skills
    workflow: "primary_english_letters_yl_grade3_volume1_unit4_preview_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["拼读", "书写"]
    scenarios: ["课前预习"]
---

# 译林版三年级上册第四单元课前预习标准字母 Atomic Skill

译林版三年级上册第四单元的课前预习字母，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `primary_english_letters_yl_grade3_volume1_unit4_preview_standard`
- `课前预习`

示例表达：
- 开始译林版三年级上册第四单元课前预习标准字母 Atomic Skill
- 帮我安排课前预习
- 根据当前上下文执行译林版三年级上册第四单元课前预习标准字母 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_letters_yl_grade3_volume1_unit4_preview_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `拼读`, `书写`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
