import { Linter } from 'eslint';

/**
 * An ESLint flat config or a function that returns one.
 */
export type LinterConfig = Linter.Config | (() => Linter.Config);

export function linterConfig(config: LinterConfig): Linter.Config {
    if (typeof config === 'function') {
        return config();
    }
    return config;
}
