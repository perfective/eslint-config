const del = require('del');
const gulp = require('gulp');

const gulpAsciidoctor = require('@asciidoctor/gulp-asciidoctor');
const gulpJsonEditor = require('gulp-json-editor');
const gulpRename = require('gulp-rename');
const gulpTypeScript = require('gulp-typescript');

function typeScriptConfig(config, settings = {}) {
    const project = gulpTypeScript.createProject(config, settings);
    return project.src().pipe(project());
}

function build() {
    return typeScriptConfig('tsconfig.build.json')
        .pipe(gulp.dest('./dist'));
}

exports.build = build;

function clean(callback) {
    del(['./dist', '*.tsbuildinfo']);
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
            devDependencies: undefined,
            scripts: undefined,
        }))
        .pipe(gulp.dest('./dist'));
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
        .pipe(gulp.dest('./dist'));
}

function buildDocumentation() {
    return gulp.src('./src/index.adoc')
        .pipe(gulpAsciidoctor())
        .pipe(gulpRename(path => {
            path.basename = 'docs';
            return path;
        }))
        .pipe(gulp.dest('dist'));
}

exports.default = gulp.series(
    clean,
    build,
    packageJson,
    staticFiles,
    buildDocumentation,
);
