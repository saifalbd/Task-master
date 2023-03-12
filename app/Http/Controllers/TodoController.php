<?php

namespace App\Http\Controllers;

use App\Http\Resources\ToDoResource;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user_id = $request->user_id;
        $items = Todo::query()->where('user_id', $user_id)->paginate(15);
        $collection = ToDoResource::collection($items);
        return $collection;
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
            'subject' => ['required', 'string'],
            'date' => ['required'],
            'time' => ['required'],
            'description' => ['required', 'string']
        ]);

        $user_id = $request->user_id;
        $subject = $request->subject;
        $date = Carbon::parse($request->date);
        $time = Carbon::parse($request->time);
        $description = $request->description;
        $model = Todo::create(compact('subject', 'date','time', 'description', 'user_id'));
        $item = new ToDoResource($model);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Todo $todo)
    {
        $request->validate([
            'subject' => ['required', 'string'],
            'reminder' => ['required'],
            'description' => ['required', 'string']
        ]);

        $user_id = $request->user_id;
        $subject = $request->subject;
        $reminder = Carbon::parse($request->reminder);
        $description = $request->description;
        $model = $todo->update(compact('subject', 'reminder', 'description', 'user_id'));
        return response()->json($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
    }
}
