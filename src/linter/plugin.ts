import { hasNodeModule } from './node';

/**
 * Returns an object with rule as a key and its config as a value,
 * if a given rule belongs to an installed ESLint plugin.
 *
 * Otherwise, returns an empty object.
 *
 * @since v0.21.0
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
 *
 * @since v0.21.0
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
