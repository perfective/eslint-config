export = {
    rules: {
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['warn', 'stroustrup', {
            allowSingleLine: false,
        }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['warn', {
            arrays: 'always-multiline',
            enums: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            generics: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
            tuples: 'always-multiline',
        }],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['warn', {
            before: false,
            after: true,
        }],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['warn', {
            allowKeywords: true,
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
        }],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['warn', 'never'],
        'indent': 'off',
        // TODO: Research more options using https://astexplorer.net
        '@typescript-eslint/indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
            ignoredNodes: [

                /**
                 * @workaround https://github.com/typescript-eslint/typescript-eslint/issues/455#issuecomment-580636221
                 */
                'TSTypeParameterInstantiation',
            ],
        }],
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': ['error', 'always'],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['warn', {
            before: true,
            after: true,
        }],
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['warn', 'always', {
            exceptAfterSingleLine: true,
            exceptAfterOverload: true,
        }],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-duplicate-imports': 'off',
        // The rule is deprecated. Use imports/no-duplicates instead.
        '@typescript-eslint/no-duplicate-imports': ['off', {
            includeExports: true,
        }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', {
            allow: ['protected-constructors', 'private-constructors'],
        }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['warn', 'all', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- external property
            ignoreJSX: 'all',
            // Nested binary expressions may be hard to break down into named functions
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false,
        }],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'warn',
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
        '@typescript-eslint/no-restricted-imports': ['error', {
            allowTypeImports: false,
        }],
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
            typedefs: false,
        }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['warn', 'always', {
            arraysInObjects: true,
            objectsInObjects: true,
        }],
        'padding-line-between-statements': 'off',
        '@typescript-eslint/padding-line-between-statements': 'off',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['warn', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['warn', 'never'],
        'semi': 'off',
        '@typescript-eslint/semi': ['warn', 'always'],
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': ['warn', {
            int32Hint: false,
        }],
    },
};
