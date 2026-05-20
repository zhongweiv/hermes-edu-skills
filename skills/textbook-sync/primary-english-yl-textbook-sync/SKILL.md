---
name: "primary-english-yl-textbook-sync"
description: "把译林版小学英语的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。让英语同步学习从背单词变成会听、会读、会说、会写的短任务。 Workflow: primary_english_yl_textbook_sync.run."
version: "0.8.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "英语", "教材同步", "词汇", "听说读写", "课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习"]
    source: hermes-edu-skills
    workflow: "primary_english_yl_textbook_sync.run"
    category: "textbook-sync"
    stages: ["primary"]
    subjects: ["英语"]
    abilities: ["教材同步", "词汇", "听说读写"]
    scenarios: ["课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "mistake.query_recent", "mistake.cluster", "plan.generate", "curriculum.resolve", "memory.write"]
    requires_data: ["教材版本", "年级", "册别/学期", "单元或知识点", "学习场景", "可选：错题/薄弱点/可用时间"]
---

# 译林版小学英语同步 Skill

把译林版小学英语的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。让英语同步学习从背单词变成会听、会读、会说、会写的短任务。

## 这个 Skill 解决什么问题 / Problem

把译林版小学英语的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。让英语同步学习从背单词变成会听、会读、会说、会写的短任务。

## 最适合 / Best For

- 学生按译林版小学英语做同步学习
- 家长不知道怎么陪孩子预习、写作业或订正错题
- 老师围绕教材单元快速生成课堂补充练习和复习任务
- 独立 Hermes Agent 用户搭建教材同步学习助手

## 不适合 / Not For

- 逐字复刻教材正文、课后原题或受版权保护的教辅内容
- 缺少年级、册别、单元或课题，却要求精准匹配教材进度
- 考试作弊、代写作业或承诺押题命中
- 只背单词和规则，缺少语境输入、输出和复现

## 使用前请准备 / Inputs

- 教材版本
- 年级
- 册别/学期
- 单元、课题或知识点
- 学习场景：课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习
- 可选：学生薄弱点、最近错题、可用时间、希望题量或难度

## 推荐工作流 / Recommended Workflow

- 先确认教材版本、年级、册别、单元和使用场景；信息缺失时只追问关键项。
- 定位本次学习目标和前置基础，重点关注词汇音形义、句型语法、语篇理解、听说读写和真实语境输出。
- 如果是课前预习，先建立主题词和核心句型，再进入语篇和表达任务。
- 如果是作业或巩固，把词汇、句型、阅读理解和小口语/小写作组合练习。
- 如果是单元/期末复习，通过词汇复现、语法错点和语篇任务做螺旋复习；如果是错题巩固，区分不会读、不会写、不会用、语法混淆和阅读定位错误。
- 最后给出一个轻量反馈问题，并根据回答推荐下一步学习动作。

## 输出格式 / Output Format

- 教材定位
- 本次目标
- 核心知识点
- 易错点提醒
- 学习任务/练习题
- 答案与自查标准
- 下一步建议

## 质量检查 / Quality Checks

- 不能声称拥有完整教材原文；无法确认时请用户提供目录、课题、照片或题目文本。
- 练习题必须为原创或基于用户提供内容改写，并明确标注答案或自查标准。
- 任务量要适合年级和可用时间，小学生尤其避免一次给太多题。
- 输出必须可直接执行，不只给抽象建议。
- 凡是根据常见教材进度推断的内容，都要说明“请以老师课堂进度或用户提供目录为准”。

## 没有平台工具时 / Standalone Fallback

- 没有教材库时，让用户输入目录、单元标题、课文标题、知识点或拍照转写后的题干。
- 没有题库时，由 Agent 生成原创练习，并附答案、解析和难度标注。
- 没有学情数据时，先按基础/标准/提高三档给任务，再根据学生反馈调整。

## 示例提示 / Example Prompts

- 译林版小学英语，一年级上册第一单元，帮我做 15 分钟课前预习。
- 译林版小学英语同步，一年级上册第一单元，孩子最近单词会读不会写，阅读题定位也容易错，生成一组错题追练。
- 按译林版小学英语做单元复习，年级是一年级，册别是上册，请给我知识点、易错点和原创练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习
- 课后作业
- 同步巩固
- 单元复习
- 错题巩固
- 期中期末复习

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_english_yl_textbook_sync`
- `textbook_sync`
- `课前预习`
- `课后作业`
- `同步巩固`
- `单元复习`
- `错题巩固`
- `期中期末复习`

示例表达：
- 开始译林版小学英语同步 Skill
- 帮我做课前预习
- 按教材同步安排译林版小学英语同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_english_yl_textbook_sync.run`
- Category: `textbook-sync`
- Stages: `primary`
- Subjects: `英语`
- Abilities: `教材同步`, `词汇`, `听说读写`
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
- Scenarios: `课前预习`, `课后作业`, `同步巩固`, `单元复习`, `错题巩固`, `期中期末复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
