---
name: "institution-campus-dashboard"
description: "校区经营看板 Skill是面向经营分析的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: institution_campus_dashboard.run."
version: "0.6.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "adult", "机构运营", "运营分析", "经营分析"]
    source: hermes-edu-skills
    workflow: "institution_campus_dashboard.run"
    category: "examples"
    stages: ["primary", "junior", "senior", "adult"]
    subjects: ["机构运营"]
    abilities: ["运营分析"]
    scenarios: ["经营分析"]
    quality_tier: "enhanced"
    standalone_support: "requires_tools"
    public_release: "needs_review"
    export_mode: "doc_only"
    release_channel: "review"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["组织、学校或机构数据", "班级/课程/校区范围", "统计周期"]
---

# 校区经营看板 Skill

校区经营看板 Skill是面向经营分析的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

## 开源说明 / Open Source Note

这个 Skill 在开源包中作为设计参考，不作为推荐直接安装入口。它通常需要商业系统中的组织数据、统计报表、权限或工具适配层。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 经营分析

适用角色：
- 学校管理者
- 机构管理者
- 运营人员

## 调用信号 / Invocation Signals

意图：
- `institution_campus_dashboard`
- `organization`
- `经营分析`

示例表达：
- 开始校区经营看板 Skill
- 帮我做经营分析
- 根据当前上下文执行校区经营看板 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `institution_campus_dashboard.run`
- Category: `examples`
- Stages: `primary`, `junior`, `senior`, `adult`
- Subjects: `机构运营`
- Abilities: `运营分析`
- Quality Tier: `enhanced`
- Standalone Support: `requires_tools`
- Public Release: `needs_review`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `organization.query_context`, `memory.write`
- Requires Data: `组织、学校或机构数据`, `班级/课程/校区范围`, `统计周期`
- Export Mode: `doc_only`
- Release Channel: `review`

成熟度备注：
- 该 Skill 依赖商业系统数据或工具，开源包只作为设计参考，不作为推荐安装入口。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`, `成人学习`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`, `模块`
- Scenarios: `经营分析`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
