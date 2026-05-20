---
name: "primary-english-letters"
description: "字母 Skill用于课前预习、每日打卡，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: primary_english_letters.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "拼读", "书写", "课前预习", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_english_letters.run"
    category: "english"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["拼读", "书写"]
    scenarios: ["课前预习", "每日打卡"]
---

# 字母 Skill

字母 Skill用于课前预习、每日打卡，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `primary_english_letters`
- `课前预习`
- `每日打卡`

示例表达：
- 开始字母 Skill
- 帮我安排课前预习
- 根据当前上下文执行字母 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_letters.run`
- Category: `english`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `拼读`, `书写`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
