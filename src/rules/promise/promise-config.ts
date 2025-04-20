import { Linter } from 'eslint';
import eslintPluginPromise from 'eslint-plugin-promise';

export function promiseConfig(): Linter.Config {
    return {
        plugins: {
            promise: eslintPluginPromise,
        },
        rules: {
            'promise/catch-or-return': ['error', {
                allowThen: false,
                allowThenStrict: false,
                allowFinally: true,
            }],
            'promise/no-return-wrap': 'error',
            'promise/param-names': 'warn',
            'promise/always-return': ['error', {
                ignoreAssignmentVariable: [
                    'globalThis',
                ],
            }],
            'promise/no-multiple-resolved': 'error',
            'promise/no-native': 'off',
            'promise/no-nesting': 'error',
            'promise/no-promise-in-callback': 'error',
            'promise/no-callback-in-promise': ['error', {
                timeoutsErr: false,
            }],
            'promise/avoid-new': 'off',
            'promise/no-new-statics': 'warn',
            'promise/no-return-in-finally': 'error',
            'promise/prefer-catch': 'warn',
            'promise/spec-only': ['error', {
                allowedMethods: [],
            }],
            'promise/valid-params': 'error',
            // Promises should always be used instead of async/await.
            'promise/prefer-await-to-then': 'off', // == ES2017 Async/Await
            'promise/prefer-await-to-callbacks': 'off', // == ES2017 Async/Await
        },
    };
}
