@extends('templates.default') 
    @section('title')
        Edit Profile
    @stop 

    @section('content')
    <h3>Update Your Profile.</h3>
    <div class="row text-center" style="padding-left:20px; padding-right:20px;">
        <form class="form-vertical" role="form" method="post" action="{{ route('post.edit')}}" enctype="multipart/form-data">
            {{-- First Name and Last Name container --}}
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group{{ $errors->has('first_name') ? ' has-error': ''}}">
                        <label for="first_name" class="control-label">First name</label>
                        <input type="text" name="first_name" class="form-control" id="first_name" value="{{ Request::old('first_name')  ?: Auth::user()->first_name }}"> 
                        @if ($errors->has('first_name'))
                            <span class="help-block">{{ $errors->first('first_name') }}</span> 
                        @endif
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group{{ $errors->has('last_name') ? ' has-error': ''}}">
                        <label for="last_name" class="control-label">Last name</label>
                        <input type="text" name="last_name" class="form-control" id="last_name" value="{{ Request::old('last_name')  ?: Auth::user()->last_name }}"> 
                        @if ($errors->has('last_name'))
                            <span class="help-block">{{ $errors->first('last_name') }}</span> 
                        @endif
                    </div>
                </div>
            </div>
            {{-- Password and Location Container --}}
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group{{ $errors->has('password') ? ' has-error': ''}}">
                        <label for="password" class="control-label">Change Password</label>
                        <input type="password" name="password" class="form-control" id="password" value=""> @if ($errors->has('password'))
                        <span class="help-block">{{ $errors->first('password') }}</span> @endif
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error': ''}}">
                        <label for="password" class="control-label">Confirm New Password</label>
                        <input type="password" name="password_confirmation" class="form-control" id="password_confirmation" value=""> 
                        @if ($errors->has('password_confirmation'))
                            <span class="help-block">{{ $errors->first('password_confirmation') }}</span> 
                        @endif
                    </div>
                </div>
                <div class="col-lg-6 location">
                    <div class="form-group{{ $errors->has('location') ? ' has-error': ''}}">
                        <label for="location" class="control-label">Location</label>
                        <input type="text" name="location" class="form-control" id="location" value="{{ Request::old('location')  ?: Auth::user()->location }}"> 
                        @if ($errors->has('location'))
                            <span class="help-block">{{ $errors->first('location') }}</span> 
                        @endif
                    </div>
                </div>
            </div>
            {{-- Image Upload Content --}}
            <img class="img-circle" src="{{ Auth::user()->getAvatarUrl() }}" height="140" width="140">
            <div class="form-group{{ $errors->has('images') ? ' has-error': '' }}">
                <label class="control-label">Upload a profile picture.</label>
                <input id="input-2" type="file" name="images" accept="image/*" class="file-loading"> 
                @if($errors->has('images'))
                    <span class="help-block">{{ $errors->first('images') }}</span> 
                @endif
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-default">Update</button>
            </div>
            <input type="hidden" name="_token" value="{{ Session::token() }}">
        </form>
    </div>
@stop