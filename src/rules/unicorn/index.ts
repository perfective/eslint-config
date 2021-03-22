import { unicornPreventAbbreviations } from './rules/prevent-abbreviations';

export = {
    plugins: [
        'unicorn',
    ],
    rules: {
        'unicorn/better-regex': 'warn',
        'unicorn/catch-error-name': 'warn',
        'unicorn/consistent-destructuring': 'warn',
        'unicorn/consistent-function-scoping': ['error', {
            checkArrowFunctions: true,
        }],
        'unicorn/custom-error-definition': 'warn',
        'unicorn/empty-brace-spaces': 'warn',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'warn',
        'unicorn/expiring-todo-comments': 'error',
        'unicorn/explicit-length-check': 'warn',
        'unicorn/filename-case': ['error', {
            case: 'kebabCase',
        }],
        'unicorn/import-index': 'warn',
        'unicorn/import-style': 'off',
        'unicorn/new-for-builtins': 'warn',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-push-push': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-console-spaces': 'warn',
        'unicorn/no-for-loop': 'warn',
        'unicorn/no-hex-escape': 'warn',
        'unicorn/no-instanceof-array': 'warn',
        // Benefit of this rule is questionable and it's being overridden all the time.
        'unicorn/no-keyword-prefix': ['off', {
            blacklist: ['new', 'class'],
            checkProperties: true,
            onlyCamelCase: false,
        }],
        'unicorn/no-lonely-if': 'warn',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-new-array': 'warn',
        'unicorn/no-new-buffer': 'warn',
        // TODO: Consider enabling this rule to promote using Just/Nothing
        'unicorn/no-null': 'off',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/no-zero-fractions': 'off',
        'unicorn/number-literal-case': 'warn',
        'unicorn/numeric-separators-style': ['warn', {
            hexadecimal: {
                // Keep RGB colors as is
                minimumDigits: 6,
                groupLength: 2,
            },
            binary: {
                minimumDigits: 0,
                groupLength: 4,
            },
            octal: {
                minimumDigits: 0,
                groupLength: 4,
            },
            number: {
                minimumDigits: 6,
                groupLength: 3,
            },
        }],
        'unicorn/prefer-add-event-listener': 'warn',
        'unicorn/prefer-array-find': 'warn',
        // Array.prototype.flat() is not supported in the ES6 library for TypeScript
        // See: 'array-func/prefer-flat'
        'unicorn/prefer-array-flat': 'off',
        // Array.prototype.flatMap() is not supported in the ES6 library for TypeScript
        // See: 'array-func/prefer-flat-map'
        'unicorn/prefer-array-flat-map': 'off',
        'unicorn/prefer-array-index-of': 'warn',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-date-now': 'warn',
        'unicorn/prefer-default-parameters': 'warn',
        'unicorn/prefer-dom-node-append': 'warn',
        'unicorn/prefer-dom-node-dataset': 'warn',
        'unicorn/prefer-dom-node-remove': 'warn',
        'unicorn/prefer-dom-node-text-content': 'warn',
        'unicorn/prefer-includes': 'warn',
        'unicorn/prefer-keyboard-event-key': 'warn',
        'unicorn/prefer-math-trunc': 'warn',
        'unicorn/prefer-modern-dom-apis': 'warn',
        'unicorn/prefer-negative-index': 'warn',
        'unicorn/prefer-number-properties': ['warn', {
            checkInfinity: true,
        }],
        'unicorn/prefer-optional-catch-binding': 'warn',
        'unicorn/prefer-query-selector': 'warn',
        'unicorn/prefer-reflect-apply': 'warn',
        // TBD: Conflicts with @typescript-eslint/prefer-regexp-exec
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-set-has': 'warn',
        // Autofix does not always work correctly
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-string-replace-all': 'off',
        'unicorn/prefer-string-slice': 'warn',
        'unicorn/prefer-string-starts-ends-with': 'warn',
        'unicorn/prefer-string-trim-start-end': 'warn',
        'unicorn/prefer-ternary': 'off',
        'unicorn/prefer-type-error': 'warn',
        'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations()],
        'unicorn/string-content': 'off',
        'unicorn/throw-new-error': 'warn',
    },
};
