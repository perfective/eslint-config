import { Linter } from 'eslint';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

import { simpleImportSortImports } from './rules/imports';

export function simpleImportSortConfig(): Linter.Config {
    return {
        plugins: {
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
        rules: {
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': ['warn', simpleImportSortImports()],
        },
    };
}
