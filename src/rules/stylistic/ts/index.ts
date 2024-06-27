export = {
    plugins: [
        '@stylistic/ts',
    ],
    rules: {
        '@stylistic/js/block-spacing': 'off',
        '@stylistic/ts/block-spacing': ['warn', 'always'],
        '@stylistic/js/brace-style': 'off',
        '@stylistic/ts/brace-style': ['warn', 'stroustrup', {
            allowSingleLine: false,
        }],
        '@stylistic/js/comma-dangle': 'off',
        '@stylistic/ts/comma-dangle': ['warn', {
            arrays: 'always-multiline',
            enums: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            generics: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
            tuples: 'always-multiline',
        }],
        '@stylistic/js/comma-spacing': 'off',
        '@stylistic/ts/comma-spacing': ['warn', {
            before: false,
            after: true,
        }],
        // Renamed. Use https://eslint.style/rules/ts/function-call-spacing.
        '@stylistic/js/func-call-spacing': 'off',
        '@stylistic/ts/func-call-spacing': 'off',
        '@stylistic/js/function-call-spacing': 'off',
        '@stylistic/ts/function-call-spacing': ['warn', 'never'],
        '@stylistic/js/indent': 'off',
        '@stylistic/ts/indent': ['warn', 4, {
            // TODO: Research more options using https://astexplorer.net
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
            ignoredNodes: [

                /**
                 * @workaround https://github.com/typescript-eslint/typescript-eslint/issues/455#issuecomment-580636221
                 */
                'TSTypeParameterInstantiation',
            ],
        }],
        '@stylistic/js/key-spacing': 'off',
        '@stylistic/ts/key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        '@stylistic/js/keyword-spacing': 'off',
        '@stylistic/ts/keyword-spacing': ['warn', {
            before: true,
            after: true,
        }],
        '@stylistic/js/lines-around-comment': 'off',
        '@stylistic/ts/lines-around-comment': ['warn', {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: false,
            afterLineComment: false,
            allowBlockStart: false,
            allowBlockEnd: false,
            allowObjectStart: false,
            allowObjectEnd: false,
            allowArrayStart: false,
            allowArrayEnd: false,
            // No reason to have an empty first line in the beginning of a class declaration,
            // if the first line is an opening of a JSDoc.
            // Keeping an empty line before the JSDoc conflicts with the `padded-blocks` rule.
            allowClassStart: true,
            allowClassEnd: false,
            // TODO: afterHashbangComment: true,
            // TypeScript ESLint
            allowInterfaceStart: true,
            allowInterfaceEnd: true,
            allowTypeStart: true,
            allowTypeEnd: true,
        }],

        '@stylistic/js/lines-between-class-members': 'off',
        '@stylistic/ts/lines-between-class-members': ['warn', 'always', {
            exceptAfterSingleLine: true,
            exceptAfterOverload: true,
        }],
        '@stylistic/ts/member-delimiter-style': ['warn', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: true,
            },
            multilineDetection: 'brackets',
        }],
        '@stylistic/js/no-extra-parens': 'off',
        '@stylistic/ts/no-extra-parens': ['warn', 'all', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- external property
            ignoreJSX: 'all',
            // Nested binary expressions may be hard to break down into named functions
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false,
        }],
        '@stylistic/js/no-extra-semi': 'off',
        '@stylistic/ts/no-extra-semi': 'warn',
        '@stylistic/js/object-curly-newline': 'off',
        '@stylistic/ts/object-curly-newline': ['warn', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ImportDeclaration: { multiline: true },
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ExportDeclaration: { multiline: true },
        }],
        '@stylistic/js/object-curly-spacing': 'off',
        '@stylistic/ts/object-curly-spacing': ['warn', 'always', {
            arraysInObjects: true,
            objectsInObjects: true,
        }],
        '@stylistic/js/object-property-newline': 'off',
        '@stylistic/ts/object-property-newline': ['warn', {
            // In some cases, like object spread, or "re-structuring",
            // having properties on the same line is more readable
            // (e.g. it allows to see the whole object in the search/grep).
            // TODO: This rule can be improved if it can require consistency
            //  and limit inlined properties only to basic expressions (no function calls, ternaries, etc.)
            allowAllPropertiesOnSameLine: true,
        }],
        '@stylistic/js/padding-line-between-statements': 'off',
        '@stylistic/ts/padding-line-between-statements': 'off',
        '@stylistic/js/quote-props': 'off',
        '@stylistic/ts/quote-props': ['warn', 'consistent-as-needed'],
        '@stylistic/js/quotes': 'off',
        '@stylistic/ts/quotes': ['warn', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        '@stylistic/js/semi': 'off',
        '@stylistic/ts/semi': ['warn', 'always'],
        '@stylistic/js/space-before-blocks': 'off',
        '@stylistic/ts/space-before-blocks': ['warn', 'always'],
        '@stylistic/js/space-before-function-paren': 'off',
        '@stylistic/ts/space-before-function-paren': ['warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        '@stylistic/js/space-infix-ops': 'off',
        '@stylistic/ts/space-infix-ops': ['warn', {
            int32Hint: false,
        }],
        '@stylistic/ts/type-annotation-spacing': 'warn',
    },
};
