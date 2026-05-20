---
name: "agent-organization-insight"
description: "组织洞察 Skill用于数据分析，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_organization_insight.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "adult", "机构运营", "运营分析", "数据分析"]
    source: hermes-edu-skills
    workflow: "agent_organization_insight.run"
    category: "institution"
    stages: ["primary", "junior", "senior", "adult"]
    subjects: ["机构运营"]
    abilities: ["运营分析"]
    scenarios: ["数据分析"]
    quality_tier: "enhanced"
    standalone_support: "requires_tools"
    public_release: "needs_review"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "memory.write"]
    requires_data: ["组织、学校或机构数据", "班级/课程/校区范围", "统计周期"]
---

# 组织洞察 Skill

组织洞察 Skill用于数据分析，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 数据分析

适用角色：
- 学校管理者
- 机构管理者
- 运营人员

## 调用信号 / Invocation Signals

意图：
- `agent_organization_insight`
- `数据分析`

示例表达：
- 开始组织洞察 Skill
- 帮我安排数据分析
- 根据当前上下文执行组织洞察 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_organization_insight.run`
- Category: `institution`
- Stages: `primary`, `junior`, `senior`, `adult`
- Subjects: `机构运营`
- Abilities: `运营分析`
- Quality Tier: `enhanced`
- Standalone Support: `requires_tools`
- Public Release: `needs_review`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `memory.write`
- Requires Data: `组织、学校或机构数据`, `班级/课程/校区范围`, `统计周期`

成熟度备注：
- 依赖平台数据或工具链，公开发布前需要补充独立 Hermes 使用边界。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
