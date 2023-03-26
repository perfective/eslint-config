import { optionalConfig } from './plugin';

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
