---
name: "teacher-mistake-clustering-general-senior1-required1-topic3-mistake-review-foundation"
description: "通用方案高一必修一专题三的错题订正班级错题归因，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: teacher_mistake_clustering_general_senior1_required1_topic3_mistake_review_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "教学管理", "错题订正", "学情分析", "错题订正"]
    source: hermes-edu-skills
    workflow: "teacher_mistake_clustering_general_senior1_required1_topic3_mistake_review_foundation.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["教学管理"]
    abilities: ["错题订正", "学情分析"]
    scenarios: ["错题订正"]
---

# 通用方案高一必修一专题三错题订正基础班级错题归因 Atomic Skill

通用方案高一必修一专题三的错题订正班级错题归因，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 错题订正

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_mistake_clustering_general_senior1_required1_topic3_mistake_review_foundation`
- `错题订正`

示例表达：
- 开始通用方案高一必修一专题三错题订正基础班级错题归因 Atomic Skill
- 帮我安排错题订正
- 根据当前上下文执行通用方案高一必修一专题三错题订正基础班级错题归因 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_mistake_clustering_general_senior1_required1_topic3_mistake_review_foundation.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `教学管理`
- Abilities: `错题订正`, `学情分析`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
