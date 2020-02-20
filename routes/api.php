<?php


// auth
Route::group([
    'namespace' => 'Auth\Api',
], function () {
    Route::POST('auth', 'AuthApiController@authenticate');
    Route::POST('auth-refresh', 'AuthApiController@refreshToken');
    Route::get('me', 'AuthApiController@getAuthenticatedUser');
    Route::post('register', 'ProfileApiController@register');
    Route::put('update', 'ProfileApiController@update');
});


//version1
Route::group([
    'prefix' => 'v1',
    'namespace' => 'Api\v1',
    // 'middleware' => 'auth:api'
], function () {
    Route::get('categories/{id}/products', 'CategoryController@products');
    Route::apiResource('categories', 'CategoryController');
    Route::apiResource('products', 'ProductController');

    // Route::get('reports-products', 'ReportController@products');
});
