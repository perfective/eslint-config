import { Linter } from 'eslint';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { languageOptions } from '../../config/language-options';

import { bestPracticesRules } from './best-practices';
import { stylisticIssuesRules } from './stylistic-issues';

export function eslintCommentsConfig(): Linter.Config {
    return {
        files: [
            ...javascriptFiles,
            ...typescriptFiles,
        ],
        languageOptions: languageOptions(),
        plugins: {
            'eslint-comments': eslintPluginEslintComments,
        },
        rules: {
            ...bestPracticesRules,
            ...stylisticIssuesRules,
        },
    };
}
