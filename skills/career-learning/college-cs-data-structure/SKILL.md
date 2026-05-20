---
name: "college-cs-data-structure"
description: "把数据结构从抽象概念变成图示理解、手写过程、代码实现和题目迁移。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_cs_data_structure.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "计算机", "算法", "编程", "课程学习"]
    source: hermes-edu-skills
    workflow: "college_cs_data_structure.run"
    category: "career-learning"
    stages: ["college"]
    subjects: ["计算机"]
    abilities: ["算法", "编程"]
    scenarios: ["课程学习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["当前章节或结构", "语言偏好", "卡住的概念/题目", "是否需要代码实现", "可用学习时间"]
---

# 数据结构 Skill

把数据结构从抽象概念变成图示理解、手写过程、代码实现和题目迁移。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把数据结构从抽象概念变成图示理解、手写过程、代码实现和题目迁移。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 大学数据结构课程
- 算法基础薄弱
- 准备技术面试前补基础
- 需要把概念和代码连起来

## 不适合 / Not For

- 直接提交课程作业答案
- 只背复杂度结论不理解过程
- 跳过实现直接刷难题

## 使用前请准备 / Inputs

- 当前章节或结构
- 语言偏好
- 卡住的概念/题目
- 是否需要代码实现
- 可用学习时间

## 推荐工作流 / Recommended Workflow

- 先用生活例子解释结构。
- 画出插入、删除、查询或遍历过程。
- 写最小可运行实现。
- 用一道迁移题检查是否真正理解。

## 输出格式 / Output Format

- 概念解释
- 操作过程
- 复杂度判断
- 代码框架
- 练习题
- 易错点

## 质量检查 / Quality Checks

- 必须解释为什么是这个复杂度
- 代码要小而清楚
- 要有迁移题
- 不能只贴定义

## 没有平台工具时 / Standalone Fallback

- 没有 IDE 时输出手算过程和伪代码。
- 没有题目时给一个典型原创练习。

## 示例提示 / Example Prompts

- 帮我用 JavaScript 讲清楚栈和队列，并给一个小练习。
- 链表删除节点总写错，请带我画过程再写代码。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课程学习

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_cs_data_structure`
- `career_learning`
- `课程学习`

示例表达：
- 开始数据结构 Skill
- 帮我做课程学习
- 根据当前上下文执行数据结构 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_cs_data_structure.run`
- Category: `career-learning`
- Stages: `college`
- Subjects: `计算机`
- Abilities: `算法`, `编程`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `当前章节或结构`, `语言偏好`, `卡住的概念/题目`, `是否需要代码实现`, `可用学习时间`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`
- Scenarios: `课程学习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
