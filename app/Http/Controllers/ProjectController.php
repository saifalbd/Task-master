<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Models\Project;
use App\Models\Team;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      
      $builder = Project::query()->user($request->user()->id)->with(['category','team.members','manager']);
        $items =  $builder->paginate($request->perPage);
        return response()->json($items);
    }


    public function members(Project $project){
        $items =  $project->team->members()->get();
        $manager = $project->manager;

        return array_merge($items->toArray(),[$manager]);
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
            'category' => ['required', 'numeric'],
            'byTeam' => ['required', 'in:0,1'],
            'team' => ['nullable', 'numeric'],
            'members' => ['nullable', 'array'],
            'members.*' => ['required', 'numeric'],
            'manager' => ['required', 'numeric'],
            'start' => ['required', 'date'],
            'end' => ['required', 'date'],
            'description' => ['nullable', 'string'],
            'attachments'=>['nullable','array'],
            'attachments.*'=>['required','image'],
        ]);

        $user_id = $request->user_id;
        $title = $request->title;
        $category_id = $request->category;
        $manager_id = $request->manager;
        $start = $request->start;
        $end = $request->end;
        $description = $request->description;
        $team_id = $request->team;

        if (!$request->byTeam) {
            $members = $request->members;
            $team_mamager = $request->team_manager;
            if (count($members) > 1) {
                if (!$team_mamager) {
                    return response()->json(['message' => __('auth.failed'), 'errors' => ['team_manager' => ['Project Leader Requred']]], 422);
                }
            } else {
                $team_mamager = $members[0];
            }

            $team = Team::create(['title' => $title, 'category_id' => $category_id, 'manager_id' => $team_mamager, 'user_id' => $user_id]);
            $members = array_filter($members, fn ($id) => $id != $team_mamager);
            if (count($members)) {
                $team->members()->sync($members);
            }
            $team_id = $team->id;
        }
        $attachments = $request->attachments;
      

        $status = 0;
        $project =  Project::create(compact('title', 'user_id', 'category_id', 'manager_id', 'start', 'end', 'team_id', 'description','status'));
        if($attachments && count($attachments)){
            $list = array_map(function($file){return Attachment::add($file,Task::class);},$attachments);
            $project->attachments()->sync(collect($list)->pluck('id')->toArray());
        }


      
        $project->load(['category','team.members','manager']);
        return response()->json($project);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $project->load(['category','team','manager','assigner','attachments']);
        return response()->json($project);
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

    public function changeStatus(Request $request,Project $project){
        $request->validate(['status'=>['required','numeric']]);
        $status = $request->status;
        $project->update(compact('status'));
        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Project $project)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'category' => ['required', 'numeric'],
            'byTeam' => ['required', 'in:0,1'],
            'team' => ['nullable', 'numeric'],
            'members' => ['nullable', 'array'],
            'members.*' => ['required', 'numeric'],
            'manager' => ['required', 'numeric'],
            'start' => ['required', 'date'],
            'end' => ['required', 'date'],
            'description' => ['nullable', 'string']
        ]);

        $user_id = $request->user_id;
        $title = $request->title;
        $category_id = $request->category;
        $manager_id = $request->manager;
        $start = $request->start;
        $end = $request->end;
        $description = $request->description;
        $team_id = $request->team;
      

        if (!$request->byTeam) {
            $members = $request->members;
            $team_mamager = $request->team_manager;
            if (count($members) > 1) {
                if (!$team_mamager) {
                    return response()->json(['message' => __('auth.failed'), 'errors' => ['team_manager' => ['Project Leader Requred']]], 422);
                }
            } else {
                $team_mamager = $members[0];
            }

            $team = Team::create(['title' => $title, 'category_id' => $category_id, 'manager_id' => $team_mamager, 'user_id' => $user_id]);
            $members = array_filter($members, fn ($id) => $id != $team_mamager);
            if (count($members)) {
                $team->members()->sync($members);
            }
            $team_id = $team->id;
        }

         $project->update(compact('title', 'user_id', 'category_id', 'manager_id', 'start', 'end', 'team_id', 'description'));
      
        $project->load(['category','team','manager']);
        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->tasks()->delete();
        $project->delete();
    }
}
