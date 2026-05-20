---
name: "junior-chemistry-lk-textbook-sync"
description: "把鲁科版初中化学的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。让化学同步学习不止记结论，而是能解释现象、写对符号、看懂实验。 Workflow: junior_chemistry_lk_textbook_sync.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "化学", "教材同步", "实验理解", "课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "中考复习"]
    source: hermes-edu-skills
    workflow: "junior_chemistry_lk_textbook_sync.run"
    category: "textbook-sync"
    stages: ["junior"]
    subjects: ["化学"]
    abilities: ["教材同步", "实验理解"]
    scenarios: ["课前预习", "课后作业", "同步巩固", "单元复习", "错题巩固", "期中期末复习", "中考复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "mistake.query_recent", "mistake.cluster", "plan.generate", "curriculum.resolve", "memory.write"]
    requires_data: ["教材版本", "年级", "册别/学期", "单元或知识点", "学习场景", "可选：错题/薄弱点/可用时间"]
---

# 鲁科版初中化学同步 Skill

把鲁科版初中化学的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。让化学同步学习不止记结论，而是能解释现象、写对符号、看懂实验。

## 这个 Skill 解决什么问题 / Problem

把鲁科版初中化学的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。让化学同步学习不止记结论，而是能解释现象、写对符号、看懂实验。

## 最适合 / Best For

- 学生按鲁科版初中化学做同步学习
- 家长不知道怎么陪孩子预习、写作业或订正错题
- 老师围绕教材单元快速生成课堂补充练习和复习任务
- 独立 Hermes Agent 用户搭建教材同步学习助手

## 不适合 / Not For

- 逐字复刻教材正文、课后原题或受版权保护的教辅内容
- 缺少年级、册别、单元或课题，却要求精准匹配教材进度
- 考试作弊、代写作业或承诺押题命中
- 死记化学用语和结论，无法连接现象、粒子和符号

## 使用前请准备 / Inputs

- 教材版本
- 年级
- 册别/学期
- 单元、课题或知识点
- 学习场景：课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习
- 可选：学生薄弱点、最近错题、可用时间、希望题量或难度

## 推荐工作流 / Recommended Workflow

- 先确认教材版本、年级、册别、单元和使用场景；信息缺失时只追问关键项。
- 定位本次学习目标和前置基础，重点关注宏观现象、微观粒子、化学符号、反应规律和实验安全。
- 如果是课前预习，用现象或实验问题引入，再把宏观、微观和符号三线对齐。
- 如果是作业或巩固，按概念判断、化学用语、实验分析、推断和计算分层。
- 如果是单元/期末复习，围绕物质变化、实验探究和易混概念形成复习链；如果是错题巩固，区分现象描述不准、微观解释不到位、方程式错误和实验条件遗漏。
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

- 鲁科版初中化学，七年级上册第一单元，帮我做 15 分钟课前预习。
- 鲁科版初中化学同步，七年级上册第一单元，孩子最近方程式配平和实验现象描述经常出错，生成一组错题追练。
- 按鲁科版初中化学做单元复习，年级是七年级，册别是上册，请给我知识点、易错点和原创练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习
- 课后作业
- 同步巩固
- 单元复习
- 错题巩固
- 期中期末复习
- 中考复习

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_chemistry_lk_textbook_sync`
- `textbook_sync`
- `课前预习`
- `课后作业`
- `同步巩固`
- `单元复习`
- `错题巩固`
- `期中期末复习`
- `中考复习`

示例表达：
- 开始鲁科版初中化学同步 Skill
- 帮我做课前预习
- 按教材同步安排鲁科版初中化学同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_chemistry_lk_textbook_sync.run`
- Category: `textbook-sync`
- Stages: `junior`
- Subjects: `化学`
- Abilities: `教材同步`, `实验理解`
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

- Grades: `七年级`, `八年级`, `九年级`
- Semesters: `上册`, `下册`
- Scenarios: `课前预习`, `课后作业`, `同步巩固`, `单元复习`, `错题巩固`, `期中期末复习`, `中考复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
