@extends('templates.default')
@section('title')
	Edit Profile
@stop
@section('content')
	<div class="container" style="margin:0;padding:0;width:100%;">
		<form class="form-vertical" role="form" method="post" action="{{ route('post.edit')}}"
			  enctype="multipart/form-data" data-parsley-validate>
			{{-- Image Upload Content --}}
			<div class="userblock text-center">
				<h3>Update Your Profile</h3>
				<img class="img-circle" src="{{ Auth::user()->getAvatarUrl() }}" height="140" width="140">
				<div class="form-group{{ $errors->has('images') ? ' has-error': '' }}">
					<label class="control-label">Upload a profile picture</label>
					<input id="input-3" type="file" name="images" accept="image/*" class="file-loading"
						   data-parsley-filemimetypes="image/jpeg, image/png, image/gif"
						   data-parsley-filemimetypes-message="Only JPEG, GIF & PNG is supported."
						   data-parsley-trigger="change focusout">
					@if($errors->has('images'))
						<div class="form-authentication__alert alert-danger" role="alert"
						     style="text-align:center;">{{ $errors->first('images') }}</div>
					@endif
				</div>
			</div>
			{{-- First Name and Last Name container --}}
			<div class="form-authentication__signup">
			@if(Auth::user()->social()->exists())
				@if(Auth::user()->social()->first()->username_change == 0)
					<div class="form-group{{ $errors->has('username') ? ' has-error' : ''}}">
						<label for="username" class="sr-only">Choose an username</label>
						<input type="text" name="username" class="form-authentication__control" value="{{ Request::old('username')}}"
						       placeholder="Please Choose an Username" id="username"
						       data-parsley-pattern="^[a-zA-Z0-9_]*$" data-parsley-trigger="change focusout"
						       data-parsley-minlength="3" data-parsley-maxlength="32"
						       data-parsley-pattern-message="Only Letters, Numbers and Underscores are allowed.">
						@if ($errors->has('username'))
							<div class="form-authentication__alert alert-danger" role="alert"
							     style="text-align:center;">{{ $errors->first('username') }}</div>
						@endif
					</div>
				@endif
				@endif
				<div class="form-group{{ $errors->has('first_name') ? ' has-error': ''}}">
					<label for="first_name" class="sr-only">First Display name</label>
					<input type="text" name="first_name" class="form-authentication__control" id="first_name"
					       value="{{ Request::old('first_name')  ?: Auth::user()->first_name }}"
					       placeholder="Enter Your First Display Name" data-parsley-pattern="^[a-zA-Z0-9_]*$"
					       data-parsley-trigger="change focusout" data-parsley-minlength="3" data-parsley-maxlength="32"
					       data-parsley-pattern-message="Display name can only containt Letters, Numbers and Underscores">
					@if ($errors->has('first_name'))
						<div class="form-authentication__alert alert-danger" role="alert"
						     style="text-align:center;">{{ $errors->first('first_name') }}</div>
					@endif
				</div>
				<div class="form-group{{ $errors->has('last_name') ? ' has-error': ''}}">
					<label for="last_name" class="sr-only">Last Display name</label>
					<input type="text" name="last_name" class="form-authentication__control" id="last_name"
					       value="{{ Request::old('last_name')  ?: Auth::user()->last_name }}"
					       placeholder="Enter Your Last Display Name" data-parsley-pattern="^[a-zA-Z0-9_]*$"
					       data-parsley-trigger="change focusout" data-parsley-minlength="3" data-parsley-maxlength="32"
					       data-parsley-pattern-message="Display name can only containt Letters, Numbers and Underscores">
					@if ($errors->has('last_name'))
						<div class="form-authentication__alert alert-danger" role="alert"
						     style="text-align:center;">{{ $errors->first('last_name') }}</div>
					@endif
				</div>
				{{-- Password and Location Container --}}
				<div class="form-group{{ $errors->has('password') ? ' has-error': ''}}">
					<label for="password" class="sr-only">Change Password</label>
					<input type="password" name="password" class="form-authentication__control" id="password" value=""
					       placeholder="Enter New Password" data-parsley-trigger="change focusout"
					       data-parsley-minlength="6" data-parsley-maxlength="20">
					@if ($errors->has('password'))
						<div class="form-authentication__alert alert-danger" role="alert"
						     style="text-align:center;">{{ $errors->first('password') }}</div>
					@endif
				</div>
				<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error': ''}}">
					<label for="password" class="sr-only">Confirm New Password</label>
					<input type="password" name="password_confirmation" class="form-authentication__control" id="password_confirmation"
					       value="" placeholder="Enter new password confirmation."
					       data-parsley-trigger="change focusout" data-parsley-equalto="#password"
					       data-parsley-equalto-message="Password confirmation does not match.">
					@if ($errors->has('password_confirmation'))
						<div class="form-authentication__alert alert-danger" role="alert"
						     style="text-align:center;">{{ $errors->first('password_confirmation') }}</div>
					@endif
				</div>
				<div class="form-group{{ $errors->has('location') ? ' has-error': ''}}">
					<label for="location" class="sr-only">Location</label>
					<input type="text" name="location" class="form-authentication__control" id="location"
					       value="{{ Request::old('location')  ?: Auth::user()->location }}"
					       placeholder="If I like you, I might come to visit you."
					       data-parsley-pattern="/^[A-Za-z0-9,\. ]{3,50}$/" data-parsley-trigger="change focusout"
					       data-parsley-pattern-message="Location can only contain Letters, Numbers and Commas.">
					@if ($errors->has('location'))
						<div class="form-authentication__alert alert-danger" role="alert"
						     style="text-align:center;">{{ $errors->first('location') }}</div>
					@endif
				</div>
				<div class="form-authentication__group" style="margin-top:20px;">
					<button type="submit" class="btn btn-block btn-lg btn-primary">Update Profile</button>
				</div>
				<input type="hidden" name="_token" value="{{ Session::token() }}">
			</div>
		</form>
		<div class="form-authentication__signup form-authentication__signup--disabled text-center" style="margin-top:25px;">
			<h4><u>Permanent Details:</u></h4>
			<div class="form-authentication__group">
				<label class="disabled-text">Username</label>
				<input class="form-authentication__control text-center" value="{{ Auth::user()->username }}" disabled>
			</div>
			<div class="form-authentication__group">
				<label class="disabled">Email</label>
				<input class="form-authentication__control text-center" value="{{ Auth::user()->email }}" id="username" disabled>
			</div>
		</div>
	</div>
@stop