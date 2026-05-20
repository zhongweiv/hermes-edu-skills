---
name: "preschool-pinyin-foundation"
description: "拼音启蒙 Skill用于入学准备、每日打卡，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: preschool_pinyin_foundation.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "语文", "拼读", "入学准备", "入学准备", "每日打卡"]
    source: hermes-edu-skills
    workflow: "preschool_pinyin_foundation.run"
    category: "chinese"
    stages: ["preschool"]
    subjects: ["语文"]
    abilities: ["拼读", "入学准备"]
    scenarios: ["入学准备", "每日打卡"]
    quality_tier: "enhanced"
    standalone_support: "needs_user_input"
    public_release: "allowed"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["孩子年级", "当前学习情况", "家庭陪伴目标"]
---

# 拼音启蒙 Skill

拼音启蒙 Skill用于入学准备、每日打卡，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 入学准备
- 每日打卡

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_pinyin_foundation`
- `入学准备`
- `每日打卡`

示例表达：
- 开始拼音启蒙 Skill
- 帮我安排入学准备
- 根据当前上下文执行拼音启蒙 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_pinyin_foundation.run`
- Category: `chinese`
- Stages: `preschool`
- Subjects: `语文`
- Abilities: `拼读`, `入学准备`
- Quality Tier: `enhanced`
- Standalone Support: `needs_user_input`
- Public Release: `allowed`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `孩子年级`, `当前学习情况`, `家庭陪伴目标`

成熟度备注：
- 已具备基础独立使用说明，后续可继续补充案例和评测。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
