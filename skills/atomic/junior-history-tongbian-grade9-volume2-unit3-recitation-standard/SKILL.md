---
name: "junior-history-tongbian-grade9-volume2-unit3-recitation-standard"
description: "统编版九年级下册第三单元的背诵记忆初中历史，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: junior_history_tongbian_grade9_volume2_unit3_recitation_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "历史", "知识记忆", "背诵记忆"]
    source: hermes-edu-skills
    workflow: "junior_history_tongbian_grade9_volume2_unit3_recitation_standard.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["历史"]
    abilities: ["知识记忆"]
    scenarios: ["背诵记忆"]
---

# 统编版九年级下册第三单元背诵记忆标准初中历史 Atomic Skill

统编版九年级下册第三单元的背诵记忆初中历史，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 背诵记忆

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_history_tongbian_grade9_volume2_unit3_recitation_standard`
- `背诵记忆`

示例表达：
- 开始统编版九年级下册第三单元背诵记忆标准初中历史 Atomic Skill
- 帮我安排背诵记忆
- 根据当前上下文执行统编版九年级下册第三单元背诵记忆标准初中历史 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_history_tongbian_grade9_volume2_unit3_recitation_standard.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `历史`
- Abilities: `知识记忆`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
