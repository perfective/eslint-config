import { Linter } from 'eslint';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

import { Glob, jestFiles } from '../../linter/glob';

/**
 * Creates a flat config for `eslint-plugin-testing-library` for a given list of files globs.
 *
 * @since v0.31.0
 */
export function testingLibraryConfig(files: Glob[] = jestFiles): Linter.Config {
    return {
        files,
        plugins: {
            'testing-library': eslintPluginTestingLibrary,
        },
        rules: {
            'testing-library/await-async-events': 'off',
            'testing-library/await-async-queries': 'error',
            'testing-library/await-async-utils': 'error',
            // Vue.js only
            'testing-library/consistent-data-testid': ['error', {
                testIdPattern: '^[a-z0-9]+(-[a-z0-9]+)*$',
                testIdAttribute: 'data-testId',
            }],
            'testing-library/no-await-sync-events': 'error',
            'testing-library/no-await-sync-queries': 'error',
            'testing-library/no-container': 'error',
            'testing-library/no-debugging-utils': 'error',
            'testing-library/no-dom-import': 'warn',
            'testing-library/no-global-regexp-flag-in-query': 'warn',
            'testing-library/no-manual-cleanup': 'error',
            'testing-library/no-node-access': 'error',
            'testing-library/no-promise-in-fire-event': 'error',
            'testing-library/no-render-in-lifecycle': 'error',
            'testing-library/no-test-id-queries': 'error',
            // React only
            'testing-library/no-unnecessary-act': 'off',
            'testing-library/no-wait-for-multiple-assertions': 'error',
            'testing-library/no-wait-for-side-effects': 'error',
            'testing-library/no-wait-for-snapshot': 'error',
            'testing-library/prefer-explicit-assert': 'off',
            'testing-library/prefer-find-by': 'warn',
            'testing-library/prefer-implicit-assert': 'error',
            'testing-library/prefer-presence-queries': ['error', {
                presence: true,
                absence: true,
            }],
            'testing-library/prefer-query-by-disappearance': 'error',
            // TODO: Configure matchers
            'testing-library/prefer-query-matchers': 'off',
            'testing-library/prefer-screen-queries': 'error',
            'testing-library/prefer-user-event': 'error',
            'testing-library/render-result-naming-convention': 'error',
        },
    };
}
