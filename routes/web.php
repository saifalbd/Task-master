<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Models\Chat;
use App\Models\Employee;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
Route::get('/test', function(Request $request){

    $color = '{"text":"#262824","bg":"#FFFFFF","border":"#767C88"}';

    DB::table('categories')->update(compact('color'));
   
    });

Route::get('{any?}', function () {
    return view('app');
})->where('any', '[\/\w\.-]*');



