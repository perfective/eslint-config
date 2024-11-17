// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
import * as eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

import { simpleImportSortImports } from './rules/imports';

export const simpleImportSortConfig = {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
        'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': ['warn', simpleImportSortImports()],
    },
};
