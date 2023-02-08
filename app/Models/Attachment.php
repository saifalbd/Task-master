<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Attachment extends Model
{
    protected $fillable = ['type','disk','path'];

    protected $appends = ['url','isImg'];

    protected static function booted()
    {
        static::deleting(function($model){
            $disk = Storage::disk($model->disk);
            $disk->delete($model->path);
        });
    }


    public function getUrlAttribute()
    {
        $disk = Storage::disk($this->disk);
        return $disk->url($this->path);
    }

    public function getIsImgAttribute()
    {
        return Str::startsWith($this->type,'image');
    }
    public static function add(UploadedFile $file):Attachment{
       $type = $file->getClientMimeType();
       $disk = 's3';
       $path = 'task-master';
       $name = uniqid().'.'.$file->getClientOriginalExtension();
       $path = Storage::disk($disk)->putFileAs($path,$file,$name);
       
      return static::create(compact('type','disk','path'));
       
    }
}
