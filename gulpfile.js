import gulp from 'gulp';

import * as perfectiveGulp from '@perfective/build/gulp';

export const clean = perfectiveGulp.clean(['./dist', '*.tsbuildinfo']);
export const docs = perfectiveGulp.asciidoctor();
const full = gulp.series(
    clean,
    perfectiveGulp.typescript.esmBuild(),
    perfectiveGulp.typescript.tsDeclarations(),
    perfectiveGulp.packageJson.packageJson({
        module: './index.js',
        types: './index.d.ts',
        directories: {
            lib: './',
        },
        files: [
            '**/*.js',
            '**/*.d.ts',
        ],
    }, {
        exports: {
            '.': {
                import: './index.js',
                types: './index.d.ts',
            },
            // Each optional plugin configuration must be in a separate export,
            // so it does not fail when the peer dependency is not installed.
            // Optional plugin
            './cypress': {
                import: './rules/cypress/index.js',
                types: './rules/cypress/index.d.ts',
            },
            // Rules configuration functions
            './import': {
                import: './rules/import/index.js',
                types: './rules/import/index.d.ts',
            },
            // Optional plugin
            './jest': {
                import: './rules/jest/index.js',
                types: './rules/jest/index.d.ts',
            },
            // Optional plugin
            './jest-dom': {
                import: './rules/jest-dom/index.js',
                types: './rules/jest-dom/index.d.ts',
            },
            // Optional plugin
            './rxjs': {
                import: './rules/rxjs/index.js',
                types: './rules/rxjs/index.d.ts',
            },
            // Rules configuration functions
            './simple-import-sort': {
                import: './rules/simple-import-sort/index.js',
                types: './rules/simple-import-sort/index.d.ts',
            },
            // Optional plugin
            './testing-library': {
                import: './rules/testing-library/index.js',
                types: './rules/testing-library/index.d.ts',
            },
            // Rules configuration functions
            './typescript-eslint': {
                import: './rules/typescript-eslint/index.js',
                types: './rules/typescript-eslint/index.d.ts',
            },
            // Rules configuration functions
            './unicorn': {
                import: './rules/unicorn/index.js',
                types: './rules/unicorn/index.d.ts',
            },
        },
    }),
    perfectiveGulp.copy([
        './LICENSE*',
        './CHANGELOG*',
        './README*',
        './src/**/package.json',
    ], './dist'),
    docs,
);

export default full;
