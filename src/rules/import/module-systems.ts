export = {
    rules: {
        'import/no-amd': 'error',
        'import/no-commonjs': ['error', {
            allowConditionalRequire: true,
            allowPrimitiveModules: true,
        }],
        'import/no-import-module-exports': 'error',
        // TODO: Research usage
        'import/no-nodejs-modules': 'off',
        'import/unambiguous': 'error',
    },
};
