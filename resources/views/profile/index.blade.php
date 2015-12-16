@extends('templates.default') 
	@section('title') 
		{{$user->getNameOrUsername()}} 
	@stop 

	@section('content')
		<div class="row">
		    <div class="col-lg-8">
		        @include('user.partials.userblock')
		        <hr>
		    </div>
		</div>
@stop