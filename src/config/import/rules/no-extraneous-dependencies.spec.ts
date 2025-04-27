import { describe, expect, it } from '@jest/globals';

import {
    ImportNoExtraneousDependencies,
    importNoExtraneousDependencies,
} from './no-extraneous-dependencies';

describe(importNoExtraneousDependencies, () => {
    describe('when argument is not provided', () => {
        it('returns default configuration', () => {
            expect(importNoExtraneousDependencies())
                .toStrictEqual({
                    bundledDependencies: true,
                    devDependencies: false,
                    optionalDependencies: false,
                    peerDependencies: false,
                } as ImportNoExtraneousDependencies);
        });
    });

    describe('when argument is provided', () => {
        it('overrides default configuration values with the argument values', () => {
            expect(importNoExtraneousDependencies({
                peerDependencies: true,
                devDependencies: ['./*.js'],
            })).toStrictEqual({
                bundledDependencies: true,
                devDependencies: ['./*.js'],
                optionalDependencies: false,
                peerDependencies: true,
            } as ImportNoExtraneousDependencies);
        });
    });
});
