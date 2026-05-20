---
name: "agent-study-plan"
description: "学习计划 Skill用于今日学习、寒暑假提升，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_study_plan.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "senior", "college", "adult", "学习能力", "学习计划", "目标管理", "今日学习", "寒暑假提升"]
    source: hermes-edu-skills
    workflow: "agent_study_plan.run"
    category: "system"
    stages: ["preschool", "primary", "junior", "senior", "college", "adult"]
    subjects: ["学习能力"]
    abilities: ["学习计划", "目标管理"]
    scenarios: ["今日学习", "寒暑假提升"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["目标", "可用时间", "当前水平", "截止日期", "优先科目"]
---

# 学习计划 Skill

学习计划 Skill用于今日学习、寒暑假提升，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

把模糊目标拆成今天、这一周和下一轮可执行的学习安排。

## 最适合 / Best For

- 每日学习安排
- 寒暑假计划
- 考前复习节奏
- 家长帮孩子安排时间

## 不适合 / Not For

- 替代学校正式课程表
- 没有目标、时间和水平信息的空泛规划

## 使用前请准备 / Inputs

- 学习目标
- 当前年级和水平
- 每天可用时间
- 截止日期
- 薄弱点或优先科目

## 推荐工作流 / Recommended Workflow

- 先澄清目标和时间约束。
- 把任务分成复习、练习、订正、预习四类。
- 安排每日任务，控制单次任务时长。
- 预留复盘和机动时间。

## 输出格式 / Output Format

- 目标摘要
- 今日计划
- 本周计划
- 每日检查点
- 调整规则

## 质量检查 / Quality Checks

- 计划不能过满
- 必须包含复盘
- 任务要能被家长或学生判断是否完成
- 低龄学生要减少抽象描述

## 没有平台工具时 / Standalone Fallback

- 没有学习数据时，让用户用“强/中/弱”描述各科水平。
- 没有日历工具时，输出可复制到日历的文本计划。

## 示例提示 / Example Prompts

- 四年级数学计算弱，每天 30 分钟，帮我排 7 天计划。
- 离期末还有 14 天，语文阅读和数学应用题都弱，帮我安排复习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 今日学习
- 寒暑假提升

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_study_plan`
- `今日学习`
- `寒暑假提升`

示例表达：
- 开始学习计划 Skill
- 帮我安排今日学习
- 根据当前上下文执行学习计划 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_study_plan.run`
- Category: `system`
- Stages: `preschool`, `primary`, `junior`, `senior`, `college`, `adult`
- Subjects: `学习能力`
- Abilities: `学习计划`, `目标管理`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `目标`, `可用时间`, `当前水平`, `截止日期`, `优先科目`

成熟度备注：
- 入口级系统 Skill，适合独立 Hermes 用户直接生成学习计划。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
