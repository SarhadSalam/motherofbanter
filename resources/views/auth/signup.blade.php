@extends('templates.default')
    @section('title') 
        Sign Up 
    @stop

    @section('content')
    <div class="container">
        <form class="form-signin" role="form" method="post" action="{{route ('auth.signup') }}" data-parsley-validate>
        <h2 class="form-signin-heading">Please Sign Up!</h2>
            <div class="form-group{{ $errors->has('email') ? ' has-error' : ''}}">
                <label for="email" class="sr-only">Your e-mail address</label>
                <input type="text" name="email" class="form-control" placeholder="Please enter your Email address." id="email" value="{{ Request::old('email') ?: '' }}" autofocus required="" data-parsley-required-message="Email or Username is required" data-parsley-trigger="change focusout" data-parsley-type="email" data-parsley-maxlength="255"> 
                @if ($errors->has('email'))
                    <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('email') }}</div> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('username') ? ' has-error' : ''}}">
                <label for="username" class="sr-only">Choose an username</label>
                <input type="text" name="username" class="form-control" placeholder="Please Choose an Username" id="username" value="{{ Request::old('username') ?: '' }}" required="" data-parsley-pattern="^[a-zA-Z0-9_]*$" data-parsley-trigger="change focusout" data-parsley-required-message="An Username is required." data-parsley-minlength="3" data-parsley-maxlength="32" data-parsley-pattern-message="Only Letters, Numbers and Underscores are allowed."> 
                @if ($errors->has('username'))
                 <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('username') }}</div> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('password') ? ' has-error' : ''}}">
                <label for="password" class="sr-only">Choose a password</label>
                <input type="password" name="password" class="form-control" placeholder="Please Choose A Password" id="password" value="" required="" data-parsley-required-message="Password is required" data-parsley-trigger="change focusout" data-parsley-minlength="6" data-parsley-maxlength="20">
                @if ($errors->has('password'))
                   <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('password') }}</div> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : ''}}">
                <label for="password" class="sr-only">Confirm your password</label>
                <input type="password" name="password_confirmation" class="form-control" id="password_confirmation" placeholder="Please Confirm Your Password" required="" data-parsley-required-message="Password Confirmation is required." data-parsley-trigger="change focusout" data-parsley-equalto="#password" data-parsley-equalto-message="Password confirmation does not match."> 
                @if ($errors->has('password_confirmation'))
                   <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('password_confirmation') }}</div> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('g-recaptcha') ? ' has-error' : ''}}" style="margin-top:10px; margin-bottom:10px;" >
                 <div class="g-recaptcha" data-sitekey="{{ env('RE_CAPTCHA_SITEKEY') }}" data-parsley-required-message="The recaptcha is required" required=""></div>
                @if ($errors->has('g-recaptcha-response'))
                    <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('g-recaptcha') }}Recaptcha Is Required</div>
                @endif
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up</button>
            </div>
            <input type="hidden" name="_token" value="{{ Session::token() }}">
        </form>
        <div class="vertical-buttons">
            <h4>Or</h4>
            <a href="{{ route('social.redirect', ['provider' => 'facebook']) }}" class="btn btn-lg btn-block facebook" display="popup">Login With Facebook</a>
            <a href="{{ route('social.redirect', ['provider' => 'twitter']) }}" class="btn btn-lg btn-block twitter">Login With Twitter</a>
            <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="btn btn-lg btn-block google">Login With Google</a>
            <h4>Already Signed Up? Then Login...</h4>
            <a href="{{route('auth.signin')}}" class="btn btn-lg btn-block btn-primary">Sign In</a>
        </div>
    </div>
    <script src='https://www.google.com/recaptcha/api.js'></script>
@stop