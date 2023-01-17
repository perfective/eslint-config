import { importNoExtraneousDependencies } from './rules/no-extraneous-dependencies';

export = {
    rules: {
        'import/export': 'error',
        'import/no-empty-named-blocks': 'warn',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': ['error', importNoExtraneousDependencies()],
        'import/no-mutable-exports': 'error',
        'import/no-unused-modules': 'error',
    },
};
