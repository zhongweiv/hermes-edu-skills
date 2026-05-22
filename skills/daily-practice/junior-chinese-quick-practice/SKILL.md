---
name: "junior-chinese-quick-practice"
description: "把初中语文每日打卡做成 10-15 分钟可坚持、可反馈、可复现的短训练。重点不是多刷题，而是围绕字词积累、阅读依据、表达完整度和错字订正形成当天闭环。 Workflow: junior_chinese_quick_practice.run."
version: "0.12.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "语文", "同步巩固", "专项训练", "每日打卡", "同步巩固"]
    source: hermes-edu-skills
    workflow: "junior_chinese_quick_practice.run"
    category: "daily-practice"
    category_aliases: ["每日练习", "每日训练", "daily", "practice", "daily-practice"]
    legacy_slugs: []
    install_aliases: ["junior-chinese-quick-practice"]
    stages: ["junior"]
    subjects: ["语文"]
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

# 初中语文快速巩固 Skill

把初中语文每日打卡做成 10-15 分钟可坚持、可反馈、可复现的短训练。重点不是多刷题，而是围绕字词积累、阅读依据、表达完整度和错字订正形成当天闭环。

## 这个 Skill 解决什么问题 / Problem

把初中语文每日打卡做成 10-15 分钟可坚持、可反馈、可复现的短训练。重点不是多刷题，而是围绕字词积累、阅读依据、表达完整度和错字订正形成当天闭环。

## 最适合 / Best For

- 初中语文每日打卡
- 语文同步巩固
- 课后短练
- 错题后的同类回练
- 适合家长晚间陪练，也适合老师布置 10 分钟课后巩固

## 不适合 / Not For

- 一次性刷大量题目
- 只给答案不记录错因
- 替代系统课程学习
- 只让学生抄写或背答案，无法判断是否真正会用

## 使用前请准备 / Inputs

- 年级/水平
- 今天要练的单元或知识点
- 可用时间
- 最近错题或薄弱点
- 使用场景：学生自练、家长陪练或老师布置

## 推荐工作流 / Recommended Workflow

- 先确认今日目标、时间和难度，只练一个小目标。
- 先用 2-3 个回想问题确认今天要练的字词、文本或表达目标
- 把练习拆成读准、写对、找依据、说完整四类小任务
- 反馈时指出一个最影响得分的表达或书写问题
- 把易错字词、依据句或表达模板安排到明天复现

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

- 初中语文今天练同步巩固，只有 15 分钟，帮我安排。
- 孩子语文最近错在同步巩固，先诊断再做 5 道短练。

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
- `junior_chinese_quick_practice`
- `daily_practice`
- `每日打卡`
- `同步巩固`

示例表达：
- 开始初中语文快速巩固 Skill
- 帮我做每日打卡
- 根据当前上下文执行初中语文快速巩固 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_chinese_quick_practice.run`
- Category: `daily-practice`

- Install Aliases: `junior-chinese-quick-practice`
- Stages: `junior`
- Subjects: `语文`
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
- 年级/水平未指定：默认使用 七年级、八年级、九年级 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 上册、下册 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度；练习默认基础 60% + 标准 30% + 提高 10%。
- 未指定题量时默认 5-10 道；口算类默认 10 道
- 未指定时间时默认 5-10 分钟
- 使用场景未指定：默认“每日打卡”。
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
