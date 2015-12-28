<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImageDislikeableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_dislikeable', function(Blueprint $table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('dislikeable_id');
            $table->string('dislikeable_type');
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
        Schema::drop('image_dislikeable');
    }
}
