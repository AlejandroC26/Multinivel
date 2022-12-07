<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\SalePoint;
use App\Models\SalesView;
use App\Models\PaymentsView;
use App\Models\SalePointView;
use App\Models\ViewUserData;
use App\Models\ViewSearchUser;
use App\Models\CommissionsView;
use App\Models\CommissionPayment;

class SearchController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api', ['except'=> ['publicUserSearch']]);
        $this->middleware('can:users.show', ['only'=> ['userSearch']]);
        $this->middleware('can:salepoint.show', ['only'=> ['salePointSearch']]);
        $this->middleware('sl.permission', ['only'=> ['salesSearch']]);
        $this->middleware('can:commission.show', ['only'=> ['commissionsSearch']]);    
        $this->middleware('can:payment.show', ['only'=> ['paymentsSearch']]);   
    }

    public function publicUserSearch(Request $request){
        $type = $request->type_search;
        if(!$type) $type = 'code';

        $search = $request->search;
        if(!$search) $search = '';
        /* ---LIMIT--- */
        if($request->limit) $limit = $request->limit;
        else $limit = 100;
        /* ---ORDER---- */
        $order = $request->order;
        if($order != 'ASC') $order = 'DESC';

        switch ($type) {
            case 'code':
                $param_search =  'id';
                break;
            case 'card':
                $param_search =  'id_card';
                break;
            case 'name':
                $param_search =  'name';
                break;
            
            default: 
                $param_search =  'id';
                break;
        }
        
        $user = User::select('id', 'id_card', 'name','last_name')
            ->where($param_search, 'like', $search.'%')
            ->where('state', '!=', 'Finalizado')
            ->take($limit)
            ->orderBy('id', $order)
            ->get();
        return response()->json($user);
    }

    public function userSearch(Request $request){
        $type = $request->type_search;
        if(!$type) $type = 'code';

        $search = $request->search;
        if(!$search) $search = '';
        /* ---LIMIT--- */
        if($request->limit) $limit = $request->limit;
        else $limit = 100;
        /* ---ORDER---- */
        $order = $request->order;
        if($order != 'ASC') $order = 'DESC';

        switch ($type) {
            case 'code':
                $param_search =  'id';
                break;
            case 'card':
                $param_search =  'id_card';
                break;
            case 'name':
                $param_search =  'name';
                break;
            case 'login':
                $param_search =  'login';
                break;
            
            default: 
                $param_search =  'id';
                break;
        }
        
        $user = ViewSearchUser::select('id', 'name','id_card', 'sp_user_1_name', 'login', 'state', 'created_at')
            ->where($param_search, 'like', $search)
            ->orWhere($param_search, 'like', $search.'%')
            ->take($limit)
            ->orderBy('id', $order)
            ->get();
        return response()->json($user);
    }
    
    public function salePointSearch(Request $request){
        $search = $request->search;
        $type = $request->type;
        $page = $request->page;
        if(!$page) $page = 1;
        if(!$type) $type = 'code';
        if(!$search) $search = '';
        if($request->limit) $limit = $request->limit;
        else $limit = 100;

        switch ($type) {
            case 'id':
                $param_search =  'id';
                break;
            case 'nit':
                $param_search =  'nit';
                break;
            default: 
                $param_search =  'name';
                break;
        }
        $count = SalePoint::select(DB::raw('COUNT(*) AS count'))->get();
        $sp_count = $count[0]->count;
        $skyp = ($page-1) * $limit;
        $sale_point = SalePointView::where($param_search, 'like', '%'.$search.'%')
            ->skip($skyp)
            ->take($limit)
            ->get();
        if($search){
            $sp_count = count($sale_point);
        }
        return response()->json([
            'resoults'=> $sp_count,
            'page' => $page,
            'total_pages' => ceil($sp_count/$limit),
            'size'=> intval($limit),
            'data'=> $sale_point
        ]);
    }

    // THIS SEARCHS SHOULD BE ENABLED TO USERS
    public function salesSearch(Request $request){
        $sale_point = $request->sale_point;
        $client_id = $request->client_id;
        $order = $request->order;
        if($order != 'ASC') $order = 'DESC';
        if($request->limit) $limit = $request->limit;
        else $limit = 100;
        if(!$sale_point){
            if($client_id){
                $sale = SalesView::where('client_user_id', '=', $client_id)
                    ->take($limit)
                    ->orderBy('id', $order)
                    ->get();
            } else {
                $sale = SalesView::take($limit)
                    ->orderBy('id', $order)
                    ->get();
            }
        } else {
            $sale = SalesView::where('sale_point_id', '=', $sale_point)
                ->take($limit)
                ->orderBy('id', $order)
                ->get();
        }

        return response()->json($sale);
    }
    public function commissionsSearch(Request $request){
        $user = $request->user_id;
        $type = $request->type_search;
        $group_by = $request->group_by;
        if(!$type) $type = 'code';
        $search = $request->search;
        if(!$search) $search = '';
        /* ---ORDER---- */
        $order = $request->order;
        if($order != 'ASC') $order = 'DESC';
        /* ---LIMIT------ */
        if($request->limit) $limit = $request->limit;
        else $limit = 100;
        /* ===SWITCH TYPE=== */
        switch ($type) {
            case 'code':
                $param_search =  'id';
                break;
            case 'card':
                $param_search =  'id_card';
                break;
            case 'name':
                $param_search =  'name';
                break;
            case 'email':
                $param_search =  'email';
                break;
            
            default: 
                $param_search =  'id';
                break;
        }

        if($group_by){
            switch ($group_by) {
                case 'sale_point':
                    $commissions = CommissionsView::take($limit)->get();
                    break;
                
                default:
                    $commissions = DB::table('user_money_view')
                        ->select('users.id as user_id', 'user_money_view.name as user_name', 'users.id_card', 'current_money as money')
                        ->join('users', 'users.id', '=', 'user_money_view.id')
                        ->where('current_money', '>', '1')
                        ->where('users.'.$param_search, 'like', $search.'%')
                        ->take($limit)->orderBy('users.id', $order)->get();
                    break;
            }
        }
        else {
            switch ($type) {
                case 'company':
                    $commissions = CommissionsView::select('sale_id', 'client_user_id', 'client_user_name', 'sale_point_id',
                    'sale_point_name', DB::raw('SUM(money) AS money'), 'created_at'
                    )->where('type', '=', $type)->groupBy('client_user_id')->take($limit)->orderBy('id', 'DESC')->get();
                    break;
                
                default:
                    if($user){
                        $commissions = CommissionsView::where('user_id', '=', $user)->take($limit)->get();
                    } else {
                        $commissions = CommissionsView::take($limit)->get();
                    }
                    break;
            }
        }

        return response()->json($commissions);
    }
    public function paymentsSearch(Request $request){
        $user = $request->user_id;
        $type = $request->type;
        $group_by = $request->group_by;
        if($request->limit) $limit = $request->limit;
        else $limit = 100;

        if($group_by == 'users'){
            $payments = PaymentsView::select(DB::raw('SUM(money) AS money'), 'user_id', 'user_name', 'created_at')
                ->groupBy('user_id')
                ->take($limit)
                ->orderBy('id', 'DESC')->get();
        } else {
            if($user){
                $payments = PaymentsView::where('user_id', '=', $user)->take($limit)->orderBy('id', 'DESC')->get();
            } else {
                $payments = PaymentsView::take($limit)->orderBy('id', 'DESC')->get();
            }
        }

        return response()->json($payments);
    }
}
