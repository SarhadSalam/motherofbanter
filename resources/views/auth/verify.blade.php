@extends('templates.default') 
    @section('title')
         Verify 
    @stop

    @section('content')
    <div class="container">
        <div class="alert alert-danger">
          <strong>Activate Your Account</strong>, it's not possible to log in without verifying your account. Please check your email for a verification email.
        </div>
        <div class="vertical-buttons">
            <h4>You can still use:</h4>
            <a href="{{ route('social.redirect', ['provider' => 'facebook']) }}" class="btn btn-lg btn-block facebook">Login With Facebook</a>
            <a href="{{ route('social.redirect', ['provider' => 'twitter']) }}" class="btn btn-lg btn-block twitter">Login With Twitter</a>
            <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="btn btn-lg btn-block google">Login With Google</a>
        </div>
    </div>
@stop