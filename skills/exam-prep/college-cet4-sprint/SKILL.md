---
name: "college-cet4-sprint"
description: "把大学英语四级备考从“泛泛刷题”变成诊断、提分优先级、限时训练、错题复盘和下次复测的闭环，帮助用户知道现在最该抓什么、每天怎么练、怎么判断有没有进步。 Workflow: college_cet4_sprint.run."
version: "0.8.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "英语", "词汇", "听力", "阅读理解", "写作", "考前冲刺"]
    source: hermes-edu-skills
    workflow: "college_cet4_sprint.run"
    category: "exam-prep"
    stages: ["college"]
    subjects: ["英语"]
    abilities: ["词汇", "听力", "阅读理解", "写作"]
    scenarios: ["考前冲刺"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["考试目标和日期", "当前分数/正确率/水平", "薄弱模块或最近错题", "每天可用时间", "训练方式：诊断/专项/限时/整卷/错题复盘"]
---

# 大学英语四级备考 Skill

把大学英语四级备考从“泛泛刷题”变成诊断、提分优先级、限时训练、错题复盘和下次复测的闭环，帮助用户知道现在最该抓什么、每天怎么练、怎么判断有没有进步。

## 这个 Skill 解决什么问题 / Problem

把大学英语四级备考从“泛泛刷题”变成诊断、提分优先级、限时训练、错题复盘和下次复测的闭环，帮助用户知道现在最该抓什么、每天怎么练、怎么判断有没有进步。

## 最适合 / Best For

- 准备大学英语四级但不知道从哪里开始
- 分数或正确率卡住，需要找出最值得先提分的模块
- 需要把错题、薄弱点和复习计划连成一个可执行节奏
- 独立 Hermes Agent 用户搭建考试复习助手或题库前端

## 不适合 / Not For

- 押题、包过、泄露考试内容或替考作弊
- 要求复刻官方真题或受版权保护的试卷原文
- 只想要宏观鸡汤式计划，不愿提供当前水平、错题或可用时间
- 只背单词不做语篇训练，或只背作文模板不练输出

## 使用前请准备 / Inputs

- 考试目标和考试日期
- 当前年级/基础水平/最近分数或正确率
- 薄弱模块或最近 3-5 道错题
- 每天可用时间和每周可学习天数
- 希望训练方式：诊断、专项、限时、整卷、错题复盘、考前冲刺
- 可选：目标分数、使用教材/地区/考试版本、是否需要家长或老师视角

## 推荐工作流 / Recommended Workflow

- 先确认考试目标、剩余时间、当前水平和每天可用时间；缺关键项时只追问最必要的信息。
- 先看词汇缺口、阅读错因、听力定位和写作表达短板，给出 1-3 个最优先提分点。
- 按词汇复现、听力/阅读定位、长难句、完形语篇、翻译和写作输出设计复习路径，区分保分项、突破项和放弃/降权项。
- 用词汇复现、限时阅读、错句改写、写作模板内化和真题节奏训练，每个任务都标注时长、题量、难度和完成标准。
- 把错题按词汇、定位、推断、语法、语篇逻辑和表达问题分类，把每次训练转成错因卡片、同类追练和下次复测时间。
- 最后输出今天立刻能做的第一步，并提醒用户下一次反馈什么数据。

## 输出格式 / Output Format

- 备考定位
- 诊断结论
- 提分优先级
- 今日/本周任务
- 限时训练方案
- 错题复盘表
- 下次复测安排

## 质量检查 / Quality Checks

- 不能承诺押题命中、保过或替代正式考试评价。
- 训练任务要匹配剩余时间和当前水平，不能把计划排满到无法执行。
- 写作要有任务回应、结构、语言准确度和亮点表达
- 错题复盘必须包含错因、订正、同类题、复测时间，而不是只给正确答案。
- 没有真题授权时，只能生成原创题或基于用户提供题目做解析。

## 没有平台工具时 / Standalone Fallback

- 没有题库时，让用户粘贴错题或最近试卷摘要，并生成原创训练题。
- 没有成绩数据时，用“最近正确率/自评强弱/最怕题型”做轻量诊断。
- 没有日历工具时，输出可复制到日历或待办工具的复习清单。

## 示例提示 / Example Prompts

- 大学英语四级，我现在是大学，还有30 天，每天 45 分钟，帮我做提分计划。
- 大学英语四级复习，最近阅读长难句看不懂，写作句子也比较单一，请先诊断再安排 7 天专项训练。
- 下面是我最近 5 道错题，请按大学英语四级要求做错因分类、同类追练和复测安排。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考前冲刺

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_cet4_sprint`
- `exam_prep`
- `考前冲刺`

示例表达：
- 开始大学英语四级备考 Skill
- 帮我做考前冲刺
- 根据当前上下文执行大学英语四级备考 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_cet4_sprint.run`
- Category: `exam-prep`
- Stages: `college`
- Subjects: `英语`
- Abilities: `词汇`, `听力`, `阅读理解`, `写作`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `考试目标和日期`, `当前分数/正确率/水平`, `薄弱模块或最近错题`, `每天可用时间`, `训练方式：诊断/专项/限时/整卷/错题复盘`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`
- Semesters: `模块`
- Scenarios: `考前冲刺`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
