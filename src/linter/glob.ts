/**
 * Nominal type for globs pattern string.
 *
 * @since v0.31.0
 */
export type Glob = string;

/**
 * A glob pattern for JSX files.
 *
 * @since v0.31.0
 */
export const jsxFiles: Glob = '**/*.jsx';

/**
 * A list of glob patterns for JS and JSX files.
 *
 * @since v0.31.0
 */
export const javascriptFiles: Glob[] = [
    '**/*.{js,cjs,mjs}',
    jsxFiles,
];

/**
 * A glob pattern for TSX files.
 *
 * @since v0.31.0
 */
export const tsxFiles: Glob = '**/*.tsx';

/**
 * A list of glob patterns for TypeScript source files.
 *
 * @since v0.31.0
 */
export const typescriptFiles: Glob[] = [
    '**/*.{ts,cts,mts}',
    tsxFiles,
];

/**
 * A glob pattern for TypeScript declaration files.
 *
 * @since v0.31.0
 */
export const typescriptDeclarationFiles: Glob = '**/*.d.{ts,cts,mts}';

/**
 * A glob pattern for JavaScript tools configuration files.
 *
 * @since v0.31.0
 */
export const configurationFiles = ['**/.*.{js,cjs,mjs}', '**/*.config.{js,cjs,mjs}', '**/gulpfile.{js,cjs,mjs}'];

/**
 * The default glob patterns Jest uses to find JavaScript test files.
 *
 * @see https://jestjs.io/docs/configuration#testmatch-arraystring
 *
 * @since v0.34.0
 */
export const jestJavascriptFiles: Glob[] = [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
];

/**
 * The default glob patterns Jest uses to find TypeScript test files.
 *
 * @see https://jestjs.io/docs/configuration#testmatch-arraystring
 *
 * @since v0.34.0
 */
export const jestTypescriptFiles: Glob[] = [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
];

/**
 * The default glob patterns Jest uses to find test files.
 *
 * @see https://jestjs.io/docs/configuration#testmatch-arraystring
 *
 * @since v0.31.0
 */
export const jestFiles: Glob[] = [
    ...jestJavascriptFiles,
    ...jestTypescriptFiles,
];

/**
 * The default glob pattern Cypress uses to load test files.
 *
 * @see https://docs.cypress.io/app/references/configuration#e2e
 * @see https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html
 *
 * @since v0.31.0
 */
export const cypressFiles: Glob = 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}';
