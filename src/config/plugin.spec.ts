import { describe, expect, it } from '@jest/globals';

import { hasEslintPlugin, optionalConfig, optionalOverrides, optionalRule, optionalRules } from './plugin';

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

describe(optionalRule, () => {
    describe('when a given rule belongs to an installed plugin', () => {
        it('returns an object with the rule as a key and its config as a value', () => {
            expect(optionalRule('@typescript-eslint/explicit-member-accessibility', 'warn'))
                .toStrictEqual({
                    '@typescript-eslint/explicit-member-accessibility': 'warn',
                });
            expect(optionalRule('@typescript-eslint/method-signature-style', ['warn', 'property']))
                .toStrictEqual({
                    '@typescript-eslint/method-signature-style': ['warn', 'property'],
                });
        });
    });

    describe('when a given rule has plugin that is not installed', () => {
        it('returns an empty object', () => {
            expect(optionalRule('@javascript/unknown', 'error'))
                .toStrictEqual({});
        });
    });

    describe('when given an ESLint core rule', () => {
        it('returns an empty object', () => {
            expect(optionalRule('constructor-super', 'error'))
                .toStrictEqual({});
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
