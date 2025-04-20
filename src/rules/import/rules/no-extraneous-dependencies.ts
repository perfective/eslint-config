import { configurationFiles, cypressFiles, jestFiles } from '../../../config/glob';

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

export function configurationImportNoExtraneousDependencies(
    devDependencies: boolean | string[] = configurationFiles,
): ImportNoExtraneousDependencies {
    return importNoExtraneousDependencies({
        devDependencies,
    });
}

export function jestImportNoExtraneousDependencies(
    devDependencies: boolean | string[] = jestFiles,
): ImportNoExtraneousDependencies {
    return importNoExtraneousDependencies({
        devDependencies,
    });
}

export function cypressImportNoExtraneousDependencies(
    devDependencies: boolean | string[] = [cypressFiles],
): ImportNoExtraneousDependencies {
    return importNoExtraneousDependencies({
        devDependencies,
    });
}
