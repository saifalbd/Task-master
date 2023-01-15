<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEmployeePosition extends Model
{
    use HasFactory;
    protected $fillable = ['position_id','user_id','employee_id'];
    protected $with = ['position'];
    protected $appends = ['title'];

    public function position(){
        return $this->belongsTo(Position::class,'position_id');
    }


    public function getTitleAttribute()
    {
        return $this->position->title;
    }

    
}
