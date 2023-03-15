<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Chat;
use App\Models\Comment;
use App\Models\Contact;
use App\Models\Department;
use App\Models\Designation;
use App\Models\Employee;
use App\Models\Project;
use App\Models\ProjectTask;
use App\Models\Task;
use App\Models\Todo;
use App\Models\User;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });

        Route::model('category',Category::class);
        Route::model('user',User::class);
        Route::model('employee',Employee::class);
        Route::model('project',Project::class);
        Route::model('task',Task::class);
        Route::model('project_task',ProjectTask::class);

        Route::model('department',Department::class);
        Route::model('designation',Designation::class);
        Route::model('todo',Todo::class);
        Route::model('contact',Contact::class);
        
        Route::model('chat',Chat::class);
        Route::model('comment',Comment::class);
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }
}
