# Hermes Edu Skills

面向 Hermes Agent Runtime 的开源教育 Skill Pack。

[English version](README.en.md)

Hermes Edu Skills 是一套可直接被 Hermes Agent 识别的教育技能库，当前包含 135 个 Hermes 兼容 Skill，覆盖学生学习、教师教学、家庭教育、学校管理、机构运营、职业教育和 Agent 系统工作流等场景。

如果你已经在本地安装了 Hermes Agent，可以把本仓库的 `skills/` 目录加入 Hermes 配置，让 Agent 直接加载这些教育技能。

如果这个项目对你有帮助，欢迎点一个 Star。Star 会帮助更多正在做教育 Agent、AI 学习助手和教师工具的开发者更快找到它。

## 为什么值得 Star

- 这是一个中国教育场景优先的 Hermes Skill Pack，不只是英文样例集合。
- 覆盖学生、老师、家长、学校和教培机构的真实教育工作流。
- 所有 Skill 都可以直接点击查看，方便学习、改造和接入自己的 Hermes Agent。
- 目录、索引、校验脚本和发布清单都已准备好，适合直接 fork 后二次开发。
- 后续会继续补充教材版本、年级、单元和更细粒度的 Atomic Skill。

## 发起与维护

本项目由 [长沙欣慰科技](https://www.shineway.tech/) 发起并维护。

欣慰科技专注于 AI 智能教育解决方案，长期建设面向课后服务、错题整理、AI 学习助手和教培机构管理的产品能力。我们把部分教育 Agent Skill 设计开源出来，希望和开发者、老师、教研人员、学校及教育机构一起探索更可复用的教育智能体能力。

开源仓库坚持两点：

- Skill 本身保持开放、可读、可 fork、可独立用于 Hermes Agent。
- 商业系统、用户数据、内部账号、私有服务和生产密钥不会进入公开仓库。

## 项目亮点

- 135 个可点击浏览的 `SKILL.md`。
- 21 个分类，覆盖 K12、大学、成人学习、教师和机构场景。
- 每个 Skill 都包含 Hermes frontmatter、适用场景、调用信号和工作流名称。
- 自带 `catalog.json` 和 `.well-known/skills/index.json`，方便工具读取和二次集成。
- 自带校验脚本，确保目录、索引和 Skill 文件一致。
- MIT 协议，适合个人学习、二次开发和教育 Agent 原型建设。

## 适合谁使用

- 正在使用 Hermes Agent Runtime 的个人用户。
- 想做教育 Agent、AI 学习助手、AI 老师、AI 助教的开发者。
- 想研究 Skill / Agent 工作流设计的产品经理、老师和教研人员。
- 想快速搭建 K12、成人学习、教师工具、家庭教育场景 Demo 的团队。
- 正在寻找中国教育 AI 开源项目的学校、机构和创业团队。

## 如何支持这个项目

- 点 Star：帮助更多人发现这个教育 Skill Pack。
- Watch：关注后续新增 Skill、安装方式和 Hermes 适配更新。
- Fork：把 `skills/` 接入你自己的 Hermes Agent 或教育 Agent 项目。
- 提 Issue：告诉我们你最需要的年级、教材版本、学科或教师工具。
- 提 PR：贡献新的 Skill、优化中文指令、补充使用示例。

## 推荐 GitHub Topics

建议给仓库添加这些 GitHub topics。中文词更适合放在 README 搜索关键词里，topics 建议使用英文小写和连字符，便于 GitHub 聚合：

```text
hermes-agent
agent
ai-agent
skills
skill-pack
education
learning
teaching
teacher-tools
ai-education
k12
edtech
china-education
open-source
shineway
```

## 搜索关键词

如果你是通过搜索找到这里，可以关注这些关键词：

```text
Hermes Agent 教育 Skill
Hermes Agent Runtime skills
教育 Agent
教育智能体
AI 学习助手
AI 老师
AI 助教
K12 AI 教育
教师 AI 工具
家庭教育 AI
开源 Skill Pack
```

## 当前状态

```text
135 个 Hermes 兼容 Skill
21 个分类
MIT 开源协议
可通过 Hermes skills.external_dirs 加载
暂未接入公共 Skill Registry 的一键安装
```

## 快速开始

克隆仓库：

```bash
git clone https://github.com/zhongweiv/hermes-edu-skills.git
cd hermes-edu-skills
npm run validate
```

把 `skills/` 目录加入 Hermes 的 `config.yaml`：

```yaml
skills:
  external_dirs:
    - /absolute/path/to/hermes-edu-skills/skills
```

然后在 Hermes 中验证：

```bash
hermes skills list
```

也可以用 Hermes 内部 Skill 工具验证：

```python
from tools.skills_tool import skills_list, skill_view

skills_list()
skill_view("primary-math-mental-arithmetic")
```

## 技能分类总览

| 分类 | 主要领域 | 数量 |
| --- | --- | ---: |
| [数学 Math](#math) | 数学 | 30 |
| [语文 Chinese](#chinese) | 语文 | 26 |
| [英语 English](#english) | 英语 | 23 |
| [学习能力 Learning](#learning) | 学习能力 | 5 |
| [综合场景 General](#general) | 综合 | 5 |
| [教师教学 Teaching](#teaching) | 教学管理 | 5 |
| [学校管理 School](#school) | 学校管理 | 3 |
| [机构运营 Institution](#institution) | 机构运营 | 5 |
| [家庭教育 Family](#family) | 家庭教育 | 1 |
| [系统 Agent System](#system) | 内容安全、学习能力、成本管理 | 6 |
| [原子技能 Atomic Skills](#atomic) | 数学 | 3 |
| [物理 Physics](#physics) | 物理 | 2 |
| [化学 Chemistry](#chemistry) | 化学 | 2 |
| [生物 Biology](#biology) | 生物 | 2 |
| [历史 History](#history) | 历史 | 2 |
| [地理 Geography](#geography) | 地理 | 2 |
| [政治 Politics](#politics) | 政治 | 2 |
| [计算机 Computer Science](#computer-science) | 计算机 | 5 |
| [通识教育 General Education](#general-education) | 通识 | 1 |
| [职业教育 Career](#career) | 职业教育 | 4 |
| [语言学习 Language](#language) | 语言学习 | 1 |

## 全部 Skill 列表

下面的表格列出了当前全部 135 个 Skill。点击 Skill 名称可以直接进入对应的 `SKILL.md`。

### <a id="math"></a>数学 Math

覆盖学前、小学、初中、高中、大学数学，包括口算、数感、几何、函数、概率统计、微积分等。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [奥数拓展 Skill](skills/math/primary-math-olympiad/SKILL.md) | primary | 数学 | 逻辑、应用题 | 寒暑假提升、拔高训练 |
| [乘法口诀 Skill](skills/math/primary-math-multiplication-table/SKILL.md) | primary | 数学 | 计算、知识记忆 | 每日打卡、听写默写 |
| [初中代数 Skill](skills/math/junior-math-algebra/SKILL.md) | junior | 数学 | 计算、逻辑 | 同步巩固、专项训练 |
| [初中函数 Skill](skills/math/junior-math-function/SKILL.md) | junior | 数学 | 函数、逻辑 | 专项训练、中考复习 |
| [初中几何 Skill](skills/math/junior-math-geometry/SKILL.md) | junior | 数学 | 空间想象、证明 | 同步巩固、中考复习 |
| [初中统计概率 Skill](skills/math/junior-math-statistics-probability/SKILL.md) | junior | 数学 | 统计、概率 | 同步巩固、中考复习 |
| [单位换算 Skill](skills/math/primary-math-unit-conversion/SKILL.md) | primary | 数学 | 计算 | 课后作业、专项训练 |
| [导数 Skill](skills/math/senior-math-derivative/SKILL.md) | senior | 数学 | 逻辑、计算 | 专项训练、高考复习 |
| [方程启蒙 Skill](skills/math/primary-math-equation-intro/SKILL.md) | primary | 数学 | 逻辑、建模 | 同步巩固、专项训练 |
| [分数小数 Skill](skills/math/primary-math-fraction-decimal/SKILL.md) | primary | 数学 | 计算、数感 | 同步巩固、单元复习 |
| [概率论 Skill](skills/math/college-math-probability/SKILL.md) | college | 数学 | 统计、概率 | 同步巩固、考试复习 |
| [概率统计 Skill](skills/math/senior-math-probability-statistics/SKILL.md) | senior | 数学 | 统计、概率 | 专项训练、高考复习 |
| [高等数学 Skill](skills/math/college-math-calculus/SKILL.md) | college | 数学 | 计算、逻辑 | 同步巩固、考试复习 |
| [高中函数 Skill](skills/math/senior-math-function/SKILL.md) | senior | 数学 | 函数 | 同步巩固、高考复习 |
| [几何初步 Skill](skills/math/primary-math-geometry-basic/SKILL.md) | primary | 数学 | 空间想象 | 同步巩固、专项训练 |
| [计算能力 Skill](skills/math/primary-math-calculation/SKILL.md) | primary | 数学 | 计算 | 课后作业、专项训练 |
| [解析几何 Skill](skills/math/senior-math-analytic-geometry/SKILL.md) | senior | 数学 | 计算、建模 | 专项训练、高考复习 |
| [立体几何 Skill](skills/math/senior-math-solid-geometry/SKILL.md) | senior | 数学 | 空间想象 | 专项训练、高考复习 |
| [逻辑思维 Skill](skills/math/preschool-logic-thinking/SKILL.md) | preschool | 数学 | 逻辑、规律 | 专项训练、亲子共学 |
| [时间与人民币 Skill](skills/math/primary-math-time-money/SKILL.md) | primary | 数学 | 生活数学 | 同步巩固、生活应用 |
| [数感 Skill](skills/math/primary-math-number-sense/SKILL.md) | primary | 数学 | 数感 | 每日打卡、同步巩固 |
| [数感启蒙 Skill](skills/math/preschool-number-sense/SKILL.md) | preschool | 数学 | 数感、数量感 | 数感游戏、每日启蒙 |
| [数列 Skill](skills/math/senior-math-sequence/SKILL.md) | senior | 数学 | 逻辑、计算 | 专项训练、高考复习 |
| [数学错题订正 Skill](skills/math/primary-math-mistake-correction/SKILL.md) | primary | 数学 | 错题订正 | 错题订正、单元复习 |
| [数学单元复习 Skill](skills/math/primary-math-unit-review/SKILL.md) | primary | 数学 | 复习计划 | 单元复习、期中期末复习 |
| [图形空间 Skill](skills/math/preschool-shape-space/SKILL.md) | preschool | 数学 | 空间想象、图形认知 | 图形游戏、入学准备 |
| [线性代数 Skill](skills/math/college-math-linear-algebra/SKILL.md) | college | 数学 | 计算、逻辑 | 同步巩固、考试复习 |
| [小学口算速练 Skill](skills/math/primary-math-mental-arithmetic/SKILL.md) | primary | 数学 | 计算、数感 | 口算速练、每日打卡 |
| [小学数学考试复习 Skill](skills/math/primary-math-exam-review/SKILL.md) | primary | 数学 | 考试冲刺 | 期中期末复习、考前冲刺 |
| [应用题 Skill](skills/math/primary-math-application-problems/SKILL.md) | primary | 数学 | 应用题、建模 | 课后作业、专项训练 |

### <a id="chinese"></a>语文 Chinese

覆盖拼音、识字、阅读、作文、古诗词、文言文等语文场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [必会字 Skill](skills/chinese/primary-chinese-required-characters/SKILL.md) | primary | 语文 | 默写、知识记忆 | 单元复习、期中期末复习 |
| [初中古诗文 Skill](skills/chinese/junior-chinese-poetry/SKILL.md) | junior | 语文 | 背诵、鉴赏、默写 | 背诵记忆、中考复习 |
| [初中文言文 Skill](skills/chinese/junior-chinese-classical-text/SKILL.md) | junior | 语文 | 文言文、翻译 | 同步巩固、中考复习 |
| [初中现代文阅读 Skill](skills/chinese/junior-chinese-modern-reading/SKILL.md) | junior | 语文 | 阅读理解 | 阅读训练、中考复习 |
| [初中作文 Skill](skills/chinese/junior-chinese-composition/SKILL.md) | junior | 语文 | 写作 | 写作提升、中考复习 |
| [词语积累 Skill](skills/chinese/primary-chinese-word-accumulation/SKILL.md) | primary | 语文 | 词语积累 | 每日打卡、单元复习 |
| [高中古诗词鉴赏 Skill](skills/chinese/senior-chinese-poetry-analysis/SKILL.md) | senior | 语文 | 鉴赏、表达 | 阅读训练、高考复习 |
| [高中文言文 Skill](skills/chinese/senior-chinese-classical-text/SKILL.md) | senior | 语文 | 文言文、翻译 | 同步巩固、高考复习 |
| [高中现代文阅读 Skill](skills/chinese/senior-chinese-modern-reading/SKILL.md) | senior | 语文 | 阅读理解 | 阅读训练、高考复习 |
| [高中作文 Skill](skills/chinese/senior-chinese-essay/SKILL.md) | senior | 语文 | 写作 | 写作提升、高考复习 |
| [古诗词 Skill](skills/chinese/primary-chinese-ancient-poetry/SKILL.md) | primary | 语文 | 背诵、默写、理解 | 背诵记忆、考前冲刺 |
| [绘本阅读 Skill](skills/chinese/preschool-picture-book-reading/SKILL.md) | preschool | 语文 | 听读、表达、理解 | 亲子共读、阅读训练 |
| [句子训练 Skill](skills/chinese/primary-chinese-sentence-training/SKILL.md) | primary | 语文 | 写作、表达 | 写作提升、专项训练 |
| [看图写话 Skill](skills/chinese/primary-chinese-picture-writing/SKILL.md) | primary | 语文 | 写作、表达 | 写作提升、专项训练 |
| [课文背诵 Skill](skills/chinese/primary-chinese-recitation/SKILL.md) | primary | 语文 | 背诵、朗读 | 背诵记忆、每日打卡 |
| [课文预习 Skill](skills/chinese/primary-chinese-text-preview/SKILL.md) | primary | 语文 | 课文理解、预习 | 课前预习、课堂同步 |
| [拼音 Skill](skills/chinese/primary-chinese-pinyin/SKILL.md) | primary | 语文 | 拼读 | 课前预习、同步巩固 |
| [拼音启蒙 Skill](skills/chinese/preschool-pinyin-foundation/SKILL.md) | preschool | 语文 | 拼读、入学准备 | 入学准备、每日打卡 |
| [生字听写 Skill](skills/chinese/primary-chinese-dictation/SKILL.md) | primary | 语文 | 听写、默写 | 听写默写、课后作业 |
| [识字 Skill](skills/chinese/primary-chinese-character-recognition/SKILL.md) | primary | 语文 | 识字 | 每日打卡、课后作业 |
| [识字启蒙 Skill](skills/chinese/preschool-literacy-recognition/SKILL.md) | preschool | 语文 | 识字、图文匹配 | 每日启蒙、亲子共学 |
| [小学语文考试复习 Skill](skills/chinese/primary-chinese-exam-review/SKILL.md) | primary | 语文 | 考试冲刺 | 期中期末复习、考前冲刺 |
| [小学作文 Skill](skills/chinese/primary-chinese-composition/SKILL.md) | primary | 语文 | 写作 | 写作提升、考前冲刺 |
| [语文单元复习 Skill](skills/chinese/primary-chinese-unit-review/SKILL.md) | primary | 语文 | 复习计划 | 单元复习、期中期末复习 |
| [语言表达 Skill](skills/chinese/preschool-language-expression/SKILL.md) | preschool | 语文 | 表达、复述 | 表达训练、亲子互动 |
| [阅读理解 Skill](skills/chinese/primary-chinese-reading-comprehension/SKILL.md) | primary | 语文 | 阅读理解 | 阅读训练、专项训练 |

### <a id="english"></a>英语 English

覆盖自然拼读、词汇、听说读写、CET、IELTS、TOEFL、考研英语等英语学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中英语词汇 Skill](skills/english/junior-english-vocabulary/SKILL.md) | junior | 英语 | 知识记忆 | 每日打卡、中考复习 |
| [初中英语写作 Skill](skills/english/junior-english-writing/SKILL.md) | junior | 英语 | 写作 | 写作提升、中考复习 |
| [初中英语语法 Skill](skills/english/junior-english-grammar/SKILL.md) | junior | 英语 | 语法 | 专项训练、中考复习 |
| [初中英语阅读 Skill](skills/english/junior-english-reading/SKILL.md) | junior | 英语 | 阅读理解 | 阅读训练、中考复习 |
| [大学英语六级 Skill](skills/english/college-english-cet6/SKILL.md) | college | 英语 | 词汇、听力、阅读理解、写作 | 考前冲刺、专项训练 |
| [大学英语四级 Skill](skills/english/college-english-cet4/SKILL.md) | college | 英语 | 词汇、听力、阅读理解、写作 | 考前冲刺、专项训练 |
| [单词 Skill](skills/english/primary-english-vocabulary/SKILL.md) | primary | 英语 | 知识记忆、默写 | 每日打卡、听写默写 |
| [高中英语词汇 Skill](skills/english/senior-english-vocabulary/SKILL.md) | senior | 英语 | 知识记忆 | 每日打卡、高考复习 |
| [高中英语写作 Skill](skills/english/senior-english-writing/SKILL.md) | senior | 英语 | 写作 | 写作提升、高考复习 |
| [高中英语语法 Skill](skills/english/senior-english-grammar/SKILL.md) | senior | 英语 | 语法 | 专项训练、高考复习 |
| [高中英语阅读 Skill](skills/english/senior-english-reading/SKILL.md) | senior | 英语 | 阅读理解 | 阅读训练、高考复习 |
| [句型 Skill](skills/english/primary-english-sentence-pattern/SKILL.md) | primary | 英语 | 表达 | 同步巩固、课后作业 |
| [考研英语 Skill](skills/english/college-english-postgraduate/SKILL.md) | college、adult | 英语 | 阅读理解、翻译、写作 | 考研复习、考前冲刺 |
| [口语 Skill](skills/english/primary-english-speaking/SKILL.md) | primary | 英语 | 口语 | 口语训练、每日打卡 |
| [听力 Skill](skills/english/primary-english-listening/SKILL.md) | primary | 英语 | 听力 | 听力训练、考试复习 |
| [托福 Skill](skills/english/college-english-toefl/SKILL.md) | college、adult | 英语 | 听力、口语、阅读理解、写作 | 出国考试、专项训练 |
| [小学英语考试复习 Skill](skills/english/primary-english-exam-review/SKILL.md) | primary | 英语 | 考试冲刺 | 期中期末复习、考前冲刺 |
| [雅思 Skill](skills/english/college-english-ielts/SKILL.md) | college、adult | 英语 | 听力、口语、阅读理解、写作 | 出国考试、专项训练 |
| [英语课文同步 Skill](skills/english/primary-english-textbook-sync/SKILL.md) | primary | 英语 | 朗读、背诵、默写 | 课堂同步、课后作业 |
| [英语阅读 Skill](skills/english/primary-english-reading/SKILL.md) | primary | 英语 | 阅读理解 | 阅读训练、专项训练 |
| [语法启蒙 Skill](skills/english/primary-english-grammar-intro/SKILL.md) | primary | 英语 | 语法 | 专项训练、考试复习 |
| [字母 Skill](skills/english/primary-english-letters/SKILL.md) | primary | 英语 | 拼读、书写 | 课前预习、每日打卡 |
| [自然拼读 Skill](skills/english/primary-english-phonics/SKILL.md) | primary | 英语 | 拼读 | 同步巩固、专项训练 |

### <a id="learning"></a>学习能力 Learning

面向学习报告、错题复盘、题目讲解、注意力训练等通用学习能力。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [错题复习 Skill](skills/learning/agent-mistake-review/SKILL.md) | preschool、primary、junior、senior | 学习能力 | 错题订正、复习计划 | 错题订正、单元复习 |
| [控笔与书写准备 Skill](skills/learning/preschool-fine-motor-writing/SKILL.md) | preschool | 学习能力 | 控笔、书写准备 | 入学准备、每日练习 |
| [学情报告 Skill](skills/learning/agent-learning-report/SKILL.md) | primary、junior、senior | 学习能力 | 学情报告、学习计划 | 学习报告、家长陪学 |
| [专注力训练 Skill](skills/learning/preschool-attention-training/SKILL.md) | preschool | 学习能力 | 专注、记忆 | 每日打卡、习惯培养 |
| [AI 讲题 Skill](skills/learning/agent-question-explanation/SKILL.md) | primary、junior、senior、college | 学习能力 | AI 讲题 | 拍照答疑、课后作业 |

### <a id="general"></a>综合场景 General

覆盖拍照问答、考前冲刺、幼小衔接等跨学科场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [高考冲刺 Skill](skills/general/senior-gaokao-sprint/SKILL.md) | senior | 综合 | 考试冲刺 | 考前冲刺 |
| [考前冲刺 Skill](skills/general/agent-exam-sprint/SKILL.md) | primary、junior、senior、college、adult | 综合 | 考试冲刺 | 考前冲刺 |
| [拍照答疑 Skill](skills/general/agent-photo-question/SKILL.md) | primary、junior、senior | 综合 | AI 讲题、图片识题 | 拍照答疑 |
| [幼小衔接综合 Skill](skills/general/preschool-school-readiness/SKILL.md) | preschool | 综合 | 识字、拼读、数感、习惯 | 入学准备、暑假提升 |
| [中考冲刺 Skill](skills/general/junior-exam-sprint/SKILL.md) | junior | 综合 | 考试冲刺 | 考前冲刺 |

### <a id="teaching"></a>教师教学 Teaching

面向老师的备课、作业生成、班级分析、错题聚类和家长报告。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [班级错题归因 Skill](skills/teaching/teacher-mistake-clustering/SKILL.md) | primary、junior、senior | 教学管理 | 错题订正、学情分析 | 错题订正 |
| [班级学情分析 Skill](skills/teaching/teacher-class-analysis/SKILL.md) | primary、junior、senior | 教学管理 | 学情分析 | 学情分析 |
| [家长反馈报告 Skill](skills/teaching/teacher-parent-report/SKILL.md) | primary、junior、senior | 教学管理 | 报告生成 | 家长沟通 |
| [老师备课 Skill](skills/teaching/teacher-lesson-planning/SKILL.md) | primary、junior、senior | 教学管理 | 教学设计、学情分析 | 老师备课 |
| [作业生成 Skill](skills/teaching/teacher-homework-generation/SKILL.md) | primary、junior、senior | 教学管理 | 作业生成、分层练习 | 班级作业 |

### <a id="school"></a>学校管理 School

面向学校管理、年级洞察、资源规划和教师使用分析。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [老师使用分析 Skill](skills/school/school-teacher-usage/SKILL.md) | primary、junior、senior | 学校管理 | 运营分析 | 数据分析 |
| [年级学情洞察 Skill](skills/school/school-grade-insight/SKILL.md) | primary、junior、senior | 学校管理 | 学情分析 | 学校测评 |
| [校本资源规划 Skill](skills/school/school-resource-planning/SKILL.md) | primary、junior、senior | 学校管理 | 资源规划 | 运营配置 |

### <a id="institution"></a>机构运营 Institution

面向教培机构、校区运营、课程包、续费洞察和组织分析。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [机构课程包 Skill](skills/institution/institution-course-package/SKILL.md) | preschool、primary、junior、senior、adult | 机构运营 | 课程配置 | 机构课程 |
| [老师效率分析 Skill](skills/institution/institution-teacher-efficiency/SKILL.md) | preschool、primary、junior、senior、adult | 机构运营 | 运营分析 | 数据分析 |
| [校区经营看板 Skill](skills/institution/institution-campus-dashboard/SKILL.md) | preschool、primary、junior、senior、adult | 机构运营 | 运营分析 | 经营分析 |
| [续费风险分析 Skill](skills/institution/institution-renewal-insight/SKILL.md) | preschool、primary、junior、senior、adult | 机构运营 | 运营分析 | 续费报告 |
| [组织洞察 Skill](skills/institution/agent-organization-insight/SKILL.md) | primary、junior、senior、adult | 机构运营 | 运营分析 | 数据分析 |

### <a id="family"></a>家庭教育 Family

面向家长陪伴、家庭教育和亲子沟通。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [家长陪学 Skill](skills/family/agent-parent-companion/SKILL.md) | preschool、primary、junior | 家庭教育 | 陪学建议、目标管理 | 家长陪学 |

### <a id="system"></a>系统 Agent System

面向 Agent 自身的安全、记忆、计划、预算和技能推荐能力。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [安全守护 Skill](skills/system/agent-safety-guard/SKILL.md) | preschool、primary、junior、senior、college、adult | 内容安全 | 内容安全、未成年人保护 | 安全审核、消费保护 |
| [记忆总结 Skill](skills/system/agent-memory-summary/SKILL.md) | preschool、primary、junior、senior、college、adult | 学习能力 | Memory 总结、偏好沉淀 | Agent 记忆 |
| [学习计划 Skill](skills/system/agent-study-plan/SKILL.md) | preschool、primary、junior、senior、college、adult | 学习能力 | 学习计划、目标管理 | 今日学习、寒暑假提升 |
| [Skill 推荐 Skill](skills/system/agent-skill-recommendation/SKILL.md) | preschool、primary、junior、senior、college、adult | 学习能力 | 推荐安装、路径规划 | Skill 市场、学习计划 |
| [Token 预算 Skill](skills/system/agent-token-budget/SKILL.md) | preschool、primary、junior、senior、college、adult | 成本管理 | Token 预算、成本控制 | Token 成本估算、模型路由 |
| [Workflow 恢复 Skill](skills/system/agent-workflow-resume/SKILL.md) | preschool、primary、junior、senior、college、adult | 学习能力 | Workflow 恢复、任务续接 | 继续学习、失败补偿 |

### <a id="atomic"></a>原子技能 Atomic Skills

面向可组合工作流的细粒度技能，适合做教材版本、年级、单元、日常训练等更精确的 Agent 能力单元。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [人教版二年级上册每日口算 Atomic Skill](skills/atomic/primary-math-mental-arithmetic-rj-grade2-volume1-daily/SKILL.md) | primary | 数学 | 计算、数感 | 口算速练、每日打卡 |
| [人教版一年级上册每日口算 Atomic Skill](skills/atomic/primary-math-mental-arithmetic-rj-grade1-volume1-daily/SKILL.md) | primary | 数学 | 计算、数感 | 口算速练、每日打卡 |
| [人教版一年级上册数学错题单元复习 Atomic Skill](skills/atomic/primary-math-mistake-review-rj-grade1-volume1-unit-review/SKILL.md) | primary | 数学 | 错题订正、复习计划 | 错题订正、单元复习 |

### <a id="physics"></a>物理 Physics

覆盖初高中物理学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中物理 Skill](skills/physics/junior-physics-foundation/SKILL.md) | junior | 物理 | 实验理解、知识记忆 | 同步巩固、中考复习 |
| [高中物理 Skill](skills/physics/senior-physics/SKILL.md) | senior | 物理 | 实验理解、知识记忆 | 同步巩固、高考复习 |

### <a id="chemistry"></a>化学 Chemistry

覆盖初高中化学学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中化学 Skill](skills/chemistry/junior-chemistry-foundation/SKILL.md) | junior | 化学 | 实验理解、知识记忆 | 同步巩固、中考复习 |
| [高中化学 Skill](skills/chemistry/senior-chemistry/SKILL.md) | senior | 化学 | 实验理解、知识记忆 | 同步巩固、高考复习 |

### <a id="biology"></a>生物 Biology

覆盖初高中生物学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中生物 Skill](skills/biology/junior-biology/SKILL.md) | junior | 生物 | 知识记忆、实验理解 | 同步巩固、考试复习 |
| [高中生物 Skill](skills/biology/senior-biology/SKILL.md) | senior | 生物 | 知识记忆、实验理解 | 同步巩固、高考复习 |

### <a id="history"></a>历史 History

覆盖初高中历史学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中历史 Skill](skills/history/junior-history/SKILL.md) | junior | 历史 | 知识记忆 | 背诵记忆、中考复习 |
| [高中历史 Skill](skills/history/senior-history/SKILL.md) | senior | 历史 | 知识记忆、材料分析 | 同步巩固、高考复习 |

### <a id="geography"></a>地理 Geography

覆盖初高中地理学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中地理 Skill](skills/geography/junior-geography/SKILL.md) | junior | 地理 | 知识记忆、图表分析 | 同步巩固、考试复习 |
| [高中地理 Skill](skills/geography/senior-geography/SKILL.md) | senior | 地理 | 知识记忆、图表分析 | 同步巩固、高考复习 |

### <a id="politics"></a>政治 Politics

覆盖初高中政治学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [初中道法 Skill](skills/politics/junior-politics/SKILL.md) | junior | 政治 | 知识记忆、材料分析 | 背诵记忆、中考复习 |
| [高中政治 Skill](skills/politics/senior-politics/SKILL.md) | senior | 政治 | 知识记忆、材料分析 | 同步巩固、高考复习 |

### <a id="computer-science"></a>计算机 Computer Science

覆盖 Python、数据结构、算法、AI 基础和数据分析等计算机学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [数据分析 Skill](skills/computer-science/college-data-analysis/SKILL.md) | college、adult | 计算机 | 数据分析 | 职业技能、项目训练 |
| [数据结构 Skill](skills/computer-science/college-cs-data-structure/SKILL.md) | college | 计算机 | 编程、算法 | 同步巩固、考研复习 |
| [算法 Skill](skills/computer-science/college-cs-algorithm/SKILL.md) | college、adult | 计算机 | 算法、逻辑 | 职业技能、面试准备 |
| [AI 基础 Skill](skills/computer-science/college-ai-foundation/SKILL.md) | college、adult | 计算机 | AI 基础 | 职业技能、兴趣学习 |
| [Python Skill](skills/computer-science/college-cs-python/SKILL.md) | college、adult | 计算机 | 编程 | 职业技能、课程学习 |

### <a id="general-education"></a>通识教育 General Education

覆盖大学通识和学术能力。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [学术写作 Skill](skills/general-education/college-academic-writing/SKILL.md) | college | 通识 | 写作 | 写作提升、论文训练 |

### <a id="career"></a>职业教育 Career

覆盖成人学习、考证、公务员、教师资格等职业教育场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [公务员申论 Skill](skills/career/adult-civil-service-essay/SKILL.md) | adult | 职业教育 | 材料阅读、写作 | 考证、写作提升 |
| [公务员行测 Skill](skills/career/adult-civil-service-aptitude/SKILL.md) | adult | 职业教育 | 逻辑、数据分析 | 考证、专项训练 |
| [教师资格证 Skill](skills/career/adult-teacher-certification/SKILL.md) | adult | 职业教育 | 考试冲刺 | 考证、考前冲刺 |
| [职业证书 Skill](skills/career/adult-vocational-certificate/SKILL.md) | adult | 职业教育 | 知识记忆、考试冲刺 | 考证、考前冲刺 |

### <a id="language"></a>语言学习 Language

覆盖成人语言学习场景。

| Skill | 阶段 | 学科/领域 | 能力 | 场景 |
| --- | --- | --- | --- | --- |
| [成人语言学习 Skill](skills/language/adult-language-learning/SKILL.md) | adult | 语言学习 | 口语、听力、词汇 | 每日打卡、专项训练 |

## 项目结构

```text
hermes-edu-skills/
├─ .github/workflows/validate.yml
├─ .well-known/skills/index.json
├─ skills/
│  ├─ math/
│  ├─ chinese/
│  ├─ english/
│  ├─ teaching/
│  ├─ institution/
│  ├─ system/
│  └─ ...
├─ scripts/validate.mjs
├─ catalog.json
├─ CHANGELOG.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ README.md
├─ README.en.md
├─ RELEASE.md
└─ SECURITY.md
```

## 校验 Skill Pack

在独立包根目录：

```bash
npm run validate
```

校验内容包括：

- `catalog.json` 和 discovery index 名称。
- `catalog.skillCount` 是否等于实际 `SKILL.md` 数量。
- discovery index 是否和 catalog 对齐。
- frontmatter 中的 Skill 名称。
- `source: hermes-edu-skills`。
- `author: zhongwei`。

## 给维护者

维护者发布新版前，应更新 Skill、同步 README 表格、运行校验，并确认没有账号、密钥、用户数据或非公开系统说明进入仓库。

完整发布清单见 `RELEASE.md`。

## 当前限制

- 当前安装方式是 Hermes `skills.external_dirs`，还不是公共 Skill Registry 的一键安装。
- 一些 workflow 名称，例如 `primary_math_mental_arithmetic.run`，代表预期 Agent 工作流。独立 Hermes 用户可以立即加载和查看 Skill，但完整业务执行需要配套工具或平台集成。
- 当前安装方式面向本地 Hermes Agent；公共 Skill Registry 支持稳定后会继续跟进。

## 路线图

- 发布独立仓库 `hermes-edu-skills`。
- 增加自动更新 Hermes config 的安装脚本。
- 增加常见 Hermes Agent 使用示例。
- 增加 Skill 质量等级和审核状态。
- 增加更多贴合教材/课程体系的 Atomic Skill。
- 增加可选工具适配器，让需要执行能力的 workflow 可以真正跑起来。
- 在 Hermes 公开 Skill Registry 规范稳定后，探索对接公共安装方式。

## 参与贡献

欢迎贡献。请先阅读 `CONTRIBUTING.md`。

适合贡献的内容包括：

- 改进某个 `SKILL.md` 的指令。
- 增加新的教育 Skill。
- 改进校验脚本。
- 增加独立 Hermes 用户示例。
- 改进中英文文档。

## 开源协议

MIT，见 `LICENSE`。
