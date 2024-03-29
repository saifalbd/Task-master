<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EventCategoryController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\My\ProjectController as MyProjectController;
use App\Http\Controllers\My\TaskController as MyTaskController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectTaskController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskTypeController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilityController;
use App\Models\EventCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::put('/online/{user}',[AuthController::class,'online'])->name('online');
Route::put('/offline/{user}',[AuthController::class,'offline'])->name('offline');
Route::post('/forget-password',[AuthController::class,'submitForgetPasswordForm'])->name('forgetPassword');

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/profile/{user}',[AuthController::class,'profile'])->name('profile');
    Route::put('/update-profile',[AuthController::class,'updateProfile'])->name('updateProfile');
    Route::put('/update-personal-information',[AuthController::class,'updatePersonalInformation'])->name('updatePersonalInformation');
    Route::put('/update-emergency-contact',[AuthController::class,'emergencyContactUpdate'])->name('emergencyContactUpdate');
    
    
    /**Start UtilityController */
    Route::get('/dropdowns/{slug}',[UtilityController::class,'dropdowns'])->name('dropdown');
    /**End UtilityController */
    

    Route::get('/notifications',[UserController::class,'notifications'])->name('notification');
    Route::put('/mark-as-read-notify/{id}',[UtilityController::class,'markAsReadNotify'])->name('markAsReadNotify');
    Route::apiResource('/category',CategoryController::class)->names('category');
    Route::post('/avatar',[AuthController::class,'uploadAvatar'])->name('avatar');
    Route::get('/users/by-email',[UserController::class,'showByEmail'])->name('user.showByEmail');
   

    Route::apiResource('/users',UserController::class)->names('user');

    Route::apiResource('/contacts',ContactController::class)->names('contact');

    Route::apiResource('/departments',DepartmentController::class)->only(['index','store','update','destroy'])->names('department');
    Route::apiResource('/designations',DesignationController::class)->only(['index','store','update','destroy'])->names('designation');


    Route::get('/employee-proposals',[EmployeeController::class,'employeeProposal'])->name('employeeProposal');
    Route::get('/accept-proposal/{employee}',[EmployeeController::class,'acceptProposal'])->name('acceptProposal');
    Route::get('/deny-proposal/{employee}',[EmployeeController::class,'denyProposal'])->name('denyProposal');
    Route::apiResource('/employees',EmployeeController::class)->names('employee');
    Route::apiResource('/clients',ClientController::class)->only(['index','show'])->names('client');


    Route::apiResource('/teams',TeamController::class)->names('team');
    Route::get('/projects/{project}/members',[ProjectController::class,'members'])->name('project.members');

    Route::apiResource('/todos',TodoController::class)->names('todo');


    Route::apiResource('/event-categories',EventCategoryController::class)->names('eventCategory');
    Route::apiResource('/events',EventController::class)->names('event');

    Route::post('/project/{project}/change-status',[ProjectController::class,'changeStatus'])->name('project.changeStatus');
    Route::apiResource('/projects',ProjectController::class)->names('project');
    

    Route::apiResource('/projects.project-tasks',ProjectTaskController::class)->names('project.task');
    Route::apiResource('/tasks',TaskController::class)->names('task');
    Route::get('/task-archives',[TaskController::class,'archives'])->name('task.archives');
    Route::post('/task-archives/{task}',[TaskController::class,'doArchive'])->name('task.doArchive');
    Route::post('/tasks/{task}/change-status',[TaskController::class,'changeStatus'])->name('task.changeStatus');
    Route::post('/tasks/{task}/change-star',[TaskController::class,'changeStar'])->name('task.changeStar');
    Route::apiResource('/task-types',TaskTypeController::class)->only(['index','store','destroy','update'])
    ->names('taskType');


    Route::post('/comments/{comment}/toggle-likes',[CommentController::class,'toggleLikes'])->name('comment.toggleLike');
    Route::apiResource('/comments',CommentController::class)->names('comment');
    Route::get('/chat-users',[ChatController::class,'chatUsers'])->name('chatUsers');
    Route::get('/unreadcount',[ChatController::class,'unreadcount'])->name('chatUnreadcount');
    Route::put('/chats/{chat}/read',[ChatController::class,'read'])->name('chat.read');
    Route::apiResource('/chats',ChatController::class)->only(['index','store','destroy'])->names('chat');

//changeStatus

Route::prefix('/home')->name('home.')->group(function(){
    Route::get('/tasks',[HomeController::class,'recentTasks'])->name('recentTask');
    Route::get('/job-tasks',[HomeController::class,'recentJobTasks'])->name('recentJobTask');
});

    Route::prefix('/my')->name('my.')->group(function(){
        Route::apiResource('/task',MyTaskController::class)->only(['index','show','update'])->names('task');
        Route::get('/task-archives',[MyTaskController::class,'archives'])->name('task.archives');
        Route::apiResource('/project',MyProjectController::class)->only(['index','show','update'])->names('project');
    });
    
});
