export = {
    plugins: [
        'cypress',
    ],
    rules: {
        'cypress/assertion-before-screenshot': 'error',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-async-tests': 'error',
        'cypress/no-force': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/require-data-selectors': 'error',
    },
};
