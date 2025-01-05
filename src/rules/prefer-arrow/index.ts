// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
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
