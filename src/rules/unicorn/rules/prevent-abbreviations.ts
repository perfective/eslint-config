type UnicornPreventAbbreviationReplacements = Record<string, boolean | Record<string, boolean>>;

export interface UnicornPreventAbbreviations {
    replacements: UnicornPreventAbbreviationReplacements;
    extendDefaultReplacements: boolean;
    whitelist: Record<string, boolean>;
    extendDefaultWhitelist: boolean;
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
 *  @param replacements - List of additional replacements.
 *  @param options - Additional properties to override.
 *
 *  @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
 */
export function unicornPreventAbbreviations(
    replacements: UnicornPreventAbbreviationReplacements = {},
    options: Partial<Pick<UnicornPreventAbbreviations, 'checkProperties'>> = {},
): UnicornPreventAbbreviations {
    return {
        replacements: {
            args: false,
            db: false,
            e2e: false,
            env: false,
            i: false,
            j: false,
            params: false,
            ...replacements,
        },
        extendDefaultReplacements: true,
        whitelist: {},
        extendDefaultWhitelist: true,
        checkDefaultAndNamespaceImports: 'internal',
        checkShorthandImports: 'internal',
        checkShorthandProperties: false,
        checkProperties: true,
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
