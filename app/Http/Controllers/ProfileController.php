<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Http\Controllers;

use Auth;
use MotherOfBanter\Models\User;
use Illuminate\Http\Request;
use \Input as Input;
use MotherOfBanter\Models\Social;

class ProfileController extends Controller {
	public function getProfile($username)
	{
		$user = User::where('username', $username)->first();
		if (!$user) {
			abort(404);
		}
		$image = $user->image()->notReply()->orderBy('created_at', 'desc')->paginate(1);

		return view('profile.index')->with('user', $user)->with('user', $user)->with('image', $image);
	}
	
	public function getEdit()
	{
		return view('profile.edit');
	}

	public function postEdit(Request $request)
	{
		$this->validate($request, [
			'first_name'            => 'alpha_dash|max:50',
			'last_name'             => 'alpha_dash|max:50',
			'password'              => 'min:6|confirmed',
			'password_confirmation' => 'min:6',
			'location'              => 'max:200',
			'images'                => 'max:3000|image',
			'username'              => 'max:32|unique:users|alpha_dash'
		], [
							'image' => 'Only JPEG, PNG and GIF are allowed.',
							'max'   => 'Only 2 MB is allowed.',
						]);
		if (Input::hasFile('images')) {
			$imageFile = Input::file('images');
			$filename = $imageFile->getClientOriginalName() . uniqid() . $imageFile->getClientOriginalExtension();
			$path = 'uploads/profileImages/' . Auth::user()->getIdentifier() . '/';
			$imageFile->move($path, $filename);
			Auth::user()->update([
									 'profile_image' => $request->input($path, $path . $filename),
								 ]);
		}
		if (Input::has('password')) {
			Auth::user()->update([
									 'password' => bcrypt($request->input('password')),
								 ]);
		}
		if (Input::has('username')) {
			Auth::user()->update([
									 'username' => $request->input('username'),
								 ]);
			$social = Social::where('user_id', '=', Auth::user()->id)->first();
			$social->update([
								'username_change' => 1,
							]);
		}
		Auth::user()->update([
								 'first_name' => $request->input('first_name'),
								 'last_name'  => $request->input('last_name'),
								 'location'   => $request->input('location'),
							 ]);

		return redirect()->route('profile.edit')->with('success', "Your Profile Has Been Updated.");
	}
}