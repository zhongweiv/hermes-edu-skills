---
name: "teacher-class-analysis"
description: "班级学情分析 Skill用于学情分析，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: teacher_class_analysis.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "学情分析", "学情分析"]
    source: hermes-edu-skills
    workflow: "teacher_class_analysis.run"
    category: "teaching"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["学情分析"]
    scenarios: ["学情分析"]
    quality_tier: "enhanced"
    standalone_support: "requires_tools"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["班级学情", "年级学科", "教学目标或作业范围"]
---

# 班级学情分析 Skill

班级学情分析 Skill用于学情分析，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 学情分析

适用角色：
- 老师
- 学校管理者

## 调用信号 / Invocation Signals

意图：
- `teacher_class_analysis`
- `学情分析`

示例表达：
- 开始班级学情分析 Skill
- 帮我安排学情分析
- 根据当前上下文执行班级学情分析 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_class_analysis.run`
- Category: `teaching`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `学情分析`
- Quality Tier: `enhanced`
- Standalone Support: `requires_tools`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `organization.query_context`, `memory.write`
- Requires Data: `班级学情`, `年级学科`, `教学目标或作业范围`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
