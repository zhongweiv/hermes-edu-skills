---
name: "college-cs-python"
description: "把 Python 学习从“看完教程就忘”变成语法理解、小项目、调试反馈和作品沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_cs_python.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "计算机", "编程", "职业技能"]
    source: hermes-edu-skills
    workflow: "college_cs_python.run"
    category: "career-learning"
    stages: ["college", "adult"]
    subjects: ["计算机"]
    abilities: ["编程"]
    scenarios: ["职业技能"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["当前编程基础", "学习目标", "每天可用时间", "想做的项目方向", "可选：已有代码或报错信息"]
---

# Python 学习 Skill

把 Python 学习从“看完教程就忘”变成语法理解、小项目、调试反馈和作品沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把 Python 学习从“看完教程就忘”变成语法理解、小项目、调试反馈和作品沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 零基础或转专业学习 Python
- 想用 Python 做自动化、数据处理或小工具
- 需要项目制学习路径
- 独立 Hermes Agent 用户搭建编程学习助手

## 不适合 / Not For

- 直接代写课程作业或外包代码
- 跳过基础语法只要完整项目答案
- 处理违法爬虫、攻击脚本或绕过系统限制

## 使用前请准备 / Inputs

- 当前编程基础
- 学习目标
- 每天可用时间
- 想做的项目方向
- 可选：已有代码或报错信息

## 推荐工作流 / Recommended Workflow

- 先判断基础水平和目标场景。
- 用一个小项目带出当天语法点。
- 安排编写、运行、报错定位和重构。
- 最后留下一个可展示的小成果和下一步挑战。

## 输出格式 / Output Format

- 学习目标
- 今日概念
- 小项目任务
- 代码骨架
- 调试清单
- 下一步挑战

## 质量检查 / Quality Checks

- 必须让用户自己动手写关键代码
- 讲解要结合项目场景
- 不得提供不当用途代码
- 输出要包含调试和复盘

## 没有平台工具时 / Standalone Fallback

- 没有运行环境时，用伪代码和步骤解释。
- 没有项目想法时，按自动化/数据/小游戏给用户选择。

## 示例提示 / Example Prompts

- 我零基础想学 Python，每天 40 分钟，请用一个小项目带我学。
- 这段 Python 报错看不懂，帮我定位并教我怎么调试。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 职业技能

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_cs_python`
- `career_learning`
- `职业技能`

示例表达：
- 开始Python 学习 Skill
- 帮我做职业技能
- 根据当前上下文执行Python 学习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_cs_python.run`
- Category: `career-learning`
- Stages: `college`, `adult`
- Subjects: `计算机`
- Abilities: `编程`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `当前编程基础`, `学习目标`, `每天可用时间`, `想做的项目方向`, `可选：已有代码或报错信息`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`, `模块`
- Scenarios: `职业技能`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
