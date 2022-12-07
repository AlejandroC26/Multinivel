<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserConsignment;
use App\Models\ViewUserConsignments;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ConsignmentController extends Controller
{
    public function countWaitingUsers(Request $request) {
        $user_waiting = User::select(DB::raw('COUNT(*) AS count'))->where('state', '=', 'Revisión')->get();
        return response()->json($user_waiting);
    }

    public function listWaitingUsers(Request $request) {
        $user_consignments = ViewUserConsignments::where('user_state', '=', 'Revisión')
            ->get();
        return response()->json($user_consignments);
    }

    public function listUserDevolution(Request $request, $id) {
        if($request->devolucion > 3 || $request->devolucion <= 0) 
            return response()->json(['status'=> 'error', 'message'=> 'Rango de devoluciones no válido']);

        $param = 'sp_user_'.($request->devolucion*3);
        $devoluciones = DB::table('list_users_view')
            ->select('list_users_view.id', 'list_users_view.name','list_users_view.id_card', 'list_users_view.created_at', 
            'user_consignment.id as id_image', 'user_consignment.image', 'user_consignment.type', 'user_consignment.state')
            ->leftJoin('user_consignment', 'user_consignment.user_id', '=', 'list_users_view.id')
            ->where($param, '=', $id)
            ->where('user_consignment.type', '!=', 'Activacion')
            ->where('user_consignment.state', '!=', 'Aceptado')
            ->get();
        return response()->json($devoluciones);
    }

    public function changeStateConsignment(Request $request, $id) {
        $user_consignment = UserConsignment::find($id);
        if(!$user_consignment) 
            return response()->json(['status'=> 'error', 'message'=> 'User consignment not found'], 400);
            
        switch ($request->state) {
            case 'Aceptado':
                if($user_consignment->type === 'Activación') {
                    $user = User::find($user_consignment->user_id);
                    $user->state = 'Activo';
                    if(!$user->activation_date) $user->activation_date = now();
                    $user->save();
                }
                break;
            case 'Espera':break;
            case 'Rechazado':break;
            default: return response()->json(['status'=> 'error', 'message'=> 'Estado no permitido'], 400);
        }
        $user_consignment->state = $request->state;
        $user_consignment->save();
        
        return response()->json(['message' => '¡Estado cambiado exitosamente!'], 201);
    }

    public function listUserConsignments(Request $request, $id) {
        $user = User::find($id);
        if(!$user) return response()->json(['status'=> 'error', 'message'=> 'User not found']);

        $user_consignments = UserConsignment::where('user_id', $user->id)->get();
        return response()->json($user_consignments);
    }

    public function loadConsignmentFile (Request $request, $id){
        $user = User::find($id);
        if(!$user) return response()->json(['status'=> 'error', 'message'=> 'User not found']);

        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg|max:10240',
        ]);
        if($validator->fails()) return response()->json(['message' => 'Field validation failed: '.$validator->errors()->toJson()],400);

        $user_consignments = UserConsignment::where('user_id', $user->id)->get();
        if(count($user_consignments) === 0) {
            $consignment_type = 'Activación';
            $file_type_name = 'activacion';
            $user->state = 'Revisión';
            $user->save();
        }
        else if(count($user_consignments) === 1) {
            $consignment_type = 'Devolución 1';
            $file_type_name = 'devolucion_1';
        }
        else if(count($user_consignments) === 2) {
            $consignment_type = 'Devolución 2';
            $file_type_name = 'devolucion_2';
        }
        else if(count($user_consignments) === 3) {
            $consignment_type = 'Devolución 3';
            $file_type_name = 'devolucion_3';
        } else {
            return response()->json(['message' => 'Este usuario no puede cargar mas archivos de consignación'],400);
        }

        $consignment_file_name = $user->id.'_'.$file_type_name.'_'.$user->id_card.'.jpeg';
        $request->file('image')->storeAs('public/user-consignment', $consignment_file_name);

        $consignment = UserConsignment::create(array_merge(
            $validator->validate(),[
                'user_id' => $id,
                'image' => $consignment_file_name,
                'type' => $consignment_type
            ]
        ));
        return response()->json([
            'message' => '¡Archivo cargado exitosamente!',
            'data' => $consignment
        ], 201);        
    }

    public function updateConsignmentFile (Request $request, $id){
        $user_consignment = UserConsignment::find($id);
        if(!$user_consignment) return response()->json(['status'=> 'error', 'message'=> 'User consignment not found']);
        
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg|max:10240',
        ]);
        if($validator->fails()) return response()->json(['message' => 'Field validation failed: '.$validator->errors()->toJson()],400);
       
        $consignment_file_name = $user_consignment->image;
        $request->file('image')->storeAs('public/user-consignment', $consignment_file_name);

        $user_consignment->state = 'Espera';
        $user_consignment->save();
        return response()->json([
            'message' => '¡Archivo actualizado exitosamente!'
        ], 201);  
    }

    public function showFileConsignment(Request $request, $id) {
        $consignment = UserConsignment::find($id);
        if(!$consignment) return response()->json(['status'=> 'error', 'message'=> 'User consignment not found']);
        $file_name = $consignment->image;
        $url = 'user-consignment/'.$file_name;
        $path = storage_path('app/public/'.$url);
        $base64 = base64_encode(file_get_contents($path));
        return response()->json(["data"=>$base64]);
    }  
}
