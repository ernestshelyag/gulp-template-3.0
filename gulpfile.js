'use strict';

global.$ = {

  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  mqpacker: require('css-mqpacker'),
  autoprefixer: require('autoprefixer'),
  bs: require('browser-sync').create(),

  path: {
    tasks: require('./assets/gulp/config/tasks.js'),
    jsVendors: require('./assets/gulp/config/js.vendors.js'),
    cssVendors: require('./assets/gulp/config/css.vendors.js'),
    src: 'src/',
    sass: 'src/sass/',
    pug: 'src/pug/',
    public: 'public/'
  }

};

$.path.tasks.forEach(function (e) {
  require(e)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'sass',
    'cssVendors',
    'scripts',
    'jsVendors',
    'copyFonts',
    'copyImages'
  ),
  $.gulp.parallel(
    'watch',
    'bs'
  )
));
