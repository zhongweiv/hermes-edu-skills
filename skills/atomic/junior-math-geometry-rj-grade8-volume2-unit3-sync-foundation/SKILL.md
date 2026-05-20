---
name: "junior-math-geometry-rj-grade8-volume2-unit3-sync-foundation"
description: "人教版八年级下册第三单元的同步巩固初中几何，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: junior_math_geometry_rj_grade8_volume2_unit3_sync_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "数学", "空间想象", "证明", "同步巩固"]
    source: hermes-edu-skills
    workflow: "junior_math_geometry_rj_grade8_volume2_unit3_sync_foundation.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["数学"]
    abilities: ["空间想象", "证明"]
    scenarios: ["同步巩固"]
---

# 人教版八年级下册第三单元同步巩固基础初中几何 Atomic Skill

人教版八年级下册第三单元的同步巩固初中几何，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 同步巩固

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_math_geometry_rj_grade8_volume2_unit3_sync_foundation`
- `同步巩固`

示例表达：
- 开始人教版八年级下册第三单元同步巩固基础初中几何 Atomic Skill
- 帮我安排同步巩固
- 根据当前上下文执行人教版八年级下册第三单元同步巩固基础初中几何 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_math_geometry_rj_grade8_volume2_unit3_sync_foundation.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `数学`
- Abilities: `空间想象`, `证明`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
