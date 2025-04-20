import { ESLint, Linter } from 'eslint';
import { plugin } from 'typescript-eslint';

import { typescriptFiles } from '../../linter/glob';
import { typescriptLanguageOptions } from '../../linter/language-options';

import { extensionRules } from './extension-rules';
import { supportedRules } from './supported-rules';

export function typescriptEslintConfig(): Linter.Config {
    return {
        files: typescriptFiles,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            '@typescript-eslint': plugin as ESLint.Plugin,
        },
        rules: {
            ...supportedRules,
            ...extensionRules,
        },
    };
}
