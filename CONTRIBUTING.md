# 贡献指南

感谢你帮助改进 Hermes Edu Skills。

## 贡献范围

这个仓库面向 Hermes Agent Runtime 的教育 Skill。适合贡献的内容包括：

- 改进某个 `SKILL.md` 的指令。
- 增加新的教育 Skill。
- 改进 `catalog.json` 或 discovery index。
- 改进校验、发布和同步工具。
- 增加面向中国用户的 Hermes Agent 使用示例。
- 补充真实教育场景需求，帮助项目覆盖更多中国课堂、家庭和教培场景。

## 最推荐的贡献方式

- 想要新 Skill：请使用 `Skill request / 新 Skill 需求` Issue 模板。
- 发现 Skill 描述不准确：请直接提 Issue 或 PR。
- 已经在 Hermes Agent 中试用：欢迎提交你的使用场景和改进建议。
- 想帮助更多人发现项目：欢迎分享你的使用案例，或把改进建议提交到 Issue。

## Skill 要求

每个 Skill 应该：

- 放在 `skills/<category>/<skill-name>/SKILL.md`。
- 使用稳定的 kebab-case `name`。
- 包含清晰的 `description`、`version`、`author`、`license` 和 Hermes metadata。
- 能被独立 Hermes Agent 通过 `skills.external_dirs` 发现。
- 不依赖私有服务、内部账号、内部成本系统或用户隐私数据。
- 尽量使用中文描述核心教育场景，同时保留必要的英文技术字段。

## 校验

在独立仓库根目录运行：

```bash
npm run validate
```

维护者发布新版前，也应该运行校验。

## 生成文件

部分 Skill 可能由源数据生成。如果你直接修改生成文件，请尽量同步更新源数据，否则下次生成时可能被覆盖。

## 关于维护方

Hermes Edu Skills 由 [长沙欣慰科技](https://www.shineway.tech/) 发起维护。我们欢迎独立开发者、老师、教研人员、学校和教育机构参与共建，但请保持 Skill 内容开放、可验证、可独立运行，并避免提交任何私有业务数据。
