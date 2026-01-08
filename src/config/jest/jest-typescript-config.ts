import { Linter } from 'eslint';
import eslintPluginJest from 'eslint-plugin-jest';

import { Glob, jestTypescriptFiles } from '../../linter/glob';
import { typescriptEslintDependentConfig } from '../typescript-eslint/typescript-eslint-config';

const jestTypescriptRules: Linter.RulesRecord = {
    'jest/no-error-equal': 'error',
    'jest/no-unnecessary-assertion': 'error',
    'jest/unbound-method': ['error', {
        ignoreStatic: false,
    }],
    'jest/valid-expect-with-promise': 'error',
};

const jestTypescriptEslintRulesOverrides: Linter.RulesRecord = {
    '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
    }],
    '@typescript-eslint/init-declarations': 'off',
    // See "jest/unbound-method"
    '@typescript-eslint/unbound-method': 'off',
};

/**
 * Creates a flat config for `eslint-plugin-jest` for a given list of TypeScript file globs.
 *
 * This config includes only the rules that require `@typescript-eslint` plugin.
 *
 * @since v0.34.0
 */
export function jestTypescriptConfig(files: Glob[] = jestTypescriptFiles): Linter.Config {
    return typescriptEslintDependentConfig(eslintPluginJest, {
        ...jestTypescriptRules,
        ...jestTypescriptEslintRulesOverrides,
    }, files);
}
