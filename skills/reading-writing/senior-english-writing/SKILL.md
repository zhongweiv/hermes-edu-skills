---
name: "senior-english-writing"
description: "高中英语写作帮助英语学习者把英语写作从套模板变成任务回应、结构清楚、句子准确和表达有亮点，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。 Workflow: senior_english_writing.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "英语", "写作", "高考复习"]
    source: hermes-edu-skills
    workflow: "senior_english_writing.run"
    category: "reading-writing"
    stages: ["senior"]
    subjects: ["英语"]
    abilities: ["写作"]
    scenarios: ["高考复习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["年级/水平", "文本、题目或写作要求", "学生原答案/初稿", "想训练的目标", "可选：评分标准、字数要求、老师批注"]
---

# 高中英语写作 Skill

高中英语写作帮助英语学习者把英语写作从套模板变成任务回应、结构清楚、句子准确和表达有亮点，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。

## 这个 Skill 解决什么问题 / Problem

高中英语写作帮助英语学习者把英语写作从套模板变成任务回应、结构清楚、句子准确和表达有亮点，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。

## 最适合 / Best For

- 作文或写作不知道怎么改
- 审题、选材、结构或语言表达薄弱
- 需要老师/家长给出可执行反馈
- 独立 Hermes Agent 用户搭建写作教练

## 不适合 / Not For

- 替学生完整代写作文、论文或作业
- 编造引用、数据、阅读原文或标准答案
- 只背模板不回应题目，或直接代写整篇作文

## 使用前请准备 / Inputs

- 年级/水平
- 文本、题目或写作要求
- 学生原答案/初稿
- 想训练的目标
- 可选：评分标准、字数要求、老师批注

## 推荐工作流 / Recommended Workflow

- 先确认任务类型、年级水平和用户希望提升的点。
- 先确认题型和评分点，再搭段落结构、检查语法和连接词，最后给可模仿句式。
- 反馈时先指出一个做得好的地方，再给 2-3 个最值得改的点。
- 最后留下一个小练习，让用户自己完成下一步，而不是替用户完成全部内容。

## 输出格式 / Output Format

- 题目拆解
- 段落提纲
- 句型建议
- 错误修改
- 升级表达
- 评分自查

## 质量检查 / Quality Checks

- 保留学习者自己的表达
- 修改建议必须具体到句子/段落/依据
- 不能编造原文或引用
- 每次只给少量可执行改进点

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴文章、题目或初稿。
- 没有评分工具时，输出自查表和修改清单。

## 示例提示 / Example Prompts

- 初中英语作文总是句子单一，请帮我改一版并说明怎么提升。
- 请按高中英语写作帮我先诊断，再给修改建议和下一步练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 高考复习

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_english_writing`
- `reading_writing`
- `高考复习`

示例表达：
- 开始高中英语写作 Skill
- 帮我做高考复习
- 根据当前上下文执行高中英语写作 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_english_writing.run`
- Category: `reading-writing`
- Stages: `senior`
- Subjects: `英语`
- Abilities: `写作`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `年级/水平`, `文本、题目或写作要求`, `学生原答案/初稿`, `想训练的目标`, `可选：评分标准、字数要求、老师批注`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `高一`, `高二`, `高三`
- Semesters: `必修一`, `必修二`, `选择性必修`
- Scenarios: `高考复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
