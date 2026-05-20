---
name: "agent-mistake-review"
description: "把错题从改正答案升级为找到错误模式并安排复习。 Workflow: agent_mistake_review.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "错题订正", "复习计划", "错题订正", "单元复习"]
    source: hermes-edu-skills
    workflow: "agent_mistake_review.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["错题订正", "复习计划"]
    scenarios: ["错题订正", "单元复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "mistake.query_recent", "mistake.cluster", "plan.generate", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 错题复盘 Skill

把错题从改正答案升级为找到错误模式并安排复习。

## 这个 Skill 解决什么问题 / Problem

把错题从改正答案升级为找到错误模式并安排复习。

## 最适合 / Best For

- 学生错题订正
- 家长复盘一周错题
- 老师整理班级共性问题

## 不适合 / Not For

- 没有任何错题样本的泛泛复习
- 只想快速抄标准答案的场景

## 使用前请准备 / Inputs

- 错题题干
- 学生原答案
- 正确答案
- 学生当时思路或老师批注

## 推荐工作流 / Recommended Workflow

- 判断错因
- 给出订正说明
- 抽象错误模式
- 生成重做、同类题和间隔复习动作

## 输出格式 / Output Format

- 错因分类
- 正确解法
- 一句话订正
- 同类题建议
- 复习计划

## 质量检查 / Quality Checks

- 错因必须基于题目和原答案
- 避免把所有问题归为粗心
- 复习动作要可执行

## 没有平台工具时 / Standalone Fallback

- 没有错题库时，让用户粘贴 3-5 道错题。
- 没有记忆工具时，输出可复制的错题卡片。

## 示例提示 / Example Prompts

- 下面是孩子最近 5 道错题，帮我找共性错误。
- 这道题孩子答案是 36，正确答案是 42，帮我分析错因。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 错题订正
- 单元复习

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_mistake_review`
- `learning_core`
- `错题订正`
- `单元复习`

示例表达：
- 开始错题复盘 Skill
- 帮我做错题订正
- 根据当前上下文执行错题复盘 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_mistake_review.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `错题订正`, `复习计划`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `mistake.query_recent`, `mistake.cluster`, `plan.generate`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `错题订正`, `单元复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
