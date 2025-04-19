import { Linter } from 'eslint';
import eslintPluginPreferArrow from 'eslint-plugin-prefer-arrow';

import { javascriptFiles, typescriptFiles } from '../../config/glob';
import { languageOptions } from '../../config/language-options';

export function preferArrowConfig(): Linter.Config {
    return {
        files: [
            ...javascriptFiles,
            ...typescriptFiles,
        ],
        languageOptions: languageOptions(),
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
