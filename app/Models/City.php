<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    public function countries(){
        return $this->belongsTo(Country::class, 'countries:code');
    }
    public function users(){
        return $this->hasMany(User::class, 'users:id');
    }
    public $timestamps = false;
}
