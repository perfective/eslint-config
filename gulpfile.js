const del = require('del');
const gulp = require('gulp');
const gulpJsonEditor = require('gulp-json-editor');

function clean(callback) {
    del(['dist', '*.tsbuildinfo']);
    callback();
}

exports.clean = clean;

function packageJson() {
    return gulp
        .src('./package.json')
        .pipe(gulpJsonEditor({
            main: './index.js',
            directories: {
                lib: './',
            },
            files: [
                '**/*.js',
                'rules.d.ts',
                'rules/**/rules/*.d.ts',
            ],
        }))
        .pipe(
            gulp.dest('./dist/'),
        );
}

function staticFiles() {
    return gulp
        .src([
            './LICENSE',
            './CHANGELOG.adoc',
            './README.adoc',
            './README.md',
            './src/**/package.json',
        ])
        .pipe(
            gulp.dest('./dist/'),
        );
}

exports.default = gulp.series(
    clean,
    packageJson,
    staticFiles,
);
