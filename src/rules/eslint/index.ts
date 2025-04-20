import { Linter } from 'eslint';

import { eslintLayoutFormattingRules } from './layout-formatting';
import { eslintPossibleProblemsRules } from './possible-problems';
import { eslintSuggestionsRules } from './suggestions';

export function eslintConfig(): Linter.Config {
    return {
        rules: {
            ...eslintPossibleProblemsRules,
            ...eslintSuggestionsRules,
            ...eslintLayoutFormattingRules,
        },
    };
}
