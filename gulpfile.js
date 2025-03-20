import gulp from 'gulp';

import * as perfectiveGulp from '@perfective/build/gulp';

export const clean = perfectiveGulp.clean(['./dist', '*.tsbuildinfo']);
export const docs = perfectiveGulp.asciidoctor();
const full = gulp.series(
    clean,
    perfectiveGulp.typescript.esmBuild(),
    perfectiveGulp.typescript.tsDeclarations(),
    perfectiveGulp.packageJson.packageJson({
        main: './index.js',
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
                require: './index.js',
                types: './index.d.ts',
            },
            './config': {
                import: './config.js',
                require: './config.js',
                types: './config.d.ts',
            },
            './rules': {
                import: './rules.js',
                require: './rules.js',
                types: './rules.d.ts',
            },
            // Optional plugins.
            // Each plugin must be in a separate export, so it does not fail when the plugin is not installed.
            './cypress': {
                import: './cypress.js',
                require: './cypress.js',
                types: './cypress.d.ts',
            },
            './jest': {
                import: './jest.js',
                require: './jest.js',
                types: './jest.d.ts',
            },
            './jest-dom': {
                import: './jest-dom.js',
                require: './jest-dom.js',
                types: './jest-dom.d.ts',
            },
            './rxjs': {
                import: './rxjs.js',
                require: './rxjs.js',
                types: './rxjs.d.ts',
            },
            './testing-library': {
                import: './testing-library.js',
                require: './testing-library.js',
                types: './testing-library.d.ts',
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
