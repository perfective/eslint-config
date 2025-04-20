import { Linter } from 'eslint';

import { typescriptDeclarationFiles } from '../config/glob';

import { stylisticJsConfig } from './stylistic/js';
import { stylisticJsxConfig } from './stylistic/jsx';
import { stylisticPlusConfig } from './stylistic/plus';
import { stylisticTsConfig } from './stylistic/ts';
import { arrayFuncConfig } from './array-func';
import { eslintConfig } from './eslint';
import { eslintCommentsConfig } from './eslint-comments';
import { importConfig, importJavascriptConfig, importTypescriptConfig } from './import';
import { jsdocConfig, jsdocJavascriptConfig } from './jsdoc';
import { nConfig } from './n';
import { preferArrowConfig } from './prefer-arrow';
import { promiseConfig } from './promise';
import { securityConfig } from './security';
import { simpleImportSortConfig } from './simple-import-sort';
import { typescriptEslintConfig } from './typescript-eslint';
import { unicornConfig } from './unicorn';

/**
 * Returns an array of flat configs.
 */
export function perfectiveEslintConfig(): Linter.Config[] {
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
        nConfig(),
        preferArrowConfig(),
        promiseConfig(),
        securityConfig(),
        simpleImportSortConfig(),
        stylisticJsConfig(),
        stylisticJsxConfig(),
        stylisticPlusConfig(),
        stylisticTsConfig(),
        unicornConfig(),
    ];
}
