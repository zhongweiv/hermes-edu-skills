---
name: "preschool-number-sense-foundation"
description: "学前数感启蒙 Skill把数感启蒙做成孩子愿意参与、家长能照着做、过程可观察的数感游戏任务。重点不是提前小学化，而是在真实生活、绘本、游戏和表达里建立安全感、兴趣和基础能力。 Workflow: preschool_number_sense_foundation.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "数学", "数感启蒙", "数感游戏", "每日启蒙"]
    source: hermes-edu-skills
    workflow: "preschool_number_sense_foundation.run"
    category: "preschool"
    category_aliases: ["学前启蒙", "学龄前", "幼小衔接", "preschool"]
    legacy_slugs: ["preschool-number-sense-daily"]
    install_aliases: ["preschool-number-sense-foundation", "preschool-number-sense-daily"]
    stages: ["preschool"]
    subjects: ["数学"]
    abilities: ["数感启蒙"]
    scenarios: ["数感游戏", "每日启蒙"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "activity.generate_play_task", "parent_guidance.generate", "memory.write"]
    requires_data: ["孩子年龄/阶段", "启蒙主题或入学准备目标", "可用时间", "家长是否陪伴", "可用材料", "孩子最近状态或兴趣点"]
---

# 学前数感启蒙 Skill

学前数感启蒙 Skill把数感启蒙做成孩子愿意参与、家长能照着做、过程可观察的数感游戏任务。重点不是提前小学化，而是在真实生活、绘本、游戏和表达里建立安全感、兴趣和基础能力。

## 这个 Skill 解决什么问题 / Problem

学前数感启蒙 Skill把数感启蒙做成孩子愿意参与、家长能照着做、过程可观察的数感游戏任务。重点不是提前小学化，而是在真实生活、绘本、游戏和表达里建立安全感、兴趣和基础能力。

## 最适合 / Best For

- 3-6 岁家庭启蒙
- 幼小衔接准备
- 家长每天 10 分钟陪伴
- 数感启蒙的低压力启蒙
- 独立 Hermes Agent 用户搭建学前陪伴助手

## 不适合 / Not For

- 提前刷小学题、用速度和分数评价孩子
- 替代专业发育评估、医学诊断或幼儿园正式评价
- 一次安排过长、过难、需要大量教具的任务
- 忽略孩子情绪、兴趣和安全感

## 使用前请准备 / Inputs

- 孩子年龄/阶段
- 想启蒙或准备的目标
- 今晚/今天可用时间
- 家长是否陪伴
- 家里可用材料
- 孩子最近兴趣、状态或老师反馈

## 推荐工作流 / Recommended Workflow

- 先判断孩子阶段、状态和目标，不急着给题。
- 用故事、生活物品、绘本、玩具或动作游戏引入任务。
- 安排 2-4 个短步骤，让孩子看见、说出、动手或选择。
- 给家长具体话术，强调鼓励、等待和观察。
- 用一个轻量观察点判断是否继续、降低难度或下次复现。

## 输出格式 / Output Format

- 今日目标
- 材料准备
- 亲子步骤
- 家长话术
- 观察点
- 下次延伸

## 质量检查 / Quality Checks

- 必须游戏化、短时、低压力
- 必须给家长可直接说的话和可观察信号
- 不得把学前任务小学化、题海化、排名化
- 家庭任务要考虑真实晚间时间和家长精力

## 没有平台工具时 / Standalone Fallback

- 没有年龄信息时按小班-幼小衔接的低压力范围设计，并提醒可补充年龄优化。
- 没有材料时使用纸笔、积木、玩具、餐具、绘本或家里物品。
- 没有历史记录时从兴趣观察和基础参与任务开始。

## 示例提示 / Example Prompts

- 5 岁孩子想做数感启蒙，今晚只有 10 分钟，帮我设计一个亲子小游戏。
- 孩子对数感启蒙有点抗拒，帮我设计一个不刷题的启蒙活动。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 数感游戏
- 每日启蒙

