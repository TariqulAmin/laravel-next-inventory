<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Inventory;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'inventory_id',
        'name',
        'description',
        "image",
        "quantity"
    ];

    public function inventory()
    {
        return $this->belongsTo(Inventory::class, 'inventory_id');
    }
}
