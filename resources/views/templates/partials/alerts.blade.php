@if (Session::has('info'))
	<div class="container">
		<div class="form-authentication__alert alert-info fade in" role="alert">
			<a href="#" class="icon icon-cross pull-right" data-dismiss="alert" aria-label="close"
			   style="margin-top:6px;"></a>
			<span class="icon icon-exclamation-circle" aria-hidden="true"></span>
			<span class="sr-only">Error:</span>
			<strong style="margin-left:20px;">{{ Session::get('info') }}</strong>
		</div>
	</div>
@endif
@if (Session::has('danger'))
	<div class="container">
		<div class="form-authentication__alert alert-danger fade in" role="alert">
			<a href="#" class="icon icon-cross pull-right" data-dismiss="alert" aria-label="close"></a>
			<span class="icon icon-frustrated" aria-hidden="true"></span>
			<span class="sr-only">Error:</span>
			<strong style="margin-left:20px;">{{ Session::get('danger') }}</strong>
		</div>
	</div>
@endif
@if (Session::has('success'))
	<div class="container">
		<div class="form-authentication__alert alert-success fade in tempsuccess" role="alert">
			<a href="#" class="icon icon-cross pull-right" data-dismiss="alert" aria-label="close"></a>
			<span class="icon icon-happy" aria-hidden="true"></span>
			<span class="sr-only">Error:</span>
			<strong style="margin-left:20px;">{{ Session::get('success') }}</strong>
		</div>
	</div>
@endif
@if (Session::has('warning'))
	<div class="container">
		<div class="form-authentication__alert alert-warning fade in" role="alert">
			<a href="#" class="icon icon-cross pull-right" data-dismiss="alert" aria-label="close"></a>
			<span class="icon icon-happy" aria-hidden="true"></span>
			<span class="sr-only">Error:</span>
			<strong style="margin-left:20px;">{{ Session::get('warning') }}</strong>
		</div>
	</div>
@endif