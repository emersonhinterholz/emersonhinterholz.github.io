var gulp = require('gulp');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var csso = require('gulp-csso');

function clean() {
  return del(['./dist']);
};

function templates() {
   return gulp.src(['../../html/*.html'])
      .pipe(htmlmin({
         collapseWhitespace: true,
         removeComments: true,
         minifyCSS: true,
         minifyJS: true,
         keepClosingSlash: true,
         html5: true,
         decodeEntities: true
      }))
      .pipe(gulp.dest('./dist'));
}

function styles() {
   return gulp.src(['../../html/css/*.css'])
      .pipe(csso())
      .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.series(clean, templates, styles);