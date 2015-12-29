@extends('templates.default')
@section('title')
	Home
@stop
@section('content')
	<div class="container text-center">
		<h3>Ooops, that page couldn't be found</h3>
		<h4><a href="{{ route('home') }}">Go Home</a></h4>
	</div>
@stop