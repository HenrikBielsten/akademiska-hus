let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.disableSuccessNotifications();

 mix.js('src/js/app.js', 'js/app.js')
    .js('src/js/location/fetchBuilding.js', 'js/')
    .js('src/js/location/locationHandler.js', 'js/')
    .js('src/js/error/questionmark.js', 'js/')
    .js('src/js/error/error-submit.js', 'js/')
    .js('src/js/location/map.js', 'js/')
    .js('src/js/report/fetchReport.js', 'js/')
    .js('src/js/loading/loading.js', 'js/')
    .sass('src/sass/app.scss', 'css/app.css');

    mix.combine([
      'src/js/takePictureView/infoArrow.js',
      'src/js/takePictureView/geolocation.js',
      'src/js/takePictureView/addFiles.js',
      'src/js/takePictureView/urgentModal.js',
      'src/js/takePictureView/continue.js',
      'src/js/takePictureView/hamburgerMenu.js'
    ], 'js/app.js');

    mix.options({
      processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
    });
