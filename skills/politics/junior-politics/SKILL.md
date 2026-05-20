---
name: "junior-politics"
description: "初中道法 Skill用于背诵记忆、中考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: junior_politics.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "政治", "知识记忆", "材料分析", "背诵记忆", "中考复习"]
    source: hermes-edu-skills
    workflow: "junior_politics.run"
    category: "politics"
    stages: ["junior"]
    subjects: ["政治"]
    abilities: ["知识记忆", "材料分析"]
    scenarios: ["背诵记忆", "中考复习"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "plan.generate", "memory.schedule_review", "memory.write"]
    requires_data: ["学习者年级", "当前目标", "用户输入的题目或学习上下文"]
---

# 初中道法 Skill

初中道法 Skill用于背诵记忆、中考复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 背诵记忆
- 中考复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_politics`
- `背诵记忆`
- `中考复习`

示例表达：
- 开始初中道法 Skill
- 帮我安排背诵记忆
- 根据当前上下文执行初中道法 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_politics.run`
- Category: `politics`
- Stages: `junior`
- Subjects: `政治`
- Abilities: `知识记忆`, `材料分析`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `plan.generate`, `memory.schedule_review`, `memory.write`
- Requires Data: `学习者年级`, `当前目标`, `用户输入的题目或学习上下文`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
