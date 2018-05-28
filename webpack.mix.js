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

 mix.js('src/javascript/app.js', 'js/app.js')
    .js('src/javascript/location/fetchBuilding.js', 'js/')
    .js('src/javascript/location/locationHandler.js', 'js/')
    .js('src/javascript/error/questionmark.js', 'js/')
    .js('src/javascript/error/error-submit.js', 'js/')
    .js('src/javascript/location/map.js', 'js/')
    .js('src/javascript/location/hamburgerMenu2.js', 'js/')
    .js('src/javascript/location/choices.js', 'js/')
    .js('src/javascript/report/fetchReport.js', 'js/')
    .js('src/javascript/loading/loading.js', 'js/')
    .js('src/javascript/report/my-reports.js', 'js/')
    .sass('src/sass/app.scss', 'css/app.css');

    mix.options({
      processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
    });
