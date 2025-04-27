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
export const configurationFiles = ['**/.*.js', '**/*.config.js', '**/gulpfile.js'];

/**
 * The default glob patterns Jest uses to find test files.
 *
 * @see https://jestjs.io/docs/configuration#testmatch-arraystring
 *
 * @since v0.31.0
 */
export const jestFiles: Glob[] = [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
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
