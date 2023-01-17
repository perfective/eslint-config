export = {
    rules: {
        'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
        'import/first': 'off',
        'import/exports-last': 'off',
        'import/no-duplicates': ['warn', {
            'considerQueryString': true,
            'prefer-inline': true,
        }],
        // TODO: This rule now has the "ignore" option.
        //  Should this rule be enabled by default?
        'import/no-namespace': 'off',
        'import/extensions': ['error', 'never'],
        'import/order': ['off', {
            'groups': ['unknown', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            'alphabetize': {
                order: 'asc',
                caseInsensitive: false,
            },
        }],
        'import/newline-after-import': ['warn', {
            considerComments: true,
        }],
        'import/prefer-default-export': 'off',
        'import/max-dependencies': 'off',
        'import/no-unassigned-import': 'error',
        'import/no-named-default': 'error',
        'import/no-default-export': 'error',
        'import/no-named-export': 'off',
        'import/no-anonymous-default-export': 'error',
        'import/group-exports': 'off',
        // TODO: Research usage
        'import/dynamic-import-chunkname': 'off',
    },
};
