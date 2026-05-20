---
name: "agent-weakness-boost"
description: "把“薄弱项”从模糊标签变成一个可诊断、可练习、可复测的小专题提升闭环。 Workflow: agent_weakness_boost.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "primary", "junior", "senior", "学习能力", "查漏补缺", "专项训练"]
    source: hermes-edu-skills
    workflow: "agent_weakness_boost.run"
    category: "learning-core"
    stages: ["primary", "junior", "senior"]
    subjects: ["学习能力"]
    abilities: ["查漏补缺"]
    scenarios: ["专项训练"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["学习目标", "年级或水平", "用户输入的题目/记录/上下文"]
---

# 薄弱项提升 Skill

把“薄弱项”从模糊标签变成一个可诊断、可练习、可复测的小专题提升闭环。

## 这个 Skill 解决什么问题 / Problem

把“薄弱项”从模糊标签变成一个可诊断、可练习、可复测的小专题提升闭环。

## 最适合 / Best For

- 某个知识点反复错
- 考试后查漏补缺
- 老师或家长想安排专项训练

## 不适合 / Not For

- 没有样本就断言薄弱点
- 一次性补完整本书

## 使用前请准备 / Inputs

- 薄弱知识点或错题样本
- 年级/学科
- 目标分数或掌握标准
- 可用时间
- 最近错误表现

## 推荐工作流 / Recommended Workflow

- 用 3-5 个问题定位真实缺口
- 区分概念/方法/审题/计算问题
- 安排讲解和练习梯度
- 复测并决定是否升级难度

## 输出格式 / Output Format

- 薄弱点诊断
- 根因假设
- 补强路线
- 练习梯度
- 复测标准

## 质量检查 / Quality Checks

- 诊断必须基于证据
- 练习先少而准
- 复测标准要明确
- 不能只生成题目不讲原因

## 没有平台工具时 / Standalone Fallback

- 没有测评工具时，用用户提供的错题做诊断。
- 没有题库时，生成原创小测并附答案。

## 示例提示 / Example Prompts

- 孩子分数应用题总错，帮我找薄弱原因并安排 3 天提升。
- 函数图像这块总不会，先诊断再练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 专项训练

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_weakness_boost`
- `learning_core`
- `专项训练`

示例表达：
- 开始薄弱项提升 Skill
- 帮我做专项训练
- 根据当前上下文执行薄弱项提升 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_weakness_boost.run`
- Category: `learning-core`
- Stages: `primary`, `junior`, `senior`
- Subjects: `学习能力`
- Abilities: `查漏补缺`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `学习目标`, `年级或水平`, `用户输入的题目/记录/上下文`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`, `高一`, `高二`, `高三`
- Semesters: `上册`, `下册`, `上册`, `下册`, `必修一`, `必修二`, `选择性必修`
- Scenarios: `专项训练`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
