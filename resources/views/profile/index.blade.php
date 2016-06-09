@extends('templates.default')
@section('title')
	{{$user->getFirstNameOrUsername()}}
@stop
@section('content')
	<div class="container" style="margin:0;padding:0;width:100%;">
		@include('user.partials.userblock')
	</div>
	<div class="container">
		<ul class="nav nav-pills nav-justified">
			@if ($image->count())
				<li class="active"><a data-toggle="tab" href="#name">{{$user->getFirstNameOrUsername()}}'s Posts</a>
				</li>
			@endif

			@if ($activity["likes"]->count())
				<li><a data-toggle="tab" href="#activity">{{$user->getFirstNameOrUsername()}}'s Likes</a></li>
			@endif

			@if ($activity["dislikes"]->count())
				<li><a data-toggle="tab" href="#activity">{{$user->getFirstNameOrUsername()}}'s Dislikes</a></li>
			@endif

			@if ($activity["comments"]->count())
				<li><a data-toggle="tab" href="#activity">{{$user->getFirstNameOrUsername()}}'s Comments</a></li>
			@endif
		</ul>
		<div class="tab-content">
			<div id="name" class="tab-pane fade in active">
				<div class="col-lg-8">
					@if (!$image->count())
						<h3 class="text-center"> {{ $user->getFirstNameOrUsername()}} hasn't posted anything, yet.</h3>
					@else
						@include('images.templates.images')
					@endif
				</div>
			</div>
			@if ($activity["likes"]->count())
				<div id="activity" class="tab-pane fade in active">
					@foreach($activity["likes"] as $activities)
						@include('user.partials.activity')
					@endforeach
				</div>
			@endif
		</div>
		{{-- Images in the body --}}
	</div>
@stop
@section('partialScripts')
	<script type="text/javascript">
		$(function () {
			$('.infinite-loading-image-posts').jscroll({
				autoTrigger: true,
				nextSelector: '.pagination li.active + li a',
				contentSelector: 'div.infinite-loading-image-posts',
				loadingHtml: '<div class="col-lg-8"><img class="loadingImage" src="{{ URL::asset('assets/img/ajax-loader.gif')}}" alt="Loading"/></div>',
				callback: function () {
					$('ul.pagination:visible:first').hide();
				}
			});
		});
	</script>
@stop