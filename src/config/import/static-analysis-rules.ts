import { Linter } from 'eslint';

export const staticAnalysisRules: Linter.RulesRecord = {
    'import-x/default': 'error',
    'import-x/named': ['error', {
        // TODO: This setting is reported to cause issues,
        //  and it is not documented.
        // See https://github.com/import-js/eslint-plugin-import/pull/1222
        commonjs: false,
    }],
    'import-x/namespace': 'error',
    'import-x/no-absolute-path': 'warn',
    'import-x/no-cycle': ['error', {
        ignoreExternal: true,
        allowUnsafeDynamicCyclicDependency: false,
    }],
    'import-x/no-dynamic-require': ['error', {
        esmodule: true,
    }],
    // TODO: Research usage
    'import-x/no-internal-modules': 'off',
    'import-x/no-relative-packages': 'warn',
    'import-x/no-relative-parent-imports': 'off',
    // TODO: Research usage
    'import-x/no-restricted-paths': 'off',
    'import-x/no-self-import': 'error',
    'import-x/no-unresolved': ['error', {
        caseSensitive: true,
        caseSensitiveStrict: true,
    }],
    'import-x/no-useless-path-segments': 'warn',
    'import-x/no-webpack-loader-syntax': 'error',
};
