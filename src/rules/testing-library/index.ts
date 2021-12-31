export = {
    plugins: [
        'testing-library',
    ],
    rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        // Vue.js only
        'testing-library/await-fire-event': 'off',
        'testing-library/consistent-data-testid': ['error', {
            testIdPattern: '^[a-z0-9]+(-[a-z0-9]+)*$',
            testIdAttribute: 'data-testId',
        }],
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-container': 'error',
        'testing-library/no-debugging-utils': 'error',
        'testing-library/no-dom-import': 'warn',
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/no-node-access': 'error',
        'testing-library/no-promise-in-fire-event': 'error',
        'testing-library/no-render-in-setup': 'error',
        // React only
        'testing-library/no-unnecessary-act': 'off',
        'testing-library/no-wait-for-empty-callback': 'error',
        'testing-library/no-wait-for-multiple-assertions': 'error',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/no-wait-for-snapshot': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-find-by': 'warn',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-query-by-disappearance': 'error',
        'testing-library/prefer-user-event': 'error',
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/prefer-wait-for': 'warn',
        'testing-library/render-result-naming-convention': 'error',
    },
};
