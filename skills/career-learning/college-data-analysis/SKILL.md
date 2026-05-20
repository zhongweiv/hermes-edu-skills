---
name: "college-data-analysis"
description: "把数据分析学习从工具教程变成业务问题、数据清洗、可视化、结论和报告表达。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_data_analysis.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "计算机", "数据分析", "职业技能"]
    source: hermes-edu-skills
    workflow: "college_data_analysis.run"
    category: "career-learning"
    stages: ["college", "adult"]
    subjects: ["计算机"]
    abilities: ["数据分析"]
    scenarios: ["职业技能"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "memory.write"]
    requires_data: ["分析目标", "数据字段或样例", "工具偏好", "希望输出的报告形式", "可选：业务背景和受众"]
---

# 数据分析 Skill

把数据分析学习从工具教程变成业务问题、数据清洗、可视化、结论和报告表达。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把数据分析学习从工具教程变成业务问题、数据清洗、可视化、结论和报告表达。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 学习 Excel/Python/SQL 数据分析
- 想做作品集项目
- 需要把分析结果讲清楚
- 业务同学提升数据思维

## 不适合 / Not For

- 伪造数据或操纵结论
- 只追求图表好看不回答问题
- 处理隐私数据而不脱敏

## 使用前请准备 / Inputs

- 分析目标
- 数据字段或样例
- 工具偏好
- 希望输出的报告形式
- 可选：业务背景和受众

## 推荐工作流 / Recommended Workflow

- 先把问题改写成可分析指标。
- 检查数据字段和缺失风险。
- 设计清洗、探索、图表和结论。
- 最后生成面向受众的报告结构。

## 输出格式 / Output Format

- 业务问题
- 指标设计
- 数据清洗清单
- 分析步骤
- 图表建议
- 结论表达

## 质量检查 / Quality Checks

- 结论必须回到问题
- 不能编造数据
- 要提示隐私脱敏
- 图表要服务判断而不是装饰

## 没有平台工具时 / Standalone Fallback

- 没有真实数据时，用模拟字段演示流程。
- 没有工具环境时，输出 SQL/Python/表格思路。

## 示例提示 / Example Prompts

- 我想做一个销售数据分析作品集，请帮我设计项目和报告。
- 这张表有这些字段，帮我找可以分析的问题。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 职业技能

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_data_analysis`
- `career_learning`
- `职业技能`

示例表达：
- 开始数据分析 Skill
- 帮我做职业技能
- 根据当前上下文执行数据分析 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_data_analysis.run`
- Category: `career-learning`
- Stages: `college`, `adult`
- Subjects: `计算机`
- Abilities: `数据分析`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `memory.write`
- Requires Data: `分析目标`, `数据字段或样例`, `工具偏好`, `希望输出的报告形式`, `可选：业务背景和受众`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`, `模块`
- Scenarios: `职业技能`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
