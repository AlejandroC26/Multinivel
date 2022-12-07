<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserSponsorsView extends Migration
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
  
  
   /**
    * Reverse the migrations.
    *
    * @return void
    */
   private function createView(): string
   {
       return <<<SQL
           CREATE VIEW `sponsor_users_view` AS 
                select luv.id, CONCAT(luv.name) as name, 
                    sp_user_1, CONCAT(u1.name, ' ', u1.last_name) as sp_user_1_name, 
                    sp_user_2, CONCAT(u2.name, ' ', u2.last_name) as sp_user_2_name,
                    sp_user_3, CONCAT(u3.name, ' ', u3.last_name) as sp_user_3_name, 
                    sp_user_4, CONCAT(u4.name, ' ', u4.last_name) as sp_user_4_name,
                    sp_user_5, CONCAT(u5.name, ' ', u5.last_name) as sp_user_5_name 
                    FROM list_users_view luv
                LEFT JOIN users u1 on u1.id = sp_user_1
                LEFT JOIN users u2 on u2.id = sp_user_2
                LEFT JOIN users u3 on u3.id = sp_user_3
                LEFT JOIN users u4 on u4.id = sp_user_4
                LEFT JOIN users u5 on u5.id = sp_user_5
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
           DROP VIEW IF EXISTS sponsor_users_view;
       SQL;
   }
}
