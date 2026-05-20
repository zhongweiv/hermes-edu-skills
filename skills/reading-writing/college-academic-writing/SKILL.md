---
name: "college-academic-writing"
description: "学术写作帮助成人学习者把学术写作从零散资料堆砌变成问题、论点、证据、结构和引用意识清晰的写作过程，输出结构更清楚、证据更扎实、符合学术诚信的写作修改方案，而不是替用户一次性完成任务。 Workflow: college_academic_writing.run."
version: "0.9.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "college", "通识", "写作", "论文训练"]
    source: hermes-edu-skills
    workflow: "college_academic_writing.run"
    category: "reading-writing"
    stages: ["college"]
    subjects: ["通识"]
    abilities: ["写作"]
    scenarios: ["论文训练"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["论文/作业主题", "研究问题或写作要求", "初稿或提纲", "引用/资料现状", "可选：评分标准、导师反馈"]
---

# 学术写作 Skill

学术写作帮助成人学习者把学术写作从零散资料堆砌变成问题、论点、证据、结构和引用意识清晰的写作过程，输出结构更清楚、证据更扎实、符合学术诚信的写作修改方案，而不是替用户一次性完成任务。

## 这个 Skill 解决什么问题 / Problem

学术写作帮助成人学习者把学术写作从零散资料堆砌变成问题、论点、证据、结构和引用意识清晰的写作过程，输出结构更清楚、证据更扎实、符合学术诚信的写作修改方案，而不是替用户一次性完成任务。

## 最适合 / Best For

- 课程论文或研究写作结构松散
- 论点、证据和引用意识需要梳理
- 需要修改清单而不是代写
- 独立 Hermes Agent 用户搭建学术写作助手

## 不适合 / Not For

- 代写论文、编造引用、伪造数据或规避学术诚信要求
- 替代学校/导师的正式评价
- 代写论文、编造引用或替代学术诚信要求

## 使用前请准备 / Inputs

- 论文/作业主题
- 研究问题或写作要求
- 初稿或提纲
- 引用/资料现状
- 可选：评分标准、导师反馈

## 推荐工作流 / Recommended Workflow

- 先确认写作要求、研究问题、初稿状态和学术诚信边界。
- 先明确研究问题和读者，再整理论点结构、证据位置和修改清单。
- 反馈时先指出一个做得好的地方，再给 2-3 个最值得改的点。
- 最后留下一个小练习，让用户自己完成下一步，而不是替用户完成全部内容。

## 输出格式 / Output Format

- 写作目标
- 论文结构
- 论点链条
- 证据缺口
- 修改建议
- 下一步资料任务

## 质量检查 / Quality Checks

- 必须保留作者观点和写作责任
- 不能编造引用或数据
- 建议要具体到结构/论点/证据
- 指出资料缺口而不是替用户虚构

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴文章、题目或初稿。
- 没有评分工具时，输出自查表和修改清单。

## 示例提示 / Example Prompts

- 我有一篇课程论文初稿，请帮我检查结构、论点和证据不足。
- 请按学术写作帮我先诊断，再给修改建议和下一步练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 论文训练

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `college_academic_writing`
- `reading_writing`
- `论文训练`

示例表达：
- 开始学术写作 Skill
- 帮我做论文训练
- 根据当前上下文执行学术写作 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `college_academic_writing.run`
- Category: `reading-writing`
- Stages: `college`
- Subjects: `通识`
- Abilities: `写作`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `论文/作业主题`, `研究问题或写作要求`, `初稿或提纲`, `引用/资料现状`, `可选：评分标准、导师反馈`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`
- Scenarios: `论文训练`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
