<?php

namespace MotherOfBanter\Repositories;

use MotherOfBanter\Models\User;
use MotherOfBanter\Models\Social;
use Illuminate\Contracts\Auth\Guard;
use Socialite;

class UserRepository
{
	protected $auth;
    public function __construct( Guard $auth)
    {
        $this->auth = $auth;
    }
	public function handleSocialUsers($provider)		
	{
		$user = Socialite::driver($provider)->user();
		$socialUser = null;
		$userCheck = User::where('email', '=', $user->email)->first();
		$specialId = substr($user->id, 0, 4);
		$username = str_replace(" ", "", $user->name);
		$specialUsername = $username.$specialId;
		$identifier = uniqid().sha1(mt_rand(90, 120).str_random(20)).time()."SOSNUP";
		//This checks if the email already exists in our database.
		if(!empty($userCheck))
		{
			$socialUser = $userCheck;
			$this->checkIfUserNeedsUpdating($userCheck);
		} else //Otherwise we search for the social user
		{
			$sameSocialId = Social::where('social_id', '=', $user->id)->where('provider', '=', $provider)->first();

			// If there is no existing user this gets called
			if(empty($sameSocialId))
			{
				$newSocialUser = new User;
				$newSocialUser->email = $user->email;
				$newSocialUser->username = $specialUsername;
				//This checks if the users name has multiple words.
				if(strpos($user->name, " ")){
					$name = explode(' ', $user->name);
					$newSocialUser->first_name = $name[0];
					$newSocialUser->last_name = $name[1];
				} else {
					$newSocialUser->first_name = $user->name;
				}
				$newSocialUser->active = true;
				//Getting the avatar
				if($provider == 'facebook'){
					$newSocialUser->profile_image = $user->avatar_original;
					$newSocialUser->identifier = $identifier."FB";
				}
				if($provider == 'google'){
					$googleAvatarBig = substr_replace($user->avatar, '500', -2);
					$newSocialUser->profile_image = $googleAvatarBig;
					$newSocialUser->identifier = $identifier."GOOG";
				}
				$newSocialUser->save();

				$socialData = new Social;
				$socialData->social_id = $user->id;
				$socialData->provider = $provider;
				$newSocialUser->social()->save($socialData);
				$socialUser = $newSocialUser;
			} else //This is called when the user exists
			{
				$socialUser = $sameSocialId->user;
			}
		}
		$this->auth->login($socialUser, true);
	}

	public function checkIfUserNeedsUpdating($userCheck)			
	{
		if($userCheck->active == 0){
			$userCheck->active = 1;
			$userCheck->activation_code = '';
			$userCheck->save();
		}
	}
}