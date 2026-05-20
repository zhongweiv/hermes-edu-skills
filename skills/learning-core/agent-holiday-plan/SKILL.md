---
name: "agent-holiday-plan"
description: "把寒暑假从“报复性补课”改成有节奏的巩固、预习、阅读和休息计划。 Workflow: agent_holiday_plan.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "假期计划", "寒暑假提升"]
    source: hermes-edu-skills
    workflow: "agent_holiday_plan.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["假期计划"]
    scenarios: ["寒暑假提升"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 寒暑假提升 Skill

把寒暑假从“报复性补课”改成有节奏的巩固、预习、阅读和休息计划。

## 这个 Skill 解决什么问题 / Problem

把寒暑假从“报复性补课”改成有节奏的巩固、预习、阅读和休息计划。

## 最适合 / Best For

- 寒暑假规划
- 假期弯道提升
- 家长安排每日学习
- 开学前收心

## 不适合 / Not For

- 把假期排满造成抵触
- 完全替代学校或机构课程

## 使用前请准备 / Inputs

- 假期天数
- 年级
- 薄弱科目
- 每日可学习时间
- 旅行/休息安排
- 开学目标

## 推荐工作流 / Recommended Workflow

- 确定假期主目标
- 分成巩固/预习/阅读/运动/休息模块
- 安排周节奏
- 设置轻量复盘
- 开学前一周收心

## 输出格式 / Output Format

- 假期目标
- 周计划
- 每日模板
- 弹性规则
- 复盘表

## 质量检查 / Quality Checks

- 每天任务不过量
- 必须保留休息和兴趣时间
- 计划要能因旅行调整
- 要有开学衔接

## 没有平台工具时 / Standalone Fallback

- 没有日历工具时，输出表格计划。
- 没有学情数据时，让用户按强/中/弱描述科目。

## 示例提示 / Example Prompts

- 五年级暑假 40 天，每天 1 小时，帮我安排数学和阅读。
- 初二升初三暑假怎么规划，别太卷但要有效。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 寒暑假提升

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_holiday_plan`
- `learning_core`
- `寒暑假提升`

示例表达：
- 开始寒暑假提升 Skill
- 帮我做寒暑假提升
- 根据当前上下文执行寒暑假提升 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_holiday_plan.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `假期计划`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `寒暑假提升`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
