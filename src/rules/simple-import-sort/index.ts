import { simpleImportSortImports } from './rules/imports';

export = {
    plugins: [
        'simple-import-sort',
    ],
    rules: {
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': ['warn', simpleImportSortImports()],
    },
};
