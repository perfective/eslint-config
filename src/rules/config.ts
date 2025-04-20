import { Linter } from 'eslint';

import { configurationFiles, typescriptDeclarationFiles } from '../config/glob';

import { configurationImportNoExtraneousDependencies } from './import/rules/no-extraneous-dependencies';
import { stylisticJsConfig } from './stylistic/js';
import { stylisticJsxConfig } from './stylistic/jsx';
import { stylisticPlusConfig } from './stylistic/plus';
import { stylisticTsConfig } from './stylistic/ts';
import { arrayFuncConfig } from './array-func';
import { eslintConfig } from './eslint';
import { eslintCommentsConfig } from './eslint-comments';
import { importConfig, importJavascriptConfig, importTypescriptConfig } from './import';
import { jsdocConfig, jsdocJavascriptConfig } from './jsdoc';
import { nodeConfig } from './node';
import { preferArrowConfig } from './prefer-arrow';
import { promiseConfig } from './promise';
import { securityConfig } from './security';
import { simpleImportSortConfig } from './simple-import-sort';
import { typescriptEslintConfig } from './typescript-eslint';
import { unicornConfig } from './unicorn';

/**
 * An ESLint flat config or a function that returns one.
 */
export type LinterConfig = Linter.Config | (() => Linter.Config);

function linterConfig(config: LinterConfig): Linter.Config {
    if (typeof config === 'function') {
        return config();
    }
    return config;
}

/**
 * Returns an array of flat configs.
 */
export function perfectiveEslintConfig(configs: LinterConfig[] = []): Linter.Config[] {
    return [
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
