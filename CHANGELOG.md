# Changelog

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
