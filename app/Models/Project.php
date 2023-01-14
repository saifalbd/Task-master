<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title','user_id','category_id','manager_id','start','end','status','team_id','description'];

    public function scopeUser(Builder $builder, $user_id)
    {
        return $builder->where("user_id", $user_id);
    }
}
