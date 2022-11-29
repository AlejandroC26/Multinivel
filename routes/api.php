<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function ($router) {
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    //Route::post('Encriptar', 'App\Http\Controllers\AuthController@Encriptar');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
});

/* ====USER======= */
Route::group([
    'prefix' => 'users'
], function ($router) {
    Route::post('/register', 'App\Http\Controllers\UserController@register');
    Route::post('/update/{id}', 'App\Http\Controllers\UserController@update');
    /* =======SECONDARY============== */
    Route::get('/state/{state}', 'App\Http\Controllers\UserController@listForState');
    Route::get('/{id}/file/{file}', 'App\Http\Controllers\UserController@showFile');
    /* ============================= */
    Route::get('/list/{id}', 'App\Http\Controllers\UserController@show');
    Route::get('/{id}/lines', 'App\Http\Controllers\UserController@lines');
    Route::get('/{id}/line/{line_id}', 'App\Http\Controllers\UserController@usersLine');
    Route::get('/{id}/sponsors', 'App\Http\Controllers\UserController@sponsors');
    Route::get('/list', 'App\Http\Controllers\UserController@list');
    Route::post('/change_password/{id}', 'App\Http\Controllers\UserController@change_password');
    Route::post('/reset_password/{id}', 'App\Http\Controllers\UserController@reset_password');
});

/* ====SALE POINT======= */
Route::group([
    'prefix' => 'salepoints'
], function ($router) {
    Route::post('/list/{id}', 'App\Http\Controllers\SalePointController@show');
    Route::post('/list', 'App\Http\Controllers\SalePointController@list');
    Route::post('/create', 'App\Http\Controllers\SalePointController@register');
    Route::post('/update/{id}', 'App\Http\Controllers\SalePointController@update');
    Route::get('/{id}/commissions', 'App\Http\Controllers\SalePointController@commission');
    // Sale point
    Route::post('/{id}/payment', 'App\Http\Controllers\SalePointController@payment');
    Route::post('/{id}/payments/list', 'App\Http\Controllers\SalePointController@paymentList');
    Route::post('/{id}/asigned', 'App\Http\Controllers\SalePointController@showAsigned');
    Route::post('/asign_user', 'App\Http\Controllers\SalePointController@asignUser');
    Route::post('/remove_user/{id}', 'App\Http\Controllers\SalePointController@removeUser');
    // Route::post('/delete/{id}', 'App\Http\Controllers\SalePointController@delete'); */    
    Route::post('/percent/{id}', 'App\Http\Controllers\SalePercentOptionController@create');
    Route::post('/percent/delete/{id}', 'App\Http\Controllers\SalePercentOptionController@delete');

    Route::post('/option/{id}', 'App\Http\Controllers\SaleMoneyOptionController@create');
    Route::post('/option/delete/{id}', 'App\Http\Controllers\SaleMoneyOptionController@delete');
});
/* ====SALE======= */
Route::group([
    'prefix' => 'sale'
], function ($router) {
    Route::post('/list/{id}', 'App\Http\Controllers\SaleController@show');
    Route::post('/list', 'App\Http\Controllers\SaleController@list');
    Route::post('/create', 'App\Http\Controllers\SaleController@create');
    //Route::post('/import', 'App\Http\Controllers\SaleController@import');
    Route::delete('/delete/{id}', 'App\Http\Controllers\SaleController@delete');
});
/* ====COMMISSION======= */
Route::group([
    'prefix' => 'commission'
], function ($router) {
    Route::get('/general', 'App\Http\Controllers\CommissionController@general');
    Route::post('/create', 'App\Http\Controllers\CommissionController@create');
    Route::post('/payment', 'App\Http\Controllers\CommissionController@payment');
});

Route::group([
    'prefix' => 'cities'
], function ($router) {
    Route::get('/list', 'App\Http\Controllers\CityController@listCities');
    Route::get('/list/{id}', 'App\Http\Controllers\CityController@show');
});

Route::group([
    'prefix' => 'countries'
], function ($router) {
    Route::get('/list', 'App\Http\Controllers\CountryController@listCountries');
    Route::get('/cities/{code}', 'App\Http\Controllers\CountryController@listCountryCities');
});

Route::group([
    'prefix' => 'search'
], function ($router) {
    Route::post('/public/users', 'App\Http\Controllers\SearchController@publicUserSearch');
    Route::post('/users', 'App\Http\Controllers\SearchController@userSearch');
    Route::post('/sale_points', 'App\Http\Controllers\SearchController@salePointSearch');
    Route::post('/sales', 'App\Http\Controllers\SearchController@salesSearch');
    Route::post('/commissions', 'App\Http\Controllers\SearchController@commissionsSearch');
    Route::post('/payments', 'App\Http\Controllers\SearchController@paymentsSearch');
});

Route::group([
    'prefix' => 'roles'
], function ($router) {
    Route::get('/', 'App\Http\Controllers\RoleController@index');
    Route::get('/users', 'App\Http\Controllers\RoleController@indexUsers');
    Route::get('/permissions', 'App\Http\Controllers\RoleController@indexPermissions');
    Route::post('/create', 'App\Http\Controllers\RoleController@create');
    Route::delete('/{id} ', 'App\Http\Controllers\RoleController@delete');
    Route::post('/add_permission', 'App\Http\Controllers\RoleController@addPermission');
    Route::post('/remove_permission', 'App\Http\Controllers\RoleController@removePermission');
    Route::post('/asign_user', 'App\Http\Controllers\RoleController@asignToUser');
    Route::post('/remove_user', 'App\Http\Controllers\RoleController@removeOfUser');

    Route::get('/{id}', 'App\Http\Controllers\RoleController@show');
});
