export = {
    rules: {
        'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
        // TODO: Research usage
        'import/dynamic-import-chunkname': 'off',
        'import/exports-last': 'off',
        'import/extensions': ['error', 'never', {
            checkTypeImports: true,
        }],
        'import/first': 'off',
        'import/group-exports': 'off',
        'import/max-dependencies': 'off',
        'import/newline-after-import': ['warn', {
            considerComments: true,
        }],
        'import/no-anonymous-default-export': 'error',
        'import/no-default-export': 'error',
        // TODO: This rule now has the "ignore" option.
        //  Should this rule be enabled by default?
        'import/no-duplicates': ['warn', {
            'considerQueryString': true,
            'prefer-inline': true,
        }],
        'import/no-named-default': 'error',
        'import/no-named-export': 'off',
        'import/no-namespace': 'off',
        'import/no-unassigned-import': 'error',
        'import/order': ['off', {
            'groups': ['unknown', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            'alphabetize': {
                order: 'asc',
                caseInsensitive: false,
            },
        }],
        'import/prefer-default-export': 'off',
    },
};
