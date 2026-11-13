import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { ESLint, Linter } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';

import { describe, expect, it } from '@jest/globals';

import { cypressConfig } from './cypress/cypress-config';
import { jestConfig } from './jest/jest-config';
import { jestTypescriptConfig } from './jest/jest-typescript-config';
import { jestDomConfig } from './jest-dom/jest-dom-config';
import { rxjsConfig } from './rxjs/rxjs-config';
import { testingLibraryConfig } from './testing-library/testing-library-config';
import { perfectiveEslintConfig } from './perfective-eslint-config';
import { ruleMetadata } from './rule-metadata.snapshot';

// Rule audit: checks that the configuration stays coherent with the installed plugins and the documentation.
//
// `rule-metadata.snapshot.ts` is a snapshot of the rules metadata of the ESLint core and all plugins.
// When a dependency update changes it, the audit fails and lists the changes to review.
// After the review, update the snapshot with `RULE_AUDIT_UPDATE=true npm test`.

type Severity = 'off' | 'warn' | 'error';

type Language = 'javascript' | 'typescript';

type Check = 'missing'
    | 'unknown'
    | 'deprecated-comment'
    | 'undocumented'
    | 'stale-doc'
    | 'doc-severity'
    | 'severity-convention'
    | 'metadata';

interface RuleAuditException {
    readonly rule: string;
    readonly check: Check;
    readonly reason: string;
}

interface RuleMeta {
    readonly deprecated?: unknown;
    readonly fixable?: string | undefined;
    readonly hasSuggestions?: boolean | undefined;
    readonly docs?: {
        readonly requiresTypeChecking?: boolean | undefined;
    } | undefined;
}

interface DocumentedRule {
    readonly file: string;
    readonly rule: string;
    readonly severity: Severity | null;
    readonly languages: Map<Language, Severity> | null;
    readonly fixable: string | null;
}

interface TableState {
    columns: string[];
    row: string[] | null;
    readonly rows: DocumentedRule[];
}

interface Audit {
    readonly pluginRules: Map<string, RuleMeta>;
    readonly configuredRules: Map<string, Set<Severity>>;
    readonly languageRules: Map<string, Map<Language, Set<Severity>>>;
    readonly documentedRules: Map<string, DocumentedRule>;
    readonly sources: string[][];
}

interface EffectiveRules {
    readonly rules: Map<string, Set<Severity>>;
    readonly languageRules: Map<string, Map<Language, Set<Severity>>>;
}

type MetadataSnapshot = Record<string, string[]>;

/**
 * Intended deviations from the audit checks. Each exception must have a reason.
 */
