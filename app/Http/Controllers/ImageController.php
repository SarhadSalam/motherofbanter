<?php
namespace MotherOfBanter\Http\Controllers;

use MotherOfBanter\Models\User;
use MotherOfBanter\Models\Image;
use Illuminate\Http\Request;
use \Input as Input;
use Images;
use Auth;
use Session;

class ImageController extends Controller {
	//This method controls the Image Posting Feature
	public function postImage(Request $request)
	{
		// Validating the user requests
		$this->validate($request, [
			'status' => 'required|max:2000',
			'images' => 'required|max:3000|image',
		]);
		//Deals with the image posted by the user
		if (Input::hasFile('images')) {
			//The variable containing the image
			$imageFile = Input::file('images');
			//The Filename and path is created
			$uniqid = uniqid();
			$filenameWithoutExtension = $imageFile->getClientOriginalName() . $uniqid;
			$filename = $filenameWithoutExtension . '.' . $imageFile->getClientOriginalExtension();
			$path = 'uploads/statusImages/' . Auth::user()->getIdentifier() . '/images' . '/';
			//We use this for our URL.
			$urlString = strtolower($request->input('status'));
			$urlString = preg_replace("/[^a-z0-9_\s-]/", "", $urlString);//make alphanumeric
			$urlString = preg_replace("/[\s-]+/", " ", $urlString);//remove multiple dashes and whitespaces
			$urlString = preg_replace("/[\s_]/", "-", $urlString);//convert the above to dashes
			$urlPath = $uniqid . $urlString;
			//Dealing with large images.
			$userImage = Images::make($imageFile);
			$height = $userImage->height();
			if ($height > '999') {
				$largeThumbnailPath = public_path($path);
				$largeThumbnailName = 'LARGEImage' . $filename;
				$this->largeImageHandler($path, $filename, $userImage, $largeThumbnailPath, $largeThumbnailName);
			};
			$imageFile->move($path, $filename);
			// Enters the image in the database
			if ($height > '999') {//if deals with large images
				Auth::user()->image()->create([
												  'body'            => $request->input('status'),
												  'image_path'      => $request->input($path, public_path($path . $largeThumbnailName)),
												  'largeImage_path' => $request->input($path, $path . $filename),
												  'url'             => $request->input($path, $urlPath)
											  ]);
			} else {
				Auth::user()->image()->create([
												  'body'       => $request->input('status'),
												  'image_path' => $request->input($path, $path . $filename),
												  'url'        => $request->input($path, $urlPath)
											  ]);
			}
		}

		return redirect()->route('home')->with('success', 'Image Posted');
	}

	//This method deals with what happens after the user replies to an Image
	public function postReply(Request $request, $imageId)
	{
		//Validating the request of the user
		$this->validate($request, [
			"reply-{$imageId}" => 'required|max:1000',
			"images"           => 'max:2000|image',
		], [
							'required' => 'The reply body is required.',
							'image'    => 'Only JPEG, PNG and GIF are allowed.',
							'max'      => 'Only 2 MB is allowed.',
						]);
		//Checking if any image exists.
		if (Input::hasFile('images')) {
			//The variable containing the image
			$imageFile = Input::file('images');
			//The Filename is created and Path
			$uniqid = uniqid();
			$filenameWithoutExtension = $imageFile->getClientOriginalName() . $uniqid;
			$filename = $filenameWithoutExtension . '.' . $imageFile->getClientOriginalExtension();
			$path = 'uploads/statusImages/' . Auth::user()->getIdentifier() . '/';
			//The file is saved
			$imageFile->move($path, $filename);
			//When the user messes with the website and tries to mess with other status by changing the inspect element condition.
			$image = Image::notReply()->find($imageId);
			if (!$image) {
				return redirect()->back()->with('danger', "Oops Something Went Wrong.");
			}
			//The database is associated and saved.
			$reply = Image::create([
									   'body'       => $request->input("reply-{$imageId}"),
									   'image_path' => $request->input($path, $path . $filename)
								   ])->user()->associate(Auth::user());
			$image->replies()->save($reply);

			return redirect()->back()->with('success', 'Comment Posted');
		} else {
			//The database is associated and saved.
			$image = Image::notReply()->find($imageId);
			if (!$image) {
				return redirect()->back()->with('danger', "Oops Something Went Wrong.");
			}
			$reply = Image::create([
									   'body' => $request->input("reply-{$imageId}")
								   ])->user()->associate(Auth::user());
			$image->replies()->save($reply);

			return redirect()->back()->with('success', 'Comment Posted');
		}
	}

	//Gets the url of each post.
	public function getPost($url)
	{
		$post = Image::where('url', $url)->first();
		if(!$post)
		{
			return redirect()->route('home')->with('danger', 'Image Not Found');
		}
		return \View::make('timeline.status_image')->with('image', $post);
	}

	public function largeImageHandler($path, $filename, $userImage, $largeThumbnailPath, $largeThumbnailName)
	{
		//Makes the directory
		if (!file_exists($largeThumbnailPath)) {
			mkdir($largeThumbnailPath, 0777, true);
		}
		//Deals with all the problems and fixes them with Intervention Image
		$name = $largeThumbnailPath . $largeThumbnailName;
		$largeImageFit = $userImage->fit(800, 600)->text('For Full Image CLICK ME!', 50, 100, function($font) {
			$font->file(public_path('assets/fonts/raleway.ttf'));
			$font->size(58);
			$font->color('#66FDFF');
			$font->align('left');
			$font->valign('center');
		});
		$largeImageFit->save($name);
	}

	public function getLike($imageId)
	{
		$image = Image::find($imageId);
		if (!$image) {
			return redirect()->route('home')->with('danger', 'I hope you rot in hell');
		}
		Auth::user()->eitherLikeOrDislike($image, $provider = 'like');
		if (Auth::user()->hasLikedImage($image)) {
			return redirect()->back()->with('success', 'Unliked it.');
		}
		$like = $image->likes()->create([]);
		Auth::user()->likes()->save($like);

		return redirect()->back()->with('success', 'Liked it.');
	}

	public function getDislike($imageId)
	{
		$image = Image::find($imageId);
		if (!$image) {
			return redirect()->route('home')->with('danger', 'I hope you rot in hell');
		}
		Auth::user()->eitherLikeOrDislike($image, $provider = 'dislike');
		//Deal with what if the user likes the image then dislikes it?
		if (Auth::user()->hasDislikedImage($image)) {
			return redirect()->back()->with('success', 'You dis"disliked" it.');
		}
		$dislike = $image->dislikes()->create([]);
		Auth::user()->dislikes()->save($dislike);

		return redirect()->back()->with('success', 'Disliked it.');
	}
}