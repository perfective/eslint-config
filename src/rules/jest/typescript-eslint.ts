export = {
    rules: {
        'jest/unbound-method': ['error', {
            // See TSLint "static-this"
            ignoreStatic: true,
        }],
    },
};
