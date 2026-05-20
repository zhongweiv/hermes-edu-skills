---
name: "agent-review-assistant"
description: "把复习从重新看笔记变成检索、纠错、归纳和再练习的闭环。 Workflow: agent_review_assistant.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "复习计划", "单元复习"]
    source: hermes-edu-skills
    workflow: "agent_review_assistant.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["复习计划"]
    scenarios: ["单元复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 复习助手 Skill

把复习从重新看笔记变成检索、纠错、归纳和再练习的闭环。

## 这个 Skill 解决什么问题 / Problem

把复习从重新看笔记变成检索、纠错、归纳和再练习的闭环。

## 最适合 / Best For

- 单元复习
- 期中期末前
- 错题巩固
- 知识点遗忘

## 不适合 / Not For

- 临考前要求押题
- 只想复制一份空泛复习提纲

## 使用前请准备 / Inputs

- 复习范围
- 剩余时间
- 已掌握和薄弱点
- 错题样本
- 目标难度

## 推荐工作流 / Recommended Workflow

- 先用问题做主动回忆
- 根据错误定位缺口
- 归纳知识结构
- 安排重点再练
- 设置下一次复习时间

## 输出格式 / Output Format

- 复习范围
- 主动回忆题
- 知识结构
- 错题巩固
- 下次复习安排

## 质量检查 / Quality Checks

- 必须包含主动回忆
- 复习重点要有依据
- 不能只有知识点列表
- 要安排间隔复习

## 没有平台工具时 / Standalone Fallback

- 没有错题库时，让用户粘贴错题或单元目录。
- 没有日程工具时，输出下次复习提醒文本。

## 示例提示 / Example Prompts

- 帮我复习三年级数学第二单元，先问我再讲。
- 期末前 7 天，帮我做英语复习安排。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 单元复习

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_review_assistant`
- `learning_core`
- `单元复习`

示例表达：
- 开始复习助手 Skill
- 帮我做单元复习
- 根据当前上下文执行复习助手 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_review_assistant.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `复习计划`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `单元复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
