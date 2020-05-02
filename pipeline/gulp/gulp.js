'use strict';

var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');

gulp.task('clean', () => del(['../../dist']));

gulp.task('styles', function () {
    return gulp.src('../../html/css/main.css')
        .pipe(csso())
        .pipe(gulp.dest('../../dist/css'))
});

gulp.task('pages', function() {
return gulp.src(['../../html/index.html'])
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest('../../dist'));
});

gulp.task('default', ['clean'], function () {
  runSequence(
    'styles',
    'pages'
  );
});
