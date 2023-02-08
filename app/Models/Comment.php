<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['text','parent_id','user_id','commentable_id','commentable_type'];

    protected $with = ['replayes','user'];


  /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::deleting(function($model){
            $model->replayes()->delete();
        });
    }


    public function user(){
        return $this->belongsTo(User::class);
    }
    public function replayes(){
        return $this->hasMany(static::class,'parent_id');
    }

    public function attachments(){
        return $this->morphToMany(Attachment::class, 'attachale');
    }
}
