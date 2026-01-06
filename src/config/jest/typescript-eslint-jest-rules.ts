import { Linter } from 'eslint';

export const typescriptEslintJestRules: Linter.RulesRecord = {
    'jest/no-error-equal': 'error',
    'jest/no-unnecessary-assertion': 'error',
    'jest/unbound-method': ['error', {
        ignoreStatic: false,
    }],
    'jest/valid-expect-with-promise': 'error',
};
