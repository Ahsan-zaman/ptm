<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('company_name');
            $table->string('company_name_native');
            $table->string('cr', 16);
            $table->string('vat', 16);
            $table->string('poc');
            $table->string('office_phone');
            $table->string('office_address');
        });

        DB::update("ALTER TABLE users AUTO_INCREMENT = 1000;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
