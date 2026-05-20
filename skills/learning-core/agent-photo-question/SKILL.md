---
name: "agent-photo-question"
description: "把拍照题目转成先识题、再讲思路、最后追问确认的学习过程，而不是只给答案。 Workflow: agent_photo_question.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "综合", "AI 讲题", "图片识题", "拍照答疑", "课后作业"]
    source: hermes-edu-skills
    workflow: "agent_photo_question.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["综合"]
    abilities: ["AI 讲题", "图片识题"]
    scenarios: ["拍照答疑", "课后作业"]
    quality_tier: "curated"
    standalone_support: "requires_tools"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["file.read_upload", "vision.ocr_question"]
    requires_data: ["题目图片或用户转写的题干", "学生年级", "学科"]
---

# 拍照答疑 Skill

把拍照题目转成先识题、再讲思路、最后追问确认的学习过程，而不是只给答案。

## 这个 Skill 解决什么问题 / Problem

把拍照题目转成先识题、再讲思路、最后追问确认的学习过程，而不是只给答案。

## 最适合 / Best For

- 学生或家长拍题求讲解
- 题干较长、需要拆条件的题
- 需要生成同类题巩固的场景

## 不适合 / Not For

- 考试作弊或实时替考
- 图片严重模糊且用户无法补充题干

## 使用前请准备 / Inputs

- 题目图片或完整题干
- 年级/学段
- 学科
- 学生卡住的位置

## 推荐工作流 / Recommended Workflow

- 识别题干和条件
- 确认不清晰内容
- 按条件-目标-方法-步骤讲解
- 给同类变式题检查理解

## 输出格式 / Output Format

- 题目识别结果
- 解题思路
- 分步讲解
- 易错提醒
- 同类练习

## 质量检查 / Quality Checks

- 不得只输出答案
- 识别不确定时必须标注
- 讲解要匹配年级
- 避免诱导未成年人消费或泄露隐私

## 没有平台工具时 / Standalone Fallback

- 没有视觉工具时，请用户手动输入题干。
- 没有练习工具时，由 Agent 生成同类变式题。

## 示例提示 / Example Prompts

- 我把数学题文字贴给你，请按五年级水平讲解。
- 这道物理题我卡在受力分析，帮我拆条件。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 拍照答疑
- 课后作业

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_photo_question`
- `learning_core`
- `拍照答疑`
- `课后作业`

示例表达：
- 开始拍照答疑 Skill
- 帮我做拍照答疑
- 根据当前上下文执行拍照答疑 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_photo_question.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `综合`
- Abilities: `AI 讲题`, `图片识题`
- Quality Tier: `curated`
- Standalone Support: `requires_tools`
- Public Release: `recommended`
- Requires Tools: `file.read_upload`, `vision.ocr_question`
- Requires Data: `题目图片或用户转写的题干`, `学生年级`, `学科`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `拍照答疑`, `课后作业`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
