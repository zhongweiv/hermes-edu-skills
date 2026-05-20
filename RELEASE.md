# 发布指南

这个文件用于维护者发布 `hermes-edu-skills` 新版本。

## 发布清单

```text
1. 更新或新增 Skill。
2. 同步更新 README.md 和 README.en.md。
3. 更新 CHANGELOG.md。
4. npm run validate
5. git status
6. git add .
7. git commit -m "release vX.Y.Z"
8. git tag vX.Y.Z
9. git push && git push --tags
```

> 维护者如果使用项目生成脚本，README 生成应同时覆盖 `README.md` 和 `README.en.md`，避免双语文档漂移。

## 版本规则

使用语义化版本：

- Patch：文案、元数据、安全提示修复，不改变 Skill 名称。
- Minor：新增 Skill 或明显增强 Skill 能力。
- Major：目录、名称、catalog 或 metadata 出现破坏性变化。
