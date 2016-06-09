<div class="infinite-loading-image-posts">
	<div class="media">
		<div class="media-body">
			<div class="page-header">
				<h4 class="convert-emoji"><a
							href="{{ route('get.post', ['url' => $activities->likeable-> url]) }}"> {{$activities->likeable->body}} </a>
					<small class='pull-right'>By, <a
								href="{{ route('profile.index', ['username' => $activities->user->username]) }}">{{$activities->user->getNameOrUsername()}}</a>
					</small>
				</h4>
			</div>
			<a href="{{ route('get.post', ['url' => $activities->likeable-> url]) }}">
				<img src="{{URL::asset($activities->likeable->image_path)}}" class="img-responsive center-block">
			</a>
			<br>
			<hr>
		</div>
	</div>
</div>