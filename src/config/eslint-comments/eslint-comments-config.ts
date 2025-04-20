import { Linter } from 'eslint';

import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';

import { bestPracticesRules } from './best-practices-rules';
import { stylisticIssuesRules } from './stylistic-issues-rules';

export function eslintCommentsConfig(): Linter.Config {
    return {
        plugins: {
            'eslint-comments': eslintPluginEslintComments,
        },
        rules: {
            ...bestPracticesRules,
            ...stylisticIssuesRules,
        },
    };
}
