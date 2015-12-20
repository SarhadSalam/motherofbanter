<?php 

namespace MotherOfBanter\Http\Controllers;

use Auth;
use Illuminate\http\Request;
use MotherOfBanter\Models\User;
use MotherOfBanter\Models\Social;
use Illuminate\Contracts\Auth\Guard;
use Socialite;
use Mail;
use MotherOfBanter\Traits\CaptchaTrait;

class AuthController extends Controller
{
	use CaptchaTrait;
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
		                'g-recaptcha-response' => 'required',
		                ]);

		if($this->captchaCheck() == false){
			return redirect()->back()->with('danger', 'Wrong Captcha');
		}
		//Activation code & mailData to be passed on to view
		$activationCode = sha1(mt_rand(60, 90)."MOB".str_random(30));
		$mailData = array(
		                  'username' => $request->input('username'),
		                  'code' => $activationCode 
		                  );

		$user = User::create([
		             	'email' => $request->input('email'),
		             	'username' => $request->input('username'),
		             	'password' => bcrypt($request->input('password')),
		             	'activation_code' => $activationCode,
		             ]);

		Mail::queue('email.activateAccount', $mailData, function($message)use($user){
			$message->subject('Activate Your Account');
			$message->to($user->email);
		});

		return redirect()->route('auth.verify')->with('success', 'Your account has been created and you can now activate your account by visiting your email.');
	}

	public function getSignin()
	{
		return view('auth.signin');
	}

	public function postSignin(Request $request)
	{
		$field = filter_var($request->input('login'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

		if (!Auth::attempt(array($field=> $request->input('login'), 'password' => $request->input('password')), true)) {
			return redirect()->back()->with('danger', 'Error 404, Your details aren\'t right. Please try again.');
		}
		$user = Auth::getLastAttempted();
		if($user->activation == 0){
			Auth::logout();
			return redirect()->route('auth.verify')->with('danger', 'Please activate your account. Please check your account for an email.');
		} elseif($user->activation == 1){
			return redirect()->route('home')->with('success', 'You have logged in successfully.');
		}
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
			return redirect()->route('auth.signin')->with('danger', 'Oops, No such provider.');
		}

		return Socialite::driver($provider)->redirect();
	}

	//This handles the data provided to us by the user
	public function getSocialHandle($provider)
	{
		//This checks if the user denies us permission.
		 $code = \Input::get('code');
        if(!$code){
            return redirect()->route('auth.signin')
                ->with('danger', 'You did not share your profile data with us.');
        }
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
					$newSocialUser->activation = true;
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
			} else //This is called when the user exists
			{
				$socialUser = $sameSocialId->user;
			}
		}
		$this->auth->login($socialUser, true);
		return redirect()->route('home')->with('success', 'You are inside the coolest of networks.');
	}

	public function activateAccount($code, User $user)
	{
		if($user->accountIsActive($code)){
			return redirect()->route('auth.signin')->with('success', 'Your account has been activated. You can now log in.');
		}
		return redirect()->route('auth.signup')->with('danger', 'Sorry, couldn\'t activate your account. Please try again. I believe it\'s already activated');
	}

	public function getActivation()
	{
		return view('auth.verify');
	}
}