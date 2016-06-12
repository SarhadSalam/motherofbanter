<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Http\Controllers;

use MotherOfBanter\Models\Image;

class HomeController extends Controller {
	public function index()
	{
		$image = Image::notReply()->orderBy('created_at', 'desc')->paginate(10);
		return view('timeline.index')->with('image', $image);
	}
}
