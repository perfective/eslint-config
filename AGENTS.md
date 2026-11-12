# @perfective/eslint-config

Shareable ESLint flat config (ESM only, TypeScript-first) used by the `@perfective` packages.
This file is the agent/maintainer guide for this repository.

The package is published from `./dist` (`npm publish ./dist`), not from the repository root.
It is built with `@perfective/build` (`ts.build`) using `esmBuild` + `tsDeclarations` (ESLint is ESM-only).

## Commands

```bash
npm run dist          # Full build with gulp: clean, ESM build, .d.ts, dist/package.json with exports, docs
npm run lint          # Build, then eslint --fix and prettier --write (local use)
npm run lint:build    # Build, then strict checks: eslint --max-warnings 0, prettier --check (what CI runs)
npm test              # Jest (config from @perfective/build/jest)
npm run test:build    # Clear the Jest cache, then run with coverage (what CI runs)
npx jest src/linter/plugin.spec.ts          # Run a single spec file
npx jest -t 'optionalRule'                  # Run tests by name
```

- **The repo lints itself with its own build output.**
  `eslint.config.js` imports from `./dist/...`, so ESLint fails until `npm run dist` has run.
  That is why both `lint` scripts run `gulp` first.
- `test:build` enforces 100% coverage (statements, branches, functions, lines)
  through the shared Jest config.
- Prettier ignores all JS/TS files (see `.prettierignore`),
  so ESLint (`@stylistic`) does the code formatting.
- CI (`.github/workflows/ci.yaml`) runs `lint:build`, `test:build`, and `dist` on Node 20.x, 22.x, and 24.x.

### Verifying changes

After every change set, run:

```bash
npm run lint
```

Before considering work done, also run:

```bash
npm run lint:build
npm run test:build
npm run dist
```

## Architecture

- `src/index.ts`: the main entry point.
  It exports `perfectiveEslintConfig()` plus the helpers from `src/linter/`
  (file globs, `languageOptions`, `linterConfig`, `optionalRule`, `hasEslintPlugin`).
- `src/config/perfective-eslint-config.ts` builds the final flat-config array in this order:
  global language options and ignores,
  then the core `eslint` and `typescript-eslint` configs,
  then each required plugin config,
  then overrides for configuration files,
  then the user's configs
  (each a `Linter.Config` or a function that returns one, resolved by `linterConfig()`).
- Each plugin lives in `src/config/<plugin>/`:
    - `<plugin>-config.ts` is a function that returns a `Linter.Config` with `files`, `plugins`, and `rules`.
      Optional-plugin configs take a `files: Glob[]` parameter with a default value.
    - Large plugins split their rules into `*-rules.ts` files named after the upstream docs categories
      (for example `eslint/possible-problems-rules.ts`
      and `typescript-eslint/supported-rules.ts` / `extension-rules.ts`).
    - `rules/` holds exported functions that build options for configurable rules
      (for example `unicornPreventAbbreviations`, `typescriptEslintNamingConvention`,
      `importNoExtraneousDependencies`).
      These are the only parts with unit tests (`*.spec.ts` next to the source).
    - `index.adoc` documents every rule of the plugin in a table (`Rule | Recommended | Fixable | Config`).
      `src/config/index.adoc` gathers these into `src/index.adoc`,
      and gulp/asciidoctor renders it into the built docs.
    - `eslint-plugin-*.d.ts` are hand-written module declarations for plugins that ship no types.
- **Sub-path exports** (`@perfective/eslint-config/<name>`) exist for two reasons:
    - optional plugins (`cypress`, `jest`, `jest-dom`, `rxjs`, `testing-library`)
      must sit in separate entry points,
      so a missing optional peer dependency does not break the main import;
    - rule-option builders (`import`, `simple-import-sort`, `typescript-eslint`, `unicorn`)
      are exposed for user overrides.

    Adding a sub-path takes three changes:
    `src/config/<name>/index.ts`,
    the exports map in `gulpfile.js`,
    and a `perfectiveGulp.file.createJsonFile('./dist/<name>/package.json', ...)` entry there.
    An optional plugin also needs an entry in `peerDependenciesMeta`.

- Rules that need type information from another plugin should use `typescriptEslintDependentConfig()`
  (`src/config/typescript-eslint/typescript-eslint-config.ts`), as `jestTypescriptConfig()` does.
  `optionalRule()` turns a rule on only when its plugin is installed.

