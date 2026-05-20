---
name: "agent-safety-guard"
description: "安全守护 Skill用于安全审核、消费保护，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_safety_guard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "senior", "college", "adult", "内容安全", "内容安全", "未成年人保护", "安全审核", "消费保护"]
    source: hermes-edu-skills
    workflow: "agent_safety_guard.run"
    category: "system"
    stages: ["preschool", "primary", "junior", "senior", "college", "adult"]
    subjects: ["内容安全"]
    abilities: ["内容安全", "未成年人保护"]
    scenarios: ["安全审核", "消费保护"]
---

# 安全守护 Skill

安全守护 Skill用于安全审核、消费保护，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 安全审核
- 消费保护

适用角色：
- 学习者
- 家长
- 老师
- 学校管理者
- 机构管理者
- 运营人员

## 调用信号 / Invocation Signals

意图：
- `agent_safety_guard`
- `安全审核`
- `消费保护`

示例表达：
- 开始安全守护 Skill
- 帮我安排安全审核
- 根据当前上下文执行安全守护 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_safety_guard.run`
- Category: `system`
- Stages: `preschool`, `primary`, `junior`, `senior`, `college`, `adult`
- Subjects: `内容安全`
- Abilities: `内容安全`, `未成年人保护`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
