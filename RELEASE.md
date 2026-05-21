# 发布策略

这个文件用于维护者判断 `hermes-edu-skills` 什么时候只提交代码、什么时候打版本和发布 GitHub Release。

## 总原则

不是每次提交都需要发版。

`main` 分支保持持续更新；Release 只用于用户可感知、值得外部用户安装或回看的版本节点。小的 README、错别字、表格展示、内部生成脚本微调，可以只提交到 `main`，等下一次有实际功能或 Skill 批次更新时合并进版本说明。

## 什么时候只提交，不发 Release

以下情况默认只 commit / push，不创建 tag，不创建 GitHub Release：

- README 文案微调、错别字、链接修复。
- 表格展示、排版、标题、描述的小优化。
- 不影响用户命令的脚本内部整理。
- 不改变 `catalog.json` 语义的生成时间、排序或格式变化。
- `.github`、Issue 模板、贡献指南等维护性改动。
- 单个 Skill 的轻微措辞优化，且不改变调用方式、参数或适用边界。

这类改动可以在后续版本的 `CHANGELOG.md` 中统一归入 `Unreleased` 或下一次 patch/minor。

## 什么时候发 Patch

Patch 版本用于“用户会受益，但不是新能力”的小版本，例如：

- 修复 CLI 命令 bug、安装路径 bug、导出错误。
- 修复 catalog / discovery index 不一致。
- 修复 Skill metadata、frontmatter 或校验问题。
- 修复 README 中会误导用户安装或使用的命令。
- 小范围提升已发布 Skill 的可用性，但不改变 Skill 名称和分类。

示例：`0.11.0 -> 0.11.1`

## 什么时候发 Minor

Minor 版本用于“用户可感知的新能力或新批次”，例如：

- 新增一批 Skill 或新增重要分类。
- CLI 新增用户可直接使用的命令。
- 支持新的 Agent / 工具导出格式。
- 公开目录结构、安装体验、Skill 市场分类有明显升级。
- 一组 Skill 完成产品级打磨，明显提升可用性。

示例：`0.11.0 -> 0.12.0`

## 什么时候发 Major

Major 版本用于破坏性变化，例如：

- Skill 目录结构大规模调整，旧链接或旧安装方式失效。
- Skill `name` / slug 大规模重命名。
- `catalog.json` 或 `.well-known/skills/index.json` schema 不兼容。
- CLI 主命令或参数出现不兼容变更。
- 放弃旧的安装或导出格式。

示例：`0.x -> 1.0.0` 或 `1.x -> 2.0.0`

## 建议发布节奏

- 日常维护：只提交到 `main`。
- 每周或每完成一组有价值的 Skill 打磨：考虑一个 patch 或 minor。
- CLI、安装体验、导出能力、分类体系变化：优先 minor。
- 文档小修：不单独发版，合并到下一次 release。

如果连续几次都是文档、展示和说明优化，建议先累积，不要反复打 tag。

## Changelog 规则

`CHANGELOG.md` 可以维护一个 `Unreleased` 区块：

```md
## Unreleased

- Improve README install examples.
- Polish textbook-sync Skill descriptions.
```

发版时再把 `Unreleased` 改成实际版本号和日期。

## 发布清单

```text
1. 判断本次是否满足发版条件。
2. 更新或新增 Skill / CLI / 文档。
3. 同步更新 README.md 和 README.en.md。
4. 更新 CHANGELOG.md，把 Unreleased 归档到目标版本。
5. npm run validate
6. npm pack --dry-run
7. git status
8. git add .
9. git commit -m "<change summary>"
10. git tag vX.Y.Z
11. git push && git push --tags
12. 创建 GitHub Release，说明用户可感知变化和验证结果。
```

> 维护者如果使用项目生成脚本，README 生成应同时覆盖 `README.md` 和 `README.en.md`，避免双语文档漂移。

## 版本规则

使用语义化版本：

- Patch：修复用户可感知的问题，不改变 Skill 名称、分类和主命令。
- Minor：新增 Skill、CLI 能力、导出能力或明显增强 Skill 能力。
- Major：目录、名称、catalog、metadata 或 CLI 出现破坏性变化。
