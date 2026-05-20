---
name: "primary-english-vocabulary-daily"
description: "让小学英语单词练习从“背拼写”升级为音、形、义、句一起掌握。 Workflow: primary_english_vocabulary_daily.run."
version: "0.7.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "词汇", "默写", "每日打卡", "听写默写"]
    source: hermes-edu-skills
    workflow: "primary_english_vocabulary_daily.run"
    category: "daily-practice"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["词汇", "默写"]
    scenarios: ["每日打卡", "听写默写"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 小学英语单词每日练 Skill

让小学英语单词练习从“背拼写”升级为音、形、义、句一起掌握。

## 这个 Skill 解决什么问题 / Problem

让小学英语单词练习从“背拼写”升级为音、形、义、句一起掌握。

## 最适合 / Best For

- 小学英语每日单词
- 单元词汇预习
- 默写前复习
- 易混词辨析

## 不适合 / Not For

- 大量孤立抄写单词
- 只给中文和拼写不练发音与使用

## 使用前请准备 / Inputs

- 年级
- 教材版本/单元
- 单词表
- 已会/不会
- 练习时长

## 推荐工作流 / Recommended Workflow

- 按主题分组单词
- 提醒发音和拼写易错点
- 生成听写/选择/造句混合练习
- 记录易混词
- 安排复习

## 输出格式 / Output Format

- 今日词组
- 记忆提示
- 混合练习
- 答案
- 易错词复习

## 质量检查 / Quality Checks

- 题量适合小学生
- 必须包含语境句
- 易混词要对比
- 不能只机械抄写

## 没有平台工具时 / Standalone Fallback

- 没有词库时，让用户粘贴单词表。
- 没有语音工具时，输出朗读和默写脚本。

## 示例提示 / Example Prompts

- 四年级 PEP Unit 2 单词，帮我做 10 分钟练习。
- 这些单词孩子会读不会写，帮我设计默写。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡
- 听写默写

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `primary_english_vocabulary_daily`
- `daily_practice`
- `每日打卡`
- `听写默写`

示例表达：
- 开始小学英语单词每日练 Skill
- 帮我做每日打卡
- 根据当前上下文执行小学英语单词每日练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_vocabulary_daily.run`
- Category: `daily-practice`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `词汇`, `默写`
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
- Scenarios: `每日打卡`, `听写默写`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
