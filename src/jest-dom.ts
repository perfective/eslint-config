import { Linter } from 'eslint';

import { jestFiles } from './rules/jest';
import { jestDomConfig as jestDomPluginConfig } from './rules/jest-dom';

export function jestDomConfig(files: string[] = jestFiles): Linter.Config {
    return jestDomPluginConfig(files);
}
