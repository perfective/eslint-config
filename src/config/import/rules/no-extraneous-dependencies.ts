import { Glob } from '../../../linter/glob';

export interface ImportNoExtraneousDependencies {
    devDependencies: boolean | Glob[];
    optionalDependencies: boolean | Glob[];
    peerDependencies: boolean | Glob[];
    bundledDependencies: boolean | Glob[];
    packageDir?: string;
}

/**
 * Returns configuration for the `import/no-extraneous-dependencies` rule.
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
