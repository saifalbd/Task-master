<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $builder = Team::query()->user($request->user()->id)->with(['members', 'manager', 'category']);
        $items =  $builder->paginate($request->perPage);
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
            'category_id' => ['required', 'numeric'],
            'manager_id' => ['required', 'numeric'],
            'members' => ['required', 'array'],
            'members.*' => ['required', 'numeric'],
        ]);

        $title = $request->title;
        $category_id = $request->category_id;
        $manager_id = $request->manager_id;
        $members = $request->members;
        $user_id = $request->user_id;
        $team = Team::create(compact('title', 'category_id', 'manager_id', 'user_id'));
        $team->members()->sync($members);
        $team->load(['members', 'manager', 'category']);
        return response()->json($team);
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
    public function update(Request $request, Team $team)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'category_id' => ['required', 'numeric'],
            'manager_id' => ['required', 'numeric'],
            'members' => ['required', 'array'],
            'members.*' => ['required', 'numeric'],
        ]);

        $title = $request->title;
        $category_id = $request->category_id;
        $manager_id = $request->manager_id;
        $members = $request->members;
        $user_id = $request->user_id;
        $team->update(compact('title', 'category_id', 'manager_id', 'user_id'));
        $team->members()->sync($members);
        $team->load(['members', 'manager', 'category']);
        return response()->json($team);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Team $team)
    {
        $team->members()->detach();
        $team->delete();
    }
}
