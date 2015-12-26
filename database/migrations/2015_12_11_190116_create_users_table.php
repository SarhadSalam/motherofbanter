<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function(Blueprint $table){
            $table->increments('id');
            $table->string('email');
            $table->string('username');
            $table->string('password', 60)->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('identifier')->unique();
            $table->string('location')->nullable();
            $table->boolean('active')->default(0);
            $table->string('activation_code')->nullable();
            $table->tinyInteger('resent_email_count')->unsigned()->nullable();
            $table->string('remember_token')->nullable();
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
        Schema::drop('users');
    }
}
