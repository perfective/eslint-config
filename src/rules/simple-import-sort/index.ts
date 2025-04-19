import { Linter } from 'eslint';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { languageOptions } from '../../config/language-options';

import { simpleImportSortImports } from './rules/imports';

export function simpleImportSortConfig(): Linter.Config {
    return {
        files: [
            ...javascriptFiles,
            ...typescriptFiles,
        ],
        languageOptions: languageOptions(),
        plugins: {
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
        rules: {
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': ['warn', simpleImportSortImports()],
        },
    };
}
