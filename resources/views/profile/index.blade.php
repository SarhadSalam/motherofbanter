@extends('templates.default')
@section('title')
{{$user->getNameOrUsername()}}
@stop
@section('content')
<div class="container" style="margin:0;padding:0;width:100%;">
    @include('user.partials.userblock')
</div>
@stop