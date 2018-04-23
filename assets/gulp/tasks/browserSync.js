'use strict';

module.exports = function () {
  $.gulp.task('bs', function () {
    $.bs.init({
      port: 3000,
      server: $.path.public
    });
    $.bs.watch($.path.public + '**/*.*').on('change', $.bs.reload);
  });
};
