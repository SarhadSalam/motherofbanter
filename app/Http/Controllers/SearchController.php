<?php 

namespace MotherOfBanter\Http\Controllers;

use MotherOfBanter\Models\User;
use Illuminate\Http\Request;
use DB;

class SearchController extends Controller
{
	public function getResults(Request $request)
	{
		$query = $request->input('query');

			if(!$query){
				return redirect()->back();
			}

			$users = User::where(DB::raw("CONCAT(first_name, ' ', last_name)"), 'LIKE', "%{$query}%")-> orWhere('username', 'LIKE', "%{$query}%")->get();

		return view('search.results')->with('users', $users);
	}
}