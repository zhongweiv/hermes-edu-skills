---
name: "primary-math-mental-arithmetic"
description: "小学口算速练 Skill用于口算速练、每日打卡，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: primary_math_mental_arithmetic.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "数学", "计算", "数感", "口算速练", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_math_mental_arithmetic.run"
    category: "math"
    stages: ["primary"]
    subjects: ["数学"]
    abilities: ["计算", "数感"]
    scenarios: ["口算速练", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "prompt_only"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["年级", "计算范围", "题量", "学生最近错误类型"]
---

# 小学口算速练 Skill

小学口算速练 Skill用于口算速练、每日打卡，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

把小学口算从“随机出题”变成有节奏的短练习：先控范围，再看错误，再给下一轮训练。

## 最适合 / Best For

- 低年级每日 5-10 分钟口算
- 家长陪练时快速生成题目
- 老师按年级和计算范围做课堂热身

## 不适合 / Not For

- 需要严格对齐某本教辅原题的场景
- 需要保存长期成绩曲线但没有外部记忆或数据库的场景

## 使用前请准备 / Inputs

- 学生年级
- 本次练习题量
- 计算范围，例如 20 以内加减、两位数加减、一位数乘法
- 可选：最近错题或常错类型

## 推荐工作流 / Recommended Workflow

- 确认年级、范围、题量和是否限时。
- 生成从易到难的口算题，避免连续重复同一数字模式。
- 等待学生作答后逐题批改。
- 归纳错误类型，例如进位、退位、乘法口诀、看错符号。
- 给出下一轮 3-5 道针对性巩固题。

## 输出格式 / Output Format

- 练习题列表
- 标准答案
- 批改结果
- 错误类型归因
- 下一轮短练建议

## 质量检查 / Quality Checks

- 题目难度必须符合年级和范围
- 答案必须逐题复核
- 反馈要短，不打击孩子
- 下一轮题目必须针对真实错误

## 没有平台工具时 / Standalone Fallback

- 没有练习生成工具时，由 Agent 直接生成题目和答案。
- 没有记忆工具时，让用户粘贴上一轮错题或口头说明常错点。

## 示例提示 / Example Prompts

- 给二年级孩子做 20 道两位数加减口算，先不要给答案。
- 孩子总是退位减法错，帮我生成 10 道针对性练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 口算速练
- 每日打卡

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_math_mental_arithmetic`
- `口算速练`
- `每日打卡`

示例表达：
- 开始小学口算速练 Skill
- 帮我安排口算速练
- 根据当前上下文执行小学口算速练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_math_mental_arithmetic.run`
- Category: `math`
- Stages: `primary`
- Subjects: `数学`
- Abilities: `计算`, `数感`
- Quality Tier: `curated`
- Standalone Support: `prompt_only`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `年级`, `计算范围`, `题量`, `学生最近错误类型`

成熟度备注：
- 入口级高频学习 Skill，独立 Hermes 用户不接工具也能直接使用。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
