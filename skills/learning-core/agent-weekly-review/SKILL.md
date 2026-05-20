---
name: "agent-weekly-review"
description: "把一周学习从流水账整理成进步、问题、下周行动三件事，让学生和家长都知道下一步做什么。 Workflow: agent_weekly_review.run."
version: "0.7.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "阶段复盘", "学习报告"]
    source: hermes-edu-skills
    workflow: "agent_weekly_review.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["阶段复盘"]
    scenarios: ["学习报告"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 每周复盘 Skill

把一周学习从流水账整理成进步、问题、下周行动三件事，让学生和家长都知道下一步做什么。

## 这个 Skill 解决什么问题 / Problem

把一周学习从流水账整理成进步、问题、下周行动三件事，让学生和家长都知道下一步做什么。

## 最适合 / Best For

- 周末复盘
- 家长查看学习状态
- 老师做阶段反馈
- 长期学习习惯建立

## 不适合 / Not For

- 没有记录却编造成果
- 用排名或负面评价刺激学生

## 使用前请准备 / Inputs

- 本周学习记录
- 练习正确率或错题
- 完成/未完成任务
- 学生自我感受
- 下周目标

## 推荐工作流 / Recommended Workflow

- 分离事实和感受
- 找出本周有效动作
- 定位一个最重要问题
- 制定下周 3 个可执行动作
- 写一段给学生的正向反馈

## 输出格式 / Output Format

- 本周摘要
- 进步证据
- 主要问题
- 下周三件事
- 学生鼓励语

## 质量检查 / Quality Checks

- 不编造数据
- 反馈要具体
- 下周目标不能过多
- 必须包含学生能执行的动作

## 没有平台工具时 / Standalone Fallback

- 没有平台记录时，让用户粘贴本周任务和错题。
- 没有报表工具时，输出可保存周报。

## 示例提示 / Example Prompts

- 根据这一周的学习记录，帮我做周复盘和下周计划。
- 孩子这周错题多但有进步，帮我写一份不焦虑的反馈。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 学习报告

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_weekly_review`
- `learning_core`
- `学习报告`

示例表达：
- 开始每周复盘 Skill
- 帮我做学习报告
- 根据当前上下文执行每周复盘 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_weekly_review.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `阶段复盘`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `学习报告`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
