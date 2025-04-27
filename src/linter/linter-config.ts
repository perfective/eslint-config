import { Linter } from 'eslint';

/**
 * An ESLint flat config or a function that returns one.
 *
 * @since v0.31.0
 */
export type LinterConfig = Linter.Config | (() => Linter.Config);

/**
 * A function to instantiate ESLint flat config.
 *
 * @since v0.31.0
 */
export function linterConfig(config: LinterConfig): Linter.Config {
    if (typeof config === 'function') {
        return config();
    }
    return config;
}
