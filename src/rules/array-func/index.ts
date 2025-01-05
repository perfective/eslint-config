// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
import eslintPluginArrayFunc from 'eslint-plugin-array-func';

// eslint-disable-next-line unicorn/prevent-abbreviations -- plugin name
export const arrayFuncConfig = {
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
