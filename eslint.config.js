/* eslint-disable n/no-unpublished-import -- dev-only */
/* eslint-disable import/extensions -- ES modules require extensions */
import { cypressConfig } from './dist/cypress.js';
import perfectiveEslintConfig from './dist/index.js';
import { jestConfig } from './dist/jest.js';
import { jestDomConfig } from './dist/jest-dom.js';
import { rxjsConfig } from './dist/rxjs.js';
import { testingLibraryConfig } from './dist/testing-library.js';

/* eslint-enable import/extensions */
/* eslint-enable n/no-unpublished-import */

const eslintConfig = [
    ...perfectiveEslintConfig,
    cypressConfig(),
    jestConfig(),
    jestDomConfig(),
    rxjsConfig(),
    testingLibraryConfig(),
];

// eslint-disable-next-line import/no-default-export -- required for configuration
export default eslintConfig;
