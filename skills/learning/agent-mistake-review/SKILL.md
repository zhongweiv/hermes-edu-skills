---
name: "agent-mistake-review"
description: "错题复习 Skill用于错题订正、单元复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_mistake_review.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "senior", "学习能力", "错题订正", "复习计划", "错题订正", "单元复习"]
    source: hermes-edu-skills
    workflow: "agent_mistake_review.run"
    category: "learning"
    stages: ["preschool", "primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["错题订正", "复习计划"]
    scenarios: ["错题订正", "单元复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    requires_tools: []
    requires_data: ["错题内容", "学生答案", "标准答案或老师批注", "近期学习目标"]
---

# 错题复习 Skill

错题复习 Skill用于错题订正、单元复习，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

把错题从“改正答案”升级为“找到错误模式并安排复习”。

## 最适合 / Best For

- 学生错题订正
- 家长帮孩子复盘一周错题
- 老师整理班级共性问题

## 不适合 / Not For

- 没有任何错题样本的泛泛复习
- 只想快速抄标准答案的场景

## 使用前请准备 / Inputs

- 错题题干
- 学生原答案
- 正确答案
- 学生当时的思路或老师批注

## 推荐工作流 / Recommended Workflow

- 先判断错因：知识缺口、审题、计算、表达、方法选择或粗心。
- 给出一版学生能看懂的订正说明。
- 抽象出错误模式，而不是只处理这一题。
- 生成 3 个复习动作：重做、同类题、间隔复习。

## 输出格式 / Output Format

- 错因分类
- 正确解法
- 一句话订正
- 同类题建议
- 复习计划

## 质量检查 / Quality Checks

- 错因必须基于题目和原答案
- 避免把所有问题都归为粗心
- 复习动作要可执行
- 对低年级学生语气要鼓励

## 没有平台工具时 / Standalone Fallback

- 没有错题库时，让用户一次粘贴 3-5 道错题。
- 没有记忆工具时，在输出末尾生成可复制的错题卡片。

## 示例提示 / Example Prompts

- 下面是孩子最近 5 道错题，帮我找共性错误并安排三天复习。
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
- `错题订正`
- `单元复习`

示例表达：
- 开始错题复习 Skill
- 帮我安排错题订正
- 根据当前上下文执行错题复习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_mistake_review.run`
- Category: `learning`
- Stages: `preschool`, `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `错题订正`, `复习计划`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: none
- Requires Data: `错题内容`, `学生答案`, `标准答案或老师批注`, `近期学习目标`

成熟度备注：
- 没有错题库也可以使用，但需要用户提供错题样本。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
