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
            'created_at' => '2022-11-07 14:56:42',
            'updated_at' => '2022-11-07 14:56:42'
        ])->assignRole('Admin');
        //NIVEL 1
        $user2 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Uno',
            'id_card' => '123',
            'phone' => '313',
            'city_id' => 1,
            'login' => 'usuario1',
            'sponsor_user' => 1,
            'state'=>'Inactivo',
            'count_number'=>'313',
            'password' => bcrypt('123'),
            'created_at' => '2022-11-10 14:56:42',
            'updated_at' => '2022-11-10 14:56:42'
        ]);
        // NIVEL 2
        $user3 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Dos',
            'id_card' => '234',
            'phone' => '313',
            'city_id' => 1,
            'login' => 'usuario2',
            'sponsor_user' => 2,
            'state'=>'Inactivo',
            'count_number'=>'314',
            'password' => bcrypt('123'),
            'created_at' => '2022-11-14 14:56:42',
            'updated_at' => '2022-11-14 14:56:42'
        ]);
        // NIVEL 3
        $user3 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Tres',
            'id_card' => '345',
            'phone' => '313',
            'city_id' => 1,
            'login' => 'usuario3',
            'sponsor_user' => 3,
            'state'=>'Inactivo',
            'count_number'=>'314',
            'password' => bcrypt('123'),
            'created_at' => '2022-11-17 14:56:42',
            'updated_at' => '2022-11-17 14:56:42'
        ]);
        // NIVEL 4
        $user3 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Cuatro',
            'id_card' => '345',
            'phone' => '313',
            'city_id' => 1,
            'login' => 'usuario4',
            'sponsor_user' => 3,
            'state'=>'Inactivo',
            'count_number'=>'314',
            'password' => bcrypt('123'),
            'created_at' => '2022-11-21 14:56:42',
            'updated_at' => '2022-11-21 14:56:42'
        ]);
        // NIVEL 5
        $user3 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Cinco',
            'id_card' => '345',
            'phone' => '313',
            'city_id' => 1,
            'login' => 'usuario4',
            'sponsor_user' => 3,
            'state'=>'Inactivo',
            'count_number'=>'314',
            'password' => bcrypt('123'),
            'created_at' => '2022-11-24 14:56:42',
            'updated_at' => '2022-11-24 14:56:42'
        ]);
        // NIVEL 6
        $user3 = User::create([
            'name'=> 'Usuario',
            'last_name' => 'Seis',
            'id_card' => '345',
            'phone' => '313',
            'city_id' => 1,
            'login' => 'usuario4',
            'sponsor_user' => 3,
            'state'=>'Inactivo',
            'count_number'=>'314',
            'password' => bcrypt('123'),
            'created_at' => '2022-11-28 14:56:42',
            'updated_at' => '2022-11-28 14:56:42'
        ]);
    }
}
