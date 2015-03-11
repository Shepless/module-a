var path = require('path'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    insert = require('gulp-insert'),
    ngHtml2Js = require('gulp-ng-html2js'),
    Builder = require('systemjs-builder'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

gulp.task('clean', function () {
    return gulp.src('./dist', {
        read: false
    }).pipe(clean());
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task('partials', function () {
    return gulp.src('./src/**/*.html')
        //.pipe(htmlMin(options.minimize))
        .pipe(ngHtml2Js({
            prefix: 'ui-components/',
            template: "module.exports = angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" + " $templateCache.put('<%= template.url %>',\n '<%= template.prettyEscapedContent %>');\n" + "}]);\n"
        }))
        .pipe(insert.prepend('import angular from \'angular\';\n'))
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            modules: 'system'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', function (cb) {
    return runSequence('clean', 'less', 'scripts', 'partials', function () {
        var builder = new Builder();

        builder.loadConfig('./config.js').then(function () {
            builder.config({
                separateCSS: true
            });

            return builder.buildSFX('_app', 'playground/bundle.js', {
                minify: false,
                sourceMaps: false
            }).then(function () {
                cb();
            }).catch(function (e) {
                cb(e);
            });
        });
    });
});

gulp.task('serve', ['bundle'], function () {
    browserSync({
        server: {
            baseDir: "./playground"
        }
    });
});

gulp.task('default', ['serve']);