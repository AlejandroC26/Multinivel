<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsignedSalePointUsers extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'sale_point_id',
    ];
    public $table = 'users_assigned_sale_point';
}
