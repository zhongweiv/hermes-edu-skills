---
name: "senior-physics-rj-senior2-required1-topic2-sync-foundation"
description: "人教版高二必修一专题二的同步巩固高中物理，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: senior_physics_rj_senior2_required1_topic2_sync_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "物理", "实验理解", "知识记忆", "同步巩固"]
    source: hermes-edu-skills
    workflow: "senior_physics_rj_senior2_required1_topic2_sync_foundation.run"
    category: "atomic"
    stages: ["senior"]
    subjects: ["物理"]
    abilities: ["实验理解", "知识记忆"]
    scenarios: ["同步巩固"]
---

# 人教版高二必修一专题二同步巩固基础高中物理 Atomic Skill

人教版高二必修一专题二的同步巩固高中物理，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 同步巩固

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_physics_rj_senior2_required1_topic2_sync_foundation`
- `同步巩固`

示例表达：
- 开始人教版高二必修一专题二同步巩固基础高中物理 Atomic Skill
- 帮我安排同步巩固
- 根据当前上下文执行人教版高二必修一专题二同步巩固基础高中物理 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_physics_rj_senior2_required1_topic2_sync_foundation.run`
- Category: `atomic`
- Stages: `senior`
- Subjects: `物理`
- Abilities: `实验理解`, `知识记忆`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
