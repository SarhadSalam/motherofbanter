<?php
use Illuminate\Database\Seeder;
use Carbon\Carbon as Carbon;
use MotherOfBanter\Models\Image;
use MotherOfBanter\Models\ImageLikeable;
use MotherOfBanter\Models\User;

class LikeSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$likes = 100;
		$userId = 15;
		$faker = Faker\Factory::create();
		for ($l = 1 ; $l < $userId ; $l++) {
			$image = Image::where('id', $l)->first();
			DB::table('image_likeable')->insert([
													'user_id' => $l,
													'likeable_type' => 'MotherOfBanter\Models\Image',
													'likeable_id' => $l,
													'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
													'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
												]);
		}
	}

}
