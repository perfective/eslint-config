export = {
    plugins: [
        'jest',
    ],
    rules: {
        'jest/consistent-test-it': ['warn', {
            fn: 'test',
            withinDescribe: 'it',
        }],
        'jest/expect-expect': ['error', {
            assertFunctionNames: ['expect', 'request.*.expect'],
        }],
        'jest/lowercase-name': 'warn',
        'jest/no-alias-methods': 'warn',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-disabled-tests': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'warn',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'warn',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-restricted-matchers': ['error', {
            resolves: 'Use `expect(await promise)` instead.',
            toBeFalsy: 'Avoid `toBeFalsy`',
            toBeTruthy: 'Avoid `toBeTruthy`',
            toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead',
            toThrowErrorMatchingSnapshot: 'Use `toThrowErrorMatchingInlineSnapshot()` instead',
        }],
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'warn',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be-null': 'warn',
        'jest/prefer-to-be-undefined': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/valid-describe': 'error',
        // This rule is false-positive on `.then()` method used for monads
        'jest/valid-expect-in-promise': 'off',
        'jest/valid-expect': 'error',
        'jest/valid-title': ['warn', {
            ignoreTypeOfDescribeName: true,
        }],
    },
};
