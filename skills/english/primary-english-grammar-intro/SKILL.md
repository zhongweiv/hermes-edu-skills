---
name: "primary-english-grammar-intro"
description: "语法启蒙 Skill用于专项训练、考试复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: primary_english_grammar_intro.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "语法", "专项训练", "考试复习"]
    source: hermes-edu-skills
    workflow: "primary_english_grammar_intro.run"
    category: "english"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["语法"]
    scenarios: ["专项训练", "考试复习"]
---

# 语法启蒙 Skill

语法启蒙 Skill用于专项训练、考试复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 专项训练
- 考试复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_english_grammar_intro`
- `专项训练`
- `考试复习`

示例表达：
- 开始语法启蒙 Skill
- 帮我安排专项训练
- 根据当前上下文执行语法启蒙 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_grammar_intro.run`
- Category: `english`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `语法`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
