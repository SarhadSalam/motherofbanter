@extends('templates.default')

@section('title')
	Sign Up
@stop

@section('content')
	
	<div class="container">
		
		<form class="form-authentication"
		      role="form"
		      method="post"
		      action="{{route ('auth.signup') }}"
		      data-parsley-validate>
			<h2 class="form-authentication__heading">Please Sign Up!</h2>
			<div class="form-group{{ $errors->has('email') ? ' has-error' : ''}}">
				<label for="email"
				       class="sr-only">Your e-mail address</label>
				<input type="text"
				       name="email"
				       class="form-authentication__control"
				       placeholder="Please enter your Email address."
				       id="email"
				       value="{{ Request::old('email') ?: '' }}"
				       autofocus
				       required=""
				       data-parsley-required-message="Email is required"
				       data-parsley-trigger="change focusout"
				       data-parsley-type="email"
				       data-parsley-maxlength="255">
				
				@if ($errors->has('email'))
					
					<div class="form-authentication__alert alert-danger" role="alert"
					     style="text-align:center;">{{ $errors->first('email') }}
					</div>
					
				@endif
				
			</div>
			
			<div class="form-group{{ $errors->has('username') ? ' has-error' : ''}}">
				<label for="username"
				       class="sr-only">Choose an username</label>
				<input type="text"
				       name="username"
				       class="form-authentication__control"
				       placeholder="Please Choose an Username"
				       id="username"
				       value="{{ Request::old('username') ?: '' }}"
				       required=""
				       data-parsley-pattern="^[a-zA-Z0-9_]*$"
				       data-parsley-trigger="change focusout"
					   data-parsley-required-message="An Username is required."
					   data-parsley-minlength="3"
					   data-parsley-maxlength="32"
					   data-parsley-pattern-message="Only Letters, Numbers and Underscores are allowed."
					   data-parsley-username='username'>
				
				@if ($errors->has('username'))
					
					<div class="form-authentication__alert alert-danger"
					     role="alert"
						 style="text-align:center;">{{ $errors->first('username') }}
					</div>
					
				@endif
				
			</div>
			
			<div class="form-group{{ $errors->has('password') ? ' has-error' : ''}}">
				
				<label for="password"
				       class="sr-only">Choose a password</label>
				<input type="password"
				       name="password"
				       class="form-authentication__control"
				       placeholder="Please Choose A Password"
				       id="password"
				       value=""
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
			
			<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : ''}}">
				
				<label for="password"
				       class="sr-only">Confirm your password</label>
				<input type="password"
				       name="password_confirmation"
				       class="form-authentication__control"
				       id="password_confirmation"
					   placeholder="Please Confirm Your Password" required=""
					   data-parsley-required-message="Password Confirmation is required."
					   data-parsley-trigger="change focusout" data-parsley-equalto="#password"
					   data-parsley-equalto-message="Password confirmation does not match.">
				
				@if ($errors->has('password_confirmation'))
					
					<div class="form-authentication__alert alert-danger"
					     role="alert"
						 style="text-align:center;">{{ $errors->first('password_confirmation') }}
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
						 style="text-align:center;">{{ $errors->first('g-recaptcha') }}Recaptcha Is Required
					</div>
				@endif
				
			</div>
			
			<div class="form-authentication__group">
				
				<button type="submit"
				        class="btn btn-block btn-lg btn-primary addMe">Sign up</button>
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

@push('javascript')
<script src='https://www.google.com/recaptcha/api.js'></script>
<script type="text/javascript">
	$(document).ready(function () {
		window.Parsley.addValidator('username', function (value, requirement) {
			var response = false;

			$.ajax({
				url: '{{route('unique.username')}}',
				data: {username: value},
				dataType: 'json',
				type: 'get',
				async: false,
				cache: false,
				success: function (data) {
					response = true;
				},
				error: function (data) {
					response = false;
				}
			});

			return response;
		}, 32)
				.addMessage('en', 'username', 'Username is already in use. Please use another!.');
	});
</script>
@endpush
