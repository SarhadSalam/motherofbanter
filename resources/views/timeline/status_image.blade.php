@extends('templates.default')
@section('title')
	{{$images->body}}
@stop
@section('content')
	<div class="container">
		{{-- User Posted Images --}}
		<div class="col-lg-8">
			<div class="media">
				<div class="media-body">
					<div class="page-header">
						<h4 class="convert-emoji"><a
									href="{{ route('get.post', ['url' => $images-> url]) }}"> {{$images->body}} </a>
							<small class='pull-right'>By, <a
										href="{{ route('profile.index', ['username' => $images -> user->username]) }}">{{$images->user->getNameOrUsername()}}</a>
							</small>
						</h4>
					</div>
					@if ($images->largeImage_path === null)
						<div class="hovereffect">
							<img src="{{URL::asset($images->image_path)}}" class="img-responsive center-block">
							<div class="overlay">
								<p class="set1">
									<a href="#">
										<i class="icon icon-twitter"></i>
									</a>
									<a href="#">
										<i class="icon icon-facebook-square"></i>
									</a>
								</p>
								<hr>
								<hr>
								<p class="set2">
									<a href="#">
										<i class="icon icon-instagram"></i>
									</a>
									<a href="#">
										<i class="icon icon-google-plus"></i>
									</a>
								</p>
							</div>
						</div>
					@else
						<img class="img-responsive center-block" src="{{URL::asset($images->largeImage_path)}}">
					@endif
					@include('images.templates.forms')
				</div>
			</div>
		</div>
		{{-- User posted Images Ends --}}
		{{-- Ad Banner --}}
		<div class="col-lg-8">
			<div class="span 8 adBanner">I am so ugly because advertisements are ugly but gains money so :\</div>
			<hr>
		</div>
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
	{{-- Comment Box --}}
	{{-- User Comments --}}
	<div class="infinite-loading-comments">
		<div class="col-lg-8">
			@foreach($images->paginatingReplies() as $reply)
				<div class="media">
					<a class="pull-left" href="{{ route('profile.index', ['username' => $reply -> user->username]) }}">
						<img class="media-object" src="{{ $reply->user->getAvatarUrl() }}" width="40px" height="40px"
							 style="margin-top:8px;">
					</a>
					<div class="media-body">
						<div class="media-body">
							<h5 class="media-heading"><a
										href="{{ route('profile.index', ['username' => $reply -> user->username]) }}">{{$reply->user->getNameOrUsername()}}</a>
							</h5>
							<p class="convert-emoji">{{$reply->body}}</p>
							@if($reply->image_path)
								<img class="img-responsive commentImages" alt=""
									 src="{{URL::asset($reply->image_path)}}" style="padding-bottom:10px;">
							@endif
							@if(Auth::check())
								<ul class="list-inline comments">
									@if(Auth::user()->hasLikedAlready($reply->id))
										<li>
											<form class="form-vote form_like_comments{{$reply->id}}"
												  action="{{ route('image.like', ['imageId' => $reply->id]) }}"
												  method="get"
												  role="form">
												<button type="submit" class="like_btn"><i
															class="unused-icon icon icon-thumbs-o-up"></i></button>
											</form>
										</li>
									@else
										<li>
											<form class="form-vote form_like_comments{{$reply->id}}"
												  action="{{ route('image.like', ['imageId' => $reply->id]) }}"
												  method="get"
												  role="form">
												<button type="submit" class="like_btn"><i
															class="icon icon-thumbs-o-up"></i></button>
											</form>
										</li>
									@endif
									@if(Auth::user()->hasDislikedAlready($reply->id))
										<li>
											<form class="form-vote form_dislike_comments{{$reply->id}}"
												  action="{{ route('image.dislike', ['imageId' => $reply->id]) }}"
												  method="get"
												  role="form">
												<button type="submit" class="dislike_btn"><i
															class="unused-icon icon icon-thumbs-o-down"></i></button>
											</form>
										</li>
									@else
										<li>
											<form class="form-vote form_dislike_comments{{$reply->id}}"
												  action="{{ route('image.dislike', ['imageId' => $reply->id]) }}"
												  method="get" role="form">
												<button type="submit" class="dislike_btn"><i
															class="icon icon-thumbs-o-down"></i></button>
											</form>
										</li>
									@endif
										<div class="btn-group dropup pull-right">
											<button class="dropdown-caret" data-toggle="dropdown"
													aria-haspopup="true" aria-expanded="false">
												<span class="caret"></span>
											</button>
											<ul class="dropdown-menus">
												@if(Auth::user()->id == $reply->user_id)
													<li>
														<form action="{{route('delete.image.comment', ['$commentId' => $reply->id, 'imageURL' => $images-> url])}}" method="post" role="form">
															<button class="btn-link" type="submit">Delete</button>
															<input type="hidden" name="_token"
																   value="{{ Session::token() }}">
														</form>
													</li>
												@endif
												<li><a href="#">Report</a></li>
											</ul>
										</div>
									<li class="pull-right">{{ $reply->created_at->diffForHumans() }}</li>
									<li class="pull-right"><span
												class="dislike_comment_count{{$reply->id}}">{{$reply->dislikes->count()}}</span> {{str_plural('dislike', $reply->dislikes->count())}}
									<li class="pull-right"><span
												class="like_comment_count{{$reply->id}}">{{$reply->likes->count()}}</span> {{str_plural('like', $reply->likes->count())}}
									</li>
								</ul>
							@else
								<ul class="list-inline comments">
									<li>
										<a href="{{route('auth.signin')}}"><i
													class="icon icon-thumbs-o-up"></i></a>
									</li>
									<li><a href="{{route('auth.signin')}}"><i class="icon icon-thumbs-o-down"></i></a>
									</li>
									<li class="pull-right"><a
												href="{{route('auth.signin')}}">{{$reply->likes->count()}}  {{str_plural('like', $reply->likes->count())}}</a>
									</li>
									<li class="pull-right"><a
												href="{{route('auth.signin')}}">{{ $reply->created_at->diffForHumans() }}</a>
									</li>
								</ul>
							@endif
						</div>
					</div>
				</div>
				<hr class="specialHr">
				{{--Ajax request for the comments like button--}}
				<script>
					$(document).ready(function () {
						$('.form_like_comments{{$reply->id}}').on('submit', function (event) {
							event.preventDefault();

							$.ajax({
								type: "get",
								url: '{{ route('image.like', ['imageId' => $reply->id]) }}',
								success: function () {
									if ($('.form_like_comments{{$reply->id}} .icon-thumbs-o-up').hasClass('unused-icon')) {
										$('.form_like_comments{{$reply->id}} .icon-thumbs-o-up').removeClass('unused-icon');
										var like_counter = $(".like_comment_count{{$reply->id}}").html() * 1 + 1;
										$('.like_comment_count{{$reply->id}}').text(like_counter);
									} else {
										$('.form_like_comments{{$reply->id}} .icon-thumbs-o-up').addClass('unused-icon');
										var unlike_counter = $(".like_comment_count{{$reply->id}}").html() * 1 - 1;
										$('.like_comment_count{{$reply->id}}').text(unlike_counter);
									}
									if (!$('.form_dislike_comments{{$reply->id}} .icon-thumbs-o-down').hasClass('unused-icon')) {
										$('.form_dislike_comments{{$reply->id}} .icon-thumbs-o-down').addClass('unused-icon');
										var dislike_counter = $(".dislike_comment_count{{$reply->id}}").html() * 1 - 1;
										$('.dislike_comment_count{{$reply->id}}').text(dislike_counter);
									}
								}
							});
						});
					});
				</script>
				<script>
					$(document).ready(function () {
						$('.form_dislike_comments{{$reply->id}}').on('submit', function (event) {
							event.preventDefault();

							$.ajax({
								type: "get",
								url: '{{ route('image.dislike', ['imageId' => $reply->id]) }}',
								success: function () {
									if ($('.form_dislike_comments{{$reply->id}} .icon-thumbs-o-down').hasClass('unused-icon')) {
										$('.form_dislike_comments{{$reply->id}} .icon-thumbs-o-down').removeClass('unused-icon');
										var dislike_counter = $(".dislike_comment_count{{$reply->id}}").html() * 1 + 1;
										$('.dislike_comment_count{{$reply->id}}').text(dislike_counter);
									} else {
										$('.form_dislike_comments{{$reply->id}} .icon-thumbs-o-down').addClass('unused-icon');
										var undislike_counter = $(".dislike_comment_count{{$reply->id}}").html() * 1 - 1;
										$('.dislike_comment_count{{$reply->id}}').text(undislike_counter);
									}
									if (!$('.form_like_comments{{$reply->id}} .icon-thumbs-o-up').hasClass('unused-icon')) {
										$('.form_like_comments{{$reply->id}} .icon-thumbs-o-up').addClass('unused-icon');
										var unlike_counter = $(".like_comment_count{{$reply->id}}").html() * 1 - 1;
										$('.like_comment_count{{$reply->id}}').text(unlike_counter);
									}
								}
							});
						});
					});
				</script>
			@endforeach
			<div class="hidden-paginator">
				{!! $images->paginatingReplies()->render() !!}
			</div>
		</div>
	</div>
	</div>
