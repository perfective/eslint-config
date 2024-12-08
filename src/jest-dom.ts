import { jestDomConfig as jestDomPluginConfig } from './rules/jest-dom';

export function jestDomConfig(files: string[] = ['**/*.@(spec|test).[jt]s?(x)']): Record<string, unknown> {
    return {
        files,
        plugins: jestDomPluginConfig.plugins,
        rules: jestDomPluginConfig.rules,
    };
}
