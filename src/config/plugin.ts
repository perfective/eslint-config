import { hasNodeModule } from './node';

/**
 * If a given ESLint {@linkcode plugin} is installed,
 * returns configuration for the {@linkcode plugin} with the given {@linkcode rules}.
 *
 * Otherwise, returns an empty object.
 */
export function optionalConfig(plugin: string, rules: Record<string, unknown>): Record<string, unknown> {
    if (hasNodeModule(`eslint-plugin-${plugin}`)) {
        return {
            plugins: [plugin],
            rules,
        };
    }
    return {};
}
