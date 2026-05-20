---
name: "agent-parent-companion"
description: "家长陪学 Skill是面向家长陪学的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: agent_parent_companion.run."
version: "0.7.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "家庭教育", "陪学建议", "目标管理", "家长陪学"]
    source: hermes-edu-skills
    workflow: "agent_parent_companion.run"
    category: "family-education"
    stages: ["preschool", "primary", "junior"]
    subjects: ["家庭教育"]
    abilities: ["陪学建议", "目标管理"]
    scenarios: ["家长陪学"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 家长陪学 Skill

家长陪学 Skill是面向家长陪学的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 家长陪学

适用角色：
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_parent_companion`
- `family_education`
- `家长陪学`

示例表达：
- 开始家长陪学 Skill
- 帮我做家长陪学
- 根据当前上下文执行家长陪学 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_parent_companion.run`
- Category: `family-education`
- Stages: `preschool`, `primary`, `junior`
- Subjects: `家庭教育`
- Abilities: `陪学建议`, `目标管理`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `小班`, `中班`, `大班`, `幼小衔接`, `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`
- Semesters: `全年`, `上册`, `下册`, `上册`, `下册`
- Scenarios: `家长陪学`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
