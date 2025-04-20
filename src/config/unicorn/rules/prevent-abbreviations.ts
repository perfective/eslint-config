export type UnicornPreventAbbreviationReplacements = Record<string, boolean | Record<string, boolean>>;

export interface UnicornPreventAbbreviations {
    replacements: UnicornPreventAbbreviationReplacements;
    extendDefaultReplacements: boolean;
    allowList: Record<string, boolean>;
    extendDefaultAllowList: boolean;
    checkDefaultAndNamespaceImports: 'internal' | boolean;
    checkShorthandImports: 'internal' | boolean;
    checkShorthandProperties: boolean;
    checkProperties: boolean;
    checkVariables: boolean;
    checkFilenames: boolean;
    ignore: RegExp[];
}

/**
 * Allows to extend unicorn/prevent-abbreviation rules replacements, instead of overriding them.
 *
 * @param replacements - List of additional replacements.
 * @param options - Additional properties to override.
 *
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
 */
export function unicornPreventAbbreviations(
    replacements: UnicornPreventAbbreviationReplacements = {},
    options: Partial<Pick<UnicornPreventAbbreviations, 'checkProperties'>> = {},
): UnicornPreventAbbreviations {
    return {
        replacements: {
            arg: false,
            args: false,
            db: false,
            doc: false,
            docs: false,
            dev: false,
            env: false,
            i: false,
            j: false,
            lib: false,
            libs: false,
            param: false,
            params: false,
            ...replacements,
        },
        extendDefaultReplacements: true,
        allowList: {},
        extendDefaultAllowList: true,
        checkDefaultAndNamespaceImports: 'internal',
        checkShorthandImports: 'internal',
        checkShorthandProperties: false,
        // This rule checks properties even on external types.
        // If it's once fixed, it should be enabled.
        checkProperties: false,
        checkVariables: true,
        checkFilenames: true,
        ...options,
        ignore: [
            // The unicorn/prevent-abbreviations rule considers each "e" as an abbreviation ("error" or "event"),
            // so it has to be ignored as "e2e" RegExp
            /e2e/u,
        ],
    };
}
