import { Linter } from 'eslint';

import { typescriptDeclarationFiles } from './config/glob';
import { arrayFuncConfig } from './rules/array-func';
import { eslintConfig } from './rules/eslint';
import { eslintCommentsConfig } from './rules/eslint-comments';
import { importConfig, importJavascriptConfig, importTypescriptConfig } from './rules/import';
import { jsdocConfig, jsdocJavascriptConfig } from './rules/jsdoc';
import { nConfig } from './rules/n';
import { preferArrowConfig } from './rules/prefer-arrow';
import { promiseConfig } from './rules/promise';
import { securityConfig } from './rules/security';
import { simpleImportSortConfig } from './rules/simple-import-sort';
import { stylisticJsConfig } from './rules/stylistic/js';
import { stylisticJsxConfig } from './rules/stylistic/jsx';
import { stylisticPlusConfig } from './rules/stylistic/plus';
import { stylisticTsConfig } from './rules/stylistic/ts';
import { typescriptEslintConfig } from './rules/typescript-eslint';
import { unicornConfig } from './rules/unicorn';

/**
 * Returns an array with the flat configs.
 */
export function perfectiveConfig(): Linter.Config[] {
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
