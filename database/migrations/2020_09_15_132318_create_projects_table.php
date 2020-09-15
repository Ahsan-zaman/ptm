<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('project_name');
            $table->string('project_category');
            $table->integer('price');
            $table->text('summary');
            $table->text('boq');
            $table->string('district', 64);
            $table->string('city', 64);
            $table->string('country', 64);
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->date('rfi_last_date');
            $table->boolean('public')->default(0);
            $table->integer('company_id');
            $table->integer('created_by');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
