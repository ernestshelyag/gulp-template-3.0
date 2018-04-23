'use strict';

module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src([
      $.path.src + '**/*.js',
      $.path.src + '**/**/*.js'
    ])
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.path.public + 'js/'));
  });
};
