---
name: "primary-english-exam-review-yl-grade6-volume2-unit1-sprint-standard"
description: "译林版六年级下册第一单元的考前冲刺小学英语考试复习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: primary_english_exam_review_yl_grade6_volume2_unit1_sprint_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "考试冲刺", "考前冲刺"]
    source: hermes-edu-skills
    workflow: "primary_english_exam_review_yl_grade6_volume2_unit1_sprint_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["考试冲刺"]
    scenarios: ["考前冲刺"]
---

# 译林版六年级下册第一单元考前冲刺标准小学英语考试复习 Atomic Skill

译林版六年级下册第一单元的考前冲刺小学英语考试复习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考前冲刺

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_english_exam_review_yl_grade6_volume2_unit1_sprint_standard`
- `考前冲刺`

示例表达：
- 开始译林版六年级下册第一单元考前冲刺标准小学英语考试复习 Atomic Skill
- 帮我安排考前冲刺
- 根据当前上下文执行译林版六年级下册第一单元考前冲刺标准小学英语考试复习 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_exam_review_yl_grade6_volume2_unit1_sprint_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `考试冲刺`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
