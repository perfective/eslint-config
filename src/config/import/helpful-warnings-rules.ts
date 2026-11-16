import { Linter } from 'eslint';

import { importNoExtraneousDependencies } from './rules/no-extraneous-dependencies';

export const helpfulWarningsRules: Linter.RulesRecord = {
    'import-x/export': 'error',
    // Use @typescript-eslint/no-deprecated instead.
    'import-x/no-deprecated': 'off',
    'import-x/no-empty-named-blocks': 'warn',
    'import-x/no-extraneous-dependencies': ['error', importNoExtraneousDependencies()],
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'error',
    // Conflicts with naming default imports after their package (for example, `eslintPluginStylistic`).
    'import-x/no-rename-default': ['off', {
        commonjs: true,
        preventRenamingBindings: true,
    }],
    'import-x/no-unused-modules': 'error',
};
