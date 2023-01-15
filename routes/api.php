<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmployeeController;
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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/positions',[EmployeeController::class,'positions'])->name('positions');
    Route::apiResource('/category',CategoryController::class)->names('category');
    Route::get('/users/by-email',[UserController::class,'showByEmail'])->name('user.showByEmail');
    Route::apiResource('/users',UserController::class)->names('user');
    Route::apiResource('/employees',EmployeeController::class)->names('employee');
    
});
