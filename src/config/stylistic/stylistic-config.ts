import { Linter } from 'eslint';

import eslintPluginStylistic from '@stylistic/eslint-plugin';

export function stylisticConfig(): Linter.Config {
    return {
        plugins: {
            '@stylistic': eslintPluginStylistic,
        },
        rules: {
            '@stylistic/array-bracket-newline': ['warn', 'consistent'],
            '@stylistic/array-bracket-spacing': ['warn', 'never'],
            '@stylistic/array-element-newline': ['warn', 'consistent'],
            '@stylistic/arrow-parens': ['warn', 'as-needed'],
            '@stylistic/arrow-spacing': ['warn', {
                before: true,
                after: true,
            }],
            '@stylistic/block-spacing': ['warn', 'always'],
            '@stylistic/brace-style': ['warn', 'stroustrup', {
                allowSingleLine: false,
            }],
            '@stylistic/comma-dangle': ['warn', {
                arrays: 'always-multiline',
                enums: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
                generics: 'always-multiline',
                imports: 'always-multiline',
                objects: 'always-multiline',
                tuples: 'always-multiline',
            }],
            '@stylistic/comma-spacing': ['warn', {
                before: false,
                after: true,
            }],

            '@stylistic/comma-style': ['warn', 'last'],
            '@stylistic/computed-property-spacing': ['warn', 'never'],
            '@stylistic/curly-newline': ['warn', {
                minElements: 1,
            }],
            '@stylistic/dot-location': ['warn', 'property'],
            '@stylistic/eol-last': ['warn', 'always'],
            '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
            '@stylistic/function-call-spacing': ['warn', 'never'],
            '@stylistic/function-paren-newline': ['warn', 'consistent'],
            '@stylistic/generator-star-spacing': ['warn', {
                before: true,
                after: false,
            }],
            '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
            '@stylistic/indent': ['warn', 4, {
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
            '@stylistic/indent-binary-ops': ['warn', 4],
            '@stylistic/jsx-child-element-spacing': 'error',
            '@stylistic/jsx-closing-bracket-location': ['warn', {
                selfClosing: 'after-props',
                nonEmpty: 'after-props',
            }],
            '@stylistic/jsx-closing-tag-location': ['warn', 'tag-aligned'],
            // See the react/jsx-no-comment-textnodes and react/jsx-no-literals rules
            '@stylistic/jsx-curly-brace-presence': ['warn', {
                props: 'never',
                children: 'always',
                propElementValues: 'always',
            }],
            '@stylistic/jsx-curly-newline': ['warn', 'never'],
            '@stylistic/jsx-curly-spacing': ['warn', {
                when: 'never',
                attributes: {
                    allowMultiline: false,
                },
                children: {
                    allowMultiline: false,
                },
            }],
            '@stylistic/jsx-equals-spacing': ['warn', 'never'],
            '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
            '@stylistic/jsx-function-call-newline': ['warn', 'multiline'],
            // Deprecated since v2.3.0.
            // Use the '@stylistic/indent' rule instead.
            '@stylistic/jsx-indent': 'off',
            '@stylistic/jsx-indent-props': ['warn', {
                indentMode: 1,
                ignoreTernaryOperator: false,
            }],
            '@stylistic/jsx-max-props-per-line': ['warn', {
                maximum: 1,
                when: 'always',
            }],
            '@stylistic/jsx-newline': 'off',
            '@stylistic/jsx-one-expression-per-line': ['warn', {
                allow: 'single-child',
            }],
            '@stylistic/jsx-pascal-case': ['error', {
                allowAllCaps: false,
                allowLeadingUnderscore: false,
                allowNamespace: false,
                ignore: [],
            }],
            // Deprecated. Use `@stylistic/no-multi-spaces` instead.
            '@stylistic/jsx-props-no-multi-spaces': 'off',
            '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
            '@stylistic/jsx-self-closing-comp': ['warn', {
                component: true,
                html: true,
            }],
            '@stylistic/jsx-sort-props': ['warn', {
                ignoreCase: false,
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                multiline: 'ignore',
                noSortAlphabetically: false,
                reservedFirst: true,
                locale: 'auto',
            }],
            '@stylistic/jsx-tag-spacing': ['warn', {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            }],
            '@stylistic/jsx-wrap-multilines': ['warn', {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            }],
            '@stylistic/key-spacing': ['warn', {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            }],
            '@stylistic/keyword-spacing': ['warn', {
                before: true,
                after: true,
            }],
            '@stylistic/line-comment-position': ['error', {
                position: 'above',
                ignorePattern: '^ == .+',
            }],
            '@stylistic/linebreak-style': ['warn', 'unix'],
            '@stylistic/lines-around-comment': ['warn', {
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
                // TODO: Enable the next line
                //  afterHashbangComment: true,
                // TypeScript ESLint
                allowInterfaceStart: true,
                allowInterfaceEnd: true,
                allowTypeStart: true,
                allowTypeEnd: true,
            }],
            '@stylistic/lines-between-class-members': ['warn', 'always', {
                exceptAfterSingleLine: true,
                exceptAfterOverload: true,
            }],
            // TODO: Enable once the rule is not experimental.
            '@stylistic/exp-list-style': 'off',
            '@stylistic/max-len': ['error', {
                code: 120,
                tabWidth: 4,
                ignoreRegExpLiterals: true,
                ignoreUrls: true,
            }],
            '@stylistic/max-statements-per-line': ['error', {
                max: 1,
            }],
            '@stylistic/member-delimiter-style': ['warn', {
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
            '@stylistic/multiline-comment-style': ['warn', 'separate-lines', {
                // eslint-disable-next-line @typescript-eslint/naming-convention -- external rule name
                checkJSDoc: false,
            }],
            '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
            '@stylistic/new-parens': 'warn',
            // As long as the line is under the length limit, it should be ok to have any number of calls.
            // The real challenge is to enforce a new line in custom situations, e.g. before ".pipe()" or ".then()".
            // Especially this is a problem in TypeScript, where indents do not work properly all the time (yet).
            '@stylistic/newline-per-chained-call': ['off', {
                ignoreChainWithDepth: 3,
            }],
            '@stylistic/no-confusing-arrow': ['warn', {
                allowParens: true,
                onlyOneSimpleParam: false,
            }],
            '@stylistic/no-extra-parens': ['warn', 'all', {
                // eslint-disable-next-line @typescript-eslint/naming-convention -- external property
                ignoreJSX: 'all',
                // Nested binary expressions may be hard to break down into named functions
                nestedBinaryExpressions: false,
                nestedConditionalExpressions: false,
                ternaryOperandBinaryExpressions: false,
                ignoredNodes: [
                    // Replaces deprecated "enforceForArrowConditionals: false"
                    'ArrowFunctionExpression[body.type=ConditionalExpression]',
                ],
            }],
            '@stylistic/no-extra-semi': 'warn',
            '@stylistic/no-floating-decimal': 'warn',
            '@stylistic/no-mixed-operators': ['error', {
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
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': 'warn',
            '@stylistic/no-multiple-empty-lines': ['warn', {
                max: 1,
                // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
                maxEOF: 0,
                // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
                maxBOF: 0,
            }],
            '@stylistic/no-tabs': 'error',
            // For imports and exports this rule may conflict with the "max-len" rule,
            // as it is possible to have an import or export declaration that is too long.
            '@stylistic/no-trailing-spaces': 'warn',
            '@stylistic/no-whitespace-before-property': 'warn',
            '@stylistic/nonblock-statement-body-position': ['warn', 'below'],
            '@stylistic/object-curly-newline': ['warn', {
                // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
                ImportDeclaration: { multiline: true },
                // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
                ExportDeclaration: { multiline: true },
            }],
            '@stylistic/object-curly-spacing': ['warn', 'always', {
                arraysInObjects: true,
                emptyObjects: 'never',
                objectsInObjects: true,
            }],
            '@stylistic/object-property-newline': ['warn', {
                // In some cases, like object spread, or "re-structuring",
                // having properties on the same line is more readable
                // (e.g. it allows to see the whole object in the search/grep).
                // TODO: This rule can be improved if it can require consistency
                //  and limit inlined properties only to basic expressions (no function calls, ternaries, etc.)
                allowAllPropertiesOnSameLine: true,
            }],
            '@stylistic/one-var-declaration-per-line': ['warn', 'always'],
            '@stylistic/operator-linebreak': ['warn', 'before', {
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
            '@stylistic/padded-blocks': ['warn', 'never'],
            '@stylistic/padding-line-between-statements': 'off',
            '@stylistic/quote-props': ['warn', 'consistent-as-needed'],
            '@stylistic/quotes': ['warn', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: 'always',
                ignoreStringLiterals: false,
            }],
            '@stylistic/rest-spread-spacing': ['warn', 'never'],
            '@stylistic/semi': ['warn', 'always'],
            '@stylistic/semi-spacing': ['warn', {
                before: false,
                after: true,
            }],
            '@stylistic/semi-style': ['warn', 'last'],
            '@stylistic/space-before-blocks': ['warn', 'always'],
            '@stylistic/space-before-function-paren': ['warn', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            }],
            '@stylistic/space-in-parens': ['warn', 'never'],
            '@stylistic/space-infix-ops': ['warn', {
                int32Hint: false,
            }],
            '@stylistic/space-unary-ops': ['warn', {
                words: true,
                nonwords: false,
            }],
            '@stylistic/spaced-comment': ['warn', 'always', {
                line: {
                    // Compatibility with "@typescript-eslint/triple-slash-reference"
                    markers: ['/ <reference'],
                },
            }],
            '@stylistic/switch-colon-spacing': ['warn', {
                after: true,
                before: false,
            }],
            '@stylistic/template-curly-spacing': ['warn', 'never'],
            '@stylistic/template-tag-spacing': ['warn', 'never'],
            '@stylistic/type-annotation-spacing': 'warn',
            '@stylistic/type-generic-spacing': 'warn',
            '@stylistic/type-named-tuple-spacing': 'warn',
            '@stylistic/wrap-iife': ['warn', 'outside'],
            '@stylistic/wrap-regex': 'warn',
            '@stylistic/yield-star-spacing': ['warn', {
                before: true,
                after: false,
            }],
        },
    };
}
