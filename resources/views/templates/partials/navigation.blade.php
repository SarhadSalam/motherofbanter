<ul id="menu" class="menuMain fixedBar">
    <li class="trigger"><a class="icon icon-menu" href="#"><span>Menu</span></a>
        <nav class="menuWrapper">
            <div class="scroller">
                <ul class="menu">
                    <li class="searchItem">
                        <form action="{{ route('search.results') }}" role="search">
                            <input type="text" class="search" name="query" placeholder="Find Posts and People">
                            <a class="sidebarIcon icon icon-search" href="#button1"><span>Search</span></a>
                            <button type="submit" class="btn btn-primary searchButton">Search</button>
                        </form>
                    </li>
                    <li>
                        <a href="{{ route('home') }}" class="sidebarIcon icon icon-home">Home</a>
                    </li>
                    @if(Auth::check())
                        <li class="mobileUpload">
                            <a class="sidebarIcon icon icon-cloud-upload" type="button" data-toggle="modal" data-target="#imagesModal">Upload</a>
                        </li>
                    @endif
                    <li>
                        <a class="sidebarIcon icon icon-play" href="#">T.V.</a> 
                        @if(Auth::check())
                            <ul class="submenu">
                                <li><a href="{{ route('profile.edit') }}" class="sidebarIcon icon icon-user">Update Account</a></li>
                                <li><a href="{{ route('auth.signout')}}" class="sidebarIcon icon icon-sign-out">Sign Out</a></li>
                            </ul>
                        <!-- SubMenu -->
                        @else
                    </li>
                            <li class="mobileSignIn"><a href="{{ route('auth.signin')}}" class="sidebarIcon icon icon-sign-in">Sign In</a></li>
                            <li><a href="{{ route('auth.signup')}}" class="sidebarIcon icon icon-key">Sign Up</a></li>
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
            <div class="userImage">
            <a href="{{ route('profile.index', ['username' => Auth::user()-> username]) }}">
                <img src="{{ Auth::user()->getAvatarUrl() }}" alt="" class="img-circle"></a>
            </div>
        </li>
        <li>
            <div class="uploadButton">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#imagesModal">Upload</button>
            </div>
        </li>
    @else
        <li class="signIn"><a href="{{ route('auth.signin')}}" class="icon icon-sign-in">Sign In</a></li>
    @endif
</ul>
<!--menuMain-->
@if(Auth::check()) 
    @if ($errors->count())
        <script type="text/javascript">
        $(window).load(function() {
            $('#imagesModal').modal('show');
        });
        </script>
    @endif

    <form role="form" action="{{ route('image.post')}}" method="post" method="post" enctype="multipart/form-data">
        <!-- Modal -->
        <div class="modal fade" id="imagesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title Status" id="myModalLabel Status">Post something funny: </h4>
                    </div>
                    <div class="modal-body form-group{{ $errors->has('status') ? ' has-error': '' }} test11">
                        <textarea id="status" placeholder="Add a heading, {{ Auth::user()->getFirstNameOrUsername() }}! To use emojis from a Desktop just hit ':'" name="status" class="form-control emojiArea" rows="2" id="postStatus"></textarea>
                        @if($errors->has('status'))
                            <span class="help-block">{{ $errors->first('status') }}</span> 
                        @endif
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-md-6 pull-left text-left">
                                <div class="form-group{{ $errors->has('images') ? ' has-error': '' }} imageButton">
                                    <input id="input-4" type="file" name="images" accept="image/*" class="file-loading" alt="Please select an image to upload."> 
                                    @if($errors->has('images'))
                                        <span class="help-block">{{ $errors->first('images') }}</span> 
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-2 pull-right socialButton" >
                                <button type="submit" class="btn btn-primary" id="posting" data-toggle="post" data-placement="top" title="You Must Add An Image!">Post</button>
                            </div>
                            <div class="col-md-offset-1 pull-right" style="margin-top:8px; color: #959595; margin-right:8px;">
                                <span id="text_counter"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
    </form>

    <script>
      $(document).ready(function(){
      var left = 2000
      $('#text_counter').text(left);

      $('#status').keyup(function () {

      left = 2000 - $(this).val().length;

      if(left < 0){
          $('#text_counter').addClass("overlimit");
          $('#status').addClass("overlimitText");
           $('#posting').attr("disabled", true);
      }else{
          $('#text_counter').removeClass("overlimit");
          $('#status').removeClass("overlimitText");
          $('#posting').attr("disabled", false);
      }

      $('#text_counter').text(left);
      });
      });
      $(function () {
        $('[data-toggle="post"]').tooltip()
          });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
        $(".emojiArea").textcomplete([ {
            match: /\B:([\-+\w]*)$/,
            search: function (term, callback) {
                var results = [];
                var results2 = [];
                var results3 = [];
                $.each(emojiStrategy,function(shortname,data) {
                    if(shortname.indexOf(term) > -1) { results.push(shortname); }
                    else {
                        if((data.aliases !== null) && (data.aliases.indexOf(term) > -1)) {
                            results2.push(shortname);
                        }
                        else if((data.keywords !== null) && (data.keywords.indexOf(term) > -1)) {
                            results3.push(shortname);
                        }
                    }
                });
                if(term.length >= 3) {
                    results.sort(function(a,b) { return (a.length > b.length); });
                    results2.sort(function(a,b) { return (a.length > b.length); });
                    results3.sort();
                }
                var newResults = results.concat(results2).concat(results3);
     
                callback(newResults);
            },
            template: function (shortname) {
                return '<img class="emojione" src="//cdn.jsdelivr.net/emojione/assets/png/'+emojiStrategy[shortname].unicode+'.png"> :'+shortname+':';
            },
            replace: function (shortname) {
                return ':'+shortname+': ';
            },
            index: 1,
            maxCount: 10
        }
        ],{
            footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">»</span></a>'
        });
    });
    </script>
@endif