export = {
    rules: {
        'accessor-pairs': 'error',
        // The "never" setting is great to prevent nested callbacks,
        // but it can be addressed by other rules.
        // At the same time this rule does not handle high-order functions,
        // where whole body of the function is in the arrow function.
        // The same problem is with the test files, where this rule is always disabled.
        'arrow-body-style': ['error', 'as-needed'],
        'block-scoped-var': 'error',
        // See @typescript-eslint/naming-convention
        'camelcase': 'off',
        'capitalized-comments': ['warn', 'always', {
            ignorePattern: 'eslint|tslint',
            ignoreConsecutiveComments: true,
        }],
        'class-methods-use-this': 'off',
        'complexity': ['error', 3],
        'consistent-return': 'error',
        'consistent-this': ['error', 'self'],
        'curly': ['warn', 'all'],
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': ['warn', {
            allowKeywords: true,
        }],
        'eqeqeq': ['warn', 'always'],
        'func-name-matching': ['error', 'always'],
        'func-names': ['error', 'always'],
        'func-style': ['error', 'declaration'],
        'grouped-accessor-pairs': ['error', 'setBeforeGet'],
        'guard-for-in': 'error',
        'id-denylist': ['error', 'arr', 'ctx', 'el', 'elem', 'err', 'ind', 'ptr'],
        'id-length': 'off',
        'id-match': 'off',
        'init-declarations': ['error', 'always'],
        'logical-assignment-operators': ['warn', 'always', {
            enforceForIfStatements: true,
        }],
        'max-classes-per-file': ['error', 1],
        'max-depth': ['error', 4],
        // Business object may have many properties and even with basic logic will have many lines of code.
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': ['error', 2],
        // This rule does not allow separating functions and constructors.
        // Constructors may have properties declarations,
        // and be used for dependency injections,
        // making it impossible to limit parameters count.
        'max-params': ['off', {
            max: 3,
        }],
        // Checking for function complexity is enough, while this rule is overridden for test files anyway
        'max-statements': ['off', {
            max: 10,
        }],
        'multiline-comment-style': ['warn', 'separate-lines'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: true,
            properties: true,
        }],
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-confusing-arrow': ['warn', {
            allowParens: true,
            onlyOneSimpleParam: false,
        }],
        'no-console': 'error',
        'no-continue': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'warn',
        'no-else-return': ['warn', {
            allowElseIf: false,
        }],
        'no-empty': 'error',
        'no-empty-function': 'error',
        'no-empty-static-block': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-extra-label': 'warn',
        'no-extra-semi': 'warn',
        'no-floating-decimal': 'warn',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'warn',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': ['error', {
            ignorePattern: '^ == .+',
        }],
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'warn',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': ['error', {
            groups: [
                ['+', '-'],
                ['*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||', '?:', '??'],
                ['in', 'instanceof'],
            ],
            allowSamePrecedence: true,
        }],
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'warn',
        'no-restricted-exports': 'off',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-properties': 'error',
        // Using i++ in the for() loops is a classic pattern.
        // Rather disallow using loops at all and use filter/map/reduce instead.
        'no-restricted-syntax': ['error', 'ForInStatement'],
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-sequences': ['error', {
            allowInParentheses: false,
        }],
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-undef-init': 'warn',
        'no-undefined': 'off',
        'no-underscore-dangle': ['error', {
            allowAfterSuper: false,
            // Allow to have an underscore as a private property name with a corresponding public method without it.
            allowAfterThis: true,
            allowAfterThisConstructor: false,
            // Allow underscore prefix for unused parameters
            allowFunctionParams: true,
            // Only private properties should use underscore.
            // Public and protected properties should be access through an accessor method.
            enforceInMethodNames: true,
            // Disallow dangling underscores in es2022 class fields names
            enforceInClassFields: true,
        }],
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'warn',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-var': 'warn',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'object-shorthand': ['warn', 'always'],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn', 'always'],
        'operator-assignment': ['warn', 'always'],
        'prefer-arrow-callback': 'warn',
        'prefer-const': 'warn',
        'prefer-destructuring': ['warn', {
            object: false,
            array: false,
        }],
        'prefer-exponentiation-operator': 'warn',
        // ECMAScript 2018
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'warn',
        // ECMAScript 2022
        'prefer-object-has-own': 'off',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'warn',
        'quote-props': ['warn', 'consistent-as-needed'],
        'radix': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'require-yield': 'error',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': ['warn', 'always', {
            line: {
                // Compatibility with "@typescript-eslint/triple-slash-reference"
                markers: ['/ <reference'],
            },
        }],
        'strict': 'warn',
        'symbol-description': 'error',
        'vars-on-top': 'error',
        'yoda': ['warn', 'never'],
    },
};
