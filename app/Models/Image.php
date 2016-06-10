<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model {
	protected $table = 'images';

	protected $fillable = [
		'body',
		'image_path',
		'url',
		'id',
		'largeImage_path'
	];

	public function user()
	{
		return $this->belongsTo('MotherOfBanter\Models\User', 'user_id');
	}

	public function scopeNotReply($query)
	{
		return $query->whereNull('parent_id');
	}

	public function replies()
	{
		return $this->hasMany('MotherOfBanter\Models\Image', 'parent_id');
	}

	public function paginatingReplies()
	{
		return $this->replies()->orderBy('created_at', 'desc')->paginate(15);
	}

	public function likes()
	{
		return $this->morphMany('MotherOfBanter\Models\Likeable', 'likeable');
	}

	public function dislikes()
	{
		return $this->morphMany('MotherOfBanter\Models\Dislikeable', 'dislikeable');
	}

}