---
name: "school-teacher-usage-general-senior1-required1-scope1-analytics-standard"
description: "通用方案高一必修一组织场景一的数据分析老师使用分析，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: school_teacher_usage_general_senior1_required1_scope1_analytics_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "学校管理", "运营分析", "数据分析"]
    source: hermes-edu-skills
    workflow: "school_teacher_usage_general_senior1_required1_scope1_analytics_standard.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["学校管理"]
    abilities: ["运营分析"]
    scenarios: ["数据分析"]
---

# 通用方案高一必修一组织场景一数据分析标准老师使用分析 Atomic Skill

通用方案高一必修一组织场景一的数据分析老师使用分析，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 数据分析

适用角色：
- 学校管理者

## 调用信号 / Invocation Signals

意图：
- `school_teacher_usage_general_senior1_required1_scope1_analytics_standard`
- `数据分析`

示例表达：
- 开始通用方案高一必修一组织场景一数据分析标准老师使用分析 Atomic Skill
- 帮我安排数据分析
- 根据当前上下文执行通用方案高一必修一组织场景一数据分析标准老师使用分析 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `school_teacher_usage_general_senior1_required1_scope1_analytics_standard.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `学校管理`
- Abilities: `运营分析`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
