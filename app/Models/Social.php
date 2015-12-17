<?php

namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;
use MotherOfBanter\Models\User;

class Social extends Model
{
	protected $table = 'social_logins';

	protected $fillable = [
    'user_id',
    'provider',
    'social_id',
    ];

	 public function user()
    {
        return $this->belongsTo('MotherOfBanter\Models\User');
    }
}