const gulp = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');

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

function images() {
   return gulp.src(['../../html/img/*'])
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/img'));
}

exports.default = gulp.series(clean, templates, styles, images);