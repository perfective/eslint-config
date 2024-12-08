import { hasNodeModule } from './node';

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
