---
name: "agent-preview-assistant"
description: "把预习从“提前看一遍”变成带问题进入课堂：先扫知识、再标疑问、最后准备课堂关注点。 Workflow: agent_preview_assistant.run."
version: "0.6.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "预习", "课前预习"]
    source: hermes-edu-skills
    workflow: "agent_preview_assistant.run"
    category: "learning-core"
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
- `learning_core`
- `课前预习`

示例表达：
- 开始课前预习 Skill
- 帮我做课前预习
- 根据当前上下文执行课前预习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_preview_assistant.run`
- Category: `learning-core`
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

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
