export = {
    rules: {
        'unicorn/better-regex': 'warn',
        'unicorn/catch-error-name': 'warn',
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/custom-error-definition': 'warn',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'warn',
        'unicorn/expiring-todo-comments': 'error',
        'unicorn/explicit-length-check': 'warn',
        'unicorn/filename-case': ['error', {
            case: 'kebabCase',
        }],
        'unicorn/import-index': 'warn',
        'unicorn/new-for-builtins': 'warn',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'warn',
        'unicorn/no-console-spaces': 'warn',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-for-loop': 'warn',
        'unicorn/no-hex-escape': 'warn',
        'unicorn/no-keyword-prefix': ['error', {
            checkProperties: true,
            onlyCamelCase: false,
        }],
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-new-buffer': 'warn',
        'unicorn/no-null': 'off',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-reduce': 'off',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/no-zero-fractions': 'off',
        'unicorn/number-literal-case': 'warn',
        'unicorn/prefer-add-event-listener': 'warn',
        'unicorn/prefer-array-find': 'warn',
        'unicorn/prefer-dataset': 'warn',
        'unicorn/prefer-event-key': 'warn',
        'unicorn/prefer-flat-map': 'warn',
        'unicorn/prefer-includes': 'warn',
        'unicorn/prefer-modern-dom-apis': 'warn',
        'unicorn/prefer-negative-index': 'warn',
        'unicorn/prefer-node-append': 'warn',
        'unicorn/prefer-node-remove': 'warn',
        'unicorn/prefer-number-properties': 'warn',
        'unicorn/prefer-optional-catch-binding': 'warn',
        'unicorn/prefer-query-selector': 'warn',
        'unicorn/prefer-reflect-apply': 'warn',
        'unicorn/prefer-replace-all': 'off',
        'unicorn/prefer-set-has': 'warn',
        // Autofix does not always work correctly
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-starts-ends-with': 'warn',
        'unicorn/prefer-string-slice': 'warn',
        'unicorn/prefer-text-content': 'warn',
        'unicorn/prefer-trim-start-end': 'warn',
        'unicorn/prefer-type-error': 'warn',
        'unicorn/prevent-abbreviations': ['warn', {
            extendDefaultWhitelist: true,
            checkDefaultAndNamespaceImports: true,
            checkShorthandImports: false,
            checkShorthandProperties: false,
            checkProperties: true,
            checkVariables: true,
            checkFilenames: true,
            replacements: {
                args: false,
                db: false,
                env: false,
            },
        }],
        'unicorn/string-content': 'off',
        'unicorn/throw-new-error': 'warn',
    },
};
