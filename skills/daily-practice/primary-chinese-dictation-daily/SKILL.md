---
name: "primary-chinese-dictation-daily"
description: "把生字词听写做成“会读、会写、会用、会订正”的每日小闭环。 Workflow: primary_chinese_dictation_daily.run."
version: "0.5.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "语文", "听写", "默写", "听写默写", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_chinese_dictation_daily.run"
    category: "daily-practice"
    stages: ["primary"]
    subjects: ["语文"]
    abilities: ["听写", "默写"]
    scenarios: ["听写默写", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 小学语文字词听写 Skill

把生字词听写做成“会读、会写、会用、会订正”的每日小闭环。

## 这个 Skill 解决什么问题 / Problem

把生字词听写做成“会读、会写、会用、会订正”的每日小闭环。

## 最适合 / Best For

- 小学语文字词听写
- 家长晚间陪练
- 老师布置词语巩固
- 易错字订正

## 不适合 / Not For

- 一次性听写整册词语
- 只机械抄写不理解词义

## 使用前请准备 / Inputs

- 年级
- 课文或单元
- 词语清单
- 易错字
- 希望题量

## 推荐工作流 / Recommended Workflow

- 筛选今日词语
- 先读音和词义
- 生成听写顺序
- 给订正方式
- 用短句检查会用

## 输出格式 / Output Format

- 今日词表
- 听写步骤
- 订正规则
- 造句小练
- 家长反馈话术

## 质量检查 / Quality Checks

- 词量不能过多
- 必须包含订正方法
- 易错字要单独提醒
- 避免无意义罚抄

## 没有平台工具时 / Standalone Fallback

- 没有教材词库时，让用户粘贴词语表。
- 没有语音工具时，输出家长朗读脚本。

## 示例提示 / Example Prompts

- 三年级语文第 5 课，帮我做 15 个词的听写流程。
- 这些词孩子总写错，帮我安排订正和造句。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 听写默写
- 每日打卡

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_chinese_dictation_daily`
- `daily_practice`
- `听写默写`
- `每日打卡`

示例表达：
- 开始小学语文字词听写 Skill
- 帮我做听写默写
- 根据当前上下文执行小学语文字词听写 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_chinese_dictation_daily.run`
- Category: `daily-practice`
- Stages: `primary`
- Subjects: `语文`
- Abilities: `听写`, `默写`
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

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`
- Semesters: `上册`, `下册`
- Scenarios: `听写默写`, `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
