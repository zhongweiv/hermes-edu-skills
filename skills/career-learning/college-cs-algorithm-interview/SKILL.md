---
name: "college-cs-algorithm-interview"
description: "把算法面试准备从盲目刷题变成题型识别、思路表达、复杂度分析和复盘沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_cs_algorithm_interview.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "计算机", "算法", "面试准备"]
    source: hermes-edu-skills
    workflow: "college_cs_algorithm_interview.run"
    category: "career-learning"
    stages: ["college", "adult"]
    subjects: ["计算机"]
    abilities: ["算法"]
    scenarios: ["面试准备"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["目标岗位", "熟悉语言", "当前刷题水平", "薄弱题型", "面试时间线"]
---

# 算法面试 Skill

把算法面试准备从盲目刷题变成题型识别、思路表达、复杂度分析和复盘沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把算法面试准备从盲目刷题变成题型识别、思路表达、复杂度分析和复盘沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 准备实习/校招/社招算法面试
- 刷题很多但面试表达不稳
- 需要按题型建立模板和复盘
- 独立 Hermes Agent 用户做面试训练助手

## 不适合 / Not For

- 在线面试作弊或实时替答
- 只要答案不练讲解
- 追求刷题数量忽略复盘

## 使用前请准备 / Inputs

- 目标岗位
- 熟悉语言
- 当前刷题水平
- 薄弱题型
- 面试时间线

## 推荐工作流 / Recommended Workflow

- 先诊断题型和弱项。
- 用一道代表题训练读题、暴力解、优化和讲解。
- 要求用户复述思路。
- 沉淀题型模板和下次复测题。

## 输出格式 / Output Format

- 面试目标
- 题型诊断
- 解题框架
- 代码要点
- 复杂度分析
- 复盘卡片

## 质量检查 / Quality Checks

- 不能用于实时作弊
- 必须训练口头表达
- 必须包含复杂度和边界条件
- 复盘要能迁移到同类题

## 没有平台工具时 / Standalone Fallback

- 没有在线判题时，输出手动测试用例。
- 没有题目时生成原创同类练习。

## 示例提示 / Example Prompts

- 我准备前端实习算法面试，双指针很弱，请给我 7 天训练。
- 这道题我会写但讲不清，帮我整理面试表达。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 面试准备

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_cs_algorithm_interview`
- `career_learning`
- `面试准备`

示例表达：
- 开始算法面试 Skill
- 帮我做面试准备
- 根据当前上下文执行算法面试 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_cs_algorithm_interview.run`
- Category: `career-learning`
- Stages: `college`, `adult`
- Subjects: `计算机`
- Abilities: `算法`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `目标岗位`, `熟悉语言`, `当前刷题水平`, `薄弱题型`, `面试时间线`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`, `模块`
- Scenarios: `面试准备`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
