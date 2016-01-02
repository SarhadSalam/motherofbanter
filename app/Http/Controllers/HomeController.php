<?php
namespace MotherOfBanter\Http\Controllers;

use Auth;
use MotherOfBanter\Models\Image;
use Illuminate\http\Request;
use DB;

class HomeController extends Controller {
	public function index()
	{
		$image = Image::notReply()->orderBy('created_at', 'desc')->paginate(10);
		return view('timeline.index')->with('image', $image);

	}
}