<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class ImageLikeable extends Model {
	protected $table = 'image_likeable';

	protected $fillable = [
		'id',
		'likeable_type'
	];

	public function likeable()
	{
		return $this->morphTo();
	}

	public function user()
	{
		return $this -> belongsTo('MotherOfBanter\Models\User', 'user_id');
	}

	public function image()
	{
		return $this->belongsTo('MotherOfBanter\Models\Image', 'likeable');
	}
}