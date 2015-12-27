<?php

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class ImageLikeable extends Model 
{
	protected $table = 'ImageLikeable';

	public function likeable()
	{
		return $this->morphTo();
	}

	public function user()
	{
		return $this-belongsTo('MotherOfBanter\Models\User', 'user_id');
	}
}