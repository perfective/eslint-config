# Rule decisions: conventions distilled from the history

Use this guide to decide how a dependency update changes the configuration.
Look for precedent first: `git log --format='%h %s%n%b' -- src/config/<plugin>`
and `git log -S"'<rule>'" -- src` show how similar rules were handled.
When neither this guide nor the history settles a decision, report it as **NEEDS HUMAN**.

## New rules

The default is to **enable** a new rule.
Most update commits enable every new rule (for example `4e60c61`, `a526dfa`, `bee2308`).

- Severity follows fixability:
  `'warn'` when the rule has an autofix (`meta.fixable`),
  `'error'` when it does not (suggestions do not count as a fix).
  A rule whose fix covers only some cases is partially fixable and may be either;
  mark it `[partially fixable]` (instead of `[fixable]`) in `index.adoc`.
- A fixer counts only when it is active with the configured options.
  Some fixers are opt-in (`enableFixer` in `eslint-plugin-jsdoc`,
  `enableAutofixRemoval` in `@typescript-eslint/no-unused-vars`)
  or cover only part of what the rule reports.
  Check the rule's `meta.schema`, its defaults, and its docs before changing the severity.
  When `eslint --fix` would not fix what the rule reports with our options, keep `'error'`
  and add a `severity-convention` exception that says so (history: `@typescript-eslint/no-unused-vars` in `fae031c`).
- Write every option explicitly, including the options left at their default values,
  so the configuration shows the full behavior
  and a change in the plugin's defaults does not change the configuration silently.
- Start with the strictest value of every option,
  even when it is not the default or the value the plugin recommends.
  Relax an option only for a stated reason, in a comment above it
  (a conflict with another rule or convention, or a known false positive).
- Disable a new rule (`'off'` with a comment explaining why) when:
    - it duplicates a rule that is already enabled
      (`// Use unicorn/prefer-node-protocol instead.`, `// See max-params.`);
    - it conflicts with an enabled rule or a Perfective convention
      (`// Conflicts with func-style inside describe()`);
    - it needs a newer runtime than consumers can rely on
      (`// Requires ECMAScript 2023`, `// Requires a polyfill for older browsers.`);
    - it applies only to a framework this config does not target (`// React only`);
    - it is experimental or has a known bug (`// TODO: Enable once the rule is not experimental.`).
- A typescript-eslint **extension rule** replaces an ESLint core rule:
  in `extension-rules.ts`, turn the core rule `'off'`
  and configure the `@typescript-eslint/` rule like the core rule
  (history: "Enable `X` as a warning, disable `Y`").
- A rule that needs type information from another plugin goes into a config built with
  `typescriptEslintDependentConfig()` (see `jestTypescriptConfig()`).
- Keep the result coherent across plugins.
  When several plugins provide the same check
  (for example `array-func/prefer-flat` and `unicorn/prefer-array-flat`),
  enable one and point the others to it with a `// See: '<rule>'` or `// Use <rule>` comment.

## Changed rules

- A rule gained an autofix: change `'error'` to `'warn'`
  (history: "Change `X` to warning as a fixer is available"),
  unless the fixer is opt-in or partial (see "New rules").
- A rule lost its autofix: change `'warn'` to `'error'`.
- New options: set them explicitly, starting with the strictest value (see "New rules").
  A stricter value than the old behavior is a newly enabled check: list it in the commit body.
  The audit does not detect new options: compare the release notes and the `meta.schema` keys
  of every rule the update touches with its configured options.
- A renamed rule: rename the entry and its `index.adoc` row in the same commit (history: "Rename the `X` rule to `Y`").

## Deprecated rules

**Current policy:** a deprecated rule is turned off, and its replacement rule is turned on in its place,
so the configuration does not depend on rules that the plugin no longer maintains.

- Turn the deprecated rule `'off'`.
  Keep its entry until the plugin removes the rule (see "Removed rules").
- Add a comment above the rule: `// Deprecated since vX.Y.Z. Use <replacement>.`
  The audit checks that the comment exists.
  Take the version and the replacement from `meta.deprecated` (`deprecatedSince`, `replacedBy`) or the release notes.
  When they disagree, use the version that first shipped the deprecation (the release notes).
- A rule can be deprecated without `meta.deprecated`:
  some plugins only start `meta.docs.description` with `@deprecated`
  (for example `jsdoc/check-examples`), and `@typescript-eslint/no-deprecated` then reports its config key.
  Read the description and the rule docs before describing a deprecation;
  never call it a types-only deprecation without checking.
- Turn on the replacement rule with options aligned to the deprecated rule's configuration,
  so the same code is reported.
  The replacement is usually a new rule in the same update,
  or, for a typescript-eslint extension rule, the ESLint core rule:
  remove the core `'off'` entry from `extension-rules.ts` when the core rule is configured globally
  (history: `no-loop-func` and `no-restricted-imports` in `fae031c`).
  Follow the severity convention for the replacement (fixable rules are `'warn'`).
