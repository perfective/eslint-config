const perfectiveEslintConfig = require('./dist');

const { cypressConfig } = require('./dist/cypress');
const { jestConfig } = require('./dist/jest');
const { jestDomConfig } = require('./dist/jest-dom');
const { rxjsConfig } = require('./dist/rxjs');
const { testingLibraryConfig } = require('./dist/testing-library');

module.exports = [
    ...perfectiveEslintConfig.default,
    cypressConfig(),
    jestConfig(),
    jestDomConfig(),
    rxjsConfig(),
    testingLibraryConfig(),
];
