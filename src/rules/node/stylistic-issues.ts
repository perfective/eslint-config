export = {
    rules: {
        'node/callback-return': 'error',
        'node/exports-style': ['error', 'module.exports', { allowBatchAssign: false }],
        // Conflicts with the file suffixes like: .module, .component, .mock, etc.
        'node/file-extension-in-import': 'off',
        'node/global-require': 'error',
        'node/no-mixed-requires': 'error',
        'node/no-process-env': 'error',
        'node/no-restricted-import': 'error',
        'node/no-restricted-require': 'error',
        'node/no-sync': 'error',
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/text-decoder': ['error', 'always'],
        'node/prefer-global/text-encoder': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error',
    },
};
