<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Requests\StoreUpdateCategoryFormRequest;

class CategoryController extends Controller
{
    private $category, $totalPage = 10;

    public function __contruct(Category $category)
    {
        $this->category = $category;

        $this->middleware('auth:api')->except([
            'index'
        ]);
    }

    public function index(Category $category, Request $request)
    {
        return $category->getResults($request->name);
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);

        return response()->json($category);
    }


    public function store(Category $category, StoreUpdateCategoryFormRequest $request)
    {
        $category = $category->create($request->all());

        return response()->json($category, 201);
    }

    public function update(StoreUpdateCategoryFormRequest $request, $id)
    {
        $category = Category::findOrFail($id);

        $category->update($request->all());

        return response()->json($category);
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        $category->delete();

        return response()->json(['success => true'], 204);
    }

    public function products($id)
    {
        $category = Category::findOrFail($id);

        $products = $category->products()->paginate($this->totalPage);

        return response()->json([
            'category' => $category,
            'products' => $products,
        ]);
    }
}
