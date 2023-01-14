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
            $table->string('title');
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('manager_id')->constrained('users');
            $table->date('start');
            $table->date('end');
            $table->tinyInteger('status')->default(0);
            $table->foreignId('team_id')->nullable()->constrained('teams');
            $table->longText('description')->nullable();
            $table->timestamps();
        });

        Schema::create('project-worker', function (Blueprint $table) {
            $table->foreignId('project_id')->constrained('projects');
            $table->foreignId('worker_id')->constrained('users');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project-worker');
        Schema::dropIfExists('projects');
    }
};
