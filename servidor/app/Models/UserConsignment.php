<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserConsignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'type',
        'state',
        'user_id',
    ];
    public $table = "user_consignment";
}
