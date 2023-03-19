<?php

namespace App\Models;

use App\Traits\UserTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Employee extends Model
{

    protected $table = 'user_employees';


    protected $fillable = ['user_id', 'employee_id', 'designation_id', 'accepted'];



    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    // protected static function booted()
    // {
    //     static::addGlobalScope(fn ($builder) => $builder->where('user_id', request('user_id')));
    // }



    public function model(){
        return $this->belongsTo(User::class,'employee_id');
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class,'designation_id');
    }


    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }




    public function scopeEmail(Builder $builder,$email){
        return $builder->whereHas('model', fn(Builder $query)=>$query->where('email', $email));
    }
}
