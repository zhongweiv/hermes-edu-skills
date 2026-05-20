---
name: "ielts-prep"
description: "把雅思备考从背资料变成听说读写诊断、分项训练、输出反馈和复测节奏。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: ielts_prep.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "英语", "听力", "口语", "阅读理解", "写作", "出国考试"]
    source: hermes-edu-skills
    workflow: "ielts_prep.run"
    category: "language-learning"
    stages: ["college", "adult"]
    subjects: ["英语"]
    abilities: ["听力", "口语", "阅读理解", "写作"]
    scenarios: ["出国考试"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["目标分数", "考试日期", "当前分项水平", "薄弱项", "每天可用时间"]
---

# 雅思备考 Skill

把雅思备考从背资料变成听说读写诊断、分项训练、输出反馈和复测节奏。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把雅思备考从背资料变成听说读写诊断、分项训练、输出反馈和复测节奏。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 雅思备考入门或冲刺
- 口语/写作缺少反馈
- 阅读听力正确率不稳定
- 需要按目标分规划练习

## 不适合 / Not For

- 承诺保分或押题
- 替考或实时考试辅助
- 只背模板不练真实输出

## 使用前请准备 / Inputs

- 目标分数
- 考试日期
- 当前分项水平
- 薄弱项
- 每天可用时间

## 推荐工作流 / Recommended Workflow

- 先做四项诊断。
- 按目标分确定优先级。
- 安排听说读写短训练和限时任务。
- 用错误记录决定下一轮复测。

## 输出格式 / Output Format

- 分项诊断
- 提分优先级
- 7 天训练
- 口语/写作反馈清单
- 复测安排

## 质量检查 / Quality Checks

- 不能承诺分数
- 必须有输出练习
- 反馈要具体到表达/结构/题型
- 任务量要可坚持

## 没有平台工具时 / Standalone Fallback

- 没有真题时生成原创练习题型。
- 没有评分器时提供自查标准。

## 示例提示 / Example Prompts

- 雅思目标 6.5，写作和口语弱，每天 1 小时，帮我安排 14 天。
- 帮我改一段雅思 Task 2 开头，并说明怎么提升。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 出国考试

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `ielts_prep`
- `language_learning`
- `出国考试`

示例表达：
- 开始雅思备考 Skill
- 帮我做出国考试
- 根据当前上下文执行雅思备考 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `ielts_prep.run`
- Category: `language-learning`
- Stages: `college`, `adult`
- Subjects: `英语`
- Abilities: `听力`, `口语`, `阅读理解`, `写作`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `目标分数`, `考试日期`, `当前分项水平`, `薄弱项`, `每天可用时间`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`, `模块`
- Scenarios: `出国考试`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
