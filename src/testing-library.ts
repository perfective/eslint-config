import { Linter } from 'eslint';

import { jestFiles } from './config/glob';
import { testingLibraryConfig as testingLibraryPluginConfig } from './rules/testing-library';

export function testingLibraryConfig(files: string[] = jestFiles): Linter.Config {
    return testingLibraryPluginConfig(files);
}
