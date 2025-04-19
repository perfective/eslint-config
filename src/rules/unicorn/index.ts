import { Linter } from 'eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { languageOptions } from '../../config/language-options';

import { unicornPreventAbbreviations } from './rules/prevent-abbreviations';

export function unicornConfig(): Linter.Config {
    return {
        files: [
            ...javascriptFiles,
            ...typescriptFiles,
        ],
        languageOptions: languageOptions(),
        plugins: {
            unicorn: eslintPluginUnicorn,
        },
        rules: {
            'unicorn/better-regex': 'warn',
            'unicorn/catch-error-name': 'warn',
            'unicorn/consistent-assert': 'warn',
            'unicorn/consistent-date-clone': 'warn',
            'unicorn/consistent-destructuring': 'warn',
            'unicorn/consistent-empty-array-spread': 'warn',
            'unicorn/consistent-existence-index-check': 'warn',
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
            // Deprecated since v43.0.0
            'unicorn/import-index': 'off',
            'unicorn/import-style': 'off',
            'unicorn/new-for-builtins': 'warn',
            'unicorn/no-abusive-eslint-disable': 'error',
            'unicorn/no-accessor-recursion': 'error',
            'unicorn/no-anonymous-default-export': 'error',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-method-this-argument': 'warn',
            'unicorn/no-array-push-push': ['warn', {
                ignore: ['readable', 'this', 'this.stream'],
            }],
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-await-expression-member': 'error',
            'unicorn/no-await-in-promise-methods': 'error',
            'unicorn/no-console-spaces': 'warn',
            'unicorn/no-document-cookie': 'error',
            'unicorn/no-empty-file': 'error',
            'unicorn/no-for-loop': 'warn',
            'unicorn/no-hex-escape': 'warn',
            // Deprecated since v57.0.0
            'unicorn/no-instanceof-array': 'off',
            'unicorn/no-instanceof-builtins': 'warn',
            'unicorn/no-invalid-fetch-options': 'error',
            'unicorn/no-invalid-remove-event-listener': 'error',
            // Benefit of this rule is questionable and it's being overridden all the time.
            'unicorn/no-keyword-prefix': ['off', {
                disallowedPrefixes: ['new', 'class'],
                checkProperties: true,
                onlyCamelCase: false,
            }],
            'unicorn/no-length-as-slice-end': 'warn',
            'unicorn/no-lonely-if': 'warn',
            'unicorn/no-magic-array-flat-depth': 'error',
            'unicorn/no-named-default': 'warn',
            'unicorn/no-negated-condition': 'warn',
            'unicorn/no-negation-in-equality-check': 'error',
            'unicorn/no-nested-ternary': 'off',
            'unicorn/no-new-array': 'warn',
            'unicorn/no-new-buffer': 'warn',
            // TODO: Consider enabling this rule to promote using Just/Nothing
            'unicorn/no-null': 'off',
            'unicorn/no-object-as-default-parameter': 'error',
            'unicorn/no-process-exit': 'error',
            'unicorn/no-single-promise-in-promise-methods': 'warn',
            'unicorn/no-static-only-class': 'error',
            'unicorn/no-thenable': 'error',
            'unicorn/no-this-assignment': 'error',
            'unicorn/no-typeof-undefined': ['warn', {
                checkGlobalVariables: true,
            }],
            'unicorn/no-unnecessary-await': 'warn',
            'unicorn/no-unnecessary-polyfills': 'error',
            'unicorn/no-unreadable-array-destructuring': 'error',
            'unicorn/no-unreadable-iife': 'error',
            // The rule is deprecated
            'unicorn/no-unsafe-regex': 'off',
            'unicorn/no-unused-properties': 'off',
            'unicorn/no-useless-fallback-in-spread': 'warn',
            'unicorn/no-useless-length-check': 'warn',
            'unicorn/no-useless-promise-resolve-reject': 'warn',
            'unicorn/no-useless-spread': 'warn',
            'unicorn/no-useless-switch-case': 'error',
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
            'unicorn/prefer-array-find': ['warn', {
                checkFromLast: true,
            }],
            // Array.prototype.flat() is not supported in the ES6 library for TypeScript
            // See: 'array-func/prefer-flat'
            'unicorn/prefer-array-flat': 'off',
            // Array.prototype.flatMap() is not supported in the ES6 library for TypeScript
            // See: 'array-func/prefer-flat-map'
            'unicorn/prefer-array-flat-map': 'off',
            'unicorn/prefer-array-index-of': 'warn',
            'unicorn/prefer-array-some': 'error',
            'unicorn/prefer-at': 'off',
            'unicorn/prefer-blob-reading-methods': 'error',
            'unicorn/prefer-code-point': 'error',
            'unicorn/prefer-date-now': 'warn',
            'unicorn/prefer-default-parameters': 'warn',
            'unicorn/prefer-dom-node-append': 'warn',
            'unicorn/prefer-dom-node-dataset': 'warn',
            'unicorn/prefer-dom-node-remove': 'warn',
            'unicorn/prefer-dom-node-text-content': 'warn',
            'unicorn/prefer-event-target': 'error',
            'unicorn/prefer-export-from': 'warn',
            'unicorn/prefer-global-this': 'warn',
            'unicorn/prefer-includes': 'warn',
            'unicorn/prefer-json-parse-buffer': 'warn',
            'unicorn/prefer-keyboard-event-key': 'warn',
            'unicorn/prefer-logical-operator-over-ternary': 'error',
            'unicorn/prefer-math-min-max': 'warn',
            'unicorn/prefer-math-trunc': 'warn',
            'unicorn/prefer-modern-dom-apis': 'warn',
            'unicorn/prefer-modern-math-apis': 'warn',
            'unicorn/prefer-module': 'off',
            'unicorn/prefer-native-coercion-functions': 'warn',
            'unicorn/prefer-negative-index': 'warn',
            'unicorn/prefer-node-protocol': 'warn',
            'unicorn/prefer-number-properties': ['warn', {
                checkInfinity: true,
                checkNaN: true,
            }],
            // TBD: Check if Object.fromEntries() is part of the ES6 spec
            'unicorn/prefer-object-from-entries': ['off', {
                functions: [],
            }],
            'unicorn/prefer-optional-catch-binding': 'warn',
            'unicorn/prefer-prototype-methods': 'warn',
            'unicorn/prefer-query-selector': 'warn',
            'unicorn/prefer-reflect-apply': 'warn',
            // TBD: Conflicts with @typescript-eslint/prefer-regexp-exec
            'unicorn/prefer-regexp-test': 'off',
            'unicorn/prefer-set-has': 'warn',
            'unicorn/prefer-set-size': 'warn',
            // Autofix does not always work correctly
            'unicorn/prefer-spread': 'off',
            'unicorn/prefer-string-raw': 'off',
            'unicorn/prefer-string-replace-all': 'off',
            'unicorn/prefer-string-slice': 'warn',
            'unicorn/prefer-string-starts-ends-with': 'warn',
            'unicorn/prefer-string-trim-start-end': 'warn',
            // Requires a polyfill for older browsers.
            'unicorn/prefer-structured-clone': 'off',
            'unicorn/prefer-switch': ['error', {
                minimumCases: 3,
                emptyDefaultCase: 'do-nothing-comment',
            }],
            'unicorn/prefer-ternary': 'off',
            'unicorn/prefer-top-level-await': 'off',
            'unicorn/prefer-type-error': 'warn',
            'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations()],
            'unicorn/relative-url-style': ['warn', 'always'],
            'unicorn/require-array-join-separator': 'warn',
            'unicorn/require-number-to-fixed-digits-argument': 'warn',
            'unicorn/require-post-message-target-origin': 'error',
            'unicorn/string-content': 'off',
            'unicorn/switch-case-braces': 'off',
            'unicorn/template-indent': 'warn',
            'unicorn/text-encoding-identifier-case': 'error',
            'unicorn/throw-new-error': 'warn',
        },
    };
}
