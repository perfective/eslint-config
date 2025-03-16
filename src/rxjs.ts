import { typescriptLanguageOptions } from './config/language-options';
import { rxjsConfig as rxjsPluginConfig } from './rules/rxjs';

/**
 * Configuration for eslint-plugin-rxjs-x.
 *
 * @param files - A list of globs with the files to lint.
 */
export function rxjsConfig(files: string[] = ['**/*.ts?(x)']): Record<string, unknown> {
    return {
        files,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            ...rxjsPluginConfig.plugins,
        },
        rules: {
            ...rxjsPluginConfig.rules,
        },
    };
}
