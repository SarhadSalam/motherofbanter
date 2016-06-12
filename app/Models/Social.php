<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class Social extends Model {
	protected $table = 'social_logins';

	protected $fillable = [
		'user_id',
		'provider',
		'social_id',
		'username_change',
	];

	public function user()
	{
		return $this->belongsTo('MotherOfBanter\Models\User');
	}
}