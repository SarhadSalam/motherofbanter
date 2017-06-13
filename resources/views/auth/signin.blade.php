@extends('templates.default')

@section('title')
	Sign In
@stop

@section('content')
	<div class="container">
		
		<form class="form-authentication"
		      role="form"
		      method="post"
		      action="{{ route ('auth.signin')}}"
		      data-parsley-validate>
			
			<h2 class="form-authentication__heading">Please Sign In!</h2>
			
			<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
				
				<label for="email"
				       class="sr-only">Email/ Username</label>
				
				<input type="text"
				       name="login"
				       class="form-authentication__control"
				       id="email"
				       value="{{ Request::old('email') ?: '' }}"
				       placeholder="Email or Username" autofocus required=""
				       data-parsley-required-message="Email or Username is required"
				       data-parsley-trigger="change focusout"
				       data-parsley-maxlength="255">
				
				@if ($errors->has('email'))
					
					<div class="form-authentication__alert alert-danger"
					     role="alert"
					     style="text-align:center;">{{ $errors->first('email') }}
					</div>
					
				@endif
				
			</div>
			
			<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
				
				<label for="password"
				       class="sr-only">Password</label>
				
				<input type="password"
				       name="password"
				       class="form-authentication__control"
				       id="password"
				       placeholder="Enter Your Password"
				       required=""
				       data-parsley-required-message="Password is required"
				       data-parsley-trigger="change focusout"
				       data-parsley-minlength="6"
				       data-parsley-maxlength="20">
				
				@if ($errors->has('password'))
					
					<div class="form-authentication__alert alert-danger"
					     role="alert"
					     style="text-align:center;">{{ $errors->first('password') }}
					</div>
					
				@endif
				
			</div>
			
			<div class="form-authentication__checkbox">
				
				<label>
					<input type="checkbox"
					       name="remember">Remember me
				</label>
				
			</div>
			
			<div class="form-authentication__group">
				
				<button type="submit"
				        class="btn btn-block btn-lg btn-primary">Sign in</button>
				
			</div>
			
			<div class="form-authentication__group text-center form-authentication__forget-password">
				
				<a href="/register/forgot_password">Forgot your
					password?</a>
				
				<div class="social-button">
					
					<h4>You can just use </h4>
					<a href="{{ route('social.redirect', ['provider' => 'facebook']) }}"
					   class="btn btn-lg btn-block form-authentication__button form-authentication--facebook">Login With Facebook</a>
					<a href="{{ route('social.redirect', ['provider' => 'google']) }}"
					   class="btn btn-lg btn-block form-authentication__button form-authentication--google">Login With Google</a>
					
					<h4>Or</h4>
					{{--<a href="{{route('auth.signin')}}" class="btn btn-lg btn-block btn-primary">Sign In</a>--}}
					{{--<h4>Or maybe you never signed up?</h4>--}}
					{{--<a href="{{route('auth.signup')}}" class="btn btn-lg btn-block btn-primary">Sign Up</a>--}}
				
				</div>
			</div>
			
			<input type="hidden"
			       name="_token"
			       value="{{ Session::token() }}">
		</form>
		
		
	</div>
@stop