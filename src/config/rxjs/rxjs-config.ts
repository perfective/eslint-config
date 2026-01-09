import { Linter } from 'eslint';
import eslintPluginRxjs from 'eslint-plugin-rxjs-x';

import { Glob, typescriptFiles } from '../../linter/glob';
import { typescriptLanguageOptions } from '../../linter/language-options';

/**
 * Creates a flat config for `eslint-plugin-rxjs-x` for a given list of files globs.
 *
 * @since v0.31.0
 */
export function rxjsConfig(files: Glob[] = typescriptFiles): Linter.Config {
    return {
        files,
        languageOptions: typescriptLanguageOptions(),
        plugins: {
            'rxjs-x': eslintPluginRxjs,
        },
        rules: {
            'rxjs-x/ban-observables': 'error',
            'rxjs-x/ban-operators': ['error', {
                tap: false,
            }],
            'rxjs-x/finnish': ['error', {
                functions: true,
                methods: true,
                names: {},
                parameters: true,
                properties: true,
                strict: true,
                types: {},
                variables: true,
            }],
            'rxjs-x/just': 'off',
            'rxjs-x/no-async-subscribe': 'error',
            'rxjs-x/no-compat': 'error',
            'rxjs-x/no-connectable': 'error',
            'rxjs-x/no-create': 'error',
            'rxjs-x/no-cyclic-action': 'error',
            // Fails for nullable and optional subjects, e.g.:
            //  new BehaviorSubject(null) != new BehaviorSubject<T | null>(null);
            'rxjs-x/no-explicit-generics': 'off',
            'rxjs-x/no-exposed-subjects': 'error',
            'rxjs-x/no-finnish': 'off',
            'rxjs-x/no-floating-observables': 'error',
            'rxjs-x/no-ignored-error': 'error',
            'rxjs-x/no-ignored-notifier': 'error',
            // Deprecated. Use rxjs-x/no-floating-observables.
            'rxjs-x/no-ignored-observable': 'off',
            'rxjs-x/no-ignored-replay-buffer': 'error',
            'rxjs-x/no-ignored-subscribe': 'error',
            'rxjs-x/no-ignored-subscription': 'error',
            'rxjs-x/no-ignored-takewhile-value': 'error',
            // TODO: Enable once the autofix bug is fixed.
            'rxjs-x/no-implicit-any-catch': ['off', {
                allowExplicitAny: false,
            }],
            'rxjs-x/no-index': 'error',
            'rxjs-x/no-internal': 'warn',
            'rxjs-x/no-nested-subscribe': 'error',
            'rxjs-x/no-redundant-notify': 'error',
            // Prior to v6.4.0 shareReplay() operator had some surprising behavior:
            //  https://github.com/ReactiveX/rxjs/pull/4059
            'rxjs-x/no-sharereplay': 'off',
            'rxjs-x/no-sharereplay-before-takeuntil': 'error',
            'rxjs-x/no-subclass': 'error',
            'rxjs-x/no-subject-unsubscribe': 'error',
            'rxjs-x/no-subject-value': 'error',
            // Using subscribe is more semantic than using `tap()`
            'rxjs-x/no-subscribe-handlers': 'off',
            'rxjs-x/no-topromise': 'error',
            // See https://ncjamieson.com/avoiding-switchmap-related-bugs/
            'rxjs-x/no-unbound-methods': 'error',
            'rxjs-x/no-unnecessary-collection': 'error',
            'rxjs-x/no-unsafe-catch': 'error',
            'rxjs-x/no-unsafe-first': 'error',
            'rxjs-x/no-unsafe-subject-next': 'error',
            'rxjs-x/no-unsafe-switchmap': 'error',
            'rxjs-x/no-unsafe-takeuntil': 'error',
            'rxjs-x/prefer-observer': 'off',
            'rxjs-x/suffix-subjects': 'off',
            'rxjs-x/throw-error': 'error',
        },
    };
}
