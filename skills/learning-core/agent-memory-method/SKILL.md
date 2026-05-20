---
name: "agent-memory-method"
description: "把需要背的内容变成可提取、可复述、可间隔复习的记忆任务，而不是反复机械朗读。 Workflow: agent_memory_method.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "记忆", "背诵记忆"]
    source: hermes-edu-skills
    workflow: "agent_memory_method.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["记忆"]
    scenarios: ["背诵记忆"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 记忆方法 Skill

把需要背的内容变成可提取、可复述、可间隔复习的记忆任务，而不是反复机械朗读。

## 这个 Skill 解决什么问题 / Problem

把需要背的内容变成可提取、可复述、可间隔复习的记忆任务，而不是反复机械朗读。

## 最适合 / Best For

- 古诗课文背诵
- 英语单词
- 公式概念
- 历史地理知识点

## 不适合 / Not For

- 超大量内容一次性硬背
- 完全不理解内容就要求长期记住

## 使用前请准备 / Inputs

- 要记忆的文本/词表/知识点
- 年级
- 截止时间
- 已掌握程度
- 容易忘的部分

## 推荐工作流 / Recommended Workflow

- 压缩成记忆块
- 设计提取线索
- 安排首次背诵和回想
- 生成间隔复习表
- 用小测检查能否独立提取

## 输出格式 / Output Format

- 记忆块
- 提取问题
- 背诵步骤
- 间隔复习安排
- 自测题

## 质量检查 / Quality Checks

- 必须包含主动回忆
- 复习间隔要明确
- 不能只给口诀
- 要区分理解和记忆

## 没有平台工具时 / Standalone Fallback

- 没有记忆工具时，输出可复制的复习卡片。
- 没有历史记录时，从当前材料生成首轮计划。

## 示例提示 / Example Prompts

- 帮我把这首古诗拆成今晚能背下来的步骤。
- 这些英语单词容易混，帮我做记忆卡和复习计划。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 背诵记忆

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_memory_method`
- `learning_core`
- `背诵记忆`

示例表达：
- 开始记忆方法 Skill
- 帮我做背诵记忆
- 根据当前上下文执行记忆方法 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_memory_method.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `记忆`
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

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `背诵记忆`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
