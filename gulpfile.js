import gulp from 'gulp';

import * as perfectiveGulp from '@perfective/build/gulp';

function packageJsonContent(name) {
    return {
        name: `@perfective/eslint-config/${name}`,
        type: 'module',
        module: `../config/${name}/index.js`,
        types: `../config/${name}/index.d.ts`,
        exports: {
            '.': {
                types: `../config/${name}/index.d.ts`,
                import: `../config/${name}/index.js`,
            },
        },
        sideEffects: false,
    };
}

export const clean = perfectiveGulp.clean(['./dist', '*.tsbuildinfo']);
export const docs = perfectiveGulp.asciidoctor();
const full = gulp.series(
    clean,
    perfectiveGulp.typescript.esmBuild(),
    perfectiveGulp.typescript.tsDeclarations(),
    perfectiveGulp.packageJson.packageJson({
        // CommonJS is not supported
        main: undefined,
        module: './index.js',
        types: './index.d.ts',
        directories: {
            lib: './',
        },
        files: [
            '**/package.json',
            '**/*.js',
            '**/*.d.ts',
        ],
    }, {}, {
        // Each optional plugin configuration must be in a separate export,
        // so it does not fail when the peer dependency is not installed.
        // Optional plugin
        './cypress': {
            import: './config/cypress/index.js',
            types: './config/cypress/index.d.ts',
        },
        // Rules configuration functions
        './import': {
            import: './config/import/index.js',
            types: './config/import/index.d.ts',
        },
        // Optional plugin
        './jest': {
            import: './config/jest/index.js',
            types: './config/jest/index.d.ts',
        },
        // Optional plugin
        './jest-dom': {
            import: './config/jest-dom/index.js',
            types: './config/jest-dom/index.d.ts',
        },
        // Optional plugin
        './rxjs': {
            import: './config/rxjs/index.js',
            types: './config/rxjs/index.d.ts',
        },
        // Rules configuration functions
        './simple-import-sort': {
            import: './config/simple-import-sort/index.js',
            types: './config/simple-import-sort/index.d.ts',
        },
        // Optional plugin
        './testing-library': {
            import: './config/testing-library/index.js',
            types: './config/testing-library/index.d.ts',
        },
        // Rules configuration functions
        './typescript-eslint': {
            import: './config/typescript-eslint/index.js',
            types: './config/typescript-eslint/index.d.ts',
        },
        // Rules configuration functions
        './unicorn': {
            import: './config/unicorn/index.js',
            types: './config/unicorn/index.d.ts',
        },
    }),
    perfectiveGulp.file.createJsonFile(
        './dist/cypress/package.json',
        packageJsonContent('cypress'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/import/package.json',
        packageJsonContent('import'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/jest/package.json',
        packageJsonContent('jest'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/jest-dom/package.json',
        packageJsonContent('jest-dom'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/rxjs/package.json',
        packageJsonContent('rxjs'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/simple-import-sort/package.json',
        packageJsonContent('simple-import-sort'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/testing-library/package.json',
        packageJsonContent('testing-library'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/typescript-eslint/package.json',
        packageJsonContent('typescript-eslint'),
    ),
    perfectiveGulp.file.createJsonFile(
        './dist/unicorn/package.json',
        packageJsonContent('unicorn'),
    ),
    perfectiveGulp.copy([
        './LICENSE*',
        './CHANGELOG*',
        './README*',
        './src/**/package.json',
    ], './dist'),
    docs,
);

export default full;
