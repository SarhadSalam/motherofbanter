<div class="infinite-loading-image-posts">
	@foreach ($image as $images)
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
				<a href="{{ route('get.post', ['url' => $images-> url]) }}">
					<img src="{{URL::asset($images->image_path)}}" class="img-responsive center-block">
				</a>
				<br>
				@if(Auth::check())
					<ul class="list-inline big-icon">
						<form class="form-vote form{{$images->id}}"
							  action="{{ route('image.like', ['imageId' => $images->id]) }}" method="get" role="form">
							@if(Auth::user()->hasLikedAlready($images->id))
								<li>
									<button type="submit" class="like_btn"><i
												class="unused-icon icon icon-thumbs-o-up"></i></button>
								</li>
							@else
								<li>
									<button type="submit" class="like_btn" href=""><i
												class="icon icon-thumbs-o-up"></i></button>
								</li>
							@endif
							<input type="hidden" name="_token" value="{{ Session::token() }}">
						</form>
						<form class="form-vote form_dislike{{$images->id}}"
							  action="{{ route('image.dislike', ['imageId' => $images->id]) }}" method="get"
							  role="form">
							@if(Auth::user()->hasDislikedAlready($images->id))
								<li>
									<button type="submit" class="dislike_btn"><i
												class="unused-icon icon icon-thumbs-o-down"></i></button>
								</li>
							@else
								<li>
									<button type="submit" class="dislike_btn"><i
												class="icon icon-thumbs-o-down"></i></button>
								</li>
							@endif
							<input type="hidden" name="_token" value="{{ Session::token() }}">
						</form>
						<li><a href="{{ route('get.post', ['url' => $images-> url]) }}#commentArea"><i
										class="icon icon-bubble2"></i></a></li>
						<li class="pull-right">{{ $images->created_at->diffForHumans()}}</li>
						<li class="pull-right"><span
									class="dislike_count{{$images->id}}">{{$images->dislikes->count()}}</span> {{str_plural('Dislike', $images->dislikes->count())}}
						</li>
						<li class="pull-right"><span
									class="like_count{{$images->id}}"> {{$images->likes->count()}}</span> {{str_plural('Like', $images->likes->count())}}
						</li>
					</ul>
				@else
					<ul class="list-inline big-icon">
						<li><a href="{{route('auth.signin')}}"><i class="unused-icon icon icon-thumbs-o-up"></i></a>
						</li>
						<li><a href="{{route('auth.signin')}}"><i class="unused-icon icon icon-thumbs-o-down"></i></a>
						</li>
						<li><a href="{{route('auth.signin')}}"><i class="unused-icon icon icon-bubble2"></i></a></li>
						<li class="pull-right"><a
									href="{{route('auth.signin')}}">{{ $images->created_at->diffForHumans()}}</a></li>
						<li class="pull-right"><a
									href="{{route('auth.signin')}}">{{$images->dislikes->count()}}  {{str_plural('dislike', $images->dislikes->count())}}</a>
						</li>
						<li class="pull-right"><a
									href="{{route('auth.signin')}}">{{$images->likes->count()}} {{str_plural('like', $images->likes->count())}}</a>
						</li>
					</ul>
				@endif
				<hr>
			</div>
		</div>
		@include('templates.partials.ajax_requests')
	@endforeach
	<div class="hidden-paginator">
		{!! $image->render() !!}
	</div>
</div>
