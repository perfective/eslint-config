const perfectiveEslintConfig = require('./dist');
const { cypressConfig } = require('./dist/cypress');
const { rxjsConfig } = require('./dist/rxjs');

module.exports = [
    ...perfectiveEslintConfig.default,
    cypressConfig(),
    rxjsConfig(),
];
