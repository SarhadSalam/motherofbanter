<div class="infinite-loading-image-posts">
    @foreach ($image as $images)
    <div class="media">
        <div class="media-body">
            <div class="page-header">
                <h4 class="convert-emoji"><a href="{{ route('get.post', ['url' => $images-> url]) }}"> {{$images->body}} </a> <small class='pull-right'>By, <a href="{{ route('profile.index', ['username' => $images -> user->username]) }}">{{$images->user->getNameOrUsername()}}</a></small></h4>
            </div>
            <a href="{{ route('get.post', ['url' => $images-> url]) }}">
            <img src="{{URL::asset($images->image_path)}}" class="img-responsive center-block">
            </a>
            <br>
            @if(Auth::check())
            <ul class="list-inline big-icon">
                <li><a href="{{ route('image.like', ['imageId' => $images->id]) }}"><i class="icon icon-thumbs-o-up"></i></a></li>
                <li><a href="#"><i class="icon icon-thumbs-o-down"></i></a></li>
                <li><a href="{{ route('get.post', ['url' => $images-> url]) }}#commentArea"><i class="icon icon-bubble2"></i></a></li>
                <li class="pull-right">{{ $images->created_at->diffForHumans()}}</li>
                <li class="pull-right">{{$images->likes->count()}}  {{str_plural('like', $images->likes->count())}}</li>
            </ul>
            @else
            <ul class="list-inline big-icon">
                <li><a href="{{route('auth.signin')}}"><i class="icon icon-thumbs-o-up"></i></a></li>
                <li><a href="{{route('auth.signin')}}"><i class="icon icon-thumbs-o-down"></i></a></li>
                <li><a href="{{ route('get.post', ['url' => $images-> url]) }}#commentArea"><i class="icon icon-bubble2"></i></a></li>
                <li class="pull-right">{{ $images->created_at->diffForHumans()}}</li>
                <li class="pull-right">{{$images->likes->count()}}  {{str_plural('like', $images->likes->count())}}</li>
            </ul>
            @endif
            <hr>
        </div>
    </div>
    @endforeach
    <div class="hidden-paginator">
        {!! $image->render() !!}
    </div>
</div>