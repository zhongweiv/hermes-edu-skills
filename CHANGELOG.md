# Changelog

## 0.4.0 - 2026-05-21

- Adds a unified `agent-pack` command model inspired by multi-tool Agent pack projects.
- Adds `npm run agent:install -- --tool <tool>` for Hermes, OpenClaw, Codex, Cursor, Claude Code, and generic Agent Skill roots.
- Adds `npm run agent:convert -- --tool <tool> --target <path>` for conversion-only workflows.
- Adds Cursor `.cursor/rules/*.mdc` generation plus a local `.cursor/hermes-edu-skills` Skill Pack copy.
- Keeps the older `install:hermes`, `install:openclaw`, and `export:agents` commands as compatibility aliases.

## 0.3.0 - 2026-05-21

- Adds `scripts/agent-pack.mjs` for easier installation and cross-agent export.
- Adds `npm run install:hermes` to update or print Hermes `skills.external_dirs` configuration.
- Adds `npm run install:openclaw` to export a flat `SKILL.md` directory layout suitable for OpenClaw-style Agent Skill roots.
- Adds `npm run export:agents` for generic Agent Skill Pack export with `AGENT_SKILL_PACK.json`.
- Keeps the public Skill catalog backward-compatible with the 177 product-level Skills introduced in 0.2.0.

## 0.2.0 - 2026-05-21

- Shrinks the public Skill Pack from 20,551 generated entries to 177 product-level Skills.
- Adds China-first categories such as textbook sync, learning core, daily practice, exam prep, teacher tools, and family education.
- Moves grade, semester, unit, lesson, knowledge point, scenario, and difficulty into Skill parameters instead of exposing them as thousands of separate Skills.
- Keeps 170 Skills as installable entries and 7 organization-dependent Skills as `doc_only` examples.
- Updates `catalog.json`, discovery index, README tables, and Skill frontmatter for the new 0.2.0 structure.

## 0.1.0 - 2026-05-21

- Initial Hermes Edu Skills release shape.
- Includes 20,551 Hermes-compatible education Skills.
- Adds generated `catalog.json` and `.well-known/skills/index.json`.
- Adds standalone validation with `npm run validate`.
