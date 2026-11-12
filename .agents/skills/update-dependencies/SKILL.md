---
name: update-dependencies
description: >-
    Check pending dependency updates for @perfective/eslint-config
    (Renovate Dependency Dashboard or npm outdated)
    and process them one by one in the required order with the update-dependency skill.
    Use for a regular maintenance pass or when asked to "update dependencies".
---

# Update all pending dependencies

## 1. Collect pending updates

- Renovate: find the Dependency Dashboard issue and the open Renovate PRs:

    ```bash
    gh issue list --label dependencies --search "Dependency Dashboard in:title" --state open
    gh pr list --author "app/renovate" --state open
    ```

- Always also run `npm outdated` to catch updates Renovate has not opened yet
  (for example, during the release-age cooldown or while waiting for approval in the Dependency Dashboard).

Ignore prereleases. Note security updates (Renovate's `vulnerability` label): they go first within their group.

## 2. Order them

1. `eslint`
2. `typescript-eslint`
3. All other ESLint plugins, in alphabetical order
4. Other dev tooling (`typescript`, `jest`, `prettier`, ...), checking compatibility with `typescript-eslint`
5. `@perfective/build` (`ts.build`)

`@perfective/build` comes last because a newer release can require a TypeScript version
that the installed `typescript-eslint` does not support.

## 3. Process them one by one

For each update, follow `.agents/skills/update-dependency/SKILL.md` completely:
one dependency, one commit, verified before the next one starts.

Stop and report at the first:

- **NEEDS HUMAN** item that blocks the update
  (an item that does not block it, such as a rule decision left at its current setting, can go in the report);
- failing verification that you cannot fix within the update;
- `@perfective/build` update that requires an unsupported TypeScript version.

## 4. Report

End with a table of the processed updates (package, from → to, commit, rule changes, NEEDS HUMAN items)
and the list of updates not processed and why.
Do not push, merge, tag, or publish; the maintainer prepares releases with the `prepare-release` skill.
