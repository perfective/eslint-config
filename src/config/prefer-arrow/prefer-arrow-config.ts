import { Linter } from 'eslint';
import eslintPluginPreferArrow from 'eslint-plugin-prefer-arrow';

import { ecmaFiles, Glob } from '../../linter/glob';

export function preferArrowConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
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
