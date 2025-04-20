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
