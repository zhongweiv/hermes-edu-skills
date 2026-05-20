---
name: "primary-math-calculation-sj-grade4-volume1-unit1-homework-standard"
description: "苏教版四年级上册第一单元的课后作业计算能力，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: primary_math_calculation_sj_grade4_volume1_unit1_homework_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "数学", "计算", "课后作业"]
    source: hermes-edu-skills
    workflow: "primary_math_calculation_sj_grade4_volume1_unit1_homework_standard.run"
    category: "atomic"
    stages: ["primary"]
    subjects: ["数学"]
    abilities: ["计算"]
    scenarios: ["课后作业"]
    quality_tier: "generated"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: []
    requires_data: ["年级", "教材版本", "单元或知识点", "用户当前题目/练习目标"]
---

# 苏教版四年级上册第一单元课后作业标准计算能力 Atomic Skill

苏教版四年级上册第一单元的课后作业计算能力，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 成熟度说明 / Maturity Note

这个 Skill 是 Generated Skill，适合 Hermes Agent 做路由、检索和场景定位。独立使用时，请补充年级、教材、单元、题目或学习目标等上下文；如果要达到精品体验，建议继续补充真实样例、边界条件和评测标准。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课后作业

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_math_calculation_sj_grade4_volume1_unit1_homework_standard`
- `课后作业`

示例表达：
- 开始苏教版四年级上册第一单元课后作业标准计算能力 Atomic Skill
- 帮我安排课后作业
- 根据当前上下文执行苏教版四年级上册第一单元课后作业标准计算能力 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_math_calculation_sj_grade4_volume1_unit1_homework_standard.run`
- Category: `atomic`
- Stages: `primary`
- Subjects: `数学`
- Abilities: `计算`
- Quality Tier: `generated`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: none
- Requires Data: `年级`, `教材版本`, `单元或知识点`, `用户当前题目/练习目标`

成熟度备注：
- 由商业 Skill 规则批量生成，适合作为教材/年级/单元级路由入口。
- 公开包中可独立安装，但要达到精品体验需要补充具体题例、边界和使用样例。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
