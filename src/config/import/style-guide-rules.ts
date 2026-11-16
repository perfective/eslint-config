import { Linter } from 'eslint';

export const styleGuideRules: Linter.RulesRecord = {
    'import-x/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    // TODO: Research usage
    'import-x/dynamic-import-chunkname': 'off',
    'import-x/exports-last': 'off',
    'import-x/extensions': ['error', 'never', {
        checkSelfReference: true,
        checkTypeImports: true,
        // The fixer is opt-in. Keep reporting imports for a manual fix.
        fix: false,
    }],
    'import-x/first': 'off',
    'import-x/group-exports': 'off',
    'import-x/max-dependencies': 'off',
    'import-x/newline-after-import': ['warn', {
        considerComments: true,
    }],
    'import-x/no-anonymous-default-export': 'error',
    'import-x/no-default-export': 'error',
    // TODO: This rule now has the "ignore" option.
    //  Should this rule be enabled by default?
    'import-x/no-duplicates': ['warn', {
        'considerQueryString': true,
        'prefer-inline': true,
    }],
    'import-x/no-named-default': 'error',
    'import-x/no-named-export': 'off',
    'import-x/no-namespace': 'off',
    'import-x/no-unassigned-import': 'error',
    'import-x/order': ['off', {
        'groups': ['unknown', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': {
            order: 'asc',
            caseInsensitive: false,
        },
    }],
    'import-x/prefer-default-export': 'off',
    'import-x/prefer-namespace-import': ['warn', {
        patterns: [],
    }],
};
