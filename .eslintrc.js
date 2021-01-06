module.exports = {
    extends: ['./'],
    parserOptions: {
        project: './tsconfig.json',
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: 'tsconfig.json',
            },
        },
        'jest': {
            version: 26,
        },
    },
};
