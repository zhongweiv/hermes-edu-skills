---
name: "primary-english-letters-wy-grade1-volume1-unit3-daily-standard"
description: "外研版一年级上册第三单元的每日打卡字母，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: primary_english_letters_wy_grade1_volume1_unit3_daily_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "拼读", "书写", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_english_letters_wy_grade1_volume1_unit3_daily_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["拼读", "书写"]
    scenarios: ["每日打卡"]
---

# 外研版一年级上册第三单元每日打卡标准字母 Atomic Skill

外研版一年级上册第三单元的每日打卡字母，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `primary_english_letters_wy_grade1_volume1_unit3_daily_standard`
- `每日打卡`

示例表达：
- 开始外研版一年级上册第三单元每日打卡标准字母 Atomic Skill
- 帮我安排每日打卡
- 根据当前上下文执行外研版一年级上册第三单元每日打卡标准字母 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_letters_wy_grade1_volume1_unit3_daily_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `拼读`, `书写`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
