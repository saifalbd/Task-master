<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
class Employee extends Model
{
    protected $table = 'users';

    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

   
     /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

     /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope( fn($builder)=>$builder->whereHas('grandSuperiors', fn($q)=>$q->where('id',request('user_id'))));
    }

    public function grandSuperiors(){
        return $this->belongsToMany(User::class,'user-employee','employee_id','user_id');
    }

    public function position(){
        return $this->hasOne(UserEmployeePosition::class,'employee_id')->where('user_id',request()->user_id);
    }

    
}
