export = {
    rules: {
        'array-bracket-newline': [
            'error',
            { multiline: true }
        ],
        'array-bracket-spacing': [
            'error',
            'always',
            {
                arraysInArrays: false,
                objectsInArrays: false
            }
        ],
        'array-element-newline': [
            'error',
            'consistent'
        ],
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            'stroustrup',
            { allowSingleLine: false }
        ],
        camelcase: 'error',
        'capitalized-comments': [
            'error',
            'always',
            { ignoreConsecutiveComments: true }
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'only-multiline',
                functions: 'only-multiline'
            }
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-this': [
            'error',
            'self'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'func-name-matching': [
            'error',
            'always'
        ],
        'func-names': [
            'error',
            'always'
        ],
        'func-style': [
            'error',
            'declaration'
        ],
        'function-paren-newline': [
            'error',
            'consistent'
        ],
        'id-blacklist': 'error',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': [
            'error',
            'beside'
        ],
        indent: [
            'error',
            4
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'line-comment-position': [
            'error',
            'above'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': [
            'error',
            {
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
                allowClassStart: false,
                allowClassEnd: false
            }
        ],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true }
        ],
        'max-depth': 'error',
        'max-len': [
            'error',
            {
                code: 100,
                tabWidth: 4
            }
        ],
        'max-lines-per-function': [ 'error', 25 ],
        'max-nested-callbacks': [ 'error', 2 ],
        'max-params': [
            'error',
            { max: 3 }
        ],
        'max-statements': [
            'error',
            { max: 10 }
        ],
        'max-statements-per-line': [
            'error',
            { max: 1 }
        ],
        'multiline-comment-style': [
            'error',
            'separate-lines'
        ],
        'multiline-ternary': [
            'error',
            'always'
        ],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true,
                properties: true
            }
        ],
        'new-parens': 'error',
        'newline-per-chained-call': [
            'error',
            { ignoreChainWithDepth: 2 }
        ],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 0,
                maxBOF: 0
            }
        ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-restricted-syntax': [ 'error', 'ForInStatement' ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': [
            'error',
            'below'
        ],
        'object-curly-newline': [
            'error',
            { multiline: true }
        ],
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: false }
        ],
        'one-var': [
            'error',
            'never'
        ],
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': [
            'error',
            'before'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'padding-line-between-statements': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: [
            'error',
            'single',
            { avoidEscape: true }
        ],
        semi: [
            'error',
            'always'
        ],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        'spaced-comment': [
            'error',
            'always'
        ],
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'template-tag-spacing': [
            'error',
            'never'
        ],
        'unicode-bom': [
            'error',
            'never'
        ],
        'wrap-regex': 'error'
    }
};