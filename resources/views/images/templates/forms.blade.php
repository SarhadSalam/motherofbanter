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
		<div class="btn-group dropup pull-right">
			<button class="dropdown-caret" data-toggle="dropdown"
					aria-haspopup="true" aria-expanded="false">
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menus">
				@if(Auth::user()->id == $images->user_id)
					<li>
						<form
								action="{{route('delete.image', ['$imageURL' => $images->url])}}"
								method="post">
							<button class="btn-link" type="submit">Delete</button>
							<input type="hidden" name="_token" value="{{ Session::token() }}">
						</form>
					</li>
				@endif
				<li><a href="#">Report</a></li>
			</ul>
		</div>
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