@extends('templates.default')
@section('title')
	Home
@stop
@section('content')
	<div class="container">
		@if (!Auth::check())
			<div class="col-lg-8">
				<h1 class="text-center">Please <a href="{{ route('auth.signin') }}">Sign In</a> or <a
							href="{{ route('auth.signup') }}">Sign Up</a> to post.</h1>
			</div>
		@endif
		{{-- Images in the body --}}
		<div class="col-lg-8">
			@if (!$image->count())
				<p> There's nothing in your timeline, yet. </p>
			@else
				@include('images.templates.images')
			@endif
		</div>
	</div>
	@include('templates.partials.sidebar')
	{{-- Ending of images in the body --}}
@stop

@section('partialScripts')
	<script type="text/javascript">
		$(function () {
			$('.infinite-loading-image-posts').jscroll({
				autoTrigger: true,
				nextSelector: '.pagination li.active + li a',
				contentSelector: 'div.infinite-loading-image-posts',
				loadingHtml: '<div class="col-lg-8"><img class="loading-image" src="{{ URL::asset('assets/img/ajax-loader.svg')}}" alt="Loading"/></div>',
				callback: function () {
					$('ul.pagination:visible:first').hide();
				}
			});
		});
	</script>
@stop