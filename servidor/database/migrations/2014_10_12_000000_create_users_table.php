<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name')->nullable();
            $table->string('id_card');
            $table->string('phone');
            $table->foreignId('city_id')
                  ->nullable()
                  ->constrained('cities')
                  ->cascadeOnUpdate()
                  ->nullOnDelete();
            $table->string('login');
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->enum('count_type', ['Nequi','Daviplata','Bancolombia - Ahorros', 'Bancolombia - Corriente'])->default('Nequi');
            $table->string('count_number');
            $table->integer('sponsor_user')->nullable();
            $table->enum('state', ['Activo', 'Revisión', 'Inactivo', 'Finalizado'])->default('Inactivo');
            $table->datetime('activation_date')->nullable();
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
        Schema::dropIfExists('users');
    }
}
