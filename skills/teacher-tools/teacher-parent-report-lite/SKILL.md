---
name: "teacher-parent-report-lite"
description: "家长反馈报告 Lite Skill是面向家长沟通的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: teacher_parent_report_lite.run."
version: "0.5.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "报告生成", "家长沟通"]
    source: hermes-edu-skills
    workflow: "teacher_parent_report_lite.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["报告生成"]
    scenarios: ["家长沟通"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    export_mode: "installable"
    release_channel: "public"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 家长反馈报告 Lite Skill

家长反馈报告 Lite Skill是面向家长沟通的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 家长沟通

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_parent_report_lite`
- `teacher_tools`
- `家长沟通`

示例表达：
- 开始家长反馈报告 Lite Skill
- 帮我做家长沟通
- 根据当前上下文执行家长反馈报告 Lite Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_parent_report_lite.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `报告生成`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `organization.query_context`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `public`

成熟度备注：
- 已收缩为产品级能力包，年级、册别、单元、知识点和难度通过参数传入。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `家长沟通`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
