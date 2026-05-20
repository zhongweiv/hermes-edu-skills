---
name: "teacher-parent-report-lite"
description: "帮助老师把学习表现转成家长听得懂、愿意配合、不过度焦虑的反馈报告。 Workflow: teacher_parent_report_lite.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "报告生成", "家长沟通"]
    source: hermes-edu-skills
    workflow: "teacher_parent_report_lite.run"
    category: "teacher-tools"
    stages: ["primary", "junior", "senior"]
    subjects: ["教学管理"]
    abilities: ["报告生成"]
    scenarios: ["家长沟通"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "report.aggregate_metrics", "organization.query_context", "memory.write"]
    requires_data: ["年级和学科/课题", "教材版本或单元", "班级基础/错题/课堂观察", "课时或作业时长"]
---

# 家长反馈报告 Lite Skill

帮助老师把学习表现转成家长听得懂、愿意配合、不过度焦虑的反馈报告。

## 这个 Skill 解决什么问题 / Problem

帮助老师把学习表现转成家长听得懂、愿意配合、不过度焦虑的反馈报告。

## 最适合 / Best For

- 阶段性家长反馈
- 家校沟通前准备
- 课后服务反馈
- 学生进步和问题并存的情况

## 不适合 / Not For

- 用排名刺激家长
- 替老师承诺无法保证的提分结果
- 暴露其他学生隐私

## 使用前请准备 / Inputs

- 学生近期表现
- 作业/测验数据
- 课堂观察
- 需要家长配合的事项
- 沟通语气偏好

## 推荐工作流 / Recommended Workflow

- 先写事实和进步
- 再说明一个最关键问题
- 给家长可执行的家庭配合动作
- 提供老师下一步支持
- 生成温和但明确的沟通话术

## 输出格式 / Output Format

- 学生近况
- 进步亮点
- 主要问题
- 家庭配合建议
- 老师后续安排
- 可直接发送话术

## 质量检查 / Quality Checks

- 不夸大焦虑
- 不比较其他学生
- 建议必须具体可做
- 语气尊重家长和学生

## 没有平台工具时 / Standalone Fallback

- 没有学生数据时，让老师输入 3 条事实观察。
- 没有沟通模板时，输出短信/微信/面谈三种版本。

## 示例提示 / Example Prompts

- 根据这些课堂表现，帮我写一段给家长的反馈，语气温和但要明确。
- 孩子最近作业退步了，帮我准备一次家校沟通话术。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 家长沟通

适用角色：
- 老师

## 调用信号 / Invocation Signals

意图：
- `teacher_parent_report_lite`
- `teacher_tools`
- `家长沟通`

示例表达：
- 开始家长反馈报告 Lite Skill
- 帮我做家长沟通
- 根据当前上下文执行家长反馈报告 Lite Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_parent_report_lite.run`
- Category: `teacher-tools`
- Stages: `primary`, `junior`, `senior`
- Subjects: `教学管理`
- Abilities: `报告生成`
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
- Scenarios: `家长沟通`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
