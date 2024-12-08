import { jestImportNoExtraneousDependencies } from './rules/import/rules/no-extraneous-dependencies';
import { jestConfig as jestPluginConfig } from './rules/jest';

/**
 * Configuration for the Jest plugin.
 *
 * @param files - A list of globs with the Jest test files.
 * Default value is extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/).
 */
export function jestConfig(files: string[] = ['**/*.@(spec|test).[jt]s?(x)']): Record<string, unknown> {
    return {
        files,
        plugins: jestPluginConfig.plugins,
        rules: {
            ...jestPluginConfig.rules,
            '@typescript-eslint/ban-ts-comment': ['error', {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': true,
                'ts-nocheck': true,
                'ts-check': false,
            }],
            '@typescript-eslint/init-declarations': 'off',
            // See "jest/unbound-method"
            '@typescript-eslint/unbound-method': 'off',
            'import/no-extraneous-dependencies': ['error', jestImportNoExtraneousDependencies()],
            'import/no-unassigned-import': ['error', {
                allow: [
                    '@testing-library/jest-dom',
                    '@testing-library/jest-dom/extend-expect',
                ],
            }],
            // There can be 4 levels of `describe()`: Class -> Method -> Method Signature -> "When...",
            // followed by a level for `it()`.
            // The 6th level (inside of `it()`) can be required for a callback to test `toThrow()`.
            'max-nested-callbacks': ['error', 6],
            'n/no-unpublished-import': ['error', {
                // Required in devDependencies.
                allowModules: ['@jest/globals'],
            }],
            // Conflicts with func-style inside describe()
            'prefer-arrow/prefer-arrow-functions': 'off',
            // In tests the last step of a Promise is to run "expect".
            // TODO: This rule can be improved by allowing configuring functions when Promise<void> is expected.
            'promise/always-return': 'off',
            // Passing promise is required for async testing
            '@smarttools/rxjs/no-topromise': 'off',
        },
    };
}
