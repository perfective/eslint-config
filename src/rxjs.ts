// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint parser used only during development
import { parser } from 'typescript-eslint';

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
            sourceType: 'module',
            ecmaVersion: 'latest',
            parser,
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                projectService: true,
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
