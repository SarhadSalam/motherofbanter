<?php

namespace MotherOfBanter\Http\Controllers;

use Illuminate\http\Request;
use MotherOfBanter\Models\Image;
use MotherOfBanter\Models\Dislikeable;
use MotherOfBanter\Models\Likeable;
use Auth;


class LikeController extends Controller {
	public function getLike($imageId, Request $request)
	{
		if (!$request->ajax()) {
			return redirect()->route('home')->with('success', 'Something went terribly wrong.');
		}
		$image = Image::find($imageId);
		if (!$image) {
			return redirect()->route('home')->with('danger', 'The image doesn\'t exist.');
		}
		Auth::user()->eitherLikeOrDislike($image, $provider = 'like');
		if (Auth::user()->hasLikedImage($image)) {
			return redirect()->back()->with('success', 'Unliked it.');
		}
		$like = $image->likes()->create([]);
		Auth::user()->likes()->save($like);
		return redirect()->back()->with('success', 'Liked it.');
	}
	
	public function getDislike($imageId, Request $request)
	{
		if (!$request->ajax()) {
			return redirect()->route('home')->with('success', 'You have been a very very naughty boy.');
		}
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
	
	public function checkLikesOrDislikeOnPost($image, $replies)
	{
		$likes = Likeable::where('likeable_id', $image->id)->first();
		$dislikes = Dislikeable::where('dislikeable_id', $image->id)->first();
		if ($likes) {
			$likes->delete();
		};
		if ($dislikes) {
			$dislikes->delete();
		};
	}
}