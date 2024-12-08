const perfectiveEslintConfig = require('./dist');
const { cypressConfig } = require('./dist/cypress');
const { rxjsConfig } = require('./dist/rxjs');
const { testingLibraryConfig } = require('./dist/testing-library');

module.exports = [
    ...perfectiveEslintConfig.default,
    cypressConfig(),
    rxjsConfig(),
    testingLibraryConfig(),
];
