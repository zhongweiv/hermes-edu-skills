---
name: "teacher-class-analysis-general-senior2-required1-scope1-learning-analysis-standard"
description: "通用方案高二必修一组织场景一的学情分析班级学情分析，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: teacher_class_analysis_general_senior2_required1_scope1_learning_analysis_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "教学管理", "学情分析", "学情分析"]
    source: hermes-edu-skills
    workflow: "teacher_class_analysis_general_senior2_required1_scope1_learning_analysis_standard.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["教学管理"]
    abilities: ["学情分析"]
    scenarios: ["学情分析"]
---

# 通用方案高二必修一组织场景一学情分析标准班级学情分析 Atomic Skill

通用方案高二必修一组织场景一的学情分析班级学情分析，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 学情分析

适用角色：
- 老师
- 学校管理者

## 调用信号 / Invocation Signals

意图：
- `teacher_class_analysis_general_senior2_required1_scope1_learning_analysis_standard`
- `学情分析`

示例表达：
- 开始通用方案高二必修一组织场景一学情分析标准班级学情分析 Atomic Skill
- 帮我安排学情分析
- 根据当前上下文执行通用方案高二必修一组织场景一学情分析标准班级学情分析 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_class_analysis_general_senior2_required1_scope1_learning_analysis_standard.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `教学管理`
- Abilities: `学情分析`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
