const fs = require('fs');
const path = require('path');

module.exports = function() {
  $.gulp.task('jsVendors', function(cb) {
    if ($.path.jsVendors.length === 0) {
      fs.mkdirSync($.path.public);
      fs.mkdirSync(path.join($.path.public, '/js'));

      let file = path.join($.path.public + 'js/', 'vendors.min.js');

      fs.writeFile(file, 'console.error("No js libs, remove manually script(src=\'js/vendors.min.js\') in template.pug")', err => {
        if (err) throw err;
        cb();
      });
    } else {
      return $.gulp
        .src($.path.jsVendors)
        .pipe($.gp.concat('vendors.min.js'))
        .pipe($.gulp.dest($.path.public + 'js/'));
    }
  });
};
