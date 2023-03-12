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
            $table->string('phone')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('status')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });




        Schema::create('user_employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('employee_id')->constrained('users');
            $table->foreignId('designation_id');
            $table->boolean('accepted')->default(false);
            $table->timestamps();
        });
        
       

        // Schema::create('user_clients', function (Blueprint $table) {
        //     $table->foreignId('user_id')->constrained();
        //     $table->foreignId('client_id')->constrained('users');
        //     $table->boolean('accepted')->default(false);
        //     $table->timestamps();
        // });

        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('category_id');
            $table->foreignId('manager_id')->constrained('users');
            $table->timestamps();
        });

        Schema::create('team-member', function (Blueprint $table) {
            $table->foreignId('team_id')->constrained('teams');
            $table->foreignId('member_id')->constrained('users');
        });

        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->date('birth_date')->nullable();
            $table->string('gender')->nullable();
            $table->text('address')->nullable();
            $table->timestamps();
        });

        Schema::create('personal_informations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('nationality')->nullable();
            $table->string('religion')->nullable();
            $table->string('marital_status')->nullable();
            $table->timestamps();
        });

        Schema::create('emergency_contacts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('type')->default('primary');
            $table->string('name')->nullable();
            $table->string('relationship')->nullable();
            $table->string('phone')->nullable();
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
        Schema::dropIfExists('emergency_contacts');
        Schema::dropIfExists('personal_informations');
        Schema::dropIfExists('profiles');
        Schema::dropIfExists('team-member');
        Schema::dropIfExists('teams');
        Schema::dropIfExists('user-employee');
        Schema::dropIfExists('users');
    }
};
