---
name: "teacher-lesson-planning"
description: "老师备课 Skill用于老师备课，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: teacher_lesson_planning.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "教学设计", "学情分析", "老师备课"]
    source: hermes-edu-skills
    workflow: "teacher_lesson_planning.run"
    category: "teaching"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["教学设计", "学情分析"]
    scenarios: ["老师备课"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["学段年级", "教材/课题", "课时长度", "班级学情", "教学目标"]
---

# 老师备课 Skill

老师备课 Skill用于老师备课，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

把备课从“罗列知识点”变成目标、活动、评价一致的课堂设计。

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

- 确认教学目标和学生起点。
- 拆出重点、难点和易错点。
- 设计导入、探究、练习、反馈和总结。
- 给出课堂评价方式和板书/课后任务建议。

## 输出格式 / Output Format

- 教学目标
- 重难点
- 课堂流程
- 关键提问
- 分层练习
- 评价方式

## 质量检查 / Quality Checks

- 活动必须服务目标
- 提问要能暴露学生理解
- 练习要分层
- 课堂时间安排要合理

## 没有平台工具时 / Standalone Fallback

- 没有班级数据时，让老师描述“强/中/弱”和常见错误。
- 没有课件工具时，输出可直接复制进文档的教案结构。

## 示例提示 / Example Prompts

- 帮我设计五年级数学“分数加减法”40 分钟新课教案。
- 八年级物理浮力复习课，学生基础中等，帮我做课堂流程。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 老师备课

适用角色：
- 老师
- 学校管理者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `teacher_lesson_planning`
- `老师备课`

示例表达：
- 开始老师备课 Skill
- 帮我安排老师备课
- 根据当前上下文执行老师备课 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_lesson_planning.run`
- Category: `teaching`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `教学设计`, `学情分析`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `学段年级`, `教材/课题`, `课时长度`, `班级学情`, `教学目标`

成熟度备注：
- 教师入口 Skill，独立使用时可凭课题和学情生成备课框架。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
