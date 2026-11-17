import { Linter } from 'eslint';
import eslintPluginArrayFunc from 'eslint-plugin-array-func';

import { ecmaFiles, Glob } from '../../linter/glob';

export function arrayFuncConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            'array-func': eslintPluginArrayFunc,
        },
        rules: {
            // Use unicorn/prefer-array-from-map.
            'array-func/from-map': 'off',
            'array-func/no-unnecessary-this-arg': 'error',
            'array-func/prefer-array-from': 'warn',
            'array-func/avoid-reverse': 'warn',
            // Array.prototype.flatMap() is not supported in the ES6 library for TypeScript
            // See: 'unicorn/prefer-array-flat-map'
            'array-func/prefer-flat-map': 'off',
            // Array.prototype.flat() is not supported in the ES6 library for TypeScript
            // See: 'unicorn/prefer-array-flat'
            'array-func/prefer-flat': 'off',
        },
    };
}
