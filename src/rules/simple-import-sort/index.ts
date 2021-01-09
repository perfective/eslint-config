import { simpleImportSortImports } from './rules/imports';

export = {
    rules: {
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': ['warn', simpleImportSortImports()],
    },
};
