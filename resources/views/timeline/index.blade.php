@extends('templates.default') 
@section('title')
    Home
@stop 

@section('content') 
    @if (Auth::check()) 
        
    @else
        <div class="col-lg-8">
            <h1 class="text-center">Please <a href="{{ route('auth.signin') }}">Sign In</a> or <a href="{{ route('auth.signup') }}">Sign Up</a> to post.</h1>
        </div>
    @endif 

    {{-- Images in the body --}}
    <div class="col-lg-8">
        @if (!$image->count())
            <p> There's nothing in your timeline, yet. </p>
        @else
        <div class="infiniteScrolling">
            @foreach ($image as $images)
                <div class="media">
                    <div class="media-body">
                        <div class="page-header">
                            <h4 class="convert-emoji"><a href="{{ route('get.post', ['url' => $images-> url]) }}"> {{$images->body}} </a> <small class='pull-right'>By, <a href="{{ route('profile.index', ['username' => $images -> user->username]) }}">{{$images->user->getNameOrUsername()}}</a></small></h4>
                        </div>
                        <a href="{{ route('get.post', ['url' => $images-> url]) }}">
                                <img src="{{$images->image_path}}" class="img-responsive center-block">
                            </a>
                        <br>
                        <ul class="list-inline bigIcon">
                            <li><a href="#"><i class="icon icon-thumbs-o-up"></i></a></li>
                            <li><a href="#"><i class="icon icon-thumbs-o-down"></i></a></li>
                            <li><a href="{{ route('get.post', ['url' => $images-> url]) }}#commentArea"><i class="icon icon-bubble2"></i></a></li>
                            <li class="pull-right">{{ $images->created_at->diffForHumans()}}</li>
                            <li class="pull-right">10 likes</li>
                        </ul>
                        <hr>
                    </div>
                </div>
            @endforeach
                <div class="paginatorHide">
                    {!! $image->render() !!}
                </div>
            @endif
        </div>
    </div>
@include('templates.partials.sidebar')
    <script type="text/javascript">
    $(function() {
        $('.infiniteScrolling').jscroll({
            autoTrigger: true,
            nextSelector: '.pagination li.active + li a',
            contentSelector: 'div.infiniteScrolling',
            loadingHtml: '<div class="col-lg-8"><img class="loadingImage" src="{{ URL::asset('assets/img/ajax-loader.gif')}}" alt="Loading"/></div>',
            callback: function() {
                $('ul.pagination:visible:first').hide();
            }
        });
    });
    </script>
{{-- Ending of images in the body --}}
@stop