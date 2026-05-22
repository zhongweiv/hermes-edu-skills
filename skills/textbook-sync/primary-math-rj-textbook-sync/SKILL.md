---
name: "primary-math-rj-textbook-sync"
description: "围绕人教版小学数学教材，把年级、册别、单元和学习目标变成可执行的预习、练习、复习和错题巩固任务。 Workflow: primary_math_rj_textbook_sync.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [cli, windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "数学", "教材同步", "计算", "应用题", "课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "口算速练"]
    source: hermes-edu-skills
    workflow: "primary_math_rj_textbook_sync.run"
    category: "textbook-sync"
    category_aliases: ["教材同步", "同步教材", "textbook", "textbook-sync"]
    legacy_slugs: []
    install_aliases: ["primary-math-rj-textbook-sync"]
    stages: ["primary"]
    subjects: ["数学"]
    abilities: ["教材同步", "计算", "应用题"]
    scenarios: ["课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "口算速练"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "mistake.query_recent", "mistake.cluster", "plan.generate", "curriculum.resolve", "memory.write"]
    requires_data: ["教材版本", "年级", "册别/学期", "单元或知识点", "学习场景", "可选：错题/薄弱点/可用时间"]
---

# 人教版小学数学同步 Skill

围绕人教版小学数学教材，把年级、册别、单元和学习目标变成可执行的预习、练习、复习和错题巩固任务。

## 这个 Skill 解决什么问题 / Problem

围绕人教版小学数学教材，把年级、册别、单元和学习目标变成可执行的预习、练习、复习和错题巩固任务。

## 最适合 / Best For

- 家长按教材陪孩子同步学习
- 老师围绕当前单元生成练习和复习建议
- 独立 Hermes 用户做教材同步原型

## 不适合 / Not For

- 要求逐字复刻教材或教辅原题
- 没有年级、册别或单元信息却要求精准同步

## 使用前请准备 / Inputs

- 年级
- 册别
- 单元或知识点
- 学习场景：预习、作业、复习、错题巩固
- 可选：孩子最近错题或薄弱点

## 推荐工作流 / Recommended Workflow

- 确认教材版本、年级、册别、单元和学习目标。
- 定位本单元的核心知识点和常见易错点。
- 按场景输出预习提纲、练习题、复习计划或错题巩固。
- 根据学生反馈调整难度和下一步任务。

## 输出格式 / Output Format

- 教材定位
- 知识点清单
- 学习任务
- 练习/讲解
- 下一步建议

## 质量检查 / Quality Checks

- 不得编造不存在的具体教材原文
- 题目难度必须符合年级
- 输出要可直接执行
- 需要明确缺失参数时先追问

## 没有平台工具时 / Standalone Fallback

- 没有教材库时，让用户输入单元名称或课本目录。
- 没有题库时，由 Agent 生成原创练习并标注答案。

## 示例提示 / Example Prompts

- 使用人教版小学数学同步，三年级上册第二单元，帮我做课前预习。
- 人教版二年级下册表内除法，生成 15 分钟课后巩固练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习
- 课后作业
- 同步巩固
- 单元复习
- 错题巩固
- 期中期末复习
- 口算速练

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_math_rj_textbook_sync`
- `textbook_sync`
- `课前预习`
- `课后作业`
- `同步巩固`
- `单元复习`
- `错题巩固`
- `期中期末复习`
- `口算速练`

示例表达：
- 开始人教版小学数学同步 Skill
- 帮我做课前预习
- 按教材同步安排人教版小学数学同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_math_rj_textbook_sync.run`
- Category: `textbook-sync`

- Install Aliases: `primary-math-rj-textbook-sync`
- Stages: `primary`
- Subjects: `数学`
- Abilities: `教材同步`, `计算`, `应用题`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `mistake.query_recent`, `mistake.cluster`, `plan.generate`, `curriculum.resolve`, `memory.write`
- Requires Data: `教材版本`, `年级`, `册别/学期`, `单元或知识点`, `学习场景`, `可选：错题/薄弱点/可用时间`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`
- Semesters: `上册`, `下册`
- Scenarios: `课前预习`, `课后作业`, `同步巩固`, `单元复习`, `错题巩固`, `期中期末复习`, `口算速练`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 教材版本
- 年级
- 册别/学期
- 单元/课题/知识点
- 使用场景
- 难度
- 题量或可用时间
- 学情/薄弱点/最近错题
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
- 年级/水平未指定：默认使用 一年级、二年级、三年级、四年级、五年级、六年级 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 上册、下册 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度；默认基础理解 40% + 同步巩固 40% + 提高迁移 20%。
- 未指定题量时默认 8-12 道或 15 分钟任务
- 未指定时间时默认 15-20 分钟
- 使用场景未指定：默认“同步巩固”。
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
