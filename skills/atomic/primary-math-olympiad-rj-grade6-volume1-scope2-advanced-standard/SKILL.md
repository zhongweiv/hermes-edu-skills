---
name: "primary-math-olympiad-rj-grade6-volume1-scope2-advanced-standard"
description: "人教版六年级上册组织场景二的拔高训练奥数拓展，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: primary_math_olympiad_rj_grade6_volume1_scope2_advanced_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "数学", "逻辑", "应用题", "拔高训练"]
    source: hermes-edu-skills
    workflow: "primary_math_olympiad_rj_grade6_volume1_scope2_advanced_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["数学"]
    abilities: ["逻辑", "应用题"]
    scenarios: ["拔高训练"]
    quality_tier: "generated"
    standalone_support: "requires_tools"
    public_release: "needs_review"
    requires_tools: ["organization.query_context"]
    requires_data: ["组织、学校或机构数据", "班级/课程/校区范围", "统计周期"]
---

# 人教版六年级上册组织场景二拔高训练标准奥数拓展 Atomic Skill

人教版六年级上册组织场景二的拔高训练奥数拓展，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 成熟度说明 / Maturity Note

这个 Skill 是 Generated Skill，适合 Hermes Agent 做路由、检索和场景定位。独立使用时，请补充年级、教材、单元、题目或学习目标等上下文；如果要达到精品体验，建议继续补充真实样例、边界条件和评测标准。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 拔高训练

适用角色：
- 学习者
- 老师
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `primary_math_olympiad_rj_grade6_volume1_scope2_advanced_standard`
- `拔高训练`

示例表达：
- 开始人教版六年级上册组织场景二拔高训练标准奥数拓展 Atomic Skill
- 帮我安排拔高训练
- 根据当前上下文执行人教版六年级上册组织场景二拔高训练标准奥数拓展 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_math_olympiad_rj_grade6_volume1_scope2_advanced_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `数学`
- Abilities: `逻辑`, `应用题`
- Quality Tier: `generated`
- Standalone Support: `requires_tools`
- Public Release: `needs_review`
- Requires Tools: `organization.query_context`
- Requires Data: `组织、学校或机构数据`, `班级/课程/校区范围`, `统计周期`

成熟度备注：
- 由商业 Skill 规则批量生成，适合作为教材/年级/单元级路由入口。
- 该 Skill 依赖组织数据和平台工具，公开展示前需要进一步审查数据边界和独立使用说明。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
