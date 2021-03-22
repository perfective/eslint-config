export = {
    plugins: [
        'promise',
    ],
    rules: {
        'promise/catch-or-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'warn',
        'promise/always-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': 'error',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'warn',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',
        'promise/prefer-await-to-then': 'off', // == ES2017 Async/Await
        'promise/prefer-await-to-callbacks': 'off', // == ES2017 Async/Await
    },
};
