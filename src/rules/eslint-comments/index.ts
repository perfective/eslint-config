import { Linter } from 'eslint';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';

import { bestPracticesRules } from './best-practices';
import { stylisticIssuesRules } from './stylistic-issues';

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
