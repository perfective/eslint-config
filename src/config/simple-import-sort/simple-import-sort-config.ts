import { Linter } from 'eslint';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

import { ecmaFiles, Glob } from '../../linter/glob';

import { simpleImportSortImports } from './rules/imports';

export function simpleImportSortConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
        rules: {
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': ['warn', simpleImportSortImports()],
        },
    };
}
