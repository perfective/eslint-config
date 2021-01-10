import { unicornPreventAbbreviations } from './rules/prevent-abbreviations';

export = {
    rules: {
        'unicorn/no-array-callback-reference': 'off', // == no-fn-reference-in-iterator
        'unicorn/no-array-reduce': 'off', // == no-reduce
        'unicorn/better-regex': 'warn',
        'unicorn/catch-error-name': 'warn',
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
        'unicorn/no-console-spaces': 'warn',
        'unicorn/no-for-loop': 'warn',
        'unicorn/no-hex-escape': 'warn',
        'unicorn/no-instanceof-array': 'warn', // == no-array-instanceof
        'unicorn/no-keyword-prefix': ['error', {
            checkProperties: true,
            onlyCamelCase: false,
        }],
        'unicorn/no-lonely-if': 'warn',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-new-buffer': 'warn',
        // TODO: Consider enabling this rule to promote using Just/Nothing
        'unicorn/no-null': 'off',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-process-exit': 'error',
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
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-array-flat-map': 'warn', // == prefer-flat-map
        'unicorn/prefer-date-now': 'warn',
        'unicorn/prefer-default-parameters': 'warn',
        'unicorn/prefer-dom-node-append': 'warn', // == prefer-node-append
        'unicorn/prefer-dom-node-dataset': 'warn', // == prefer-dataset
        'unicorn/prefer-dom-node-remove': 'warn', // == prefer-node-remove
        'unicorn/prefer-dom-node-text-content': 'warn', // == prefer-text-content
        'unicorn/prefer-includes': 'warn',
        'unicorn/prefer-keyboard-event-key': 'warn', // == prefer-event-key
        'unicorn/prefer-math-trunc': 'warn',
        'unicorn/prefer-modern-dom-apis': 'warn',
        'unicorn/prefer-negative-index': 'warn',
        'unicorn/prefer-number-properties': ['warn', {
            checkInfinity: true,
        }],
        'unicorn/prefer-optional-catch-binding': 'warn',
        'unicorn/prefer-query-selector': 'warn',
        'unicorn/prefer-reflect-apply': 'warn',
        'unicorn/prefer-set-has': 'warn',
        // Autofix does not always work correctly
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-string-replace-all': 'off', // == prefer-replace-all
        'unicorn/prefer-string-slice': 'warn',
        'unicorn/prefer-string-starts-ends-with': 'warn', // == prefer-starts-ends-with
        'unicorn/prefer-string-trim-start-end': 'warn', // == prefer-trim-start-end
        'unicorn/prefer-ternary': 'off',
        'unicorn/prefer-type-error': 'warn',
        'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations()],
        'unicorn/string-content': 'off',
        'unicorn/throw-new-error': 'warn',
    },
};
