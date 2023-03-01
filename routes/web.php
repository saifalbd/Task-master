<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Models\Chat;
use App\Models\Employee;
use App\Models\Task;
use App\Models\User;
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
Route::get('{any?}', function () {
    return view('app');
})->where('any', '[\/\w\.-]*');



Route::get('/test', function(Request $request){
   
    $sender_id =1;
    $receiver_id = 2;

    return Chat::query()->where(compact('sender_id','receiver_id'))->orWhere(['receiver_id'=>$sender_id,'sender_id'=>$receiver_id])->toSql();
});