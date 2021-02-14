export = {
    plugins: [
        'prefer-arrow',
    ],
    rules: {
        'prefer-arrow/prefer-arrow-functions': ['error', {
            allowStandaloneDeclarations: true,
            classPropertiesAllowed: false,
            disallowPrototype: false,
            singleReturnOnly: false,
        }],
    },
};
