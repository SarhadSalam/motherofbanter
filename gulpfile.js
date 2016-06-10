/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

var elixir = require('laravel-elixir');
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
    mix.sass(['main.scss'], 'public/assets/css/MotherOfBanter.css');

    //mix.styles([
    //    'ie7.css',
    //], 'public/assets/css/ie7.css');
    var vendor = "vendor/";

    mix.scripts([
        'copyrights.js',
        vendor+'jquery.js',
        vendor+'fileinput.min.js',
        vendor+'bootstrap.js',
        'navbar.js',
        'modal.js',
        'alerts.js',
        'custom.js',
        vendor+'infiniteScrolling.js',
        vendor+'textcomplete.js',
        vendor+'emojione.js',
        vendor+'autoCompleteEmoji.js',
        vendor+'parsley.js',
        vendor+'parsley.remote.js'
    ], 'public/assets/js/MotherOfBanter.js');

    var npmDir = 'node_modules/';
    var jsDir = 'resources/assets/js/';

    mix.copy(npmDir + 'vue/dist/vue.min.js', jsDir + '/vendor');

    mix.copy(jsDir + 'custom.js', 'public/assets/js/MotherOfBanterUserProfile.js');

    mix.scripts([
        vendor+'vue.min.js',
        'userProfile.js'
    ], 'public/assets/js/MotherOfBanterScope.js');

    // mix.browserSync({
    //     proxy: 'motherofbanter.dev:8000'
    // })

});
