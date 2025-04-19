import { Linter } from 'eslint';
import eslintPluginCypress from 'eslint-plugin-cypress/flat';

import { cypressFiles } from '../../config/glob';
import { typescriptLanguageOptions } from '../../config/language-options';

export function cypressConfig(files: string[] = [cypressFiles]): Linter.Config {
    return {
        files,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            cypress: eslintPluginCypress,
        },
        rules: {
            'cypress/assertion-before-screenshot': 'error',
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-async-before': 'error',
            'cypress/no-async-tests': 'error',
            'cypress/no-debug': 'error',
            'cypress/no-force': 'error',
            'cypress/no-pause': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            'cypress/no-xpath': 'error',
            'cypress/require-data-selectors': 'error',
            'cypress/unsafe-to-chain-command': 'error',
        },
    };
}
