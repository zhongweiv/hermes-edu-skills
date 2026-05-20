---
name: "primary-math-rj-textbook-sync"
description: "围绕人教版小学数学教材，把年级、册别、单元和学习目标变成可执行的预习、练习、复习和错题巩固任务。 Workflow: primary_math_rj_textbook_sync.run."
version: "0.7.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "数学", "教材同步", "计算", "应用题", "课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "口算速练"]
    source: hermes-edu-skills
    workflow: "primary_math_rj_textbook_sync.run"
    category: "textbook-sync"
    stages: ["primary"]
    subjects: ["数学"]
    abilities: ["教材同步", "计算", "应用题"]
    scenarios: ["课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "口算速练"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "mistake.query_recent", "mistake.cluster", "plan.generate", "curriculum.resolve", "memory.write"]
    requires_data: ["教材版本", "年级", "册别/学期", "单元或知识点", "学习场景", "可选：错题/薄弱点/可用时间"]
---

# 人教版小学数学同步 Skill

围绕人教版小学数学教材，把年级、册别、单元和学习目标变成可执行的预习、练习、复习和错题巩固任务。

## 这个 Skill 解决什么问题 / Problem

围绕人教版小学数学教材，把年级、册别、单元和学习目标变成可执行的预习、练习、复习和错题巩固任务。

## 最适合 / Best For

- 家长按教材陪孩子同步学习
- 老师围绕当前单元生成练习和复习建议
- 独立 Hermes 用户做教材同步原型

## 不适合 / Not For

- 要求逐字复刻教材或教辅原题
- 没有年级、册别或单元信息却要求精准同步

## 使用前请准备 / Inputs

- 年级
- 册别
- 单元或知识点
- 学习场景：预习、作业、复习、错题巩固
- 可选：孩子最近错题或薄弱点

## 推荐工作流 / Recommended Workflow

- 确认教材版本、年级、册别、单元和学习目标。
- 定位本单元的核心知识点和常见易错点。
- 按场景输出预习提纲、练习题、复习计划或错题巩固。
- 根据学生反馈调整难度和下一步任务。

## 输出格式 / Output Format

- 教材定位
- 知识点清单
- 学习任务
- 练习/讲解
- 下一步建议

## 质量检查 / Quality Checks

- 不得编造不存在的具体教材原文
- 题目难度必须符合年级
- 输出要可直接执行
- 需要明确缺失参数时先追问

## 没有平台工具时 / Standalone Fallback

- 没有教材库时，让用户输入单元名称或课本目录。
- 没有题库时，由 Agent 生成原创练习并标注答案。

## 示例提示 / Example Prompts

- 使用人教版小学数学同步，三年级上册第二单元，帮我做课前预习。
- 人教版二年级下册表内除法，生成 15 分钟课后巩固练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习
- 课后作业
- 同步巩固
- 单元复习
- 错题巩固
- 期中期末复习
- 口算速练

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_math_rj_textbook_sync`
- `textbook_sync`
- `课前预习`
- `课后作业`
- `同步巩固`
- `单元复习`
- `错题巩固`
- `期中期末复习`
- `口算速练`

示例表达：
- 开始人教版小学数学同步 Skill
- 帮我做课前预习
- 按教材同步安排人教版小学数学同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_math_rj_textbook_sync.run`
- Category: `textbook-sync`
- Stages: `primary`
- Subjects: `数学`
- Abilities: `教材同步`, `计算`, `应用题`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `mistake.query_recent`, `mistake.cluster`, `plan.generate`, `curriculum.resolve`, `memory.write`
- Requires Data: `教材版本`, `年级`, `册别/学期`, `单元或知识点`, `学习场景`, `可选：错题/薄弱点/可用时间`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`
- Semesters: `上册`, `下册`
- Scenarios: `课前预习`, `课后作业`, `同步巩固`, `单元复习`, `错题巩固`, `期中期末复习`, `口算速练`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
