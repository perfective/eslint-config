// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
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
