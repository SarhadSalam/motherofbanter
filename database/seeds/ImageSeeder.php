<?php

use Illuminate\Database\Seeder;
use MotherOfBanter\Models\User;
use Carbon\Carbon;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userId = 16;
		$faker = Faker\Factory::create();
		for($i = 2; $i<$userId; $i++)
		{
			$user = User::where('id', $i)->first();
			$image = 'uploads/statusImages/randomImages/'.$i.'.jpg';
			DB::table('images')->insert([
				'user_id'=>$i,
				'body' => $faker->text(30),
				'url' => $faker->slug,
				'image_path' => $image,
				'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
				'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
									   ]);
		}
    }
}
