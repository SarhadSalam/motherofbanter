@extends('templates.default')
@section('title')
	Videos
@stop
@section('content')
	<form role="form" action="{{ route('image.post')}}" method="post" enctype="multipart/form-data"
		  data-parsley-validate>
		
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						Post a funny video:
					</h3>
				</div>
				<div class="panel-body">
				<textarea
						placeholder="Add a heading, {{ Auth::user()->getFirstNameOrUsername() }}! To use emojis from a Desktop just hit ':'"
						name="video" class="form-control emojiArea" rows="3" id="postVideo" required=""
						data-parsley-required-message="You must add a heading!"
						data-parsley-trigger="change focusout" data-parsley-maxlength="300"></textarea>
				</div>
				<div class="panel-footer">
					<div class="row">
						<div class="col-md-6 pull-left text-left">
							<div class="imageButton">
								<input id="input-vid" type="file" name="images" accept="video/*" class="file-loading"
									   alt="Please select a video to upload."
									   data-parsley-filemimetypes="video/mp4, video/mpeg, video/mov, video/avi"
									   data-parsley-filemimetypes-message="Only MPEG, MP4, AVI & MOV is supported."
									   data-parsley-trigger="change focusout" data-parsley-maxfilesize="5"
									   data-parsley-maxfilesize-message="wuth"
									   required="" data-parsley-required-message="A Video Is Necessary">
								{{--Errors goes in here--}}
							</div>
						</div>
						<div class="col-md-2 pull-right socialButton">
							<button type="submit" class="btn btn-primary" id="postVideoButton" data-toggle="post"
									data-placement="top" title="You Must Add An Video!">Post
							</button>
						</div>
						<div class="col-md-offset-1 pull-right"
							 style="margin-top:8px; color: #959595; margin-right:8px;">
							<span id="videoCounter"></span>
						</div>
					</div>
				</div>
			</div>
			</div>
			<input type="hidden" name="_token" value="{{ Session::token() }}">
	</form>
@endsection