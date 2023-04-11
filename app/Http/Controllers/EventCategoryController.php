<?php

namespace App\Http\Controllers;

use App\Models\EventCategory;
use App\Rules\UniqueBy;
use App\Rules\UniqueSkipBy;
use Illuminate\Http\Request;

class EventCategoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $builder = EventCategory::query()->user($request->user()->id);
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
            'title' => ['required', new UniqueBy('event_categories', $request->user_id)],
            'color' => ['required', 'array'],
            'color.bg' => ['required', 'string'],
            'color.time' => ['required', 'string'],
            'color.cat' => ['required', 'string'],
            'color.title' => ['required', 'string'],
            'color.border' => ['required', 'string'],
        ]);

        $category =  $request->user()->eventCategories()->create($request->toArray());
        return response()->json($category);
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
    public function update(Request $request, EventCategory $category)
    {
        $request->validate([
            'title' => ['required', new UniqueSkipBy('event_categories', $request->user_id, $category->id)],
            'color' => ['required', 'array'],
            'color.bg' => ['required', 'string'],
            'color.time' => ['required', 'string'],
            'color.cat' => ['required', 'string'],
            'color.title' => ['required', 'string'],
            'color.border' => ['required', 'string'],
        ]);
        $category->update($request->toArray());
        return response()->json($category);
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
