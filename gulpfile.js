var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.styles([
        'copyrights.css',
        'bootstrap.css',
        'navbar.css',
        'fileUpload.css',
        'image.css',
        'icons.css',
        'Style.css',
        'forms.css',
        'emojione.css',
    ], 'public/assets/css/MotherOfBanter.css');
    mix.styles([
        'ie7.css',
    ], 'public/assets/css/ie7.css');

    mix.scripts([
        'copyrights.js',
        'jquery.js',
        'fileinput.min.js',
        'bootstrap.js',
        'navbar.js',
        'modal.js',
        'alerts.js',
        'custom.js',
        'infiniteScrolling.js',
        'textcomplete.js',
        'emojione.js',
        'autoCompleteEmoji.js',
        'parsley.js',
    ], 'public/assets/js/MotherOfBanter.js');
});
