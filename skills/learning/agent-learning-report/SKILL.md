---
name: "agent-learning-report"
description: "学情报告 Skill用于学习报告、家长陪学，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_learning_report.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "学情报告", "学习计划", "学习报告", "家长陪学"]
    source: hermes-edu-skills
    workflow: "agent_learning_report.run"
    category: "learning"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["学情报告", "学习计划"]
    scenarios: ["学习报告", "家长陪学"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["近期练习记录", "正确率", "错题类型", "学习时长", "老师或家长观察"]
---

# 学情报告 Skill

学情报告 Skill用于学习报告、家长陪学，由 Hermes Agent Runtime 按独立 Agent Context 调用。

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

- 先区分事实数据和推测判断。
- 总结优势、薄弱点和变化趋势。
- 给学生版鼓励反馈，再给家长/老师版行动建议。
- 生成下一周 3 个优先动作。

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
- 同时给学生和成人可读版本

## 没有平台工具时 / Standalone Fallback

- 没有报表工具时，让用户粘贴练习记录或手动输入摘要。
- 没有记忆工具时，生成可复制保存的报告摘要。

## 示例提示 / Example Prompts

- 根据这些练习记录，帮我生成一份给家长看的周报。
- 孩子这周数学正确率从 70% 到 82%，错题多在应用题，帮我写学情分析。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 学习报告
- 家长陪学

适用角色：
- 家长
- 老师
- 学校管理者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `agent_learning_report`
- `学习报告`
- `家长陪学`

示例表达：
- 开始学情报告 Skill
- 帮我安排学习报告
- 根据当前上下文执行学情报告 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_learning_report.run`
- Category: `learning`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `学情报告`, `学习计划`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `近期练习记录`, `正确率`, `错题类型`, `学习时长`, `老师或家长观察`

成熟度备注：
- 独立使用时依赖用户提供记录；平台内可接统计工具自动生成。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
