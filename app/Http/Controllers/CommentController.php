<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'text' => ['required', 'string'],
            'parent_id'=>['nullable','numeric'],
            'model_type' => ['required', 'string'],
            'model_id' => ['required', 'numeric'],
            'attachments'=>['nullable','array'],
            'attachments.*'=>['required','image'],
        ]);
        $text = $request->text;
        $parent_id = $request->parent_id;
        $commentable_id = $request->model_id;
        $commentable_type =$request->model_type;
        $user_id = $request->user_id;
       
        $comment =  Comment::create(compact('commentable_id','commentable_type','parent_id','text','user_id'));

        $attachments = $request->attachments;

        if($attachments && count($attachments)){
            $comment->attachments()->delete();
            $list = array_map(function($file){return Attachment::add($file);},$attachments);
            $comment->attachments()->sync(collect($list)->pluck('id')->toArray());
        }


        $comment->load(['replayes','user','attachments']);
        return response()->json($comment);
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
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();
    }
}
