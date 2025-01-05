/* eslint-disable import/default -- Default export works */
// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint plugin used only during development
import eslintPluginRxjs from '@smarttools/eslint-plugin-rxjs';

/* eslint-enable import/default */

export const rxjsConfig = {
    plugins: {
        '@smarttools/rxjs': eslintPluginRxjs,
    },
    rules: {
        '@smarttools/rxjs/ban-observables': 'error',
        '@smarttools/rxjs/ban-operators': ['error', {
            tap: false,
        }],
        '@smarttools/rxjs/finnish': ['error', {
            functions: true,
            methods: true,
            names: {},
            parameters: true,
            properties: true,
            strict: true,
            types: {},
            variables: true,
        }],
        '@smarttools/rxjs/just': 'off',
        '@smarttools/rxjs/no-async-subscribe': 'error',
        '@smarttools/rxjs/no-compat': 'error',
        '@smarttools/rxjs/no-connectable': 'error',
        '@smarttools/rxjs/no-create': 'error',
        '@smarttools/rxjs/no-cyclic-action': 'error',
        // Fails for nullable and optional subjects, e.g.:
        //  new BehaviorSubject(null) != new BehaviorSubject<T | null>(null);
        '@smarttools/rxjs/no-explicit-generics': 'off',
        '@smarttools/rxjs/no-exposed-subjects': 'error',
        '@smarttools/rxjs/no-finnish': 'off',
        '@smarttools/rxjs/no-ignored-error': 'error',
        '@smarttools/rxjs/no-ignored-notifier': 'error',
        '@smarttools/rxjs/no-ignored-observable': 'error',
        '@smarttools/rxjs/no-ignored-replay-buffer': 'error',
        '@smarttools/rxjs/no-ignored-subscribe': 'error',
        '@smarttools/rxjs/no-ignored-subscription': 'error',
        '@smarttools/rxjs/no-ignored-takewhile-value': 'error',
        // TODO: Enable once the autofix bug is fixed.
        '@smarttools/rxjs/no-implicit-any-catch': ['off', {
            allowExplicitAny: false,
        }],
        '@smarttools/rxjs/no-index': 'error',
        '@smarttools/rxjs/no-internal': 'warn',
        '@smarttools/rxjs/no-nested-subscribe': 'error',
        '@smarttools/rxjs/no-redundant-notify': 'error',
        // Prior to v6.4.0 shareReplay() operator had some surprising behavior:
        //  https://github.com/ReactiveX/@smarttools/rxjs/pull/4059
        '@smarttools/rxjs/no-sharereplay': 'off',
        '@smarttools/rxjs/no-subclass': 'error',
        '@smarttools/rxjs/no-subject-unsubscribe': 'error',
        '@smarttools/rxjs/no-subject-value': 'error',
        // Using subscribe is more semantic than using `tap()`
        '@smarttools/rxjs/no-subscribe-handlers': 'off',
        '@smarttools/rxjs/no-topromise': 'error',
        // See https://ncjamieson.com/avoiding-switchmap-related-bugs/
        '@smarttools/rxjs/no-unbound-methods': 'error',
        '@smarttools/rxjs/no-unsafe-catch': 'error',
        '@smarttools/rxjs/no-unsafe-first': 'error',
        '@smarttools/rxjs/no-unsafe-subject-next': 'error',
        '@smarttools/rxjs/no-unsafe-switchmap': 'error',
        '@smarttools/rxjs/no-unsafe-takeuntil': 'error',
        '@smarttools/rxjs/prefer-observer': 'off',
        '@smarttools/rxjs/suffix-subjects': 'off',
        '@smarttools/rxjs/throw-error': 'error',
    },
};
