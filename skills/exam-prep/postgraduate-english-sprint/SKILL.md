---
name: "postgraduate-english-sprint"
description: "考研英语备考 Skill是面向考研复习的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。 Workflow: postgraduate_english_sprint.run."
version: "0.6.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "英语", "阅读理解", "翻译", "写作", "考研复习"]
    source: hermes-edu-skills
    workflow: "postgraduate_english_sprint.run"
    category: "exam-prep"
    stages: ["college", "adult"]
    subjects: ["英语"]
    abilities: ["阅读理解", "翻译", "写作"]
    scenarios: ["考研复习"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    export_mode: "installable"
    release_channel: "public"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 考研英语备考 Skill

考研英语备考 Skill是面向考研复习的产品级 Hermes Skill，年级、册别、单元、知识点和难度通过参数传入。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考研复习

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `postgraduate_english_sprint`
- `exam_prep`
- `考研复习`

示例表达：
- 开始考研英语备考 Skill
- 帮我做考研复习
- 根据当前上下文执行考研英语备考 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `postgraduate_english_sprint.run`
- Category: `exam-prep`
- Stages: `college`, `adult`
- Subjects: `英语`
- Abilities: `阅读理解`, `翻译`, `写作`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `public`

成熟度备注：
- 已收缩为产品级能力包，年级、册别、单元、知识点和难度通过参数传入。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `考研`
- Semesters: `模块`, `模块`
- Scenarios: `考研复习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
