---
name: "teacher-lesson-planning-general-grade2-volume2-scope2-lesson-planning-standard"
description: "通用方案二年级下册组织场景二的老师备课老师备课，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: teacher_lesson_planning_general_grade2_volume2_scope2_lesson_planning_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "教学管理", "教学设计", "学情分析", "老师备课"]
    source: hermes-edu-skills
    workflow: "teacher_lesson_planning_general_grade2_volume2_scope2_lesson_planning_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["教学管理"]
    abilities: ["教学设计", "学情分析"]
    scenarios: ["老师备课"]
---

# 通用方案二年级下册组织场景二老师备课标准老师备课 Atomic Skill

通用方案二年级下册组织场景二的老师备课老师备课，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 老师备课

适用角色：
- 老师
- 学校管理者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `teacher_lesson_planning_general_grade2_volume2_scope2_lesson_planning_standard`
- `老师备课`

示例表达：
- 开始通用方案二年级下册组织场景二老师备课标准老师备课 Atomic Skill
- 帮我安排老师备课
- 根据当前上下文执行通用方案二年级下册组织场景二老师备课标准老师备课 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_lesson_planning_general_grade2_volume2_scope2_lesson_planning_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `教学管理`
- Abilities: `教学设计`, `学情分析`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
