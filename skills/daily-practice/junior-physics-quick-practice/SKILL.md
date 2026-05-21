---
name: "junior-physics-quick-practice"
description: "把初中物理每日打卡做成 10-15 分钟可坚持、可反馈、可复现的短训练。重点不是多刷题，而是围绕概念辨析、模型条件、图像/实验信息和推理步骤形成当天闭环。 Workflow: junior_physics_quick_practice.run."
version: "0.12.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "物理", "同步巩固", "专项训练", "每日打卡", "同步巩固"]
    source: hermes-edu-skills
    workflow: "junior_physics_quick_practice.run"
    category: "daily-practice"
    stages: ["junior"]
    subjects: ["物理"]
    abilities: ["同步巩固", "专项训练"]
    scenarios: ["每日打卡", "同步巩固"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["年级/水平", "今日知识点或单元", "可用时间", "最近错题或薄弱点", "使用场景：学生自练/家长陪练/老师布置"]
---

# 初中物理快速巩固 Skill

把初中物理每日打卡做成 10-15 分钟可坚持、可反馈、可复现的短训练。重点不是多刷题，而是围绕概念辨析、模型条件、图像/实验信息和推理步骤形成当天闭环。

## 这个 Skill 解决什么问题 / Problem

把初中物理每日打卡做成 10-15 分钟可坚持、可反馈、可复现的短训练。重点不是多刷题，而是围绕概念辨析、模型条件、图像/实验信息和推理步骤形成当天闭环。

## 最适合 / Best For

- 初中物理每日打卡
- 物理同步巩固
- 课后短练
- 错题后的同类回练
- 适合初高中物理课后 15 分钟模型巩固

## 不适合 / Not For

- 一次性刷大量题目
- 只给答案不记录错因
- 替代系统课程学习
- 直接套公式，忽略条件、图像和实验语境

## 使用前请准备 / Inputs

- 年级/水平
- 今天要练的单元或知识点
- 可用时间
- 最近错题或薄弱点
- 使用场景：学生自练、家长陪练或老师布置

## 推荐工作流 / Recommended Workflow

- 先确认今日目标、时间和难度，只练一个小目标。
- 先让学生说出现象、条件和要判断的物理量
- 用概念判断、模型选择、图像读取和一题一模型短练组成训练
- 反馈要指出公式适用条件和物理意义
- 把错题对应模型写成一张复习卡，下次换情境再测

## 输出格式 / Output Format

- 今日目标
- 热身回想
- 短练题组
- 答案与讲解
- 错因标签
- 下次复习

## 质量检查 / Quality Checks

- 题量必须匹配 10-15 分钟
- 先让学生尝试再讲解
- 反馈必须包含错因
- 必须留下下一次复习动作

## 没有平台工具时 / Standalone Fallback

- 没有题库时，由 Agent 生成原创短练并附答案。
- 没有学习记录时，用用户提供的错题或薄弱点开始。
- 没有计时工具时，输出可手动执行的三轮练习表。

## 示例提示 / Example Prompts

- 初中物理今天练同步巩固，只有 15 分钟，帮我安排。
- 孩子物理最近错在同步巩固，先诊断再做 5 道短练。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡
- 同步巩固

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_physics_quick_practice`
- `daily_practice`
- `每日打卡`
- `同步巩固`

示例表达：
- 开始初中物理快速巩固 Skill
- 帮我做每日打卡
- 根据当前上下文执行初中物理快速巩固 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_physics_quick_practice.run`
- Category: `daily-practice`
- Stages: `junior`
- Subjects: `物理`
- Abilities: `同步巩固`, `专项训练`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `年级/水平`, `今日知识点或单元`, `可用时间`, `最近错题或薄弱点`, `使用场景：学生自练/家长陪练/老师布置`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `七年级`, `八年级`, `九年级`
- Semesters: `上册`, `下册`
- Scenarios: `每日打卡`, `同步巩固`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
