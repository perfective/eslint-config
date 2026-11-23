---
name: prepare-release
description: >-
    Prepare the `Publish vX.Y.Z` commit for @perfective/eslint-config
    (version bump, CHANGELOG.adoc, MIGRATION_GUIDE.adoc, README updates, ROADMAP.adoc)
    from the commits since the last release, and open it as a release pull request.
    Use only when the maintainer asks to prepare a release.
    On GitHub, a release issue titled `Release @perfective/eslint-config vX.Y.Z`
    runs publish-pr.yaml instead,
    including a later fix on the existing publish branch.
    It never tags, releases, or publishes.
---

# Prepare a release

Run this only on the maintainer's request
(for example, an issue that asks for the next release, labeled `claude`).
The result is one `Publish vX.Y.Z` commit on the agent branch, opened as a release pull request.
The agent stops there:
merging the pull request, the signed tag, the GitHub Release, and `npm publish` stay with the maintainer.
Never run `git tag`, `gh release create`, or `npm publish`, and never push to `main`.

Start from the current `main`, so the release covers every merged change.
In the `Claude` workflow, the action creates the `feature/issue-<number>-...` branch from `main` for the issue.

A release issue is an open issue titled `Release @perfective/eslint-config vX.Y.Z` with the `release` label.
Adding the `claude` label runs `.github/workflows/publish-pr.yaml`, which opens that Publish PR.
It also continues on an existing `publish-vX.Y.Z` branch
(re-adding the label, or `@claude` on the Publish PR) with a fix-up commit on that PR.
The general Claude workflow skips the release issue and the Publish PR, so do not run this skill on either.
The maintainer signs and pushes the tag, then creates the GitHub Release manually.
`publish.yaml` publishes the package when that signed `v*` tag is pushed.
It does not create the GitHub Release.

## 1. Collect the changes

The last release is the version in `package.json` (tag `v<version>`).
`gh release view --json tagName` shows the latest GitHub Release;
locally, `git describe --tags --abbrev=0 --match 'v*'` also works.

```bash
git log --reverse --format='%h %s%n%b' v<version>..HEAD
```

Group the commits:

- dependency updates (`Patch` / `Update` / `Upgrade`) with their rule changes from the commit bodies;
- configuration changes (rules enabled, disabled, removed, severity changes);
- API changes (exports, function signatures, sub-paths);
- documentation and tooling changes (CHANGELOG only when relevant to consumers).

Leave out CI, workflow, Renovate, and `AGENTS.md` changes.
When there are no consumer-relevant changes since the last release, stop: **NEEDS HUMAN**.

## 2. Choose the version

While on `v0`:

- **minor** (`v0.X+1.0`) if anything can break a consumer's lint run or build:
  a newly enabled error rule, a stricter option, a peer dependency major or a new peer dependency,
  a changed or removed export, or a dropped Node.js/TypeScript version;
- **patch** (`v0.X.Y+1`) otherwise (fixes, warnings only fixable automatically, docs).

When the maintainer already named the version, use that version.
When unsure, choose minor and say why in the report.

## 3. Update the version

The release commit from this skill does not change dependencies:
dependency updates land before it, one per commit, through the `update-dependency` skill.
When `npm outdated` shows pending updates, list them in the report; they do not block the release.

Set the version in `package.json` and in both version fields of `package-lock.json`
(the root `version` and `packages[""].version`).
Locally, `npm version <version> --no-git-tag-version` does the same.

When `publish-pr.yaml` has already set that version and run `npm update`,
leave `package.json` and `package-lock.json` as they are.

Check that `peerDependencies` ranges match the installed `devDependencies` versions;
a mismatch is **NEEDS HUMAN** (it needs its own commit before the release).

## 4. Write the CHANGELOG

Add a `== vX.Y.Z` section at the top of `CHANGELOG.adoc`, following the existing sections
and "CHANGELOG and MIGRATION_GUIDE phrasing" in `.agents/skills/update-dependency/references/decisions.md`:

- past tense, one bullet per dependency (``* Updated `x` to `1.2.3`:``),
  nested bullets per rule change, with rule links;
- API changes and notable configuration changes as their own bullets;
- only consumer-relevant changes (not pure infrastructure);
- two blank lines between versions.

Add any missing link attributes to the header of the file.

## 5. Write the migration guide (minor versions)

Add a `== From vA.B.0 to vX.Y.0` section at the top of `MIGRATION_GUIDE.adoc`:

- "_Disable and gradually enable new rules_" with an `eslint.config.js` example
  that sets every newly enabled rule to `'off'`, grouped by plugin;
- a step with before/after code for each API change.

For a patch version, change `MIGRATION_GUIDE.adoc` only when there is a migration.

## 6. Update the READMEs

Apply pending README changes that the commits since the last tag address
(setup, exports, optional plugins, and peer dependency ranges)
to both `README.adoc` and `README.md`, and keep the two in sync,
so that `main` matches the published package once the release pull request is merged.
Use semantic line breaks.
Leave a README as it is when nothing applies.

## 7. Update the roadmap

Remove the `ROADMAP.adoc` items this release delivered.
Leave the file unchanged when nothing in it was delivered.

## 8. Verify and commit

```bash
npm run lint
npm run lint:build
npm run test:build
npm run dist
```

Commit as `Publish vX.Y.Z` with only the changed files among `package.json`, `package-lock.json`,
`CHANGELOG.adoc`, `MIGRATION_GUIDE.adoc`, `README.adoc`, `README.md`, and `ROADMAP.adoc`.
The commit body lists the version and why it was chosen.
In the `Claude` workflow, commit through the signed-commit tool.

## 9. Open the release pull request

This section is the agent path: a local request, or the general `Claude` workflow.
`publish-pr.yaml` opens and fixes the pull request for a release issue, and this skill does not run there.

Open a pull request from the agent branch to `main` (not a draft):

```bash
gh pr create --base main --title 'Publish vX.Y.Z' --body '...'
```

The body:

- links the issue (`Closes #<number>`), when there is one;
- states the version and why it was chosen (minor or patch);
- summarizes the release: the dependency updates, rule changes, and API changes from the CHANGELOG section;
- lists the **NEEDS HUMAN** items (pending dependency updates, unclear version choice, missing information);
- lists the maintainer's next steps (below).

Add `help wanted` when there are **NEEDS HUMAN** items (see "The `help wanted` label" in `AGENTS.md`).
An agent that may not push or open pull requests (for example, a local Codex session)
commits on its branch and reports the same body instead.

Stop after opening the pull request. Do not tag, create a GitHub Release, or publish to npm.
The maintainer reviews the release pull request;
follow-up requests come with `@claude` on the pull request.

The maintainer's next steps:

1. Review the release pull request and wait for CI.
   When other pull requests merge into `main` first,
   update the branch and ask `@claude` on the pull request to add their changes to the release.
2. Squash-merge it with the title `Publish vX.Y.Z`.
3. Tag the merged commit on `main`: `git tag -s vX.Y.Z` and push the tag.
   `publish.yaml` publishes `@perfective/eslint-config` from that signed tag push
   (`npm publish --provenance ./dist`, dist-tag `latest`, `backport-X.Y`, or `next`).
4. Create the GitHub Release manually from the signed tag.
   The workflow does not create it.
