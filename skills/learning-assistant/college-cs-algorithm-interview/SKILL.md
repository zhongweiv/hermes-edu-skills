---
name: "college-cs-algorithm-interview"
description: "把算法面试准备从盲目刷题变成题型识别、思路表达、复杂度分析和复盘沉淀。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: college_cs_algorithm_interview.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "计算机", "算法", "面试准备"]
    source: hermes-edu-skills
    workflow: "college_cs_algorithm_interview.run"
    category: "learning-assistant"
    category_aliases: ["学习助手", "学习方法", "学习核心", "learning", "learning-core", "learning-assistant"]
    legacy_slugs: []
    install_aliases: ["college-cs-algorithm-interview"]
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
- `learning_assistant`
- `面试准备`

示例表达：
- 开始算法面试 Skill
- 帮我做面试准备
- 根据当前上下文执行算法面试 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_cs_algorithm_interview.run`
- Category: `learning-assistant`

- Install Aliases: `college-cs-algorithm-interview`
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

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 用户角色
- 年级/水平
- 学习目标或任务目标
- 使用场景
- 难度
- 题量或可用时间
- 是否需要答案/解析/反馈

可选增强维度：
- 教材目录/课本照片文字
- 学生原答案
- 老师批注
- 最近错题
- 薄弱点
- 地区/考试要求
- 偏好的输出格式

## 参数缺失时的默认策略 / Default Policy When Missing

先识别全部应问维度；一次性轻量询问，明确用户可以跳过。用户不回答时，不中断任务，按默认策略继续执行。

默认假设：
- 年级/水平未指定：默认使用 大学、考研 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 模块、模块 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度。
- 未指定题量时默认生成一个短任务
- 未指定时间时默认短任务
- 使用场景未指定：默认“面试准备”。
- 用户角色未指定：默认面向学生直接使用；出现“孩子/家长/陪练”切换到家长视角，出现“班级/布置/教案/课堂”切换到教师视角。
- 学情/错题未指定：默认普通水平起步，并在输出中加入做完后如何判断下一步的反馈机制。
- 答案解析未指定：练习题默认提供答案；小学低年级给短解析，初高中理科给步骤解析，文科阅读/作文给参考要点或评分标准。

兜底规则：
- 该问的维度一个都不少，但最多做一次轻量追问；用户不回答就按默认策略执行。
- 能继续完成的任务先完成，不能因为参数缺失直接失败。
- 只有精准教材同步、考试目标、作文文体、教师课时等会显著改变结果的维度，才优先追问一个最关键问题。
- 没有教材库时让用户提供目录、课题、题目或照片文字；没有题库时生成原创题；没有学情时按普通水平起步。
- 不得复刻教材原文、教辅原题，不承诺押题命中，不代写规避学习的完整作业或考试答案。

- 默认值说明：使用默认值时只用一句话轻量说明，例如“未指定年级和难度，先按支持年级范围内的标准难度生成”。不要把回答变成参数表。
- 后续修正：输出末尾给一个可选修正入口，例如“告诉我年级、册别或最近学到的单元后，我可以再生成更贴合的一版”。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
