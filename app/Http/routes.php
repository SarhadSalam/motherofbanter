<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/**
	*Home
*/

Route::get('/', [
          		'uses' => '\MotherOfBanter\Http\Controllers\HomeController@index', 
          		'as' => 'home',
          ]);

/**
*Authentication
*/

Route::get('/signup', [
           'uses' => '\MotherOfBanter\Http\Controllers\AuthController@getSignup', 
           'as' => 'auth.signup',
           'middleware' => ['guest'],
           ]);

Route::post('/signup', [
           	'uses' => '\MotherOfBanter\Http\Controllers\AuthController@postSignup',
            'middleware' => ['guest'],
           ]);

Route::get('/signin', [
           'uses' => '\MotherOfBanter\Http\Controllers\AuthController@getSignin', 
           'as' => 'auth.signin',
           'middleware' => ['guest'],
           ]);

Route::post('/signin', [
           	'uses' => '\MotherOfBanter\Http\Controllers\AuthController@postSignin',
            'middleware' => ['guest'],
           ]);

Route::get('/signout', [
           	'uses' => '\MotherOfBanter\Http\Controllers\AuthController@getSignout',
           	'as' => 'auth.signout',
            'middleware' => ['auth'],
           ]);

/**
* Social Auth Begins Here
*/

Route::get('/login/{provider?}', [
           'uses' => '\MotherOfBanter\Http\Controllers\AuthController@postSocialSignIn',
           'middleware' => ['guest']
           ]);

/**
*Search
*/

Route::get('/search', [
            'uses' => '\MotherOfBanter\Http\Controllers\SearchController@getResults',
            'as' => 'search.results',
           ]);

/**
* User Profile
*/


Route::get('/user/{username}', [
            'uses' => '\MotherOfBanter\Http\Controllers\ProfileController@getProfile',
            'as' => 'profile.index',
           ]);

Route::get('/profile/edit', [
            'uses' => '\MotherOfBanter\Http\Controllers\ProfileController@getEdit',
            'as' => 'profile.edit',
            'middleware' => ['auth'],
           ]);

Route::post('/profile/edit', [
            'uses' => '\MotherOfBanter\Http\Controllers\ProfileController@postEdit',
            'as' => 'post.edit',
            'middleware' => ['auth'],
           ]);

/**
* Images
*/

Route::post('/image', [
            'uses' => '\MotherOfBanter\Http\Controllers\ImageController@postImage',
            'as' => 'image.post',
            'middleware' => ['auth'],
           ]);

Route::post('/image/{imageId}/reply', [
            'uses' => '\MotherOfBanter\Http\Controllers\ImageController@postReply',
            'as' => 'image.reply',
            'middleware' => ['auth'],
           ]);

Route::get('/{url}', [
            'uses' => '\MotherOfBanter\Http\Controllers\ImageController@getPost',
            'as' => 'get.post',
           ]);