const ruleAuditExceptions: RuleAuditException[] = [
    {
        rule: '@typescript-eslint/consistent-type-assertions',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-confusing-non-null-assertion',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-duplicate-type-constituents',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-dynamic-delete',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-explicit-any',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-restricted-types',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-unnecessary-template-expression',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-unsafe-function-type',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: '@typescript-eslint/no-useless-default-assignment',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: '@typescript-eslint/non-nullable-type-assertion-style',
        check: 'severity-convention',
        reason: 'The autofix conflicts with @typescript-eslint/no-non-null-assertion.',
    },
    {
        rule: '@typescript-eslint/prefer-optional-chain',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: 'jest/no-focused-tests',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: 'jest/prefer-lowercase-title',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: 'jsdoc/multiline-blocks',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: 'jsdoc/no-multi-asterisks',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: 'jsdoc/require-description-complete-sentence',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: 'jsdoc/require-hyphen-before-param-description',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: 'prefer-arrow/prefer-arrow-functions',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
    {
        rule: 'promise/prefer-catch',
        check: 'severity-convention',
        reason: 'Pending review: not fixable, but kept as "warn" since before the audit.',
    },
    {
        rule: 'unicorn/prefer-switch',
        check: 'severity-convention',
        reason: 'Pending review: fixable, but kept as "error" since before the audit.',
    },
];

const configDirectory = 'src/config';
const metadataSnapshotFile = 'src/config/rule-metadata.snapshot.ts';

const metadataSnapshotHeader = `// Reviewed snapshot of the rules metadata of the ESLint core and all plugins.
// The rule audit (\`perfective-eslint-config.spec.ts\`) compares it with the installed plugins.
// After reviewing the changes, update it with \`RULE_AUDIT_UPDATE=true npm test\`.
// The update keeps the comments directly above a rule.
export type RuleFlag = 'deprecated' | 'fixable' | 'suggestions' | 'type-checking';

export const ruleMetadata: Record<string, RuleFlag[]> = {
`;

/**
 * Representative files used to resolve the effective configuration.
 * A rule may have different severities for different files (e.g. JavaScript and TypeScript).
 */
const representativeFiles = [
    'src/index.ts',
    'src/index.tsx',
    'src/index.js',
    'src/index.spec.ts',
    'src/index.spec.tsx',
    'src/index.spec.js',
    'cypress/e2e/index.cy.ts',
    'eslint.config.js',
];

const numericSeverities: Map<number, Severity> = new Map([
    [0, 'off'],
    [1, 'warn'],
    [2, 'error'],
]);

const documentedSeverities: Map<string, Severity> = new Map([
    ['error', 'error'],
    ['off', 'off'],
    ['warning', 'warn'],
]);

const languages: Language[] = ['javascript', 'typescript'];

/**
 * Patterns that capture the word before "for <language>" or "in <language>" in a Config cell.
 */
const languageSeverityPatterns: [Language, RegExp][] = [
    ['javascript', /\b(\w+)\s+(?:for|in)\s+javascript\b/iu],
    ['typescript', /\b(\w+)\s+(?:for|in)\s+typescript\b/iu],
];

const conventionalSeverities: Map<string, Severity[]> = new Map([
    ['no', ['error']],
    ['partially', ['warn', 'error']],
    ['yes', ['warn']],
]);

const violations = auditViolations();

describe(perfectiveEslintConfig, () => {
    it('returns the required configs when no additional configs are given', () => {
        expect(perfectiveEslintConfig()).toStrictEqual(perfectiveEslintConfig([]));
    });

    it('configures every available rule (except deprecated rules)', async () => {
        expect(unexpected('missing', await violations)).toStrictEqual([]);
    });

    it('configures only the rules that exist in the plugins', async () => {
        expect(unexpected('unknown', await violations)).toStrictEqual([]);
    });

    it('has a deprecation comment for every configured deprecated rule', async () => {
        expect(unexpected('deprecated-comment', await violations)).toStrictEqual([]);
    });

    it('documents every configured rule', async () => {
        expect(unexpected('undocumented', await violations)).toStrictEqual([]);
    });

    it('documents only the configured rules', async () => {
        expect(unexpected('stale-doc', await violations)).toStrictEqual([]);
    });

    it('documents the configured severity of every rule', async () => {
        expect(unexpected('doc-severity', await violations)).toStrictEqual([]);
    });

    it('configures fixable rules as warnings and other rules as errors', async () => {
        expect(unexpected('severity-convention', await violations)).toStrictEqual([]);
    });

    it('matches the reviewed snapshot of the rules metadata', async () => {
        expect(unexpected('metadata', await violations)).toStrictEqual([]);
    });

    it('has no exceptions for rules without violations', async () => {
        expect(unusedExceptions(await violations)).toStrictEqual([]);
    });
});

/**
 * Runs all audit checks and returns their violations.
 */
async function auditViolations(): Promise<Map<Check, string[]>> {
    const linterConfigs = perfectiveEslintConfig([
        cypressConfig,
        jestConfig,
        jestTypescriptConfig,
        jestDomConfig,
        rxjsConfig,
        testingLibraryConfig,
    ]);
    const effective = await effectiveRules(linterConfigs);
    const audit: Audit = {
        pluginRules: availableRules(linterConfigs),
        configuredRules: effective.rules,
        languageRules: effective.languageRules,
        documentedRules: documentation(configDirectory),
        sources: configSources(configDirectory),
    };
    return new Map<Check, string[]>([
        ['missing', missingRules(audit)],
        ['unknown', unknownRules(audit)],
        ['deprecated-comment', uncommentedDeprecatedRules(audit)],
        ['undocumented', undocumentedRules(audit)],
        ['stale-doc', staleDocumentedRules(audit)],
        ['doc-severity', documentedSeverityViolations(audit)],
        ['severity-convention', severityConventionViolations(audit)],
        ['metadata', metadataViolations(audit)],
    ]);
}

/**
 * Returns violations of a given check that are not listed as exceptions.
 */
function unexpected(check: Check, checks: Map<Check, string[]>): string[] {
    const excepted = new Set(ruleAuditExceptions
        .filter(exception => exception.check === check)
        .map(exception => exception.rule));
    return (checks.get(check) ?? []).filter(violation => !excepted.has(ruleOf(violation)));
}

/**
 * Returns exceptions that do not match any violation.
 */
function unusedExceptions(checks: Map<Check, string[]>): string[] {
    return ruleAuditExceptions
        .filter(exception => !(checks.get(exception.check) ?? []).map(ruleOf).includes(exception.rule))
        .map(exception => `${exception.rule}: remove the unused "${exception.check}" exception`);
}

/**
 * Returns the rule name of a violation message.
 */
function ruleOf(violation: string): string {
    return violation.split(':')[0];
}

/**
 * Returns non-deprecated rules of the plugins that are not configured.
 */
function missingRules(audit: Audit): string[] {
    return Array.from(audit.pluginRules.entries())
        .filter(([rule, meta]) => !isDeprecated(meta) && !audit.configuredRules.has(rule))
        .map(([rule]) => `${rule}: add it to the plugin config and its index.adoc table`);
}

/**
 * Returns configured rules that do not exist in the plugins.
 */
function unknownRules(audit: Audit): string[] {
    return Array.from(audit.configuredRules.keys())
        .filter(rule => !audit.pluginRules.has(rule))
        .map(rule => `${rule}: the rule does not exist; remove it from the config and index.adoc`);
}

/**
 * Returns configured deprecated rules without a deprecation comment.
 */
function uncommentedDeprecatedRules(audit: Audit): string[] {
    return Array.from(audit.configuredRules.keys())
        .filter(rule => isDeprecated(ruleMeta(audit, rule)))
        .filter(rule => !hasDeprecationComment(audit.sources, rule))
        .map(rule => `${rule}: add a "// Deprecated since vX.Y.Z" comment above the rule`);
}

/**
 * Returns configured rules that are not documented.
 */
function undocumentedRules(audit: Audit): string[] {
    return Array.from(audit.configuredRules.keys())
        .filter(rule => !audit.documentedRules.has(rule))
        .map(rule => `${rule}: add a row to the plugin index.adoc table`);
}

/**
 * Returns documented rules that are not configured.
 */
function staleDocumentedRules(audit: Audit): string[] {
    return Array.from(audit.documentedRules.values())
        .filter(documented => !audit.configuredRules.has(documented.rule))
        .map(documented => `${documented.rule}: ${documented.file} documents a rule that is not configured`);
}

/**
 * Returns rules whose documented severity differs from the configuration.
 * A cell that names TypeScript and JavaScript is checked against each language.
 */
function documentedSeverityViolations(audit: Audit): string[] {
    return Array.from(audit.documentedRules.values())
        .flatMap(documented => severityMismatches(audit, documented));
}

/**
 * Returns severity mismatches for a documented rule.
 */
function severityMismatches(audit: Audit, documented: DocumentedRule): string[] {
    if (documented.languages !== null) {
        return languageMismatches(audit, documented, documented.languages);
    }
    if (!hasDifferentSeverity(documented, audit.configuredRules.get(documented.rule))) {
        return [];
    }
    return [`${documented.rule}: configured as "${severitiesOf(audit, documented.rule)}", `
        + `but ${documented.file} says "${String(documented.severity)}"`];
}

/**
 * Returns mismatches between documented and configured severities for each language.
 */
function languageMismatches(
    audit: Audit,
    documented: DocumentedRule,
    expected: Map<Language, Severity>,
): string[] {
    return languages.flatMap(language => languageMismatch(audit, documented, language, expected.get(language)));
}

/**
 * Returns a mismatch for one language, or an empty list when the severity matches or is not documented.
 */
function languageMismatch(
    audit: Audit,
    documented: DocumentedRule,
    language: Language,
    expected: Severity | undefined,
): string[] {
    if (expected === undefined
        || hasLanguageSeverity(audit, documented.rule, language, expected)) {
        return [];
    }
    return [languageMismatchMessage(
        documented,
        language,
        expected,
        languageSeverities(audit, documented.rule, language),
    )];
}

/**
 * Returns true when every representative file of a language uses the expected severity.
 */
function hasLanguageSeverity(audit: Audit, rule: string, language: Language, expected: Severity): boolean {
    const actual = languageSeverities(audit, rule, language);
    return actual.size === 1 && actual.has(expected);
}

/**
 * Returns the severities configured for a rule in one language.
 */
function languageSeverities(audit: Audit, rule: string, language: Language): Set<Severity> {
    return audit.languageRules.get(rule)?.get(language) ?? new Set();
}

/**
 * Returns a message for a language severity mismatch.
 */
function languageMismatchMessage(
    documented: DocumentedRule,
    language: Language,
    expected: Severity,
    actual: Set<Severity>,
): string {
    return `${documented.rule}: configured as "${configuredSeverities(actual)}" for ${language}, `
        + `but ${documented.file} says "${expected}"`;
}

/**
 * Returns true if a documented severity is set and is not one of the configured severities.
 */
function hasDifferentSeverity(documented: DocumentedRule, severities: Set<Severity> | undefined): boolean {
    return documented.severity !== null && severities !== undefined && !severities.has(documented.severity);
}

/**
 * Returns rules with severities that do not follow the convention for their fixability.
 */
function severityConventionViolations(audit: Audit): string[] {
    return Array.from(audit.configuredRules.entries(), ([rule, severities]): [string, Severity[], string] => [
        rule,
        Array.from(severities).filter(level => level !== 'off'),
        fixability(audit, rule),
    ])
        .filter(([, levels, fixable]) => !levels.every(level => isConventionalSeverity(level, fixable)))
        .map(([rule, levels, fixable]) => `${rule}: configured as "${levels.join('", "')}", `
            + `but its fixability is "${fixable}"`);
}

/**
 * Returns differences between the reviewed and the current rules metadata.
 * Updates the reviewed snapshot instead when the `RULE_AUDIT_UPDATE` environment variable is "true".
 */
function metadataViolations(audit: Audit): string[] {
    const current = metadataSnapshot(audit.pluginRules);
    if (process.env['RULE_AUDIT_UPDATE'] === 'true') {
        const comments = snapshotComments(readFileSync(metadataSnapshotFile, 'utf8'));
        writeFileSync(metadataSnapshotFile, serializedSnapshot(current, comments));
        return [];
    }
    return metadataChanges(ruleMetadata, current);
}

/**
 * Returns rules of the ESLint core and of all plugins registered in the configs, with their metadata.
 */
function availableRules(linterConfigs: Linter.Config[]): Map<string, RuleMeta> {
    const rules: Map<string, RuleMeta> = new Map(Array.from(
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- The only API to read the core rules metadata.
        builtinRules.entries(),
        ([name, rule]): [string, RuleMeta] => [name, (rule.meta ?? {}) as RuleMeta],
    ));
    linterConfigs
        .flatMap(config => Object.entries(config.plugins ?? {}))
        .flatMap(([namespace, plugin]) => namespacedRules(namespace, plugin))
        .forEach(([name, meta]) => rules.set(name, meta));
    return rules;
}

/**
 * Returns rules of a given plugin with their metadata.
 */
function namespacedRules(namespace: string, plugin: ESLint.Plugin): [string, RuleMeta][] {
    return Object.entries(plugin.rules ?? {}).map(([name, rule]) => [
        `${namespace}/${name}`,
        (rule as { meta?: RuleMeta; }).meta ?? {},
    ]);
}

/**
 * Returns metadata of a given rule, or an empty object for an unknown rule.
 */
function ruleMeta(audit: Audit, rule: string): RuleMeta {
    return audit.pluginRules.get(rule) ?? {};
}

/**
 * Returns the effective severities of each configured rule across the representative files.
 * Keeps the severities for JavaScript and TypeScript files separate.
 */
async function effectiveRules(linterConfigs: Linter.Config[]): Promise<EffectiveRules> {
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: linterConfigs,
    });
    const fileConfigs = await Promise.all(representativeFiles.map(async file => ({
        file,
        config: await eslint.calculateConfigForFile(file) as Linter.Config,
    })));
    const rules: Map<string, Set<Severity>> = new Map();
    const languageRules: Map<string, Map<Language, Set<Severity>>> = new Map();
    fileConfigs.forEach(({ file, config }) => {
        recordFileRules(rules, languageRules, languageOf(file), config);
    });
    return {
        rules,
        languageRules,
    };
}

