/**
 * Returns true if a given {@linkcode module} can be resolved in node_modules.
 *
 * A module does not have to be required directly by the package.json.
 * The function returns true,
 * even if it is installed as a dependency of another dependency but can be loaded by NodeJS.
 */
export function hasNodeModule(module: string): boolean {
    try {
        return Boolean(require.resolve(module));
    }
    catch {
        return false;
    }
}
