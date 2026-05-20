---
name: "junior-english-writing-pep-grade7-volume1-unit1-writing-standard"
description: "人教PEP版七年级上册第一单元的写作提升初中英语写作，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: junior_english_writing_pep_grade7_volume1_unit1_writing_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "英语", "写作", "写作提升"]
    source: hermes-edu-skills
    workflow: "junior_english_writing_pep_grade7_volume1_unit1_writing_standard.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["英语"]
    abilities: ["写作"]
    scenarios: ["写作提升"]
---

# 人教PEP版七年级上册第一单元写作提升标准初中英语写作 Atomic Skill

人教PEP版七年级上册第一单元的写作提升初中英语写作，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 写作提升

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `junior_english_writing_pep_grade7_volume1_unit1_writing_standard`
- `写作提升`

示例表达：
- 开始人教PEP版七年级上册第一单元写作提升标准初中英语写作 Atomic Skill
- 帮我安排写作提升
- 根据当前上下文执行人教PEP版七年级上册第一单元写作提升标准初中英语写作 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `junior_english_writing_pep_grade7_volume1_unit1_writing_standard.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `英语`
- Abilities: `写作`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
