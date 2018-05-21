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

 mix.js('src/js/app.js', 'js/app.js')
    .js('src/js/location/locationHandler.js', 'js/')
    .sass('src/sass/app.scss', 'css/app.css');

    mix.combine([
      'src/js/takePictureView/geolocation.js',
      'src/js/takePictureView/addFiles.js',
      'src/js/takePictureView/urgentModal.js',
      'src/js/takePictureView/continue.js'
    ], 'js/app.js');

mix.disableSuccessNotifications();