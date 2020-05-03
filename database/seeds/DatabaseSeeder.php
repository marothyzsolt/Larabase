<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //$this->call();

        $data = [
            [
                'name' => "test name",
                'username' => "test",
                'email' => "test@test.com",
                'password' => Hash::make("test"),
                'remember_token' => Str::random(10),
            ]
        ];
        \App\User::insert($data);
    }
}
