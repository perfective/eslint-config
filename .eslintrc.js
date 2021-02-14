module.exports = {
    extends: ['./dist'],
    overrides: [
        {
            files: ['*.js'],
            rules: {},
        },
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
            rules: {},
        },
        {
            files: ['*.spec.ts'],
            settings: {
                jest: {
                    version: 26,
                },
            },
        },
    ],
};
