@extends('templates.default') 
    @section('title')
         Sign In 
    @stop

    @section('content')
        <div class="container">
            <form class="form-signin" role="form" method="post" action="{{ route ('auth.signin')}}" data-parsley-validate>
            <h2 class="form-signin-heading">Please Sign In!</h2>
                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <label for="email" class="sr-only">Email/ Username</label>
                    <input type="text" name="login" class="form-control" id="email" value="{{ Request::old('email') ?: '' }}" placeholder="Email or Username" autofocus required="" data-parsley-required-message="Email or Username is required" data-parsley-trigger="change focusout" data-parsley-maxlength="255"> 
                    @if ($errors->has('email'))
                        <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('email') }}</div> 
                    @endif
                </div>
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" class="form-control" id="password" placeholder="Enter Your Password" required="" data-parsley-required-message="Password is required" data-parsley-trigger="change focusout" data-parsley-minlength="6" data-parsley-maxlength="20"> 
                    @if ($errors->has('password'))
                        <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('password') }}</div> 
                    @endif
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember"> Remember me
                    </label>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-block btn-lg btn-primary">Sign in</button>
                </div>
                <input type="hidden" name="_token" value="{{ Session::token() }}">
            </form>
            <div class="vertical-buttons">
                <h4>Or</h4>
                <a href="{{ route('social.redirect', ['provider' => 'facebook']) }}" class="btn btn-lg btn-block facebook">Login With Facebook</a>
                <a href="{{ route('social.redirect', ['provider' => 'twitter']) }}" class="btn btn-lg btn-block twitter">Login With Twitter</a>
                <a href="{{ route('social.redirect', ['provider' => 'google']) }}" class="btn btn-lg btn-block google">Login With Google</a>
                <h4>Or if you want the traditional way</h4>
                <a href="{{route('auth.signup')}}" class="btn btn-lg btn-block btn-primary">Sign Up</a>
            </div>
        </div>
@stop