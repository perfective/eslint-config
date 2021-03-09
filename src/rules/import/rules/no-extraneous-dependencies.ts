export interface ImportNoExtraneousDependencies {
    devDependencies: boolean | string[];
    optionalDependencies: boolean | string[];
    peerDependencies: boolean | string[];
    bundledDependencies: boolean | string[];
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

/* eslint-disable sonarjs/no-identical-functions -- functions have different default arguments */
export function jsImportNoExtraneousDependencies(
    devDependencies: boolean | string[] = ['**/.*.js', '**/*.config.js', '**/gulpfile.js'],
): ImportNoExtraneousDependencies {
    return importNoExtraneousDependencies({
        devDependencies,
    });
}

export function jestImportNoExtraneousDependencies(
    devDependencies: boolean | string[] = ['**/*.@(spec|test).[jt]s?(x)'],
): ImportNoExtraneousDependencies {
    return importNoExtraneousDependencies({
        devDependencies,
    });
}

export function cypressImportNoExtraneousDependencies(
    devDependencies: boolean | string[] = ['cypress/**/*.[jt]s'],
): ImportNoExtraneousDependencies {
    return importNoExtraneousDependencies({
        devDependencies,
    });
}
/* eslint-enable sonarjs/no-identical-functions */
