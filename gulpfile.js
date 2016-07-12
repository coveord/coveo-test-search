var gulp = require('gulp');

gulp.task('copySearchUi', function () {
    return gulp.src(['css/**/*', 'image/**/*', 'js/**/*', '**/*.html'], { "base" : "./node_modules/coveo-search-ui/bin" })
        .pipe(gulp.dest('./public/'))
});
