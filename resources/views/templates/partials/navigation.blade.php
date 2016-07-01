<ul id="menu" class="menu-main fixed-bar">
	<li class="trigger"><a class="icon icon-menu" href="#"><span>Menu</span></a>
		<nav class="menu-wrapper">
			<div class="scroller">
				<ul class="menu">
					<li class="search-item">
						<form action="{{ route('search.results') }}" role="search">
							<input type="text" class="search" name="query" placeholder="Find Posts and People">
							<a class="sidebar-icon icon icon-search" href="#button1"><span>Search</span></a>
							<button type="submit" class="btn btn-primary search-button">Search</button>
						</form>
					</li>
					<li>
						<a href="{{ route('home') }}" class="sidebar-icon icon icon-home">Home</a>
					</li>
					@if(Auth::check())
						<li class="mobile-upload">
							<a class="sidebar-icon icon icon-cloud-upload" type="button" data-toggle="modal"
							   data-target="#imagesModal">Upload</a>
						</li>
					@endif
					<li>
					{{--<ul class="submenu">--}}
					<li><a class="sidebar-icon icon icon-play" href="{{route('video.home')}}">Videos</a></li>
					<li><a href="#" class="sidebar-icon icon icon-key">Blogs</a></li>
					{{--</ul>--}}
					@if(Auth::check())
						<li>
							<ul class="submenu">
								<li><a href="{{ route('profile.edit') }}" class="sidebar-icon icon icon-user">Update
										Account</a></li>
								<li><a href="{{ route('auth.signout')}}" class="sidebar-icon icon icon-sign-out">Sign
										Out</a></li>
							</ul>
						</li>
						<!-- SubMenu -->
						@else
						</li>
						<li class="mobile-sign-in"><a href="{{ route('auth.signin')}}"
													class="sidebar-icon icon icon-sign-in">Sign In</a></li>
						<li><a href="{{ route('auth.signup')}}" class="sidebar-icon icon icon-key">Sign Up</a></li>
					@endif
				</ul>
				<!-- Menu -->
			</div>
			<!-- scroller -->
		</nav>
		<!-- Navigation -->
	</li>
	<!-- Menu -->
	<li>
		<a href="{{ route('home')}}">
			<div class="brand">
				<img src="{{ URL::asset('assets/img/MotherOfBanterLogo.svg') }}" alt="">
			</div>
		</a>
	</li>
	@if(Auth::check())
		<li>
			<div class="user-image">
				<a href="{{ route('profile.index', ['username' => Auth::user()-> username]) }}">
					<img src="{{ Auth::user()->getAvatarUrl() }}" alt="" class="img-circle"></a>
			</div>
		</li>
		<li>
			<div class="uploadButton">
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#imagesModal">Upload
				</button>
			</div>
		</li>
	@else
		<li class="signIn"><a href="{{ route('auth.signin')}}" class="icon icon-sign-in">Sign In</a></li>
	@endif
</ul>
<!--menu-main-->
@if(Auth::check())
	@if ($errors->count())
		<script type="text/javascript">
			$(window).load(function () {
				$('#imagesModal').modal('show');
			});
		</script>
	@endif
	<form role="form" action="{{ route('image.post')}}" method="post" enctype="multipart/form-data"
		  data-parsley-validate>
		<!-- Modal -->
		<div class="modal fade" id="imagesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
									aria-hidden="true">&times;</span></button>
						<h4 class="modal-title Status" id="myModalLabel Status">Post a funny image: </h4>
					</div>
					<div class="modal-body form-group{{ $errors->has('status') ? ' has-error': '' }}">
						<textarea
								  placeholder="Add a heading, {{ Auth::user()->getFirstNameOrUsername() }}! To use emojis from a Desktop just hit ':'"
								  name="status" class="form-control emojiArea" rows="2" id="postStatus" required=""
								  data-parsley-required-message="You must add a heading!"
								  data-parsley-trigger="change focusout" data-parsley-maxlength="300"></textarea>
						@if($errors->has('status'))
							<span class="help-block">{{ $errors->first('status') }}</span>
						@endif
					</div>
					<div class="modal-footer">
						<div class="row">
							<div class="col-md-6 pull-left text-left">
								<div class="form-group{{ $errors->has('images') ? ' has-error': '' }} image-button">
									<input id="input-4" type="file" name="images" accept="image/*" class="file-loading"
										   alt="Please select an image to upload."
										   data-parsley-filemimetypes="image/jpeg, image/png, image/gif"
										   data-parsley-filemimetypes-message="Only JPEG, GIF & PNG is supported."
										   data-parsley-trigger="change focusout" data-parsley-maxfilesize="3"
										   required="" data-parsley-required-message="A Picture Is Necessary">
									@if($errors->has('images'))
										<span class="help-block">{{ $errors->first('images') }}</span>
									@endif
								</div>
							</div>
							<div class="col-md-2 pull-right social-button">
								<button type="submit" class="btn btn-primary" id="postStatusButton" data-toggle="post"
										data-placement="top" title="You Must Add An Image!">Post
								</button>
							</div>
							<div class="col-md-offset-1 pull-right"
								 style="margin-top:8px; color: #959595; margin-right:8px;">
								<span id="text_counter"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<input type="hidden" name="_token" value="{{ Session::token() }}">
	</form>
@endif