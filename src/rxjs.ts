import { Linter } from 'eslint';

import { typescriptFiles } from './config/glob';
import { rxjsConfig as rxjsPluginConfig } from './rules/rxjs';

/**
 * Configuration for eslint-plugin-rxjs-x.
 *
 * @param files - A list of globs with the files to lint.
 */
export function rxjsConfig(files: string[] = typescriptFiles): Linter.Config {
    return rxjsPluginConfig(files);
}
