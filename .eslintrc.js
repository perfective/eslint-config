module.exports = {
    extends: ['./dist'],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: './tsconfig.json',
            },
            settings: {
                'import/resolver': {
                    typescript: {
                        project: 'tsconfig.json',
                    },
                },
            },
            rules: {
                'unicorn/prevent-abbreviations': 'off',
            }
        },
        {
            files: ['*.spec.ts'],
            settings: {
                'jest': {
                    version: 26,
                },
            },
        }
    ],
};
