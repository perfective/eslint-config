import eslintPluginPreferArrow from 'eslint-plugin-prefer-arrow';

export const preferArrowConfig = {
    plugins: {
        'prefer-arrow': eslintPluginPreferArrow,
    },
    rules: {
        'prefer-arrow/prefer-arrow-functions': ['error', {
            allowStandaloneDeclarations: true,
            classPropertiesAllowed: false,
            disallowPrototype: false,
            singleReturnOnly: false,
        }],
    },
};
