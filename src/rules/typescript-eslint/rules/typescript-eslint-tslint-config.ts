export type TsLintRule = boolean | [boolean, unknown];
export type TsLintRules = Record<string, TsLintRule>;

export interface TypescriptEslintTslintConfig {
    rules: TsLintRules;
    rulesDirectory?: string[];
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
    // Relies on deprecated API
    // DeprecationWarning: 'originalKeywordKind' has been deprecated since v5.0.0
    // and will no longer be usable after v5.2.0. Use 'identifierToKeywordKind(identifier)' instead.
    // 'strict-type-predicates': true,
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

export function typescriptEslintTslintConfig(
    rules: TsLintRules = {},
    directories: string[] = [],
): TypescriptEslintTslintConfig {
    return {
        rules: {
            ...format,
            ...functionality,
            ...maintainability,
            ...style,
            ...rules,
        },
        rulesDirectory: directories,
    };
}
