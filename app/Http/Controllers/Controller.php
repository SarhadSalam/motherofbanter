<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

namespace MotherOfBanter\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

abstract class Controller extends BaseController {
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
