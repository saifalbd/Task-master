<?php

namespace App\Service;

use App\Models\Category;
use App\Models\Department;
use App\Models\Designation;
use App\Models\Employee;
use App\Models\EventCategory;
use App\Models\Team;
use Illuminate\Support\Facades\Http;

class Dropdown
{

    public $user_id;
    public function __construct($user_id)
    {
       $this->user_id = $user_id; 
    }


    public function employees(){
        return Employee::query()->where('user_id',$this->user_id)->where('accepted',true)->with('model')->get()->map(function($employe){
            $id = $employe->id;
            $name = $employe->model->name;
            $user_id = $employe->model->id;
            return compact('id','name','user_id');
        });
    }


    public function designations(){
        return Designation::query()->where('user_id',$this->user_id)->get();
    }

    public function departments(){
        return Department::query()->where('user_id',$this->user_id)->get();
    }


    public function categories(){
        return Category::query()->user($this->user_id)->get();
    }

    public function eventCategories(){
        return EventCategory::query()->user($this->user_id)->get();
    }


    public function teams(){
        return Team::query()->user($this->user_id)->get();
    }

}
