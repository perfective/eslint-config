import { hasEslintPlugin, optionalConfig, optionalOverrides, optionalRules } from './plugin';

describe(optionalConfig, () => {
    describe('when a given plugin is installed', () => {
        it('returns the plugin config with the given rules', () => {
            expect(optionalConfig('cypress', {
                'cypress/rule': 'off',
            })).toStrictEqual({
                plugins: ['cypress'],
                rules: {
                    'cypress/rule': 'off',
                },
            });
        });
    });

    describe('when a given plugin is not installed', () => {
        it('returns an empty object', () => {
            expect(optionalConfig('javascript', {
                'javascript/rule': 'off',
            })).toStrictEqual({});
        });
    });
});

describe(optionalOverrides, () => {
    const overrides = {
        files: ['cypress/**/*.[jt]s'],
        extends: [
            './rules/cypress',
        ],
    };

    describe('when a given plugin is installed', () => {
        it('returns the given overrides configuration', () => {
            expect(optionalOverrides('cypress', overrides)).toStrictEqual(overrides);
        });
    });

    describe('when a given plugin is not installed', () => {
        it('returns null', () => {
            expect(optionalOverrides('javascript', overrides)).toBeNull();
        });
    });
});

describe(optionalRules, () => {
    describe('when a given plugin is installed', () => {
        it('returns a path to the plugin rules', () => {
            expect(optionalRules('import')).toBe('./rules/import');
            expect(optionalRules('@typescript-eslint')).toBe('./rules/typescript-eslint');
        });
    });

    describe('when a given plugin is not installed', () => {
        it('returns null', () => {
            expect(optionalRules('javascript')).toBeNull();
        });
    });
});

describe(hasEslintPlugin, () => {
    describe('when a given plugin is installed', () => {
        it('returns true', () => {
            expect(hasEslintPlugin('import')).toBe(true);
            expect(hasEslintPlugin('@typescript-eslint')).toBe(true);
        });
    });

    describe('when a given plugin is not installed', () => {
        it('returns false', () => {
            expect(hasEslintPlugin('javascript')).toBe(false);
            expect(hasEslintPlugin('@javascript')).toBe(false);
        });
    });
});