/**
 * Records the severities from one representative file.
 */
function recordFileRules(
    rules: Map<string, Set<Severity>>,
    languageRules: Map<string, Map<Language, Set<Severity>>>,
    language: Language,
    config: Linter.Config,
): void {
    Object.entries(config.rules ?? {}).forEach(([rule, setting]) => {
        recordRule(rules, languageRules, language, rule, severity(setting));
    });
}

/**
 * Records one rule severity for every file and for its language.
 */
function recordRule(
    rules: Map<string, Set<Severity>>,
    languageRules: Map<string, Map<Language, Set<Severity>>>,
    language: Language,
    rule: string,
    level: Severity,
): void {
    addSeverity(rules, rule, level);
    addSeverity(languageSeveritiesOf(languageRules, rule), language, level);
}

/**
 * Adds a severity to the set stored for a key.
 */
function addSeverity<Key>(groups: Map<Key, Set<Severity>>, key: Key, level: Severity): void {
    groups.set(key, (groups.get(key) ?? new Set()).add(level));
}

/**
 * Returns the severity sets of a rule for each language, creating the map when needed.
 */
function languageSeveritiesOf(
    languageRules: Map<string, Map<Language, Set<Severity>>>,
    rule: string,
): Map<Language, Set<Severity>> {
    const byLanguage = languageRules.get(rule) ?? new Map<Language, Set<Severity>>();
    languageRules.set(rule, byLanguage);
    return byLanguage;
}

