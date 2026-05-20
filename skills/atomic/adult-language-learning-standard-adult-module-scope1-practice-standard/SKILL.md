---
name: "adult-language-learning-standard-adult-module-scope1-practice-standard"
description: "通用课程方案成人学习模块组织场景一的专项训练成人语言学习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。 Workflow: adult_language_learning_standard_adult_module_scope1_practice_standard.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "语言学习", "口语", "听力", "词汇", "专项训练"]
    source: hermes-edu-skills
    workflow: "adult_language_learning_standard_adult_module_scope1_practice_standard.run"
    category: "atomic"
    stages: ["adult"]
    subjects: ["语言学习"]
    abilities: ["口语", "听力", "词汇"]
    scenarios: ["专项训练"]
    quality_tier: "generated"
    standalone_support: "requires_tools"
    public_release: "needs_review"
    requires_tools: ["organization.query_context"]
    requires_data: ["组织、学校或机构数据", "班级/课程/校区范围", "统计周期"]
---

# 通用课程方案成人学习模块组织场景一专项训练标准成人语言学习 Atomic Skill

通用课程方案成人学习模块组织场景一的专项训练成人语言学习，适合 Hermes Agent Runtime 在具体教材、学习场景和独立 Agent Context 中精准调用。

## 成熟度说明 / Maturity Note

这个 Skill 是 Generated Skill，适合 Hermes Agent 做路由、检索和场景定位。独立使用时，请补充年级、教材、单元、题目或学习目标等上下文；如果要达到精品体验，建议继续补充真实样例、边界条件和评测标准。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 专项训练

适用角色：
- 学习者
- 机构管理者

## 调用信号 / Invocation Signals

意图：
- `adult_language_learning_standard_adult_module_scope1_practice_standard`
- `专项训练`

示例表达：
- 开始通用课程方案成人学习模块组织场景一专项训练标准成人语言学习 Atomic Skill
- 帮我安排专项训练
- 根据当前上下文执行通用课程方案成人学习模块组织场景一专项训练标准成人语言学习 Atomic Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_language_learning_standard_adult_module_scope1_practice_standard.run`
- Category: `atomic`
- Stages: `adult`
- Subjects: `语言学习`
- Abilities: `口语`, `听力`, `词汇`
- Quality Tier: `generated`
- Standalone Support: `requires_tools`
- Public Release: `needs_review`
- Requires Tools: `organization.query_context`
- Requires Data: `组织、学校或机构数据`, `班级/课程/校区范围`, `统计周期`

成熟度备注：
- 由商业 Skill 规则批量生成，适合作为教材/年级/单元级路由入口。
- 该 Skill 依赖组织数据和平台工具，公开展示前需要进一步审查数据边界和独立使用说明。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
