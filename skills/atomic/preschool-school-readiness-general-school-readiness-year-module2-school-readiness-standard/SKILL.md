---
name: "preschool-school-readiness-general-school-readiness-year-module2-school-readiness-standard"
description: "通用启蒙方案幼小衔接全年启蒙模块二的入学准备幼小衔接综合，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: preschool_school_readiness_general_school_readiness_year_module2_school_readiness_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "综合", "识字", "拼读", "数感", "习惯", "入学准备"]
    source: hermes-edu-skills
    workflow: "preschool_school_readiness_general_school_readiness_year_module2_school_readiness_standard.run"
    category: "atomic"
    stages: ["preschool"]
    subjects: ["综合"]
    abilities: ["识字", "拼读", "数感", "习惯"]
    scenarios: ["入学准备"]
---

# 通用启蒙方案幼小衔接全年启蒙模块二入学准备标准幼小衔接综合 Atomic Skill

通用启蒙方案幼小衔接全年启蒙模块二的入学准备幼小衔接综合，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 入学准备

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_school_readiness_general_school_readiness_year_module2_school_readiness_standard`
- `入学准备`

示例表达：
- 开始通用启蒙方案幼小衔接全年启蒙模块二入学准备标准幼小衔接综合 Atomic Skill
- 帮我安排入学准备
- 根据当前上下文执行通用启蒙方案幼小衔接全年启蒙模块二入学准备标准幼小衔接综合 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_school_readiness_general_school_readiness_year_module2_school_readiness_standard.run`
- Category: `atomic`
- Stages: `preschool`
- Subjects: `综合`
- Abilities: `识字`, `拼读`, `数感`, `习惯`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
