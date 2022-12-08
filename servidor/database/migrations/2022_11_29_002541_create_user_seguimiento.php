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
                SELECT * from users
            SQL;
    }

    private function dropView(): string
    {
        return <<<SQL
            DROP VIEW IF EXISTS user_seguimiento;
        SQL;
    }
}
