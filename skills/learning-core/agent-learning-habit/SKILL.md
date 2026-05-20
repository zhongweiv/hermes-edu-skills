---
name: "agent-learning-habit"
description: "把抽象的“养成学习习惯”落到固定触发、最小动作、即时反馈和家庭协作上。 Workflow: agent_learning_habit.run."
version: "0.8.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "习惯培养", "每日打卡"]
    source: hermes-edu-skills
    workflow: "agent_learning_habit.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["习惯培养"]
    scenarios: ["每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 学习习惯 Skill

把抽象的“养成学习习惯”落到固定触发、最小动作、即时反馈和家庭协作上。

## 这个 Skill 解决什么问题 / Problem

把抽象的“养成学习习惯”落到固定触发、最小动作、即时反馈和家庭协作上。

## 最适合 / Best For

- 每日打卡坚持不了
- 作业前磨蹭
- 复习订正总忘记
- 家长想减少催促

## 不适合 / Not For

- 用打卡制造焦虑
- 把所有问题归咎于孩子不自律

## 使用前请准备 / Inputs

- 想养成的习惯
- 孩子年级
- 每天可用时间
- 当前阻力
- 家长能提供的支持

## 推荐工作流 / Recommended Workflow

- 选择一个最小习惯
- 绑定固定触发点
- 设计 3 分钟启动动作
- 设置可见反馈
- 每周复盘一次并调整难度

## 输出格式 / Output Format

- 习惯目标
- 触发点
- 最小行动
- 家长话术
- 打卡表
- 复盘问题

## 质量检查 / Quality Checks

- 一次只改一个习惯
- 动作必须小到能开始
- 反馈不能只看分数
- 要允许中断后恢复

## 没有平台工具时 / Standalone Fallback

- 没有打卡工具时，输出纸面记录表。
- 没有家庭数据时，用用户描述的阻力开始设计。

## 示例提示 / Example Prompts

- 帮孩子建立每天 15 分钟阅读习惯，不要太复杂。
- 孩子总忘记订正错题，帮我设计一个能坚持的流程。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_learning_habit`
- `learning_core`
- `每日打卡`

示例表达：
- 开始学习习惯 Skill
- 帮我做每日打卡
- 根据当前上下文执行学习习惯 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_learning_habit.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `习惯培养`
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
- Scenarios: `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
