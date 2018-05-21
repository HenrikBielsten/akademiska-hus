<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Buildings API
Route::get('buildings', 'BuildingsController@index');

Route::get('building/{id}', 'BuildingsController@show');


// Problem Report API

Route::get('problem_reports', 'ProblemReportsController@index');
Route::get('problem_report/{id}', 'ProblemReportsController@show');

Route::post('problem_report', 'ProblemReportsController@store');
