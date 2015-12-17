<?php 

namespace MotherOfBanter\Http\Controllers;

use Auth;
use Illuminate\http\Request;
use MotherOfBanter\Models\User;
use MotherOfBanter\Models\Social;
use Illuminate\Contracts\Auth\Guard;
use Socialite;

class AuthController extends Controller
{
	protected $auth;
    public function __construct( Guard $auth)
    {
        $this->auth = $auth;
    }

	public function getSignup()
	{
		return view('auth.signup');
	}

	public function postSignup(Request $request)
	{
		$this->validate($request, [
		                'email' => 'required|unique:users|email|max:255',
		                'username' => 'required|unique:users|alpha_dash|max:32',
		                'password' => 'required|min:6|confirmed',
		                'password_confirmation' => 'required|min:6',
		                'g-recaptcha-response' => 'required|captcha'
		                ]);

		User::create([
		             	'email' => $request->input('email'),
		             	'username' => $request->input('username'),
		             	'password' => bcrypt($request->input('password')), 
		             ]);

		return redirect()->route('auth.signin')->with('info', 'Your account has been created and you can now sign in. I would like to welcome you to the face of the INTERNET!!!!');
}

	public function getSignin()
	{
		return view('auth.signin');
	}

	public function postSignin(Request $request)
	{
		$field = filter_var($request->input('login'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

		if (!Auth::attempt(array($field=> $request->input('login'), 'password' => $request->input('password')), true)) {
			return redirect()->back()->with('info', 'Error 404, Your details aren\'t right. Please try again.');
		}

		return redirect()->route('home')->with('info', 'You are now signed in.');
	}

	public function getSignout()
	{
		Auth::logout();

		return redirect()->back()->with('info', 'Sad to see you go! Hope you visit back.');
	}

	//Everything related to social authentication and database entries goes in here

	//This gets the redirect of the user	
	public function getSocialRedirect($provider)
	{
		$providerKey = \Config::get('services.' . $provider);
		if(empty($providerKey)){
			return view('auth.sigin')->with('info', 'Oops, No such provider.');
		}

		return Socialite::driver($provider)->redirect();
	}

	//This handles the data provided to us by the user
	public function getSocialHandle($provider)
	{
		$user = Socialite::driver($provider)->user();
		$socialUser = null;
		$userCheck = User::where('email', '=', $user->email)->first();
		$specialId = substr($user->id, 0, 4);
		$username = str_replace(" ", "", $user->name);
		$specialUsername = $username.$specialId;
		//This checks if the email already exists in our database.
		if(!empty($userCheck))
		{
			$socialUser = $userCheck;
		}
		else //Otherwise we search for the social user
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
				//Getting the avatar
				if($provider == 'twitter' || $provider == 'facebook'){
					$newSocialUser->profileImage = $user->avatar_original;
				}
				if($provider == 'google'){
					$googleAvatarBig = substr_replace($user->avatar, '500', -2);
					$newSocialUser->profileImage = $googleAvatarBig;
				}
				$newSocialUser->save();

				$socialData = new Social;
				$socialData->social_id = $user->id;
				$socialData->provider = $provider;
				$newSocialUser->social()->save($socialData);
				$socialUser = $newSocialUser;
			}
			else //This is called when the user exists
			{
				$socialUser = $sameSocialId->user;
			}
		}
		$this->auth->login($socialUser, true);

		return redirect()->route('home')->with('You are inside the coolest of networks.');
	}
}