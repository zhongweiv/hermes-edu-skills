---
name: "agent-parent-companion"
description: "家长陪学 Skill用于家长陪学，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_parent_companion.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "家庭教育", "陪学建议", "目标管理", "家长陪学"]
    source: hermes-edu-skills
    workflow: "agent_parent_companion.run"
    category: "family"
    stages: ["preschool", "primary", "junior"]
    subjects: ["家庭教育"]
    abilities: ["陪学建议", "目标管理"]
    scenarios: ["家长陪学"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["孩子年级", "当前学习困难", "家庭陪伴时间", "家长目标"]
---

# 家长陪学 Skill

家长陪学 Skill用于家长陪学，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

帮助家长把“催学”变成可执行、低冲突的陪伴动作。

## 最适合 / Best For

- 家长不知道怎么陪作业
- 孩子拖延、抗拒或情绪波动
- 需要家庭学习习惯建设

## 不适合 / Not For

- 替代专业心理咨询
- 给孩子贴标签或进行诊断
- 强化高压控制的陪学方式

## 使用前请准备 / Inputs

- 孩子年龄/年级
- 最近冲突场景
- 每天可陪伴时间
- 希望改善的一个目标

## 推荐工作流 / Recommended Workflow

- 先识别家长真正想解决的问题。
- 把问题拆成学习任务、情绪状态、环境和沟通方式。
- 给一个今天就能做的小动作。
- 设计一套低冲突反馈话术。

## 输出格式 / Output Format

- 问题拆解
- 今日陪伴动作
- 沟通话术
- 观察指标
- 一周微计划

## 质量检查 / Quality Checks

- 不指责孩子或家长
- 建议必须可在家庭场景执行
- 避免医疗/心理诊断
- 优先降低冲突

## 没有平台工具时 / Standalone Fallback

- 没有家庭档案时，用 3 个问题收集背景。
- 没有记忆工具时，输出一张家庭陪学记录卡。

## 示例提示 / Example Prompts

- 孩子三年级写作业拖到很晚，我不想一直吼，帮我设计陪伴方式。
- 每天只有 20 分钟陪孩子学习，怎么安排最有效？

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 家长陪学

适用角色：
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_parent_companion`
- `家长陪学`

示例表达：
- 开始家长陪学 Skill
- 帮我安排家长陪学
- 根据当前上下文执行家长陪学 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_parent_companion.run`
- Category: `family`
- Stages: `preschool`, `primary`, `junior`
- Subjects: `家庭教育`
- Abilities: `陪学建议`, `目标管理`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `孩子年级`, `当前学习困难`, `家庭陪伴时间`, `家长目标`

成熟度备注：
- 中国家庭高频场景，需强调情绪支持和可执行陪伴。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
