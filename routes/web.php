<?php

use App\Http\Controllers\Site\SiteController;
use App\Http\Controllers\Admin\SupportController;
use Illuminate\Support\Facades\Route;

Route::controller(SupportController::class)->group(function () {
    Route::prefix('/supports')->group(function () {
        Route::get('', 'index')->name('supports.index');
    });
});

Route::get('/contato', [SiteController::class, 'contact']);

Route::get('/', function () {
    return view('welcome');
});
