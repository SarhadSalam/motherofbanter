<?php

namespace MotherOfBanter\Models;

use Auth;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

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
    'provider_id',
    'provider',
    'profileImage'
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

    public function friendsOfMine()
    {
        return $this->belongsToMany('MotherOfBanter\Models\User', 'friends', 'user_id', 'friend_id');
    }

    public function friendOf()
    {
        return $this->belongsToMany('MotherOfBanter\Models\User', 'friends', 'friend_id', 'user_id');
    }

    public function friends()
    {
        return $this->friendsOfMine()->wherePivot('accepted', true)->get()->merge($this->friendOf()->wherePivot('accepted', true)->get());
    }

    public function friendRequests()
    {
        return $this->friendsOfMine()->wherePivot('accepted', false)->get();
    }

    public function friendRequestsPending()
    {
        return $this->friendOf()->wherePivot('accepted', false)->get();
    }

    public function hasFriendRequestPending(User $user)
    {
        return (bool) $this->friendRequestsPending()->where('id', $user->id)->count();    
    }

    public function hasFriendRequestReceived(User $user)
    {
        return (bool) $this->friendRequests()->where('id', $user->id)->count();
    }

    public function addFriend(User $user)
    {
        $this->friendOf()->attach($user->id);
    }

    public function acceptFriendRequest(User $user)
    {
        $this->friendRequests()->where('id', $user->id)->first()->pivot->update([
                                           'accepted' => true,                                             
                                        ]);
    }

    public function isFriendsWith(User $user)
    {
        return $this->friends()->where('id', $user->id)->count();
    }
}
