import { perfectiveEslintConfig } from './dist/index.js';
import { importNoExtraneousDependencies, unicornPreventAbbreviations } from './dist/rules.js';
import { cypressConfig } from './dist/rules/cypress/index.js';
import { jestConfig } from './dist/rules/jest/index.js';
import { jestDomConfig } from './dist/rules/jest-dom/index.js';
import { rxjsConfig } from './dist/rules/rxjs/index.js';
import { testingLibraryConfig } from './dist/rules/testing-library/index.js';

const eslintConfig = perfectiveEslintConfig([
    cypressConfig,
    jestConfig,
    jestDomConfig,
    rxjsConfig,
    testingLibraryConfig,
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

export default eslintConfig;