- When the deprecated rule has no replacement, turn it off,
  and read its docs and deprecation notice for a recommended alternative
  (for example, compiler options instead of `@typescript-eslint/typedef`).
  Name the alternative in the comment and the `index.adoc` note
  (`// Deprecated since vX.Y.Z. No replacement.` followed by `// Use <alternative> instead.`),
  and list the checks that are no longer enforced in the commit body, for the changelog.
- When the replacement cannot reproduce the deprecated rule's options
  or belongs to a plugin this config does not require, report it as **NEEDS HUMAN**.
- Mark the `index.adoc` row as deprecated
  (the `[deprecated]` note instead of the preset, the "Off" severity,
  and a `2+|` comment row with the replacement),
  and update the replacement's row.
- List both changes in the commit body,
  so the migration guide can tell consumers to move their overrides to the replacement rule.

Earlier commits also disabled deprecated rules ("Disable `X` as deprecated.", for example `f6affeb` in v0.33.0).
For a while (since `21327a5`), deprecated rules kept their configuration until the plugin removed them;
that practice is superseded, so do not follow those commits.

## Removed rules

When a plugin removes a rule, remove its entry from the config, its comment, and its `index.adoc` row.
For a removed typescript-eslint extension rule, remove the matching core `'off'` entry in `extension-rules.ts`
when the core rule is configured globally anyway.
List the removal in the commit body; it goes into the CHANGELOG at the next release.

## New or removed plugins and peer dependencies

- A new required plugin is a new `src/config/<plugin>/` directory and is added to `perfectiveEslintConfig()`.
- A new optional plugin gets its own sub-path export (see `AGENTS.md`), is listed in `peerDependenciesMeta`,
  and is added to `eslint.config.js` and to the rule audit (`src/config/perfective-eslint-config.spec.ts`).
- A peer dependency added, removed, or bumped by a major version needs maintainer approval (**NEEDS HUMAN**).

## Supported TypeScript and Node.js versions

- typescript-eslint releases state the supported TypeScript range.
  Do not update `typescript` beyond it.
  The CHANGELOG records "_Supports TypeScript vX.Y_" for such updates.
- Dropping a Node.js version is a maintainer decision (**NEEDS HUMAN**).

## Commit message

```text
Update eslint-plugin-jest to v29.12.1

- Enable the `jest/no-error-equal` rule as an error.
- Enable the `jest/prefer-to-have-been-called` rule as a warning.
- Change the `jest/<rule>` rule severity to a warning, as a fixer is now available.
- Disable the deprecated `jest/<rule>` rule (since v29.10.0; replaced by `jest/<other-rule>`).
- Enable the `jest/<other-rule>` rule as an error.
- Remove the `jest/<rule>` rule (removed in v29.12.0).
```

- The subject verb follows the dependency's SemVer level: `Patch` / `Update` / `Upgrade`.
- Every rule change is its own list item. Never group several rules in one item.
- A removed rule states the plugin version that removed it;
  a deprecated rule states the version that deprecated it and its replacement, when there is one.
- The subject has no backticks: `Patch eslint-plugin-array-func to v5.1.1`,
  not ``Patch `eslint-plugin-array-func` to v5.1.1``.
- In the body, wrap rule and package names in backticks.

Aligning a plugin configuration with the installed version without updating it
(for example, after finding drift with the rule audit) is one commit per plugin,
titled ``Align `<package>` rules with v<installed version>``,
with every change (new, deprecated, removed, renamed, and re-documented rules) as its own list item.

## CHANGELOG and MIGRATION_GUIDE phrasing (used by `prepare-release`)

`CHANGELOG.adoc` uses past tense, one bullet per dependency, with nested bullets per rule:

```asciidoc
* Updated `eslint-plugin-jest` to `29.12.1`:
** Enabled the `link:{eslint-jest-rules}/no-error-equal.md[jest/no-error-equal]` rule as an error.
** Changed the `link:{eslint-testing-library-rules}/await-async-queries.md[testing-library/await-async-queries]`
rule severity to a warning, as a fixer is now available.
+
* Upgraded `eslint-plugin-unicorn` to `62.0.0`.
```

Rule links use the attributes defined at the top of `CHANGELOG.adoc` (`{eslint-rules}`, `{ts-eslint-rules}`, ...).
Separate dependency bullets with a `+` line when they have nested bullets.

For a minor release, `MIGRATION_GUIDE.adoc` gets a `== From vA.B.0 to vX.Y.0` section.
The section has a "_Disable and gradually enable new rules_" step:
an `eslint.config.js` example that turns `'off'` every newly enabled rule, grouped by plugin with comments.
API changes get their own step with before/after code (see "From v0.33.0 to v0.34.0").
