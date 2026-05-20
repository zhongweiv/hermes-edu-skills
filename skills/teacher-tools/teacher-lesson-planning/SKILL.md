---
name: "teacher-lesson-planning"
description: "老师备课 Skill是面向老师备课的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: teacher_lesson_planning.run."
version: "0.2.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "教学设计", "学情分析", "老师备课"]
    source: hermes-edu-skills
    workflow: "teacher_lesson_planning.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["教学设计", "学情分析"]
    scenarios: ["老师备课"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 老师备课 Skill

老师备课 Skill是面向老师备课的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

## 这个 Skill 解决什么问题 / Problem

把备课从罗列知识点变成目标、活动、评价一致的课堂设计。

## 最适合 / Best For

- 新课备课
- 复习课设计
- 公开课初稿
- 根据班级学情调整教学活动

## 不适合 / Not For

- 直接替代校内审定教案
- 不了解教材和班级情况却要求精确课件

## 使用前请准备 / Inputs

- 年级和学科
- 课题/教材版本
- 课时长度
- 学生基础
- 本节课目标

## 推荐工作流 / Recommended Workflow

- 确认教学目标和起点
- 拆出重难点和易错点
- 设计课堂流程
- 给出评价方式和课后任务

## 输出格式 / Output Format

- 教学目标
- 重难点
- 课堂流程
- 关键提问
- 分层练习
- 评价方式

## 质量检查 / Quality Checks

- 活动必须服务目标
- 提问要暴露理解
- 练习要分层
- 时间安排要合理

## 没有平台工具时 / Standalone Fallback

- 没有班级数据时，让老师描述强/中/弱和常见错误。
- 没有课件工具时，输出可复制教案结构。

## 示例提示 / Example Prompts

- 设计五年级数学分数加减法 40 分钟新课教案。
- 八年级物理浮力复习课，帮我做课堂流程。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 老师备课

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_lesson_planning`
- `teacher_tools`
- `老师备课`

示例表达：
- 开始老师备课 Skill
- 帮我做老师备课
- 根据当前上下文执行老师备课 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_lesson_planning.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `教学设计`, `学情分析`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `organization.query_context`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
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
