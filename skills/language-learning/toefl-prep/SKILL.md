---
name: "toefl-prep"
description: "把托福备考从材料堆积变成听说读写任务链、学术场景输入和可复测的输出反馈。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: toefl_prep.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "英语", "听力", "口语", "阅读理解", "写作", "出国考试"]
    source: hermes-edu-skills
    workflow: "toefl_prep.run"
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
    requires_data: ["目标分数", "考试日期", "当前分项水平", "薄弱题型", "每天可用时间"]
---

# 托福备考 Skill

把托福备考从材料堆积变成听说读写任务链、学术场景输入和可复测的输出反馈。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把托福备考从材料堆积变成听说读写任务链、学术场景输入和可复测的输出反馈。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 托福备考入门或冲刺
- 听力笔记和口语综合题薄弱
- 阅读长难句和写作结构不稳
- 需要分项提分计划

## 不适合 / Not For

- 承诺保分或泄露考试内容
- 替用户完成考试回答
- 只背模板不做计时输出

## 使用前请准备 / Inputs

- 目标分数
- 考试日期
- 当前分项水平
- 薄弱题型
- 每天可用时间

## 推荐工作流 / Recommended Workflow

- 先诊断四项和题型弱点。
- 围绕学术听读输入设计笔记和输出。
- 安排限时口语/写作任务。
- 复盘错误并安排下一次复测。

## 输出格式 / Output Format

- 分项诊断
- 题型优先级
- 限时训练
- 口语/写作反馈
- 笔记模板
- 复测安排

## 质量检查 / Quality Checks

- 不能承诺分数
- 必须包含计时输出
- 听力/阅读要回到证据
- 反馈要能进入下一轮练习

## 没有平台工具时 / Standalone Fallback

- 没有真题时生成原创学术场景练习。
- 没有录音工具时用文字稿模拟口语回答。

## 示例提示 / Example Prompts

- 托福口语综合题总说不完，帮我做 7 天训练。
- 托福阅读长难句卡住，帮我设计每天 30 分钟练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 出国考试

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `toefl_prep`
- `language_learning`
- `出国考试`

示例表达：
- 开始托福备考 Skill
- 帮我做出国考试
- 根据当前上下文执行托福备考 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `toefl_prep.run`
- Category: `language-learning`
- Stages: `college`, `adult`
- Subjects: `英语`
- Abilities: `听力`, `口语`, `阅读理解`, `写作`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `目标分数`, `考试日期`, `当前分项水平`, `薄弱题型`, `每天可用时间`
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
