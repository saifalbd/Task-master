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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('manager_id')->nullable()->constrained('users');
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('team_id')->nullable()->constrained('teams');
            $table->string('title');
            $table->date('start');
            $table->date('end');
            $table->tinyInteger('status')->default(0);
            $table->longText('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('project_tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('project_id')->constrained('projects');
            $table->foreignId('category_id')->constrained('categories');
            $table->string('title');
            $table->date('start');
            $table->date('end');
            $table->tinyInteger('status')->default(0);
            $table->longText('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('project_tasks_employee', function (Blueprint $table) {
            $table->id();
            $table->foreignId('task_id')->constrained('project_tasks');
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
       
        Schema::dropIfExists('project_tasks_employee');
        Schema::dropIfExists('project_tasks');
        Schema::dropIfExists('projects');
    }
};
