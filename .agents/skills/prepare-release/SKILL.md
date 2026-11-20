---
name: prepare-release
description: >-
    Prepare the `Publish vX.Y.Z` commit for @perfective/eslint-config
    (version bump, CHANGELOG.adoc, MIGRATION_GUIDE.adoc, README updates, ROADMAP.adoc)
    from the commits since the last release.
    Use only when the maintainer asks locally.
    On GitHub, a release issue runs publish-pr.yaml instead.
    It never tags, releases, or publishes.
---

# Prepare a release

Run this only on the maintainer's request, and only outside a GitHub release issue.
A GitHub release is an open issue titled `Release @perfective/eslint-config vX.Y.Z` with the `release` label.
Adding the `claude` label runs `.github/workflows/publish-pr.yaml`.
The general Claude workflow skips that issue, so do not run this skill on it.
Tagging, the GitHub Release, and `npm publish` stay with the maintainer.
The maintainer signs and pushes the tag, then creates the GitHub Release manually.
`publish.yaml` publishes the package after that tag is pushed. It does not create the release.

The result of a local run is one `Publish vX.Y.Z` commit on the agent branch.

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

Leave out CI, workflow, Renovate, and `AGENTS.md` changes.

## 2. Choose the version

While on `v0`:

- **minor** (`v0.X+1.0`) if anything can break a consumer's lint run or build:
  a newly enabled error rule, a stricter option, a peer dependency major or a new peer dependency,
  a changed or removed export, or a dropped Node.js/TypeScript version;
- **patch** (`v0.X.Y+1`) otherwise (fixes, warnings only fixable automatically, docs).

When the maintainer already named the version, use that version.
When unsure, choose minor and say why in the report.

## 3. Update the version and the lockfile

Skip this step when `package.json` is already at that version and `npm update` has already been run
(that is what `publish-pr.yaml` does before Claude starts). Do not change those two files further then.

Otherwise:

```bash
npm version <version> --no-git-tag-version
npm update
```

Check that `peerDependencies` ranges match the installed `devDependencies` versions.

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
to both `README.adoc` and `README.md`, and keep the two in sync.
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

## 9. Report the next steps

Stop after the commit. Do not tag, create a GitHub Release, or publish to npm. Report:

1. Push the branch and open a pull request (or let `publish-pr.yaml` do that from the release issue).
2. After CI passes, squash-merge the Publish PR.
3. `git tag -s vX.Y.Z` and push the tag.
4. Create the GitHub Release manually from that tag.
   `publish.yaml` does not create it.
5. `publish.yaml` publishes `@perfective/eslint-config` from the tag push
   (`npm publish --provenance ./dist`, dist-tag `latest`, `backport-X.Y`, or `next`).
