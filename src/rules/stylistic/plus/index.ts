import eslintPluginStylisticPlus from '@stylistic/eslint-plugin-plus';

export const stylisticPlusConfig = {
    plugins: {
        '@stylistic/plus': eslintPluginStylisticPlus,
    },
    rules: {
        '@stylistic/plus/curly-newline': ['warn', {
            minElements: 1,
        }],
        '@stylistic/plus/indent-binary-ops': ['warn', 4],
        '@stylistic/plus/type-generic-spacing': 'warn',
        '@stylistic/plus/type-named-tuple-spacing': 'warn',
    },
};
