{{--<div class="infinite-loading-image-posts">--}}
	{{--<div class="media">--}}
		{{--<div class="media-body">--}}
			{{--<div class="page-header">--}}
				{{--<h4 class="convert-emoji"><a--}}
							{{--href="{{ route('get.post', ['url' => $activity-> url]) }}"> {{$activity->body}} </a>--}}
					{{--<small class='pull-right'>By, <a--}}
								{{--href="{{ route('profile.index', ['username' => $activity->user->username]) }}">{{$activity->user->getNameOrUsername()}}</a>--}}
					{{--</small>--}}
				{{--</h4>--}}
			{{--</div>--}}
			{{--<a href="{{ route('get.post', ['url' => $activity-> url]) }}">--}}
				{{--<img src="{{URL::asset($activity->image_path)}}" class="img-responsive center-block">--}}
			{{--</a>--}}
			{{--<br>--}}
			{{--<hr>--}}
		{{--</div>--}}
	{{--</div>--}}
{{--</div>--}}
{{dd($activity->image->id)}}