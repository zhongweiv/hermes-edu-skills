---
name: "senior-gaokao-sprint"
description: "高考冲刺 Skill用于考前冲刺，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: senior_gaokao_sprint.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "综合", "考试冲刺", "考前冲刺"]
    source: hermes-edu-skills
    workflow: "senior_gaokao_sprint.run"
    category: "general"
    stages: ["senior"]
    subjects: ["综合"]
    abilities: ["考试冲刺"]
    scenarios: ["考前冲刺"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["孩子年级", "当前学习情况", "家庭陪伴目标"]
---

# 高考冲刺 Skill

高考冲刺 Skill用于考前冲刺，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考前冲刺

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_gaokao_sprint`
- `考前冲刺`

示例表达：
- 开始高考冲刺 Skill
- 帮我安排考前冲刺
- 根据当前上下文执行高考冲刺 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_gaokao_sprint.run`
- Category: `general`
- Stages: `senior`
- Subjects: `综合`
- Abilities: `考试冲刺`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `孩子年级`, `当前学习情况`, `家庭陪伴目标`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
