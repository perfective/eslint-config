/**
 * Values for the `@typescript-eslint/naming-convention` rule `format` option.
 *
 * @since v0.11.0
 */
export type TypescriptEslintNamingConventionFormat =
    | 'camelCase'
    | 'strictCamelCase'
    | 'PascalCase'
    | 'StrictPascalCase'
    | 'snake_case'
    | 'UPPER_CASE';

/**
 * Values for individual selectors for the `@typescript-eslint/naming-convention` rule `selector` option.
 *
 * @since v0.11.0
 */
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

/**
 * Values for grouped of individual selectors for the `@typescript-eslint/naming-convention` rule `selector` option.
 *
 * @since v0.11.0
 */
export type TypescriptEslintNamingConventionGroupSelector =
    | 'default'
    | 'variableLike'
    | 'memberLike'
    | 'typeLike'
    | 'property'
    | 'method';

/**
 * Values for the `@typescript-eslint/naming-convention` rule `selector` option.
 *
 * @since v0.11.0
 */
export type TypescriptEslintNamingConventionSelector =
    | TypescriptEslintNamingConventionIndividualSelector
    | TypescriptEslintNamingConventionGroupSelector;

/**
 * Values for the `@typescript-eslint/naming-convention` rule `leadingUnderscore` and `trailingUnderscore` options.
 *
 * @since v0.11.0
 */
export type TypescriptEslintNamingConventionUnderscore =
    | 'forbid'
    | 'require'
    | 'requireDouble'
    | 'allow'
    | 'allowDouble'
    | 'allowSingleOrDouble';

/**
 * Configuration options for the `@typescript-eslint/naming-convention` rule.
 *
 * @see https://typescript-eslint.io/rules/naming-convention/
 *
 * @since v0.11.0
 */
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
 * Creates configuration with the given extensions for the `@typescript-eslint/naming-convention` rule.
 *
 * @see https://typescript-eslint.io/rules/naming-convention/
 *
 * @since v0.11.0
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
