---
name: "primary-chinese-reading"
description: "小学语文阅读理解帮助学生把阅读训练从“做题对答案”升级为读懂文本、找到依据、组织表达和迁移方法，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。 Workflow: primary_chinese_reading.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "语文", "阅读理解", "阅读训练"]
    source: hermes-edu-skills
    workflow: "primary_chinese_reading.run"
    category: "reading-writing"
    stages: ["primary"]
    subjects: ["语文"]
    abilities: ["阅读理解"]
    scenarios: ["阅读训练"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["年级/水平", "文本、题目或写作要求", "学生原答案/初稿", "想训练的目标", "可选：评分标准、字数要求、老师批注"]
---

# 小学语文阅读理解 Skill

小学语文阅读理解帮助学生把阅读训练从“做题对答案”升级为读懂文本、找到依据、组织表达和迁移方法，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。

## 这个 Skill 解决什么问题 / Problem

小学语文阅读理解帮助学生把阅读训练从“做题对答案”升级为读懂文本、找到依据、组织表达和迁移方法，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。

## 最适合 / Best For

- 阅读理解答不到点
- 答案缺少文本依据
- 需要老师/家长给出可执行反馈
- 独立 Hermes Agent 用户搭建阅读训练助手

## 不适合 / Not For

- 替学生完整代写作文、论文或作业
- 编造引用、数据、阅读原文或标准答案
- 脱离文本编答案，或把阅读讲成空泛技巧

## 使用前请准备 / Inputs

- 年级/水平
- 文本、题目或写作要求
- 学生原答案/初稿
- 想训练的目标
- 可选：评分标准、字数要求、老师批注

## 推荐工作流 / Recommended Workflow

- 先确认任务类型、年级水平和用户希望提升的点。
- 先确认文本类型和题目目标，再做大意理解、证据定位、推断表达和错因讲解。
- 反馈时先指出一个做得好的地方，再给 2-3 个最值得改的点。
- 最后留下一个小练习，让用户自己完成下一步，而不是替用户完成全部内容。

## 输出格式 / Output Format

- 阅读目标
- 文本线索
- 问题拆解
- 参考答案
- 依据标注
- 表达改进

## 质量检查 / Quality Checks

- 保留学习者自己的表达
- 修改建议必须具体到句子/段落/依据
- 不能编造原文或引用
- 每次只给少量可执行改进点

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴文章、题目或初稿。
- 没有评分工具时，输出自查表和修改清单。

## 示例提示 / Example Prompts

- 这篇现代文孩子总答不到点，请帮他找文本依据并改进答案表达。
- 请按小学语文阅读理解帮我先诊断，再给修改建议和下一步练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 阅读训练

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `primary_chinese_reading`
- `reading_writing`
- `阅读训练`

示例表达：
- 开始小学语文阅读理解 Skill
- 帮我做阅读训练
- 根据当前上下文执行小学语文阅读理解 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `primary_chinese_reading.run`
- Category: `reading-writing`
- Stages: `primary`
- Subjects: `语文`
- Abilities: `阅读理解`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `年级/水平`, `文本、题目或写作要求`, `学生原答案/初稿`, `想训练的目标`, `可选：评分标准、字数要求、老师批注`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`
- Semesters: `上册`, `下册`
- Scenarios: `阅读训练`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
