@extends('templates.default')
@section('title')
	{{$user->getFirstNameOrUsername()}}
@stop
@section('content')
	<div class="container" style="margin:0;padding:0;width:100%;">
		@include('user.partials.userblock')
	</div>
	<div class="container">
		<ul class="nav nav-pills nav-justified" id="#activityPane">
			@if ($image->count())
				<li class="active"><a data-toggle="tab" href="#name">{{$user->getFirstNameOrUsername()}}'s Posts</a>
				</li>
			@endif

			@if ($activity["likes"]->count())
				<li><a data-toggle="tab" href="#likes">{{$user->getFirstNameOrUsername()}}'s Likes</a></li>
			@endif

			@if ($activity["dislikes"]->count())
				<li><a data-toggle="tab" href="#dislikes">{{$user->getFirstNameOrUsername()}}'s Dislikes</a></li>
			@endif
		</ul>
		<div class="tab-content col-lg-8">
			<div id="name" class="tab-pane fade in active">
				@if (!$image->count())
					<h3 class="text-center"> {{ $user->getFirstNameOrUsername()}} hasn't posted anything, yet.</h3>
				@else
					@include('images.templates.images')
				@endif
			</div>
			@if ($activity["likes"]->count())
				{{-- */$type="likeable"; $name="likes"/* --}}
				<div id="likes" class="tab-pane fade in">
					@foreach($activity[$name] as $activities)
						@include('user.partials.activity')
					@endforeach
					<div class="text-center">    {{$activity[$name]->render()}}</div>
				</div>
			@endif
			@if ($activity["dislikes"]->count())
				{{-- */$type="dislikeable";$name="dislikes"/* --}}
				<div id="dislikes" class="tab-pane fade in">
					@foreach($activity[$name] as $activities)
						@include('user.partials.activity')
					@endforeach
					<div class="text-center">{{$activity[$name]->render()}}</div>
				</div>
			@endif
		</div>
		{{-- Images in the body --}}
	</div>
@stop
@push('javascript')
<script>
	$('#activityPane a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	// store the currently selected tab in the hash value
	$("ul.nav-pills > li > a").on("shown.bs.tab", function (e) {
		var id = $(e.target).attr("href");
		localStorage.setItem('activeTab', id);
	});

	// on load of the page: switch to the currently selected tab
	var hash = localStorage.getItem('activeTab');
	if (hash != null) {
		$('.nav-pills a[href="' + hash + '"]').tab('show');
	}
</script>
@endpush
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