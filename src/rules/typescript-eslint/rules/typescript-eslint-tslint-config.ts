export type TsLintRule = boolean | [boolean, unknown];
export type TsLintRules = Record<string, TsLintRule>;

export interface TypescriptEslintTslintConfig {
    rules: TsLintRules;
}

const format: TsLintRules = {
    'import-spacing': true,
};

const functionality: TsLintRules = {
    'no-inferred-empty-object-type': true,
    'no-tautology-expression': true,
    'prefer-conditional-expression': [true, 'check-else-if'],
    'static-this': true,
    'strict-comparisons': [true, {
        'allow-object-equal-comparison': true,
        'allow-string-order-comparison': true,
    }],
    'strict-type-predicates': true,
};

const maintainability: TsLintRules = {
    'no-default-import': true,
    'no-mergeable-namespace': true,
};

const style: TsLintRules = {
    'encoding': true,
    'no-unnecessary-callback-wrapper': true,
    'prefer-switch': [true, { 'min-cases': 2 }],
    'prefer-while': true,
    'return-undefined': true,
    'switch-final-break': [true, 'always'],
};

export function typescriptEslintTslintConfig(overrides: TsLintRules = {}): TypescriptEslintTslintConfig {
    return {
        rules: {
            ...format,
            ...functionality,
            ...maintainability,
            ...style,
            ...overrides,
        },
    };
}
