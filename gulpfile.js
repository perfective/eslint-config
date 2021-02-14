const gulp = require('gulp');
const gulpJsonEditor = require('gulp-json-editor');

function copyPackageJson() {
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

exports.copyPackageJson = copyPackageJson;

function copyStaticFiles() {
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

exports.copyStaticFiles = copyStaticFiles;

exports.default = gulp.series(
    copyPackageJson,
    copyStaticFiles,
);
