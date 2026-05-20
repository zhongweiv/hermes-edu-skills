---
name: "institution-campus-dashboard-general-preschool-k3-year-scope2-business-dashboard-standard"
description: "通用启蒙方案大班全年组织场景二的经营分析校区经营看板，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: institution_campus_dashboard_general_preschool_k3_year_scope2_business_dashboard_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "机构运营", "运营分析", "经营分析"]
    source: hermes-edu-skills
    workflow: "institution_campus_dashboard_general_preschool_k3_year_scope2_business_dashboard_standard.run"
    category: "atomic"
    stages: ["preschool"]
    subjects: ["机构运营"]
    abilities: ["运营分析"]
    scenarios: ["经营分析"]
---

# 通用启蒙方案大班全年组织场景二经营分析标准校区经营看板 Atomic Skill

通用启蒙方案大班全年组织场景二的经营分析校区经营看板，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 经营分析

适用角色：
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `institution_campus_dashboard_general_preschool_k3_year_scope2_business_dashboard_standard`
- `经营分析`

示例表达：
- 开始通用启蒙方案大班全年组织场景二经营分析标准校区经营看板 Atomic Skill
- 帮我安排经营分析
- 根据当前上下文执行通用启蒙方案大班全年组织场景二经营分析标准校区经营看板 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `institution_campus_dashboard_general_preschool_k3_year_scope2_business_dashboard_standard.run`
- Category: `atomic`
- Stages: `preschool`
- Subjects: `机构运营`
- Abilities: `运营分析`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
