<?php

namespace MotherOfBanter\Http\Controllers;

use Auth;
use Mail;
use Illuminate\Http\Request;
use MotherOfBanter\Models\User;
use MotherOfBanter\Models\Password;
use MotherOfBanter\Traits\CaptchaTrait;

class PasswordController extends Controller
{
    use CaptchaTrait;
   public function getForgotPassword()
   {
        return view('auth.forgot_password');
   }

   public function postForgotPassword(Request $request)
   {
       $this->validate($request, [
                       'email' => 'required|email|max:255',
                       'g-recaptcha-response' => 'required',
                       ]);
       if($this->captchaCheck() == false){
            return redirect()->back()->with('danger', 'Wrong Captcha');
        }
        $user = User::where('email', '=', $request->input('email'))->first();
        if(!$user){
            return redirect()->back()->with('danger', 'Failed to find the provided email.');
        }
        $activationCode = sha1(mt_rand(60, 90)."MOB".str_random(30)).uniqid();
        $mailData = array(
                          'username' => $user->username,
                          'code' => $activationCode
                          );
        $password = new Password;
        $password->reset_token = $activationCode;
        $password->user_id = $user->id;
        $user->password()->save($password);
        Mail::queue('email.reset_password', $mailData, function($message)use($user){
            $message->subject('Reset Your Account Password');
            $message->to($user->email);
        });
        return redirect()->back()->with('danger', 'Sent you an email with instructions on how to reset your password.');
   }

   public function getResetPasswordCode($code)      
   {
       $password = Password::where('reset_token', '=', $code)->first();
       if(!$password){
        return redirect()->route('auth.signin')->with('danger', 'Invalid Token. Access Denied');
       }
       return view('auth.reset_password')->with('reset_code', $password);
   }

   public function postResetPasswordCode($code, Request $request)
   {
       $this->validate($request, [
                          'email' => 'required|email|max:255',
                          'password' => 'required|min:6|confirmed',
                          'password_confirmation' => 'required|min:6',
                       ]);

       $user = User::where('email', '=', $request->input('email'))->first();
       if(!$user){
        return redirect()->route('auth.signin')->with('danger', 'Something is wrong. Ooopsie.');
       }
       $reset_token = Password::where('user_id', '=', $user->id)->where('reset_token', '=', $code)->first();
       if(!$reset_token){
          return redirect()->route('auth.signin')->with('danger', 'Oops, Something went wrong. Try again.');
       }
       $user->update([
                     'password' => bcrypt($request->input('password')),]);
       $reset_token->delete();
       Auth::login($user);
       return redirect()->route('home')->with('success', 'Password Reset Sucessfull!');
   }
}