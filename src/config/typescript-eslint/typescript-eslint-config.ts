import { ESLint, Linter } from 'eslint';
import { plugin as typescriptEslintPlugin } from 'typescript-eslint';

import { Glob, typescriptFiles } from '../../linter/glob';
import { typescriptLanguageOptions } from '../../linter/language-options';

import { extensionRules } from './extension-rules';
import { supportedRules } from './supported-rules';

export function typescriptEslintConfig(): Linter.Config {
    return {
        files: typescriptFiles,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
        },
        rules: {
            ...supportedRules,
            ...extensionRules,
        },
    };
}

/**
 * A function to create a flat config for given `plugins` that require TypeScript ESLint plugin.
 *
 * This function should be used by other plugin configurations to enable rules that require type information
 * or to change the behavior of the `@typescript-eslint` plugin rules.
 *
 * @param plugins - ESLint plugins with the rules, keyed by their namespace (e.g. `{ jest: eslintPluginJest }`).
 * @param rules - Rules for the plugins or for the `@typescript-eslint` plugin.
 * @param files - An optional list of globs to narrow down the applicable files.
 *
 * @since v0.34.0
 */
export function typescriptEslintDependentConfig(
    plugins: Record<string, ESLint.Plugin>,
    rules: Linter.RulesRecord,
    files: Glob[] = typescriptFiles,
): Linter.Config {
    return {
        files,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            ...plugins,
        },
        rules,
    };
}
