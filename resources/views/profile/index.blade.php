@extends('templates.default')
@section('title')
{{$user->getFirstNameOrUsername()}}
@stop
@section('content')
<div class="container" style="margin:0;padding:0;width:100%;">
    @include('user.partials.userblock')
</div>
<div class="container">
    {{-- Images in the body --}}
    <div class="col-lg-8">
        @if (!$image->count())
        <h3 class="text-center"> {{ $user->getFirstNameOrUsername()}} hasn't posted anything, yet.</h3>
        @else
            @include('images.templates.images')    
        @endif
        </div>
    </div>
</div>
@stop
@section('partialScripts')
    <script type="text/javascript">
    $(function() {
        $('.infinite-loading-image-posts').jscroll({
            autoTrigger: true,
            nextSelector: '.pagination li.active + li a',
            contentSelector: 'div.infinite-loading-image-posts',
            loadingHtml: '<div class="col-lg-8"><img class="loadingImage" src="{{ URL::asset('assets/img/ajax-loader.gif')}}" alt="Loading"/></div>',
            callback: function() {
                $('ul.pagination:visible:first').hide();
            }
        });
    });
</script>
@stop