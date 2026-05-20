---
name: "teacher-homework-generation"
description: "帮助老师生成分层、可批改、不过量的作业，而不是堆题。 Workflow: teacher_homework_generation.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "作业生成", "分层练习", "班级作业"]
    source: hermes-edu-skills
    workflow: "teacher_homework_generation.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["作业生成", "分层练习"]
    scenarios: ["班级作业"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "organization.query_context", "memory.write"]
    requires_data: ["年级和学科/课题", "教材版本或单元", "班级基础/错题/课堂观察", "课时或作业时长"]
---

# 作业生成 Skill

帮助老师生成分层、可批改、不过量的作业，而不是堆题。

## 这个 Skill 解决什么问题 / Problem

帮助老师生成分层、可批改、不过量的作业，而不是堆题。

## 最适合 / Best For

- 课后巩固
- 分层作业
- 周末小练
- 错题针对性作业

## 不适合 / Not For

- 生成超出课标的大量机械题
- 替代教师对作业量的最终判断

## 使用前请准备 / Inputs

- 年级和学科
- 知识点
- 预计完成时间
- 分层比例
- 是否需要答案解析

## 推荐工作流 / Recommended Workflow

- 确认目标和时长
- 按基础/提高/挑战分层生成题目
- 给答案解析
- 标注批改关注点

## 输出格式 / Output Format

- 作业目标
- 分层题目
- 答案解析
- 批改关注点
- 可选加练

## 质量检查 / Quality Checks

- 题量匹配时长
- 难度层次清晰
- 答案可核验
- 不得含混或超纲

## 没有平台工具时 / Standalone Fallback

- 没有题库工具时，由 Agent 生成原创题并附答案。
- 没有班级数据时，默认 60/30/10 分层。

## 示例提示 / Example Prompts

- 给七年级一元一次方程生成 20 分钟分层作业。
- 三年级语文生字词复习，生成两层作业。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 班级作业

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_homework_generation`
- `teacher_tools`
- `班级作业`

示例表达：
- 开始作业生成 Skill
- 帮我做班级作业
- 根据当前上下文执行作业生成 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_homework_generation.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `作业生成`, `分层练习`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `organization.query_context`, `memory.write`
- Requires Data: `年级和学科/课题`, `教材版本或单元`, `班级基础/错题/课堂观察`, `课时或作业时长`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `班级作业`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
