import { hasNodeModule } from './node';

/**
 * If a given ESLint {@linkcode plugin} is installed,
 * returns configuration for the {@linkcode plugin} with the given {@linkcode rules}.
 *
 * Otherwise, returns an empty object.
 */
export function optionalConfig(plugin: string, rules: Record<string, unknown>): Record<string, unknown> {
    if (hasEslintPlugin(plugin)) {
        return {
            plugins: [plugin],
            rules,
        };
    }
    return {};
}

/**
 * If a given ESLint {@linkcode plugin} is installed,
 * returns the given configuration {@linkcode overrides}.
 *
 * Otherwise, returns {@linkcode null}.
 */
export function optionalOverrides(plugin: string, overrides: Record<string, unknown>): Record<string, unknown> | null {
    if (hasEslintPlugin(plugin)) {
        return overrides;
    }
    return null;
}

/**
 * If a given ESLint {@linkcode plugin} is installed,
 * returns a path to the plugin rules.
 *
 * Otherwise, returns {@linkcode null}.
 */
export function optionalRules(plugin: string): string | null {
    if (hasEslintPlugin(plugin)) {
        return `./rules/${plugin.replace(/^@/u, '')}`;
    }
    return null;
}

/**
 * Returns true if a given ESLint plugin exists.
 */
export function hasEslintPlugin(plugin: string): boolean {
    if (plugin.startsWith('@')) {
        return hasNodeModule(`${plugin}/eslint-plugin`);
    }
    return hasNodeModule(`eslint-plugin-${plugin}`);
}
