---
name: "college-cs-data-structure"
description: "数据结构 Skill用于同步巩固、考研复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: college_cs_data_structure.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "计算机", "编程", "算法", "同步巩固", "考研复习"]
    source: hermes-edu-skills
    workflow: "college_cs_data_structure.run"
    category: "computer-science"
    stages: ["college"]
    subjects: ["计算机"]
    abilities: ["编程", "算法"]
    scenarios: ["同步巩固", "考研复习"]
---

# 数据结构 Skill

数据结构 Skill用于同步巩固、考研复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 同步巩固
- 考研复习

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_cs_data_structure`
- `同步巩固`
- `考研复习`

示例表达：
- 开始数据结构 Skill
- 帮我安排同步巩固
- 根据当前上下文执行数据结构 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_cs_data_structure.run`
- Category: `computer-science`
- Stages: `college`
- Subjects: `计算机`
- Abilities: `编程`, `算法`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
