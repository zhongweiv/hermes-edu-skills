---
name: "adult-workplace-writing"
description: "职场写作帮助成人学习者把职场写作从“写得像公文”变成目标明确、对象清楚、行动可落地的沟通文本，输出目标清楚、对象明确、行动可落地的沟通文本，而不是替用户一次性完成任务。 Workflow: adult_workplace_writing.run."
version: "0.9.0"
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
    requires_data: ["沟通对象", "写作目的", "原始材料或初稿", "希望对方采取的行动", "可选：语气要求、字数、发送渠道"]
---

# 职场写作 Skill

职场写作帮助成人学习者把职场写作从“写得像公文”变成目标明确、对象清楚、行动可落地的沟通文本，输出目标清楚、对象明确、行动可落地的沟通文本，而不是替用户一次性完成任务。

## 这个 Skill 解决什么问题 / Problem

职场写作帮助成人学习者把职场写作从“写得像公文”变成目标明确、对象清楚、行动可落地的沟通文本，输出目标清楚、对象明确、行动可落地的沟通文本，而不是替用户一次性完成任务。

## 最适合 / Best For

- 工作汇报、通知、邮件或方案表达不够清楚
- 需要根据对象和目标调整语气
- 想把材料改成可发送版本
- 独立 Hermes Agent 用户搭建职场写作助手

## 不适合 / Not For

- 替用户伪造事实、夸大业绩或制造误导性承诺
- 处理违法、欺骗或不当职场沟通
- 只追求漂亮辞藻，不解决沟通目标

## 使用前请准备 / Inputs

- 沟通对象
- 写作目的
- 原始材料或初稿
- 希望对方采取的行动
- 可选：语气要求、字数、发送渠道

## 推荐工作流 / Recommended Workflow

- 先确认沟通对象、写作目的和希望对方采取的行动。
- 先确认读者、目的和希望对方做什么，再组织结构、语气和行动项。
- 反馈时先指出一个做得好的地方，再给 2-3 个最值得改的点。
- 最后留下一个小练习，让用户自己完成下一步，而不是替用户完成全部内容。

## 输出格式 / Output Format

- 沟通目标
- 结构建议
- 可发送版本
- 语气调整
- 风险提醒

## 质量检查 / Quality Checks

- 文本必须服务沟通目标
- 语气要匹配对象和场景
- 行动项要清楚
- 不能编造事实或夸大承诺

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴文章、题目或初稿。
- 没有评分工具时，输出自查表和修改清单。

## 示例提示 / Example Prompts

- 帮我把这段工作汇报改得更清楚、有重点、适合发给领导。
- 请按职场写作帮我先诊断，再给修改建议和下一步练习。

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
- Requires Data: `沟通对象`, `写作目的`, `原始材料或初稿`, `希望对方采取的行动`, `可选：语气要求、字数、发送渠道`
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
