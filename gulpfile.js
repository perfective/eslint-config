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
            './config': {
                import: './config.js',
                types: './config.d.ts',
            },
            './rules': {
                import: './rules.js',
                types: './rules.d.ts',
            },
            // Optional plugins.
            // Each plugin must be in a separate export, so it does not fail when the plugin is not installed.
            './cypress': {
                import: './rules/cypress/index.js',
                types: './rules/cypress/index.d.ts',
            },
            './jest': {
                import: './rules/jest/index.js',
                types: './rules/jest/index.d.ts',
            },
            './jest-dom': {
                import: './rules/jest-dom/index.js',
                types: './rules/jest-dom/index.d.ts',
            },
            './rxjs': {
                import: './rules/rxjs/index.js',
                types: './rules/rxjs/index.d.ts',
            },
            './testing-library': {
                import: './testing-library.js',
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
