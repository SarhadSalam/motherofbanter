<?php

use Illuminate\Database\Seeder;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $fakeUserLimit = 15;
        
        for($i = 4; $i <$fakeUserLimit; $i++)
        {
            DB::table('users')->insert([
                                           'id' => $i,
                                           'username' => $faker->unique()->username,
                                           'first_name'=>$faker->name,
                                           'last_name'=>$faker->name,
                                           'active'=>1,
                                           'email'=>$faker->unique()->email,
                                           'identifier'=>$faker->unique()->sha256
                                       ]);
        }
        
    }
}

