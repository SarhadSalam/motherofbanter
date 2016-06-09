@extends('templates.default')
@section('title')
	{{$images->body}}
@stop
@section('content')
	<div class="container">
		{{-- User Posted Images --}}
		<div class="col-lg-8">
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
					@if ($images->largeImage_path === null)
						<div class="hovereffect">
							<img src="{{URL::asset($images->image_path)}}" class="img-responsive center-block">
							<div class="overlay">
								<p class="set1">
									<a href="#">
										<i class="icon icon-twitter"></i>
									</a>
									<a href="#">
										<i class="icon icon-facebook-square"></i>
									</a>
								</p>
								<hr>
								<hr>
								<p class="set2">
									<a href="#">
										<i class="icon icon-instagram"></i>
									</a>
									<a href="#">
										<i class="icon icon-google-plus"></i>
									</a>
								</p>
							</div>
						</div>
					@else
						<img class="img-responsive center-block" src="{{URL::asset($images->largeImage_path)}}">
					@endif
					@include('images.templates.forms')
				</div>
			</div>
		</div>
		{{-- User posted Images Ends --}}
		{{-- Ad Banner --}}
		<div class="col-lg-8">
			<div class="span 8 adBanner">I am so ugly because advertisements are ugly but gains money so :\</div>
			<hr>
		</div>
	@include('comment.comments')
	</div>
@stop

@section('partialScripts')
	@include('comment.scripts')
@stop
{{-- Update the messages passed on to views --}}