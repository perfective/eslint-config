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
        directories: {
            lib: './',
        },
        files: [
            '**/*.js',
            'rules.d.ts',
            'rules/**/rules/*.d.ts',
        ],
    }, {
        // Remove the "exports" property as it doesn't support `rules.js` file.
        exports: undefined,
    }),
    build.copy([
        './LICENSE*',
        './CHANGELOG*',
        './README*',
        './src/**/package.json',
    ], './dist'),
    exports.docs,
);
