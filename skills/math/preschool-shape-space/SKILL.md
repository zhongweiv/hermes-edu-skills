---
name: "preschool-shape-space"
description: "图形空间 Skill用于图形游戏、入学准备，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: preschool_shape_space.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "数学", "空间想象", "图形认知", "图形游戏", "入学准备"]
    source: hermes-edu-skills
    workflow: "preschool_shape_space.run"
    category: "math"
    stages: ["preschool"]
    subjects: ["数学"]
    abilities: ["空间想象", "图形认知"]
    scenarios: ["图形游戏", "入学准备"]
---

# 图形空间 Skill

图形空间 Skill用于图形游戏、入学准备，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 图形游戏
- 入学准备

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_shape_space`
- `图形游戏`
- `入学准备`

示例表达：
- 开始图形空间 Skill
- 帮我安排图形游戏
- 根据当前上下文执行图形空间 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_shape_space.run`
- Category: `math`
- Stages: `preschool`
- Subjects: `数学`
- Abilities: `空间想象`, `图形认知`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
