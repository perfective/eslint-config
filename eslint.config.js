import { cypressConfig } from './dist/config/cypress/index.js';
import { importNoExtraneousDependencies } from './dist/config/import/index.js';
import { jestConfig, jestTypescriptConfig } from './dist/config/jest/index.js';
import { jestDomConfig } from './dist/config/jest-dom/index.js';
import { rxjsConfig } from './dist/config/rxjs/index.js';
import { testingLibraryConfig } from './dist/config/testing-library/index.js';
import { unicornPreventAbbreviations } from './dist/config/unicorn/index.js';
import { configurationFiles, jestFiles, perfectiveEslintConfig } from './dist/index.js';

const eslintConfig = perfectiveEslintConfig([
    cypressConfig,
    jestConfig,
    jestTypescriptConfig,
    jestDomConfig,
    rxjsConfig,
    testingLibraryConfig,
    {
        rules: {
            'import/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
                devDependencies: [...jestFiles, ...configurationFiles],
                peerDependencies: true,
            })],
            'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations({}, {
                allowList: {
                    'arrayFuncConfig': true,
                    'array-func-config': true,
                },
            })],
        },
    },
]);

export default eslintConfig;
