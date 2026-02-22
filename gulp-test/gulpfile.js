// Within this file, you'll often see gulp APIs, 
// like src(), dest(), series(), or parallel() 
// but any vanilla JavaScript or Node modules can be used. 
// Any exported functions will be registered into gulp's task system.

    // Public tasks are exported from your gulpfile, which allows them to be run by the gulp command.
    // Private tasks are made to be used internally, usually used as part of series() or parallel() composition.

const { series } = require('gulp');
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename')

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function buildStyles() {
    return src('sass/**/*.scss')
      .pipe(sass())
      .pipe(rename('index.css'))
      .pipe(dest('public/css'));
}

function watchTask() {
    watch(['sass/**/*.scss', 'public/**/*.html'], buildStyles);
}

exports.build = build;
exports.default = series(buildStyles, watchTask);
