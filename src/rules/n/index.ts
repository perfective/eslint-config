// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
import * as eslintPluginN from 'eslint-plugin-n';

export const nConfig = {
    plugins: {
        n: eslintPluginN,
    },
    rules: {
        'n/callback-return': ['error', ['callback', 'cb', 'next']],
        'n/exports-style': ['warn', 'module.exports', { allowBatchAssign: false }],
        // Conflicts with the file suffixes like: .module, .component, .mock, etc.
        'n/file-extension-in-import': 'off',
        'n/global-require': 'error',
        'n/handle-callback-err': 'error',
        'n/hashbang': 'warn',
        'n/no-callback-literal': 'error',
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        // Imports and require are handled by the "eslint-plugin-import"
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-hide-core-modules': 'off',
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-mixed-requires': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-process-env': 'error',
        // Use "unicorn/no-process-exit" as more flexible
        'n/no-process-exit': 'off',
        'n/no-restricted-import': 'error',
        'n/no-restricted-require': 'error',
        'n/no-sync': ['error', {
            allowAtRootLevel: false,
        }],
        'n/no-unpublished-bin': 'error',
        'n/no-unpublished-import': ['error', {
            ignorePrivate: false,
        }],
        'n/no-unpublished-require': ['error', {
            allowModules: [],
            ignorePrivate: false,
            tryExtensions: ['.js', '.json', '.node'],
        }],
        'n/no-unsupported-features/es-builtins': ['error', {
            version: '>=18.0.0',
            ignores: [],
        }],
        // Does not recognize TypeScript
        'n/no-unsupported-features/es-syntax': 'off',
        'n/no-unsupported-features/node-builtins': ['error', {
            version: '>=18.0.0',
            ignores: [],
        }],
        'n/prefer-global/buffer': ['error', 'always'],
        'n/prefer-global/console': ['error', 'always'],
        'n/prefer-global/process': ['error', 'always'],
        'n/prefer-global/text-decoder': ['error', 'always'],
        'n/prefer-global/text-encoder': ['error', 'always'],
        'n/prefer-global/url': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        // Use unicorn/prefer-node-protocol
        'n/prefer-node-protocol': 'off',
        'n/prefer-promises/dns': 'error',
        'n/prefer-promises/fs': 'error',
        'n/process-exit-as-throw': 'error',
        // Use n/hashbang instead
        'n/shebang': 'off',
    },
};
