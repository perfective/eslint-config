export = {
    rules: {
        'node/handle-callback-err': 'off',
        'node/no-callback-literal': 'off',
        'node/no-exports-assign': 'off',
        // Imports and require are handled by the "eslint-plugin-import"
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'off',
        'node/no-new-require': 'off',
        'node/no-path-concat': 'off',
        // "unicorn/no-process-exit" is more flexible
        'node/no-process-exit': 'off',
        'node/no-unpublished-bin': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
        'node/no-unsupported-features/es-builtins': 'off',
        // Does not recognize TypeScript
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-unsupported-features/node-builtins': 'off',
        'node/process-exit-as-throw': 'off',
        'node/shebang': 'off',
    },
};
