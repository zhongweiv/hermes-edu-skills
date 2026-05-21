---
name: "preschool-number-sense-daily"
description: "把学前数感训练变成可触摸、可比较、可说出来的日常小游戏，而不是提前刷小学题。 Workflow: preschool_number_sense_daily.run."
version: "0.12.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "数学", "数感", "数感游戏", "每日打卡"]
    source: hermes-edu-skills
    workflow: "preschool_number_sense_daily.run"
    category: "daily-practice"
    stages: ["preschool"]
    subjects: ["数学"]
    abilities: ["数感"]
    scenarios: ["数感游戏", "每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["年级/水平", "今日知识点或单元", "可用时间", "最近错题或薄弱点", "使用场景：学生自练/家长陪练/老师布置"]
---

# 学前数感每日练 Skill

把学前数感训练变成可触摸、可比较、可说出来的日常小游戏，而不是提前刷小学题。

## 这个 Skill 解决什么问题 / Problem

把学前数感训练变成可触摸、可比较、可说出来的日常小游戏，而不是提前刷小学题。

## 最适合 / Best For

- 幼小衔接数感启蒙
- 数量比较
- 简单分合
- 亲子数学游戏

## 不适合 / Not For

- 提前拔高到小学计算题海
- 用速度和分数压孩子
- 没有实物参与的抽象讲解

## 使用前请准备 / Inputs

- 孩子年龄
- 当前数感目标
- 可用物品
- 可用时间
- 孩子容易卡住的点

## 推荐工作流 / Recommended Workflow

- 用家里实物建立数量情境。
- 让孩子先估一估、摆一摆、说一说。
- 安排 3 轮数量、比较或分合小游戏。
- 用一个生活问题检查迁移。
- 记录下一次要复现的数感动作。

## 输出格式 / Output Format

- 今日目标
- 材料准备
- 游戏流程
- 家长提问
- 下次复现

## 质量检查 / Quality Checks

- 必须从实物和语言出发
- 不提前题海化
- 任务时间要短
- 家长话术要鼓励而非催促

## 没有平台工具时 / Standalone Fallback

- 没有教具时，使用积木、筷子、水果等家庭物品。
- 没有历史记录时，从 1-10 数量比较开始。

## 示例提示 / Example Prompts

- 6 岁孩子数到 20 但不会比较多少，帮我设计数感游戏。
- 今晚用家里的积木做 10 分钟数学启蒙。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 数感游戏
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_number_sense_daily`
- `daily_practice`
- `数感游戏`
- `每日打卡`

示例表达：
- 开始学前数感每日练 Skill
- 帮我做数感游戏
- 根据当前上下文执行学前数感每日练 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_number_sense_daily.run`
- Category: `daily-practice`
- Stages: `preschool`
- Subjects: `数学`
- Abilities: `数感`
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

- Grades: `小班`, `中班`, `大班`, `幼小衔接`
- Semesters: `全年`
- Scenarios: `数感游戏`, `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 年级/水平
- 知识点/计算范围/训练内容
- 题量
- 可用时间
- 难度
- 使用场景
- 最近错题或薄弱点
- 是否需要答案解析

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
- 年级/水平未指定：默认使用 小班、中班、大班、幼小衔接 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 全年 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度；练习默认基础 60% + 标准 30% + 提高 10%。
- 未指定题量时默认 5-10 道；口算类默认 10 道
- 未指定时间时默认 5-10 分钟
- 使用场景未指定：默认“数感游戏”。
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
