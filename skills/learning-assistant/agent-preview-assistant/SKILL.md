---
name: "agent-preview-assistant"
description: "把预习从“提前看一遍”变成带问题进入课堂：先扫知识、再标疑问、最后准备课堂关注点。 Workflow: agent_preview_assistant.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "预习", "课前预习"]
    source: hermes-edu-skills
    workflow: "agent_preview_assistant.run"
    category: "learning-assistant"
    category_aliases: ["学习助手", "学习方法", "学习核心", "learning", "learning-core", "learning-assistant"]
    legacy_slugs: []
    install_aliases: ["agent-preview-assistant"]
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["预习"]
    scenarios: ["课前预习"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "plan.generate", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 课前预习 Skill

把预习从“提前看一遍”变成带问题进入课堂：先扫知识、再标疑问、最后准备课堂关注点。

## 这个 Skill 解决什么问题 / Problem

把预习从“提前看一遍”变成带问题进入课堂：先扫知识、再标疑问、最后准备课堂关注点。

## 最适合 / Best For

- 课前预习
- 新单元开始前
- 学生上课容易跟不上
- 家长陪孩子预习

## 不适合 / Not For

- 替代课堂学习
- 直接讲完整课程导致学生课堂失去探索

## 使用前请准备 / Inputs

- 年级/学科
- 教材版本或单元标题
- 预习材料/目录
- 学生已知基础
- 课堂前可用时间

## 推荐工作流 / Recommended Workflow

- 快速定位本课目标
- 激活旧知识
- 给 3-5 个预习问题
- 标出可能难点
- 生成课堂听课清单

## 输出格式 / Output Format

- 本课要点
- 旧知识回顾
- 预习问题
- 疑问清单
- 课堂关注点

## 质量检查 / Quality Checks

- 不提前灌满答案
- 问题要能引发课堂注意
- 必须区分已会和待学
- 控制在可完成时间内

## 没有平台工具时 / Standalone Fallback

- 没有教材库时，让用户输入目录或拍课本目录。
- 没有学习记录时，用年级常见基础作为起点。

## 示例提示 / Example Prompts

- 明天学三角形面积，帮我做 15 分钟预习。
- 这篇课文课前怎么预习，帮我列问题。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 课前预习

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_preview_assistant`
- `learning_assistant`
- `课前预习`

示例表达：
- 开始课前预习 Skill
- 帮我做课前预习
- 根据当前上下文执行课前预习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_preview_assistant.run`
- Category: `learning-assistant`

- Install Aliases: `agent-preview-assistant`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `预习`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `plan.generate`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `课前预习`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 用户角色
- 年级/水平
- 学习目标或任务目标
- 使用场景
- 难度
- 题量或可用时间
- 是否需要答案/解析/反馈

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
- 难度未指定：默认标准难度。
- 未指定题量时默认生成一个短任务
- 未指定时间时默认短任务
- 使用场景未指定：默认“课前预习”。
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
