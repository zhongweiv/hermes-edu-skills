---
name: "adult-vocational-certificate"
description: "把职业证书备考从买课和刷题变成考纲拆解、知识框架、练习、错题和复测计划。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: adult_vocational_certificate.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "职业教育", "知识记忆", "考试冲刺", "考证"]
    source: hermes-edu-skills
    workflow: "adult_vocational_certificate.run"
    category: "career-learning"
    stages: ["adult"]
    subjects: ["职业教育"]
    abilities: ["知识记忆", "考试冲刺"]
    scenarios: ["考证"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["证书名称", "考试日期", "当前基础", "每天/每周可用时间", "薄弱模块或错题"]
---

# 职业证书备考 Skill

把职业证书备考从买课和刷题变成考纲拆解、知识框架、练习、错题和复测计划。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把职业证书备考从买课和刷题变成考纲拆解、知识框架、练习、错题和复测计划。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 成人职业证书备考
- 时间少但需要稳定推进
- 不知道先学考纲还是先刷题
- 需要可执行复习节奏

## 不适合 / Not For

- 承诺包过、买证或伪造证书
- 泄露考试内容或替考作弊
- 只收藏资料不复盘

## 使用前请准备 / Inputs

- 证书名称
- 考试日期
- 当前基础
- 每天/每周可用时间
- 薄弱模块或错题

## 推荐工作流 / Recommended Workflow

- 先拆考试结构和剩余时间。
- 按高频模块安排学习和练习。
- 每周做错题复盘。
- 临考前做模拟和记忆回收。

## 输出格式 / Output Format

- 备考定位
- 模块优先级
- 周计划
- 每日任务
- 错题表
- 复测安排

## 质量检查 / Quality Checks

- 不能承诺通过
- 计划要适合成人时间
- 必须有错题和复测
- 不能鼓励作弊或证书造假

## 没有平台工具时 / Standalone Fallback

- 没有考纲时让用户粘贴考试目录。
- 没有题库时生成原创知识点练习。

## 示例提示 / Example Prompts

- 我准备一个职业证书考试，还有 45 天，每晚 1 小时，帮我规划。
- 这些题老错，帮我按考点做错题复盘。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 考证

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `adult_vocational_certificate`
- `career_learning`
- `考证`

示例表达：
- 开始职业证书备考 Skill
- 帮我做考证
- 根据当前上下文执行职业证书备考 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_vocational_certificate.run`
- Category: `career-learning`
- Stages: `adult`
- Subjects: `职业教育`
- Abilities: `知识记忆`, `考试冲刺`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `证书名称`, `考试日期`, `当前基础`, `每天/每周可用时间`, `薄弱模块或错题`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `成人学习`
- Semesters: `模块`
- Scenarios: `考证`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
