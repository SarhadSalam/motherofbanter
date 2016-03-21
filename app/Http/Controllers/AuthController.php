<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
// ******************************************************************************/

namespace MotherOfBanter\Http\Controllers;

use Auth;
use Illuminate\http\Request;
use MotherOfBanter\Models\User;
use Illuminate\Contracts\Auth\Guard;
use Socialite;
use Mail;
use MotherOfBanter\Traits\CaptchaTrait;
use MotherOfBanter\Repositories\UserRepository;

class AuthController extends Controller {
	use CaptchaTrait;

	public function getSignup()
	{
		return view('auth.signup');
	}

	public function postSignup(Request $request)
	{
		$this->validate($request, [
			'email'                 => 'required|unique:users|email|max:255',
			'username'              => 'required|unique:users|alpha_dash|max:32',
			'password'              => 'required|min:6|confirmed',
			'password_confirmation' => 'required|min:6',
			'g-recaptcha-response'  => 'required',
		]);
		if ($this->captchaCheck() == false) {
			return redirect()->back()->with('danger', 'Wrong Captcha');
		}
		$identifier = uniqid() . sha1(mt_rand(90, 120) . str_random(20)) . time() . "SNUP";
		//Activation code & mailData to be passed on to view
		$activationCode = sha1(mt_rand(60, 90) . "MOB" . str_random(30));
		$mailData = array(
			'username' => $request->input('username'),
			'code'     => $activationCode
		);
		$user = User::create([
								 'email'           => $request->input('email'),
								 'username'        => $request->input('username'),
								 'password'        => bcrypt($request->input('password')),
								 'activation_code' => $activationCode,
								 'identifier'      => $identifier,
							 ]);
		$this->sendMail($mailData, $user);

		return view('auth.verify')->with('success', 'Your account has been created and you can now activate your account by visiting your email.')->with('identifier', $identifier);
	}

	public function resendSignedUpUserMail($identifier)
	{
		$user = User::where('identifier', '=', $identifier)->first();
		if (!$user || $user->active == 1) {
			return redirect()->route('auth.signin')->with('danger', 'Something went wrong.');
		}
		if ($user->resent_email_count < 5) {
			$mailData = array(
				'username' => $user->username,
				'code'     => $user->activation_code,
			);
			$this->resendMail($mailData, $user);

			return view('auth.verify')->with('warning', 'Please activate your account. Please check your account for an email. We have resent the email.')->with('identifier', $identifier);
		}

		return view('auth.signin')->with('danger', 'Sorry, We couldn\'t send you an email as you crossed our limit.');
	}

	public function getSignin()
	{
		return view('auth.signin');
	}

	public function postSignin(Request $request)
	{
		$field = filter_var($request->input('login'), FILTER_VALIDATE_EMAIL)? 'email' : 'username';
		if (!Auth::attempt(array($field => $request->input('login'), 'password' => $request->input('password')), true)) {
			return redirect()->back()->with('danger', 'Error 404, Your details aren\'t right. Please try again.');
		}
		$user = Auth::getLastAttempted();
		if ($user->active == 0) {
			Auth::logout();
			if ($user->resent_email_count < 5) {
				$mailData = array(
					'username' => $request->input('username'),
					'code'     => $user->activation_code,
				);
				$this->resendMail($mailData, $user);

				return view('auth.verify')->with('warning', 'Please activate your account. Please check your account for an email. We have resent the email.')->with('identifier', $user->identifier);
			}

			return view('auth.verify')->with('danger', 'Sorry, We couldn\'t send you an email as you crossed our limit.');
		} elseif ($user->active == 1) {
			return redirect()->route('home')->with('success', 'You have logged in successfully.');
		}
	}

	public function sendMail($mailData, $user)
	{
		Mail::queue('email.activate_account', $mailData, function($message) use ($user) {
			$message->subject('Activate Your Account');
			$message->to($user->email);
		});
	}

	public function resendMail($mailData, $user)
	{
		$this->sendMail($mailData, $user);
		$user->resent_email_count = $user->resent_email_count + 1;
		$user->save();
	}

	public function activateAccount($code, User $user)
	{
		if ($user->accountIsActive($code)) {
			return redirect()->route('auth.signin')->with('success', 'Your account has been activated. You can now log in.');
		}

		return redirect()->route('auth.signup')->with('danger', 'Sorry, couldn\'t activate your account. Please try again. I believe it\'s already activated');
	}

	//This gets the redirect of the user
	public function getSocialRedirect($provider)
	{
		$providerKey = \Config::get('services.' . $provider);
		if (empty($providerKey)) {
			return redirect()->route('auth.signin')->with('danger', 'Oops, No such provider.');
		}

		return Socialite::driver($provider)->redirect();
	}

	//This handles the data provided to us by the user
	public function getSocialHandle($provider, UserRepository $userRepository)
	{
		//This checks if the user denies us permission.
		$code = \Input::get('code');
		if (!$code) {
			return redirect()->route('auth.signin')
				->with('danger', 'You did not share your profile data with us.');
		}
		$userRepository->handleSocialUsers($provider);

		return redirect()->route('home')->with('success', 'You are inside the coolest of networks.');
	}

	public function getSignout()
	{
		Auth::logout();

		return redirect()->back()->with('info', 'Sad to see you go! Hope you visit back.');
	}

	public function usernameExists(Request $request)
	{
		if(!$request->ajax())
		{
			return redirect()->route('home')->with('success', 'Something was wrong.');
		}
		$username = $request->query('username');
		$user = User::where('username', '=', $username)->first();
		if ($user) {
			echo FALSE;
		}
		else {
			echo TRUE;
		}
	}
}
