---
name: "teacher-homework-generation"
description: "作业生成 Skill用于班级作业，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: teacher_homework_generation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "作业生成", "分层练习", "班级作业"]
    source: hermes-edu-skills
    workflow: "teacher_homework_generation.run"
    category: "teaching"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["作业生成", "分层练习"]
    scenarios: ["班级作业"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["年级学科", "知识点", "作业时长", "分层要求", "答案解析要求"]
---

# 作业生成 Skill

作业生成 Skill用于班级作业，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

帮助老师生成分层、可批改、不过量的作业，而不是堆题。

## 最适合 / Best For

- 课后巩固
- 分层作业
- 周末小练
- 错题针对性作业

## 不适合 / Not For

- 生成超出课标的大量机械题
- 替代教师对本班作业量的最终判断

## 使用前请准备 / Inputs

- 年级和学科
- 知识点
- 预计完成时间
- 基础/提高/挑战比例
- 是否需要答案解析

## 推荐工作流 / Recommended Workflow

- 确认作业目标和预计时长。
- 按基础、提高、挑战分层生成题目。
- 给出答案和简明解析。
- 标注老师批改时应关注的错误点。

## 输出格式 / Output Format

- 作业目标
- 分层题目
- 答案解析
- 批改关注点
- 可选加练

## 质量检查 / Quality Checks

- 题量必须匹配时长
- 每层难度要清晰
- 答案必须可核验
- 不得包含超纲或含混题干

## 没有平台工具时 / Standalone Fallback

- 没有题库工具时，由 Agent 直接生成原创题并附答案。
- 没有班级数据时，按“基础 60% / 提高 30% / 挑战 10%”默认分层。

## 示例提示 / Example Prompts

- 给七年级数学一元一次方程生成 20 分钟分层作业，附答案。
- 三年级语文生字词复习，生成基础和提高两层作业。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 班级作业

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_homework_generation`
- `班级作业`

示例表达：
- 开始作业生成 Skill
- 帮我安排班级作业
- 根据当前上下文执行作业生成 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_homework_generation.run`
- Category: `teaching`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `作业生成`, `分层练习`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `年级学科`, `知识点`, `作业时长`, `分层要求`, `答案解析要求`

成熟度备注：
- 教师高频生产力 Skill，需输出可直接布置、可批改的作业。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
