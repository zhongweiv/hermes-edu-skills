---
name: "agent-parent-companion-general-grade1-volume1-unit3-parent-companion-standard"
description: "通用方案一年级上册第三单元的家长陪学家长陪学，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: agent_parent_companion_general_grade1_volume1_unit3_parent_companion_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "家庭教育", "陪学建议", "目标管理", "家长陪学"]
    source: hermes-edu-skills
    workflow: "agent_parent_companion_general_grade1_volume1_unit3_parent_companion_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["家庭教育"]
    abilities: ["陪学建议", "目标管理"]
    scenarios: ["家长陪学"]
---

# 通用方案一年级上册第三单元家长陪学标准家长陪学 Atomic Skill

通用方案一年级上册第三单元的家长陪学家长陪学，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 家长陪学

适用角色：
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_parent_companion_general_grade1_volume1_unit3_parent_companion_standard`
- `家长陪学`

示例表达：
- 开始通用方案一年级上册第三单元家长陪学标准家长陪学 Atomic Skill
- 帮我安排家长陪学
- 根据当前上下文执行通用方案一年级上册第三单元家长陪学标准家长陪学 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_parent_companion_general_grade1_volume1_unit3_parent_companion_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `家庭教育`
- Abilities: `陪学建议`, `目标管理`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
