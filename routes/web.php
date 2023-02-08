<?php

use App\Http\Controllers\AuthController;
use App\Models\Employee;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/login',[AuthController::class,'login'])->name('login');
Route::post('/register',[AuthController::class,'register'])->name('register');
Route::get('/', function () {
    return view('app');
});


Route::get('/test', function(Request $request){
    $user_id = 2;
    return Task::query()->where('employee_id',$user_id)->get();
});