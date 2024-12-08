import { describe, expect, it } from '@jest/globals';

import { hasEslintPlugin, optionalRule } from './plugin';

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
