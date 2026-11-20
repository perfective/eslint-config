import { Linter } from 'eslint';
import globals from 'globals';
import { parser as typescriptEslintParser } from 'typescript-eslint';

/**
 * Creates ESLint `languageOptions` object for all files.
 *
 * - Defines browser and Node.js (ES module) global variables as read-only.
 * - Uses TypeScript ESLint parser.
 * - Allows parsing JavaScript files even if they are not allowed by TS config.
 *
 * @since v0.31.0
 */
export function languageOptions(): Linter.LanguageOptions {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
        globals: ecmaGlobals(),
        parser: typescriptEslintParser,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: false,
                impliedStrict: true,
            },
            projectService: {
                // Allow parsing JS config files that are not listed in the tsconfig
                allowDefaultProject: ['?(.)*.?(m|c)js'],
            },
            warnOnUnsupportedTypeScriptVersion: true,
        },
    };
}

/**
 * Creates ESLint `languageOptions` object for JavaScript files.
 *
 * - Defines browser and Node.js (ES module) global variables as read-only.
 *
 * @since v0.31.0
 */
export function javascriptLanguageOptions(): Linter.LanguageOptions {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
        globals: ecmaGlobals(),
        parserOptions: {
            ecmaFeatures: {
                globalReturn: false,
                impliedStrict: true,
            },
        },
    };
}

/**
 * Creates ESLint `languageOptions` object for TypeScript files.
 *
 * - Defines browser and Node.js (ES module) global variables as read-only.
 * - Uses TypeScript ESLint parser.
 * - Does not allow JavaScript files.
 *
 * @since v0.31.0
 */
export function typescriptLanguageOptions(): Linter.LanguageOptions {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
        globals: ecmaGlobals(),
        parser: typescriptEslintParser,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: false,
                impliedStrict: true,
            },
            projectService: true,
            warnOnUnsupportedTypeScriptVersion: true,
        },
    };
}

/**
 * Creates read-only global variables for code that runs in a browser or in Node.js as an ES module.
 * Node.js CommonJS variables (`require`, `module`, `exports`, `__dirname`, `__filename`) are not included.
 */
function ecmaGlobals(): Linter.Globals {
    return readonlyGlobals({
        ...globals.browser,
        ...globals.nodeBuiltin,
    });
}

/**
 * Marks every given global variable as `readonly`,
 * so the `no-global-assign` rule reports assignments to any of them.
 */
function readonlyGlobals(variables: Linter.Globals): Linter.Globals {
    return Object.fromEntries(Object.keys(variables).map(name => [name, 'readonly']));
}
