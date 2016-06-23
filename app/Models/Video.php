<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
	protected $table = 'videos';

	protected $fillable = [
		'body',
		'embedded_video',
		'id',
		'user_id',
		'url',
		'video_path'
	];

	public function user()
	{
		return $this->belongsTo('MotherOfBanter\Models\User', 'user_id');
	}
}
