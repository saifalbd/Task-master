<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class Attachment extends Model
{
    protected $fillable = ['type','disk','path'];


    public static function add(UploadedFile $file):Attachment{
       $type = $file->getClientMimeType();
       $disk = 's3';
       $path = 'task-master';
       $name = uniqid().'.'.$file->getClientOriginalExtension();
       $path = Storage::putFileAs($path,$file,$name);
       
      return static::create(compact('type','disk','path'));
       
    }
}
