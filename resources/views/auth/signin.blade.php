@extends('templates.default') 
    @section('title')
         Sign In 
    @stop 

    @section('content')
    <a href="/login/facebook">Login With Facebook</a>
    <a href="/login/twitter">Login With Twitter</a>
    <a href="/login/google">Login With Google</a>

    <h3>Sign In</h3>
    <div class="col-lg-6">
        <form class="form-vertical" role="form" method="post" action="{{ route ('auth.signin')}}">
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <label for="email" class="control-label">Email/ Username</label>
                <input type="text" name="login" class="form-control" id="email" value="{{ Request::old('email') ?: '' }}"> 
                @if ($errors->has('email'))
                    <span class="help-block">{{ $errors->first('email') }}</span> 
                @endif
            </div>
            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <label for="password" class="control-label">Password</label>
                <input type="password" name="password" class="form-control" id="password"> 
                @if ($errors->has('password'))
                    <span class="help-block">{{ $errors->first('password') }}</span> 
                @endif
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember"> Remember me
                </label>
            </div>
            <div class="form-gorup">
                <button type="submit" class="btn btn-default">Sign in</button>
            </div>
            <input type="hidden" name="_token" value="{{ Session::token() }}">
        </form>
    </div>
@stop