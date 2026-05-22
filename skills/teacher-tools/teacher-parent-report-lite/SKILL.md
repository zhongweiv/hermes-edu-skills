---
name: "teacher-parent-report-lite"
description: "帮助老师把学习表现转成家长听得懂、愿意配合、不过度焦虑的反馈报告。 Workflow: teacher_parent_report_lite.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "教学管理", "报告生成", "家长沟通"]
    source: hermes-edu-skills
    workflow: "teacher_parent_report_lite.run"
    category: "teacher-tools"
    category_aliases: ["教师与机构", "老师工具", "教师工具", "teacher-tools", "teaching"]
    legacy_slugs: []
    install_aliases: ["teacher-parent-report-lite"]
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
- `teacher_institution`
- `家长沟通`

示例表达：
- 开始家长反馈报告 Lite Skill
- 帮我做家长沟通
- 根据当前上下文执行家长反馈报告 Lite Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `teacher_parent_report_lite.run`
- Category: `teacher-tools`

- Install Aliases: `teacher-parent-report-lite`
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

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 年级和学科
- 教材版本/单元/课题
- 班级基础
- 课时或作业时长
- 教学/作业目标
- 分层比例
- 常见错因
- 输出格式

可选增强维度：
- 教材目录/课本照片文字
- 学生原答案
- 老师批注
- 最近错题
- 薄弱点
- 地区/考试要求
- 偏好的输出格式

## 参数缺失时的默认策略 / Default Policy When Missing

先识别全部应问维度；一次性轻量询问，明确用户可以跳过。用户不回答时，不中断任务，按默认策略继续执行。

默认假设：
- 年级/水平未指定：默认使用 一年级、二年级、三年级、四年级、五年级、六年级、七年级、八年级、九年级、高一、高二、高三 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 上册、下册、上册、下册、必修一、必修二、选择性必修 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认按班级普通水平；默认基础 60% + 提高 30% + 挑战 10%。
- 未指定题量时默认生成一个短任务
- 未指定时间时默认短任务
- 使用场景未指定：默认“家长沟通”。
- 用户角色未指定：默认面向学生直接使用；出现“孩子/家长/陪练”切换到家长视角，出现“班级/布置/教案/课堂”切换到教师视角。
- 学情/错题未指定：默认普通水平起步，并在输出中加入做完后如何判断下一步的反馈机制。
- 答案解析未指定：练习题默认提供答案；小学低年级给短解析，初高中理科给步骤解析，文科阅读/作文给参考要点或评分标准。

兜底规则：
- 该问的维度一个都不少，但最多做一次轻量追问；用户不回答就按默认策略执行。
- 能继续完成的任务先完成，不能因为参数缺失直接失败。
- 只有精准教材同步、考试目标、作文文体、教师课时等会显著改变结果的维度，才优先追问一个最关键问题。
- 没有教材库时让用户提供目录、课题、题目或照片文字；没有题库时生成原创题；没有学情时按普通水平起步。
- 不得复刻教材原文、教辅原题，不承诺押题命中，不代写规避学习的完整作业或考试答案。

- 默认值说明：使用默认值时只用一句话轻量说明，例如“未指定年级和难度，先按支持年级范围内的标准难度生成”。不要把回答变成参数表。
- 后续修正：输出末尾给一个可选修正入口，例如“告诉我年级、册别或最近学到的单元后，我可以再生成更贴合的一版”。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
