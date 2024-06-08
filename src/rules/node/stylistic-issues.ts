export = {
    rules: {
        'node/callback-return': 'off',
        'node/exports-style': ['off', 'module.exports', { allowBatchAssign: false }],
        // Conflicts with the file suffixes like: .module, .component, .mock, etc.
        'node/file-extension-in-import': 'off',
        'node/global-require': 'off',
        'node/no-mixed-requires': 'off',
        'node/no-process-env': 'off',
        'node/no-restricted-import': 'off',
        'node/no-restricted-require': 'off',
        'node/no-sync': 'off',
        'node/prefer-global/buffer': ['off', 'always'],
        'node/prefer-global/console': ['off', 'always'],
        'node/prefer-global/process': ['off', 'always'],
        'node/prefer-global/text-decoder': ['off', 'always'],
        'node/prefer-global/text-encoder': ['off', 'always'],
        'node/prefer-global/url-search-params': ['off', 'always'],
        'node/prefer-global/url': ['off', 'always'],
        'node/prefer-promises/dns': 'off',
        'node/prefer-promises/fs': 'off',
    },
};
