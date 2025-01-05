// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
import eslintPluginCypress from 'eslint-plugin-cypress/flat';

export const cypressOptionalConfig = {
    plugins: {
        cypress: eslintPluginCypress,
    },
    languageOptions: {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- TSC fails without the condition
        globals: eslintPluginCypress.configs.globals.languageOptions?.globals,
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
        'cypress/require-data-selectors': 'error',
        'cypress/unsafe-to-chain-command': 'error',
    },
};
