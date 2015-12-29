<?php
namespace MotherOfBanter\Models;

use Illuminate\Database\Eloquent\Model;
use MotherOfBanter\Models\User;

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