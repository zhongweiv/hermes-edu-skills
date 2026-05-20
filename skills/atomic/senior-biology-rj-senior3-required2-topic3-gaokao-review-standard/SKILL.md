---
name: "senior-biology-rj-senior3-required2-topic3-gaokao-review-standard"
description: "人教版高三必修二专题三的高考复习高中生物，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: senior_biology_rj_senior3_required2_topic3_gaokao_review_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "生物", "知识记忆", "实验理解", "高考复习"]
    source: hermes-edu-skills
    workflow: "senior_biology_rj_senior3_required2_topic3_gaokao_review_standard.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["生物"]
    abilities: ["知识记忆", "实验理解"]
    scenarios: ["高考复习"]
---

# 人教版高三必修二专题三高考复习标准高中生物 Atomic Skill

人教版高三必修二专题三的高考复习高中生物，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 高考复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_biology_rj_senior3_required2_topic3_gaokao_review_standard`
- `高考复习`

示例表达：
- 开始人教版高三必修二专题三高考复习标准高中生物 Atomic Skill
- 帮我安排高考复习
- 根据当前上下文执行人教版高三必修二专题三高考复习标准高中生物 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_biology_rj_senior3_required2_topic3_gaokao_review_standard.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `生物`
- Abilities: `知识记忆`, `实验理解`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