@stop

@section('partialScripts')
	<script>
		$(document).ready(function () {
			var left = 1000
			$('#commentCounter').text(left);
			$('#commentArea').keyup(function () {
				left = 1000 - $(this).val().length;
				if (left < 0) {
					$('#commentCounter').addClass("overlimit");
					$('#commentArea').addClass("overlimitText");
					$('#commentPost').attr("disabled", true);
				} else {
					$('#commentCounter').removeClass("overlimit");
					$('#commentArea').removeClass("overlimitText");
					$('#commentPost').attr("disabled", false);
				}
				$('#commentCounter').text(left);
			});
		});
	</script>
	<script type="text/javascript">
		$(function () {
			$('.infinite-loading-comments').jscroll({
				autoTrigger: true,
				nextSelector: '.pagination li.active + li a',
				contentSelector: 'div.infinite-loading-comments',
				loadingHtml: '<div class="col-lg-8"><img class="loadingImage" src="{{ URL::asset('assets/img/ajax-loader.svg')}}" alt="Loading"/></div>',
				callback: function () {
					$('ul.pagination:visible:first').hide();
				}
			});
		});
	</script>
	<script>
		$(document).ready(function () {
			$(".comment-emoji-area").textcomplete([{
				match: /\B:([\-+\w]*)$/,
				search: function (term, callback) {
					var results = [];
					var results2 = [];
					var results3 = [];
					$.each(emojiStrategy, function (shortname, data) {
						if (shortname.indexOf(term) > -1) {
							results.push(shortname);
						} else {
							if ((data.aliases !== null) && (data.aliases.indexOf(term) > -1)) {
								results2.push(shortname);
							} else if ((data.keywords !== null) && (data.keywords.indexOf(term) > -1)) {
								results3.push(shortname);
							}
						}
					});
					if (term.length >= 3) {
						results.sort(function (a, b) {
							return (a.length > b.length);
						});
						results2.sort(function (a, b) {
							return (a.length > b.length);
						});
						results3.sort();
					}
					var newResults = results.concat(results2).concat(results3);
					callback(newResults);
				},
				template: function (shortname) {
					return '<img class="emojione" src="//cdn.jsdelivr.net/emojione/assets/png/' + emojiStrategy[shortname].unicode + '.png"> :' + shortname + ':';
				},
				replace: function (shortname) {
					return ':' + shortname + ': ';
				},
				index: 1,
				maxCount: 10
			}], {
				footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">»</span></a>'
			});
		});
	</script>
	{{--Ajax Request for the like button--}}
	@include('templates.partials.ajax_requests')

@stop
{{-- Update the messages passed on to views --}}