'use strict';

module.exports = function () {
  $.gulp.task('copyFonts', function () {
    return $.gulp.src($.path.src + 'statics/fonts/**')
      .pipe($.gulp.dest($.path.public + 'fonts/'));
  });
  // // - - - - -
  $.gulp.task('copyImages', function() {
    return $.gulp.src($.path.src + 'statics/img/**')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.path.public + 'img/'));
  });
};
