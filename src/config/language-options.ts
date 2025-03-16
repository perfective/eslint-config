// eslint-disable-next-line import/no-extraneous-dependencies -- dev-only
import { parser as typescriptEslintParser } from 'typescript-eslint';

export function languageOptions(): Record<string, unknown> {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
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

export function javascriptLanguageOptions(): Record<string, unknown> {
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

export function typescriptLanguageOptions(): Record<string, unknown> {
    return {
        sourceType: 'module',
        ecmaVersion: 'latest',
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
