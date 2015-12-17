@extends('templates.default') 
    @section('title')
         Sign In 
    @stop 

    @section('content')
    <form class="form-signin" role="form" method="post" action="{{ route ('auth.signin')}}">
    <h2 class="form-signin-heading">Please Sign In!</h2>
        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
            <label for="email" class="sr-only">Email/ Username</label>
            <input type="text" name="login" class="form-control" id="email" value="{{ Request::old('email') ?: '' }}" placeholder="Email or Username"> 
            @if ($errors->has('email'))
                <span class="help-block">{{ $errors->first('email') }}</span> 
            @endif
        </div>
        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <label for="password" class="sr-only">Password</label>
            <input type="password" name="password" class="form-control" id="password" placeholder="Enter Your Password"> 
            @if ($errors->has('password'))
                <span class="help-block">{{ $errors->first('password') }}</span> 
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
    </div>
@stop