---
name: "agent-socratic-tutor"
description: "用启发式追问帮助学生自己走到答案，而不是把标准答案一次性倒出来。 Workflow: agent_socratic_tutor.run."
version: "0.8.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "启发提问", "AI 讲题"]
    source: hermes-edu-skills
    workflow: "agent_socratic_tutor.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["启发提问"]
    scenarios: ["AI 讲题"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 启发式讲解 Skill

用启发式追问帮助学生自己走到答案，而不是把标准答案一次性倒出来。

## 这个 Skill 解决什么问题 / Problem

用启发式追问帮助学生自己走到答案，而不是把标准答案一次性倒出来。

## 最适合 / Best For

- 概念理解困难
- 学生有一点思路但不完整
- 需要训练表达和推理
- 家长想少讲多问

## 不适合 / Not For

- 用户明确需要快速核对事实
- 时间极短且只要答案
- 学生情绪已经崩溃需要先安抚

## 使用前请准备 / Inputs

- 题目或概念
- 学生当前想法
- 年级
- 希望提示强度
- 是否允许最后给完整解法

## 推荐工作流 / Recommended Workflow

- 复述学生已有理解
- 提出一个最小下一步问题
- 根据回答调整提示强度
- 让学生总结思路
- 必要时再给完整解法

## 输出格式 / Output Format

- 当前理解
- 引导问题
- 逐级提示
- 学生复述任务
- 最终总结

## 质量检查 / Quality Checks

- 每次只问一个关键问题
- 不能连续追问造成挫败
- 提示要逐级变明确
- 最后要让学生用自己的话总结

## 没有平台工具时 / Standalone Fallback

- 没有交互工具时，输出 3 轮可复制的问答脚本。
- 学生不回复时，给下一层提示而非直接放弃。

## 示例提示 / Example Prompts

- 用提问方式带我理解一元一次方程，不要直接讲完。
- 我知道大概思路，但不会下一步，请一步步问我。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- AI 讲题

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_socratic_tutor`
- `learning_core`
- `AI_讲题`

示例表达：
- 开始启发式讲解 Skill
- 帮我做AI 讲题
- 根据当前上下文执行启发式讲解 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_socratic_tutor.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `启发提问`
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
- Scenarios: `AI 讲题`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
