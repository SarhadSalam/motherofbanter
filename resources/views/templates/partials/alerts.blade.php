@if (Session::has('info'))
	<div class="container">
		<div class="alert alert-info fade in" role="alert">
		    <a href="#" class="icon icon-cross pull-right" data-dismiss="alert" aria-label="close" style="margin-top:6px;"></a>
		    <span class="icon icon-exclamation-circle" aria-hidden="true"></span>
		    <span class="sr-only">Error:</span>
		    <strong style="margin-left:20px;">{{ Session::get('info') }}</strong>
		</div>
	</div>
@endif