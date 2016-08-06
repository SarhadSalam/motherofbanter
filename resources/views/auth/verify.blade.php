@extends('templates.default')

@section('title')
	Verify
@stop

@section('content')
	
	<div class="container">
		
		<div class="form-authentication__alert alert-danger">
			
			<strong>Activate Your Account</strong>, it's not possible to log in without verifying your account. Please
			check your email for a verification email.
			
		</div>
		
		<a href="{{ route('auth.activate', ['identifier'=>$identifier]) }}"><h4>If you haven't received one within 1
				minute, CLICK ME!</h4></a>
		@extends('auth.templates.partials.social_login)
		
	</div>
	
@stop