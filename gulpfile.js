var path = require('path'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed'),
    insert = require('gulp-insert'),
    templateCache = require('gulp-angular-templatecache'),
    Builder = require('systemjs-builder'),
    browserSync = require('browser-sync');

gulp.task('clean', function () {
    return gulp.src('./dist', {
        read: false
    }).pipe(clean());
});

gulp.task('less', ['clean'], function () {
    return gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task('partials', ['less'], function () {
    return gulp.src('./src/**/*.html')
        .pipe(changed('./dist', {
            extension: '.html'
        }))
        //.pipe(htmlMin(options.minimize))
        .pipe(templateCache({
            root: 'ui-components/',
            module: 'ui-components-templates',
            standalone: true
        }))
        .pipe(concat('templates.js'))
        .pipe(insert.prepend('import angular from \'angular\';\n'))
        .pipe(babel({
            modules: 'system'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['partials'], function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            modules: 'system'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile', ['build'], function (cb) {
    var builder = new Builder();

    builder.loadConfig('./config.js').then(function () {
        return builder.buildSFX('dist/_app', './playground/bundle.js', {
            minify: false,
            sourceMaps: true
        }).then(function () {
            cb();
        }).catch(function (e) {
            cb(e);
        });
    });
});

gulp.task('serve', ['compile'], function () {
    browserSync({
        server: {
            baseDir: "./playground"
        }
    });
});

gulp.task('default', ['build']);