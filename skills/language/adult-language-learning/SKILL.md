---
name: "adult-language-learning"
description: "成人语言学习 Skill用于每日打卡、专项训练，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: adult_language_learning.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "语言学习", "口语", "听力", "词汇", "每日打卡", "专项训练"]
    source: hermes-edu-skills
    workflow: "adult_language_learning.run"
    category: "language"
    stages: ["adult"]
    subjects: ["语言学习"]
    abilities: ["口语", "听力", "词汇"]
    scenarios: ["每日打卡", "专项训练"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "needs_review"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["组织、学校或机构数据", "班级/课程/校区范围", "统计周期"]
---

# 成人语言学习 Skill

成人语言学习 Skill用于每日打卡、专项训练，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡
- 专项训练

适用角色：
- 学习者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `adult_language_learning`
- `每日打卡`
- `专项训练`

示例表达：
- 开始成人语言学习 Skill
- 帮我安排每日打卡
- 根据当前上下文执行成人语言学习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_language_learning.run`
- Category: `language`
- Stages: `adult`
- Subjects: `语言学习`
- Abilities: `口语`, `听力`, `词汇`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `needs_review`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `组织、学校或机构数据`, `班级/课程/校区范围`, `统计周期`

成熟度备注：
- 依赖平台数据或工具链，公开发布前需要补充独立 Hermes 使用边界。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
