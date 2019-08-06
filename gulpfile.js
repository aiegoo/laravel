const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compile-scss', function () {
    gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['compile-scss']);
});