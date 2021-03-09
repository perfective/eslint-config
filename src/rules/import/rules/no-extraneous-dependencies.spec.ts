import {
    cypressImportNoExtraneousDependencies,
    ImportNoExtraneousDependencies,
    importNoExtraneousDependencies, jestImportNoExtraneousDependencies,
    jsImportNoExtraneousDependencies,
} from './no-extraneous-dependencies';

describe(importNoExtraneousDependencies, () => {
    describe('when argument is not provided', () => {
        it('returns default configuration', () => {
            expect(importNoExtraneousDependencies())
                .toStrictEqual({
                    bundledDependencies: true,
                    devDependencies: false,
                    optionalDependencies: false,
                    peerDependencies: false,
                } as ImportNoExtraneousDependencies);
        });
    });

    describe('when argument is provided', () => {
        it('overrides default configuration values with the argument values', () => {
            expect(importNoExtraneousDependencies({
                peerDependencies: true,
                devDependencies: ['./*.js'],
            })).toStrictEqual({
                bundledDependencies: true,
                devDependencies: ['./*.js'],
                optionalDependencies: false,
                peerDependencies: true,
            } as ImportNoExtraneousDependencies);
        });
    });
});

describe(jsImportNoExtraneousDependencies, () => {
    it('returns "import/no-extraneous-dependencies" configuration for JS files', () => {
        expect(jsImportNoExtraneousDependencies())
            .toStrictEqual({
                bundledDependencies: true,
                devDependencies: ['**/.*.js', '**/*.config.js', '**/gulpfile.js'],
                optionalDependencies: false,
                peerDependencies: false,
            } as ImportNoExtraneousDependencies);
    });
});

describe(jestImportNoExtraneousDependencies, () => {
    it('returns "import/no-extraneous-dependencies" configuration for Jest tests', () => {
        expect(jestImportNoExtraneousDependencies())
            .toStrictEqual({
                bundledDependencies: true,
                devDependencies: ['**/*.@(spec|test).[jt]s?(x)'],
                optionalDependencies: false,
                peerDependencies: false,
            } as ImportNoExtraneousDependencies);
    });
});

describe(cypressImportNoExtraneousDependencies, () => {
    it('returns "import/no-extraneous-dependencies" configuration for Cypress tests', () => {
        expect(cypressImportNoExtraneousDependencies())
            .toStrictEqual({
                bundledDependencies: true,
                devDependencies: ['cypress/**/*.[jt]s'],
                optionalDependencies: false,
                peerDependencies: false,
            } as ImportNoExtraneousDependencies);
    });
});
