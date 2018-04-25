'use strict';

module.exports = function () {
  $.gulp.task('copyFonts', function () {
    return $.gulp.src($.config.src + 'statics/fonts/**')
      .pipe($.gulp.dest($.config.root + 'fonts/'));
  });
  // // - - - - -
  $.gulp.task('copyImages', function() {
    return $.gulp.src($.config.src + 'statics/img/**')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + 'img/'));
  });
};
