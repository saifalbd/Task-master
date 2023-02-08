<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Models\Task;
use App\Models\User;
use App\Notifications\TaskAssigned;
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
        $builder = Task::query()->user($request->user()->id)->with(['category','employee']);
        $items = $request->all?$builder->get(): $builder->paginate($request->perPage);
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'user_id' => ['required', 'numeric'],
            'category' => ['required', 'numeric'],
            'employee' => ['required', 'numeric'],
            'start' => ['required', 'date'],
            'end' => ['required', 'date'],
            'description' => ['nullable', 'string'],
            'attachments'=>['nullable','array'],
            'attachments.*'=>['required','image'],
        ]);

        $user_id = $request->user_id;
        $title = $request->title;
        $category_id = $request->category;
        $employee_id = $request->employee;
        $start = $request->start;
        $end = $request->end;
        $description = $request->description;


        $attachments = $request->attachments;
        $task = Task::create(compact('user_id','title','category_id','employee_id','start','end','description'));
        
        if($attachments && count($attachments)){
            $list = array_map(function($file){return Attachment::add($file);},$attachments);
            $task->attachments()->sync(collect($list)->pluck('id')->toArray());
        }

        $user = User::find($employee_id);
        $user->notify(new TaskAssigned($task));

      
        $task->load(['category','employee']);
        return response()->json($task);
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        $task->load(['category','employee','attachments','comments'=>fn($q)=>$q->with('attachments')->where('parent_id',null)]);
        return response()->json($task);
    }


    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus(Request $request, Task $task)
    {
        $request->validate(['status'=>['required','numeric']]);
        $status = $request->status;
        $task->update(compact('status'));
        return response()->json($task);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'category' => ['required', 'numeric'],
            'employee' => ['required', 'numeric'],
            'start' => ['required', 'date'],
            'end' => ['required', 'date'],
            'description' => ['nullable', 'string'],
            'attachments'=>['nullable','array'],
            'attachments.*'=>['required','image'],
        ]);

        
        $user_id = $request->user_id;
        $title = $request->title;
        $category_id = $request->category;
        $employee_id = $request->employee;
        $start = $request->start;
        $end = $request->end;
        $description = $request->description;

        $task->update(compact('title','category_id','employee_id','start','end','description'));

        $attachments = $request->attachments;

        if($attachments && count($attachments)){
            $task->attachments()->delete();
            $list = array_map(function($file){return Attachment::add($file);},$attachments);
            $task->attachments()->sync(collect($list)->pluck('id')->toArray());
        }


        $task->load(['category','employee']);

        
        return response()->json($task);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
