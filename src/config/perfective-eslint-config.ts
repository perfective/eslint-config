import { Linter } from 'eslint';

import { configurationFiles, typescriptDeclarationFiles } from '../linter/glob';
import { languageOptions } from '../linter/language-options';
import { LinterConfig, linterConfig } from '../linter/linter-config';

import { arrayFuncConfig } from './array-func/array-func-config';
import { eslintConfig } from './eslint/eslint-config';
import { eslintCommentsConfig } from './eslint-comments/eslint-comments-config';
import { importConfig, importJavascriptConfig, importTypescriptConfig } from './import/import-config';
import { configurationImportNoExtraneousDependencies } from './import/rules/no-extraneous-dependencies';
import { jsdocConfig, jsdocJavascriptConfig } from './jsdoc/jsdoc-config';
import { nodeConfig } from './node/node-config';
import { preferArrowConfig } from './prefer-arrow/prefer-arrow-config';
import { promiseConfig } from './promise/promise-config';
import { securityConfig } from './security/security-config';
import { simpleImportSortConfig } from './simple-import-sort/simple-import-sort-config';
import { stylisticJsConfig } from './stylistic/js/stylistic-js-config';
import { stylisticJsxConfig } from './stylistic/jsx/stylistic-jsx-config';
import { stylisticPlusConfig } from './stylistic/plus/stylistic-plus-config';
import { stylisticTsConfig } from './stylistic/ts/stylistic-ts-config';
import { typescriptEslintConfig } from './typescript-eslint/typescript-eslint-config';
import { unicornConfig } from './unicorn/unicorn-config';

/**
 * Returns an array of flat configs.
 */
export function perfectiveEslintConfig(configs: LinterConfig[] = []): Linter.Config[] {
    return [
        {
            languageOptions: languageOptions(),
        },
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
        stylisticJsConfig(),
        stylisticJsxConfig(),
        stylisticPlusConfig(),
        stylisticTsConfig(),
        unicornConfig(),
        // Overrides
        configurationFilesConfig(),
    ].concat(configs.map(linterConfig));
}

/**
 * Rules overrides for configuration files.
 */
function configurationFilesConfig(): Linter.Config {
    return {
        files: configurationFiles,
        rules: {
            'import/extensions': ['error', 'ignorePackages'],
            'import/no-default-export': ['off'],
            'import/no-extraneous-dependencies': ['error', configurationImportNoExtraneousDependencies()],
            'n/no-unpublished-import': ['error', {
                allowModules: ['gulp', '@perfective/build'],
                convertPath: {
                    'dist/**/*.js': ['^dist/(.+)?\\.js$', '$1.js'],
                },
            }],
        },
    };
}
