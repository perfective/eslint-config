# Source and rule audit guide

Follow the repository-root `AGENTS.md` for policy, verification, and commits.
This guide records implementation details to check when changing `src/`.

## Configuration composition

- `config/perfective-eslint-config.ts` appends consumer configs last, so they can override earlier rules.
  Preserve the ordering of base rules, TypeScript extensions, plugin configs, and file-specific overrides.
- `linter/glob.ts` defines the shared file patterns.
  The default language options and required plugin rules apply to `ecmaFiles`;
  the ignores-only object remains global and ignores `dist` directories and TypeScript declarations.
  Global linter options report unused disable directives as warnings.
- `linter/language-options.ts` uses the TypeScript parser and project service.
  Its general configuration allows root JavaScript config files through `allowDefaultProject`;
  the TypeScript-only configuration uses `projectService: true`.
  `javascriptLanguageOptions()` does not set or clear a parser already supplied by another config.
- `config/import/import-config.ts` supplies separate JavaScript and TypeScript overrides.
  The TypeScript resolver uses `./tsconfig.json` relative to the consumer's working directory.
- `config/jest/jest-typescript-config.ts` demonstrates a plugin requiring type information:
  use `typescriptEslintDependentConfig()` to register both plugins and the parser for the relevant globs.

## Optional plugins and public API

- Keep optional plugin imports in their sub-path entry points, outside `src/index.ts` and the main config's imports.
  The repository installs all optional plugins for its own lint and audit runs;
  a passing local import alone does not prove that the main entry point works without them.
- `linter/node.ts` resolves packages through `createRequire()` rooted at `process.cwd()`.
  Availability means resolvable, including hoisted or transitive packages, not necessarily a direct dependency.
- `optionalRule()` returns a setting or an empty object.
  It does not import or register a plugin, verify that a rule exists, or support core rules.
  `hasEslintPlugin()` maps unscoped names to `eslint-plugin-<name>`
  and scoped names to `<scope>/eslint-plugin`; check this mapping before using it for another naming scheme.
- Check both the source entry points and `gulpfile.js` when changing exports.
  The build excludes `*.spec.ts` and `*.snapshot.ts` through `tsconfig.build.json`.
  Build output and declarations must be regenerated, never patched by hand.
- A package that both the source and its specs import, and that consumers do not configure themselves,
  is a regular `dependency` with a `^` range, not a peer dependency
  (for example, `globals` in `linter/language-options.ts`).
  Renovate's `rangeStrategy: bump` updates it without a package rule.

## Working with the rule audit

Run the focused audit from the repository root:

```bash
npm test -- src/config/perfective-eslint-config.spec.ts
```

- `config/perfective-eslint-config.spec.ts` composes the main config with all optional configs.
  It uses `ESLint.calculateConfigForFile()` to inspect effective severities for representative source,
  TSX, Jest, Cypress, and tool configuration paths, rather than simply merging all rule objects.
  When introducing a new file scope, check whether `representativeFiles` exercises it.
- The audit reads rule tables from each plugin's `index.adoc` and deprecation comments from configuration sources.
  Update the rule settings and their documentation together.
  Each table has two columns (`Rule | Config`); the Config cell can distinguish JavaScript and TypeScript severities.
  Fixability comes from the plugin metadata; a partially fixable rule needs a `severity-convention` exception.
- The metadata snapshot tracks rule presence and the flags `deprecated`, `fixable`, `suggestions`,
  and `type-checking`.
  It does not capture option schemas, default changes, or rule behavior;
  passing the audit does not replace the release-note review required by the dependency skill.
- Update the snapshot only after reviewing the changes:

    ```bash
    RULE_AUDIT_UPDATE=true npm test -- src/config/perfective-eslint-config.spec.ts
    ```

    The updater preserves comments immediately above rule entries.
    Review its diff and rerun without `RULE_AUDIT_UPDATE` to verify the saved baseline.

- Use `ruleAuditExceptions` only for a deliberate deviation with a specific reason.
  The audit fails for stale exceptions as well as unexpected violations.
  Check existing exceptions before treating an observed rule setting as a new policy precedent.

Tests also cover `linter/`, rule-option builders, and the TypeScript-dependent config helper.
Use colocated Jest specs and the npm scripts; complete the root guide's full verification before committing.

- Each `it()` checks one behavior, and its name states that behavior.
  Split a test that checks independent behaviors into one test per behavior,
  for example `defines browser globals` and `defines Node.js ES modules globals`,
  not one `defines browser and Node.js ES module globals` test.
