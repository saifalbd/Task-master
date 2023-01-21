<?php

namespace App\Providers;

use App\Models\Employee;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'user' => User::class,
            'employee'=>Employee::class,
            'project'=>Project::class,
            'task'=>Task::class
            ]);
    }
}
