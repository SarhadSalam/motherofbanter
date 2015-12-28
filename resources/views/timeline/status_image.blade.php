@extends('templates.default')
@section('title')
{{$image->body}}
@stop
@section('content') 
{{-- User Posted Images --}}
<div class="container">
    <div class="col-lg-8">
        <div class="media">
            <div class="media-body">
                <div class="page-header">
                    <h4 class="convert-emoji"><a href="{{ route('get.post', ['url' => $image-> url]) }}"> {{$image->body}} </a> <small class='pull-right'>By, <a href="{{ route('profile.index', ['username' => $image -> user->username]) }}">{{$image->user->getNameOrUsername()}}</a></small></h4>
                </div>
                @if ($image->largeImage_path === null)
                <div class="hovereffect">
                    <img src="{{URL::asset($image->image_path)}}" class="img-responsive center-block">
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
                <img class="img-responsive center-block" src="{{URL::asset($image->largeImage_path)}}">
                @endif
                @if(Auth::check())
                <ul class="list-inline big-icon">
                    @if(Auth::user()->likes->count() == 0)
                        <li><a href="{{ route('image.like', ['imageId' => $image->id]) }}"><i class="unused-icon icon icon-thumbs-o-up"></i></a></li>
                    @else
                        <li><a href="{{ route('image.like', ['imageId' => $image->id]) }}"><i class="icon icon-thumbs-o-up"></i></a></li>
                    @endif
                     @if(Auth::user()->dislikes->count() == 0)
                        <li><a href="{{ route('image.dislike', ['imageId' => $image->id]) }}"><i class="unused-icon icon icon-thumbs-o-down"></i></a></li>
                     @else
                        <li><a href="{{ route('image.dislike', ['imageId' => $image->id]) }}"><i class="icon icon-thumbs-o-down"></i></a></li>
                    @endif
                    <li><a href="#commentArea"><i class="icon icon-bubble2"></i></a></li>
                    <li class="pull-right">{{ $image->created_at->diffForHumans()}}</li>
                    <li class="pull-right">{{$image->dislikes->count()}}  {{str_plural('Dislike', $image->dislikes->count())}}</li>
                    <li class="pull-right">{{$image->likes->count()}}  {{str_plural('Like', $image->likes->count())}}</li>
                </ul>
                @else
                    <ul class="list-inline big-icon">
                        <li><a href="{{ route('auth.signin')}}"><i class="unused-icon icon icon-thumbs-o-up"></i></a></li>
                        <li><a href="{{ route('auth.signin')}}"><i class="unused-icon icon icon-thumbs-o-down"></i></a></li>
                        <li><a href="{{ route('auth.signin')}}"><i class="icon icon-bubble2"></i></a></li>
                        <li class="pull-right"><a href="{{ route('auth.signin')}}">{{ $image->created_at->diffForHumans()}}</a></li>
                        <li class="pull-right"><a href="{{ route('auth.signin')}}">{{$images->dislikes->count()}}  {{str_plural('Dislike', $image->dislikes->count())}}</a></li>
                        <li class="pull-right"><a href="{{ route('auth.signin')}}">{{$image->likes->count()}}  {{str_plural('Like', $image->likes->count())}}</a></li>
                    </ul>
                @endif
            </div>
        </div>
    </div>
    {{-- User posted Images Ends --}}
    {{-- Ad Banner --}}
    <div class="col-lg-8">
        <div class="span 8 adBanner">I am so ugly because advertisements are ugly but gains money so :\</div>
        <hr>
    </div>
    {{-- Comment Box --}}
    @if (Auth::check())
    <div class="col-lg-8" id="commentBox">
        <form role="form" action="{{ route('image.reply', ['imageId' =>$image->id] )}}" method="post" method="post" enctype="multipart/form-data" data-parsley-validate>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <label class="comment" id="comment">Say something funny: </label>
                </div>
                <div class="panel-body{{ $errors->has(" reply-{$image->id}") ? ' has-error': '' }}">
                    <textarea id="commentArea" placeholder="Say something funny, {{ Auth::user()->getFirstNameOrUsername() }}!!To use emojis from a Desktop just hit ':'" name="reply-{{ $image->id }}" class="form-control comment-emoji-area" rows="3" required="" data-parsley-required-message="You must add a comment!" data-parsley-trigger="change focusout" data-parsley-maxlength="1000"></textarea>
                    @if ($errors->has("reply-{$image->id}"))
                    <span class="help-block">{{ $errors->first("reply-{$image->id}") }}</span>
                    @endif
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-md-6 pull-left">
                            <div class="form-group{{ $errors->has('images') ? ' has-error': '' }} imageButton">
                                <input id="input-2" type="file" name="images" accept="image/*" class="file-loading" alt="Please select an image to upload." data-parsley-filemimetypes="image/jpeg, image/png, image/gif" data-parsley-filemimetypes-message="Only JPEG, GIF & PNG is supported." data-parsley-trigger="change focusout" data-parsley-maxfilesize="3"> {{--
                                <label class="control-label text-center">Select Image</label> --}}
                                @if($errors->has('images'))
                                <span class="help-block">{{ $errors->first('images') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-2 pull-right socialButton">
                            <button type="submit" id="commentPost" class="btn btn-primary" alt="Post a comment, {{ Auth::user()->getFirstNameOrUsername() }}">Comment</button>
                        </div>
                        <div class="col-md-offset-1 pull-right" style="margin-top:8px; color: #959595; margin-right:8px;">
                            <span id="commentCounter"></span>
                        </div>
                    </div>
                    <input type="hidden" name="_token" value="{{ Session::token() }}">
                </div>
            </form>
        </div>
        <hr>
    </div>
    @else
    <div class="col-lg-8">
        <div class="span11 center">
            <h1 class="text-center">Please <a href="{{ route('auth.signin') }}">Log In</a> or <a href="{{ route('auth.signup') }}">Sign Up</a> to comment.</h1>
        </div>
    </div>
    @endif
    {{-- Comment Box --}}
    {{-- User Comments --}}
    <div class="infinite-loading-comments">
        <div class="col-lg-8">
            @foreach($image->paginatingReplies() as $reply)
            <div class="media">
                <a class="pull-left" href="{{ route('profile.index', ['username' => $reply -> user->username]) }}">
                <img class="media-object" src="{{ $reply->user->getAvatarUrl() }}" width="40px" height="40px" style="margin-top:8px;">
                </a>
                <div class="media-body">
                    <div class="media-body">
                        <h5 class="media-heading"><a href="{{ route('profile.index', ['username' => $reply -> user->username]) }}">{{$reply->user->getNameOrUsername()}}</a></h5>
                        <p class="convert-emoji">{{$reply->body}}</p>
                        @if($reply->image_path)
                        <img class="img-responsive commentImages" alt="" src="{{URL::asset($reply->image_path)}}" style="padding-bottom:10px;">
                        @endif
                        <ul class="list-inline comments">
                            <li><a href="{{ route('image.like', ['imageId' => $reply->id]) }}"><i class="icon icon-thumbs-o-up"></i></a></li>
                            <li><a href="#"><i class="icon icon-thumbs-o-down"></i></a></li>
                            <li class="pull-right">{{$reply->likes->count()}}  {{str_plural('like', $reply->likes->count())}}</li>
                            <li class="pull-right">{{ $reply->created_at->diffForHumans() }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="specialHr">
            @endforeach
            <div class="hidden-paginator">
                {!! $image->paginatingReplies()->render() !!}
            </div>
        </div>
    </div>
</div>
@stop

@section('partialScripts')
<script>
        $(document).ready(function() {
            var left = 1000
            $('#commentCounter').text(left);
            $('#commentArea').keyup(function() {
                left = 1000 - $(this).val().length;
                if (left < 0) {
                    $('#commentCounter').addClass("overlimit");
                    $('#commentArea').addClass("overlimitText");
                    $('#commentPost').attr("disabled", true);
                } else {
                    $('#commentCounter').removeClass("overlimit");
                    $('#commentArea').removeClass("overlimitText");
                    $('#commentPost').attr("disabled", false);
                }
                $('#commentCounter').text(left);
            });
        });
</script>
<script type="text/javascript">
    $(function() {
        $('.infinite-loading-comments').jscroll({
            autoTrigger: true,
            nextSelector: '.pagination li.active + li a',
            contentSelector: 'div.infinite-loading-comments',
            loadingHtml: '<div class="col-lg-8"><img class="loadingImage" src="{{ URL::asset('assets/img/ajax-loader.gif')}}" alt="Loading"/></div>',
            callback: function() {
                $('ul.pagination:visible:first').hide();
            }
        });
    });
</script>
<script>
        $(document).ready(function() {
            $(".comment-emoji-area").textcomplete([{
                match: /\B:([\-+\w]*)$/,
                search: function(term, callback) {
                    var results = [];
                    var results2 = [];
                    var results3 = [];
                    $.each(emojiStrategy, function(shortname, data) {
                        if (shortname.indexOf(term) > -1) {
                            results.push(shortname);
                        } else {
                            if ((data.aliases !== null) && (data.aliases.indexOf(term) > -1)) {
                                results2.push(shortname);
                            } else if ((data.keywords !== null) && (data.keywords.indexOf(term) > -1)) {
                                results3.push(shortname);
                            }
                        }
                    });
                    if (term.length >= 3) {
                        results.sort(function(a, b) {
                            return (a.length > b.length);
                        });
                        results2.sort(function(a, b) {
                            return (a.length > b.length);
                        });
                        results3.sort();
                    }
                    var newResults = results.concat(results2).concat(results3);
                    callback(newResults);
                },
                template: function(shortname) {
                    return '<img class="emojione" src="//cdn.jsdelivr.net/emojione/assets/png/' + emojiStrategy[shortname].unicode + '.png"> :' + shortname + ':';
                },
                replace: function(shortname) {
                    return ':' + shortname + ': ';
                },
                index: 1,
                maxCount: 10
            }], {
                footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">»</span></a>'
            });
        });
</script>
@stop
{{-- Update the messages passed on to views --}}