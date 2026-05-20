---
name: "junior-geography-xj-textbook-sync"
description: "湘教版初中地理同步 Skill是面向课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: junior_geography_xj_textbook_sync.run."
version: "0.5.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "地理", "教材同步", "图表分析", "课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "中考复习"]
    source: hermes-edu-skills
    workflow: "junior_geography_xj_textbook_sync.run"
    category: "textbook-sync"
    stages: ["junior"]
    subjects: ["地理"]
    abilities: ["教材同步", "图表分析"]
    scenarios: ["课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "中考复习"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    export_mode: "installable"
    release_channel: "public"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "mistake.query_recent", "mistake.cluster", "report.aggregate_metrics", "plan.generate", "curriculum.resolve", "memory.write"]
    requires_data: ["年级", "册别", "单元或知识点", "学习场景"]
---

# 湘教版初中地理同步 Skill

湘教版初中地理同步 Skill是面向课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习、中考复习的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习
- 课后作业
- 同步巩固
- 单元复习
- 错题巩固
- 期中期末复习
- 中考复习

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_geography_xj_textbook_sync`
- `textbook_sync`
- `课前预习`
- `课后作业`
- `同步巩固`
- `单元复习`
- `错题巩固`
- `期中期末复习`
- `中考复习`

示例表达：
- 开始湘教版初中地理同步 Skill
- 帮我做课前预习
- 按教材同步安排湘教版初中地理同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_geography_xj_textbook_sync.run`
- Category: `textbook-sync`
- Stages: `junior`
- Subjects: `地理`
- Abilities: `教材同步`, `图表分析`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `mistake.query_recent`, `mistake.cluster`, `report.aggregate_metrics`, `plan.generate`, `curriculum.resolve`, `memory.write`
- Requires Data: `年级`, `册别`, `单元或知识点`, `学习场景`
- Export Mode: `installable`
- Release Channel: `public`

成熟度备注：
- 已收缩为产品级能力包，年级、册别、单元、知识点和难度通过参数传入。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `七年级`, `八年级`, `九年级`
- Semesters: `上册`, `下册`
- Scenarios: `课前预习`, `课后作业`, `同步巩固`, `单元复习`, `错题巩固`, `期中期末复习`, `中考复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
