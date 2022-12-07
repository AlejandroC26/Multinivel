<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserConsignment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_consignment', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                  ->constrained('users')
                  ->cascadeOnUpdate();
            $table->string('image')->nullable();
            $table->enum('type', ['Activación', 'Devolución 1', 'Devolución 2', 'Devolución 3']);
            $table->enum('state', ['Aceptado', 'Rechazado', 'Espera'])->default('Espera');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_consignment');
    }
}
