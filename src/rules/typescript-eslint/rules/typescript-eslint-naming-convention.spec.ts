import {
    TypescriptEslintNamingConvention,
    typescriptEslintNamingConvention,
} from './typescript-eslint-naming-convention';

describe(typescriptEslintNamingConvention, () => {
    it('creates a default configuration for the "@typescript-eslint/naming-convention" rule', () => {
        expect(typescriptEslintNamingConvention())
            .toStrictEqual([
                {
                    selector: ['enumMember', 'typeLike'],
                    format: ['StrictPascalCase'],
                }, {
                    selector: ['memberLike', 'variableLike'],
                    format: ['strictCamelCase'],
                }, {
                    selector: ['objectLiteralProperty'],
                    modifiers: ['requiresQuotes'],
                    format: null,
                }, {
                    selector: ['parameter'],
                    modifiers: ['unused'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                }, {
                    selector: ['classProperty'],
                    modifiers: ['private'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
            ] as TypescriptEslintNamingConvention[]);
    });

    it('allows to provide additional naming conventions', () => {
        expect(typescriptEslintNamingConvention([
            {
                selector: ['function'],
                format: ['strictCamelCase', 'StrictPascalCase'],
            },
        ])).toStrictEqual([
            {
                selector: ['enumMember', 'typeLike'],
                format: ['StrictPascalCase'],
            },
            {
                selector: ['memberLike', 'variableLike'],
                format: ['strictCamelCase'],
            },
            {
                selector: ['objectLiteralProperty'],
                modifiers: ['requiresQuotes'],
                format: null,
            },
            {
                selector: ['parameter'],
                modifiers: ['unused'],
                format: ['strictCamelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: ['classProperty'],
                modifiers: ['private'],
                format: ['strictCamelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: ['function'],
                format: ['strictCamelCase', 'StrictPascalCase'],
            },
        ] as TypescriptEslintNamingConvention[]);
    });
});
