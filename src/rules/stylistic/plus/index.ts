export = {
    plugins: [
        '@stylistic/plus',
    ],
    rules: {
        '@stylistic/plus/curly-newline': ['warn', {
            minElements: 1,
        }],
        '@stylistic/plus/indent-binary-ops': ['warn', 4],
        '@stylistic/plus/type-generic-spacing': 'warn',
        '@stylistic/plus/type-named-tuple-spacing': 'warn',
    },
};
