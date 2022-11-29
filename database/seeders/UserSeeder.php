<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name'=> 'Admin',
            'last_name' => 'APP',
            'id_card' => '0',
            'phone' => '0',
            'city_id' => null,
            'login' => 'AdminAPP',
            'sponsor_user' => 0,
            'state'=>'Activo',
            'password' => bcrypt('admin123'),
        ])->assignRole('Admin');
        $user2 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Uno',
            'id_card' => '123',
            'phone' => '313',
            'city_id' => null,
            'login' => 'usuario1',
            'sponsor_user' => 1,
            'state'=>'Activo',
            'activation_date'=>now(),
            'password' => bcrypt('123'),
        ]);
        $user3 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Uno',
            'id_card' => '123',
            'phone' => '313',
            'city_id' => null,
            'login' => 'usuario1',
            'sponsor_user' => 2,
            'state'=>'Activo',
            'activation_date'=>now(),
            'password' => bcrypt('123'),
        ]);
    }
}
