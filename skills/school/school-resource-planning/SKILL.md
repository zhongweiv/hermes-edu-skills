---
name: "school-resource-planning"
description: "校本资源规划 Skill用于运营配置，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: school_resource_planning.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学校管理", "资源规划", "运营配置"]
    source: hermes-edu-skills
    workflow: "school_resource_planning.run"
    category: "school"
    stages: ["primary", "junior", "senior"]
    subjects: ["学校管理"]
    abilities: ["资源规划"]
    scenarios: ["运营配置"]
    quality_tier: "enhanced"
    standalone_support: "requires_tools"
    public_release: "needs_review"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["组织、学校或机构数据", "班级/课程/校区范围", "统计周期"]
---

# 校本资源规划 Skill

校本资源规划 Skill用于运营配置，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 运营配置

适用角色：
- 学校管理者

## 调用信号 / Invocation Signals

意图：
- `school_resource_planning`
- `运营配置`

示例表达：
- 开始校本资源规划 Skill
- 帮我安排运营配置
- 根据当前上下文执行校本资源规划 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `school_resource_planning.run`
- Category: `school`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学校管理`
- Abilities: `资源规划`
- Quality Tier: `enhanced`
- Standalone Support: `requires_tools`
- Public Release: `needs_review`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `组织、学校或机构数据`, `班级/课程/校区范围`, `统计周期`

成熟度备注：
- 依赖平台数据或工具链，公开发布前需要补充独立 Hermes 使用边界。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
