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
    //The css files
    mix.sass(['main.scss'], 'public/assets/css/MotherOfBanter.css');

    // mix.styles([
    //     'ie7.css'
    // ], 'public/assets/css/ie7.css');

    //The javascript files
    var vendor = 'vendor/';
    var npmDir = 'node_modules/';
    var jsDir = 'resources/assets/js/';
    var global = 'global/';
    var scope = 'scope/';
    var directories = {
        'node_modules/jquery/dist/jquery.js': jsDir + 'vendor/jquery',
        'node_modules/parsleyjs/dist/parsley.js': jsDir + 'vendor/parsley',
        'node_modules/emojione/lib/js/emojione.js': jsDir + 'vendor/emoji',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js': jsDir + 'vendor/bootstrap',
        'node_modules/vue/dist/vue.js': jsDir + '/vendor/vue',
        'node_modules/jscroll/jquery.jscroll.js': jsDir + 'vendor/jscroll'
}

    for (directory in directories) {
        mix.copy(directory, directories[directory]);
    }

    mix.scripts([
        global + 'copyrights.js',
        vendor + 'jquery/jquery.js',
        vendor + 'fileinput.min.js',
        vendor + 'bootstrap/bootstrap.js',
        global + 'navbar.js',
        global + 'modal.js',
        global + 'alerts.js',
        global + 'custom.js',
        vendor + 'jscroll/jquery.jscroll.js',
        vendor + 'emoji/textcomplete.js',
        vendor + 'emoji/emojione.js',
        vendor + 'emoji/autoCompleteEmoji.js',
        vendor + 'parsley/parsley.js',
    ], 'public/assets/js/MotherOfBanter.js');

    mix.scripts([
        vendor + 'vue/vue.js',
        scope + 'userProfile.js'
    ], 'public/assets/js/MotherOfBanterScope.js');

    var publicDir = "public/assets/";
    //Handles versioning
    mix.version([
        publicDir + 'css/MotherOfBanter.css',
        publicDir + 'css/ie7.css',
        publicDir + 'js/MotherOfBanter.js',
        publicDir + 'js/MotherOfBanterScope.js'
    ]);

    // mix.browserSync({
    //     proxy: 'motherofbanter.dev:8000'
    // });
});
