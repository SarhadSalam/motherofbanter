@extends('templates.default')
    @section('title') 
        Sign Up 
    @stop

    @section('content')
        <form class="form-signin" role="form" method="post" action="{{route ('auth.signup') }}">
        <h2 class="form-signin-heading">Please Sign In!</h2>
            <div class="form-group{{ $errors->has('email') ? ' has-error' : ''}}">
                <label for="email" class="sr-only">Your e-mail address</label>
                <input type="text" name="email" class="form-control" placeholder="Please enter your Email address." id="email" value="{{ Request::old('email') ?: '' }}"> 
                @if ($errors->has('email'))
                    <span class="help-block">{{ $errors->first('email') }}</span> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('username') ? ' has-error' : ''}}">
                <label for="username" class="sr-only">Choose a username</label>
                <input type="text" name="username" class="form-control" placeholder="Please Choose an Username" id="username" value="{{ Request::old('username') ?: '' }}"> 
                @if ($errors->has('username'))
                 <span class="help-block">{{ $errors->first('username') }}</span> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('password') ? ' has-error' : ''}}">
                <label for="password" class="sr-only">Choose a password</label>
                <input type="password" name="password" class="form-control" placeholder="Please Choose A Password" id="password" value="">
                @if ($errors->has('password'))
                    <span class="help-block">{{ $errors->first('password') }}</span> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : ''}}">
                <label for="password" class="sr-only">Confirm your password</label>
                <input type="password" name="password_confirmation" class="form-control" id="password_confirmation" placeholder="Please Confirm Your Password"> 
                @if ($errors->has('password_confirmation'))
                    <span class="help-block">{{ $errors->first('password_confirmation') }}</span> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('g-recaptcha-response') ? ' has-error' : ''}}" style="margin-top:10px; margin-bottom:10px;">
                {!! app('captcha')->display(); !!}
                @if ($errors->has('g-recaptcha-response'))
                    <span class="help-block">{{ $errors->first('g-recaptcha-response') }}</span> 
                @endif
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up</button>
            </div>
            <input type="hidden" name="_token" value="{{ Session::token() }}">
        </form>
    <div class="vertical-buttons">
        <h4>Or</h4>
        <a href="{{ route('social.redirect', ['provider' => 'facebook']) }}" class="btn btn-lg btn-block facebook">Login With Facebook</a>
        <a href="{{ route('social.redirect', ['provider' => 'twitter']) }}" class="btn btn-lg btn-block twitter">Login With Twitter</a>
        <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="btn btn-lg btn-block google">Login With Google</a>
    </div>
@stop