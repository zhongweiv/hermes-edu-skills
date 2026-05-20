---
name: "college-english-postgraduate"
description: "考研英语 Skill用于考研复习、考前冲刺，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: college_english_postgraduate.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "adult", "英语", "阅读理解", "翻译", "写作", "考研复习", "考前冲刺"]
    source: hermes-edu-skills
    workflow: "college_english_postgraduate.run"
    category: "english"
    stages: ["college", "adult"]
    subjects: ["英语"]
    abilities: ["阅读理解", "翻译", "写作"]
    scenarios: ["考研复习", "考前冲刺"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习者年级", "当前目标", "用户输入的题目或学习上下文"]
---

# 考研英语 Skill

考研英语 Skill用于考研复习、考前冲刺，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考研复习
- 考前冲刺

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `college_english_postgraduate`
- `考研复习`
- `考前冲刺`

示例表达：
- 开始考研英语 Skill
- 帮我安排考研复习
- 根据当前上下文执行考研英语 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_english_postgraduate.run`
- Category: `english`
- Stages: `college`, `adult`
- Subjects: `英语`
- Abilities: `阅读理解`, `翻译`, `写作`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `学习者年级`, `当前目标`, `用户输入的题目或学习上下文`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
