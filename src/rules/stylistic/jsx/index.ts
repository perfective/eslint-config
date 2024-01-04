export = {
    plugins: [
        '@stylistic/jsx',
    ],
    rules: {
        '@stylistic/jsx/jsx-child-element-spacing': 'error',
        '@stylistic/jsx/jsx-closing-bracket-location': ['warn', {
            selfClosing: 'after-props',
            nonEmpty: 'after-props',
        }],
        '@stylistic/jsx/jsx-closing-tag-location': 'warn',
        // See the react/jsx-no-comment-textnodes and react/jsx-no-literals rules
        '@stylistic/jsx/jsx-curly-brace-presence': ['warn', {
            props: 'never',
            children: 'always',
            propElementValues: 'always',
        }],
        '@stylistic/jsx/jsx-curly-newline': ['warn', 'never'],
        '@stylistic/jsx/jsx-curly-spacing': ['warn', {
            when: 'never',
            attributes: {
                allowMultiline: false,
            },
            children: {
                allowMultiline: false,
            },
        }],
        '@stylistic/jsx/jsx-equals-spacing': ['warn', 'never'],
        '@stylistic/jsx/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
        // See the 'indent' and '@typescript-eslint/indent' rules
        '@stylistic/jsx/jsx-indent': ['warn', 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        '@stylistic/jsx/jsx-indent-props': ['warn', {
            indentMode: 1,
            ignoreTernaryOperator: false,
        }],
        '@stylistic/jsx/jsx-max-props-per-line': ['warn', {
            maximum: 1,
            when: 'always',
        }],
        '@stylistic/jsx/jsx-newline': 'off',
        '@stylistic/jsx/jsx-one-expression-per-line': ['warn', {
            allow: 'single-child',
        }],
        '@stylistic/jsx/jsx-props-no-multi-spaces': 'warn',
        '@stylistic/jsx/jsx-self-closing-comp': ['warn', {
            component: true,
            html: true,
        }],
        '@stylistic/jsx/jsx-sort-props': ['warn', {
            ignoreCase: false,
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            multiline: 'ignore',
            noSortAlphabetically: false,
            reservedFirst: true,
            locale: 'auto',
        }],
        '@stylistic/jsx/jsx-tag-spacing': ['warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        '@stylistic/jsx/jsx-wrap-multilines': ['warn', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
        }],
    },
};
