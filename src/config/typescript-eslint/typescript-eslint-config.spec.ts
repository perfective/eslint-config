import { ESLint } from 'eslint';

import { describe, expect, it } from '@jest/globals';

import { typescriptFiles } from '../../linter/glob';

import { typescriptEslintConfig, typescriptEslintDependentConfig } from './typescript-eslint-config';

const plugin: ESLint.Plugin = {
    rules: {},
};

describe(typescriptEslintConfig, () => {
    it('registers the @typescript-eslint plugin for TypeScript files', () => {
        const config = typescriptEslintConfig();

        expect(config.files).toStrictEqual(typescriptFiles);
        expect(config.plugins).toStrictEqual({
            '@typescript-eslint': expect.any(Object),
        });
    });
});

describe(typescriptEslintDependentConfig, () => {
    it('registers given plugins under their namespaces next to the @typescript-eslint plugin', () => {
        const config = typescriptEslintDependentConfig({
            example: plugin,
        }, {
            'example/rule': 'error',
        });

        expect(config.files).toStrictEqual(typescriptFiles);
        expect(config.plugins).toStrictEqual({
            '@typescript-eslint': expect.any(Object),
            'example': plugin,
        });
        expect(config.rules).toStrictEqual({
            'example/rule': 'error',
        });
    });

    it('applies to a given list of files', () => {
        expect(typescriptEslintDependentConfig({}, {}, ['**/*.spec.ts']).files)
            .toStrictEqual(['**/*.spec.ts']);
    });
});
