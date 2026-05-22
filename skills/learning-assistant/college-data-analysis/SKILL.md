---
name: "college-data-analysis"
description: "把数据分析学习从工具教程变成业务问题、数据清洗、可视化、结论和报告表达。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_data_analysis.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [cli, windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "计算机", "数据分析", "职业技能"]
    source: hermes-edu-skills
    workflow: "college_data_analysis.run"
    category: "learning-assistant"
    category_aliases: ["学习助手", "学习方法", "学习核心", "learning", "learning-core", "learning-assistant"]
    legacy_slugs: []
    install_aliases: ["college-data-analysis"]
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
- `learning_assistant`
- `职业技能`

示例表达：
- 开始数据分析 Skill
- 帮我做职业技能
- 根据当前上下文执行数据分析 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_data_analysis.run`
- Category: `learning-assistant`

- Install Aliases: `college-data-analysis`
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

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 用户角色
- 年级/水平
- 学习目标或任务目标
- 使用场景
- 难度
- 题量或可用时间
- 是否需要答案/解析/反馈

可选增强维度：
- 教材目录/课本照片文字
- 学生原答案
- 老师批注
- 最近错题
- 薄弱点
- 地区/考试要求
- 偏好的输出格式

## 参数缺失时的默认策略 / Default Policy When Missing

先识别全部应问维度；一次性轻量询问，明确用户可以跳过。用户不回答时，不中断任务，按默认策略继续执行。

默认假设：
- 年级/水平未指定：默认使用 大学、考研 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 模块、模块 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度。
- 未指定题量时默认生成一个短任务
- 未指定时间时默认短任务
- 使用场景未指定：默认“职业技能”。
- 用户角色未指定：默认面向学生直接使用；出现“孩子/家长/陪练”切换到家长视角，出现“班级/布置/教案/课堂”切换到教师视角。
- 学情/错题未指定：默认普通水平起步，并在输出中加入做完后如何判断下一步的反馈机制。
- 答案解析未指定：练习题默认提供答案；小学低年级给短解析，初高中理科给步骤解析，文科阅读/作文给参考要点或评分标准。

兜底规则：
- 该问的维度一个都不少，但最多做一次轻量追问；用户不回答就按默认策略执行。
- 能继续完成的任务先完成，不能因为参数缺失直接失败。
- 只有精准教材同步、考试目标、作文文体、教师课时等会显著改变结果的维度，才优先追问一个最关键问题。
- 没有教材库时让用户提供目录、课题、题目或照片文字；没有题库时生成原创题；没有学情时按普通水平起步。
- 不得复刻教材原文、教辅原题，不承诺押题命中，不代写规避学习的完整作业或考试答案。

- 默认值说明：使用默认值时只用一句话轻量说明，例如“未指定年级和难度，先按支持年级范围内的标准难度生成”。不要把回答变成参数表。
- 后续修正：输出末尾给一个可选修正入口，例如“告诉我年级、册别或最近学到的单元后，我可以再生成更贴合的一版”。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
