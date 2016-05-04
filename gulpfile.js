var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    });
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify'])
});

gulp.task('stylus', function () {
  return gulp.src('./public/css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css/build'));
});

gulp.task('default', ['connect', 'watch', 'stylus']);