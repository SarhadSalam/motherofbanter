<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/
namespace MotherOfBanter\Http\Controllers;

use MotherOfBanter\Models\Image;
use Illuminate\Http\Request;
use \Input as Input;
use Images;
use Auth;
use Storage;

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
			$filename = str_slug($filenameWithoutExtension . '.' . $imageFile->getClientOriginalExtension());
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
				$largeThumbnailName = 'LARGE_Image' . $filename;
				$this->largeImageHandler($userImage, $largeThumbnailPath, $largeThumbnailName);
			};
			$imageFile->move($path, $filename);
			// Enters the image in the database
			if ($height > '999') {//if deals with large images
				Auth::user()->image()->create([
												  'body' => $request->input('status'),
												  'image_path' => $request->input($path, $path . $largeThumbnailName),
												  'largeImage_path' => $request->input($path, $path . $filename),
												  'url' => $request->input($path, $urlPath)
											  ]);
			} else {
				Auth::user()->image()->create([
												  'body' => $request->input('status'),
												  'image_path' => $request->input($path, $path . $filename),
												  'url' => $request->input($path, $urlPath)
											  ]);
			}
		}
		return redirect()->route('home')->with('success', 'Image Posted');
	}

	//Gets the url of each post.
	public function getPost($url)
	{
		$post = Image::where('url', $url)->first();
		if (!$post) {
			return redirect()->route('home')->with('danger', 'Image Not Found');
		}
		return \View::make('timeline.status_image')->with('images', $post);
	}

	public function largeImageHandler($userImage, $largeThumbnailPath, $largeThumbnailName)
	{
		//Makes the directory
		if (!file_exists($largeThumbnailPath)) {
			mkdir($largeThumbnailPath, 0777, true);
		}
		//Deals with all the problems and fixes them with Intervention Image
		$name = $largeThumbnailPath . $largeThumbnailName;
		$largeImageFit = $userImage->fit(800, 600)->text('For Full Image CLICK ME!', 50, 100, function ($font) {
			$font->file(public_path('assets/fonts/raleway.ttf'));
			$font->size(58);
			$font->color('#66FDFF');
			$font->align('left');
			$font->valign('center');
		});
		$largeImageFit->save($name);
	}

	public function deleteImage($imageURL, LikeController $likeController, CommentController $commentController)
	{
		$image = Image::where('url', $imageURL)->where('user_id', Auth::user()->id)->first();
		if (!$image) {
			return redirect()->route('home')->with('success', 'Something went wrong!');
		}
		$replies = Image::where('parent_id', $image->id)->where('user_id', Auth::user()->id)->first();
		if ($replies) {
			$commentController->deleteRepliesRelations($replies);
		}
		if ($image->largeImage_path) {
			Storage::delete($image->largeImage_path);
		}
		$likeController->checkLikesOrDislikeOnPost($image, $replies);
		Storage::delete($image->image_path);
		$image->delete();
		return redirect()->route('home')->with('info', 'Deleted');
	}
}