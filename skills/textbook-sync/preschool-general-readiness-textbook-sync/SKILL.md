---
name: "preschool-general-readiness-textbook-sync"
description: "把幼小衔接通用学前综合的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。把零散陪学变成清楚、有节奏、孩子愿意参与的小任务。 Workflow: preschool_general_readiness_textbook_sync.run."
version: "0.14.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "综合", "启蒙学习", "习惯培养", "每日启蒙", "亲子共学", "入学准备"]
    source: hermes-edu-skills
    workflow: "preschool_general_readiness_textbook_sync.run"
    category: "textbook-sync"
    stages: ["preschool"]
    subjects: ["综合"]
    abilities: ["启蒙学习", "习惯培养"]
    scenarios: ["每日启蒙", "亲子共学", "入学准备"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "curriculum.resolve", "memory.write"]
    requires_data: ["教材版本", "年级", "册别/学期", "单元或知识点", "学习场景", "可选：错题/薄弱点/可用时间"]
---

# 幼小衔接通用学前综合同步 Skill

把幼小衔接通用学前综合的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。把零散陪学变成清楚、有节奏、孩子愿意参与的小任务。

## 这个 Skill 解决什么问题 / Problem

把幼小衔接通用学前综合的年级、册别、单元和学习场景，转成预习、同步练习、错题追练、单元复习和考前巩固等可直接执行的学习任务。把零散陪学变成清楚、有节奏、孩子愿意参与的小任务。

## 最适合 / Best For

- 学生按幼小衔接通用学前综合做同步学习
- 家长不知道怎么陪孩子预习、写作业或订正错题
- 老师围绕教材单元快速生成课堂补充练习和复习任务
- 独立 Hermes Agent 用户搭建教材同步学习助手

## 不适合 / Not For

- 逐字复刻教材正文、课后原题或受版权保护的教辅内容
- 缺少年级、册别、单元或课题，却要求精准匹配教材进度
- 考试作弊、代写作业或承诺押题命中
- 任务过长、指令太成人化，孩子很快失去兴趣

## 使用前请准备 / Inputs

- 教材版本
- 年级
- 册别/学期
- 单元、课题或知识点
- 学习场景：课前预习、课后作业、同步巩固、单元复习、错题巩固、期中期末复习
- 可选：学生薄弱点、最近错题、可用时间、希望题量或难度

## 推荐工作流 / Recommended Workflow

- 先确认教材版本、年级、册别、单元和使用场景；信息缺失时只追问关键项。
- 定位本次学习目标和前置基础，重点关注学习准备、基础习惯、表达互动和亲子陪伴。
- 如果是课前预习，先明确今天的目标和孩子当前状态，再进入短任务。
- 如果是作业或巩固，用观察、表达、动手和复述组合成轻量练习。
- 如果是单元/期末复习，通过回忆、展示和家长反馈形成下一步建议；如果是错题巩固，区分不会做、不愿做、注意力不足和任务太难。
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

- 幼小衔接通用学前综合，小班全年启蒙模块，帮我做 15 分钟课前预习。
- 幼小衔接通用学前综合同步，小班全年启蒙模块，孩子最近注意力只能保持十分钟，需要更短的互动任务，生成一组错题追练。
- 按幼小衔接通用学前综合做单元复习，年级是小班，册别是全年，请给我知识点、易错点和原创练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日启蒙
- 亲子共学
- 入学准备

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_general_readiness_textbook_sync`
- `textbook_sync`
- `每日启蒙`
- `亲子共学`
- `入学准备`

示例表达：
- 开始幼小衔接通用学前综合同步 Skill
- 帮我做每日启蒙
- 按教材同步安排幼小衔接通用学前综合同步 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_general_readiness_textbook_sync.run`
- Category: `textbook-sync`
- Stages: `preschool`
- Subjects: `综合`
- Abilities: `启蒙学习`, `习惯培养`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `curriculum.resolve`, `memory.write`
- Requires Data: `教材版本`, `年级`, `册别/学期`, `单元或知识点`, `学习场景`, `可选：错题/薄弱点/可用时间`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `小班`, `中班`, `大班`, `幼小衔接`
- Semesters: `全年`
- Scenarios: `每日启蒙`, `亲子共学`, `入学准备`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
