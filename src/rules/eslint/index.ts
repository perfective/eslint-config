import { Linter } from 'eslint';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { languageOptions } from '../../config/language-options';

import { eslintLayoutFormattingRules } from './layout-formatting';
import { eslintPossibleProblemsRules } from './possible-problems';
import { eslintSuggestionsRules } from './suggestions';

export function eslintConfig(): Linter.Config {
    return {
        files: [
            ...javascriptFiles,
            ...typescriptFiles,
        ],
        languageOptions: languageOptions(),
        rules: {
            ...eslintPossibleProblemsRules,
            ...eslintSuggestionsRules,
            ...eslintLayoutFormattingRules,
        },
    };
}
