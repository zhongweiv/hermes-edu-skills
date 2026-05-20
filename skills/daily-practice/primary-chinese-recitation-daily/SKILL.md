---
name: "primary-chinese-recitation-daily"
description: "把课文和古诗背诵拆成理解、分段、提取线索和复背检查，减少死记硬背。 Workflow: primary_chinese_recitation_daily.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "语文", "背诵", "朗读", "背诵记忆", "每日打卡"]
    source: hermes-edu-skills
    workflow: "primary_chinese_recitation_daily.run"
    category: "daily-practice"
    stages: ["primary"]
    subjects: ["语文"]
    abilities: ["背诵", "朗读"]
    scenarios: ["背诵记忆", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 小学课文古诗背诵 Skill

把课文和古诗背诵拆成理解、分段、提取线索和复背检查，减少死记硬背。

## 这个 Skill 解决什么问题 / Problem

把课文和古诗背诵拆成理解、分段、提取线索和复背检查，减少死记硬背。

## 最适合 / Best For

- 古诗背诵
- 课文片段背诵
- 家长陪背
- 早读复习

## 不适合 / Not For

- 完全不理解内容就要求快速背完
- 超长篇幅一次背诵

## 使用前请准备 / Inputs

- 背诵内容
- 年级
- 截止时间
- 已背程度
- 容易卡住的句子

## 推荐工作流 / Recommended Workflow

- 先理解大意
- 按意义分段
- 提取关键词线索
- 分轮背诵
- 用遮挡和复述检查

## 输出格式 / Output Format

- 内容理解
- 分段线索
- 背诵步骤
- 检查问题
- 复背安排

## 质量检查 / Quality Checks

- 先理解再背
- 每段长度适合年龄
- 必须有回想检查
- 避免一次性过量

## 没有平台工具时 / Standalone Fallback

- 没有教材内容时，让用户粘贴文本。
- 没有语音工具时，输出家长提问脚本。

## 示例提示 / Example Prompts

- 帮孩子背这首古诗，先讲意思再安排背诵。
- 这段课文总卡在中间，帮我设计分段背法。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 背诵记忆
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `primary_chinese_recitation_daily`
- `daily_practice`
- `背诵记忆`
- `每日打卡`

示例表达：
- 开始小学课文古诗背诵 Skill
- 帮我做背诵记忆
- 根据当前上下文执行小学课文古诗背诵 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_chinese_recitation_daily.run`
- Category: `daily-practice`
- Stages: `primary`
- Subjects: `语文`
- Abilities: `背诵`, `朗读`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`
- Semesters: `上册`, `下册`
- Scenarios: `背诵记忆`, `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
