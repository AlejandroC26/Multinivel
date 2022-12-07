<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;
use App\Models\Country;

class CountryController extends Controller
{
    public function listCountries(Request $request){
        $country = Country::get();
        return response()->json($country);
    }
    public function listCountryCities(Request $request, $code){
        $cities = City::where('country_code', '=', $code)->get();
        return response()->json($cities);
    }
}
