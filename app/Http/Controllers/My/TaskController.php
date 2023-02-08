<?php

namespace App\Http\Controllers\My;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $builder = Task::query()->where('employee_id',$request->user()->id)->with(['category','assigner']);
        $items = $request->all?$builder->get(): $builder->paginate($request->perPage);
        return response()->json($items);
    }
  


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        $task->load(['category','assigner','attachments','comments'=>fn($q)=>$q->with('attachments')->where('parent_id',null)]);
        return response()->json($task);
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

  
}
