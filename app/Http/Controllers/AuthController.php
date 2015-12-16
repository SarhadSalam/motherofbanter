<?php 

namespace MotherOfBanter\Http\Controllers;

use Auth;
use Illuminate\http\Request;
use MotherOfBanter\Models\User;
use MotherOfBanter\AuthenticateSocialUser;

class AuthController extends Controller
{
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

	public function postSocialSignIn(AuthenticateSocialUser $authenticateSocialUser, Request $request, $provider = null)
	{
		return $authenticateSocialUser->execute($request->all(), $this, $provider);
	}

	public function userHasLoggedIn($user){
		Auth::login($user);
		return redirect()->route('home');
	}

	public function getSignout()
	{
		Auth::logout();

		return redirect()->back()->with('info', 'Sad to see you go! Hope you visit back.');
	}
}