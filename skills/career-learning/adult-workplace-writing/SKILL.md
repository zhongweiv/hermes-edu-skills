---
name: "adult-workplace-writing"
description: "把职场写作从漂亮话变成目标明确、对象清楚、行动可落地的沟通文本。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: adult_workplace_writing.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "职业教育", "写作", "表达", "职业技能"]
    source: hermes-edu-skills
    workflow: "adult_workplace_writing.run"
    category: "career-learning"
    stages: ["adult"]
    subjects: ["职业教育"]
    abilities: ["写作", "表达"]
    scenarios: ["职业技能"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["沟通对象", "写作目的", "原始材料或初稿", "希望对方采取的行动", "语气/字数/渠道要求"]
---

# 职场写作 Skill

把职场写作从漂亮话变成目标明确、对象清楚、行动可落地的沟通文本。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把职场写作从漂亮话变成目标明确、对象清楚、行动可落地的沟通文本。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 工作汇报、通知、邮件、方案和复盘
- 需要调整语气和结构
- 想让对方更快理解并行动
- 独立 Hermes Agent 用户搭建职场写作助手

## 不适合 / Not For

- 伪造事实、夸大业绩或误导承诺
- 违法、欺骗或不当职场沟通
- 只追求辞藻不解决目标

## 使用前请准备 / Inputs

- 沟通对象
- 写作目的
- 原始材料或初稿
- 希望对方采取的行动
- 语气/字数/渠道要求

## 推荐工作流 / Recommended Workflow

- 先确认读者和行动目标。
- 把材料分成背景、重点、证据和请求。
- 输出可发送版本。
- 提示语气、风险和后续跟进。

## 输出格式 / Output Format

- 沟通目标
- 结构建议
- 可发送版本
- 语气调整
- 风险提醒
- 跟进动作

## 质量检查 / Quality Checks

- 不能编造事实
- 行动项要明确
- 语气匹配对象
- 结论和请求要前置

## 没有平台工具时 / Standalone Fallback

- 材料太少时先追问关键事实。
- 无法确定对象时给正式/温和/简洁三个版本。

## 示例提示 / Example Prompts

- 帮我把这段工作汇报改得更清楚、有重点。
- 我要给客户发延期说明，帮我写得诚恳但不失专业。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 职业技能

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `adult_workplace_writing`
- `career_learning`
- `职业技能`

示例表达：
- 开始职场写作 Skill
- 帮我做职业技能
- 根据当前上下文执行职场写作 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_workplace_writing.run`
- Category: `career-learning`
- Stages: `adult`
- Subjects: `职业教育`
- Abilities: `写作`, `表达`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `沟通对象`, `写作目的`, `原始材料或初稿`, `希望对方采取的行动`, `语气/字数/渠道要求`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `成人学习`
- Semesters: `模块`
- Scenarios: `职业技能`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
