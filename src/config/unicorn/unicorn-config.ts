import { Linter } from 'eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import { ecmaFiles, Glob } from '../../linter/glob';

import { unicornPreventAbbreviations } from './rules/prevent-abbreviations';

export function unicornConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            unicorn: eslintPluginUnicorn,
        },
        rules: {
            'unicorn/better-dom-traversing': 'error',
            // Deprecated since v65.0.0. No replacement.
            // Use eslint-plugin-regexp instead.
            'unicorn/better-regex': 'off',
            'unicorn/catch-error-name': ['warn', {
                name: 'error',
                ignore: [],
            }],
            'unicorn/class-reference-in-static-methods': ['error', {
                preferThis: true,
                preferSuper: true,
            }],
            // Applies only to JSON and SOML files.
            'unicorn/comma-spacing': 'off',
            'unicorn/comment-content': ['warn', {
                checkUniformCase: true,
                extendDefaultReplacements: true,
                replacements: {
                    // Conflicts with unicorn/name-replacements.
                    '\\bapplication\\b(?!/)': false,
                    '\\bapplications\\b': false,
                },
                ignore: [],
            }],
            // Conflicts with arrow-body-style.
            'unicorn/consistent-arrow-return-style': 'off',
            'unicorn/consistent-assert': 'warn',
            'unicorn/consistent-boolean-name': ['warn', {
                checkVariables: 'always',
                checkArguments: 'always',
                checkFunctions: 'always',
                // Methods and fields often implement external APIs (for example, ESLint rule options),
                // so they are not required to have a prefix, but a prefix must still be correct.
                checkMethods: 'prohibit',
                checkFields: 'prohibit',
                prefixes: {
                    is: true,
                    are: true,
                    has: true,
                    have: true,
                    can: true,
                    should: true,
                    was: true,
                    were: true,
                    does: true,
                    did: true,
                    will: true,
                    requires: true,
                },
                wrappers: {},
                ignore: [],
            }],
            // Use @typescript-eslint/member-ordering.
            'unicorn/consistent-class-member-order': 'off',
            // Aligned with the unicorn/name-replacements options.
            'unicorn/consistent-compound-words': ['error', {
                checkProperties: false,
                checkVariables: true,
                checkDefaultAndNamespaceImports: 'internal',
                checkShorthandImports: 'internal',
                checkShorthandProperties: false,
                extendDefaultReplacements: true,
                replacements: {},
                allowList: {},
            }],
            'unicorn/consistent-conditional-object-spread': ['warn', 'logical'],
            'unicorn/consistent-date-clone': 'warn',
            'unicorn/consistent-destructuring': 'warn',
            'unicorn/consistent-empty-array-spread': 'warn',
            'unicorn/consistent-existence-index-check': 'warn',
            'unicorn/consistent-export-decorator-position': ['warn', 'above'],
            'unicorn/consistent-function-scoping': ['error', {
                checkArrowFunctions: true,
            }],
            // Use func-style.
            'unicorn/consistent-function-style': 'off',
            'unicorn/consistent-json-file-read': ['warn', 'buffer'],
            'unicorn/consistent-optional-chaining': 'error',
            'unicorn/consistent-template-literal-escape': 'warn',
            'unicorn/consistent-tuple-labels': 'error',
            'unicorn/custom-error-definition': 'warn',
            'unicorn/default-export-style': ['warn', {
                functions: 'inline',
                classes: 'inline',
            }],
            'unicorn/dom-node-dataset': ['warn', {
                preferAttributes: false,
            }],
            'unicorn/empty-brace-spaces': 'warn',
            'unicorn/error-message': 'error',
            'unicorn/escape-case': ['warn', 'uppercase'],
            'unicorn/expiring-todo-comments': ['error', {
                terms: ['todo', 'fixme', 'xxx'],
                ignore: [],
                checkDates: true,
                // A passed date must not fail unrelated pull requests.
                checkDatesOnPullRequests: false,
                // TODO comments without an expiration condition are allowed.
                allowWarningComments: true,
            }],
            'unicorn/explicit-length-check': ['warn', {
                'non-zero': 'greater-than',
            }],
            'unicorn/explicit-timer-delay': ['warn', 'always'],
            'unicorn/filename-case': ['error', {
                case: 'kebabCase',
                checkDirectories: true,
                directoryRoots: [],
            }],
            // Extends id-match, which is off.
            'unicorn/id-match': 'off',
            'unicorn/import-style': 'off',
            // Applies only to CSS and JSON files.
            'unicorn/indent': 'off',
            'unicorn/isolated-functions': ['error', {
                functions: ['makeSynchronous', 'workerize'],
                selectors: [],
                comments: ['@isolated'],
                overrideGlobals: {},
            }],
            'unicorn/iteration-fallback-style': ['warn', 'guard'],
            // Applies only to JSON, SOML, YAML, and TOML files.
            'unicorn/key-name-casing': 'off',
            // Use logical-assignment-operators.
            'unicorn/logical-assignment-operators': 'off',
            'unicorn/max-nested-calls': ['error', {
                // 1 bans even foo(bar()). 3 matches the complexity: 3 limit.
                max: 3,
            }],
            'unicorn/name-replacements': ['warn', unicornPreventAbbreviations()],
            'unicorn/new-for-builtins': 'warn',
            'unicorn/no-abusive-eslint-disable': 'error',
            'unicorn/no-accessor-recursion': 'error',
            // See no-bitwise.
            'unicorn/no-accidental-bitwise-operator': 'off',
            'unicorn/no-anonymous-default-export': 'error',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-array-concat-in-loop': 'error',
            'unicorn/no-array-fill-with-reference-type': 'error',
            'unicorn/no-array-from-fill': 'error',
            'unicorn/no-array-front-mutation': 'error',
            'unicorn/no-array-method-this-argument': 'warn',
            // Deprecated since v59.0.0. Use unicorn/prefer-single-call.
            'unicorn/no-array-push-push': 'off',
            'unicorn/no-array-reduce': 'off',
            // Requires ECMAScript 2023
            'unicorn/no-array-reverse': 'off',
            // Requires ECMAScript 2023
            'unicorn/no-array-sort': 'off',
            'unicorn/no-array-sort-for-min-max': 'error',
            // Requires ECMAScript 2023
            'unicorn/no-array-splice': 'off',
            // Conflicts with jsdoc/require-asterisk-prefix.
            'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
            'unicorn/no-async-iterator-callback': 'error',
            'unicorn/no-async-promise-finally': 'error',
            'unicorn/no-await-expression-member': 'error',
            'unicorn/no-await-in-promise-methods': 'error',
            // Conflicts with index.ts entry points of packages.
            'unicorn/no-barrel-files': 'off',
            'unicorn/no-blob-to-file': 'error',
            'unicorn/no-boolean-sort-comparator': 'error',
            'unicorn/no-break-in-nested-loop': ['error', {
                checkContinue: true,
            }],
            'unicorn/no-canvas-to-image': 'error',
            'unicorn/no-chained-comparison': 'error',
            'unicorn/no-collection-bracket-access': 'error',
            'unicorn/no-computed-property-existence-check': 'error',
            'unicorn/no-conflicting-constraints': 'error',
            'unicorn/no-confusing-array-splice': 'error',
            'unicorn/no-confusing-array-with': 'error',
            'unicorn/no-console-spaces': 'warn',
            'unicorn/no-constant-zero-expression': 'error',
            'unicorn/no-declarations-before-early-exit': 'warn',
            // Deprecated since v77.0.0. Use cssicorn/no-deprecated-features (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-deprecated-css-features': 'off',
            'unicorn/no-document-cookie': 'error',
            'unicorn/no-double-comparison': 'error',
            // Deprecated since v77.0.0. Use cssicorn/no-duplicate-selectors (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-duplicate-css-selectors': 'off',
            // Deprecated since v77.0.0. Use cssicorn/no-duplicate-font-family-names (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-duplicate-font-family-names': 'off',
            'unicorn/no-duplicate-if-branches': 'error',
            'unicorn/no-duplicate-logical-operands': 'warn',
            'unicorn/no-duplicate-loops': 'error',
            'unicorn/no-duplicate-set-values': 'error',
            'unicorn/no-empty-file': ['error', {
                allowComments: false,
            }],
            // Applies only to Markdown files.
            'unicorn/no-empty-link-text': 'off',
            'unicorn/no-error-property-assignment': 'error',
            'unicorn/no-exports-in-scripts': 'error',
            'unicorn/no-for-each': 'off',
            'unicorn/no-for-loop': 'warn',
            'unicorn/no-global-object-property-assignment': 'error',
            // Deprecated since v66.0.0. Use unicorn/prefer-literal-ascii and unicorn/prefer-unicode-code-point-escapes.
            'unicorn/no-hex-escape': 'off',
            'unicorn/no-immediate-mutation': ['warn', {
                checkCollections: true,
                checkConditionals: true,
            }],
            'unicorn/no-impossible-length-comparison': 'error',
            'unicorn/no-incomplete-accessor-override': 'error',
            'unicorn/no-incorrect-query-selector': 'warn',
            'unicorn/no-incorrect-template-string-interpolation': 'error',
            'unicorn/no-ineffective-csp-directives': 'error',
            // Deprecated since v57.0.0
            'unicorn/no-instanceof-array': 'off',
            'unicorn/no-instanceof-builtins': ['warn', {
                // Error.isError() requires ECMAScript 2026.
                useErrorIsError: false,
                // The strict strategy also reports built-ins without a reliable alternative to instanceof
                // (for example, Error, Map, Date, and Promise).
                strategy: 'loose',
                include: [],
                exclude: [],
            }],
            'unicorn/no-invalid-argument-count': ['error', {}],
            'unicorn/no-invalid-boolean-attribute-value': 'error',
            'unicorn/no-invalid-character-comparison': 'error',
            'unicorn/no-invalid-dom-token': 'error',
            'unicorn/no-invalid-fetch-options': 'error',
            'unicorn/no-invalid-file-input-accept': 'warn',
            'unicorn/no-invalid-integrity': 'error',
            'unicorn/no-invalid-intl-options': 'error',
            // Deprecated since v77.0.0. Use cssicorn/no-invalid-media-features (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-invalid-media-features': 'off',
            'unicorn/no-invalid-property-descriptor': 'error',
            'unicorn/no-invalid-remove-event-listener': 'error',
            'unicorn/no-invalid-response-options': 'error',
            'unicorn/no-invalid-style-set-property': 'error',
            'unicorn/no-invalid-temporal-arithmetic': 'error',
            'unicorn/no-invalid-url-protocol-comparison': 'warn',
            'unicorn/no-invalid-well-known-symbol-methods': 'warn',
            // Applies only to Markdown files.
            'unicorn/no-javascript-url': 'off',
            // Benefit of this rule is questionable and it's being overridden all the time.
            'unicorn/no-keyword-prefix': ['off', {
                disallowedPrefixes: ['new', 'class'],
                checkProperties: true,
                onlyCamelCase: false,
            }],
            'unicorn/no-late-current-target-access': 'error',
            'unicorn/no-late-event-control': 'error',
            // Use @stylistic/no-multiple-empty-lines.
            'unicorn/no-leading-empty-lines': 'off',
            // Deprecated since v59.0.0. Use unicorn/no-unnecessary-slice-end.
            'unicorn/no-length-as-slice-end': 'off',
            'unicorn/no-lonely-if': 'warn',
            'unicorn/no-loop-iterable-mutation': 'error',
            // Applies only to CSS, JSON, TOML, and SOML files.
            // Use no-loss-of-precision.
            'unicorn/no-loss-of-precision': 'off',
            'unicorn/no-magic-array-flat-depth': 'error',
            // Conflicts with semantic line breaks in comments.
            'unicorn/no-manually-wrapped-comments': 'off',
            'unicorn/no-mismatched-map-key': 'error',
            'unicorn/no-misrefactored-assignment': 'error',
            'unicorn/no-missing-local-resource': 'warn',
            // Use promise/no-multiple-resolved.
            'unicorn/no-multiple-promise-resolver-calls': 'off',
            'unicorn/no-named-default': 'warn',
            'unicorn/no-negated-array-predicate': 'warn',
            'unicorn/no-negated-comparison': ['warn', {
                checkLogicalExpressions: true,
            }],
            'unicorn/no-negated-condition': 'warn',
            'unicorn/no-negation-in-equality-check': 'error',
            'unicorn/no-nested-ternary': 'off',
            // Deprecated since v77.0.0. Use cssicorn/no-nesting-with-mixed-specificity (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-nesting-with-mixed-specificity': 'off',
            'unicorn/no-new-array': 'warn',
            'unicorn/no-new-buffer': 'warn',
            'unicorn/no-non-function-verb-prefix': ['error', {
                verbs: ['get', 'set', 'unset', 'delete', 'add', 'remove', 'destroy', 'create'],
                ignore: [],
            }],
            'unicorn/no-nonstandard-builtin-properties': 'error',
            // TODO: Consider enabling this rule to promote using Just/Nothing
            'unicorn/no-null': 'off',
            'unicorn/no-object-as-default-parameter': 'error',
            'unicorn/no-object-methods-with-collections': 'error',
            'unicorn/no-optional-chaining-on-undeclared-variable': 'error',
            'unicorn/no-prevent-default-in-passive-listener': 'error',
            'unicorn/no-process-exit': 'error',
            'unicorn/no-redundant-comparison': 'warn',
            // Deprecated since v77.0.0. Use cssicorn/no-redundant-nested-style-rules (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-redundant-nested-style-rules': 'off',
            'unicorn/no-repeated-call-wrappers': 'error',
            'unicorn/no-return-array-push': 'error',
            'unicorn/no-selector-as-dom-name': 'warn',
            'unicorn/no-shorthand-property-overrides': 'error',
            'unicorn/no-single-promise-in-promise-methods': 'warn',
            'unicorn/no-static-only-class': 'error',
            'unicorn/no-subtraction-comparison': 'warn',
            'unicorn/no-thenable': 'error',
            'unicorn/no-this-assignment': 'error',
            'unicorn/no-this-outside-of-class': 'error',
            'unicorn/no-top-level-assignment-in-function': 'error',
            'unicorn/no-top-level-side-effects': ['error', {
                // Unknown calls include pure helpers that build exported constants (for example, rule options).
                checkUnknownCalls: false,
                allow: {},
            }],
            'unicorn/no-transition-all': 'error',
            'unicorn/no-typeof-undefined': ['warn', {
                checkGlobalVariables: true,
            }],
            'unicorn/no-uncalled-method': 'error',
            'unicorn/no-undeclared-class-members': 'error',
            // Deprecated since v77.0.0. Use cssicorn/no-unknown-annotations (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-unknown-css-annotations': 'off',
            // Deprecated since v77.0.0. Use cssicorn/no-unknown-pseudo-selectors (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-unknown-pseudo-selectors': 'off',
            'unicorn/no-unnecessary-array-flat-depth': 'warn',
            'unicorn/no-unnecessary-array-flat-map': 'warn',
            'unicorn/no-unnecessary-array-splice-count': 'warn',
            'unicorn/no-unnecessary-await': 'warn',
            // Use @typescript-eslint/no-unnecessary-boolean-literal-compare.
            'unicorn/no-unnecessary-boolean-comparison': 'off',
            'unicorn/no-unnecessary-default-arguments': 'warn',
            'unicorn/no-unnecessary-fetch-options': 'warn',
            'unicorn/no-unnecessary-global-this': 'warn',
            'unicorn/no-unnecessary-nested-ternary': 'warn',
            'unicorn/no-unnecessary-parameters': ['warn', {
                // A function with a single call site often takes its arguments for readability.
                minimumCallCount: 2,
            }],
            'unicorn/no-unnecessary-polyfills': ['error', {
                // The targets option is not set,
                // so the rule uses the project's Browserslist config or package.json engines.
            }],
            'unicorn/no-unnecessary-slice-end': 'warn',
            'unicorn/no-unnecessary-splice': 'warn',
            'unicorn/no-unnecessary-string-trim': 'warn',
            'unicorn/no-unreadable-array-destructuring': ['error', {
                // 0 also bans a single skipped element, as in Object.entries() callbacks ([, value]).
                maximumIgnoredElements: 1,
            }],
            'unicorn/no-unreadable-for-of-expression': 'error',
            'unicorn/no-unreadable-iife': 'error',
            'unicorn/no-unreadable-new-expression': 'error',
            'unicorn/no-unreadable-object-destructuring': 'error',
            'unicorn/no-unsafe-buffer-conversion': 'error',
            'unicorn/no-unsafe-dom-html': 'error',
            'unicorn/no-unsafe-json-serialization': 'error',
            'unicorn/no-unsafe-promise-all-settled-values': 'error',
            'unicorn/no-unsafe-property-key': 'error',
            'unicorn/no-unsafe-sqlite-interpolation': 'error',
            'unicorn/no-unsafe-string-replacement': 'error',
            // Deprecated since v77.0.0. Use cssicorn/no-unscoped-nesting-selector (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/no-unscoped-css-nesting-selector': 'off',
            // Deprecated since v75.0.0. Use unicorn/no-unused-builtin-method-return.
            'unicorn/no-unused-array-method-return': 'off',
            'unicorn/no-unused-builtin-method-return': 'error',
            'unicorn/no-unused-iterator-helper': 'error',
            'unicorn/no-unused-properties': 'off',
            'unicorn/no-url-in-search-params': 'error',
            // Conflicts with @typescript-eslint/strict-boolean-expressions.
            'unicorn/no-useless-boolean-cast': 'off',
            // Use @typescript-eslint/no-unnecessary-type-conversion.
            'unicorn/no-useless-coercion': 'off',
            'unicorn/no-useless-collection-argument': 'warn',
            'unicorn/no-useless-compound-assignment': 'error',
            // Use no-useless-concat.
            'unicorn/no-useless-concat': 'off',
            'unicorn/no-useless-continue': 'warn',
            'unicorn/no-useless-delete-check': 'warn',
            'unicorn/no-useless-else': 'warn',
            'unicorn/no-useless-error-capture-stack-trace': 'warn',
            'unicorn/no-useless-fallback-in-spread': 'warn',
            'unicorn/no-useless-iterator-to-array': 'warn',
            'unicorn/no-useless-length-check': 'warn',
            'unicorn/no-useless-logical-operand': 'warn',
            'unicorn/no-useless-override': 'warn',
            'unicorn/no-useless-promise-resolve-reject': 'warn',
            'unicorn/no-useless-re-export': 'error',
            'unicorn/no-useless-recursion': 'error',
            'unicorn/no-useless-set-construction': 'warn',
            'unicorn/no-useless-spread': 'warn',
            'unicorn/no-useless-switch-case': 'error',
            // Use @typescript-eslint/no-unnecessary-template-expression.
            'unicorn/no-useless-template-literals': 'off',
            'unicorn/no-useless-undefined': 'off',
            'unicorn/no-using-resource-escape': 'error',
            // See no-bitwise.
            'unicorn/no-xor-as-exponentiation': 'off',
            'unicorn/no-zero-fractions': 'off',
            'unicorn/number-literal-case': ['warn', {
                hexadecimalValue: 'uppercase',
            }],
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
                    fractionGroupLength: 3,
                },
            }],
            // Use operator-assignment.
            'unicorn/operator-assignment': 'off',
            // Requires a polyfill for older browsers.
            'unicorn/prefer-abort-signal-any': 'off',
            // Requires a polyfill for older browsers.
            'unicorn/prefer-abort-signal-timeout': 'off',
            'unicorn/prefer-add-event-listener': ['warn', {
                // These packages use on-functions (for example, onerror) as their API.
                excludedPackages: ['koa', 'sax'],
            }],
            'unicorn/prefer-add-event-listener-options': 'warn',
            'unicorn/prefer-aggregate-error': 'warn',
            'unicorn/prefer-array-find': ['warn', {
                checkFromLast: true,
            }],
            // Array.prototype.flat() is not supported in the ES6 library for TypeScript
            // See: 'array-func/prefer-flat'
            'unicorn/prefer-array-flat': 'off',
            // Array.prototype.flatMap() is not supported in the ES6 library for TypeScript
            // See: 'array-func/prefer-flat-map'
            'unicorn/prefer-array-flat-map': 'off',
            // Requires ECMAScript 2024
            'unicorn/prefer-array-from-async': 'off',
            'unicorn/prefer-array-from-map': 'warn',
            'unicorn/prefer-array-from-range': 'warn',
            'unicorn/prefer-array-index-of': 'warn',
            'unicorn/prefer-array-iterable-methods': 'warn',
            'unicorn/prefer-array-last-methods': 'error',
            'unicorn/prefer-array-slice': 'error',
            'unicorn/prefer-array-some': 'error',
            'unicorn/prefer-at': 'off',
            // Conflicts with the Promises-over-async/await convention.
            'unicorn/prefer-await': 'off',
            'unicorn/prefer-bigint-literals': 'warn',
            'unicorn/prefer-blob-reading-methods': 'error',
            'unicorn/prefer-block-statement-over-iife': 'warn',
            'unicorn/prefer-boolean-return': 'warn',
            'unicorn/prefer-class-fields': 'warn',
            'unicorn/prefer-classlist-toggle': 'warn',
            'unicorn/prefer-code-point': 'error',
            'unicorn/prefer-combined-guards': ['warn', {
                checkCompoundConditions: true,
                checkMultiStatementBodies: true,
            }],
            // Conflicts with no-continue.
            'unicorn/prefer-continue': 'off',
            'unicorn/prefer-date-now': 'warn',
            'unicorn/prefer-default-parameters': ['error', {
                checkFallbackExpressions: true,
            }],
            'unicorn/prefer-direct-iteration': 'warn',
            // Requires explicit resource management (`using` declarations).
            'unicorn/prefer-dispose': 'off',
            'unicorn/prefer-dom-node-append': 'warn',
            // Deprecated since v65.0.0. Use unicorn/dom-node-dataset.
            'unicorn/prefer-dom-node-dataset': 'off',
            // Requires a polyfill for older browsers.
            'unicorn/prefer-dom-node-html-methods': 'off',
            'unicorn/prefer-dom-node-remove': 'warn',
            'unicorn/prefer-dom-node-replace-children': 'warn',
            'unicorn/prefer-dom-node-text-content': 'error',
            'unicorn/prefer-early-return': ['warn', {
                maximumStatements: 0,
                checkShortBodies: true,
            }],
            'unicorn/prefer-else-if': 'warn',
            // Requires ECMAScript 2026
            'unicorn/prefer-error-is-error': 'off',
            'unicorn/prefer-escaped-irregular-whitespace': 'warn',
            'unicorn/prefer-event-target': 'error',
            // Deprecated since v77.0.0. Use cssicorn/prefer-explicit-viewport-units (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/prefer-explicit-viewport-units': 'off',
            'unicorn/prefer-export-from': ['warn', {
                checkUsedVariables: true,
            }],
            'unicorn/prefer-flat-math-min-max': 'warn',
            // Requires ECMAScript 2026
            'unicorn/prefer-get-or-insert-computed': 'off',
            // Conflicts with unicorn/prefer-number-properties.
            'unicorn/prefer-global-number-constants': 'off',
            'unicorn/prefer-global-this': 'warn',
            // Requires ECMAScript 2024
            'unicorn/prefer-group-by': 'off',
            'unicorn/prefer-has-check': 'warn',
            'unicorn/prefer-hoisting-branch-code': 'warn',
            'unicorn/prefer-https': ['warn', {
                ignore: [],
            }],
            'unicorn/prefer-identifier-import-export-specifiers': 'warn',
            'unicorn/prefer-import-meta-properties': 'warn',
            'unicorn/prefer-includes': 'warn',
            'unicorn/prefer-includes-over-repeated-comparisons': ['error', {
                minimumComparisons: 2,
            }],
            'unicorn/prefer-iterable-in-constructor': 'warn',
            // Requires ECMAScript 2026
            'unicorn/prefer-iterator-concat': 'off',
            // Requires ECMAScript 2025
            'unicorn/prefer-iterator-helpers': 'off',
            // Requires ECMAScript 2025
            'unicorn/prefer-iterator-to-array': 'off',
            'unicorn/prefer-iterator-to-array-at-end': 'error',
            // Requires a polyfill for Iterator.zip().
            'unicorn/prefer-iterator-zip': 'off',
            // Requires ECMAScript 2025
            'unicorn/prefer-json-import': 'off',
            // Deprecated since v65.0.0. Use unicorn/consistent-json-file-read.
            'unicorn/prefer-json-parse-buffer': 'off',
            'unicorn/prefer-keyboard-event-key': 'warn',
            'unicorn/prefer-literal-ascii': 'warn',
            'unicorn/prefer-location-assign': 'warn',
            'unicorn/prefer-logical-operator-over-ternary': 'warn',
            'unicorn/prefer-map-from-entries': 'warn',
            'unicorn/prefer-math-abs': 'error',
            'unicorn/prefer-math-constants': 'error',
            'unicorn/prefer-math-min-max': 'error',
            'unicorn/prefer-math-trunc': 'error',
            // Deprecated since v77.0.0. Use cssicorn/prefer-media-feature-range-syntax (eslint-cssicorn).
            // Applies only to CSS files.
            'unicorn/prefer-media-feature-range-syntax': 'off',
            'unicorn/prefer-minimal-ternary': ['warn', {
                checkVaryingBase: true,
                checkComputedMemberAccess: true,
            }],
            'unicorn/prefer-modern-dom-apis': 'warn',
            'unicorn/prefer-modern-math-apis': 'warn',
            'unicorn/prefer-module': 'off',
            'unicorn/prefer-native-coercion-functions': 'warn',
            'unicorn/prefer-negative-index': 'warn',
            'unicorn/prefer-node-protocol': 'warn',
            'unicorn/prefer-number-coercion': 'error',
            'unicorn/prefer-number-is-safe-integer': 'error',
            'unicorn/prefer-number-properties': ['warn', {
                checkInfinity: true,
                checkNaN: true,
            }],
            'unicorn/prefer-object-define-properties': 'warn',
            'unicorn/prefer-object-destructuring-defaults': 'error',
            // TBD: Check if Object.fromEntries() is part of the ES6 spec
            'unicorn/prefer-object-from-entries': ['off', {
                functions: [],
            }],
            'unicorn/prefer-object-iterable-methods': 'warn',
            'unicorn/prefer-observer-apis': 'error',
            'unicorn/prefer-optional-catch-binding': 'warn',
            'unicorn/prefer-options-parameter': ['error', {
                checkWithoutOptionsObject: true,
            }],
            'unicorn/prefer-path2d': 'error',
            'unicorn/prefer-private-class-fields': 'warn',
            'unicorn/prefer-promise-static-methods': 'warn',
            // Requires ECMAScript 2025
            'unicorn/prefer-promise-try': 'off',
            // Requires ECMAScript 2024
            'unicorn/prefer-promise-with-resolvers': 'off',
            'unicorn/prefer-prototype-methods': 'warn',
            'unicorn/prefer-query-selector': ['warn', {
                allowWithVariables: false,
            }],
            'unicorn/prefer-queue-microtask': ['warn', {
                // The fix moves a macrotask to a microtask, which changes the execution order.
                checkSetImmediate: false,
                checkSetTimeout: false,
            }],
            'unicorn/prefer-reflect-apply': 'warn',
            // Requires ECMAScript 2025
            'unicorn/prefer-regexp-escape': 'off',
            // Use @typescript-eslint/prefer-regexp-exec.
            'unicorn/prefer-regexp-exec': 'off',
            // TBD: Conflicts with @typescript-eslint/prefer-regexp-exec
            'unicorn/prefer-regexp-test': 'off',
            'unicorn/prefer-response-static-json': 'warn',
            'unicorn/prefer-scoped-selector': 'error',
            'unicorn/prefer-set-has': ['warn', {
                minimumItems: 0,
            }],
            // Requires ECMAScript 2025
            'unicorn/prefer-set-methods': 'off',
            'unicorn/prefer-set-size': 'warn',
            // Conflicts with object-shorthand.
            'unicorn/prefer-short-arrow-method': 'off',
            'unicorn/prefer-short-escape-sequences': 'warn',
            'unicorn/prefer-simple-condition-first': 'warn',
            'unicorn/prefer-simple-sort-comparator': 'error',
            'unicorn/prefer-simplified-conditions': ['warn', {
                // 'expand' overlaps unicorn/no-negated-comparison with checkLogicalExpressions.
                negatedConditions: 'simplify',
            }],
            'unicorn/prefer-single-array-predicate': 'error',
            'unicorn/prefer-single-call': ['warn', {
                ignore: ['readable', 'this', 'this.stream'],
            }],
            'unicorn/prefer-single-object-destructuring': 'warn',
            'unicorn/prefer-single-replace': 'warn',
            'unicorn/prefer-smaller-scope': ['warn', {
                checkTypeAliases: true,
            }],
            'unicorn/prefer-split-limit': 'warn',
            // Autofix does not always work correctly
            'unicorn/prefer-spread': 'off',
            'unicorn/prefer-string-match-all': 'warn',
            'unicorn/prefer-string-pad-start-end': 'warn',
            'unicorn/prefer-string-raw': 'off',
            'unicorn/prefer-string-repeat': ['warn', {
                // Two characters (for example, '\n\n') are easier to read as a literal.
                minimumRepetitions: 3,
            }],
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
            // Requires a polyfill for the Temporal API.
            'unicorn/prefer-temporal': 'off',
            'unicorn/prefer-temporal-conversion': 'warn',
            'unicorn/prefer-ternary': 'off',
            // Use promise/prefer-catch.
            'unicorn/prefer-then-catch': 'off',
            'unicorn/prefer-toggle-attribute': 'warn',
            'unicorn/prefer-top-level-await': 'off',
            'unicorn/prefer-type-error': 'warn',
            'unicorn/prefer-type-literal-last': 'warn',
            // Requires ECMAScript 2026
            'unicorn/prefer-uint8array-base64': 'off',
            // Requires ECMAScript 2026
            'unicorn/prefer-uint8array-hex': 'off',
            'unicorn/prefer-unary-minus': 'warn',
            'unicorn/prefer-unicode-code-point-escapes': 'warn',
            // Requires a polyfill for older browsers.
            'unicorn/prefer-url-can-parse': 'off',
            'unicorn/prefer-url-href': 'warn',
            'unicorn/prefer-url-search-parameters': 'error',
            'unicorn/prefer-while-loop-condition': 'warn',
            // Deprecated since v68.0.0. Use unicorn/name-replacements.
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/relative-url-style': ['warn', 'always'],
            'unicorn/require-array-join-separator': 'warn',
            // Use @typescript-eslint/require-array-sort-compare.
            'unicorn/require-array-sort-compare': 'off',
            'unicorn/require-css-escape': ['warn', {
                checkAllSelectors: true,
            }],
            // Applies only to Markdown files.
            'unicorn/require-frontmatter-fields': 'off',
            'unicorn/require-module-attributes': 'warn',
            'unicorn/require-module-specifiers': 'warn',
            'unicorn/require-number-to-fixed-digits-argument': 'warn',
            'unicorn/require-passive-events': 'warn',
            'unicorn/require-post-message-target-origin': 'error',
            'unicorn/require-proxy-trap-boolean-return': 'warn',
            'unicorn/require-spread-parentheses': 'warn',
            'unicorn/require-text-decoder-streaming': 'error',
            // Use @stylistic/multiline-comment-style and jsdoc/multiline-blocks.
            'unicorn/single-line-block-comment-style': 'off',
            'unicorn/string-content': 'off',
            'unicorn/switch-case-braces': 'off',
            'unicorn/switch-case-break-position': 'warn',
            'unicorn/template-indent': ['warn', {
                // The indent option is not set, so the indentation is inferred from the template literal.
                tags: ['outdent', 'dedent', 'gql', 'sql', 'html', 'styled'],
                functions: ['dedent', 'stripIndent'],
                selectors: [],
                comments: ['HTML', 'indent'],
            }],
            'unicorn/text-encoding-identifier-case': ['error', {
                // Prefers the Node.js spelling (`utf8`) over the WHATWG one (`utf-8`).
                withDash: false,
            }],
            'unicorn/throw-new-error': 'warn',
            'unicorn/try-complexity': ['error', {
                max: 1,
            }],
        },
    };
}
