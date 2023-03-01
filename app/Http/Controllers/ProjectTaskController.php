<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectTaskResource;
use App\Models\Attachment;
use App\Models\Project;
use App\Models\ProjectTask;
use Illuminate\Http\Request;

class ProjectTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Project $project)
    {
       $items = $project->tasks()->with(['employees','attachments'])->get();
       $collection = ProjectTaskResource::collection($items);
       return response()->json($collection);


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
    public function store(Request $request,Project $project)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'category' => ['required', 'numeric'],
            'employees' => ['required', 'array'],
            'start' => ['required', 'date'],
            'end' => ['required', 'date'],
            'description' => ['nullable', 'string'],
            'attachments'=>['nullable','array'],
            'attachments.*'=>['required','image'],
        ]);

        $project_id = $project->id;
        $user_id = $request->user_id;
        $title = $request->title;
        $category_id = $request->category;
        $employees=$request->employees;
        $start = $request->start;
        $end = $request->end;
        $description = $request->description;

        $attachments = $request->attachments;
        $task = $project->tasks()->create(compact('user_id','title','category_id','start','end','description'));

        $task->employees()->sync($employees);
        
        if($attachments && count($attachments)){
            $list = array_map(function($file){return Attachment::add($file,ProjectTask::class);},$attachments);
            $task->attachments()->sync(collect($list)->pluck('id')->toArray());
        }

        $item = new ProjectTaskResource($task);
        
        return response()->json($item);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectTask $projectTask)
    {
        $projectTask->delete();
    }
}
