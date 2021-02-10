module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            // Explicit configuration is required, because there are package.json for subpackages in ./src
            tsconfig: '<rootDir>/tsconfig.json',
        },
    },
    // Prevent "jest-haste-map: Haste module naming collision" issue when package.json is copied into ./dist
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    collectCoverage: true,
    coverageReporters: ['text'],
    verbose: false,
};
