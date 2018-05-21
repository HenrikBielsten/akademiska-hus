<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});



// Route::get('/admin/problem_reports', function () {
//
//     $problemReport = DB::table('problem_reports')->get();
//
//     return view('problem_report', ['problem_report' => $problemReport]);
// });

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
