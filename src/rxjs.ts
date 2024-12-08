// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint parser used only during development
import * as tsEslint from 'typescript-eslint';

import { rxjsConfig as rxjsPluginConfig } from './rules/rxjs';

/**
 * Configuration for @smarttools/eslint-plugin-rxjs.
 *
 * @param files - A list of globs with the files to lint.
 */
export function rxjsConfig(files: string[] = ['**/*.ts?(x)']): Record<string, unknown> {
    return {
        files,
        languageOptions: {
            parser: tsEslint.parser,
            parserOptions: {
                // Parser options have to be duplicated when the parser is overridden
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                // TypeScript ESLint Parser
                project: './tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        plugins: {
            ...rxjsPluginConfig.plugins,
        },
        rules: {
            ...rxjsPluginConfig.rules,
        },
    };
}
