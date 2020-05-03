<?php

use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['guest:api']], function() {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('login/refresh', 'Auth\LoginController@refresh');
});

Route::group(['middleware' => ['jwt']], function() {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('me', 'Auth\LoginController@me');
    Route::put('profile', 'ProfileController@update');
});

Route::fallback(function(){
    return response()->json([
        'message' => 'Not Found: ' . request()->url()], 404);
});