## Rule configuration conventions

- **Severity:** fixable rules are `'warn'`; rules that must be fixed by hand are `'error'`.
  When a plugin adds a fixer to a rule, the rule's severity changes to `'warn'`.
- Every rule a plugin provides is listed explicitly, in alphabetical order, including disabled rules.
  A disabled rule (`'off'`) usually has a comment explaining why
  (for example `// Deprecated since v57.0.0`, `// Requires ECMAScript 2023`, or `// Use import/no-duplicates.`).
- Any rule change must also update that plugin's `index.adoc` table.
- Public exports have JSDoc with an `@since vX.Y.Z` tag.

## Documentation

- All documentation uses [semantic line breaks](https://sembr.org/):
  break on sense boundaries; keep each line ≤ 120 characters
  (URLs and table cells that cannot wrap may exceed that alone).
- Consumer docs: `README.adoc` (canonical, full documentation) and a short `README.md` for npm.
  Do **not** edit them on feature/dependency commits.
  `main` on GitHub must stay consistent with the latest published package,
  so README changes belong only in the **Publish** commit
  (together with the version bump, `CHANGELOG.adoc`, and `MIGRATION_GUIDE.adoc`).
- Rule docs in `src/config/**/index.adoc` are part of the config change
  and are updated in the same commit as the rules.
- `AGENTS.md`: development process; update it with the work that changes it.
  It is not copied into `dist/`.

## Git and releases

- Do all work on the agent's own dev branch (for example `cursor` or `claude`);
  the maintainer rebases/cherry-picks as needed.
  Always commit completed work there.
  Never commit to `main`, force-push, tag, release, or `npm publish`.
- Backports only when needed: remote/local `vX.Y.x` branches (for example `v0.34.x`).
  CI also runs on those branches.
- Commit subjects are imperative and short; wrap rule and package names in backticks.
  The commit body lists each rule change,
  for example ``- Enable the `jest/no-error-equal` rule as an error.``
- Changelog: consumer-relevant changes only
  (rule changes, peer dependency bumps, new/changed exports; not pure infra).
- Package SemVer while on `v0`: bump **minor** for breaking changes
  (including newly enabled rules and peer dependency majors);
  **patch** for non-breaking.
- Maintainer release:
  `Publish vX.Y.Z` commit
  (version bump in `package.json`/`package-lock.json`,
  `== vX.Y.Z` section in `CHANGELOG.adoc`,
  for a minor version a `From vA.B.0 to vX.Y.0` section in `MIGRATION_GUIDE.adoc`,
  and any README updates)
  → wait for CI
  → signed annotated tag (`git tag -s vX.Y.Z` + push the tag)
  → create the GitHub Release manually
  (so `publish.yaml` receives a human `release` event;
  Actions-created releases with `GITHUB_TOKEN` do not trigger it).
  `publish.yaml` runs `npm publish ./dist` through an npm trusted publisher (OIDC).
  Prereleases are unused until ~v1.0 (the `next` npm tag remains wired for `prereleased` events).

### Dependency updates

One dependency change per commit.
Verbs follow the **dependency** SemVer:
`Patch X to vA.B.C` (patch), `Update X to vA.B.C` (minor), `Upgrade X to vA.B.C` (major).

Update dependencies in this order:

1. `eslint`
2. `typescript-eslint`
3. All other ESLint plugins, in alphabetical order
4. `@perfective/build` (`ts.build`)

`@perfective/build` comes last because a newer release can require a TypeScript version
that the installed `typescript-eslint` does not support.
When that happens, stop the `@perfective/build` update.
Update `typescript-eslint` in its own commit first, then the remaining plugins,
and only then update `@perfective/build`.
Do not combine those updates in one commit.

For each plugin update:

- Read the release notes (and security advisories) for every intervening version
  and map new, deprecated, and changed rules to this config.
- Enable new rules, disable deprecated ones (with a `// Deprecated since vX.Y.Z` comment),
  and adjust severities when fixers are added.
- Update `package.json` **and** `package-lock.json`.
  `devDependencies` are pinned to exact versions,
  while the matching `peerDependencies` use a range
  (`^`, or `~` for 0.x packages such as `eslint-plugin-rxjs-x`).
  Update both together.
- The commit usually touches `package.json`, `package-lock.json`, `<plugin>-config.ts`, and `index.adoc`.
