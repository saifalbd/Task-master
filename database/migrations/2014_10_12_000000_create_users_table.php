<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
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
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('user-employee', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained();
            $table->foreignId('employee_id')->constrained('users');
        });

        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('captain_id')->constrained('users');
            $table->timestamps();
        });

        Schema::create('team-employee', function (Blueprint $table) {
            $table->foreignId('team_id')->constrained('teams');
            $table->foreignId('employee_id')->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team-employee');
        Schema::dropIfExists('teams');
        Schema::dropIfExists('user-employee');
        Schema::dropIfExists('users');
    }
};
