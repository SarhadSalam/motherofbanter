@extends('templates.default')
@section('title')
    Reset Password
@stop
@section('content')
<div class="container">
    <form class="form-signin" role="form" method="POST" action="{{ route ('reset.password')}}" data-parsley-validate>
        <h2 class="form-signin-heading">Reset Password:</h2>
        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
            <label for="email" class="sr-only">Email</label>
            <input type="email" name="email" class="form-control" id="email" value="{{ Request::old('email') ?: '' }}" placeholder="Email" autofocus required="" data-parsley-required-message="Email is required" data-parsley-trigger="change focusout" data-parsley-maxlength="255">
            @if ($errors->has('email'))
            <div class="alert alert-danger" role="alert" style="text-align:center;">{{ $errors->first('email') }}</div>
            @endif
        </div>
        <div class="form-group{{ $errors->has('password') ? ' has-error' : ''}}">
            <label for="password" class="sr-only">Choose a password</label>
            <input type="password" name="password" class="form-control" placeholder="Please Choose A New Password" id="password" value="" required="" data-parsley-required-message="Password is required" data-parsley-trigger="change focusout" data-parsley-minlength="6" data-parsley-maxlength="20">
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
        <div class="form-group">
            <button type="submit" class="btn btn-block btn-lg btn-primary">Reset Password</button>
        </div>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
    </form>
    
@stop