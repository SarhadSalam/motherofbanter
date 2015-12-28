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

Route::get('/register/activate/{code}', [
           'uses' => '\MotherOfBanter\Http\Controllers\AuthController@activateAccount',
           'middleware' => ['guest'],
           ]);
Route::get('/register/activate/signedup/{identifier}', [
              'uses' => '\MotherOfBanter\Http\Controllers\AuthController@resendSignedUpUserMail',
              'as' => 'auth.activate',
              'middleware' => ['guest'],
           ]);

Route::get('/register/forgot_password', [
           'uses' => '\MotherOfBanter\Http\Controllers\PasswordController@getForgotPassword',
           'as' => 'forgot.password',
           'middleware' => ['guest'],
           ]);
Route::post('/register/forgot_password', [
           'uses' => '\MotherOfBanter\Http\Controllers\PasswordController@postForgotPassword',
           'middleware' => ['guest'],
           ]);
Route::get('/register/forgot_password/proceed/{code}', [
           'uses' => '\MotherOfBanter\Http\Controllers\PasswordController@getResetPasswordCode',
           'as' => 'reset.password',
           'middleware' => ['guest'],
           ]);
Route::post('/register/forgot_password/proceed/{code}', [
           'uses' => '\MotherOfBanter\Http\Controllers\PasswordController@postResetPasswordCode',
           'middleware' => ['guest'],
           ]);

Route::get('/social/redirect/{provider?}', [
           'uses' => '\MotherOfBanter\Http\Controllers\AuthController@getSocialRedirect',
           'middleware' => ['guest'],
           'as' => 'social.redirect',
           ]);
Route::get('/social/handle/{provider?}', [
           'uses' => '\MotherOfBanter\Http\Controllers\AuthController@getSocialHandle',
           'middleware' => ['guest'],
           'as' => 'social.handle',
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

Route::get('/image/{url}', [
            'uses' => '\MotherOfBanter\Http\Controllers\ImageController@getPost',
            'as' => 'get.post',
           ]);

Route::get('/image/{imageId}/like', [
           'uses' => '\MotherOfBanter\Http\Controllers\ImageController@getLike',
           'as' => 'image.like',
           'middleware' => ['auth'],
           ]);

Route::get('/image/{imageId}/dislike', [
           'uses' => '\MotherOfBanter\Http\Controllers\ImageController@getDislike',
           'as' => 'image.dislike',
           'middleware' => ['auth'],
           ]);
