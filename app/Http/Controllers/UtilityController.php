<?php

namespace App\Http\Controllers;

use App\Service\Dropdown;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UtilityController extends Controller
{
    

    public function dropdowns(Request $request,$slug){
        $rep = new Dropdown($request->user_id);

        return $rep->{$slug}();
    }

    public function markAsReadNotify(Request $request, $id){
        $request->validate(['read'=>['required','in:0,1']]);
        $read = $request->read?now():null;
        DB::table('notifications')->where('id',$id)->update(['read_at'=>$read]);
    }
}
