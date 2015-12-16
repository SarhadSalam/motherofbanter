<?php

namespace MotherOfBanter;

use Illuminate\Contracts\Auth\Guard;
use Laravel\Socialite\Contracts\Factory as Socialite;
use MotherOfBanter\Repositories\UserRepository;
use Request;
use MotherOfBanter\Models\User;

class AuthenticateSocialUser {
  	 private $socialite;
     private $auth;
     private $users;

     public function __construct(Socialite $socialite, Guard $auth, UserRepository $users) {   
        $this->socialite = $socialite;
        $this->users = $users;
        $this->auth = $auth;
    }

    public function execute($request, $listener, $provider) {
       if (!$request) return $this->getAuthorizationFirst($provider);
       if($provider == 'facebook'){
       $user = $this->users->findByFacebookProviderIdOrCreate($this->getSocialUser($provider));
       $this->auth->login($user, true);

       return $listener->userHasLoggedIn($user);
       }

       elseif($provider == 'twitter'){
        if(array_key_exists("denied", $request)){
          return redirect()->route('auth.signin')->with('info', "Couldn't log you in, you denied us permission. ");
        }
        $user = $this->users->findByTwitterProviderIdOrCreate($this->getSocialUser($provider));
        $this->auth->login($user, true);
        return $listener->userHasLoggedIn($user);
       }

       elseif($provider = 'google'){
        $user = $this->users->findByGoogleProviderIdOrCreate($this->getSocialUser($provider));
        $this->auth->login($user, true);
       return $listener->userHasLoggedIn($user);
       }
    }

    private function getAuthorizationFirst($provider) { 
        return $this->socialite->driver($provider)->redirect();
    }

//Edit this to work, jsut uncomment the lines.
    private function getSocialUser($provider) {
      return $this->socialite->driver($provider)->user();
      // $user = $this->socialite->driver($provider)->user();
      // dd($user);
    }
}
