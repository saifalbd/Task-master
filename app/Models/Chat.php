<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
  protected $fillable = ['message','sender_id','receiver_id','join_id','is_view','file_id'];



  public function attach(){
    return $this->belongsTo(Attachment::class,'file_id');
  }

}
