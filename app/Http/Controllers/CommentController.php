<?php
namespace MotherOfBanter\Http\Controllers;

use Illuminate\Http\Request;
use MotherOfBanter\Models\Likeable;
use MotherOfBanter\Models\Dislikeable;
use MotherOfBanter\Http\Requests;
use Auth;
use Input;
use MotherOfBanter\Models\Image;

class CommentController extends Controller {
	//This method deals with what happens after the user replies to an Image
	public function postReply(Request $request, $imageId)
	{
		//Validating the request of the user
		$this->validate($request, [
			"reply-{$imageId}" => 'required|max:1000',
			"images" => 'max:2000|image',
		], [
							'required' => 'The reply body is required.',
							'image' => 'Only JPEG, PNG and GIF are allowed.',
							'max' => 'Only 2 MB is allowed.',
						]);
		//Checking if any image exists.
		if (Input::hasFile('images')) {
			//The variable containing the image
			$imageFile = Input::file('images');
			//The Filename is created and Path
			$uniqid = uniqid();
			$filenameWithoutExtension = $imageFile->getClientOriginalName() . $uniqid;
			$filename = str_slug($filenameWithoutExtension . '.' . $imageFile->getClientOriginalExtension());
			$path = 'uploads/statusImages/' . Auth::user()->getIdentifier() . '/comments/';
			//The file is saved
			$imageFile->move($path, $filename);
			//When the user messes with the website and tries to mess with other status by changing the inspect element condition.
			$image = Image::notReply()->find($imageId);
			if (!$image) {
				return redirect()->back()->with('danger', "Oops Something Went Wrong.");
			}
			//The database is associated and saved.
			$reply = Image::create([
									   'body' => $request->input("reply-{$imageId}"),
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

	public function deleteRepliesRelations($reply)
	{
		$like = Likeable::where('likeable_id', $reply->id)->first();
		if ($like) {
			$like->delete();
		}
		$dislike = Dislikeable::where('dislikeable_id', $reply->id)->first();
		if ($dislike) {
			$dislike->delete();
		}
		if ($reply->image_path != NULL) {
			Storage::delete($reply->image_path);
		}
		$reply->delete();
	}
	
	public function deleteComment($imageURL, $commentId)
	{
		$image = Image::where('url', $imageURL)->first();
		$reply = Image::whereNotNull('parent_id')->where('id', $commentId)->where('user_id', Auth::user()->id)->first();
		if (!$reply || !$image) {
			return redirect()->back()->with('danger', 'Something went wrong!');
		}
		$this->deleteRepliesRelations($reply);
		return redirect()->back()->with('info', 'Deleted');
	}
}
