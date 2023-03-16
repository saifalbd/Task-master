<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function recentTasks(Request $request){
        $user_id = $request->user_id;
        $items = Task::query()->user($user_id)->archiveList('user',false)->with(['category','employee.model.avatar'])->limit(10)->get();

        return $items;

    }
}
