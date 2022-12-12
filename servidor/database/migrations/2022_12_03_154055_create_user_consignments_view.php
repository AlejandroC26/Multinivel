<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserConsignmentsView extends Migration
{
    public function up()
    {
        DB::statement($this->dropView());
        DB::statement($this->createView());
    }
    
    private function createView(): string
    {
        return <<<SQL
            CREATE VIEW `user_consignment_view` AS 
                SELECT u.id, 
                    u.name,
                    u.last_name,
                    u.state as user_state,
                    uc.id as id_image,
                    image, 
                    type, 
                    uc.id as uc_id,
                    uc.state as consignment_state,
                    u.created_at as fecha_registro
                FROM user_consignment uc
                LEFT JOIN users u ON u.id = uc.user_id;
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
            DROP VIEW IF EXISTS user_consignment_view;
        SQL;
    }
}
