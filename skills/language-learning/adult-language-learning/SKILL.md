---
name: "adult-language-learning"
description: "成人语言学习帮助成人学习者把成人语言学习从零散背单词变成场景输入、主动输出、复现复习和可坚持的口语/听力任务，输出可开口、可纠错、可复现的语言训练任务，而不是替用户一次性完成任务。 Workflow: adult_language_learning.run."
version: "0.9.0"
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
    requires_data: ["当前语言水平", "真实使用场景", "每天可用时间", "想练的能力：口语/听力/词汇/表达", "可选：已有材料或常用句子"]
---

# 成人语言学习 Skill

成人语言学习帮助成人学习者把成人语言学习从零散背单词变成场景输入、主动输出、复现复习和可坚持的口语/听力任务，输出可开口、可纠错、可复现的语言训练任务，而不是替用户一次性完成任务。

## 这个 Skill 解决什么问题 / Problem

成人语言学习帮助成人学习者把成人语言学习从零散背单词变成场景输入、主动输出、复现复习和可坚持的口语/听力任务，输出可开口、可纠错、可复现的语言训练任务，而不是替用户一次性完成任务。

## 最适合 / Best For

- 成人想提升口语、听力或表达但难以坚持
- 需要把学习目标拆成每天短训练
- 希望围绕真实场景练输出
- 独立 Hermes Agent 用户搭建语言学习助手

## 不适合 / Not For

- 替用户完成考试、面试或口语任务
- 编造学习材料来源或虚假水平评估
- 只收藏材料不输出，或目标过大无法坚持

## 使用前请准备 / Inputs

- 当前语言水平
- 真实使用场景
- 每天可用时间
- 想练的能力：口语/听力/词汇/表达
- 可选：已有材料或常用句子

## 推荐工作流 / Recommended Workflow

- 先确认学习者水平、真实使用场景和每天可坚持的训练时间。
- 先确认使用场景和水平，再给短输入、模仿、输出、纠错和复习安排。
- 反馈时先指出一个做得好的地方，再给 2-3 个最值得改的点。
- 最后留下一个小练习，让用户自己完成下一步，而不是替用户完成全部内容。

## 输出格式 / Output Format

- 学习场景
- 今日输入
- 表达模板
- 口语任务
- 纠错反馈
- 复习安排

## 质量检查 / Quality Checks

- 必须包含主动输出任务
- 纠错要具体到表达或发音/用词问题
- 任务量要小到能坚持
- 不要只推荐资料清单

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴文章、题目或初稿。
- 没有评分工具时，输出自查表和修改清单。

## 示例提示 / Example Prompts

- 我想提升商务英语口语，每天 20 分钟，请给我一周可执行训练。
- 请按成人语言学习帮我先诊断，再给修改建议和下一步练习。

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
- Requires Data: `当前语言水平`, `真实使用场景`, `每天可用时间`, `想练的能力：口语/听力/词汇/表达`, `可选：已有材料或常用句子`
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
