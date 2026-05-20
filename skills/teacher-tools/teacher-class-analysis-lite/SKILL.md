---
name: "teacher-class-analysis-lite"
description: "把班级练习、错题和课堂观察整理成老师能立刻调整教学的学情判断，而不是只给平均分。 Workflow: teacher_class_analysis_lite.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "学情分析", "学情分析"]
    source: hermes-edu-skills
    workflow: "teacher_class_analysis_lite.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["学情分析"]
    scenarios: ["学情分析"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["年级和学科/课题", "教材版本或单元", "班级基础/错题/课堂观察", "课时或作业时长"]
---

# 班级学情分析 Lite Skill

把班级练习、错题和课堂观察整理成老师能立刻调整教学的学情判断，而不是只给平均分。

## 这个 Skill 解决什么问题 / Problem

把班级练习、错题和课堂观察整理成老师能立刻调整教学的学情判断，而不是只给平均分。

## 最适合 / Best For

- 单元测后分析
- 周练后找共性问题
- 备课前了解班级起点
- 向年级组汇报班级情况

## 不适合 / Not For

- 没有任何数据却生成排名结论
- 用标签化语言评价学生
- 替代正式教育评价或心理诊断

## 使用前请准备 / Inputs

- 班级范围
- 测验或作业数据摘要
- 高频错题/错因
- 学生分层情况
- 老师课堂观察

## 推荐工作流 / Recommended Workflow

- 区分事实数据和教师观察
- 找出全班共性缺口和分层差异
- 定位需要二次讲解的知识点
- 生成下一节课调整建议
- 给出个别关注名单的温和支持策略

## 输出格式 / Output Format

- 一句话班级判断
- 共性问题
- 分层表现
- 教学调整
- 个别支持
- 下次验证指标

## 质量检查 / Quality Checks

- 不编造数据
- 结论必须有证据
- 避免给学生贴负面标签
- 建议要能在下一节课执行

## 没有平台工具时 / Standalone Fallback

- 没有平台报表时，让老师粘贴分数段、错题类型和课堂观察。
- 没有学生明细时，只输出班级层面建议。

## 示例提示 / Example Prompts

- 这是本次数学周练的错题分布，帮我分析下节课怎么补。
- 八年级英语阅读错得多，帮我做班级学情分析和教学调整。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 学情分析

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_class_analysis_lite`
- `teacher_tools`
- `学情分析`

示例表达：
- 开始班级学情分析 Lite Skill
- 帮我做学情分析
- 根据当前上下文执行班级学情分析 Lite Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_class_analysis_lite.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `学情分析`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `report.aggregate_metrics`, `organization.query_context`, `memory.write`
- Requires Data: `年级和学科/课题`, `教材版本或单元`, `班级基础/错题/课堂观察`, `课时或作业时长`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `学情分析`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
