import { Linter } from 'eslint';
import { flatConfigs } from 'eslint-plugin-import';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { javascriptLanguageOptions, typescriptLanguageOptions } from '../../config/language-options';

import { helpfulWarningsRules } from './helpful-warnings-rules';
import { moduleSystemsRules } from './module-systems-rules';
import { staticAnalysisRules } from './static-analysis-rules';
import { styleGuideRules } from './style-guide-rules';

export function importConfig(): Linter.Config {
    return {
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
