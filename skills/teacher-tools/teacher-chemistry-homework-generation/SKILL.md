---
name: "teacher-chemistry-homework-generation"
description: "帮助化学老师生成少而准、可批改、能反映真实掌握情况的分层作业，避免把作业变成题量堆叠。 Workflow: teacher_chemistry_homework_generation.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "化学", "作业生成", "班级作业"]
    source: hermes-edu-skills
    workflow: "teacher_chemistry_homework_generation.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["化学"]
    abilities: ["作业生成"]
    scenarios: ["班级作业"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "organization.query_context", "memory.write"]
    requires_data: ["年级和学科/课题", "教材版本或单元", "班级基础/错题/课堂观察", "课时或作业时长"]
---

# 化学作业生成 Skill

帮助化学老师生成少而准、可批改、能反映真实掌握情况的分层作业，避免把作业变成题量堆叠。

## 这个 Skill 解决什么问题 / Problem

帮助化学老师生成少而准、可批改、能反映真实掌握情况的分层作业，避免把作业变成题量堆叠。

## 最适合 / Best For

- 化学课后巩固
- 化学分层作业
- 周末短练
- 针对错题的补偿练习

## 不适合 / Not For

- 超纲题海
- 无法批改或没有答案依据的开放任务
- 只记结论不理解现象、粒子和符号之间的关系

## 使用前请准备 / Inputs

- 年级和知识点
- 预计完成时间
- 基础/提高/挑战比例
- 班级常见错误
- 是否需要答案解析

## 推荐工作流 / Recommended Workflow

- 先确定作业目标和完成时长。
- 按概念判断、方程式、实验分析和计算分层
- 按基础、提高、挑战设计题目或任务。
- 给出答案、解析和批改关注点。
- 标注学生完成后的反馈和加练规则。

## 输出格式 / Output Format

- 作业目标
- 预计时长
- 基础题
- 提高题
- 挑战题
- 答案解析
- 批改关注点

## 质量检查 / Quality Checks

- 题量必须匹配时长
- 分层差异要清楚
- 答案或评价标准可核验
- 作业目标不能超过本课核心目标

## 没有平台工具时 / Standalone Fallback

- 没有题库时，由 Agent 生成原创题并附答案。
- 没有班级数据时，默认 60/30/10 分层。

## 示例提示 / Example Prompts

- 给七年级化学生成 20 分钟分层作业，要有答案和批改关注点。
- 化学这一课学生错得多，帮我做一份补偿练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 班级作业

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_chemistry_homework_generation`
- `teacher_tools`
- `班级作业`

示例表达：
- 开始化学作业生成 Skill
- 帮我做班级作业
- 根据当前上下文执行化学作业生成 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_chemistry_homework_generation.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `化学`
- Abilities: `作业生成`
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
