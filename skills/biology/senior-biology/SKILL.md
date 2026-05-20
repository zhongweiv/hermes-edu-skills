---
name: "senior-biology"
description: "高中生物 Skill用于同步巩固、高考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: senior_biology.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "生物", "知识记忆", "实验理解", "同步巩固", "高考复习"]
    source: hermes-edu-skills
    workflow: "senior_biology.run"
    category: "biology"
    stages: ["senior"]
    subjects: ["生物"]
    abilities: ["知识记忆", "实验理解"]
    scenarios: ["同步巩固", "高考复习"]
---

# 高中生物 Skill

高中生物 Skill用于同步巩固、高考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 同步巩固
- 高考复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_biology`
- `同步巩固`
- `高考复习`

示例表达：
- 开始高中生物 Skill
- 帮我安排同步巩固
- 根据当前上下文执行高中生物 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_biology.run`
- Category: `biology`
- Stages: `senior`
- Subjects: `生物`
- Abilities: `知识记忆`, `实验理解`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
