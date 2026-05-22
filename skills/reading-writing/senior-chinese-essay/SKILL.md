---
name: "senior-chinese-essay"
description: "高中作文提升帮助学生把作文辅导从“代写一篇”变成审题、立意、选材、结构、语言和修改的全过程指导，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。 Workflow: senior_chinese_essay.run."
version: "0.17.0"
author: zhongwei
license: MIT
platforms: [cli, windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "senior", "语文", "写作", "写作提升"]
    source: hermes-edu-skills
    workflow: "senior_chinese_essay.run"
    category: "reading-writing"
    category_aliases: ["阅读写作", "读写表达", "reading", "writing", "reading-writing"]
    legacy_slugs: []
    install_aliases: ["senior-chinese-essay"]
    stages: ["senior"]
    subjects: ["语文"]
    abilities: ["写作"]
    scenarios: ["写作提升"]
    quality_tier: "curated"
    standalone_support: "needs_user_input"
    public_release: "recommended"
    export_mode: "installable"
    release_channel: "recommended"
    requires_tools: ["context.load", "entitlement.check", "workflow.create", "memory.write"]
    requires_data: ["年级/水平", "文本、题目或写作要求", "学生原答案/初稿", "想训练的目标", "可选：评分标准、字数要求、老师批注"]
---

# 高中作文提升 Skill

高中作文提升帮助学生把作文辅导从“代写一篇”变成审题、立意、选材、结构、语言和修改的全过程指导，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。

## 这个 Skill 解决什么问题 / Problem

高中作文提升帮助学生把作文辅导从“代写一篇”变成审题、立意、选材、结构、语言和修改的全过程指导，输出可修改、可复盘、可继续练的阅读/写作任务，而不是替用户一次性完成任务。

## 最适合 / Best For

- 作文或写作不知道怎么改
- 审题、选材、结构或语言表达薄弱
- 需要老师/家长给出可执行反馈
- 独立 Hermes Agent 用户搭建写作教练

## 不适合 / Not For

- 替学生完整代写作文、论文或作业
- 编造引用、数据、阅读原文或标准答案
- 替学生完整代写作文，导致孩子不会自己构思和修改

## 使用前请准备 / Inputs

- 年级/水平
- 文本、题目或写作要求
- 学生原答案/初稿
- 想训练的目标
- 可选：评分标准、字数要求、老师批注

## 推荐工作流 / Recommended Workflow

- 先确认任务类型、年级水平和用户希望提升的点。
- 先帮助学生审题和选材，再搭结构、写片段、给修改建议，保留学生自己的表达。
- 反馈时先指出一个做得好的地方，再给 2-3 个最值得改的点。
- 最后留下一个小练习，让用户自己完成下一步，而不是替用户完成全部内容。

## 输出格式 / Output Format

- 审题方向
- 选材建议
- 结构提纲
- 精彩片段示范
- 修改清单
- 下一次练习

## 质量检查 / Quality Checks

- 保留学习者自己的表达
- 修改建议必须具体到句子/段落/依据
- 不能编造原文或引用
- 每次只给少量可执行改进点

## 没有平台工具时 / Standalone Fallback

- 没有文本库时，让用户粘贴文章、题目或初稿。
- 没有评分工具时，输出自查表和修改清单。

## 示例提示 / Example Prompts

- 孩子写作文流水账，请帮他围绕这道题做审题、选材和提纲。
- 请按高中作文提升帮我先诊断，再给修改建议和下一步练习。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 写作提升

适用角色：
- 学习者
- 老师

## 调用信号 / Invocation Signals

意图：
- `senior_chinese_essay`
- `reading_writing`
- `写作提升`

示例表达：
- 开始高中作文提升 Skill
- 帮我做写作提升
- 根据当前上下文执行高中作文提升 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `senior_chinese_essay.run`
- Category: `reading-writing`

- Install Aliases: `senior-chinese-essay`
- Stages: `senior`
- Subjects: `语文`
- Abilities: `写作`
- Quality Tier: `curated`
- Standalone Support: `needs_user_input`
- Public Release: `recommended`
- Requires Tools: `context.load`, `entitlement.check`, `workflow.create`, `memory.write`
- Requires Data: `年级/水平`, `文本、题目或写作要求`, `学生原答案/初稿`, `想训练的目标`, `可选：评分标准、字数要求、老师批注`
- Export Mode: `installable`
- Release Channel: `recommended`

成熟度备注：
- 已按精品 Skill 标准补充边界、输入、工作流、输出格式和示例。

## 参数化使用 / Parameters

这个 Skill 不再把年级、册别、单元、知识点和难度拆成大量独立 Skill。请在调用时通过参数或自然语言补充这些信息。

- Grades: `高一`, `高二`, `高三`
- Semesters: `必修一`, `必修二`, `选择性必修`
- Scenarios: `写作提升`
- Difficulties: `基础`, `标准`, `提高`
- Parameterized Dimensions: `grade`, `semester`, `unit`, `lesson`, `knowledgePointCodes`, `scenario`, `difficulty`

## 需要识别的维度 / Required Dimensions

这个 Skill 会尽量识别完整上下文。该问的维度一个都不少，但会一次性轻量询问，用户不回答时继续执行默认策略。

核心维度：
- 年级/水平
- 文本/题目/写作要求
- 学生原答案或初稿
- 训练目标
- 评分标准或老师批注
- 输出深度
- 是否需要范例

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
- 年级/水平未指定：默认使用 高一、高二、高三 范围；若任务需要精准教材进度，再提醒用户可补充年级。
- 册别/学期未指定：默认覆盖 必修一、必修二、选择性必修 范围；精准单元同步时优先请求用户补充目录或课题。
- 教材版本未指定：若 Skill 已绑定教材版本则使用绑定版本；通用 Skill 默认不绑定教材，按通用课程目标处理。
- 单元/知识点未指定：默认选择该 Skill 场景下的高频基础知识点或通用核心能力，不假装知道用户学校进度。
- 难度未指定：默认标准难度。
- 未指定篇幅时默认短文本/一段式训练
- 未指定时间时默认短任务
- 使用场景未指定：默认“写作提升”。
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
