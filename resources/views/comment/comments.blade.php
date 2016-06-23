{{-- Comment Box --}}
@if (Auth::check())
	<div class="col-lg-8" id="commentBox">
		<form role="form" action="{{ route('image.reply', ['imageId' =>$images->id] )}}" method="post"
			  method="post" enctype="multipart/form-data" data-parsley-validate>
			<div class="panel panel-default">
				<div class="panel-heading">
					<label class="comment" id="comment">Say something funny: </label>
				</div>
				<div class="panel-body{{ $errors->has(" reply-{$images->id}") ? ' has-error': '' }}">
							<textarea id="commentArea"
									  placeholder="Say something funny, {{ Auth::user()->getFirstNameOrUsername() }}!!To use emojis from a Desktop just hit ':'"
									  name="reply-{{ $images->id }}" class="form-control comment-emoji-area" rows="3"
									  required="" data-parsley-required-message="You must add a comment!"
									  data-parsley-trigger="change focusout" data-parsley-maxlength="1000"></textarea>
					@if ($errors->has("reply-{$images->id}"))
						<span class="help-block">{{ $errors->first("reply-{$images->id}") }}</span>
					@endif
				</div>
				<div class="panel-footer">
					<div class="row">
						<div class="col-md-6 pull-left">
							<div class="form-group{{ $errors->has('images') ? ' has-error': '' }} imageButton">
								<input id="input-2" type="file" name="images" accept="image/*"
									   class="file-loading" alt="Please select an image to upload."
									   data-parsley-filemimetypes="image/jpeg, image/png, image/gif"
									   data-parsley-filemimetypes-message="Only JPEG, GIF & PNG is supported."
									   data-parsley-trigger="change focusout" data-parsley-maxfilesize="3"> {{--
                                <label class="control-label text-center">Select Image</label> --}}
								@if($errors->has('images'))
									<span class="help-block">{{ $errors->first('images') }}</span>
								@endif
							</div>
						</div>
						<div class="col-md-2 pull-right socialButton">
							<button type="submit" id="commentPost" class="btn btn-primary"
									alt="Post a comment, {{ Auth::user()->getFirstNameOrUsername() }}">Comment
							</button>
						</div>
						<div class="col-md-offset-1 pull-right"
							 style="margin-top:8px; color: #959595; margin-right:8px;">
							<span id="commentCounter"></span>
						</div>
					</div>
					<input type="hidden" name="_token" value="{{ Session::token() }}">
				</div>
		</form>
	</div>
	<hr>
	</div>
@else
	<div class="col-lg-8">
		<div class="span11 center">
			<h1 class="text-center">Please <a href="{{ route('auth.signin') }}">Log In</a> or <a
						href="{{ route('auth.signup') }}">Sign Up</a> to comment.</h1>
		</div>
	</div>
@endif
@include('comment.user_comments')
{{-- Comment Box --}}
