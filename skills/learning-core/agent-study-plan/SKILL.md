---
name: "agent-study-plan"
description: "学习计划 Skill是面向今日学习、寒暑假提升、考前规划的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: agent_study_plan.run."
version: "0.2.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "senior", "college", "adult", "学习能力", "学习计划", "目标管理", "今日学习", "寒暑假提升", "考前规划"]
    source: hermes-edu-skills
    workflow: "agent_study_plan.run"
    category: "learning-core"
    stages: ["preschool", "primary", "junior", "senior", "college", "adult"]
    subjects: ["学习能力"]
    abilities: ["学习计划", "目标管理"]
    scenarios: ["今日学习", "寒暑假提升", "考前规划"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 学习计划 Skill

学习计划 Skill是面向今日学习、寒暑假提升、考前规划的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

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

- 澄清目标和时间约束
- 拆成复习、练习、订正、预习
- 安排每日任务
- 预留复盘和机动时间

## 输出格式 / Output Format

- 目标摘要
- 今日计划
- 本周计划
- 每日检查点
- 调整规则

## 质量检查 / Quality Checks

- 计划不能过满
- 必须包含复盘
- 任务要能判断是否完成

## 没有平台工具时 / Standalone Fallback

- 没有学习数据时，让用户用强/中/弱描述各科水平。
- 没有日历工具时，输出可复制到日历的文本计划。

## 示例提示 / Example Prompts

- 四年级数学计算弱，每天 30 分钟，帮我排 7 天计划。
- 离期末还有 14 天，帮我安排复习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 今日学习
- 寒暑假提升
- 考前规划

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_study_plan`
- `learning_core`
- `今日学习`
- `寒暑假提升`
- `考前规划`

示例表达：
- 开始学习计划 Skill
- 帮我做今日学习
- 根据当前上下文执行学习计划 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_study_plan.run`
- Category: `learning-core`
- Stages: `preschool`, `primary`, `junior`, `senior`, `college`, `adult`
- Subjects: `学习能力`
- Abilities: `学习计划`, `目标管理`
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

- Grades: `小班`, `中班`, `大班`, `幼小衔接`, `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`, `大学`, `考研`, `成人学习`
- Semesters: `全年`, `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`, `模块`, `模块`
- Scenarios: `今日学习`, `寒暑假提升`, `考前规划`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
