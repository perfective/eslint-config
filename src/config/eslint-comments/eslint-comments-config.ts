import { Linter } from 'eslint';

import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';

import { ecmaFiles, Glob } from '../../linter/glob';

import { bestPracticesRules } from './best-practices-rules';
import { stylisticIssuesRules } from './stylistic-issues-rules';

export function eslintCommentsConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            'eslint-comments': eslintPluginEslintComments,
        },
        rules: {
            ...bestPracticesRules,
            ...stylisticIssuesRules,
        },
    };
}
