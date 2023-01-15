<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{


    CONST TITLES = [
        'Staff',
        'Marketing Specialist',
'Marketing Manager',
'Marketing Director',
'Graphic Designer',
'Marketing Research Analyst',
'Marketing Communications Manager',
'Marketing Consultant',
'Product Manager',
'Public Relations',
'Social Media Assistant',
'Brand Manager',
'SEO Manager',
'Content Marketing Manager',
'Copywriter',
'Media Buyer',
'Digital Marketing Manager',
'eCommerce Marketing Specialist',
'Brand Strategist',
'Vice President of Marketing',
'Media Relations Coordinator',
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (static::TITLES as $key=>$title) {
            $is_default = false;
            if(!$key){
                $is_default = true;
            }
            Position::create(compact('title','is_default'));
        }
    }
}
