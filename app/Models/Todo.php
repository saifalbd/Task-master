<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['user_id','subject','date','time','description'];

    protected $casts = ['reminder'=>'datetime'];

    
}
