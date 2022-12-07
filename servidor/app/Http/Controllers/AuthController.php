<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\ViewUserData;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'Encriptar']]);
    }
    public function me(Request $request){
        $user = JWTAuth::user();
        $user_data = ViewUserData::select(
                'u.name',
                'u.last_name',
                'c.id', 
                'c.department', 
                'c.country_code', 
                DB::RAW("CONCAT(u2.name, ' ', u2.last_name) as consign_user_name"),
                'u2.count_type as consign_user_count_type',
                'u2.count_number as consign_user_count_number'
            )
            ->leftJoin('cities as c','c.id','=','list_users_view.city_id')
            ->leftJoin('users as u','u.id','=','sp_user_1')
            ->leftJoin('users as u2','u2.id','=','sp_user_3')
            ->where('list_users_view.id', '=', $user->id)
            ->get();
        $permissions = $user->getAllPermissions();
        $permissions_array = array();
        foreach ($permissions as $permission) {
            array_push($permissions_array, ['id' => $permission->id, 'name' => $permission->name]);
        }
        $city = ["department"=>$user_data[0]->department, "country_code"=>$user_data[0]->country_code];
        $return_user = [
            "id" => $user->id,
            "name"=> $user->name,
            "last_name"=> $user->last_name,
            "id_card"=> $user->id_card,
            "phone"=> $user->phone,
            "city_id"=> $user->city_id,
            'city'=> $city,
            "login"=> $user->login,
            "count_type"=> $user->count_type,
            "count_number"=> $user->count_number,
            "sp_user_code"=> $user->sponsor_user,
            "sp_user_name"=> trim($user_data[0]->name).' '.$user_data[0]->last_name,
            "consign_user_name"=> $user_data[0]->consign_user_name,
            "consign_user_count_type"=> $user_data[0]->consign_user_count_type,
            "consign_user_count_number"=> $user_data[0]->consign_user_count_number,
            "state"=>$user->state,
            "permissions" => $permissions_array,
            "created_at"=> $user->created_at,
            "updated_at"=> $user->updated_at
        ];
        return response()->json(['user' => $return_user]);
    }
    
    public function login(Request $request)
    {
        $credentials = $request->only('login', 'password');
        $login = request(['login']);
        $password = request(['password']);
        if(!$login) return response()->json(['status'=>'error','message'=>'Login is required'], 400);
        if(!$password) return response()->json(['error'=>'Password is required'], 400);
        if(!$token = JWTAuth::attempt($credentials)){
            return response()->json(['status'=>'error','message'=>'Unauthorized'], 401);
        }
        return response()->json(['status'=>'success', 'token'=>$token]);
    }
    /* public function Encriptar(Request $request)
    {
        $users = User::where('id', '>=', '21304')
        ->take(5000)->get();
        
        for ($i=0; $i < count($users); $i++) { 
            User::where('id', $users[$i]->id)->update(array(
                'password'=> bcrypt($users[$i]->password),
            ));
        }
        return response()->json($users);
    } */

    public function logout()
    {
        auth()->logout();

        return response()->json(['success'=>true, 'message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }
}
