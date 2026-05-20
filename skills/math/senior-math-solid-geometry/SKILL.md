---
name: "senior-math-solid-geometry"
description: "立体几何 Skill用于专项训练、高考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: senior_math_solid_geometry.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "数学", "空间想象", "专项训练", "高考复习"]
    source: hermes-edu-skills
    workflow: "senior_math_solid_geometry.run"
    category: "math"
    stages: ["senior"]
    subjects: ["数学"]
    abilities: ["空间想象"]
    scenarios: ["专项训练", "高考复习"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习者年级", "当前目标", "用户输入的题目或学习上下文"]
---

# 立体几何 Skill

立体几何 Skill用于专项训练、高考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 专项训练
- 高考复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_math_solid_geometry`
- `专项训练`
- `高考复习`

示例表达：
- 开始立体几何 Skill
- 帮我安排专项训练
- 根据当前上下文执行立体几何 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_math_solid_geometry.run`
- Category: `math`
- Stages: `senior`
- Subjects: `数学`
- Abilities: `空间想象`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `学习者年级`, `当前目标`, `用户输入的题目或学习上下文`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
