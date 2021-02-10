export = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
    },
    env: {
        es6: true,
    },
    extends: [
        './rules/eslint',
        './rules/typescript-eslint',
        './rules/typescript-eslint/tslint',
        './rules/array-func',
        './rules/deprecation',
        './rules/eslint-comments',
        './rules/import',
        './rules/jsdoc',
        './rules/node',
        './rules/prefer-arrow',
        './rules/promise',
        './rules/rxjs',
        './rules/simple-import-sort',
        './rules/sonarjs',
        './rules/unicorn',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
            ],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
        'jsdoc': {
            mode: 'typescript',
            tagNamePreference: {
                augments: {
                    message: '@extends is to be used over @augments as it is more evocative of classes than @augments',
                    replacement: 'extends',
                },
                todo: {
                    message: 'Use TODO for comments',
                },
                fires: {
                    replacement: 'emits',
                },
            },
            overrideReplacesDocs: true,
            augmentsExtendsReplacesDocs: false,
            implementsReplacesDoc: false,
        },
    },
    ignorePatterns: ['**/*.d.ts'],
    overrides: [
        {
            // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
            files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
            // TBD: Should environment be a part of the files overrides?
            env: {
                'jest': true,
                // TBD: Is the above option sufficient and can the below option be removed?
                'jest/globals': true,
            },
            extends: [
                './rules/jest',
                './rules/jest-formatting',
            ],
            rules: {
                '@typescript-eslint/ban-ts-comment': ['error', {
                    'ts-expect-error': 'allow-with-description',
                }],
                '@typescript-eslint/init-declarations': 'off',
                'arrow-body-style': ['error', 'as-needed'],
                'max-nested-callbacks': ['error', 4],
                // Each "describe" or "it" is counted as a separated statement
                'max-statements': 'off',
                // Passing promise is required for async testing
                'rxjs/no-topromise': 'off',
            },
        },
    ],
};
