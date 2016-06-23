<?php
/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('videos', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('user_id');
			$table->integer('parent_id')->nullable();
			$table->text('body')->nullable();
			$table->boolean('embedded_video');
			$table->string('url');
			$table->string('video_path');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('videos');
	}
}
