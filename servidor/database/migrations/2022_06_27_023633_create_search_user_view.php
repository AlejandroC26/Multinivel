<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSearchUserView extends Migration
{
    public function up()
    {
        DB::statement($this->dropView());
        DB::statement($this->createView());
    }
    
    private function createView(): string
    {
        return <<<SQL
            CREATE VIEW `search_user_view` AS 
                select  u.id, CONCAT(u.name, ' ', u.last_name) as 'name', u.phone, u.state,
                    sp_user.id as sp_user_1, CONCAT(sp_user.name, ' ', sp_user.last_name) as sp_user_1_name,
                    u.city_id, c.name as city_name, c.department, c.country_code, cou.name as country_name,
                    u.login, u.created_at 
                from users u
                left join cities c on c.id = u.city_id
                left join countries cou on cou.code = c.country_code
                left JOIN users as sp_user on u.sponsor_user = sp_user.id
            SQL;
    }
    
    /**
        * Reverse the migrations.
        *
        * @return void
        */
    private function dropView(): string
    {
        return <<<SQL
            DROP VIEW IF EXISTS search_user_view;
        SQL;
    }
}
