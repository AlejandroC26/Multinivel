<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\UserConsignment;
use App\Models\ViewUserData;
use App\Models\ViewUserConsignments;
use App\Models\ViewUserSponsors;
use App\Models\ViewSearchUser;
use Illuminate\Validation\Rule;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['register']]);
        // This middleware protect the routes where the user has the same id or user is admin
        $this->middleware('us.permission:users.show', ['except'=> ['register', 'update', 'reset_password', 'showFileConsignment']]);
        $this->middleware('us.permission:users.edit', ['only'=> ['update', 'reset_password']]);
    }

    public function show(Request $request, $id){
        $user = User::find($id);
        if(!$user) return response()->json(['status'=> 'error', 'message'=> 'User not found'], 404);
        $user_city = ViewSearchUser::select('city_id', 'city_name', 'department', 'country_code', 'country_name')
            ->where('id', '=', $user->id)
            ->get();
        $return_user = [
            "id" => $user->id,
            "name"=> $user->name,
            "last_name"=> $user->last_name,
            "id_card"=> $user->id_card,
            "phone"=> $user->phone,
            "city_id"=> $user->city_id,
            'city'=> $user_city[0],
            "login"=> $user->login,
            "sponsor_user"=> $user->sponsor_user,
            "state"=>$user->state,
            "consignment"=> $user->consignment,
            "count_type"=>$user->count_type,
            "count_number"=>$user->count_number,
            "created_at"=> $user->created_at,
            "updated_at"=> $user->updated_at
        ];
        return response()->json($return_user);
    }
    public function list(Request $request)
    {
        $users = User::query()->select([
            'id', 'name', 'last_name', 
            'id_card', 'phone', 
            'login', 'sponsor_user','state', 'created_at'])->get();
        return response()->json(["data" => $users]);
    }

    public function listForState(Request $request, $state) {
        $users = User::select([
            'id', 'name', 'last_name', 
            'id_card', 'phone', 
            'phone', 'sponsor_user','state', 'created_at'])
        ->where('state', '=', $state)
        ->get();
        return response()->json($users);
    }

    public function register(Request $request)
    {
        function isValid($text){
            $pattern = "/^[a-zA-Z\sñáéíóúÁÉÍÓÚÑ]+$/";
            return preg_match($pattern, $text);
        }

        $user_login = DB::table('users')->where('login', '=', $request->login)->get();
        if(count($user_login) > 0) return response()->json(['status'=> 'error', 'case'=>'login', 'message'=> 'The login is already in use']);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'last_name' => 'required|string',
            'id_card' => 'required|string',
            'phone' => 'required|string',
            'city_id' => 'required|integer',
            'login' => 'required|string|max:100|unique:users',
            'password' => 'required|string|min:3|confirmed',
            'password_confirmation' => 'required|string|min:3',
            'count_type'=> Rule::in(['Nequi','Daviplata', 'Bancolombia - Ahorros', 'Bancolombia - Corriente']),
            'count_number' => 'required|string:min:5',
            'sponsor_user' => 'integer|required',
        ]);
        if($validator->fails()) return response()->json(['message' => 'Field validation failed: '.$validator->errors()->toJson()],400);
        
        $city_id = DB::table('cities')->find(request(['city_id']));
        $sponsor_user = DB::table('users')->find(request(['sponsor_user']));
        
        $find_user = DB::table('users')
            ->where('id_card', $request->id_card) 
            ->where('state', '!=', 'Finalizado')
            ->get();

        if(count($find_user) >= 1) 
            return response()->json(['status'=> 'error', 'message'=> 'Ya hay un usuario registrado con este documento'], 400); 

        $sponsor_line = DB::table('users')->SELECT(DB::raw('COUNT(*) AS total'))->where('sponsor_user', $request->sponsor_user)->get();
        if($sponsor_line[0]->total >= 2) 
            return response()->json(['status'=> 'error', 'case'=>'max_sp', 'message'=> 'Sponsor limit is 2'], 400); 

        /* ====VALIDATION==== */
        if(!$city_id) 
            return response()->json(['status'=> 'error', 'message'=> 'City not found']);
        if(!$sponsor_user) 
            return response()->json(['status'=> 'error', 'message'=> 'Sponsor user not found']);

        if (strpos($request->password, " ")) 
            return response()->json(['status'=> 'error', 'message' => 'Password cannot contain spaces'], 400);

        $user = User::create(array_merge(
            $validator->validate(),
            [
                'password' => bcrypt($request->password),
            ]
        ));
        return response()->json([
            'message' => '¡Usuario registrado exitosamente!',
            'data' => $user
        ], 201);
    }
    public function update(Request $request, $id)
    {
        function isValid($text){
            $pattern = "/^[a-zA-Z\sñáéíóúÁÉÍÓÚÑ]+$/";
            return preg_match($pattern, $text);
        }

        $user = User::find($id);
        if($user->sponsor_user != $request->sponsor_user && !$request->user()->hasRole('Admin'))
            return response()->json(['status'=> 'error', 'message'=> 'User cannot change this sponsor']);

        if(!$user) return response()->json(['status'=> 'error', 'message'=> 'User not found']);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'last_name' => 'required|string',
            'id_card' => 'required|string',
            'phone' => 'required|string',
            'city_id' => 'required|integer',
            'login' => 'required|string|max:100',
            'count_type'=> Rule::in(['Nequi','Daviplata', 'Bancolombia - Ahorros', 'Bancolombia - Corriente']),
            'count_number' => 'required|string:min:5',
            'sponsor_user' => 'integer|required',
        ]);

        if($validator->fails()) return response()->json(['message' => 'Field validation failed: '.$validator->errors()->toJson()],400);

        $city_id = DB::table('cities')->find(request(['city_id']));
        $find_sponsor_user = DB::table('users')->find($request->sponsor_user);
        if (strpos($request->email, " ")) return response()->json(['status'=> 'error', 'message' => 'Email cannot contain spaces'], 400);

        $user_login = DB::table('users')->where('login', '=', $request->login)->where('id', '!=', $request->id)->get();
        $sponsor_line = DB::table('users')->SELECT(DB::raw('COUNT(*) AS total'))->where('sponsor_user', request(['sponsor_user']))->get();
        
        if(($user->sponsor_user != $request->sponsor_user) && ($sponsor_line[0]->total >= 2 && $request->sponsor_user != 1))
            return response()->json(['status'=> 'error', 'case'=>'max_sp', 'message'=> 'Sponsor limit is 2'], 400); 


        if(!$find_sponsor_user && $user->id != 1) return response()->json(['status'=> 'error', 'message'=> 'Sponsor user not found'], 400);
        if($request->sponsor_user == $id) return response()->json(['status'=> 'error', 'message'=> 'User cannot be his owner'], 400);
        if(count($user_login) > 0) return response()->json(['status'=> 'error', 'case'=>'login', 'message'=> 'The email is already in use']);

        if($find_sponsor_user) $sponsor_user = $request->sponsor_user;
        else $sponsor_user = 0;
        /* ====VALIDATION==== */
        if(!$city_id) return response()->json(['status'=> 'error', 'message'=> 'City not found'], 400);
        if(!isValid($request->name)) return response()->json(['status'=> 'error', 'message'=> 'Name cannot include numbers'], 400);
        if(!isValid($request->last_name)) return response()->json(['status'=> 'error', 'message'=> 'Last name cannot include numbers'], 400);

        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->id_card = $request->id_card;
        $user->phone = $request->phone;

        $user->city_id = $request->city_id;
        $user->login = $request->login;
        $user->sponsor_user = $sponsor_user;

        if($request->state) $user->state = $request->state;
        if($request->state === 'Activo') {
            $user_consignments = UserConsignment::where('user_id', $user->id)->get();
            if(count($user_consignments) === 0) {
                $consignment = UserConsignment::create([
                    'user_id'=>$user->id,
                    'type'=>'Activación',
                    'state'=>'Aceptado'
                ]);
            }
        }
        if($request->created_at) $user->created_at = $request->created_at;

        $user->save();

        return response()->json([
            'message' => '¡Usuario actualizado exitosamente!',
            'data' => $user,
        ], 201);
    }

    /* ===========SECONDARY_DATA=============== */
    public function lines(Request $request, $id){
        $line_1 = ViewUserData::select(DB::raw('COUNT(*) AS total'))
                    ->where('sp_user_1', $id)
                    ->orWhere('sp_user_2', $id)
                    ->orWhere('sp_user_3', $id)
                    ->orWhere('sp_user_4', $id)
                    ->orWhere('sp_user_5', $id)
                    ->get();
        return response()->json([
            "id" => $id,
            "total" => $line_1[0]->total,
        ]);
    }

    public function sponsors(Request $request, $id){
        $user_sp = ViewUserSponsors::find($id);
        if(!$user_sp) return response()->json(['status'=> 'error', 'message'=> 'User not found']);
        return response()->json($user_sp);
    }
    
    public function usersLine(Request $request, $user_id, $line_id){
        if(!$user_id) return response()->json(['status'=> 'error', 'message'=> 'User not found']);
        if($line_id == 'all') {
            $line = ViewUserData::where('sp_user_1', '=', $user_id)
                              ->orWhere('sp_user_2', '=', $user_id)
                              ->orWhere('sp_user_3', '=', $user_id)
                              ->orWhere('sp_user_4', '=', $user_id)
                              ->orWhere('sp_user_5', '=', $user_id)
                              ->orWhere('sp_user_6', '=', $user_id)
                              ->orWhere('sp_user_7', '=', $user_id)
                              ->orWhere('sp_user_8', '=', $user_id)
                              ->orWhere('sp_user_9', '=', $user_id)
                            ->get();
            return response()->json($line);
        }
        else if($line_id <= 0 or $line_id > 9) return response()->json(['status'=> 'error', 'message'=> 'Invalid line'], 400);
        $sp_user = 'sp_user_'.$line_id;
        $line = ViewUserData::where($sp_user, '=', $user_id)->get();
        return response()->json($line);
    }

    /* =======PASSWORD========= */
    public function change_password(Request $request, $id){
        $user = User::find($id);
        if(!$user) return response()->json(['status'=> 'error', 'message'=> 'User not found']);
        if(!Hash::check(trim($request->current_password), $user->password)) return response()->json(['status'=> 'error', 'message'=> 'Current password incorrect!'], 400);

        if(!$request->current_password || !$request->new_password || !$request->confirm_password) return response()->json(['status'=> 'error', 'message'=> 'current_password, new_password and confirm_password are required'], 400);
        if (strlen($request->new_password) < 3) return response()->json(['status'=> 'error', 'message'=> 'Password must be at least 3 characters'], 400);
        if (strpos($request->new_password, " ")) return response()->json(['status'=> 'error', 'message' => 'Password cannot contain spaces'], 400);

        if ($request->confirm_password != $request->new_password) return response()->json(['status'=> 'error', 'message' => 'new password does not match confirmation']);

        $user->password = bcrypt($request->new_password);
        $user->save();
        return response()->json(['status'=> 'success', 'message'=> 'Password updated successfully'], 201);
    }    

    public function reset_password(Request $request, $id){
        $user = User::find($id);
        $user->password = bcrypt($user->id_card);
        $user->save();
        return response()->json(['status'=> 'success', 'message'=> 'Password updated successfully'], 201);
    }    
}
