<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'image', 'category_id'];

    public function getResults($filter, $totalPage)
    {
        if (!isset($filter['filter']) && !isset($filter['name']) && !isset($filter['description']) && !isset($filter['category_id']))
            return $this->orderBy('id', 'DESC')->paginate($totalPage);

        return $this->where(function ($query) use ($filter) {
            if (isset($filter['filter'])) {
                $filtro = $filter['filter'];
                $query->where('name', $filtro);
                $query->orWhere('description', 'LIKE', "%{$filtro}%");
            }

            if (isset($filter['name']))
                $query->where('name', $filter['name']);

            if (isset($filter['category_id']))
                $query->where('category_id', $filter['category_id']);

            if (isset($filter['description'])) {
                $description = $filter['description'];
                $query->where('description', 'LIKE', "%{$description}%");
            }
        })
            // ->toSql();dd($result);
            ->orderBy('id', 'DESC')
            ->paginate($totalPage);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
