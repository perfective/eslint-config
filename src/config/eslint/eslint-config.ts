import { Linter } from 'eslint';

import { ecmaFiles, Glob } from '../../linter/glob';

import { eslintLayoutFormattingRules } from './layout-formatting-rules';
import { eslintPossibleProblemsRules } from './possible-problems-rules';
import { eslintSuggestionsRules } from './suggestions-rules';

export function eslintConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        rules: {
            ...eslintPossibleProblemsRules,
            ...eslintSuggestionsRules,
            ...eslintLayoutFormattingRules,
        },
    };
}
