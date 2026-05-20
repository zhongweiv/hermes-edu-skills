---
name: "junior-math-geometry-sj-grade7-volume2-unit2-zhongkao-review-foundation"
description: "苏教版七年级下册第二单元的中考复习初中几何，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: junior_math_geometry_sj_grade7_volume2_unit2_zhongkao_review_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "数学", "空间想象", "证明", "中考复习"]
    source: hermes-edu-skills
    workflow: "junior_math_geometry_sj_grade7_volume2_unit2_zhongkao_review_foundation.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["数学"]
    abilities: ["空间想象", "证明"]
    scenarios: ["中考复习"]
---

# 苏教版七年级下册第二单元中考复习基础初中几何 Atomic Skill

苏教版七年级下册第二单元的中考复习初中几何，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 中考复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_math_geometry_sj_grade7_volume2_unit2_zhongkao_review_foundation`
- `中考复习`

示例表达：
- 开始苏教版七年级下册第二单元中考复习基础初中几何 Atomic Skill
- 帮我安排中考复习
- 根据当前上下文执行苏教版七年级下册第二单元中考复习基础初中几何 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_math_geometry_sj_grade7_volume2_unit2_zhongkao_review_foundation.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `数学`
- Abilities: `空间想象`, `证明`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
