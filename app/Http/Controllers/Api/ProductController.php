<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\StoreUpdateProductFormRequest;


class ProductController extends Controller
{
    private $product, $totalPage = 10;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }
    public function index(Product $product, Request $request)
    {
        return $product->getResults($request->all(), $this->totalPage);
    }

    public function store(Product $product, StoreUpdateProductFormRequest $request)
    {
        $product = $product->create($request->all());

        return response()->json($product, 201);
    }

    public function show($id)
    {
        return $this->product::findOrFail($id);
    }

    public function update(StoreUpdateProductFormRequest $request, $id)
    {
        $product = $this->product::findOrFail($id);

        $product->update($request->all());

        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = $this->product::findOrFail($id);

        $product->delete();

        return response()->json(['success => true'], 204);
    }
}
