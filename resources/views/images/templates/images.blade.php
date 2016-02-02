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
				@include('images.templates.forms')
				<hr>
			</div>
		</div>
		@include('templates.partials.ajax_requests')
	@endforeach
	<div class="hidden-paginator">
		{!! $image->render() !!}
	</div>
</div>
