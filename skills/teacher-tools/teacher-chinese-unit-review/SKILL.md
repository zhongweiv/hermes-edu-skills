---
name: "teacher-chinese-unit-review"
description: "帮助语文老师把一个单元复习成知识结构、典型错因、主动回忆和再练习的闭环，而不是重新讲一遍。 Workflow: teacher_chinese_unit_review.run."
version: "0.6.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "语文", "复习计划", "单元复习"]
    source: hermes-edu-skills
    workflow: "teacher_chinese_unit_review.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["语文"]
    abilities: ["复习计划"]
    scenarios: ["单元复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "organization.query_context", "memory.write"]
    requires_data: ["年级和学科/课题", "教材版本或单元", "班级基础/错题/课堂观察", "课时或作业时长"]
---

# 语文单元复习 Skill

帮助语文老师把一个单元复习成知识结构、典型错因、主动回忆和再练习的闭环，而不是重新讲一遍。

## 这个 Skill 解决什么问题 / Problem

帮助语文老师把一个单元复习成知识结构、典型错因、主动回忆和再练习的闭环，而不是重新讲一遍。

## 最适合 / Best For

- 语文单元复习
- 期中期末前查漏补缺
- 错题集中讲评
- 班级分层复习

## 不适合 / Not For

- 临考押题承诺
- 只列知识点不设计检测
- 把语文课变成知识点罗列，忽略文本细读和表达训练

## 使用前请准备 / Inputs

- 单元范围
- 最近测验或作业错因
- 剩余复习课时
- 学生分层情况
- 重点题型或实验/文本/模型

## 推荐工作流 / Recommended Workflow

- 用 5-8 个问题做主动回忆热身。
- 把字词、阅读方法和写作表达串成单元复习线
- 按概念、方法、应用或表达把错因分组。
- 设计典型题讲评和变式练习。
- 安排下一次间隔复习和复测指标。

## 输出格式 / Output Format

- 单元知识结构
- 主动回忆问题
- 错因聚类
- 讲评顺序
- 变式练习
- 复测安排

## 质量检查 / Quality Checks

- 必须包含主动回忆
- 复习顺序要基于错因证据
- 讲评不能只报答案
- 要有下一次复测指标

## 没有平台工具时 / Standalone Fallback

- 没有错题统计时，让老师粘贴 3-5 个高频错题。
- 没有题库时，生成原创变式题并附答案。

## 示例提示 / Example Prompts

- 帮我做语文第二单元复习课，先用主动回忆，再按错因安排讲评。
- 这次语文单元测错题集中在这些点，帮我设计一节复习课。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 单元复习

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_chinese_unit_review`
- `teacher_tools`
- `单元复习`

示例表达：
- 开始语文单元复习 Skill
- 帮我做单元复习
- 根据当前上下文执行语文单元复习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_chinese_unit_review.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `语文`
- Abilities: `复习计划`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `organization.query_context`, `memory.write`
- Requires Data: `年级和学科/课题`, `教材版本或单元`, `班级基础/错题/课堂观察`, `课时或作业时长`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `单元复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
