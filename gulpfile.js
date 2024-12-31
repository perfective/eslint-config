const gulp = require('gulp');

const build = require('@perfective/build/gulp');

exports.clean = build.clean(['./dist', '*.tsbuildinfo']);
exports.build = build.typescript.tsBuild();
exports.docs = build.asciidoctor();

exports.default = gulp.series(
    exports.clean,
    exports.build,
    build.packageJson.packageJson({
        main: './index.js',
        module: undefined,
        // The index.d.ts file is not published
        types: undefined,
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
                require: './index.js',
                types: './index.d.ts',
            },
            './config': {
                require: './config.js',
                types: './config.d.ts',
            },
            './rules': {
                require: './rules.js',
                types: './rules.d.ts',
            },
            // Optional plugins.
            // Each plugin must be in a separate export, so it does not fail when the plugin is not installed.
            './cypress': {
                require: './cypress.js',
                types: './cypress.d.ts',
            },
            './jest': {
                require: './jest.js',
                types: './jest.d.ts',
            },
            './jest-dom': {
                require: './jest-dom.js',
                types: './jest-dom.d.ts',
            },
            './rxjs': {
                require: './rxjs.js',
                types: './rxjs.d.ts',
            },
            './testing-library': {
                require: './testing-library.js',
                types: './testing-library.d.ts',
            },
        },
    }),
    build.copy([
        './LICENSE*',
        './CHANGELOG*',
        './README*',
        './src/**/package.json',
    ], './dist'),
    exports.docs,
);
