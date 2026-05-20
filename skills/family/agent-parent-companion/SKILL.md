---
name: "agent-parent-companion"
description: "家长陪学 Skill用于家长陪学，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_parent_companion.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "家庭教育", "陪学建议", "目标管理", "家长陪学"]
    source: hermes-edu-skills
    workflow: "agent_parent_companion.run"
    category: "family"
    stages: ["preschool", "primary", "junior"]
    subjects: ["家庭教育"]
    abilities: ["陪学建议", "目标管理"]
    scenarios: ["家长陪学"]
---

# 家长陪学 Skill

家长陪学 Skill用于家长陪学，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 家长陪学

适用角色：
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_parent_companion`
- `家长陪学`

示例表达：
- 开始家长陪学 Skill
- 帮我安排家长陪学
- 根据当前上下文执行家长陪学 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_parent_companion.run`
- Category: `family`
- Stages: `preschool`, `primary`, `junior`
- Subjects: `家庭教育`
- Abilities: `陪学建议`, `目标管理`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
