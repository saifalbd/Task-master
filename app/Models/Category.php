<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'user_id'];

    public function scopeUser(Builder $builder, $user_id)
    {
        return $builder->where("user_id", $user_id);
    }
}
