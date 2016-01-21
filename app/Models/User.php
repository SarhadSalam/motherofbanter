<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Models;

use Auth;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use MotherOfBanter\Models\Social;
use MotherOfBanter\Models\Image;

class User extends Model implements AuthenticatableContract {
	use Authenticatable;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'username',
		'email',
		'password',
		'first_name',
		'last_name',
		'location',
		'profile_image',
		'activation_code',
		'active',
		'identifier',
		'resent_email_count',
	];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	public function getName()
	{
		if ($this->first_name && $this->last_name) {
			return "{$this-> first_name} {$this -> last_name}";
		}
		if ($this->first_name) {
			return $this->first_name;
		}

		return null;
	}

	public function getNameOrUsername()
	{
		return $this->getName()?: $this->username;
	}

	public function getIdentifier()
	{
		return $this->identifier;
	}

	public function getFirstNameOrUsername()
	{
		return $this->first_name?: $this->username;
	}

	public function getAvatarUrl()
	{
		if ($this->profile_image) {
			return asset($this->profile_image);
		} else {
			return asset('uploads/profileImages/avatar.svg');
		}
	}

	public function hasLikedAlready($id)
	{
		$like = ImageLikeable::where('likeable_id', '=', $id)->where('user_id', $this->id)->first();
		if($like)
		{
			return false;
		}
		return true;
	}

	public function hasDislikedAlready($id)
	{
		$dislike = ImageDislikeable::where('dislikeable_id', $id)->where('user_id', $this->id)->first();
		if($dislike)
		{
			return false;
		}
		return true;
	}

	public function password()
	{
		return $this->hasMany('MotherOfBanter\Models\Password');
	}

	public function image()
	{
		return $this->hasMany('MotherOfBanter\Models\Image', 'user_id');
	}

	public function social()
	{
		return $this->hasMany('MotherOfBanter\Models\Social');
	}

	public function likes()
	{
		return $this->hasMany('MotherOfBanter\Models\ImageLikeable', 'user_id');
	}

	public function dislikes()
	{
		return $this->hasMany('MotherOfBanter\Models\ImageDislikeable', 'user_id');
	}

	public function accountIsActive($code)
	{
		$user = User::where('activation_code', '=', $code)->first();
		if (!$user || $user->activation_code = '' || $user->activation_code = NULL) {
			return redirect()->route('auth.signin')->with('danger', 'Bugger off from whatever you are doing.');
		}
		if ($user->active == 0) {
			$user->active = 1;
			$user->activation_code = '';
			$user->save();
		}

		return true;
	}

	public function hasLikedImage(Image $image)
	{
		if ($image->likes->where('user_id', $this->id)->count()) {
			$image->likes->where('user_id', $this->id)->first()->delete();

			return true;
		}

		return false;
	}

	public function hasDislikedImage(Image $image)
	{
		if ($image->dislikes->where('user_id', $this->id)->count()) {
			$image->dislikes->where('user_id', $this->id)->first()->delete();

			return true;
		}

		return false;
	}

	public function eitherLikeOrDislike($image, $provider)
	{
		if ($provider == 'dislike') {
			$like = $image->likes->where('user_id', $this->id)->first();
			if ($like) {
				$like->delete();
			}

			return true;
		}
		if ($provider == 'like') {
			$dislike = $image->dislikes->where('user_id', $this->id)->first();
			if ($dislike) {
				$dislike->delete();
			}

			return true;
		}

		return false;
	}
}