/**
 * Nominal type for globs pattern string.
 */
export type Glob = string;

export const jsxFiles: Glob = '**/*.jsx';

export const javascriptFiles: Glob[] = [
    '**/*.{js,cjs,mjs}',
    jsxFiles,
];

export const tsxFiles: Glob = '**/*.tsx';

export const typescriptFiles: Glob[] = [
    '**/*.{ts,cts,mts}',
    tsxFiles,
];

export const typescriptDeclarationFiles: Glob = '**/*.d.{ts,cts,mts}';

/**
 * The default glob patterns Jest uses to find test files.
 *
 * @see https://jestjs.io/docs/configuration#testmatch-arraystring
 */
export const jestFiles: Glob[] = [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
];
