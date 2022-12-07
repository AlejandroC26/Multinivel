<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserView extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement($this->dropView());
        DB::statement($this->createView());
    }
   
    private function createView(): string
    {
        return <<<SQL
            CREATE VIEW list_users_view AS
                select u.id, CONCAT(u.name, ' ', u.last_name) as name, u.id_card,
                    u.sponsor_user as sp_user_1,
                    (SELECT sponsor_user from users where id = sp_user_1) as sp_user_2,
                    (SELECT sponsor_user from users where id = sp_user_2) as sp_user_3,
                    (SELECT sponsor_user from users where id = sp_user_3) as sp_user_4,
                    (SELECT sponsor_user from users where id = sp_user_4) as sp_user_5,
                    (SELECT sponsor_user from users where id = sp_user_5) as sp_user_6,
                    (SELECT sponsor_user from users where id = sp_user_6) as sp_user_7,
                    (SELECT sponsor_user from users where id = sp_user_7) as sp_user_8,
                    (SELECT sponsor_user from users where id = sp_user_7) as sp_user_9,
                    u.created_at
                from users u
                GROUP BY u.id;
            SQL;
    }
   
    private function dropView(): string
    {
        return <<<SQL
            DROP VIEW IF EXISTS list_users_view;
        SQL;
    }
}
