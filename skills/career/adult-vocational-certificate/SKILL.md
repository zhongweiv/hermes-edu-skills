---
name: "adult-vocational-certificate"
description: "职业证书 Skill用于考证、考前冲刺，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: adult_vocational_certificate.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "职业教育", "知识记忆", "考试冲刺", "考证", "考前冲刺"]
    source: hermes-edu-skills
    workflow: "adult_vocational_certificate.run"
    category: "career"
    stages: ["adult"]
    subjects: ["职业教育"]
    abilities: ["知识记忆", "考试冲刺"]
    scenarios: ["考证", "考前冲刺"]
---

# 职业证书 Skill

职业证书 Skill用于考证、考前冲刺，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考证
- 考前冲刺

适用角色：
- 学习者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `adult_vocational_certificate`
- `考证`
- `考前冲刺`

示例表达：
- 开始职业证书 Skill
- 帮我安排考证
- 根据当前上下文执行职业证书 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_vocational_certificate.run`
- Category: `career`
- Stages: `adult`
- Subjects: `职业教育`
- Abilities: `知识记忆`, `考试冲刺`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
