---
name: "teacher-homework-generation-general-senior1-required1-topic2-class-homework-foundation"
description: "通用方案高一必修一专题二的班级作业作业生成，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: teacher_homework_generation_general_senior1_required1_topic2_class_homework_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "教学管理", "作业生成", "分层练习", "班级作业"]
    source: hermes-edu-skills
    workflow: "teacher_homework_generation_general_senior1_required1_topic2_class_homework_foundation.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["教学管理"]
    abilities: ["作业生成", "分层练习"]
    scenarios: ["班级作业"]
---

# 通用方案高一必修一专题二班级作业基础作业生成 Atomic Skill

通用方案高一必修一专题二的班级作业作业生成，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 班级作业

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_homework_generation_general_senior1_required1_topic2_class_homework_foundation`
- `班级作业`

示例表达：
- 开始通用方案高一必修一专题二班级作业基础作业生成 Atomic Skill
- 帮我安排班级作业
- 根据当前上下文执行通用方案高一必修一专题二班级作业基础作业生成 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_homework_generation_general_senior1_required1_topic2_class_homework_foundation.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `教学管理`
- Abilities: `作业生成`, `分层练习`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
