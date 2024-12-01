// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint parser used only during development
import * as tsEslint from 'typescript-eslint';

import { cypressOptionalConfig } from './rules/cypress';
import { cypressImportNoExtraneousDependencies } from './rules/import/rules/no-extraneous-dependencies';

/**
 * Configuration for the eslint-plugin-cypress.
 *
 * @param files - A list of globs with the Cypress test files.
 */
export function cypressConfig(files: string[] = ['cypress/**/*.[jt]s']): Record<string, unknown> {
    return {
        // The /cypress directory is used in the Cypress docs:
        //  https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html
        // Integrations for Cypress are shown with ".spec.js",
        //  but that would conflict with Jest configuration above,
        //  so skipping them until it's possible to add directory configuration for Jest rules.
        files,
        languageOptions: {
            ...cypressOptionalConfig.languageOptions,
            parser: tsEslint.parser,
            parserOptions: {
                // Parser options have to be duplicated when the parser is overridden
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                // TypeScript ESLint Parser
                project: './tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: true,
            },
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
