
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));


gulp.task('SassToCss', async () => {
    gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
})