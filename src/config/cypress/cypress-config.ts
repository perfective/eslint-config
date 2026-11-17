import { Linter } from 'eslint';
import eslintPluginCypress from 'eslint-plugin-cypress';

import { cypressFiles, Glob } from '../../linter/glob';
import { importNoExtraneousDependencies } from '../import/rules/no-extraneous-dependencies';

/**
 * Creates a flat config for `eslint-plugin-cypress` for a given list of files globs.
 *
 * Overrides some rules for `perfectiveEslintConfig` for compatibility with Cypress.
 *
 * @since v0.31.0
 */
export function cypressConfig(files: Glob[] = [cypressFiles]): Linter.Config {
    return {
        files,
        plugins: {
            cypress: eslintPluginCypress,
        },
        rules: {
            'cypress/assertion-before-screenshot': 'error',
            'cypress/no-and': 'warn',
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-async-before': 'error',
            'cypress/no-async-tests': 'error',
            'cypress/no-chained-get': 'error',
            'cypress/no-debug': 'error',
            'cypress/no-force': 'error',
            'cypress/no-pause': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            // Deprecated since v6.2.0. No replacement.
            // Use cy.get() with data selectors (cypress/require-data-selectors) instead.
            'cypress/no-xpath': 'off',
            'cypress/require-data-selectors': 'error',
            'cypress/unsafe-to-chain-command': 'error',
            ...perfectiveRules(),
        },
    };
}

function perfectiveRules(): Linter.RulesRecord {
    return {
        // Tests may declare variables that are set only by beforeEach/beforeAll functions.
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',
        'import-x/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
            devDependencies: [cypressFiles],
        })],
        'max-nested-callbacks': ['error', {
            max: 4,
            checkConstructorCallCallbacks: true,
        }],
        'new-cap': ['error', {
            // These are functions from cypress-cucumber-preprocessor/steps
            capIsNewExceptions: ['Given', 'When', 'Then', 'And', 'But', 'Before', 'After'],
        }],
    };
}
