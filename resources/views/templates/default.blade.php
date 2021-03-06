<!DOCTYPE html>
<html lang="en">
<head>
	{{-- Meta --}}
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description"
		  content="Mother of Banter has everything you need for a good laugh. Also it might help you get a girlfriend."/>
	<meta name="keywords"
		  content="Hilarious, Funny, Silly, Stupid, OMG, Seriously?, Elegant, Irresponsible, Immature, Coolest Thing To Ever Happen, Facebook Page, Greatest of 'em all, We are Batman, Funniest, Reason to laugh"/>
	<meta name="author" content="metatags generator">
	<meta meta="revisit-after" content="3 days">
	<meta meta="copyright" content="Copyright © 2015 Mother of Banter. All Rights Reserved.">
	<meta meta="author" content="Mother of Banter">
	<meta meta="language" content="English">
	<meta name="theme-color" content="#2f75ce">
	<!-- Hilarious, Funny, Immature -->
	{{-- Title --}}
	<title>@yield('title')- Mother of Banter</title>
	{{-- Stylesheet --}}
	<link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/css/MotherOfBanter.css') }}">
	<!--[if lt IE 8]><!-->
	<link rel="stylesheet" href="{{ URL::asset('assets/css/ie7.css') }}">
	<!--<![endif]-->
	{{-- Icons EVERY DAMNED SIZE--}}
	<link rel="apple-touch-icon" sizes="57x57" href="{{ URL::asset('assets/img/apple-touch-icon-57x57.png') }}">
	<link rel="apple-touch-icon" sizes="60x60" href="{{ URL::asset('assets/img/apple-touch-icon-60x60.png') }}">
	<link rel="apple-touch-icon" sizes="72x72" href="{{ URL::asset('assets/img/apple-touch-icon-72x72.png') }}">
	<link rel="apple-touch-icon" sizes="76x76" href="{{ URL::asset('assets/img/apple-touch-icon-76x76.png') }}">
	<link rel="apple-touch-icon" sizes="114x114" href="{{ URL::asset('assets/img/apple-touch-icon-114x114.png') }}">
	<link rel="apple-touch-icon" sizes="120x120" href="{{ URL::asset('assets/img/apple-touch-icon-120x120.png') }}">
	<link rel="apple-touch-icon" sizes="144x144" href="{{ URL::asset('assets/img/apple-touch-icon-144x144.png') }}">
	<link rel="apple-touch-icon" sizes="152x152" href="{{ URL::asset('assets/img/apple-touch-icon-152x152.png') }}">
	<link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('assets/img/apple-touch-icon-180x180.png') }}">
	<link rel="icon" type="image/png" href="{{ URL::asset('assets/img/favicon-32x32.png') }}" sizes="32x32">
	<link rel="icon" type="image/png" href="{{ URL::asset('assets/img/favicon-194x194.png') }}" sizes="194x194">
	<link rel="icon" type="image/png" href="{{ URL::asset('assets/img/favicon-96x96.png') }}" sizes="96x96">
	<link rel="icon" type="image/png" href="{{ URL::asset('assets/img/android-chrome-192x192.png') }}" sizes="192x192">
	<link rel="icon" type="image/png" href="{{ URL::asset('assets/img/favicon-16x16.png') }}" sizes="16x16">
	<link rel="manifest" href="{{ URL::asset('assets/img/manifest.json') }}">
	<link rel="mask-icon" href="{{ URL::asset('assets/img/safari-pinned-tab.svg') }}" color="#5bbad5">
	<link rel="shortcut icon" href="{{ URL::asset('assets/img/favicon.ico') }}"> {{-- Icons Meta --}}
	<meta name="msapplication-TileColor" content="#2b5797">
	<meta name="msapplication-TileImage" content="{{ URL::asset('assets/img/mstile-144x144.png') }}">
	<meta name="msapplication-config" content="{{ URL::asset('assets/img/browserconfig.xml') }}">
	{{-- Script --}}
	<script type="text/javascript">window.ParsleyConfig = {
			errorsWrapper: '<div></div>',
			errorTemplate: '<div class="form-authentication__alert alert-danger parsley" role="alert" style="text-align:center;"></div>'
		};</script>
	<script type="text/javascript" src="{{ URL::asset('assets/js/MotherOfBanter.js') }}"></script>
	<script type="text/javascript" src="{{ URL::asset('assets/js/MotherOfBanterScope.js') }}"></script>
</head>
<body>
@include('templates.partials.navigation')
@include('templates.partials.alerts')
@yield('content')
<footer>
	<script type="text/javascript">
		$(document).ready(function () {
			$(".convert-emoji").each(function () {
				var original = $(this).html();
				var converted = emojione.toImage(original);
				$(this).html(converted);
			});
		});
	</script>
	@yield('partialScripts')
</footer>
@stack('javascript')
</body>
</html>