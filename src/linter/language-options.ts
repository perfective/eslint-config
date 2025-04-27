import { Linter } from 'eslint';
import { parser as typescriptEslintParser } from 'typescript-eslint';

/**
 * Creates ESLint `languageOptions` object for all files.
 *
 * - Uses TypeScript ESLint parser.
 * - Allows parsing JavaScript files even if they are not allowed by TS config.
 *
 * @since v0.31.0
 */
export function languageOptions(): Linter.LanguageOptions {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
        parser: typescriptEslintParser as Linter.Parser,
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
 * @since v0.31.0
 */
export function javascriptLanguageOptions(): Linter.LanguageOptions {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
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
 * - Uses TypeScript ESLint parser.
 * - Does not allow JavaScript files.
 *
 * @since v0.31.0
 */
export function typescriptLanguageOptions(): Linter.LanguageOptions {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
        parser: typescriptEslintParser as Linter.Parser,
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
