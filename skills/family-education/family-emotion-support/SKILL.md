---
name: "family-emotion-support"
description: "学习情绪支持在学习受挫、厌学、亲子冲突时，给家长可说出口的安抚话术和下一步学习动作。重点不是替家长管孩子，而是把家庭学习场景拆成可沟通、可执行、可复盘的小步骤。 Workflow: family_emotion_support.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [cli, windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "家庭教育", "陪学建议", "亲子沟通"]
    source: hermes-edu-skills
    workflow: "family_emotion_support.run"
    category: "family-education"
    category_aliases: ["家庭教育", "亲子陪学", "family", "family-education"]
    legacy_slugs: []
    install_aliases: ["family-emotion-support"]
    stages: ["preschool", "primary", "junior"]
    subjects: ["家庭教育"]
    abilities: ["陪学建议"]
    scenarios: ["亲子沟通"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["孩子年龄/年级", "孩子情绪、触发事件、家长已经说过的话、今天是否还适合继续学习", "今晚可用时间", "家长希望改善的一个具体问题", "可选：老师反馈、作业内容、孩子最近表现"]
---

# 学习情绪支持 Skill

学习情绪支持在学习受挫、厌学、亲子冲突时，给家长可说出口的安抚话术和下一步学习动作。重点不是替家长管孩子，而是把家庭学习场景拆成可沟通、可执行、可复盘的小步骤。

## 这个 Skill 解决什么问题 / Problem

学习情绪支持在学习受挫、厌学、亲子冲突时，给家长可说出口的安抚话术和下一步学习动作。重点不是替家长管孩子，而是把家庭学习场景拆成可沟通、可执行、可复盘的小步骤。

## 最适合 / Best For

- 家长不知道今晚怎么陪学
- 作业、阅读、情绪、屏幕时间或家校沟通容易起冲突
- 需要把学习任务变得更温和、更可坚持
- 独立 Hermes Agent 用户搭建家庭教育助手

## 不适合 / Not For

- 替代专业心理咨询、医学诊断或学校正式评估
- 用惩罚、羞辱或威胁驱动学习
- 用 AI 替代专业心理支持，或在孩子明显崩溃时继续加压学习

## 使用前请准备 / Inputs

- 孩子年龄/年级
- 孩子情绪、触发事件、家长已经说过的话、今天是否还适合继续学习
- 今晚可用时间
- 家长希望改善的一个具体问题
- 可选：老师反馈、作业内容、孩子最近表现

## 推荐工作流 / Recommended Workflow

- 先复述家长的真实困扰，判断这是任务问题、能力问题、情绪问题还是沟通问题。
- 先稳定情绪，再区分能力问题和情绪问题，最后只给一个小到能完成的学习动作。
- 给家长可直接说出口的话术，避免命令式和贴标签表达。
- 把任务控制在一个晚上能完成的范围内，并留下第二天复盘点。

## 输出格式 / Output Format

- 情绪判断
- 家长话术
- 降温步骤
- 低压力任务
- 需要暂停或求助的信号

## 质量检查 / Quality Checks

- 语气要支持家长，但不把孩子问题简单归因为懒或不听话
- 每次只解决一个家庭场景
- 建议必须能在家里执行
- 涉及明显心理/安全风险时提醒寻求专业帮助

## 没有平台工具时 / Standalone Fallback

- 没有家庭数据时，让家长描述一个最近发生的具体场景。
- 没有学习记录时，用“今天任务、孩子反应、家长目标”生成陪伴脚本。

## 示例提示 / Example Prompts

- 孩子因为数学错题哭了，我该怎么说，今天还要不要继续做题？
- 请按学习情绪支持给我今晚能直接照着做的步骤和话术。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 亲子沟通

适用角色：
- 家长

## 调用信号 / Invocation Signals

意图：
- `family_emotion_support`
- `family_education`
- `亲子沟通`

示例表达：
- 开始学习情绪支持 Skill
- 帮我做亲子沟通
- 根据当前上下文执行学习情绪支持 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `family_emotion_support.run`
- Category: `family-education`

- Install Aliases: `family-emotion-support`
- Stages: `preschool`, `primary`, `junior`
- Subjects: `家庭教育`
- Abilities: `陪学建议`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `孩子年龄/年级`, `孩子情绪、触发事件、家长已经说过的话、今天是否还适合继续学习`, `今晚可用时间`, `家长希望改善的一个具体问题`, `可选：老师反馈、作业内容、孩子最近表现`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `小班`, `中班`, `大班`, `幼小衔接`, `一年级`, `二年级`, `三年级`, `四年级`, `五年级`, `六年级`, `七年级`, `八年级`, `九年级`
- Semesters: `全年`, `上册`, `下册`, `上册`, `下册`
- Scenarios: `亲子沟通`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 孩子年龄/年级
- 家庭学习场景
- 今晚可用时间
- 家长希望改善的问题
- 孩子最近表现
- 家长可参与程度
- 输出形式

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
- 年级/水平未指定：默认使用 小班、中班、大班、幼小衔接、一年级、二年级、三年级、四年级、五年级、六年级、七年级、八年级、九年级 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 全年、上册、下册、上册、下册 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度。
- 未指定题量时默认生成一个短任务
- 未指定时间时默认今晚 15 分钟可执行动作
- 使用场景未指定：默认“亲子沟通”。
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
