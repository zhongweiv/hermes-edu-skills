---
name: "senior-math-derivative-bs-senior3-required2-topic1-practice-standard"
description: "北师大版高三必修二专题一的专项训练导数，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: senior_math_derivative_bs_senior3_required2_topic1_practice_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "数学", "逻辑", "计算", "专项训练"]
    source: hermes-edu-skills
    workflow: "senior_math_derivative_bs_senior3_required2_topic1_practice_standard.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["数学"]
    abilities: ["逻辑", "计算"]
    scenarios: ["专项训练"]
---

# 北师大版高三必修二专题一专项训练标准导数 Atomic Skill

北师大版高三必修二专题一的专项训练导数，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 专项训练

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_math_derivative_bs_senior3_required2_topic1_practice_standard`
- `专项训练`

示例表达：
- 开始北师大版高三必修二专题一专项训练标准导数 Atomic Skill
- 帮我安排专项训练
- 根据当前上下文执行北师大版高三必修二专题一专项训练标准导数 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_math_derivative_bs_senior3_required2_topic1_practice_standard.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `数学`
- Abilities: `逻辑`, `计算`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
