import { jestFiles } from './config/glob';
import { jestDomConfig as jestDomPluginConfig } from './rules/jest-dom';

export function jestDomConfig(files: string[] = jestFiles): Record<string, unknown> {
    return {
        files,
        plugins: jestDomPluginConfig.plugins,
        rules: jestDomPluginConfig.rules,
    };
}
