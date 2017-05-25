var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nib = require('nib');
var minify = require('gulp-minify-css');

gulp.task('debug', function() {
  debugger;
  gulp
    .src('./src/**/*')
    .pipe(gulp.dest('./site/debug/'));
});

gulp.task('server', function () {
    gulp.src('./site')
            .pipe(webserver({
                host: '0.0.0.0',
                port: 8079,
                fallback: 'index.html',
                livereload: true
            }));
});

gulp.task('stylus', function () {
    gulp.src('./src/styles/style.styl')
            .pipe(stylus({
                use: nib(),
                'include css': true
            }))
            .pipe(minify())
            .pipe(gulp.dest('./site/css/'));
});

gulp.task('build', function () {
    browserify({
        entries: './src/App/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
            .transform(babelify)
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./site/js'));
});

gulp.task('watch', function () {
    gulp.watch('./src/App/**/*.jsx', ['build']);
    gulp.watch(['./src/styles/**/*.styl', './src/App/**/*.styl'], ['stylus']);
});

gulp.task('default', ['server', 'watch']);
