import { describe, expect, it } from '@jest/globals';

import { UnicornPreventAbbreviations, unicornPreventAbbreviations } from './prevent-abbreviations';

describe(unicornPreventAbbreviations, () => {
    it('creates a configuration for the unicorn/prevent-abbreviations rule', () => {
        expect(unicornPreventAbbreviations())
            .toStrictEqual({
                checkDefaultAndNamespaceImports: 'internal',
                checkShorthandImports: 'internal',
                checkShorthandProperties: false,
                checkProperties: false,
                checkVariables: true,
                checkFilenames: true,
                extendDefaultReplacements: true,
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
                },
                extendDefaultAllowList: true,
                allowList: {},
                ignore: [
                    /e2e/u,
                ],
            } as UnicornPreventAbbreviations);
    });

    it('extends the default list of replacements and overrides', () => {
        expect(unicornPreventAbbreviations({
            props: false,
            refs: false,
        }, {
            checkProperties: true,
        }))
            .toStrictEqual({
                checkDefaultAndNamespaceImports: 'internal',
                checkShorthandImports: 'internal',
                checkShorthandProperties: false,
                checkProperties: true,
                checkVariables: true,
                checkFilenames: true,
                extendDefaultReplacements: true,
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
                    props: false,
                    refs: false,
                },
                extendDefaultAllowList: true,
                allowList: {},
                ignore: [
                    /e2e/u,
                ],
            } as UnicornPreventAbbreviations);
    });
});
