export = {
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['warn', 'consistent'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': ['warn', {
            before: true,
            after: true,
        }],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', 'stroustrup', {
            allowSingleLine: false,
        }],
        'comma-dangle': ['warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        'comma-spacing': ['warn', {
            before: false,
            after: true,
        }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'dot-location': ['warn', 'property'],
        'eol-last': ['warn', 'always'],
        'func-call-spacing': ['warn', 'never'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': ['warn', 'consistent'],
        'generator-star-spacing': ['warn', {
            before: true,
            after: false,
        }],
        'implicit-arrow-linebreak': ['warn', 'beside'],
        'indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
        }],
        'jsx-quotes': ['warn', 'prefer-double'],
        'key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'keyword-spacing': ['warn', {
            before: true,
            after: true,
        }],
        'line-comment-position': ['error', {
            position: 'above',
            ignorePattern: '^ == .+',
        }],
        'linebreak-style': ['warn', 'unix'],
        'lines-around-comment': ['warn', {
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
        }],
        'lines-between-class-members': ['warn', 'always', {
            exceptAfterSingleLine: true,
        }],
        'max-len': ['error', {
            code: 120,
            tabWidth: 4,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
        }],
        'max-statements-per-line': ['error', {
            max: 1,
        }],
        'multiline-ternary': ['warn', 'always-multiline'],
        'new-parens': 'warn',
        // As long as the line is under the length limit, it should be ok to have any number of calls.
        // The real challenge is to enforce a new line in custom situations, e.g. before ".pipe()" or ".then()".
        // Especially this is a problem in TypeScript, where indents do not work properly all the time (yet).
        'newline-per-chained-call': ['off', {
            ignoreChainWithDepth: 3,
        }],
        'no-extra-parens': ['warn', 'all', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- external property
            ignoreJSX: 'all',
            // Nested binary expressions may be hard to break down into named functions
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false,
        }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'warn',
        'no-multiple-empty-lines': ['warn', {
            max: 1,
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            maxEOF: 0,
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            maxBOF: 0,
        }],
        'no-tabs': 'error',
        'no-trailing-spaces': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': ['warn', 'below'],
        // For imports and exports this rule may conflict with the "max-len" rule,
        // as it is possible to have an import or export declaration that is too long.
        'object-curly-newline': ['warn', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ImportDeclaration: { multiline: true },
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ExportDeclaration: { multiline: true },
        }],
        'object-curly-spacing': ['warn', 'always', {
            arraysInObjects: true,
            objectsInObjects: true,
        }],
        'object-property-newline': ['warn', {
            // In some cases, like object spread, or "re-structuring",
            // having properties on the same line is more readable
            // (e.g. it allows to see the whole object in the search/grep).
            // TODO: This rule can be improved if it can require consistency
            //  and limit inlined properties only to basic expressions (no function calls, ternaries, etc.)
            allowAllPropertiesOnSameLine: true,
        }],
        'operator-linebreak': ['warn', 'before', {
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
        'padded-blocks': ['warn', 'never'],
        'padding-line-between-statements': 'off',
        'quotes': ['warn', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        'rest-spread-spacing': ['warn', 'never'],
        'semi': ['warn', 'always'],
        'semi-spacing': ['warn', {
            before: false,
            after: true,
        }],
        'semi-style': ['warn', 'last'],
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': ['warn', {
            int32Hint: false,
        }],
        'space-unary-ops': ['warn', {
            words: true,
            nonwords: false,
        }],
        'switch-colon-spacing': ['warn', {
            after: true,
            before: false,
        }],
        'template-curly-spacing': ['warn', 'never'],
        'template-tag-spacing': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'wrap-iife': ['warn', 'outside'],
        'wrap-regex': 'warn',
        'yield-star-spacing': ['warn', {
            before: true,
            after: false,
        }],
    },
};
