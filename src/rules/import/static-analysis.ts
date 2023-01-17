export = {
    rules: {
        'import/default': 'error',
        'import/named': ['error', {
            // TODO: This setting is reported to cause issues,
            //  and it is not documented.
            // See https://github.com/import-js/eslint-plugin-import/pull/1222
            commonjs: false,
        }],
        'import/namespace': 'error',
        'import/no-absolute-path': 'error',
        'import/no-cycle': ['error', {
            ignoreExternal: true,
            allowUnsafeDynamicCyclicDependency: false,
        }],
        'import/no-dynamic-require': ['error', {
            esmodule: true,
        }],
        // TODO: Research usage
        'import/no-internal-modules': 'off',
        'import/no-relative-packages': 'warn',
        'import/no-relative-parent-imports': 'off',
        // TODO: Research usage
        'import/no-restricted-paths': 'off',
        'import/no-self-import': 'error',
        'import/no-unresolved': ['error', {
            caseSensitive: true,
            caseSensitiveStrict: true,
        }],
        'import/no-useless-path-segments': 'warn',
        'import/no-webpack-loader-syntax': 'error',
    },
};
