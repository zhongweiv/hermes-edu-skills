---
name: "preschool-pinyin-foundation-general-preschool-k3-year-module1-daily-standard"
description: "通用启蒙方案大班全年启蒙模块一的每日打卡拼音启蒙，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: preschool_pinyin_foundation_general_preschool_k3_year_module1_daily_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "语文", "拼读", "入学准备", "每日打卡"]
    source: hermes-edu-skills
    workflow: "preschool_pinyin_foundation_general_preschool_k3_year_module1_daily_standard.run"
    category: "atomic"
    stages: ["preschool"]
    subjects: ["语文"]
    abilities: ["拼读", "入学准备"]
    scenarios: ["每日打卡"]
---

# 通用启蒙方案大班全年启蒙模块一每日打卡标准拼音启蒙 Atomic Skill

通用启蒙方案大班全年启蒙模块一的每日打卡拼音启蒙，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_pinyin_foundation_general_preschool_k3_year_module1_daily_standard`
- `每日打卡`

示例表达：
- 开始通用启蒙方案大班全年启蒙模块一每日打卡标准拼音启蒙 Atomic Skill
- 帮我安排每日打卡
- 根据当前上下文执行通用启蒙方案大班全年启蒙模块一每日打卡标准拼音启蒙 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_pinyin_foundation_general_preschool_k3_year_module1_daily_standard.run`
- Category: `atomic`
- Stages: `preschool`
- Subjects: `语文`
- Abilities: `拼读`, `入学准备`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
