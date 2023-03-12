<?php

namespace App\Http\Controllers;

use App\Service\Dropdown;
use Illuminate\Http\Request;

class UtilityController extends Controller
{
    

    public function dropdowns(Request $request,$slug){
        $rep = new Dropdown($request->user_id);

        return $rep->{$slug}();
    }
}
