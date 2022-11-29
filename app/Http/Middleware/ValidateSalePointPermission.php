<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\AsignedSalePointUsers;

class ValidateSalePointPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $permission)
    {
        $param_id = $request->id;
        $user = $request->user();
        $sale_point = AsignedSalePointUsers::where('user_id', '=', $user->id)
        ->whereAnd('sale_point_id', '=', $param_id)->get();
        if(count($sale_point) <= 0 && !$user->hasPermissionTo($permission)) {
            return response()->json(['message'=>"User doesn't have permission for this accion"], 403);
        }
        return $next($request);
    }
}
