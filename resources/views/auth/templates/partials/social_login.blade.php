<div class="social-button">
	
	<h4>You can just use this-</h4>
	<a href="{{ route('social.redirect', ['provider' => 'facebook']) }}"
	   class="btn btn-lg btn-block form-authentication__button form-authentication--facebook">Login With Facebook</a>
	{{-- <a href="{{ route('social.redirect', ['provider' => 'twitter']) }}"
		class="btn btn-lg btn-block form-authentication__button twitter">Login With Twitter</a> --}}
	<a href="{{ route('social.redirect', ['provider' => 'google']) }}"
	   class="btn btn-lg btn-block form-authentication__button form-authentication--google">Login With Google</a>
	
	<h4>Or if you remembered the password-</h4>
	<a href="{{route('auth.signin')}}"
	   class="btn btn-lg btn-block btn-primary">Sign In</a>
	<h4>Or maybe you never signed up?</h4>
	<a href="{{route('auth.signup')}}"
	   class="btn btn-lg btn-block btn-primary">Sign Up</a>

</div>