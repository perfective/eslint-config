export const jsxFiles = [
    '**/*.jsx',
];

export const javascriptFiles = [
    '**/*.{js,cjs,mjs}',
    ...jsxFiles,
];

export const tsxFiles = [
    '**/*.tsx',
];

export const typescriptFiles = [
    '**/*.{ts,cts,mts}',
    ...tsxFiles,
];

export const typescriptDeclarationFiles = [
    '**/*.d.{ts,cts,mts}',
];

/**
 * The default glob patterns Jest uses to find test files.
 *
 * @see https://jestjs.io/docs/configuration#testmatch-arraystring
 */
export const jestFiles = [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
];

/**
 * The default glob patterns Cypress uses to load test files.
 *
 * @see https://docs.cypress.io/app/references/configuration#e2e
 * @see https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html
 */
export const cypressFiles = [
    'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
];
