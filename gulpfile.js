const { dest, series, src } = require('gulp');
const jsonEditor = require('gulp-json-editor');

function copyPackageJson() {
    return src('./package.json')
        .pipe(jsonEditor({
            main: './index.js',
            directories: {
                lib: './',
            },
            files: [
                '**/*.js',
                'tslint/index.d.ts',
            ],
        }, {}, {
            arrayMerge: (_dist, source, _options) => source,
        }))
        .pipe(dest('./dist/'));
}

exports.copyPackageJson = copyPackageJson;

function copyStaticFiles() {
    return src([
        './LICENSE',
        './CHANGELOG.adoc',
        './README.adoc',
        './README.md',
        './src/**/package.json',
    ]).pipe(dest('./dist/'));
}

exports.copyStaticFiles = copyStaticFiles;

exports.default = series(
    copyPackageJson,
    copyStaticFiles,
);
