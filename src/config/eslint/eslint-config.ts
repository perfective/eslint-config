import { Linter } from 'eslint';

import { eslintLayoutFormattingRules } from './layout-formatting-rules';
import { eslintPossibleProblemsRules } from './possible-problems-rules';
import { eslintSuggestionsRules } from './suggestions-rules';

export function eslintConfig(): Linter.Config {
    return {
        rules: {
            ...eslintPossibleProblemsRules,
            ...eslintSuggestionsRules,
            ...eslintLayoutFormattingRules,
        },
    };
}
