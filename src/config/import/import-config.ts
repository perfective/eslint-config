import { Linter } from 'eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';

import { ecmaFiles, Glob, javascriptFiles, typescriptFiles } from '../../linter/glob';
import { javascriptLanguageOptions, typescriptLanguageOptions } from '../../linter/language-options';

import { helpfulWarningsRules } from './helpful-warnings-rules';
import { moduleSystemsRules } from './module-systems-rules';
import { performanceRules } from './performance-rules';
import { staticAnalysisRules } from './static-analysis-rules';
import { styleGuideRules } from './style-guide-rules';

export function importConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            'import-x': eslintPluginImportX,
        },
        rules: {
            ...staticAnalysisRules,
            ...helpfulWarningsRules,
            ...moduleSystemsRules,
            ...styleGuideRules,
            ...performanceRules,
        },
    };
}

export function importJavascriptConfig(): Linter.Config {
    return {
        files: javascriptFiles,
        languageOptions: javascriptLanguageOptions(),
        plugins: {},
        settings: {
            'import-x/extensions': ['.js', '.jsx'],
        },
        rules: {
            'import-x/no-commonjs': 'off',
            'import-x/unambiguous': 'off',
        },
    };
}

export function importTypescriptConfig(): Linter.Config {
    return {
        files: typescriptFiles,
        languageOptions: typescriptLanguageOptions(),
        settings: {
            'import-x/parsers': {
                '@typescript-eslint/parser': [
                    '.ts',
                    '.tsx',
                ],
            },
            'import-x/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
    };
}