/**
 * Returns `javascript` for a `.js` representative file and `typescript` for the others.
 */
function languageOf(file: string): Language {
    return file.endsWith('.js') ? 'javascript' : 'typescript';
}

/**
 * Returns a severity name of a given rule setting.
 */
function severity(setting: Linter.RuleEntry | undefined): Severity {
    const level: unknown = Array.isArray(setting) ? setting[0] : setting;
    return numericSeverities.get(Number(level)) ?? (level as Severity);
}

/**
 * Returns the configured severities of a given rule as a string.
 */
function severitiesOf(audit: Audit, rule: string): string {
    return configuredSeverities(audit.configuredRules.get(rule));
}

/**
 * Returns severities as a string, or an empty string when a rule has none.
 */
function configuredSeverities(severities: Set<Severity> | undefined): string {
    return Array.from(severities ?? []).join('", "');
}

/**
 * Parses rule tables from the `index.adoc` files of each plugin config.
 */
function documentation(directory: string): Map<string, DocumentedRule> {
    return new Map(pluginDirectories(directory)
        .map(plugin => join(directory, plugin, 'index.adoc'))
        .flatMap(file => tableRows(file, readFileSync(file, 'utf8')))
        .map(row => [row.rule, row]));
}

/**
 * Returns names of plugin config directories.
 */
