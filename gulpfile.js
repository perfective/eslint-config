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
            'config.d.ts',
            'config/**/*.d.ts',
            'rules.d.ts',
            'rules/**/rules/*.d.ts',
        ],
    }, {
        exports: {
            '.': {
                require: './index.js',
            },
            './config': {
                require: './config.js',
                types: './config.d.ts',
            },
            './cypress': {
                require: './cypress.js',
                types: './cypress.d.ts',
            },
            './rules': {
                require: './rules.js',
                types: './rules.d.ts',
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
