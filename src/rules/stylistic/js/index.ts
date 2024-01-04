export = {
    plugins: [
        '@stylistic/js',
    ],
    rules: {
        '@stylistic/js/array-bracket-newline': ['warn', 'consistent'],
        '@stylistic/js/array-bracket-spacing': ['warn', 'never'],
        '@stylistic/js/array-element-newline': ['warn', 'consistent'],
        '@stylistic/js/arrow-parens': ['warn', 'as-needed'],
        '@stylistic/js/arrow-spacing': ['warn', {
            before: true,
            after: true,
        }],
        '@stylistic/js/block-spacing': ['warn', 'always'],
        '@stylistic/js/brace-style': ['warn', 'stroustrup', {
            allowSingleLine: false,
        }],
        '@stylistic/js/comma-dangle': ['warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        '@stylistic/js/comma-spacing': ['warn', {
            before: false,
            after: true,
        }],
        '@stylistic/js/comma-style': ['warn', 'last'],
        '@stylistic/js/computed-property-spacing': ['warn', 'never'],
        '@stylistic/js/dot-location': ['warn', 'property'],
        '@stylistic/js/eol-last': ['warn', 'always'],
        // Renamed. Use https://eslint.style/rules/js/function-call-spacing.
        '@stylistic/js/func-call-spacing': 'off',
        '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
        '@stylistic/js/function-call-spacing': ['warn', 'never'],
        '@stylistic/js/function-paren-newline': ['warn', 'consistent'],
        '@stylistic/js/generator-star-spacing': ['warn', {
            before: true,
            after: false,
        }],
        '@stylistic/js/implicit-arrow-linebreak': ['warn', 'beside'],
        '@stylistic/js/indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
        }],
        '@stylistic/js/jsx-quotes': ['warn', 'prefer-double'],
        '@stylistic/js/key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        '@stylistic/js/keyword-spacing': ['warn', {
            before: true,
            after: true,
        }],
        '@stylistic/js/linebreak-style': ['warn', 'unix'],
        '@stylistic/js/lines-around-comment': ['warn', {
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
            afterHashbangComment: true,
        }],
        '@stylistic/js/lines-between-class-members': ['warn', 'always', {
            exceptAfterSingleLine: true,
        }],
        '@stylistic/js/max-len': ['error', {
            code: 120,
            tabWidth: 4,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
        }],
        '@stylistic/js/max-statements-per-line': ['error', {
            max: 1,
        }],
        '@stylistic/js/multiline-ternary': ['warn', 'always-multiline'],
        '@stylistic/js/new-parens': 'warn',
        // As long as the line is under the length limit, it should be ok to have any number of calls.
        // The real challenge is to enforce a new line in custom situations, e.g. before ".pipe()" or ".then()".
        // Especially this is a problem in TypeScript, where indents do not work properly all the time (yet).
        '@stylistic/js/newline-per-chained-call': ['off', {
            ignoreChainWithDepth: 3,
        }],
        '@stylistic/js/no-confusing-arrow': ['warn', {
            allowParens: true,
            onlyOneSimpleParam: false,
        }],
        '@stylistic/js/no-extra-parens': ['warn', 'all', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- external property
            ignoreJSX: 'all',
            // Nested binary expressions may be hard to break down into named functions
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false,
            ternaryOperandBinaryExpressions: false,
        }],
        '@stylistic/js/no-extra-semi': 'warn',
        '@stylistic/js/no-floating-decimal': 'warn',
        '@stylistic/js/no-mixed-operators': ['error', {
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
        '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/js/no-multi-spaces': 'warn',
        '@stylistic/js/no-multiple-empty-lines': ['warn', {
            max: 1,
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            maxEOF: 0,
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            maxBOF: 0,
        }],
        '@stylistic/js/no-tabs': 'error',
        // For imports and exports this rule may conflict with the "max-len" rule,
        // as it is possible to have an import or export declaration that is too long.
        '@stylistic/js/no-trailing-spaces': 'warn',
        '@stylistic/js/no-whitespace-before-property': 'warn',
        '@stylistic/js/nonblock-statement-body-position': ['warn', 'below'],
        '@stylistic/js/object-curly-newline': ['warn', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ImportDeclaration: { multiline: true },
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ExportDeclaration: { multiline: true },
        }],
        '@stylistic/js/object-curly-spacing': ['warn', 'always', {
            arraysInObjects: true,
            objectsInObjects: true,
        }],
        '@stylistic/js/object-property-newline': ['warn', {
            // In some cases, like object spread, or "re-structuring",
            // having properties on the same line is more readable
            // (e.g. it allows to see the whole object in the search/grep).
            // TODO: This rule can be improved if it can require consistency
            //  and limit inlined properties only to basic expressions (no function calls, ternaries, etc.)
            allowAllPropertiesOnSameLine: true,
        }],
        '@stylistic/js/one-var-declaration-per-line': ['warn', 'always'],
        '@stylistic/js/operator-linebreak': ['warn', 'before', {
            overrides: {
                '=': 'none',
                '==': 'none',
                '!=': 'none',
                '>=': 'none',
                '<=': 'none',
                '===': 'none',
                '+=': 'none',
            },
        }],
        '@stylistic/js/padded-blocks': ['warn', 'never'],
        '@stylistic/js/padding-line-between-statements': 'off',
        '@stylistic/js/quote-props': ['warn', 'consistent-as-needed'],
        '@stylistic/js/quotes': ['warn', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        '@stylistic/js/rest-spread-spacing': ['warn', 'never'],
        '@stylistic/js/semi': ['warn', 'always'],
        '@stylistic/js/semi-spacing': ['warn', {
            before: false,
            after: true,
        }],
        '@stylistic/js/semi-style': ['warn', 'last'],
        '@stylistic/js/space-before-blocks': ['warn', 'always'],
        '@stylistic/js/space-before-function-paren': ['warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        '@stylistic/js/space-in-parens': ['warn', 'never'],
        '@stylistic/js/space-infix-ops': ['warn', {
            int32Hint: false,
        }],
        '@stylistic/js/space-unary-ops': ['warn', {
            words: true,
            nonwords: false,
        }],
        '@stylistic/js/spaced-comment': ['warn', 'always', {
            line: {
                // Compatibility with "@typescript-eslint/triple-slash-reference"
                markers: ['/ <reference'],
            },
        }],
        '@stylistic/js/switch-colon-spacing': ['warn', {
            after: true,
            before: false,
        }],
        '@stylistic/js/template-curly-spacing': ['warn', 'never'],
        '@stylistic/js/template-tag-spacing': ['warn', 'never'],
        '@stylistic/js/wrap-iife': ['warn', 'outside'],
        '@stylistic/js/wrap-regex': 'warn',
        '@stylistic/js/yield-star-spacing': ['warn', {
            before: true,
            after: false,
        }],
    },
};