function pluginDirectories(directory: string): string[] {
    return readdirSync(directory, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
}

/**
 * Parses the rule rows of AsciiDoc tables.
 *
 * Each row starts with a "| `link:...[rule]`" (or "| `rule`") line followed by one line per remaining column.
 * A cell continues on the following lines until the next cell.
 */
function tableRows(file: string, content: string): DocumentedRule[] {
    const state: TableState = {
        columns: [],
        row: null,
        rows: [],
    };
    content.split('\n').forEach(line => tableLine(file, state, line));
    completeRow(file, state);
    return state.rows;
}

/**
 * Updates the table parsing state with a given line.
 */
function tableLine(file: string, state: TableState, line: string): void {
    if (closesRow(line)) {
        completeRow(file, state);
        readHeader(state, line);
        return;
    }
    const started = ruleRow(line);
    if (started !== null) {
        completeRow(file, state);
        state.row = started;
        return;
    }
    extendRow(state, line);
}

/**
 * Returns true when a line ends the current row: a table boundary, a header, or a span.
 */
function closesRow(line: string): boolean {
    return line.startsWith('|===') || line.startsWith('| Rule |') || isSpan(line);
}

/**
 * Reads column names from a header line.
 */
function readHeader(state: TableState, line: string): void {
    if (!line.startsWith('| Rule |')) {
        return;
    }
    state.columns = line.split(' | ').map(column => column.replace(/^.*\[(.+)\]$/u, '$1'));
}

/**
 * Adds a cell or a continuation line to the current row.
 */
function extendRow(state: TableState, line: string): void {
    if (state.row === null) {
        return;
    }
    if (isTableCell(line)) {
        state.row.push(line.slice(1).trim());
        return;
    }
    continueCell(state.row, line);
}

/**
 * Records the current row when every column has been read.
 */
function completeRow(file: string, state: TableState): void {
    const row = state.row;
    if (row !== null && row.length === state.columns.length) {
        state.rows.push(documentedRow(file, row, state.columns));
    }
    state.row = null;
}

/**
 * Returns true when a line is an AsciiDoc span cell, such as `4+|`.
 */
function isSpan(line: string): boolean {
    return (/^\d+\+\|/u).test(line);
}

/**
 * Returns true when a line starts a table cell.
 */
function isTableCell(line: string): boolean {
    return (/^\|(?!===)/u).test(line);
}

/**
 * Appends a continuation line to the last cell of the current row.
 */
function continueCell(row: string[], line: string): void {
    const text = continuedText(row, line);
    if (text === null) {
        return;
    }
    const cell = row.pop() ?? '';
    row.push(`${cell} ${text}`);
}

/**
 * Returns the continuation text when it belongs to the current cell.
 */
function continuedText(row: string[], line: string): string | null {
    const text = line.trim();
    if (text === '' || row.length < 2) {
        return null;
    }
    return text;
}

/**
 * Starts a new row if a given line is the first cell of a rule row.
 */
function ruleRow(line: string): string[] | null {
    const match = (/^\| `link:.*\[([^\]]+)\]`$/u).exec(line) ?? (/^\| `([^`]+)`$/u).exec(line);
    return match === null ? null : match.slice(1, 2);
}

/**
 * Returns the documented rule properties of a given table row.
 */
function documentedRow(file: string, cells: string[], columns: string[]): DocumentedRule {
    const cell = cells.slice(-1).join('');
    const cellLanguages = documentedLanguageSeverities(cell);
    return {
        file,
        rule: cells[0],
        severity: cellLanguages === null ? documentedSeverity(cell) : null,
        languages: cellLanguages,
        fixable: documentedFixable(cells, columns.indexOf('Fixable')),
    };
}

/**
 * Returns the severities a cell states for TypeScript and JavaScript,
 * or `null` when the cell states one severity.
 */
function documentedLanguageSeverities(cell: string): Map<Language, Severity> | null {
    const severities = new Map(languageSeverityPatterns
        .flatMap(([language, pattern]) => languageSeverity(cell, language, pattern)));
    return severities.size === 0 ? null : severities;
}

/**
 * Returns the severity a cell states for a given language (e.g. "Off in TypeScript"),
 * or an empty list when the cell states none.
 */
function languageSeverity(cell: string, language: Language, pattern: RegExp): [Language, Severity][] {
    const level = documentedSeverities.get(matchedWord(cell, pattern).toLowerCase());
    return level === undefined ? [] : [[language, level]];
}

/**
 * Returns the word captured by a given pattern in a cell, or an empty string when the pattern does not match.
 */
function matchedWord(cell: string, pattern: RegExp): string {
    return pattern.exec(cell)?.[1] ?? '';
}

/**
 * Returns a severity name of a documented severity,
 * or `null` when the first word is not a severity.
 */
function documentedSeverity(cell: string): Severity | null {
    return documentedSeverities.get(severityWord(cell)) ?? null;
}

/**
 * Returns the first word of a severity cell, with punctuation removed.
 */
function severityWord(cell: string): string {
    return (cell.split(/\s/u)[0] ?? '').toLowerCase().replace(/[^a-z]/gu, '');
}

/**
 * Returns a normalized documented fixability, where "no" stands for an empty cell,
 * or `null` when the table has no "Fixable" column.
 */
function documentedFixable(cells: string[], index: number): string | null {
    if (index === -1) {
        return null;
    }
    const cell = cells.slice(index, index + 1).join('');
    return cell === '' ? 'no' : cell.toLowerCase();
}

/**
 * Returns true if a given rule metadata has the deprecated flag.
 */
function isDeprecated(meta: RuleMeta): boolean {
    return Boolean(meta.deprecated);
}

/**
 * Returns true if a given rule metadata declares an autofix.
 */
function isFixable(meta: RuleMeta): boolean {
    return ['code', 'whitespace'].includes(String(meta.fixable));
}

/**
 * Returns fixability of a given rule.
 *
 * Uses the documented fixability when available, as it records the maintainer's judgment,
 * and the plugin metadata otherwise.
 */
function fixability(audit: Audit, rule: string): string {
    return audit.documentedRules.get(rule)?.fixable ?? metadataFixability(ruleMeta(audit, rule));
}

/**
 * Returns "yes" if a given rule metadata declares an autofix, and "no" otherwise.
 */
function metadataFixability(meta: RuleMeta): string {
    return isFixable(meta) ? 'yes' : 'no';
}

/**
 * Returns true if a given severity follows the convention for a given fixability.
 */
function isConventionalSeverity(level: Severity, fixable: string): boolean {
    return (conventionalSeverities.get(fixable) ?? ['warn', 'error']).includes(level);
}

/**
 * Reads TypeScript sources of the plugin configs to check comments next to rules.
 */
function configSources(directory: string): string[][] {
    return pluginDirectories(directory)
        .flatMap(plugin => sourceFiles(join(directory, plugin)))
        .map(file => readFileSync(file, 'utf8').split('\n'));
}

/**
 * Returns TypeScript source files (except specs) in a given directory.
 */
function sourceFiles(directory: string): string[] {
    return readdirSync(directory, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.spec.ts'))
        .map(entry => join(directory, entry.name));
}

/**
 * Returns true if a given rule is preceded by a comment that mentions deprecation in any config source.
 */
function hasDeprecationComment(sources: string[][], rule: string): boolean {
    return sources.some(lines => lines
        .map((line, index): [string, number] => [line, index])
        .filter(([line]) => line.trimStart().startsWith(`'${rule}':`))
        .some(([, index]) => (/deprecated/iu).test(precedingComments(lines, index))));
}

/**
 * Returns the comment lines directly above a given line.
 */
function precedingComments(lines: string[], index: number): string {
    const above = lines.slice(0, index).reverse();
    const end = above.findIndex(line => !line.trimStart().startsWith('//'));
    return above.slice(0, end === -1 ? above.length : end).reverse()
        .join('\n');
}

/**
 * Returns the reviewable part of the rules metadata as a list of flags.
 * The ESLint core rules go first, then the rules of each plugin, sorted by name.
 */
function metadataSnapshot(rules: Map<string, RuleMeta>): MetadataSnapshot {
    return Object.fromEntries(Array.from(rules.entries())
        .sort(([a], [b]) => (snapshotOrder(a) < snapshotOrder(b) ? -1 : 1))
        .map(([rule, meta]) => [rule, metadataFlags(meta)]));
}

/**
 * Returns the sort key of a given rule in the snapshot: the ESLint core rules first, then by plugin and rule name.
 */
function snapshotOrder(rule: string): string {
    const plugin = rulePlugin(rule);
    return `${plugin === '' ? '0' : '1'}\u0000${plugin}\u0000${rule}`;
}

/**
 * Returns the plugin namespace of a given rule, or an empty string for an ESLint core rule.
 */
function rulePlugin(rule: string): string {
    return rule.includes('/') ? rule.slice(0, rule.lastIndexOf('/')) : '';
}

/**
 * Returns the reviewable flags of a given rule metadata.
 */
function metadataFlags(meta: RuleMeta): string[] {
    const flags: [boolean, string][] = [
        [isDeprecated(meta), 'deprecated'],
        [isFixable(meta), 'fixable'],
        [meta.hasSuggestions === true, 'suggestions'],
        [meta.docs?.requiresTypeChecking === true, 'type-checking'],
    ];
    return flags.filter(([enabled]) => enabled).map(([, flag]) => flag);
}

/**
 * Serializes the snapshot as a TypeScript module with one rule per line to keep the diffs reviewable.
 * Separates the ESLint core and each plugin with an empty line and keeps the given comments above their rules.
 */
function serializedSnapshot(snapshot: MetadataSnapshot, comments: Map<string, string>): string {
    const groups: Map<string, string[]> = new Map();
    Object.entries(snapshot).forEach(([rule, flags]) => {
        const lines = groups.get(rulePlugin(rule)) ?? [];
        groups.set(rulePlugin(rule), [...lines, ...snapshotLines(rule, flags, comments.get(rule))]);
    });
    const body = Array.from(groups.values(), lines => lines.join('\n')).join('\n\n');
    return `${metadataSnapshotHeader}${body}\n};\n`;
}

/**
 * Returns the snapshot lines of a given rule, preceded by its comment if any.
 */
function snapshotLines(rule: string, flags: string[], comment: string | undefined): string[] {
    const line = `    '${rule}': [${flags.map(flag => `'${flag}'`).join(', ')}],`;
    return comment === undefined ? [line] : [comment, line];
}

/**
 * Returns the comments directly above each rule of a given snapshot source.
 */
function snapshotComments(source: string): Map<string, string> {
    const lines = source.split('\n');
    return new Map(lines
        .map((line, index): [string | null, string] => [snapshotRule(line), precedingComments(lines, index)])
        .filter((entry): entry is [string, string] => entry[0] !== null && entry[1] !== ''));
}

/**
 * Returns the rule name of a given snapshot line, or `null` when the line has no rule.
 */
function snapshotRule(line: string): string | null {
    const trimmed = line.trimStart();
    return trimmed.startsWith('\'') ? (trimmed.split('\'')[1] ?? null) : null;
}

/**
 * Returns a list of differences between the reviewed and the current metadata snapshots.
 */
function metadataChanges(reviewed: MetadataSnapshot, current: MetadataSnapshot): string[] {
    const reviewedRules = new Map(Object.entries(reviewed));
    const currentRules = new Map(Object.entries(current));
    return [
        ...Array.from(currentRules.entries(), ([rule, flags]) => metadataChange(rule, reviewedRules.get(rule), flags))
            .filter(change => change !== null),
        ...Array.from(reviewedRules.keys())
            .filter(rule => !currentRules.has(rule))
            .map(rule => `${rule}: removed from the plugin`),
    ];
}

/**
 * Returns a description of a rule metadata change, or `null` when there is no change.
 */
function metadataChange(rule: string, reviewed: string[] | undefined, current: string[]): string | null {
    if (reviewed === undefined) {
        return `${rule}: new rule [${current.join(', ')}]`;
    }
    if (reviewed.join(',') === current.join(',')) {
        return null;
    }
    return `${rule}: changed from [${reviewed.join(', ')}] to [${current.join(', ')}]`;
}
