import { hasNodeModule } from './node';

/**
 * If a given ESLint `plugin` is installed,
 * returns configuration for the `plugin` with the given `rules`.
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
 * If a given ESLint `plugin` is installed,
 * returns the given configuration `overrides`.
 *
 * Otherwise, returns `null`.
 */
export function optionalOverrides(plugin: string, overrides: Record<string, unknown>): Record<string, unknown> | null {
    if (hasEslintPlugin(plugin)) {
        return overrides;
    }
    return null;
}

/**
 * If a given ESLint `plugin` is installed,
 * returns a path to the plugin rules.
 *
 * Otherwise, returns `null`.
 */
export function optionalRules(plugin: string): string | null {
    if (hasEslintPlugin(plugin)) {
        return `./rules/${plugin.replace(/^@/u, '')}`;
    }
    return null;
}

/**
 * If a given rule belongs to an installed ESLint plugin,
 * returns an object with rule as a key and its config as a value.
 *
 * Otherwise, returns an empty object.
 */
export function optionalRule(rule: string, config: unknown): Record<string, unknown> {
    const plugin = pluginOfRule(rule);
    if (plugin === null) {
        return {};
    }
    if (hasEslintPlugin(plugin)) {
        return {
            [rule]: config,
        };
    }
    return {};
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

function pluginOfRule(rule: string): string | null {
    const parts = rule.split('/');
    if (parts.length > 1) {
        return parts[0];
    }
    return null;
}
