import { Linter } from 'eslint';
import eslintPluginJest from 'eslint-plugin-jest';

import { Glob, jestFiles } from '../../linter/glob';
import { importNoExtraneousDependencies } from '../import/index';

import { typescriptEslintJestRules } from './typescript-eslint-jest-rules';

export function jestConfig(files: Glob[] = jestFiles): Linter.Config {
    return {
        files,
        plugins: {
            jest: eslintPluginJest,
        },
        languageOptions: {
            globals: eslintPluginJest.environments.globals.globals,
        },
        rules: {
            ...perfectiveRules(),
            ...typescriptEslintJestRules,
            'jest/consistent-test-it': ['warn', {
                fn: 'test',
                withinDescribe: 'it',
            }],
            'jest/expect-expect': ['error', {
                assertFunctionNames: ['expect', 'request.*.expect'],
                additionalTestBlockFunctions: [],
            }],
            'jest/max-expects': ['error', {
                max: 5,
            }],
            'jest/max-nested-describe': ['error', {
                max: 4,
            }],
            'jest/no-alias-methods': 'warn',
            'jest/no-commented-out-tests': 'error',
            'jest/no-conditional-expect': 'error',
            'jest/no-conditional-in-test': 'error',
            'jest/no-confusing-set-timeout': 'error',
            'jest/no-deprecated-functions': 'warn',
            'jest/no-disabled-tests': 'error',
            'jest/no-done-callback': 'error',
            'jest/no-duplicate-hooks': 'error',
            'jest/no-export': 'error',
            'jest/no-focused-tests': 'warn',
            'jest/no-hooks': 'off',
            'jest/no-identical-title': 'error',
            'jest/no-interpolation-in-snapshots': 'error',
            'jest/no-jasmine-globals': 'warn',
            'jest/no-large-snapshots': 'error',
            'jest/no-mocks-import': 'error',
            'jest/no-restricted-jest-methods': 'off',
            'jest/no-restricted-matchers': ['error', {
                toBeFalsy: 'Avoid `toBeFalsy`',
                toBeTruthy: 'Avoid `toBeTruthy`',
                toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead',
                toThrowErrorMatchingSnapshot: 'Use `toThrowErrorMatchingInlineSnapshot()` instead',
            }],
            'jest/no-standalone-expect': 'error',
            'jest/no-test-prefixes': 'warn',
            'jest/no-test-return-statement': 'error',
            'jest/no-untyped-mock-factory': 'warn',
            'jest/padding-around-after-all-blocks': 'warn',
            'jest/padding-around-after-each-blocks': 'warn',
            'jest/padding-around-all': 'warn',
            'jest/padding-around-before-all-blocks': 'warn',
            'jest/padding-around-before-each-blocks': 'warn',
            'jest/padding-around-describe-blocks': 'warn',
            'jest/padding-around-expect-groups': 'warn',
            'jest/padding-around-test-blocks': 'warn',
            'jest/prefer-called-with': 'error',
            'jest/prefer-comparison-matcher': 'warn',
            'jest/prefer-each': 'error',
            'jest/prefer-equality-matcher': 'error',
            'jest/prefer-expect-assertions': 'off',
            'jest/prefer-expect-resolves': 'warn',
            'jest/prefer-hooks-in-order': 'error',
            'jest/prefer-hooks-on-top': 'error',
            'jest/prefer-importing-jest-globals': 'warn',
            'jest/prefer-jest-mocked': 'warn',
            'jest/prefer-lowercase-title': ['error', {
                allowedPrefixes: [],
                ignore: [],
                ignoreTopLevelDescribe: true,
            }],
            'jest/prefer-mock-promise-shorthand': 'warn',
            'jest/prefer-snapshot-hint': ['error', 'always'],
            'jest/prefer-spy-on': 'warn',
            'jest/prefer-strict-equal': 'warn',
            'jest/prefer-to-be': 'warn',
            'jest/prefer-to-contain': 'warn',
            'jest/prefer-to-have-length': 'warn',
            'jest/prefer-todo': 'warn',
            'jest/require-hook': ['error', {
                allowedFunctionCalls: [],
            }],
            'jest/require-to-throw-message': 'error',
            'jest/require-top-level-describe': 'error',
            'jest/valid-describe-callback': 'error',
            'jest/valid-expect-in-promise': 'error',
            'jest/valid-expect': 'error',
            'jest/valid-title': ['warn', {
                ignoreTypeOfDescribeName: true,
                ignoreTypeOfTestName: false,
                ignoreSpaces: false,
            }],
        },
    };
}

function perfectiveRules(): Linter.RulesRecord {
    return {
        '@typescript-eslint/ban-ts-comment': ['error', {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
        }],
        '@typescript-eslint/init-declarations': 'off',
        // See "jest/unbound-method"
        '@typescript-eslint/unbound-method': 'off',
        'import/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
            devDependencies: jestFiles,
        })],
        'import/no-unassigned-import': ['error', {
            allow: [
                '@testing-library/jest-dom',
                '@testing-library/jest-dom/extend-expect',
            ],
        }],
        // There can be 4 levels of `describe()`: Class -> Method -> Method Signature -> "When...",
        // followed by a level for `it()`.
        // The 6th level (inside of `it()`) can be required for a callback to test `toThrow()`.
        'max-nested-callbacks': ['error', 6],
        'n/no-unpublished-import': ['error', {
            // Required in devDependencies.
            allowModules: ['@jest/globals'],
        }],
        // Conflicts with func-style inside describe()
        'prefer-arrow/prefer-arrow-functions': 'off',
        // In tests the last step of a Promise is to run "expect".
        // TODO: This rule can be improved by allowing configuring functions when Promise<void> is expected.
        'promise/always-return': 'off',
        // Passing promise is required for async testing
        '@smarttools/rxjs/no-topromise': 'off',
    };
}
