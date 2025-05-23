import { Linter } from 'eslint';
import eslintPluginCypress from 'eslint-plugin-cypress/flat';

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
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-async-before': 'error',
            'cypress/no-async-tests': 'error',
            'cypress/no-chained-get': 'error',
            'cypress/no-debug': 'error',
            'cypress/no-force': 'error',
            'cypress/no-pause': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            'cypress/no-xpath': 'error',
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
        'import/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
            devDependencies: [cypressFiles],
        })],
        'max-nested-callbacks': ['error', 4],
        'new-cap': ['error', {
            // These are functions from cypress-cucumber-preprocessor/steps
            capIsNewExceptions: ['Given', 'When', 'Then', 'And', 'But', 'Before', 'After'],
        }],
    };
}
