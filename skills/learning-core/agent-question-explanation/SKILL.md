---
name: "agent-question-explanation"
description: "把一道题讲到学生真正会复述思路：先定位卡点，再用年级能听懂的语言拆解，最后用变式题确认理解。 Workflow: agent_question_explanation.run."
version: "0.8.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "college", "学习能力", "AI 讲题", "举一反三", "课后作业", "同步巩固"]
    source: hermes-edu-skills
    workflow: "agent_question_explanation.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior", "college"]
    subjects: ["学习能力"]
    abilities: ["AI 讲题", "举一反三"]
    scenarios: ["课后作业", "同步巩固"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# AI 讲题 Skill

把一道题讲到学生真正会复述思路：先定位卡点，再用年级能听懂的语言拆解，最后用变式题确认理解。

## 这个 Skill 解决什么问题 / Problem

把一道题讲到学生真正会复述思路：先定位卡点，再用年级能听懂的语言拆解，最后用变式题确认理解。

## 最适合 / Best For

- 学生作业卡住但不想直接抄答案
- 家长需要把题讲清楚
- 老师想生成分层讲解和追问题

## 不适合 / Not For

- 考试实时作弊
- 只要求最终答案且拒绝过程解释
- 题干缺失关键条件且无法补充

## 使用前请准备 / Inputs

- 完整题干或图片识别结果
- 年级/学段
- 学科
- 学生已经尝试到哪一步
- 希望讲到什么深度

## 推荐工作流 / Recommended Workflow

- 复述题意并标出条件和目标
- 询问或判断学生卡点
- 用一条主线讲解关键思路
- 给出分步过程和易错提醒
- 用一道同类变式题检查迁移

## 输出格式 / Output Format

- 题意确认
- 关键思路
- 分步讲解
- 为什么这样做
- 易错提醒
- 同类小练

## 质量检查 / Quality Checks

- 不能只给答案
- 讲解用语必须匹配年级
- 每一步要说明依据
- 最后必须确认学生是否能独立做同类题

## 没有平台工具时 / Standalone Fallback

- 没有题库时，让用户粘贴题干并由 Agent 生成同类题。
- 没有学习记录时，用追问确认学生卡点。

## 示例提示 / Example Prompts

- 这道题我不会，请按六年级能听懂的方式一步步讲。
- 不要直接给答案，先帮我找我卡在哪一步。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课后作业
- 同步巩固

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_question_explanation`
- `learning_core`
- `课后作业`
- `同步巩固`

示例表达：
- 开始AI 讲题 Skill
- 帮我做课后作业
- 根据当前上下文执行AI 讲题 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_question_explanation.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`, `college`
- Subjects: `学习能力`
- Abilities: `AI 讲题`, `举一反三`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`, `大学`, `考研`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`, `模块`
- Scenarios: `课后作业`, `同步巩固`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
