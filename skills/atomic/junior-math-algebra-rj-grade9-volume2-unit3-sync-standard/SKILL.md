---
name: "junior-math-algebra-rj-grade9-volume2-unit3-sync-standard"
description: "人教版九年级下册第三单元的同步巩固初中代数，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: junior_math_algebra_rj_grade9_volume2_unit3_sync_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "数学", "计算", "逻辑", "同步巩固"]
    source: hermes-edu-skills
    workflow: "junior_math_algebra_rj_grade9_volume2_unit3_sync_standard.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["数学"]
    abilities: ["计算", "逻辑"]
    scenarios: ["同步巩固"]
---

# 人教版九年级下册第三单元同步巩固标准初中代数 Atomic Skill

人教版九年级下册第三单元的同步巩固初中代数，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 同步巩固

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_math_algebra_rj_grade9_volume2_unit3_sync_standard`
- `同步巩固`

示例表达：
- 开始人教版九年级下册第三单元同步巩固标准初中代数 Atomic Skill
- 帮我安排同步巩固
- 根据当前上下文执行人教版九年级下册第三单元同步巩固标准初中代数 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_math_algebra_rj_grade9_volume2_unit3_sync_standard.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `数学`
- Abilities: `计算`, `逻辑`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
