const gulp = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp
    .src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());

  done();
});

gulp.task('serve', function (done) {
  browserSync.init({
    server: './',
  });

  gulp.watch('css/**/*.scss', gulp.series('sass'));
  gulp.watch('*.html').on('change', () => {
    browserSync.reload();
    done();
  });

  done();
});

gulp.task('dev', gulp.series('sass', 'serve'));
