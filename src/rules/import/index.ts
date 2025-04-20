import { Linter } from 'eslint';
import { flatConfigs } from 'eslint-plugin-import';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { javascriptLanguageOptions, languageOptions, typescriptLanguageOptions } from '../../config/language-options';

import { configurationImportNoExtraneousDependencies } from './rules/no-extraneous-dependencies';
import { helpfulWarningsRules } from './helpful-warnings';
import { moduleSystemsRules } from './module-systems';
import { staticAnalysisRules } from './static-analysis';
import { styleGuideRules } from './style-guide';

export function importConfig(): Linter.Config {
    return {
        files: [
            ...javascriptFiles,
            ...typescriptFiles,
        ],
        languageOptions: languageOptions(),
        plugins: {
            import: flatConfigs.recommended.plugins.import,
        },
        rules: {
            ...staticAnalysisRules,
            ...helpfulWarningsRules,
            ...moduleSystemsRules,
            ...styleGuideRules,
        },
    };
}

export function importJavascriptConfig(): Linter.Config {
    return {
        files: javascriptFiles,
        languageOptions: javascriptLanguageOptions(),
        plugins: {},
        settings: {
            'import/extensions': ['.js', '.jsx'],
        },
        rules: {
            'import/no-commonjs': 'off',
            'import/no-extraneous-dependencies': ['error', configurationImportNoExtraneousDependencies()],
            'import/unambiguous': 'off',
        },
    };
}

export function importTypescriptConfig(): Linter.Config {
    return {
        files: typescriptFiles,
        languageOptions: typescriptLanguageOptions(),
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': [
                    '.ts',
                    '.tsx',
                ],
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
    };
}
