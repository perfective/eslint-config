export = {
    rules: {
        'import/no-unresolved': ['error', {
            caseSensitive: true,
            caseSensitiveStrict: true,
        }],
        'import/named': ['error', {
            // TODO: This setting is reported to cause issues,
            //  and it is not documented.
            // See https://github.com/import-js/eslint-plugin-import/pull/1222
            commonjs: false,
        }],
        'import/default': 'error',
        'import/namespace': 'error',
        // TODO: Research usage
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': ['error', {
            esmodule: true,
        }],
        // TODO: Research usage
        'import/no-internal-modules': 'off',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': ['error', {
            ignoreExternal: true,
        }],
        'import/no-useless-path-segments': 'warn',
        'import/no-relative-parent-imports': 'off',
        'import/no-relative-packages': 'error',
    },
};
