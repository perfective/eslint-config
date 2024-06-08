import { optionalConfig } from '../../config/plugin';

export = optionalConfig('cypress', {
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-async-before': 'error',
    'cypress/no-async-tests': 'error',
    'cypress/no-force': 'error',
    'cypress/no-pause': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/require-data-selectors': 'error',
    'cypress/unsafe-to-chain-command': 'error',
});
