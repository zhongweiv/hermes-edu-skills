---
name: "college-ai-foundation"
description: "把 AI 基础学习从热词堆砌变成概念地图、可运行小实验、产品场景和伦理边界。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_ai_foundation.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "计算机", "AI 基础", "兴趣学习"]
    source: hermes-edu-skills
    workflow: "college_ai_foundation.run"
    category: "career-learning"
    stages: ["college", "adult"]
    subjects: ["计算机"]
    abilities: ["AI 基础"]
    scenarios: ["兴趣学习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习背景", "想理解的 AI 方向", "是否会编程", "希望做的应用场景", "每周可用时间"]
---

# AI 基础 Skill

把 AI 基础学习从热词堆砌变成概念地图、可运行小实验、产品场景和伦理边界。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把 AI 基础学习从热词堆砌变成概念地图、可运行小实验、产品场景和伦理边界。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 大学生或成人入门 AI
- 非技术人员理解 AI 产品
- 想做 AI 应用原型
- 需要从概念走到小实验

## 不适合 / Not For

- 夸大 AI 能力或制造伪科学结论
- 跳过基础直接承诺做复杂模型
- 生成违法或高风险自动化方案

## 使用前请准备 / Inputs

- 学习背景
- 想理解的 AI 方向
- 是否会编程
- 希望做的应用场景
- 每周可用时间

## 推荐工作流 / Recommended Workflow

- 先画 AI 概念地图。
- 选一个小实验连接概念和现象。
- 解释模型、数据、评估和风险。
- 最后转成一个可做的应用原型任务。

## 输出格式 / Output Format

- 概念地图
- 小实验
- 关键术语
- 应用场景
- 风险边界
- 下一步项目

## 质量检查 / Quality Checks

- 避免神化 AI
- 必须讲清数据和评估
- 给出可运行或可观察的小实验
- 包含伦理和安全边界

## 没有平台工具时 / Standalone Fallback

- 不会编程时用可视化/无代码实验。
- 没有数据时用公开示例或概念实验。

## 示例提示 / Example Prompts

- 我想从零理解大模型和 Agent，请给我 4 周学习路线。
- 帮我设计一个 AI 教育应用小原型的学习计划。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 兴趣学习

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_ai_foundation`
- `career_learning`
- `兴趣学习`

示例表达：
- 开始AI 基础 Skill
- 帮我做兴趣学习
- 根据当前上下文执行AI 基础 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_ai_foundation.run`
- Category: `career-learning`
- Stages: `college`, `adult`
- Subjects: `计算机`
- Abilities: `AI 基础`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `学习背景`, `想理解的 AI 方向`, `是否会编程`, `希望做的应用场景`, `每周可用时间`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`, `模块`
- Scenarios: `兴趣学习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
