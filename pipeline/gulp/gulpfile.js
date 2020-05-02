var gulp = require('gulp');
var del = require('del');
var once = require('async-once');

gulp.task('clean', once(function(done) {
  del(['../../dist'], done);
}));

gulp.task('templates', gulp.series('clean', function() {
  return gulp.src(['../../html/*.html'])
    .pipe(gulp.dest('../../dist'));
}));

gulp.task('styles', gulp.series('clean', function() {
  return gulp.src(['../../html/css/*.css'])
    .pipe(gulp.dest('../../dist/css'));
}));

gulp.task('build', gulp.parallel('templates', 'styles'));

gulp.task('default', gulp.parallel('build'));