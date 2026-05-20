---
name: "family-school-readiness"
description: "幼小衔接家庭准备把幼小衔接从提前刷题改成生活习惯、表达、规则感和基础学习准备。重点不是替家长管孩子，而是把家庭学习场景拆成可沟通、可执行、可复盘的小步骤。 Workflow: family_school_readiness.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "家庭教育", "陪学建议", "入学准备"]
    source: hermes-edu-skills
    workflow: "family_school_readiness.run"
    category: "family-education"
    stages: ["preschool", "primary", "junior"]
    subjects: ["家庭教育"]
    abilities: ["陪学建议"]
    scenarios: ["入学准备"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["孩子年龄/年级", "孩子年龄、入学时间、自理能力、表达能力、专注时长", "今晚可用时间", "家长希望改善的一个具体问题", "可选：老师反馈、作业内容、孩子最近表现"]
---

# 幼小衔接家庭准备 Skill

幼小衔接家庭准备把幼小衔接从提前刷题改成生活习惯、表达、规则感和基础学习准备。重点不是替家长管孩子，而是把家庭学习场景拆成可沟通、可执行、可复盘的小步骤。

## 这个 Skill 解决什么问题 / Problem

幼小衔接家庭准备把幼小衔接从提前刷题改成生活习惯、表达、规则感和基础学习准备。重点不是替家长管孩子，而是把家庭学习场景拆成可沟通、可执行、可复盘的小步骤。

## 最适合 / Best For

- 家长不知道今晚怎么陪学
- 作业、阅读、情绪、屏幕时间或家校沟通容易起冲突
- 需要把学习任务变得更温和、更可坚持
- 独立 Hermes Agent 用户搭建家庭教育助手

## 不适合 / Not For

- 替代专业心理咨询、医学诊断或学校正式评估
- 用惩罚、羞辱或威胁驱动学习
- 把幼小衔接变成小学知识抢跑，忽略习惯和安全感

## 使用前请准备 / Inputs

- 孩子年龄/年级
- 孩子年龄、入学时间、自理能力、表达能力、专注时长
- 今晚可用时间
- 家长希望改善的一个具体问题
- 可选：老师反馈、作业内容、孩子最近表现

## 推荐工作流 / Recommended Workflow

- 先复述家长的真实困扰，判断这是任务问题、能力问题、情绪问题还是沟通问题。
- 先看生活和情绪准备，再安排短时识字/数感/表达/规则练习。
- 给家长可直接说出口的话术，避免命令式和贴标签表达。
- 把任务控制在一个晚上能完成的范围内，并留下第二天复盘点。

## 输出格式 / Output Format

- 入学准备画像
- 本周家庭任务
- 亲子游戏
- 观察清单
- 需要关注的信号

## 质量检查 / Quality Checks

- 语气要支持家长，但不把孩子问题简单归因为懒或不听话
- 每次只解决一个家庭场景
- 建议必须能在家里执行
- 涉及明显心理/安全风险时提醒寻求专业帮助

## 没有平台工具时 / Standalone Fallback

- 没有家庭数据时，让家长描述一个最近发生的具体场景。
- 没有学习记录时，用“今天任务、孩子反应、家长目标”生成陪伴脚本。

## 示例提示 / Example Prompts

- 孩子还有三个月上小学，坐不住也不太会表达需求，帮我做家庭准备计划。
- 请按幼小衔接家庭准备给我今晚能直接照着做的步骤和话术。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 入学准备

适用角色：
- 家长

## 调用信号 / Invocation Signals

意图：
- `family_school_readiness`
- `family_education`
- `入学准备`

示例表达：
- 开始幼小衔接家庭准备 Skill
- 帮我做入学准备
- 根据当前上下文执行幼小衔接家庭准备 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `family_school_readiness.run`
- Category: `family-education`
- Stages: `preschool`, `primary`, `junior`
- Subjects: `家庭教育`
- Abilities: `陪学建议`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `孩子年龄/年级`, `孩子年龄、入学时间、自理能力、表达能力、专注时长`, `今晚可用时间`, `家长希望改善的一个具体问题`, `可选：老师反馈、作业内容、孩子最近表现`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `小班`, `中班`, `大班`, `幼小衔接`, `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`
- Semesters: `全年`, `上册`, `下册`, `上册`, `下册`
- Scenarios: `入学准备`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
