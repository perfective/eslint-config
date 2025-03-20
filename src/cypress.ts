import { cypressFiles } from './config/glob';
import { typescriptLanguageOptions } from './config/language-options';
import { cypressOptionalConfig } from './rules/cypress';
import { cypressImportNoExtraneousDependencies } from './rules/import/rules/no-extraneous-dependencies';

/**
 * Configuration for the eslint-plugin-cypress.
 *
 * @param files - A list of globs with the Cypress test files.
 */
export function cypressConfig(files: string[] = cypressFiles): Record<string, unknown> {
    return {
        files,
        languageOptions: {
            ...typescriptLanguageOptions(),
            ...cypressOptionalConfig.languageOptions,
        },
        plugins: {
            ...cypressOptionalConfig.plugins,
        },
        rules: {
            ...cypressOptionalConfig.rules,
            // Tests may declare variables that are set only by beforeEach/beforeAll functions.
            'init-declarations': 'off',
            '@typescript-eslint/init-declarations': 'off',
            'import/no-extraneous-dependencies': ['error', cypressImportNoExtraneousDependencies()],
            'max-nested-callbacks': ['error', 4],
            'new-cap': ['error', {
                // These are functions from cypress-cucumber-preprocessor/steps
                capIsNewExceptions: ['Given', 'When', 'Then', 'And', 'But', 'Before', 'After'],
            }],
        },
    };
}
