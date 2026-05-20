---
name: "primary-math-mental-arithmetic"
description: "为小学生生成短、准、可批改的口算训练，让每天 5-10 分钟练出速度、准确率和数感。 Workflow: primary_math_mental_arithmetic.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "数学", "计算", "数感", "口算速练", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_math_mental_arithmetic.run"
    category: "daily-practice"
    stages: ["primary"]
    subjects: ["数学"]
    abilities: ["计算", "数感"]
    scenarios: ["口算速练", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 小学口算速练 Skill

为小学生生成短、准、可批改的口算训练，让每天 5-10 分钟练出速度、准确率和数感。

## 这个 Skill 解决什么问题 / Problem

为小学生生成短、准、可批改的口算训练，让每天 5-10 分钟练出速度、准确率和数感。

## 最适合 / Best For

- 小学每日口算打卡
- 家长陪练计算
- 老师布置短练
- 计算速度和准确率提升

## 不适合 / Not For

- 超纲竞赛题
- 长时间机械刷题
- 没有批改反馈的重复练习

## 使用前请准备 / Inputs

- 年级
- 计算范围
- 题量或时长
- 难度
- 最近容易错的类型

## 推荐工作流 / Recommended Workflow

- 确认年级和计算范围
- 生成短组口算题
- 给答案和批改标准
- 根据错误分类
- 安排下一组针对练习

## 输出格式 / Output Format

- 训练目标
- 口算题组
- 答案
- 错因记录
- 下一组建议

## 质量检查 / Quality Checks

- 题量匹配时长
- 难度不能跳级
- 答案必须可核验
- 错题要转化为下次训练点

## 没有平台工具时 / Standalone Fallback

- 没有练习工具时，直接生成题目和答案。
- 没有历史记录时，从年级默认范围开始。

## 示例提示 / Example Prompts

- 二年级下册表内除法，生成 20 道 5 分钟口算。
- 孩子退位减法容易错，帮我做一组专项口算。

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
- `daily_practice`
- `口算速练`
- `每日打卡`

示例表达：
- 开始小学口算速练 Skill
- 帮我做口算速练
- 根据当前上下文执行小学口算速练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_math_mental_arithmetic.run`
- Category: `daily-practice`
- Stages: `primary`
- Subjects: `数学`
- Abilities: `计算`, `数感`
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
- Scenarios: `口算速练`, `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
