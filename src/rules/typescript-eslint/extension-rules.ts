export = {
    rules: {
        // Deprecated. Use https://eslint.style/rules/ts/block-spacing.
        'block-spacing': 'off',
        '@typescript-eslint/block-spacing': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/brace-style.
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/class-methods-use-this': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/comma-dangle.
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/comma-spacing.
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['warn', {
            allowKeywords: true,
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
        }],
        // Deprecated. Use https://eslint.style/rules/ts/function-call-spacing.
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/indent.
        'indent': 'off',
        '@typescript-eslint/indent': 'off',
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': ['error', 'always'],
        // Deprecated. Use https://eslint.style/rules/ts/key-spacing.
        'key-spacing': 'off',
        '@typescript-eslint/key-spacing': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/keyword-spacing.
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/lines-around-comment.
        'lines-around-comment': 'off',
        '@typescript-eslint/lines-around-comment': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/lines-between-class-members.
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', {
            allow: ['protected-constructors', 'private-constructors'],
        }],
        // Deprecated. Use https://eslint.style/rules/ts/no-extra-parens.
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/no-extra-semi.
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': ['error', {}],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': ['error', {
            allowThrowingAny: false,
            allowThrowingUnknown: false,
        }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            args: 'after-used',
            // TypeScript recognizes underscore for unused parameters
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: false,
            vars: 'all',
        }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
            functions: false,
            classes: false,
            variables: false,
            allowNamedExports: false,
            enums: false,
            typedefs: false,
            ignoreTypeReferences: false,
        }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // Deprecated. Use https://eslint.style/rules/ts/object-curly-spacing.
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/padding-line-between-statements.
        'padding-line-between-statements': 'off',
        '@typescript-eslint/padding-line-between-statements': 'off',
        'prefer-destructuring': 'off',
        '@typescript-eslint/prefer-destructuring': 'off',
        'prefer-promise-reject-errors': 'off',
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        // Deprecated. Use https://eslint.style/rules/ts/quotes.
        'quotes': 'off',
        '@typescript-eslint/quotes': 'off',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['warn', 'never'],
        // Deprecated. Use https://eslint.style/rules/ts/semi.
        'semi': 'off',
        '@typescript-eslint/semi': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/space-before-blocks.
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/space-before-function-paren.
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        // Deprecated. Use https://eslint.style/rules/ts/space-infix-ops.
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'off',
    },
};
