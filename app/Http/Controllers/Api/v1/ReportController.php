<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ReportController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api')->except(['products']);
    }

    public function products(Product $product)
    {
        $product = $product->get()->groupBy(function ($query) {
            return $query->created_at->format('m');
        });


        return $product;
    }
}
