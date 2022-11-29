<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    public function users(){
        return $this->hasMany(Citie::class, 'cities:country_code');
    }
    public $timestamps = false;
}
