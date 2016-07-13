var gulp = require('gulp');
var debug = require('gulp-debug');


gulp.task('copyCustomUi', function () {
    return gulp.src(['./testPages/*.html'], { "base" : "./testPages" })
        .pipe(gulp.dest('./public/custom'))
});

gulp.task("copySearchUi", function () {
  return gulp.src([
                    './node_modules/coveo-search-ui/bin/css/**/*',
                    './node_modules/coveo-search-ui/bin/image/**/*',
                    './node_modules/coveo-search-ui/bin/js/**/*',
                    './node_modules/coveo-search-ui/bin/*.html'],
                  { "base" : "./node_modules/coveo-search-ui/bin" })
                  .pipe(gulp.dest('./public/'))
                  .pipe(debug());

})

gulp.task('default', ['copyCustomUi', 'copySearchUi'], function () {

})
