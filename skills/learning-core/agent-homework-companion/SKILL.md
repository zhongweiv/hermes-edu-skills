---
name: "agent-homework-companion"
description: "陪学生完成作业全过程：先规划顺序，再在卡住时提示，不替写，最后做自查和订正。 Workflow: agent_homework_companion.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "作业陪伴", "课后作业"]
    source: hermes-edu-skills
    workflow: "agent_homework_companion.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["作业陪伴"]
    scenarios: ["课后作业"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "practice.generate_items", "practice.grade_answers", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 作业陪伴 Skill

陪学生完成作业全过程：先规划顺序，再在卡住时提示，不替写，最后做自查和订正。

## 这个 Skill 解决什么问题 / Problem

陪学生完成作业全过程：先规划顺序，再在卡住时提示，不替写，最后做自查和订正。

## 最适合 / Best For

- 家庭作业陪伴
- 学生容易卡在第一题
- 家长希望少吼少催
- 需要作业后自查

## 不适合 / Not For

- 代写作业
- 替学生完成整篇作文或解答
- 不看题目只泛泛鼓励

## 使用前请准备 / Inputs

- 作业清单
- 预计时长
- 最难的一项
- 学生年级
- 家长希望介入程度

## 推荐工作流 / Recommended Workflow

- 按难度和精力排序
- 约定每段任务时长
- 卡住时给提示而非答案
- 完成后自查
- 把错因或拖延点写入复盘

## 输出格式 / Output Format

- 作业路线图
- 每段计时
- 卡点提示
- 自查清单
- 家长沟通建议

## 质量检查 / Quality Checks

- 必须保护学生独立完成
- 提示要逐级给出
- 不能制造对抗
- 结束时要有复盘

## 没有平台工具时 / Standalone Fallback

- 没有作业系统时，让用户粘贴作业清单。
- 没有计时器时，输出手动执行表。

## 示例提示 / Example Prompts

- 今晚有数学、语文、英语作业，帮我安排顺序并陪我做。
- 孩子写作业容易崩溃，给我一个陪伴流程。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课后作业

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_homework_companion`
- `learning_core`
- `课后作业`

示例表达：
- 开始作业陪伴 Skill
- 帮我做课后作业
- 根据当前上下文执行作业陪伴 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_homework_companion.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `作业陪伴`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `practice.generate_items`, `practice.grade_answers`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `课后作业`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
