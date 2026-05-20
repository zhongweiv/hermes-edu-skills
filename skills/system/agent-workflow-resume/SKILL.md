---
name: "agent-workflow-resume"
description: "Workflow 恢复 Skill用于继续学习、失败补偿，由 Hermes Agent Runtime 按独立 Agent Context 调用。 Workflow: agent_workflow_resume.run."
version: "0.1.0"
author: zhongwei
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: ["education", "preschool", "primary", "junior", "senior", "college", "adult", "学习能力", "Workflow 恢复", "任务续接", "继续学习", "失败补偿"]
    source: hermes-edu-skills
    workflow: "agent_workflow_resume.run"
    category: "system"
    stages: ["preschool", "primary", "junior", "senior", "college", "adult"]
    subjects: ["学习能力"]
    abilities: ["Workflow 恢复", "任务续接"]
    scenarios: ["继续学习", "失败补偿"]
---

# Workflow 恢复 Skill

Workflow 恢复 Skill用于继续学习、失败补偿，由 Hermes Agent Runtime 按独立 Agent Context 调用。

## 适用场景 / When To Use

当学习者、家长、老师、学校或教育应用开发者需要处理以下场景时，可以使用这个 Skill。

最适合的场景：
- 继续学习
- 失败补偿

适用角色：
- 学习者
- 家长
- 老师

## 调用信号 / Invocation Signals

意图：
- `agent_workflow_resume`
- `继续学习`
- `失败补偿`

示例表达：
- 开始Workflow 恢复 Skill
- 帮我安排继续学习
- 根据当前上下文执行Workflow 恢复 Skill

## 公开 Skill 契约 / Public Skill Contract

- Workflow: `agent_workflow_resume.run`
- Category: `system`
- Stages: `preschool`, `primary`, `junior`, `senior`, `college`, `adult`
- Subjects: `学习能力`
- Abilities: `Workflow 恢复`, `任务续接`

## 独立 Hermes 使用方式 / Standalone Hermes Usage

这个 Skill 可以通过 Hermes 的 `skills.external_dirs` 作为外部 Skill 加载。

如果你有自己的工具、记忆、课程数据或 workflow runner，可以把它们与本 Skill 组合使用。如果没有外部工具，也可以直接使用上面的说明来引导对话，生成有用的学习或教学反馈。
