export type TypescriptEslintNamingConventionFormat =
    | 'camelCase'
    | 'strictCamelCase'
    | 'PascalCase'
    | 'StrictPascalCase'
    | 'snake_case'
    | 'UPPER_CASE';

export type TypescriptEslintNamingConventionIndividualSelector =
    | 'variable'
    | 'function'
    | 'parameter'
    | 'classProperty'
    | 'objectLiteralProperty'
    | 'typeProperty'
    | 'parameterProperty'
    | 'classMethod'
    | 'objectLiteralMethod'
    | 'typeMethod'
    | 'accessor'
    | 'enumMember'
    | 'class'
    | 'interface'
    | 'typeAlias'
    | 'enum'
    | 'typeParameter';

export type TypescriptEslintNamingConventionGroupSelector =
    | 'default'
    | 'variableLike'
    | 'memberLike'
    | 'typeLike'
    | 'property'
    | 'method';

export type TypescriptEslintNamingConventionSelector =
    | TypescriptEslintNamingConventionIndividualSelector
    | TypescriptEslintNamingConventionGroupSelector;

export type TypescriptEslintNamingConventionUnderscore =
    | 'forbid'
    | 'require'
    | 'requireDouble'
    | 'allow'
    | 'allowDouble'
    | 'allowSingleOrDouble';

export interface TypescriptEslintNamingConvention {
    selector: TypescriptEslintNamingConventionSelector | TypescriptEslintNamingConventionSelector[];
    format: TypescriptEslintNamingConventionFormat[] | null;
    modifiers?: string[];
    leadingUnderscore?: TypescriptEslintNamingConventionUnderscore;
    trailingUnderscore?: TypescriptEslintNamingConventionUnderscore;
    prefix?: string[];
    suffix?: string[];
    custom?: {
        regex: string;
        match: boolean;
    };
}

/**
 * Provides configuration and extensions for the @typescript-eslint/naming-convention.
 *
 * @see https://typescript-eslint.io/rules/naming-convention/
 */
export function typescriptEslintNamingConvention(
    extensions: TypescriptEslintNamingConvention[] = [],
): TypescriptEslintNamingConvention[] {
    return typescriptEslintNamingConventionDefaults()
        .concat(extensions);
}

function typescriptEslintNamingConventionDefaults(): TypescriptEslintNamingConvention[] {
    return [
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
            // Allow underscore for unused parameters, as they can be used as part of an interface
            leadingUnderscore: 'allow',
        }, {
            selector: ['classProperty'],
            modifiers: ['private'],
            format: ['strictCamelCase'],
            // Allow underscore for private properties, as they can conflict with method names
            leadingUnderscore: 'allow',
        },
    ];
}