适用角色：
- 学习者
- 家长

## 调用信号 / Invocation Signals

意图：
- `preschool_number_sense_foundation`
- `preschool`
- `数感游戏`
- `每日启蒙`

示例表达：
- 开始学前数感启蒙 Skill
- 帮我做数感游戏
- 根据当前上下文执行学前数感启蒙 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `preschool_number_sense_foundation.run`
- Category: `preschool`
- Legacy Slugs: `preschool-number-sense-daily`
- Install Aliases: `preschool-number-sense-foundation`, `preschool-number-sense-daily`
- Stages: `preschool`
- Subjects: `数学`
- Abilities: `数感启蒙`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `activity.generate_play_task`, `parent_guidance.generate`, `memory.write`
- Requires Data: `孩子年龄/阶段`, `启蒙主题或入学准备目标`, `可用时间`, `家长是否陪伴`, `可用材料`, `孩子最近状态或兴趣点`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `小班`, `中班`, `大班`, `幼小衔接`
- Semesters: `全年`
- Scenarios: `数感游戏`, `每日启蒙`
- Difficulties: `轻松启蒙`, `标准启蒙`, `小挑战`
- Parameterized Dimensions: `ageStage`, `scenario`, `availableTime`, `parentParticipation`, `materials`, `childState`, `difficulty`

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 孩子年龄/阶段
- 启蒙主题或准备目标
- 使用场景
- 可用时间
- 家长参与程度
- 可用材料
- 孩子最近兴趣/状态
- 输出形式

可选增强维度：
- 绘本/图片/孩子作品
- 幼儿园老师反馈
- 最近情绪或睡眠状态
- 家庭可用材料
- 是否临近入学
- 偏好的输出格式

## 参数缺失时的默认策略 / Default Policy When Missing

先识别年龄、目标、场景、时间、家长参与和材料条件；一次性轻量询问，明确用户可以跳过。用户不回答时，不中断任务，按默认启蒙策略继续执行。

默认假设：
- 年龄/阶段未指定：默认使用 小班、中班、大班、幼小衔接 范围，任务保持低压力、短时、游戏化。
- 目标未指定：默认选择认知启蒙 + 表达反馈 + 习惯观察的综合小任务。
- 难度未指定：默认轻量启蒙；默认游戏化 70% + 表达/观察 20% + 小挑战 10%。
- 未指定任务量时默认 2-4 个小游戏或 10 分钟亲子任务
- 未指定时间时默认 10 分钟，最多不超过 15 分钟
- 使用场景未指定：默认“数感游戏”。
- 家长参与程度未指定：默认家长在旁陪伴和引导，不要求孩子独立完成。
- 材料未指定：默认使用家里随手可得的纸笔、积木、绘本、玩具或生活物品。
- 孩子状态未指定：默认普通状态；如果孩子疲惫、抗拒或情绪低落，立即降低任务量并转成陪伴/观察。
- 反馈形式未指定：默认给家长话术、游戏步骤、观察点和下一次延伸，而不是给孩子打分。

兜底规则：
- 该问的维度一个都不少，但最多做一次轻量追问；用户不回答就按默认策略执行。
- 学前任务优先保护兴趣、安全感和参与感，不能因为参数缺失直接失败。
- 不把学前启蒙变成小学提前刷题，不用速度、分数和排名制造焦虑。
- 没有材料时用家庭物品替代；没有教材时按发展目标组织活动；没有历史记录时从低压力观察任务开始。
- 涉及情绪、社交、发育异常或安全风险时，只给家庭观察和沟通建议，提醒必要时咨询专业人士。

- 默认值说明：使用默认值时只用一句话轻量说明，例如“未指定年龄和材料，先按 10 分钟亲子启蒙任务来设计”。不要把回答变成参数表。
- 后续修正：输出末尾给一个可选修正入口，例如“告诉我孩子年龄、喜欢的绘本或最近要准备入学的时间，我可以再生成更贴合的一版”。

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
