<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
        $this->middleware('can:role.manage');
    }

    public function index(Request $request){
        $roles = Role::select('id', 'name')->where('name', 'NOT LIKE', 'admin')->get();
        return response()->json($roles);
    }
    public function show(Request $request, $id){
        $role = Role::find($id);
        $array = [
            "id"=>$role->id,
            "name"=>$role->name,
            "permissions"=>$role->permissions,
        ];
        return response()->json($array);
    }

    public function indexPermissions(Request $request){
        $permissions = Permission::all();
        return response()->json($permissions);
    }

    public function indexUsers(Request $request){
        $permissions = User::has('roles')->with('roles')->get();
        return response()->json($permissions);
    }

    public function create(Request $request){
        $validator = Validator::make($request->all(), ['name' => 'required|string|max:200|unique:roles']);
        if($validator->fails()) return response()->json(['message' => 'Field validation failed: '.$validator->errors()->toJson()],400);
        $role = Role::create(array_merge($validator->validate()));
        return response()->json(['status' => 'success','message' => '¡Rol registrado exitosamente!'], 201);
    }
    public function delete(Request $request, $id){
        $role = Role::find($id);
        if(!$role) return response()->json(['status'=>'error', 'message' => 'Role not found'], 400);
        $role->delete();
        return response()->json(['status'=>'success', 'message' => "Role deleted successfully"]);
    }
    public function addPermission(Request $request){
        $role_id = $request->role_id;
        $permission_id = $request->permission_id;
        $role = Role::findById($role_id);
        $permission = Permission::findById($permission_id);
        if(!$role) return response()->json(['status'=>'error', 'message'=>'Role not found'], 400);
        if(!$permission) return response()->json(['status'=>'error', 'message'=>'Permission not found'], 400);
        $role->givePermissionTo($permission->name);
        return response()->json(['status'=>'success', 'message' => "Permission assigned successfully"], 201);
    }
    
    public function removePermission(Request $request){
        $role_id = $request->role_id;
        $permission_id = $request->permission_id;
        $role = Role::find($role_id);
        $permission = Permission::find($permission_id);
        if(!$role) return response()->json(['status'=>'error', 'message'=>'Role not found'], 400);
        if(!$permission) return response()->json(['status'=>'error', 'message'=>'Permission not found'], 400);
        $role->revokePermissionTo($permission->name);
        return response()->json(['status'=>'success', 'message' => "Permission removed successfully"], 200);
    } 

    public function asignToUser(Request $request){
        $role_id = $request->role_id;
        $user_id = $request->user_id;
        $role = Role::find($role_id);
        $user = User::find($user_id);
        if(!$role) return response()->json(['status'=>'error', 'message'=>'Role not found'], 400);
        if(!$user) return response()->json(['status'=>'error', 'message'=>'User not found'], 400);
        $user->assignRole($role->name);
        return response()->json(['status'=>'success', 'message' => "Role asigned successfully"], 201);
    }
    
    public function removeOfUser(Request $request){
        $role_id = $request->role_id;
        $user_id = $request->user_id;
        $role = Role::find($role_id);
        $user = User::find($user_id);
        if(!$role) return response()->json(['status'=>'error', 'message'=>'Role not found'], 400);
        if(!$user) return response()->json(['status'=>'error', 'message'=>'User not found'], 400);
        $user->removeRole($role->name);
        return response()->json(['status'=>'success', 'message' => "Role removed successfully"], 200);
    }

}
