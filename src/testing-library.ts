import { jestFiles } from './config/glob';
import { testingLibraryConfig as testingLibraryPluginConfig } from './rules/testing-library';

export function testingLibraryConfig(files: string[] = jestFiles): Record<string, unknown> {
    return {
        files,
        plugins: testingLibraryPluginConfig.plugins,
        rules: testingLibraryPluginConfig.rules,
    };
}
