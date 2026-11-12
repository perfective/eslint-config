import { createRequire } from 'node:module';
import { join } from 'node:path';

const nodeRequire = createRequire(join(process.cwd(), 'package.json'));

/**
 * Returns true if a given `module` can be resolved in node_modules.
 *
 * A module does not have to be required directly by the package.json.
 * The function returns true,
 * even if it is installed as a dependency of another dependency but can be loaded by Node.js.
 *
 * @protected
 */
export function hasNodeModule(module: string): boolean {
    try {
        return Boolean(nodeRequire.resolve(module));
    }
    catch {
        return false;
    }
}
