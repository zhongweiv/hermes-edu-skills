---
name: "agent-photo-question"
description: "拍照答疑 Skill用于拍照答疑，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_photo_question.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "综合", "AI 讲题", "图片识题", "拍照答疑"]
    source: hermes-edu-skills
    workflow: "agent_photo_question.run"
    category: "general"
    stages: ["primary", "junior", "senior"]
    subjects: ["综合"]
    abilities: ["AI 讲题", "图片识题"]
    scenarios: ["拍照答疑"]
    quality_tier: "curated"
    standalone_support: "requires_tools"
    public_release: "recommended"
    requires_tools: ["file.read_upload", "vision.ocr_question"]
    requires_data: ["题目图片或用户转写的题干", "学生年级", "学科"]
---

# 拍照答疑 Skill

拍照答疑 Skill用于拍照答疑，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 这个 Skill 解决什么问题 / Problem

把拍照题目转成“先识题、再讲思路、最后追问确认”的学习过程，而不是只给答案。

## 最适合 / Best For

- 学生或家长拍题求讲解
- 题干较长、需要先拆解条件的题
- 需要生成同类题巩固的场景

## 不适合 / Not For

- 考试作弊或实时替考
- 图片严重模糊且用户无法补充题干
- 需要法律、医疗等非教育专业判断的图片

## 使用前请准备 / Inputs

- 题目图片或完整题干
- 年级/学段
- 学科
- 学生已经尝试过的解法或卡住的位置

## 推荐工作流 / Recommended Workflow

- 先识别题干、选项、图表和已知条件。
- 向用户确认识别不清的部分，不要臆造题目。
- 按“条件-目标-方法-步骤”讲解。
- 最后给 1 道同类变式题，检查是否真正理解。

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
- 涉及未成年人时避免诱导付费或索要隐私

## 没有平台工具时 / Standalone Fallback

- 没有视觉工具时，请用户手动输入题干或把图片内容转写出来。
- 没有练习工具时，由 Agent 直接生成同类变式题。

## 示例提示 / Example Prompts

- 我把数学题文字贴给你，请按五年级水平讲解，不要直接跳答案。
- 这道物理题我卡在受力分析，帮我先拆条件。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 拍照答疑

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `agent_photo_question`
- `拍照答疑`

示例表达：
- 开始拍照答疑 Skill
- 帮我安排拍照答疑
- 根据当前上下文执行拍照答疑 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_photo_question.run`
- Category: `general`
- Stages: `primary`, `junior`, `senior`
- Subjects: `综合`
- Abilities: `AI 讲题`, `图片识题`
- Quality Tier: `curated`
- Standalone Support: `requires_tools`
- Public Release: `recommended`
- Requires Tools: `file.read_upload`, `vision.ocr_question`
- Requires Data: `题目图片或用户转写的题干`, `学生年级`, `学科`

成熟度备注：
- 独立 Hermes 可安装，但完整体验依赖图片读取和 OCR/视觉工具；需提供文字兜底。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
