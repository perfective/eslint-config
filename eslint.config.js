/* eslint-disable n/no-unpublished-import -- dev-only */
/* eslint-disable import/extensions -- ES modules require extensions */
import { cypressConfig } from './dist/cypress.js';
import { perfectiveConfig } from './dist/index.js';
import { jestConfig } from './dist/jest.js';
import { jestDomConfig } from './dist/jest-dom.js';
import { importNoExtraneousDependencies } from './dist/rules/import/rules/no-extraneous-dependencies.js';
import { unicornPreventAbbreviations } from './dist/rules/unicorn/rules/prevent-abbreviations.js';
import { rxjsConfig } from './dist/rxjs.js';
import { testingLibraryConfig } from './dist/testing-library.js';

/* eslint-enable import/extensions */
/* eslint-enable n/no-unpublished-import */

const eslintConfig = perfectiveConfig().concat([
    cypressConfig(),
    jestConfig(),
    jestDomConfig(),
    rxjsConfig(),
    testingLibraryConfig(),
    {
        rules: {
            'import/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
                devDependencies: true,
            })],
            'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations({}, {
                allowList: {
                    arrayFuncConfig: true,
                },
            })],
        },
    },
]);

// eslint-disable-next-line import/no-default-export -- required for configuration
export default eslintConfig;
