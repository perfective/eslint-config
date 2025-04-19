import { Linter } from 'eslint';

export const typescriptEslintJestRules: Linter.RulesRecord = {
    'jest/unbound-method': ['error', {
        ignoreStatic: false,
    }],
};
