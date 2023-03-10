<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['title','user_id','manager_id','category_id','start','end','status','team_id','description'];

    public function scopeUser(Builder $builder, $user_id)
    {
        return $builder->where("user_id", $user_id);
    }

    public function assigner(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function team(){
        return $this->belongsTo(Team::class,'team_id');
    }
    // project manager
    public function manager(){
        return $this->belongsTo(Employee::class,'manager_id');
    }

    public function attachments(){
        return $this->morphToMany(Attachment::class, 'attachale');
    }


    public function tasks(){
        return $this->hasMany(ProjectTask::class,'project_id');
    }


      /**
     * Get all of the post's comments.
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
