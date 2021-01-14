import { UnicornPreventAbbreviations, unicornPreventAbbreviations } from './prevent-abbreviations';

describe(unicornPreventAbbreviations, () => {
    it('creates a configuration for the unicorn/prevent-abbreviations rule', () => {
        expect(unicornPreventAbbreviations())
            .toStrictEqual({
                checkDefaultAndNamespaceImports: 'internal',
                checkShorthandImports: 'internal',
                checkShorthandProperties: false,
                checkProperties: true,
                checkVariables: true,
                checkFilenames: true,
                extendDefaultReplacements: true,
                replacements: {
                    args: false,
                    db: false,
                    e2e: false,
                    env: false,
                    i: false,
                    j: false,
                    params: false,
                },
                extendDefaultWhitelist: true,
                whitelist: {},
                ignore: [
                    /e2e/u,
                ],
            } as UnicornPreventAbbreviations);
    });

    it('extends the default list of replacements', () => {
        expect(unicornPreventAbbreviations({
            props: false,
            refs: false,
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
                    args: false,
                    db: false,
                    e2e: false,
                    env: false,
                    i: false,
                    j: false,
                    params: false,
                    props: false,
                    refs: false,
                },
                extendDefaultWhitelist: true,
                whitelist: {},
                ignore: [
                    /e2e/u,
                ],
            } as UnicornPreventAbbreviations);
    });
});
