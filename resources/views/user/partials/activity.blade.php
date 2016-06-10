@if(!$activities->$type->parent_id)
	<div class="infinite-loading-image-posts">
		<div class="media">
			<div class="media-body">
				<div class="page-header">
					<p id="activityName" data-type= "{{$type}}">{{$activities->user->getNameOrUsername()}} @{{ message }}
						this</p>
					<h4 class="convert-emoji"><a
								href="{{ route('get.post', ['url' => $activities->$type-> url]) }}"> {{$activities->$type->body}} </a>
						<small class='pull-right'>By, <a
									href="{{ route('profile.index', ['username' => $activities->$type->user->username]) }}"> {{$activities->$type->user->getNameOrUsername()}}</a>
						</small>
					</h4>
				</div>
				<a href="{{ route('get.post', ['url' => $activities->$type-> url]) }}">
					<img src="{{URL::asset($activities->$type->image_path)}}" class="img-responsive center-block">
				</a>
				<br>
				<hr>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="{{ URL::asset('assets/js/temp.js') }}"></script>
@endif
