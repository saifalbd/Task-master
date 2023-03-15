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
    $users = array(
        array('id' => '1','name' => 'saiful islam','email' => 'testx@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$vTQrBGj56P7/JXbMYtcdROLQQh.lEMRb9Iby8pIMnxWJ.Jq3ShKTG','avatar_id' => NULL,'status' => '0','remember_token' => NULL,'created_at' => '2023-02-28 12:48:43','updated_at' => '2023-03-08 23:56:42'),
        array('id' => '3','name' => 'saiful islam','email' => 'test@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$ogBhPMGBmbtGXeuNgD1hE.BQmMQHzYE/lmpq7UJdVVLUNMgvlC1OO','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-02-28 12:50:33','updated_at' => '2023-03-04 12:45:44'),
        array('id' => '4','name' => 'saiful islam','email' => 'tests@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$i1WLo9HB1MbPIDIqOsvflecYM57rShEbbemoheb1QEXCzAJmI1KxS','avatar_id' => NULL,'status' => '0','remember_token' => NULL,'created_at' => '2023-02-28 12:50:59','updated_at' => '2023-02-28 12:50:59'),
        array('id' => '5','name' => 'Eva jannat','email' => 'eva@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$n0WFj2Up1jtN1GBwrtwqdeyJTu0setBcHNtkahnGd5TO5Oe2fQXC6','avatar_id' => NULL,'status' => '0','remember_token' => NULL,'created_at' => '2023-02-28 13:29:52','updated_at' => '2023-02-28 13:29:52'),
        array('id' => '6','name' => 'monir hossain','email' => 'moniracc@gmail.com','phone' => '01732221635','email_verified_at' => NULL,'password' => '$2y$10$GDkDFJAaqqJNtEN9uG0aYu9DvGF0JWf.XXJgX66t.zk3to2duWKE.','avatar_id' => NULL,'status' => '1','remember_token' => NULL,'created_at' => '2023-03-02 10:09:49','updated_at' => '2023-03-05 01:53:40'),
        array('id' => '7','name' => 'Monir Hossain','email' => 'acca.monir@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$ogBhPMGBmbtGXeuNgD1hE.BQmMQHzYE/lmpq7UJdVVLUNMgvlC1OO','avatar_id' => '4','status' => '1','remember_token' => NULL,'created_at' => '2023-03-02 11:09:59','updated_at' => '2023-03-06 11:15:02'),
        array('id' => '8','name' => 'Roksana Akter','email' => 'bobymoni7@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$6l418zc4CAIj/VxBu23kQ.QiWC.IYwgRGEUJr136wTMSDIutIKQEa','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-02 11:11:57','updated_at' => '2023-03-02 11:16:23'),
        array('id' => '9','name' => 'Evan','email' => 'syed.alam4252@gmail.com','phone' => '01902885582','email_verified_at' => NULL,'password' => '$2y$10$XTgpM9NW8gd691vx/VMHhuCcCJUYi0cDDMznbBwpgrrfS4Tg7u4PO','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-02 11:21:36','updated_at' => '2023-03-06 11:41:32'),
        array('id' => '10','name' => 'Faysal','email' => 'faysalsadik@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$1OMnEVTELdZtYlQ6Bx35buyfVbFTd0F3qQ97HJs9.wl66VF1957R2','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-02 20:19:50','updated_at' => '2023-03-02 21:01:26'),
        array('id' => '11','name' => 'Md Moshiur Rahman Sumon','email' => 'iamsumon729@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$IM7/InOVVEPCiroLRMN3TOad6ANGZmhbFxJLeErgbWRHut4omtIX6','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-04 13:55:49','updated_at' => '2023-03-04 15:45:19'),
        array('id' => '22','name' => 'Esrat Fatema Bhuiyan','email' => 'esratbhuiyan20@gmail.com','phone' => '01682014607','email_verified_at' => NULL,'password' => '$2y$10$thtX/IS8saTn7OYZbffjpu7qncSeKEvUzY38sl.jXQdFHWbmdAD0i','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-04 16:41:46','updated_at' => '2023-03-06 10:28:34'),
        array('id' => '23','name' => 'Shuvo','email' => 'sajjadshuvo1212@gmail.com','phone' => '','email_verified_at' => NULL,'password' => '$2y$10$flwhwgOc1u1n.wwek9bM9.rH77dw3HLZpbdfov8XLgq8hPTiMwe8q','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-04 23:06:10','updated_at' => '2023-03-04 23:07:34'),
        array('id' => '24','name' => 'Farhana Rob Shampa','email' => 'farhanarobnub@gmail.com','phone' => '01712973553','email_verified_at' => NULL,'password' => '$2y$10$VMMvDqbyO8Q9Lb5GfsURDORdT5PyZ1KZDag4pu99WZ27GXbmtm6m2','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-06 10:26:18','updated_at' => '2023-03-06 10:34:53'),
        array('id' => '25','name' => 'Tahsin Mahiat','email' => 'tahsinmahiat506@gmail.com','phone' => '01918184447','email_verified_at' => NULL,'password' => '$2y$10$Jsz14yQ1gC6RTAltczK6hucb8lyqECPuH8/TSqOgL58MMlZSnzhIK','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-06 10:28:00','updated_at' => '2023-03-06 10:31:46'),
        array('id' => '26','name' => 'Abeda Azmain','email' => 'aazmain59@gmail.com','phone' => '01768263169','email_verified_at' => NULL,'password' => '$2y$10$W5sjasQcmvYbcFr6ZN70i.yn80srPr7oKUNx6OPeTfzGQedJo3qHW','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-06 10:30:11','updated_at' => '2023-03-06 10:31:34'),
        array('id' => '27','name' => 'Md Bellal Hossain','email' => 'mohammad.hbelal@gmail.com','phone' => '01719065557','email_verified_at' => NULL,'password' => '$2y$10$SNU5uMW9GTU1Cjd3Nxmi4e0BKW8HjCHaCHILqRO9975OBESvyC856','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-06 10:34:40','updated_at' => '2023-03-06 11:01:50'),
        array('id' => '28','name' => 'Ratan','email' => 'rasel.m.ratan@gmail.com','phone' => '01516163175','email_verified_at' => NULL,'password' => '$2y$10$lNLH0pio3V4Lumd1CZgn3.V34Me1zxAMzPzD2dl7dkPUqe0CNqNDi','avatar_id' => '1','status' => '0','remember_token' => NULL,'created_at' => '2023-03-06 21:55:32','updated_at' => '2023-03-06 21:57:43'));

        collect($users)->map(function($item){
            $name = $item['name'];
            $email = $item['email'];
            
        });
  
    });

Route::get('{any?}', function () {
    return view('app');
})->where('any', '[\/\w\.-]*');



