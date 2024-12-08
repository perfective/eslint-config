import { testingLibraryConfig as testingLibraryPluginConfig } from './rules/testing-library';

export function testingLibraryConfig(files: string[] = ['**/*.@(spec|test).[jt]s?(x)']): Record<string, unknown> {
    return {
        files,
        plugins: testingLibraryPluginConfig.plugins,
        rules: testingLibraryPluginConfig.rules,
    };
}
