<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function recentTasks(Request $request){
        $user_id = $request->user_id;
        $request->validate([
            'status'=>['required','numeric'],
            'employee'=>['nullable','numeric']
        ]);
        $status = $request->status;
        $employee = $request->employee;
        $items = Task::query()->user($user_id)
        ->archiveList('user',false)->where('status',$status)
        ->when($employee,fn($q)=>$q->employee($employee))
        ->with(['category','employee.model.avatar'])->latest()->limit(10)->get();
        return $items;
    }

    public function recentJobTasks(Request $request){
        $user_id = $request->user_id;
        $request->validate([
            'status'=>['required','numeric']
        ]);
        $status = $request->status;
        $items = Task::query()->archiveList('employee',false)->where('status',$status)->whereHas('employee',function($q)use($user_id){
            $q->where('employee_id',$user_id);
        })->with(['category','assigner.avatar'])->latest()->limit(10)->get();
        return $items;
    }
}
