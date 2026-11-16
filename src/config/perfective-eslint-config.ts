import { Linter } from 'eslint';

import { configurationFiles, ecmaFiles, typescriptDeclarationFiles } from '../linter/glob';
import { languageOptions } from '../linter/language-options';
import { LinterConfig, linterConfig } from '../linter/linter-config';

import { arrayFuncConfig } from './array-func/array-func-config';
import { eslintConfig } from './eslint/eslint-config';
import { eslintCommentsConfig } from './eslint-comments/eslint-comments-config';
import { importConfig, importJavascriptConfig, importTypescriptConfig } from './import/import-config';
import { importNoExtraneousDependencies } from './import/index';
import { jsdocConfig, jsdocJavascriptConfig } from './jsdoc/jsdoc-config';
import { nodeConfig } from './node/node-config';
import { preferArrowConfig } from './prefer-arrow/prefer-arrow-config';
import { promiseConfig } from './promise/promise-config';
import { securityConfig } from './security/security-config';
import { simpleImportSortConfig } from './simple-import-sort/simple-import-sort-config';
import { stylisticConfig } from './stylistic/stylistic-config';
import { typescriptEslintConfig } from './typescript-eslint/typescript-eslint-config';
import { unicornConfig } from './unicorn/unicorn-config';

/**
 * Returns an array of flat configs.
 */
export function perfectiveEslintConfig(configs: LinterConfig[] = []): Linter.Config[] {
    return [
        {
            files: ecmaFiles,
            languageOptions: languageOptions(),
        },
        linterOptionsConfig(),
        {
            ignores: [
                '**/dist',
                typescriptDeclarationFiles,
            ],
        },
        eslintConfig(),
        typescriptEslintConfig(),
        // Plugins
        arrayFuncConfig(),
        eslintCommentsConfig(),
        importConfig(),
        importJavascriptConfig(),
        importTypescriptConfig(),
        jsdocConfig(),
        jsdocJavascriptConfig(),
        nodeConfig(),
        preferArrowConfig(),
        promiseConfig(),
        securityConfig(),
        simpleImportSortConfig(),
        stylisticConfig(),
        unicornConfig(),
        // Overrides
        configurationFilesConfig(),
    ].concat(configs.map(linterConfig));
}

/**
 * Linter options for all files.
 */
function linterOptionsConfig(): Linter.Config {
    return {
        linterOptions: {
            // Replaces the deprecated eslint-comments/no-unused-disable rule.
            // ESLint fixes unused disable directives, so they are reported as warnings.
            reportUnusedDisableDirectives: 'warn',
        },
    };
}

/**
 * Rule overrides for configuration files.
 */
function configurationFilesConfig(): Linter.Config {
    return {
        files: configurationFiles,
        rules: {
            'import-x/extensions': ['error', 'ignorePackages'],
            'import-x/no-default-export': ['off'],
            'import-x/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
                devDependencies: configurationFiles,
            })],
            'n/no-unpublished-import': ['error', {
                allowModules: ['gulp', '@perfective/build'],
                convertPath: {
                    'dist/**/*.js': ['^dist/(.+)?\\.js$', '$1.js'],
                },
            }],
        },
    };
}
