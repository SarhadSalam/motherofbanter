<?php

namespace MotherOfBanter\Http\Controllers;

use Illuminate\Http\Request;

use MotherOfBanter\Http\Requests;

class VideoController extends Controller
{
    public function getVideoPage()
	{
		return view('video.video');
	}
}
