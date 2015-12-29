<?php
namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class ImageDislikeable extends Model {
	protected $table = 'image_dislikeable';

	public function dislikeable()
	{
		return $this->morphTo();
	}

	public function user()
	{
		return $this - belongsTo('MotherOfBanter\Models\User', 'user_id');
	}
}