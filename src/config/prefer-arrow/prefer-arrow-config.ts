import { Linter } from 'eslint';
import eslintPluginPreferArrow from 'eslint-plugin-prefer-arrow';

export function preferArrowConfig(): Linter.Config {
    return {
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
}
