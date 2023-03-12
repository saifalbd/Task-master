<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'user_id', 'manager_id', 'category_id'];




    public function members()
    {
        return $this->belongsToMany(Employee::class, 'team-member','team_id','member_id')->with('model.avatar');
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function manager(){
        return $this->belongsTo(Employee::class,'manager_id')->with('model.avatar');
    }

    public function scopeUser(Builder $builder, $user_id)
    {
        return $builder->where("user_id", $user_id);
    }
}
