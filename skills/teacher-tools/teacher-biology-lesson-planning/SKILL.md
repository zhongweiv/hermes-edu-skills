---
name: "teacher-biology-lesson-planning"
description: "帮助生物老师把“这节课讲什么”升级为目标、活动、提问、练习和评价一致的课堂设计，重点围绕生命现象、结构功能、实验探究和图表信息提取。 Workflow: teacher_biology_lesson_planning.run."
version: "0.6.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "生物", "教学设计", "老师备课"]
    source: hermes-edu-skills
    workflow: "teacher_biology_lesson_planning.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["生物"]
    abilities: ["教学设计"]
    scenarios: ["老师备课"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "organization.query_context", "memory.write"]
    requires_data: ["年级和学科/课题", "教材版本或单元", "班级基础/错题/课堂观察", "课时或作业时长"]
---

# 生物备课 Skill

帮助生物老师把“这节课讲什么”升级为目标、活动、提问、练习和评价一致的课堂设计，重点围绕生命现象、结构功能、实验探究和图表信息提取。

## 这个 Skill 解决什么问题 / Problem

帮助生物老师把“这节课讲什么”升级为目标、活动、提问、练习和评价一致的课堂设计，重点围绕生命现象、结构功能、实验探究和图表信息提取。

## 最适合 / Best For

- 生物新课备课
- 生物复习课初稿
- 公开课或教研课打磨
- 根据班级学情调整课堂活动

## 不适合 / Not For

- 直接替代校内审定教案
- 不了解教材和学生起点却要求精确生物课件
- 背名词多、解释少，学生不会用证据说明生命现象

## 使用前请准备 / Inputs

- 年级和课题
- 教材版本或单元
- 课时长度
- 学生基础和常见错误
- 本节课希望达成的核心目标

## 推荐工作流 / Recommended Workflow

- 把课程目标改写成学生可观察的学习表现。
- 用现象或图表提出问题，再回到结构、功能和证据解释
- 设计导入、探究、讲解、练习和反馈的课堂节奏。
- 准备 3-5 个能暴露理解的关键提问。
- 安排出口检测和课后衔接任务。

## 输出格式 / Output Format

- 教学目标
- 学情起点
- 重难点
- 课堂流程
- 关键提问
- 分层练习
- 出口检测

## 质量检查 / Quality Checks

- 目标、活动和评价必须一致
- 每个活动都要说明服务哪个目标
- 关键提问要能暴露误解
- 时间安排要留出反馈

## 没有平台工具时 / Standalone Fallback

- 没有班级数据时，让老师描述强/中/弱学生表现。
- 没有教材库时，让老师粘贴课题、目录或教学要求。

## 示例提示 / Example Prompts

- 帮我设计一节八年级生物新课，学生基础一般，要有关键提问和出口检测。
- 生物公开课初稿，帮我把活动和评价对齐。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 老师备课

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_biology_lesson_planning`
- `teacher_tools`
- `老师备课`

示例表达：
- 开始生物备课 Skill
- 帮我做老师备课
- 根据当前上下文执行生物备课 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_biology_lesson_planning.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `生物`
- Abilities: `教学设计`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `organization.query_context`, `memory.write`
- Requires Data: `年级和学科/课题`, `教材版本或单元`, `班级基础/错题/课堂观察`, `课时或作业时长`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `老师备课`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
