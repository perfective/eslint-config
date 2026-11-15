import { Linter } from 'eslint';

export const bestPracticesRules: Linter.RulesRecord = {
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    // Deprecated since v4.7.0. Use the linterOptions.reportUnusedDisableDirectives option.
    'eslint-comments/no-unused-disable': 'off',
    'eslint-comments/no-unused-enable': 'error',
};
