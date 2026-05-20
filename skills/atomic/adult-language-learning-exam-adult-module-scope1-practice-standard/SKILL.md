---
name: "adult-language-learning-exam-adult-module-scope1-practice-standard"
description: "考试专项方案成人学习模块组织场景一的专项训练成人语言学习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: adult_language_learning_exam_adult_module_scope1_practice_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "语言学习", "口语", "听力", "词汇", "专项训练"]
    source: hermes-edu-skills
    workflow: "adult_language_learning_exam_adult_module_scope1_practice_standard.run"
    category: "atomic"
    stages: ["adult"]
    subjects: ["语言学习"]
    abilities: ["口语", "听力", "词汇"]
    scenarios: ["专项训练"]
---

# 考试专项方案成人学习模块组织场景一专项训练标准成人语言学习 Atomic Skill

考试专项方案成人学习模块组织场景一的专项训练成人语言学习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 专项训练

适用角色：
- 学习者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `adult_language_learning_exam_adult_module_scope1_practice_standard`
- `专项训练`

示例表达：
- 开始考试专项方案成人学习模块组织场景一专项训练标准成人语言学习 Atomic Skill
- 帮我安排专项训练
- 根据当前上下文执行考试专项方案成人学习模块组织场景一专项训练标准成人语言学习 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_language_learning_exam_adult_module_scope1_practice_standard.run`
- Category: `atomic`
- Stages: `adult`
- Subjects: `语言学习`
- Abilities: `口语`, `听力`, `词汇`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
