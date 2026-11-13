import { config } from '@perfective/build/jest';

/**
 * Runs Jest with native ES modules,
 * as some ESLint plugins are published only as ES modules and cannot be loaded in the CommonJS mode.
 *
 * Requires the `--experimental-vm-modules` Node.js option (see the `test` scripts).
 */
const jestConfig = {
    ...config,
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.jest.json',
                useESM: true,
            },
        ],
    },
};

export default jestConfig;
