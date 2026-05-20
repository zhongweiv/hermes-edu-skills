---
name: "school-resource-planning-general-grade4-volume1-scope1-operation-config-standard"
description: "通用方案四年级上册组织场景一的运营配置校本资源规划，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: school_resource_planning_general_grade4_volume1_scope1_operation_config_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "学校管理", "资源规划", "运营配置"]
    source: hermes-edu-skills
    workflow: "school_resource_planning_general_grade4_volume1_scope1_operation_config_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["学校管理"]
    abilities: ["资源规划"]
    scenarios: ["运营配置"]
---

# 通用方案四年级上册组织场景一运营配置标准校本资源规划 Atomic Skill

通用方案四年级上册组织场景一的运营配置校本资源规划，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 运营配置

适用角色：
- 学校管理者

## 调用信号 / Invocation Signals

意图：
- `school_resource_planning_general_grade4_volume1_scope1_operation_config_standard`
- `运营配置`

示例表达：
- 开始通用方案四年级上册组织场景一运营配置标准校本资源规划 Atomic Skill
- 帮我安排运营配置
- 根据当前上下文执行通用方案四年级上册组织场景一运营配置标准校本资源规划 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `school_resource_planning_general_grade4_volume1_scope1_operation_config_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `学校管理`
- Abilities: `资源规划`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
