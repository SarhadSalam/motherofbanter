<?php 

namespace MotherOfBanter\Repositories;
use MotherOfBanter\Models\User;

class UserRepository {
	public function findByUserNameOrCreate($userData) {
		$user = User::where('provider_id', '=', $userData->id)->first();
		if(!$user) {
			$user = User::create([
			                     'provider_id' => $userData->id,
			                     'username' => $userData->user['first_name'],
			                     'first_name' => $userData->user['first_name'],
			                     'last_name' => $userData->user['last_name'],
			                     'email' => $userData->email,
			                     ]);
		}

		$this->checkIfUserNeedsUpdating($userData, $user);
		return $user;
	}

	public function checkIfUserNeedsUpdating($userData, $user) {
        $socialData = [
            'email' => $userData->email,
            'username' => $userData->user['first_name'],
            'first_name' => $userData->user['first_name'],
            'last_name' => $userData->user['last_name'],
        ];
        $dbData = [
            'email' => $user->email,
            'username' => $user->username,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
        ];

        if (!empty(array_diff($socialData, $dbData))) {
            $user->email = $userData->email;
            $user->username = $userData->user['first_name'];
            $user->first_name = $userData->user['first_name'];
            $user->last_name = $userData->user['last_name'];
            $user->save();
        }
    }
}