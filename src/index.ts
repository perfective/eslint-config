import { optionalOverrides, optionalRules } from './config/plugin';
import {
    cypressImportNoExtraneousDependencies,
    jestImportNoExtraneousDependencies,
    jsImportNoExtraneousDependencies,
} from './rules/import/rules/no-extraneous-dependencies';

export = {
    env: {
        // Overrides only extend this environment, but not other overrides (unlike rules and plugins)
        es6: true,
    },
    ignorePatterns: ['**/*.d.ts', '**/dist'],
    overrides: [
        {
            files: ['*.[jt]s?(x)'],
            extends: [
                './rules/eslint',
                './rules/array-func',
                './rules/eslint-comments',
                './rules/import',
                './rules/jsdoc',
                './rules/node',
                './rules/prefer-arrow',
                './rules/promise',
                './rules/simple-import-sort',
                './rules/sonarjs',
                './rules/unicorn',
            ],
        },
        {
            files: ['*.js?(x)'],
            parser: '@babel/eslint-parser',
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                requireConfigFile: false,
            },
            settings: {
                'import/extensions': ['.js', '.jsx'],
            },
            rules: {
                'import/no-commonjs': 'off',
                'import/no-extraneous-dependencies': ['error', jsImportNoExtraneousDependencies()],
                'import/unambiguous': 'off',
                'jsdoc/no-types': 'off',
                'jsdoc/require-param': 'error',
                'jsdoc/require-param-type': 'error',
                'jsdoc/require-returns': 'error',
                'jsdoc/require-returns-type': 'error',
            },
        },
        {
            files: ['*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                // Parser options have to be duplicated when the parser is overridden
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                // TypeScript ESLint Parser
                project: './tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: true,
            },
            extends: [
                './rules/typescript-eslint',
                './rules/typescript-eslint/tslint',
                './rules/deprecation',
                optionalRules('rxjs'),
            ].filter(Boolean),
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
            },
        },
        {
            // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
            files: ['*.@(spec|test).[jt]s?(x)'],
            // TBD: Should environment be a part of the files overrides?
            env: {
                'jest': true,
                // TBD: Is the above option sufficient and can the below option be removed?
                'jest/globals': true,
            },
            extends: [
                './rules/jest',
                optionalRules('jest-dom'),
                './rules/jest-formatting',
                optionalRules('testing-library'),
            ].filter(Boolean),
            rules: {
                '@typescript-eslint/ban-ts-comment': ['error', {
                    'ts-expect-error': 'allow-with-description',
                }],
                '@typescript-eslint/init-declarations': 'off',
                // See "@typescript-eslint/unbound-method"
                '@typescript-eslint/unbound-method': 'off',
                'import/no-extraneous-dependencies': ['error', jestImportNoExtraneousDependencies()],
                'import/no-unassigned-import': ['error', {
                    allow: [
                        '@testing-library/jest-dom',
                        '@testing-library/jest-dom/extend-expect',
                    ],
                }],
                // There can be 3 levels of `describe()`: Class -> Method -> "When...", followed by a level for `it()`.
                // The 5th level (inside an `it()`) can be required for a callback to test `toThrow()`.
                'max-nested-callbacks': ['error', 5],
                // Conflicts with func-style inside describe()
                'prefer-arrow/prefer-arrow-functions': 'off',
                // In tests the last step of a Promise is to run "expect".
                // TODO: This rule can be improved by allowing configuring functions when Promise<void> is expected.
                'promise/always-return': 'off',
                // Passing promise is required for async testing
                'rxjs/no-topromise': 'off',
            },
        },
        optionalOverrides('cypress', {
            // The /cypress directory is used in the Cypress docs:
            //  https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html
            // Integrations for Cypress are shown with ".spec.js",
            //  but that would conflict with Jest configuration above,
            //  so skipping them until it's possible to add directory configuration for Jest rules.
            files: ['cypress/**/*.[jt]s'],
            env: {
                'cypress/globals': true,
            },
            extends: [
                './rules/cypress',
            ],
            rules: {
                // Tests may declare variables that are set only by beforeEach/beforeAll functions.
                'init-declarations': 'off',
                '@typescript-eslint/init-declarations': 'off',
                'import/no-extraneous-dependencies': ['error', cypressImportNoExtraneousDependencies()],
                'max-nested-callbacks': ['error', 4],
                'new-cap': ['error', {
                    // These are functions from cypress-cucumber-preprocessor/steps
                    capIsNewExceptions: ['Given', 'When', 'Then', 'And', 'But', 'Before', 'After'],
                }],
            },
        }),
    ].filter(Boolean),
};
