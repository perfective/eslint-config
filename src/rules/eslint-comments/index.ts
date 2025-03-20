import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';

import { bestPracticesRules } from './best-practices';
import { stylisticIssuesRules } from './stylistic-issues';

export const eslintCommentsConfig = {
    plugins: {
        'eslint-comments': eslintPluginEslintComments,
    },
    rules: {
        ...bestPracticesRules,
        ...stylisticIssuesRules,
    },
};
