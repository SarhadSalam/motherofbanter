<?php 

namespace MotherOfBanter\Repositories;
use MotherOfBanter\Models\User;

class UserRepository {

    //Facebook functions below
	public function findByFacebookProviderIdOrCreate($userData) {
		$user = User::where('provider_id', '=', $userData->id)->first();
		if(!$user) {
            $specialId = substr($userData->id, 0, 4);
            $facebookUsername = $userData->user['first_name'].$specialId;
			$user = User::create([
			                     'provider_id' => $userData->id,
			                     'username' => $facebookUsername,
			                     'first_name' => $userData->user['first_name'],
			                     'last_name' => $userData->user['last_name'],
			                     'email' => $userData->email,
                                 'provider' => 'Facebook',
                                 'profileImage' => $userData->avatar_original,
			                     ]);
		}
		$this->checkIfFacebookUserNeedsUpdating($userData, $user);
		return $user;
	}

	public function checkIfFacebookUserNeedsUpdating($userData, $user) {
        $specialId = substr($userData->id, 0, 4);
        $facebookUsername = $userData->user['first_name'].$specialId;
        $socialData = [
            'email' => $userData->email,
            'username' => $facebookUsername,
            'first_name' => $userData->user['first_name'],
            'last_name' => $userData->user['last_name'],
            'profileImage' => $userData->avatar_original,
        ];
        $dbData = [
            'email' => $user->email,
            'username' => $user->username,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'profileImage' => $user->profileImage,
        ];

        if (!empty(array_diff($socialData, $dbData))) {
            $user->email = $userData->email;
            $user->username = $facebookUsername;
            $user->first_name = $userData->user['first_name'];
            $user->last_name = $userData->user['last_name'];
            $user->profileImage = $userData->avatar_original;
            $user->save();
        }
    }

    //Twitter functions below
    public function findByTwitterProviderIdOrCreate($userData) {
        $user = User::where('provider_id', '=', $userData->id)->first();
        if(!$user) {
            $specialId = substr($userData->id, 0, 4);
            $strippedTwitterUsername = str_replace(" ", "", $userData->name);
            $twitterUsername = $strippedTwitterUsername.$specialId;
            $user = User::create([
                                 'provider_id' => $userData->id,
                                 'username' => $twitterUsername,
                                 'first_name' => $userData->name,
                                 'email' => $userData->email,
                                 'provider' => 'Twitter',
                                 'profileImage' => $userData->avatar_original,
                                 ]);
        }
        $this->checkIfTwitterUserNeedsUpdating($userData, $user);
        return $user;
    }

    public function checkIfTwitterUserNeedsUpdating($userData, $user) {
        $specialId = substr($userData->id, 0, 4);
        $strippedTwitterUsername = str_replace(" ", "", $userData->name);
        $twitterUsername = $strippedTwitterUsername.$specialId;
        $socialData = [
            'email' => $userData->email,
            'username' => $twitterUsername,
            'first_name' => $userData->name,
            'profileImage' => $userData->avatar_original,
        ];
        $dbData = [
            'email' => $user->email,
            'username' => $user->username,
            'first_name' => $user->first_name,
            'profileImage' => $user->profileImage,
        ];

        if (!empty(array_diff($socialData, $dbData))) {
            $user->email = $userData->email;
            $user->username = $twitterUsername;
            $user->first_name = $userData->name;
            $user->profileImage = $userData->avatar_original;
            $user->save();
        }
    }

    //Google functions below
    public function findByGoogleProviderIdOrCreate($userData) {
        $user = User::where('provider_id', '=', $userData->id)->first();
        if(!$user) {
            $specialId = substr($userData->id, 0, 4);
            $strippedGoogleUsername = str_replace(" ", "", $userData->name);
            $googleUsername = $strippedGoogleUsername.$specialId;
            $googleAvatarBig = substr_replace($userData->avatar, '500', -2);
            $user = User::create([
                                 'provider_id' => $userData->id,
                                 'username' => $googleUsername,
                                 'first_name' => $userData->name,
                                 'email' => $userData->email,
                                 'provider' => 'Google',
                                 'profileImage' => $googleAvatarBig,
                                 ]);
        }
        $this->checkIfGoogleUserNeedsUpdating($userData, $user);
        return $user;
    }

    public function checkIfGoogleUserNeedsUpdating($userData, $user) {
        $specialId = substr($userData->id, 0, 4);
        $strippedGoogleUsername = str_replace(" ", "", $userData->name);
        $googleUsername = $strippedGoogleUsername.$specialId;
        $googleAvatarBig = substr_replace($userData->avatar, '500', -2);
        $socialData = [
            'email' => $userData->email,
            'username' => $googleUsername,
            'first_name' => $userData->name,
            'profileImage' => $googleAvatarBig,
        ];
        $dbData = [
            'email' => $user->email,
            'username' => $user->username,
            'first_name' => $user->first_name,
            'profileImage' => $user->profileImage,
        ];

        if (!empty(array_diff($socialData, $dbData))) {
            $user->email = $userData->email;
            $user->username = $googleUsername;
            $user->first_name = $userData->name;
            $user->profileImage = $googleAvatarBig;
            $user->save();
        }
    }
}