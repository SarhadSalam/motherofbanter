@extends('templates.default')

@section('title')
	Forgot Password
@stop

@section('content')
	<div class="container">
		
		<form class="form-authentication"
		      role="form"
		      method="POST"
		      action="{{ route ('forgot.password')}}"
		      data-parsley-validate>
			
			<h2 class="form-authentication__heading">Reset Password:</h2>
			
			<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
				
				<label for="email" class="sr-only">Email</label>
				<input type="email"
				       name="email"
				       class="form-authentication__control"
				       id="email"
				       value="{{ Request::old('email') ?: '' }}"
				       placeholder="Email"
				       autofocus
				       required=""
				       data-parsley-required-message="Email is required"
				       data-parsley-trigger="change focusout" data-parsley-maxlength="255">
				
				@if ($errors->has('email'))
					
					<div class="form-authentication__alert alert-danger"
					     role="alert"
					     style="text-align:center;">{{ $errors->first('email') }}
					</div>
				
				@endif
			
			</div>
			
			<div class="form-group{{ $errors->has('g-recaptcha') ? ' has-error' : ''}}"
			     style="margin-top:10px;
			            margin-bottom:10px;">
				
				<div class="g-recaptcha"
				     data-sitekey="{{ env('RE_CAPTCHA_SITEKEY') }}"
				     data-parsley-required-message="The recaptcha is required"
				     required="">
				</div>
				
				@if ($errors->has('g-recaptcha-response'))
					
					<div class="form-authentication__alert alert-danger"
					     role="alert"
					     style="text-align:center;">
						{{ $errors->first('g-recaptcha') }} Recaptcha Is Required
					</div>
					
				@endif
				
			</div>
			
			<div class="form-authentication__group">
				
				<button type="submit"
				        class="btn btn-block btn-lg btn-primary">Proceed</button>
				
			</div>
			
			<h4>Or In case you wanna try signing again: </h4>
			<a href="{{route('auth.signin')}}" class="btn btn-lg btn-block btn-primary">Sign In</a>
			<h4>Or maybe you never signed up?</h4>
			<a href="{{route('auth.signup')}}" class="btn btn-lg btn-block btn-primary">Sign Up</a>
			<input type="hidden"
			       name="_token"
			       value="{{ Session::token() }}">
			
		</form>
		
		@extends('auth.templates.partials.social_login')
		
	</div>
	
	<script src='https://www.google.com/recaptcha/api.js'></script>
@stop