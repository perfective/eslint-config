import { Linter } from 'eslint';

import { describe, expect, it } from '@jest/globals';

import { linterConfig } from './linter-config';

const mockConfig: Linter.Config = {
    rules: {
        'test-rule': 'warn',
    } as Linter.RulesRecord,
};

describe(linterConfig, () => {
    it('returns config object when provided with an ESLint config object', () => {
        expect(linterConfig(mockConfig)).toBe(mockConfig);
    });

    it('returns config object when provided with a function that returns an ESLint config', () => {
        expect(linterConfig(() => mockConfig)).toStrictEqual({
            rules: {
                'test-rule': 'warn',
            } as Linter.RulesRecord,
        });
    });
});
