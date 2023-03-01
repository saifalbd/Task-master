<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectTask extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'project_tasks';
    protected $fillable = ['title','user_id','project_id','category_id','start','end','status','description'];


    public function employees(){
        return $this->belongsToMany(User::class,'project_tasks_employee','task_id','employee_id');
    }

    public function attachments(){
        return $this->morphToMany(Attachment::class, 'attachale');
    }


}
