import { Glob } from '../../../linter/glob';

/**
 * Configuration options for the `import-x/no-extraneous-dependencies` rule.
 */
export interface ImportNoExtraneousDependencies {
    devDependencies: boolean | Glob[];
    optionalDependencies: boolean | Glob[];
    peerDependencies: boolean | Glob[];
    bundledDependencies: boolean | Glob[];
    packageDir?: string;
}

/**
 * Returns configuration for the `import-x/no-extraneous-dependencies` rule.
 */
export function importNoExtraneousDependencies(
    overrides: Partial<ImportNoExtraneousDependencies> = {},
): ImportNoExtraneousDependencies {
    return {
        bundledDependencies: true,
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        ...overrides,
    };
}
