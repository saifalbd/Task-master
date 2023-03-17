<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function recentTasks(Request $request){
        $user_id = $request->user_id;
        $request->validate([
            'status'=>['required','numeric']
        ]);
        $status = $request->status;
        $items = Task::query()->user($user_id)->archiveList('user',false)->where('status',$status)->with(['category','employee.model.avatar'])->latest()->limit(10)->get();

        return $items;

    }
}
