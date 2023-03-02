<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Attachment;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

       $avarar = Attachment::create([
            'type'=>'image/jpeg',
            'disk'=>'s3',
            'path'=>'task-master/hero.png',
            'model'=>'User'
        ]);

        User::create([
            'name' =>'Saiful islam',
            'email' => 'test@gmail.com',
            'avatar_id'=>$avarar->id,
            'email_verified_at' => now(),
            'password' => Hash::make(12345), // password
            'remember_token' => Str::random(10),
        ]);

         User::create([
            'name' =>'sobuj Ahmed',
            'email' => 'sobuj@gmail.com',
            'avatar_id'=>$avarar->id,
            'email_verified_at' => now(),
            'password' => Hash::make(12345), // password
            'remember_token' => Str::random(10),
        ]);

        $testToken = [
            'tokenable_type'=>'user',
            'tokenable_id'=>1,
            'name'=>'token-name',
            'token'=>'e36537a771426b980cd25aa3681b258dcb9728e6203960ebd8b52eca0f282a50',
            'abilities'=>json_encode(["*"]),
            'created_at'=>now(),
            'updated_at'=>now(),
        ];

        DB::table('personal_access_tokens')->insert($testToken);
        $this->call([
            PositionSeeder::class,
        ]);
  
        User::factory(100)->create();
        Category::factory(100)->create();
       
    }
}
