<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserSeguimiento extends Migration
{
    public function up()
    {
        DB::statement($this->dropView());
        DB::statement($this->createView());
    }
    
    private function createView(): string
    {
        return <<<SQL
            CREATE VIEW `user_seguimiento` AS 
                SELECT COUNT(*) as total, 
                    DATE_FORMAT(activation_date, "%Y-%m-%d") as activacion, 
                    DATE_ADD(DATE_FORMAT(activation_date, "%Y-%m-%d"), INTERVAL 11 DAY) pago1, 
                    DATE_ADD(DATE_FORMAT(activation_date, "%Y-%m-%d"), INTERVAL 22 DAY) pago2, 
                    DATE_ADD(DATE_FORMAT(activation_date, "%Y-%m-%d"), INTERVAL 33 DAY) pago3 
                FROM users 
                WHERE state = 'Activo' 
                and activation_date 
                GROUP BY DATE_FORMAT(activation_date, "%Y-%m-%d")
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
            DROP VIEW IF EXISTS user_seguimiento;
        SQL;
    }
}
