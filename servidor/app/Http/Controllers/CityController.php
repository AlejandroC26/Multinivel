<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;
use App\Models\Country;

class CityController extends Controller
{
    public function show(Request $request, $id){
        $city = City::find($id);
        return response()->json($city);
    }

    public function listCities(Request $request){
        $city = City::get();
        return response()->json($city);
    }
}
