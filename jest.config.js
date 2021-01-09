module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            // Explicit configuration is required, because there are package.json for subpackages in ./src
            tsconfig: '<rootDir>/tsconfig.json',
        },
    },
    collectCoverage: true,
    coverageReporters: ['text'],
    verbose: false,
}
