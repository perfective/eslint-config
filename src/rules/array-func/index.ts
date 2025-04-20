import { Linter } from 'eslint';
import eslintPluginArrayFunc from 'eslint-plugin-array-func';

export function arrayFuncConfig(): Linter.Config {
    return {
        plugins: {
            'array-func': eslintPluginArrayFunc,
        },
        rules: {
            'array-func/from-map': 'warn',
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
