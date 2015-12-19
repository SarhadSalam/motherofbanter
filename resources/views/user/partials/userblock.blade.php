<div class="userblock text-center">
    <h3><a href="{{ route('profile.index', ['username' => $user-> username]) }}" style="color:white;">{{ $user->getNameOrUsername() }}</a></h3>
    <a href="{{ route('profile.index', ['username' => $user-> username]) }}">
	    <img class="img-circle" alt="{{ $user->getNameOrUsername() }}" src="{{ $user->getAvatarUrl() }}" height="140" width="140">
    </a>
     @if ($user->location)
        <h5>{{ $user->location }}</h5>
    @endif
</div>