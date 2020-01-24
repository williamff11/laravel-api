<?php

Route::POST('auth', 'Auth\AuthApiController@authenticate');
Route::POST('auth-refresh', 'Auth\AuthApiController@refreshToken');
Route::get('me', 'Auth\AuthApiController@getAuthenticatedUser');
Route::post('register', 'Auth\AuthApiController@register');
Route::put('update', 'Auth\AuthApiController@update');

//version1
Route::group([
    'prefix' => 'v1',
    'namespace' => 'Api\v1',
    // 'middleware' => 'auth:api'
], function () {
    Route::get('categories/{id}/products', 'CategoryController@products');
    Route::apiResource('categories', 'CategoryController');
    Route::apiResource('products', 'ProductController');
});
