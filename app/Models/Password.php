<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;

class Password extends Model {
	protected $table = 'password_resets';

	protected $fillable = [
		'user_id',
		'reset_token',
	];

	public function user()
	{
		return $this->belongsTo('MotherOfBanter\Models\User');
	}
}