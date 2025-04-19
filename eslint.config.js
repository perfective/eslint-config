import { cypressConfig } from './dist/cypress.js';
import { perfectiveConfig } from './dist/index.js';
import { jestConfig } from './dist/jest.js';
import { jestDomConfig } from './dist/jest-dom.js';
import { importNoExtraneousDependencies } from './dist/rules/import/rules/no-extraneous-dependencies.js';
import { unicornPreventAbbreviations } from './dist/rules/unicorn/rules/prevent-abbreviations.js';
import { rxjsConfig } from './dist/rxjs.js';
import { testingLibraryConfig } from './dist/testing-library.js';

const eslintConfig = perfectiveConfig().concat([
    ...cypressConfig(),
    ...jestConfig(),
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
    {
        files: ['*.config.js', '.*.js', 'gulpfile.js'],
        rules: {
            'import/extensions': ['error', 'ignorePackages'],
            'import/no-default-export': ['off'],
            'n/no-unpublished-import': ['error', {
                allowModules: ['gulp', '@perfective/build'],
                convertPath: {
                    'dist/**/*.js': ['^dist/(.+)?\\.js$', '$1.js'],
                },
            }],
        },
    },
]);

export default eslintConfig;
