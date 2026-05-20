---
name: "junior-english-reading-wy-grade7-volume1-unit2-reading-foundation"
description: "外研版七年级上册第二单元的阅读训练初中英语阅读，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: junior_english_reading_wy_grade7_volume1_unit2_reading_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "英语", "阅读理解", "阅读训练"]
    source: hermes-edu-skills
    workflow: "junior_english_reading_wy_grade7_volume1_unit2_reading_foundation.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["英语"]
    abilities: ["阅读理解"]
    scenarios: ["阅读训练"]
---

# 外研版七年级上册第二单元阅读训练基础初中英语阅读 Atomic Skill

外研版七年级上册第二单元的阅读训练初中英语阅读，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 阅读训练

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_english_reading_wy_grade7_volume1_unit2_reading_foundation`
- `阅读训练`

示例表达：
- 开始外研版七年级上册第二单元阅读训练基础初中英语阅读 Atomic Skill
- 帮我安排阅读训练
- 根据当前上下文执行外研版七年级上册第二单元阅读训练基础初中英语阅读 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_english_reading_wy_grade7_volume1_unit2_reading_foundation.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `英语`
- Abilities: `阅读理解`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
