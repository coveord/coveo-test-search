const gulp = require("gulp");
const debug = require("gulp-debug");
const exec = require("child_process").exec;

gulp.task("installBetaPackage", function (cb) {
  return exec("npm i @coveo/atomic@beta", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task("copyCustomUi", function () {
  return gulp
    .src(["./testPages/*.html"], { base: "./testPages" })
    .pipe(gulp.dest("./public/custom"));
});

gulp.task("copySearchUi", function () {
  return gulp
    .src(
      [
        "./node_modules/coveo-search-ui/bin/css/**/*",
        "./node_modules/coveo-search-ui/bin/image/**/*",
        "./node_modules/coveo-search-ui/bin/js/**/*",
        "./node_modules/coveo-search-ui/bin/*.html",
      ],
      { base: "./node_modules/coveo-search-ui/bin" }
    )
    .pipe(gulp.dest("./public/"))
    .pipe(debug());
});

gulp.task(
  "default",
  gulp.series(
    "installBetaPackage",
    "copyCustomUi",
    "copySearchUi",
    async function () {}
  )
);
