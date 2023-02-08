<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $fillable = ['title','user_id','employee_id','category_id','start','end','status','team_id','description'];
 

    public function assigner(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function employee(){
        return $this->belongsTo(Employee::class,'employee_id');
    }
    public function category(){
        return $this->belongsTo(Category::class,'category_id');
    }

    public function attachments(){
        return $this->morphToMany(Attachment::class, 'attachale');
    }

   /**
     * Get all of the post's comments.
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function scopeUser(Builder $builder, $user_id)
    {
        return $builder->where("user_id", $user_id);
    }
}
