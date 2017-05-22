'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require("gulp-csscomb");

gulp.task('default', function () {
    console.log("gulp default");
});

gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csscomb())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
