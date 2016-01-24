/// <binding AfterBuild='libs' Clean='clean' />

var gulp = require('gulp');
bower = require('gulp-bower'),
rename = require('gulp-rename'),
concat = require("gulp-concat"),
cssmin = require("gulp-cssmin"),
sass = require('gulp-sass'),
less = require('gulp-less'),
watch = require('gulp-watch'),
typescript = require('gulp-tsc'),
uglify = require('gulp-uglify');

var rimraf = require('rimraf');

var paths = {
    npm: './node_modules/',
    lib: './app/lib/',
    app: './app/'
};

var libs = [
    paths.npm + 'angular2/bundles/angular2.dev.js',
    paths.npm + 'angular2/bundles/http.dev.js',
    paths.npm + 'angular2/bundles/angular2-polyfills.js',
    paths.npm + 'es6-shim/es6-shim.js',
    paths.npm + 'systemjs/dist/system.js',
    paths.npm + 'systemjs/dist/system-polyfills.js'
];

gulp.task('rxjs', function () {
    return gulp.src(paths.npm + 'rxjs/**/*.js').pipe(gulp.dest(paths.lib + 'rxjs/'));
});

gulp.task('libs', ['rxjs'], function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('clean', function (callback) {
    rimraf(paths.lib, callback);
});


/// this is obsolete, because VS already builds the .ts files!
gulp.task("compile-ts", function () {

    gulp.src(["./app/**/*.ts"])
    .pipe(typescript({
        noExternalResolve: true,
        noImplicitAny: false,
        noEmitOnError: true,
        removeComments: false,
        sourceMap: false,
        target: "es5",
        module: "commonjs",
        outDir: "./app",
        experimentalDecorators: true,
        emitDecoratorMetadata: true
    }))
    .pipe(gulp.dest("./app"))
    .pipe(uglify())
    .pipe(rename("boot.min.js"))
    .pipe(gulp.dest("./app"));
});