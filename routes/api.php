<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\My\ProjectController as MyProjectController;
use App\Http\Controllers\My\TaskController as MyTaskController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectTaskController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/notifications',[UserController::class,'notifications'])->name('notification');
    Route::get('/positions',[EmployeeController::class,'positions'])->name('positions');
    Route::apiResource('/category',CategoryController::class)->names('category');
    Route::post('/avatar',[AuthController::class,'uploadAvatar'])->name('avatar');
    Route::get('/users/by-email',[UserController::class,'showByEmail'])->name('user.showByEmail');
    Route::apiResource('/users',UserController::class)->names('user');
    Route::apiResource('/employees',EmployeeController::class)->names('employee');
    Route::apiResource('/teams',TeamController::class)->names('team');
    Route::get('/projects/{project}/members',[ProjectController::class,'members'])->name('project.members');
    Route::post('/project/{project}/change-status',[ProjectController::class,'changeStatus'])->name('project.changeStatus');
    Route::apiResource('/projects',ProjectController::class)->names('project');
    
    Route::apiResource('/projects.project-tasks',ProjectTaskController::class)->names('project.task');
    Route::apiResource('/tasks',TaskController::class)->names('task');
    Route::post('/tasks/{task}/change-status',[TaskController::class,'changeStatus'])->name('task.changeStatus');
    Route::post('/comments/{comment}/toggle-likes',[CommentController::class,'toggleLikes'])->name('comment.toggleLike');
    Route::apiResource('/comments',CommentController::class)->names('comment');
    Route::get('/chat-users',[ChatController::class,'chatUsers'])->name('chatUsers');
    Route::put('/chats/{chat}/read',[ChatController::class,'read'])->name('chat.read');
    Route::apiResource('/chats',ChatController::class)->only(['index','store','destroy'])->names('chat');

//changeStatus

    Route::prefix('/my')->name('my.')->group(function(){
        Route::apiResource('/task',MyTaskController::class)->only(['index','show','update'])->names('task');
        Route::apiResource('/project',MyProjectController::class)->only(['index','show','update'])->names('project');
    });
    
});
