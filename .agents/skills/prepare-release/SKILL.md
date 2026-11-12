---
name: prepare-release
description: >-
    Prepare the `Publish vX.Y.Z` commit for @perfective/eslint-config
    (version bump, CHANGELOG.adoc, MIGRATION_GUIDE.adoc, README updates)
    from the commits since the last release.
    Use only when the maintainer asks to prepare a release; it never tags, releases, or publishes.
---

# Prepare a release

Run this only on the maintainer's request.
The result is one `Publish vX.Y.Z` commit on the agent branch.
Tagging, the GitHub Release, and `npm publish` stay with the maintainer.

## 1. Collect the changes

```bash
git describe --tags --abbrev=0 --match 'v*'
git log --reverse --format='%h %s%n%b' <last-tag>..HEAD
```

Group the commits:

- dependency updates (`Patch` / `Update` / `Upgrade`) with their rule changes from the commit bodies;
- configuration changes (rules enabled, disabled, removed, severity changes);
- API changes (exports, function signatures, sub-paths);
- documentation and tooling changes (CHANGELOG only when relevant to consumers).

## 2. Choose the version

While on `v0`:

- **minor** (`v0.X+1.0`) if anything can break a consumer's lint run or build:
  a newly enabled error rule, a stricter option, a peer dependency major or a new peer dependency,
  a changed or removed export, or a dropped Node.js/TypeScript version;
- **patch** (`v0.X.Y+1`) otherwise (fixes, warnings only fixable automatically, docs).

When unsure, choose minor and say why in the report.

## 3. Update the version and the peers

```bash
npm update
npm version <version> --no-git-tag-version
```

Check that `peerDependencies` ranges match the installed `devDependencies` versions.

## 4. Write the CHANGELOG

Add a `== vX.Y.Z` section at the top of `CHANGELOG.adoc`, following the existing sections
and "CHANGELOG and MIGRATION_GUIDE phrasing" in `.agents/skills/update-dependency/references/decisions.md`:

- past tense, one bullet per dependency (``* Updated `x` to `1.2.3`:``),
  nested bullets per rule change, with rule links;
- API changes and notable configuration changes as their own bullets;
- only consumer-relevant changes (not pure infrastructure).

Add any missing link attributes to the header of the file.

## 5. Write the migration guide (minor versions)

Add a `== From vA.B.0 to vX.Y.0` section at the top of `MIGRATION_GUIDE.adoc`:

- "_Disable and gradually enable new rules_" with an `eslint.config.js` example
  that sets every newly enabled rule to `'off'`, grouped by plugin;
- a step with before/after code for each API change.

## 6. Update the READMEs

Apply pending changes to `README.adoc` and `README.md` (setup, exports, optional plugins)
so that `main` matches the published package.

## 7. Verify and commit

```bash
npm run lint
npm run lint:build
npm run test:build
npm run dist
```

Commit as `Publish vX.Y.Z` with the version bump, the lockfile,
`CHANGELOG.adoc`, `MIGRATION_GUIDE.adoc`, and the READMEs.

## 8. Report the next steps

Stop after the commit. Report the version, why it was chosen, and the maintainer's next steps:

1. Push the branch and wait for CI.
2. `git tag -s vX.Y.Z` and push the tag.
3. Create the GitHub Release manually (it triggers `publish.yaml`).
