export type Match = string;
export type Group = Match[];

export interface SimpleImportSortImports {
    groups: Group[];
}

/**
 * Configuration for the "simple-import-sort/imports" ESLint rule.
 *
 * @param internal - A list of internal scopes. Each scope will sorted in its own group.
 */
export function simpleImportSortImports(internal: string[] = []): SimpleImportSortImports {
    return {
        groups: [
            sideEffects(),
            nodePrefixedModules(),
            unscopedPackages(),
            scopedPackages(internal),
            ...internalPackages(internal),
            parentImports(),
            relativeImports(),
            styleImports(),
        ].filter(group => group.length > 0),
    };
}

function sideEffects(): Group {
    return ['^\\u0000'];
}

function nodePrefixedModules(): Group {
    return ['^node:'];
}

function unscopedPackages(): Group {
    return ['^[a-zA-Z]'];
}

/**
 * @private
 */
export function scopedPackages(exclude: string[]): Group {
    if (exclude.length === 0) {
        return ['^@'];
    }
    return [`^(?!${exclude.join('|')})@`];
}

/**
 * @private
 */
export function internalPackages(internal: string[]): Group[] {
    return internal.map(scope => [`^${scope}`]);
}

/**
 * Parent imports, put `..` last.
 */
function parentImports(): Group {
    return ['^\\.\\.(?!/?$)', '^\\.\\./?$'];
}

/**
 * Other relative imports, put same-folder imports and `.` last.
 */
function relativeImports(): Group {
    return ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'];
}

function styleImports(): Group {
    return ['^.+\\.s?css$'];
}
