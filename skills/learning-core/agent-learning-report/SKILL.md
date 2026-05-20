---
name: "agent-learning-report"
description: "把零散练习记录整理成家长、老师和学生都能看懂的学情判断。 Workflow: agent_learning_report.run."
version: "0.7.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "学情报告", "学习建议", "学习报告", "家长沟通"]
    source: hermes-edu-skills
    workflow: "agent_learning_report.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["学情报告", "学习建议"]
    scenarios: ["学习报告", "家长沟通"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 学情报告 Skill

把零散练习记录整理成家长、老师和学生都能看懂的学情判断。

## 这个 Skill 解决什么问题 / Problem

把零散练习记录整理成家长、老师和学生都能看懂的学情判断。

## 最适合 / Best For

- 周报/月报
- 家长沟通
- 学习阶段复盘
- 续接下一步学习计划

## 不适合 / Not For

- 没有任何学习记录时硬编报告
- 以排名或焦虑话术压迫学生

## 使用前请准备 / Inputs

- 练习次数
- 正确率或得分
- 主要错题类型
- 学习时长
- 近期目标

## 推荐工作流 / Recommended Workflow

- 区分事实数据和推测
- 总结优势和风险
- 给学生版鼓励反馈
- 生成下一周优先动作

## 输出格式 / Output Format

- 一句话结论
- 数据摘要
- 优势
- 风险点
- 行动建议
- 下周计划

## 质量检查 / Quality Checks

- 不得编造数据
- 建议要和数据对应
- 避免制造焦虑

## 没有平台工具时 / Standalone Fallback

- 没有报表工具时，让用户粘贴练习记录。
- 没有记忆工具时，生成可保存的报告摘要。

## 示例提示 / Example Prompts

- 根据这些练习记录，帮我生成家长周报。
- 孩子数学正确率从 70% 到 82%，帮我写分析。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 学习报告
- 家长沟通

适用角色：
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_learning_report`
- `learning_core`
- `学习报告`
- `家长沟通`

示例表达：
- 开始学情报告 Skill
- 帮我做学习报告
- 根据当前上下文执行学情报告 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_learning_report.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `学情报告`, `学习建议`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `organization.query_context`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `学习报告`, `家长沟通`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
