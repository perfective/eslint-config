import { Linter } from 'eslint';

export const stylisticIssuesRules: Linter.RulesRecord = {
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': ['error', {
        allow: [
            'eslint-disable',
            'eslint-disable-next-line',
            'eslint-enable',
        ],
    }],
    'eslint-comments/require-description': ['error', {
        ignore: [
            'eslint-enable',
        ],
    }],
};
