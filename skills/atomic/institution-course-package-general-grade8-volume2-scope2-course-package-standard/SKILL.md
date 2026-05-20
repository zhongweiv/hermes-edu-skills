---
name: "institution-course-package-general-grade8-volume2-scope2-course-package-standard"
description: "通用方案八年级下册组织场景二的机构课程机构课程包，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: institution_course_package_general_grade8_volume2_scope2_course_package_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "junior", "机构运营", "课程配置", "机构课程"]
    source: hermes-edu-skills
    workflow: "institution_course_package_general_grade8_volume2_scope2_course_package_standard.run"
    category: "atomic"
    stages: ["junior"]
    subjects: ["机构运营"]
    abilities: ["课程配置"]
    scenarios: ["机构课程"]
---

# 通用方案八年级下册组织场景二机构课程标准机构课程包 Atomic Skill

通用方案八年级下册组织场景二的机构课程机构课程包，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 机构课程

适用角色：
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `institution_course_package_general_grade8_volume2_scope2_course_package_standard`
- `机构课程`

示例表达：
- 开始通用方案八年级下册组织场景二机构课程标准机构课程包 Atomic Skill
- 帮我安排机构课程
- 根据当前上下文执行通用方案八年级下册组织场景二机构课程标准机构课程包 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `institution_course_package_general_grade8_volume2_scope2_course_package_standard.run`
- Category: `atomic`
- Stages: `junior`
- Subjects: `机构运营`
- Abilities: `课程配置`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
