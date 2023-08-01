import { TypescriptEslintTslintConfig, typescriptEslintTslintConfig } from './typescript-eslint-tslint-config';

describe(typescriptEslintTslintConfig, () => {
    it('creates default configuration for the @typescript-eslint/tslint/config rule', () => {
        expect(typescriptEslintTslintConfig())
            .toStrictEqual({
                rules: {
                    'encoding': true,
                    'import-spacing': true,
                    'no-default-import': true,
                    'no-inferred-empty-object-type': true,
                    'no-mergeable-namespace': true,
                    'no-tautology-expression': true,
                    'no-unnecessary-callback-wrapper': true,
                    'prefer-conditional-expression': [true, 'check-else-if'],
                    'prefer-switch': [true, { 'min-cases': 2 }],
                    'prefer-while': true,
                    'return-undefined': true,
                    'static-this': true,
                    'strict-comparisons': [true, {
                        'allow-object-equal-comparison': true,
                        'allow-string-order-comparison': true,
                    }],
                    'switch-final-break': [true, 'always'],
                },
                rulesDirectory: [],
            } as TypescriptEslintTslintConfig);
    });

    it('overrides and extends default rules', () => {
        expect(typescriptEslintTslintConfig({
            'strict-comparisons': false,
        }, ['tslint']))
            .toStrictEqual({
                rules: {
                    'encoding': true,
                    'import-spacing': true,
                    'no-default-import': true,
                    'no-inferred-empty-object-type': true,
                    'no-mergeable-namespace': true,
                    'no-tautology-expression': true,
                    'no-unnecessary-callback-wrapper': true,
                    'prefer-conditional-expression': [true, 'check-else-if'],
                    'prefer-switch': [true, { 'min-cases': 2 }],
                    'prefer-while': true,
                    'return-undefined': true,
                    'static-this': true,
                    'strict-comparisons': false,
                    'switch-final-break': [true, 'always'],
                },
                rulesDirectory: ['tslint'],
            } as TypescriptEslintTslintConfig);
    });
});
