---
name: "adult-language-learning"
description: "把成人语言学习从收藏资料变成真实场景输入、主动输出、纠错和复现。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。 Workflow: adult_language_learning.run."
version: "0.10.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "adult", "语言学习", "口语", "听力", "词汇", "每日打卡"]
    source: hermes-edu-skills
    workflow: "adult_language_learning.run"
    category: "language-learning"
    stages: ["adult"]
    subjects: ["语言学习"]
    abilities: ["口语", "听力", "词汇"]
    scenarios: ["每日打卡"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["当前水平", "真实使用场景", "每天可用时间", "想练的能力", "可选：常用句子或真实材料"]
---

# 成人语言学习 Skill

把成人语言学习从收藏资料变成真实场景输入、主动输出、纠错和复现。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 这个 Skill 解决什么问题 / Problem

把成人语言学习从收藏资料变成真实场景输入、主动输出、纠错和复现。核心不是再推荐一堆资料，而是让用户今天能完成一个可检查的小成果。

## 最适合 / Best For

- 成人英语/第二语言长期提升
- 商务、旅行、面试或日常交流场景
- 想每天 15-30 分钟坚持输出
- 需要反馈而不是资料清单

## 不适合 / Not For

- 替用户完成考试、面试或口语任务
- 虚假水平评估或伪造语言证书
- 只收藏材料不输出

## 使用前请准备 / Inputs

- 当前水平
- 真实使用场景
- 每天可用时间
- 想练的能力
- 可选：常用句子或真实材料

## 推荐工作流 / Recommended Workflow

- 先确认场景和水平。
- 给一段短输入和可模仿表达。
- 要求用户主动说/写。
- 纠错后安排复现和下一次场景。

## 输出格式 / Output Format

- 学习场景
- 今日输入
- 表达模板
- 输出任务
- 纠错反馈
- 复现计划

## 质量检查 / Quality Checks

- 必须有主动输出
- 反馈要具体
- 任务小到能坚持
- 不能只推荐资料

## 没有平台工具时 / Standalone Fallback

- 没有语音工具时用文字模拟对话。
- 没有材料时生成生活/工作场景输入。

## 示例提示 / Example Prompts

- 我想练商务英语口语，每天 20 分钟，请给我一周训练。
- 帮我把这段自我介绍改得更自然，并给练习方法。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 每日打卡

适用角色：
- 学习者

## 调用信号 / Invocation Signals

意图：
- `adult_language_learning`
- `language_learning`
- `每日打卡`

示例表达：
- 开始成人语言学习 Skill
- 帮我做每日打卡
- 根据当前上下文执行成人语言学习 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `adult_language_learning.run`
- Category: `language-learning`
- Stages: `adult`
- Subjects: `语言学习`
- Abilities: `口语`, `听力`, `词汇`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `当前水平`, `真实使用场景`, `每天可用时间`, `想练的能力`, `可选：常用句子或真实材料`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `大学`, `考研`
- Semesters: `模块`
- Scenarios: `每日打卡`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
