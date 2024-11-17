import { eslintLayoutFormattingRules } from './layout-formatting';
import { eslintPossibleProblemsRules } from './possible-problems';
import { eslintSuggestionsRules } from './suggestions';

export const eslintConfig = {
    rules: {
        ...eslintPossibleProblemsRules,
        ...eslintSuggestionsRules,
        ...eslintLayoutFormattingRules,
    },
};
