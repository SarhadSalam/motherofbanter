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
												<form action="{{route('delete.image.comment', ['$commentId' => $reply->id, 'imageURL' => $images-> url])}}"
													  method="post" role="form">
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