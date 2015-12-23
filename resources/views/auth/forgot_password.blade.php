@extends('templates.default')
@section('title')
    Forgot Password
@stop
@section('content')
<div class="container">
    <form class="form-signin" role="form" method="POST" action="{{ route ('forgot.password')}}" data-parsley-validate>
        <h2 class="form-signin-heading">Reset Password:</h2>
        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
            <label for="email" class="sr-only">Email</label>
            <input type="email" name="email" class="form-control" id="email" value="{{ Request::old('email') ?: '' }}" placeholder="Email" autofocus required="" data-parsley-required-message="Email is required" data-parsley-trigger="change focusout" data-parsley-maxlength="255">
            @if ($errors->has('email'))
            <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('email') }}</div>
            @endif
        </div>
        {{-- <div class="form-group{{ $errors->has('g-recaptcha') ? ' has-error' : ''}}" style="margin-top:10px; margin-bottom:10px;" >
            <div class="g-recaptcha" data-sitekey="{{ env('RE_CAPTCHA_SITEKEY') }}" data-parsley-required-message="The recaptcha is required" required=""></div>
            @if ($errors->has('g-recaptcha-response'))
            <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('g-recaptcha') }}Recaptcha Is Required</div>
            @endif
        </div>
 --}}        <div class="form-group">
            <button type="submit" class="btn btn-block btn-lg btn-primary">Proceed</button>
        </div>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
    </form>
    <div class="vertical-buttons">
        <h4>You can just use this-</h4>
        <a href="{{ route('social.redirect', ['provider' => 'facebook']) }}" class="btn btn-lg btn-block facebook">Login With Facebook</a>
        {{-- <a href="{{ route('social.redirect', ['provider' => 'twitter']) }}" class="btn btn-lg btn-block twitter">Login With Twitter</a> --}}
        <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="btn btn-lg btn-block google">Login With Google</a>
        <h4>Or if you remembered the password-</h4>
        <a href="{{route('auth.signin')}}" class="btn btn-lg btn-block btn-primary">Sign In</a>
        <h4>Or maybe you never signed up?</h4>
        <a href="{{route('auth.signup')}}" class="btn btn-lg btn-block btn-primary">Sign Up</a>
    </div>
</div>
<script src='https://www.google.com/recaptcha/api.js'></script>
@stop