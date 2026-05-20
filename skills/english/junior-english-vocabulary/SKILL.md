---
name: "junior-english-vocabulary"
description: "初中英语词汇 Skill用于每日打卡、中考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: junior_english_vocabulary.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "英语", "知识记忆", "每日打卡", "中考复习"]
    source: hermes-edu-skills
    workflow: "junior_english_vocabulary.run"
    category: "english"
    stages: ["junior"]
    subjects: ["英语"]
    abilities: ["知识记忆"]
    scenarios: ["每日打卡", "中考复习"]
---

# 初中英语词汇 Skill

初中英语词汇 Skill用于每日打卡、中考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡
- 中考复习

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `junior_english_vocabulary`
- `每日打卡`
- `中考复习`

示例表达：
- 开始初中英语词汇 Skill
- 帮我安排每日打卡
- 根据当前上下文执行初中英语词汇 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_english_vocabulary.run`
- Category: `english`
- Stages: `junior`
- Subjects: `英语`
- Abilities: `知识记忆`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
