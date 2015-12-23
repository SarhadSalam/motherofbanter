<?php

namespace MotherOfBanter\Models;

use Auth;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use MotherOfBanter\Models\Social;

class User extends Model implements AuthenticatableContract
{
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
    'profileImage',
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
        if ($this -> first_name && $this -> last_name){
            return "{$this-> first_name} {$this -> last_name}";
        }

        if ($this->first_name) {
            return $this->first_name;
        }

        return null;
    }

    public function getNameOrUsername()
    {
        return $this->getName() ?: $this->username;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getFirstNameOrUsername()
    {
        return $this->first_name ?: $this->username;
    }

    public function getAvatarUrl()
    { 
        if($this -> profileImage)
        {
           return asset($this->profileImage);
        }
        else
        {
            return asset('uploads/profileImages/avatar.svg');
        }
    }

    public function image()
    {
        return $this->hasMany('MotherOfBanter\Models\Image', 'user_id');
    }

    public function social()
    {
        return $this->hasMany('MotherOfBanter\Models\Social');
    }

    public function accountIsActive($code)
    {
        $user = User::where('activation_code', '=', $code)->first();
        if($user->active == 0){
            $user->active = 1;
            $user->activation_code = '';
            $user->save();
        }
        return true;
    }

    public function password()
    {
        return $this->hasMany('MotherOfBanter\Models\Password');
    }
}
