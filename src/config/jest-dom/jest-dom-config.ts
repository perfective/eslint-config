import { Linter } from 'eslint';
import eslintPluginJestDom from 'eslint-plugin-jest-dom';

import { Glob, jestFiles } from '../../linter/glob';

/**
 * Creates a flat config for `eslint-plugin-jest-dom` for a given list of files globs.
 *
 * @since v0.31.0
 */
export function jestDomConfig(files: Glob[] = jestFiles): Linter.Config {
    return {
        files,
        plugins: {
            'jest-dom': eslintPluginJestDom,
        },
        rules: {
            'jest-dom/prefer-checked': 'warn',
            'jest-dom/prefer-empty': 'warn',
            'jest-dom/prefer-enabled-disabled': 'warn',
            'jest-dom/prefer-focus': 'warn',
            // TODO: Set to "warn" once the rule is fixed
            //  https://github.com/testing-library/eslint-plugin-jest-dom/pull/107
            //  https://github.com/testing-library/eslint-plugin-jest-dom/pull/105
            'jest-dom/prefer-in-document': 'off',
            'jest-dom/prefer-required': 'warn',
            'jest-dom/prefer-to-have-attribute': 'warn',
            'jest-dom/prefer-to-have-class': 'warn',
            'jest-dom/prefer-to-have-style': 'warn',
            'jest-dom/prefer-to-have-text-content': 'warn',
            'jest-dom/prefer-to-have-value': 'warn',
        },
    };
}
