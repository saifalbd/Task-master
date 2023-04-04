<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Models\Employee;
use App\Models\Task;
use App\Models\User;
use App\Notifications\TaskAssigned;
use App\Notifications\TaskStatusChanged;
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
        $user_id = $request->user_id;
        $builder = Task::query()->user($user_id)->archiveList('user',false)->with(['category','employee.model.avatar']);
        $items = $builder->paginate($request->perPage);
        return response()->json($items);
    }


    public function archives(Request $request){
        $user_id = $request->user_id;
        $builder = Task::query()->user($user_id)->archiveList('user',true)->with(['category','employee.model.avatar']);
        $items = $builder->paginate($request->perPage);
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
        $status = 0;
        $task = Task::create(compact('user_id','title','category_id','employee_id','start','end','description','status'));
        
        if($attachments && count($attachments)){
            $list = array_map(function($file){return Attachment::add($file,Task::class);},$attachments);
            $task->attachments()->sync(collect($list)->pluck('id')->toArray());
        }

        $employee = Employee::findOrFail($employee_id);
        $user = User::find($employee->employee_id);
        $task->fresh();
       
        $task->load(['category','employee.model.avatar']);
        $user->notify(new TaskAssigned($task));

      
       
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
        $task->load(['category','employee.model.avatar','attachments']);
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
        $beforeStatus = $task->status;
        //notify
        $request->validate(
            ['status'=>['required','numeric'],
            'notify'=>['required','in:0,1']
            ]);
        $status = $request->status;
        $notify = $request->notify;

      
       

        $task->update(compact('status'));

        if($notify){
            $user = $task->user;
            $user->notify(new TaskStatusChanged($task,$beforeStatus,$status));
        }
        
        return response()->json($task);
    }

    public function changeStar(Request $request,Task $task){
        $request->validate(['star'=>['required','numeric'],'prop'=>['required','string']]);
        $task->update([$request->prop=>$request->star]);
    }

    public function doArchive(Request $request,Task $task){

        $request->validate(['do'=>['required','in:0,1'],'prop'=>['required','string']]);
        $task->update([$request->prop=>$request->do]);

        return $task;
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
            $list = array_map(function($file){return Attachment::add($file,Task::class);},$attachments);
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
    public function destroy(Task $task)
    {
        $task->delete();
    }
}
