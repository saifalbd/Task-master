<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use App\Events\ChatReadEvent;
use App\Http\Resources\ChatResource;
use App\Http\Resources\ChatUserResource;
use App\Models\Attachment;
use App\Models\Chat;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\{Arr,Str};
use Illuminate\Support\Facades\Cache;

class ChatController extends Controller
{


    public static function joinId($sender_id,$receiver_id){
        $arr = Arr::sort([$sender_id,$receiver_id]);

        return join('-',$arr);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->validate([
            'receiver_id'=>['required','numeric'],
           
        ]);

        $sender_id = $request->user()->id;
        $receiver_id = $request->receiver_id;
        $join_id = static::joinId($sender_id,$receiver_id);

        $collection = Cache::rememberForever("chat-$join_id",function()use($join_id){
            return Chat::query()->where('join_id',$join_id)->get();
        });

       $items = ChatResource::collection($collection);
       return response()->json($items);

    }
    public function unreadcount(Request $request){
        $user_id = $request->user_id;
        $unReadCount = DB::table('chats')->select(['receiver_id','is_view'])->where('receiver_id',$user_id)->where('is_view',null)->orWhere('is_view',0)->count();
        return $unReadCount;
    }
    public function chatUsers(Request $request){
         $user_id = $request->user_id;
         $grandIdList = DB::table('user-employee')->where('employee_id',$user_id)->get()->pluck('user_id')->toArray();
          $grands = User::query()->whereIn('id',$grandIdList)->with('avatar')->get();
          $users = Employee::query()->with(['position','avatar'])->latest('updated_at')->get();
          $items = $grands->merge($users)->map(function($item)use($user_id){
            $join_id = static::joinId($user_id,$item->id);
            $lastMessage = DB::table('chats')->where('join_id',$join_id)->latest('created_at')->first();
            //
            $unReadCount = DB::table('chats')->select(['receiver_id','is_view','sender_id'])->where('sender_id',$item->id)->where('receiver_id',$user_id)->where('is_view',null)->orWhere('is_view',0)->count();
            $item->unReadCount = $unReadCount;
            $item->lastMessage = $lastMessage?Str::limit($lastMessage->message,20):'';
            return $item;
          });
        
          
        $collection = ChatUserResource::collection($items);

        return response()->json( $collection);
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
            'receiver_id'=>['required','numeric'],
            'file'=>['nullable','file'],
            'message'=>['nullable','string']
        ]);
        $user_id = $request->user_id;
        $sender_id = $request->user()->id;
        $receiver_id = $request->receiver_id;
        $message = $request->get('message',null);
        $join_id = static::joinId($sender_id,$receiver_id);

        $file = $request->file;
        $file_id = null;
        if($file){
         $model =   Attachment::add($file,Chat::class);
         $file_id = $model->id;
        }

        $chat = Chat::create(compact('sender_id','receiver_id','join_id','message','file_id'));

        Cache::forget("chat-$join_id");

        $item = (new ChatResource($chat,$user_id))->toArray($request);

        broadcast(new ChatEvent($item,$receiver_id))->toOthers();

        return $item;
    }

 

    public function read(Chat $chat){
        $chat->update(['is_view'=>1]);

        broadcast(new ChatReadEvent($chat->id));
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
