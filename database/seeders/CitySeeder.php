<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;
use App\Models\City;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country1 = Country::create(['code'=>'COL', 'name'=>'Colombia']);
        $city1 = City::create(['name'=>'Pitalito', 'department'=>'Huila', 'country_code'=>'COL']);
    }
}
